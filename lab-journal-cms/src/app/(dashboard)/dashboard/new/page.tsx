'use client';

import { Suspense, ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type PostStatus = 'Draft' | 'Published' | 'Scheduled';
type AttachmentKind = 'image' | 'video' | 'document';

type AttachmentItem = {
    id: string;
    name: string;
    kind: AttachmentKind;
    preview?: string;
};

const toolbarActions = [
    { label: 'Bold', command: 'bold', icon: 'B' },
    { label: 'Italic', command: 'italic', icon: 'I' },
    { label: 'Underline', command: 'underline', icon: 'U' },
    { label: 'Heading', command: 'formatBlock', value: 'h3', icon: 'H' },
    { label: 'Bullet list', command: 'insertUnorderedList', icon: '•' },
    { label: 'Numbered list', command: 'insertOrderedList', icon: '1' },
    { label: 'Quote', command: 'formatBlock', value: 'blockquote', icon: '❝' },
];

const textColorOptions = ['#111827', '#d97706', '#ef4444', '#2563eb', '#16a34a', '#a855f7', '#f43f5e', '#f8fafc'];
const highlightOptions = ['#fef3c7', '#dcfce7', '#dbeafe', '#fce7f3', '#f5d0fe', '#fed7aa', '#fee2e2'];
const fontSizeOptions = [
    { label: 'Size', value: '' },
    { label: 'Small', value: '1' },
    { label: 'Normal', value: '3' },
    { label: 'Large', value: '5' },
    { label: 'XL', value: '6' },
];

function NewPostPageContent() {
    const [title, setTitle] = useState('Untitled article');
    const [status, setStatus] = useState<PostStatus>('Draft');
    const [editorHtml, setEditorHtml] = useState('<h3>Start writing</h3><p>Capture the idea, the experiment, and the next step.</p>');
    const [attachments, setAttachments] = useState<AttachmentItem[]>([]);
    const [linkUrl, setLinkUrl] = useState('https://');
    const [linkText, setLinkText] = useState('');
    const [editorDirection, setEditorDirection] = useState<'ltr' | 'rtl'>('ltr');
    const [isSaving, setIsSaving] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const editorRef = useRef<HTMLDivElement | null>(null);
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const videoInputRef = useRef<HTMLInputElement | null>(null);
    const documentInputRef = useRef<HTMLInputElement | null>(null);

    const postId = searchParams.get('postId');

    useEffect(() => {
        if (!postId) {
            return;
        }

        async function loadPost() {
            const response = await fetch(`/api/posts/${postId}`);
            if (!response.ok) {
                return;
            }

            const post = await response.json();
            setTitle(post.title ?? 'Untitled article');
            setStatus(post.status ?? 'Draft');
            setEditorHtml(post.content ?? '<h3>Start writing</h3><p>Capture the idea, the experiment, and the next step.</p>');
            setAttachments(post.attachments ?? []);
        }

        loadPost();
    }, [postId]);

    const applyFormat = (command: string, value?: string) => {
        const editor = editorRef.current;
        if (!editor) {
            return;
        }

        const selection = window.getSelection();
        const range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;

        editor.focus();
        document.execCommand(command, false, value);

        if (editor && range) {
            editor.focus();
            const nextSelection = window.getSelection();
            if (nextSelection && nextSelection.rangeCount === 0) {
                nextSelection.removeAllRanges();
                nextSelection.addRange(range);
            }
        }

        setEditorHtml(editor.innerHTML);
    };

    const applyTextColor = (color: string) => {
        const editor = editorRef.current;
        if (!editor) {
            return;
        }

        editor.focus();
        document.execCommand('foreColor', false, color);
        setEditorHtml(editor.innerHTML);
    };

    const applyHighlight = (color: string) => {
        const editor = editorRef.current;
        if (!editor) {
            return;
        }

        editor.focus();
        document.execCommand('hiliteColor', false, color);
        setEditorHtml(editor.innerHTML);
    };

    const applyTextSize = (size: string) => {
        if (!size) {
            return;
        }

        const editor = editorRef.current;
        if (!editor) {
            return;
        }

        editor.focus();
        document.execCommand('fontSize', false, size);
        setEditorHtml(editor.innerHTML);
    };

    const applyAlignment = (alignment: 'left' | 'center' | 'right') => {
        const editor = editorRef.current;
        if (!editor) {
            return;
        }

        editor.focus();
        if (alignment === 'left') {
            document.execCommand('justifyLeft', false, undefined);
        }
        if (alignment === 'center') {
            document.execCommand('justifyCenter', false, undefined);
        }
        if (alignment === 'right') {
            document.execCommand('justifyRight', false, undefined);
        }

        setEditorHtml(editor.innerHTML);
    };

    const removeFormatting = () => {
        const editor = editorRef.current;
        if (!editor) {
            return;
        }

        editor.focus();
        document.execCommand('removeFormat', false, undefined);
        document.execCommand('unlink', false, undefined);
        setEditorHtml(editor.innerHTML);
    };

    const toggleEditorDirection = () => {
        const nextDirection: 'ltr' | 'rtl' = editorDirection === 'ltr' ? 'rtl' : 'ltr';
        setEditorDirection(nextDirection);

        const editor = editorRef.current;
        if (!editor) {
            return;
        }

        editor.setAttribute('dir', nextDirection);
        editor.style.direction = nextDirection;
        editor.style.textAlign = nextDirection === 'ltr' ? 'left' : 'right';
    };

    const applyLink = () => {
        const editor = editorRef.current;
        if (!editor) {
            return;
        }

        const urlInput = document.querySelector<HTMLInputElement>('.toolbar-link-input[aria-label="Link URL"]');
        const labelInput = document.querySelector<HTMLInputElement>('.toolbar-link-input[aria-label="Link label"]');
        const selection = window.getSelection();
        const selectedText = selection?.toString().trim() ?? '';
        const urlValue = (urlInput?.value ?? linkUrl).trim();

        if (!urlValue) {
            return;
        }

        const safeUrl = /^https?:\/\//i.test(urlValue) ? urlValue : `https://${urlValue}`;
        editor.focus();

        if (selection && selection.rangeCount > 0 && selectedText) {
            const range = selection.getRangeAt(0);
            const anchor = document.createElement('a');
            anchor.href = safeUrl;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
            anchor.textContent = selectedText;

            range.deleteContents();
            range.insertNode(anchor);
            selection.removeAllRanges();
            const newRange = document.createRange();
            newRange.selectNodeContents(anchor);
            selection.addRange(newRange);
        } else {
            const text = ((labelInput?.value ?? linkText) || 'Learn more').trim() || 'Learn more';
            editor.insertAdjacentHTML(
                'beforeend',
                `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`
            );
        }

        if (urlInput) {
            urlInput.value = 'https://';
        }
        if (labelInput) {
            labelInput.value = '';
        }

        setLinkUrl('https://');
        setLinkText('');
        setEditorHtml(editor.innerHTML);
    };

    const handleFileSelection = async (kind: AttachmentKind, event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files ?? []);
        if (!files.length) {
            return;
        }

        const newItems = await Promise.all(
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

        setAttachments((previous) => [...newItems, ...previous]);
        event.target.value = '';
    };

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSaving(true);

        const payload = {
            title,
            content: editorHtml,
            status,
            attachments,
        };

        const response = postId
            ? await fetch(`/api/posts/${postId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'update', ...payload }),
            })
            : await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

        if (response.ok) {
            router.push('/dashboard');
        }

        setIsSaving(false);
    }

    return (
        <main className="container" style={{ padding: '2rem 0 4rem' }}>
            <section className="editor-shell card">
                <div className="editor-header">
                    <div>
                        <p className="editor-eyebrow">Writing editor</p>
                        <h1 className="editor-title">{postId ? 'Edit article' : 'Write a new article'}</h1>
                        <p className="editor-subtitle">Write, format, and add media before publishing.</p>
                    </div>
                    <div className="editor-actions">
                        <select value={status} onChange={(event) => setStatus(event.target.value as PostStatus)} className="editor-select">
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                            <option value="Scheduled">Scheduled</option>
                        </select>
                        <button type="submit" form="editor-form" className="editor-primary-button" disabled={isSaving}>
                            {isSaving ? 'Saving…' : 'Save draft'}
                        </button>
                    </div>
                </div>

                <form id="editor-form" onSubmit={handleSubmit} className="editor-form">
                    <div className="editor-toolbar">
                        <input
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            className="editor-title-input"
                            placeholder="Article title"
                            dir="ltr"
                            style={{ direction: 'ltr', textAlign: 'left' }}
                        />
                        <div className="toolbar-group">
                            {toolbarActions.map((action) => (
                                <button key={action.label} type="button" className="toolbar-button" onClick={() => applyFormat(action.command, action.value)} title={action.label}>
                                    {action.icon}
                                </button>
                            ))}
                            <select
                                className="toolbar-select"
                                value=""
                                onChange={(event) => applyTextSize(event.target.value)}
                                aria-label="Text size"
                                title="Text size"
                            >
                                {fontSizeOptions.map((option) => (
                                    <option key={option.label} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                            <button type="button" className="toolbar-button" onClick={() => applyAlignment('left')} title="Align left">⇤</button>
                            <button type="button" className="toolbar-button" onClick={() => applyAlignment('center')} title="Align center">⇥</button>
                            <button type="button" className="toolbar-button" onClick={() => applyAlignment('right')} title="Align right">⇥</button>
                            <button type="button" className="toolbar-button" onClick={removeFormatting} title="Remove formatting">⌫</button>
                            <button type="button" className="toolbar-button" onClick={toggleEditorDirection} title={`Set ${editorDirection === 'ltr' ? 'RTL' : 'LTR'} direction`}>{editorDirection === 'ltr' ? 'LTR' : 'RTL'}</button>
                            <div className="toolbar-link-group">
                                <button type="button" className="toolbar-button" onClick={applyLink} title="Insert link">🔗</button>
                                <input
                                    type="url"
                                    value={linkUrl}
                                    onChange={(event) => setLinkUrl(event.target.value)}
                                    className="toolbar-link-input"
                                    placeholder="https://example.com"
                                    aria-label="Link URL"
                                />
                                <input
                                    type="text"
                                    value={linkText}
                                    onChange={(event) => setLinkText(event.target.value)}
                                    className="toolbar-link-input toolbar-link-label"
                                    placeholder="Link label"
                                    aria-label="Link label"
                                />
                            </div>
                        </div>
                        <div className="toolbar-group toolbar-group-inline">
                            <span className="toolbar-label">Text</span>
                            {textColorOptions.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    className="toolbar-color-swatch"
                                    onClick={() => applyTextColor(color)}
                                    title={`Text color: ${color}`}
                                    aria-label={`Text color: ${color}`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        <div className="toolbar-group toolbar-group-inline">
                            <span className="toolbar-label">Highlight</span>
                            {highlightOptions.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    className="toolbar-color-swatch"
                                    onClick={() => applyHighlight(color)}
                                    title={`Highlight: ${color}`}
                                    aria-label={`Highlight: ${color}`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        <div className="toolbar-group">
                            <button type="button" className="toolbar-button" onClick={() => imageInputRef.current?.click()} title="Add photo">📷</button>
                            <button type="button" className="toolbar-button" onClick={() => videoInputRef.current?.click()} title="Add video">🎬</button>
                            <button type="button" className="toolbar-button" onClick={() => documentInputRef.current?.click()} title="Add document">📄</button>
                        </div>
                    </div>

                    <div
                        className="editor-surface"
                        dir={editorDirection}
                        style={{
                            direction: editorDirection,
                            textAlign: editorDirection === 'ltr' ? 'left' : 'right',
                            unicodeBidi: 'plaintext',
                        }}
                        contentEditable
                        suppressContentEditableWarning
                        ref={editorRef}
                        dangerouslySetInnerHTML={{ __html: editorHtml }}
                        onInput={(event) => setEditorHtml((event.target as HTMLDivElement).innerHTML)}
                    />

                    <div className="attachment-panel">
                        <div className="attachment-header">
                            <h2>Media</h2>
                            <p>Images, video, and documents stay with the article.</p>
                        </div>
                        <div className="attachment-list">
                            {attachments.length === 0 ? (
                                <div className="attachment-empty">Add a photo, video, or document to enrich the article.</div>
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

export default function NewPostPage() {
    return (
        <Suspense fallback={<main className="container" style={{ padding: '2rem 0 4rem' }}><div className="card" style={{ padding: '2rem' }}>Loading editor…</div></main>}>
            <NewPostPageContent />
        </Suspense>
    );
}
