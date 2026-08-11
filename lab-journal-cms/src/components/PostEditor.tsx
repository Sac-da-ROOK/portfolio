'use client';

import { ChangeEvent, FormEvent, useRef, useState } from 'react';

type PostStatus = 'Draft' | 'Published' | 'Scheduled' | 'Recalled';
export type AttachmentKind = 'image' | 'video' | 'document';

export interface AttachmentItem {
    id: string;
    name: string;
    kind: AttachmentKind;
    preview?: string;
}

const toolbarActions = [
    { label: 'Bold', command: 'bold', icon: 'B' },
    { label: 'Italic', command: 'italic', icon: 'I' },
    { label: 'Underline', command: 'underline', icon: 'U' },
    { label: 'Heading', command: 'formatBlock', value: 'h3', icon: 'H' },
    { label: 'Bullet list', command: 'insertUnorderedList', icon: '•' },
    { label: 'Numbered list', command: 'insertOrderedList', icon: '1.' },
    { label: 'Quote', command: 'formatBlock', value: 'blockquote', icon: '❝' },
];

type PostEditorProps = {
    initialTitle?: string;
    initialContent?: string;
    initialStatus?: PostStatus;
    initialAttachments?: AttachmentItem[];
    submitLabel?: string;
    onSave: (payload: { title: string; content: string; status: PostStatus; attachments: AttachmentItem[] }) => Promise<void> | void;
};

export default function PostEditor({
    initialTitle = 'Untitled document',
    initialContent = '<h3>Start writing your lab note</h3><p>Capture the experiment, the insight, and the next step.</p>',
    initialStatus = 'Draft',
    initialAttachments = [],
    submitLabel = 'Save to draft',
    onSave,
}: PostEditorProps) {
    const [title, setTitle] = useState(initialTitle);
    const [status, setStatus] = useState<PostStatus>(initialStatus);
    const [editorHtml, setEditorHtml] = useState(initialContent);
    const [attachments, setAttachments] = useState<AttachmentItem[]>(initialAttachments);
    const [isSaving, setIsSaving] = useState(false);
    const editorRef = useRef<HTMLDivElement | null>(null);
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const videoInputRef = useRef<HTMLInputElement | null>(null);
    const documentInputRef = useRef<HTMLInputElement | null>(null);

    const applyFormat = (command: string, value?: string) => {
        editorRef.current?.focus();
        document.execCommand(command, false, value);
        setEditorHtml(editorRef.current?.innerHTML ?? '');
    };

    const handleFileSelection = async (kind: 'image' | 'video' | 'document', event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files ?? []);
        if (!files.length) {
            return;
        }

        const nextItems = await Promise.all(
            files.map((file) => {
                if (kind === 'image') {
                    return new Promise<AttachmentItem>((resolve) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            resolve({ id: `${Date.now()}-${file.name}`, name: file.name, kind, preview: reader.result as string });
                        };
                        reader.readAsDataURL(file);
                    });
                }

                return Promise.resolve({ id: `${Date.now()}-${file.name}`, name: file.name, kind });
            })
        );

        setAttachments((previous) => [...nextItems, ...previous]);
        event.target.value = '';
    };

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSaving(true);
        await onSave({ title, content: editorHtml, status, attachments });
        setIsSaving(false);
    }

    return (
        <main className="container" style={{ padding: '2rem 0 4rem' }}>
            <section className="editor-shell card">
                <div className="editor-header">
                    <div>
                        <p className="editor-eyebrow">Google Docs-style editor</p>
                        <h1 className="editor-title">Create a new journal entry</h1>
                        <p className="editor-subtitle">Write, style, and attach media in one place before publishing.</p>
                    </div>
                    <div className="editor-actions">
                        <select value={status} onChange={(event) => setStatus(event.target.value as PostStatus)} className="editor-select">
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                            <option value="Scheduled">Scheduled</option>
                            <option value="Recalled">Recalled</option>
                        </select>
                        <button type="submit" form="editor-form" className="editor-primary-button" disabled={isSaving}>
                            {isSaving ? 'Saving…' : submitLabel}
                        </button>
                    </div>
                </div>

                <form id="editor-form" onSubmit={handleSubmit} className="editor-form">
                    <div className="editor-toolbar">
                        <input value={title} onChange={(event) => setTitle(event.target.value)} className="editor-title-input" placeholder="Document title" />
                        <div className="toolbar-group">
                            {toolbarActions.map((action) => (
                                <button key={action.label} type="button" className="toolbar-button" onClick={() => applyFormat(action.command, action.value)} title={action.label}>
                                    {action.icon}
                                </button>
                            ))}
                        </div>
                        <div className="toolbar-group">
                            <button type="button" className="toolbar-button" onClick={() => imageInputRef.current?.click()} title="Add photo">📷</button>
                            <button type="button" className="toolbar-button" onClick={() => videoInputRef.current?.click()} title="Add video">🎬</button>
                            <button type="button" className="toolbar-button" onClick={() => documentInputRef.current?.click()} title="Add document">📄</button>
                        </div>
                    </div>

                    <div className="editor-surface" contentEditable suppressContentEditableWarning ref={editorRef} dangerouslySetInnerHTML={{ __html: editorHtml }} onInput={(event) => setEditorHtml((event.target as HTMLDivElement).innerHTML)} />

                    <div className="attachment-panel">
                        <div className="attachment-header">
                            <h2>Attached media</h2>
                            <p>Photos, videos, and documents stay right alongside the draft.</p>
                        </div>
                        <div className="attachment-list">
                            {attachments.length === 0 ? (
                                <div className="attachment-empty">Add a photo, video, or document to enrich the entry.</div>
                            ) : (
                                attachments.map((item) => (
                                    <div key={item.id} className="attachment-card">
                                        {item.kind === 'image' && item.preview ? (
                                            <img src={item.preview} alt={item.name} className="attachment-preview" />
                                        ) : (
                                            <div className="attachment-placeholder">{item.kind === 'video' ? '🎬' : '📄'}</div>
                                        )}
                                        <div>
                                            <div className="attachment-name">{item.name}</div>
                                            <div className="attachment-kind">{item.kind}</div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <input ref={imageInputRef} type="file" accept="image/*" className="sr-only" onChange={(event) => handleFileSelection('image', event)} />
                    <input ref={videoInputRef} type="file" accept="video/*" className="sr-only" onChange={(event) => handleFileSelection('video', event)} />
                    <input ref={documentInputRef} type="file" className="sr-only" onChange={(event) => handleFileSelection('document', event)} />
                </form>
            </section>
        </main>
    );
}
