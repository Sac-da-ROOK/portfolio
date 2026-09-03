module.exports = [
"[project]/src/app/(dashboard)/dashboard/new/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewPostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const toolbarActions = [
    {
        label: 'Bold',
        command: 'bold',
        icon: 'B'
    },
    {
        label: 'Italic',
        command: 'italic',
        icon: 'I'
    },
    {
        label: 'Underline',
        command: 'underline',
        icon: 'U'
    },
    {
        label: 'Heading',
        command: 'formatBlock',
        value: 'h3',
        icon: 'H'
    },
    {
        label: 'Bullet list',
        command: 'insertUnorderedList',
        icon: '•'
    },
    {
        label: 'Numbered list',
        command: 'insertOrderedList',
        icon: '1'
    },
    {
        label: 'Quote',
        command: 'formatBlock',
        value: 'blockquote',
        icon: '❝'
    }
];
const textColorOptions = [
    '#111827',
    '#d97706',
    '#ef4444',
    '#2563eb',
    '#16a34a',
    '#a855f7',
    '#f43f5e',
    '#f8fafc'
];
const highlightOptions = [
    '#fef3c7',
    '#dcfce7',
    '#dbeafe',
    '#fce7f3',
    '#f5d0fe',
    '#fed7aa',
    '#fee2e2'
];
const fontSizeOptions = [
    {
        label: 'Size',
        value: ''
    },
    {
        label: 'Small',
        value: '1'
    },
    {
        label: 'Normal',
        value: '3'
    },
    {
        label: 'Large',
        value: '5'
    },
    {
        label: 'XL',
        value: '6'
    }
];
function NewPostPageContent() {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Untitled article');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Draft');
    const [editorHtml, setEditorHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('<h3>Start writing</h3><p>Capture the idea, the experiment, and the next step.</p>');
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linkUrl, setLinkUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('https://');
    const [linkText, setLinkText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [editorDirection, setEditorDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ltr');
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const documentInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const postId = searchParams.get('postId');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        postId
    ]);
    const applyFormat = (command, value)=>{
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
    const applyTextColor = (color)=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.focus();
        document.execCommand('foreColor', false, color);
        setEditorHtml(editor.innerHTML);
    };
    const applyHighlight = (color)=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.focus();
        document.execCommand('hiliteColor', false, color);
        setEditorHtml(editor.innerHTML);
    };
    const applyTextSize = (size)=>{
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
    const applyAlignment = (alignment)=>{
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
    const removeFormatting = ()=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.focus();
        document.execCommand('removeFormat', false, undefined);
        document.execCommand('unlink', false, undefined);
        setEditorHtml(editor.innerHTML);
    };
    const toggleEditorDirection = ()=>{
        const nextDirection = editorDirection === 'ltr' ? 'rtl' : 'ltr';
        setEditorDirection(nextDirection);
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        editor.setAttribute('dir', nextDirection);
        editor.style.direction = nextDirection;
        editor.style.textAlign = nextDirection === 'ltr' ? 'left' : 'right';
    };
    const applyLink = ()=>{
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        const urlInput = document.querySelector('.toolbar-link-input[aria-label="Link URL"]');
        const labelInput = document.querySelector('.toolbar-link-input[aria-label="Link label"]');
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
            editor.insertAdjacentHTML('beforeend', `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`);
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
    const handleFileSelection = async (kind, event)=>{
        const files = Array.from(event.target.files ?? []);
        if (!files.length) {
            return;
        }
        const newItems = await Promise.all(files.map((file)=>{
            if (kind === 'image') {
                return new Promise((resolve)=>{
                    const reader = new FileReader();
                    reader.onload = ()=>{
                        resolve({
                            id: `${Date.now()}-${file.name}`,
                            name: file.name,
                            kind,
                            preview: reader.result
                        });
                    };
                    reader.readAsDataURL(file);
                });
            }
            return Promise.resolve({
                id: `${Date.now()}-${file.name}`,
                name: file.name,
                kind
            });
        }));
        setAttachments((previous)=>[
                ...newItems,
                ...previous
            ]);
        event.target.value = '';
    };
    async function handleSubmit(event) {
        event.preventDefault();
        setIsSaving(true);
        const payload = {
            title,
            content: editorHtml,
            status,
            attachments
        };
        const response = postId ? await fetch(`/api/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'update',
                ...payload
            })
        }) : await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            router.push('/dashboard');
        }
        setIsSaving(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        style: {
            padding: '2rem 0 4rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "editor-shell card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "editor-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "editor-eyebrow",
                                    children: "Writing editor"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "editor-title",
                                    children: postId ? 'Edit article' : 'Write a new article'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "editor-subtitle",
                                    children: "Write, format, and add media before publishing."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 295,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: status,
                                    onChange: (event)=>setStatus(event.target.value),
                                    className: "editor-select",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Draft",
                                            children: "Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Published",
                                            children: "Published"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Scheduled",
                                            children: "Scheduled"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    form: "editor-form",
                                    className: "editor-primary-button",
                                    disabled: isSaving,
                                    children: isSaving ? 'Saving…' : 'Save draft'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                    lineNumber: 294,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: "editor-form",
                    onSubmit: handleSubmit,
                    className: "editor-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-toolbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: title,
                                    onChange: (event)=>setTitle(event.target.value),
                                    className: "editor-title-input",
                                    placeholder: "Article title",
                                    dir: "ltr",
                                    style: {
                                        direction: 'ltr',
                                        textAlign: 'left'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group",
                                    children: [
                                        toolbarActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "toolbar-button",
                                                onClick: ()=>applyFormat(action.command, action.value),
                                                title: action.label,
                                                children: action.icon
                                            }, action.label, false, {
                                                fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "toolbar-select",
                                            value: "",
                                            onChange: (event)=>applyTextSize(event.target.value),
                                            "aria-label": "Text size",
                                            title: "Text size",
                                            children: fontSizeOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.value,
                                                    children: option.label
                                                }, option.label, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>applyAlignment('left'),
                                            title: "Align left",
                                            children: "⇤"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>applyAlignment('center'),
                                            title: "Align center",
                                            children: "⇥"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>applyAlignment('right'),
                                            title: "Align right",
                                            children: "⇥"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: removeFormatting,
                                            title: "Remove formatting",
                                            children: "⌫"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: toggleEditorDirection,
                                            title: `Set ${editorDirection === 'ltr' ? 'RTL' : 'LTR'} direction`,
                                            children: editorDirection === 'ltr' ? 'LTR' : 'RTL'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toolbar-link-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "toolbar-button",
                                                    onClick: applyLink,
                                                    title: "Insert link",
                                                    children: "🔗"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "url",
                                                    value: linkUrl,
                                                    onChange: (event)=>setLinkUrl(event.target.value),
                                                    className: "toolbar-link-input",
                                                    placeholder: "https://example.com",
                                                    "aria-label": "Link URL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: linkText,
                                                    onChange: (event)=>setLinkText(event.target.value),
                                                    className: "toolbar-link-input toolbar-link-label",
                                                    placeholder: "Link label",
                                                    "aria-label": "Link label"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group toolbar-group-inline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "toolbar-label",
                                            children: "Text"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 29
                                        }, this),
                                        textColorOptions.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "toolbar-color-swatch",
                                                onClick: ()=>applyTextColor(color),
                                                title: `Text color: ${color}`,
                                                "aria-label": `Text color: ${color}`,
                                                style: {
                                                    backgroundColor: color
                                                }
                                            }, color, false, {
                                                fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group toolbar-group-inline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "toolbar-label",
                                            children: "Highlight"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 29
                                        }, this),
                                        highlightOptions.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "toolbar-color-swatch",
                                                onClick: ()=>applyHighlight(color),
                                                title: `Highlight: ${color}`,
                                                "aria-label": `Highlight: ${color}`,
                                                style: {
                                                    backgroundColor: color
                                                }
                                            }, color, false, {
                                                fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>imageInputRef.current?.click(),
                                            title: "Add photo",
                                            children: "📷"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 393,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>videoInputRef.current?.click(),
                                            title: "Add video",
                                            children: "🎬"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>documentInputRef.current?.click(),
                                            title: "Add document",
                                            children: "📄"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 313,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-surface",
                            dir: editorDirection,
                            style: {
                                direction: editorDirection,
                                textAlign: editorDirection === 'ltr' ? 'left' : 'right',
                                unicodeBidi: 'plaintext'
                            },
                            contentEditable: true,
                            suppressContentEditableWarning: true,
                            ref: editorRef,
                            dangerouslySetInnerHTML: {
                                __html: editorHtml
                            },
                            onInput: (event)=>setEditorHtml(event.target.innerHTML)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 399,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "attachment-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "attachment-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Media"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Images, video, and documents stay with the article."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "attachment-list",
                                    children: attachments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "attachment-empty",
                                        children: "Add a photo, video, or document to enrich the article."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                        lineNumber: 421,
                                        columnNumber: 33
                                    }, this) : attachments.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "attachment-card",
                                            children: [
                                                item.kind === 'image' && item.preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.preview,
                                                    alt: item.name,
                                                    className: "attachment-preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "attachment-placeholder",
                                                    children: item.kind === 'video' ? '🎬' : '📄'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "attachment-name",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "attachment-kind",
                                                            children: item.kind
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 414,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: imageInputRef,
                            type: "file",
                            accept: "image/*",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('image', event)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 440,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: videoInputRef,
                            type: "file",
                            accept: "video/*",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('video', event)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 441,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: documentInputRef,
                            type: "file",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('document', event)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 442,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                    lineNumber: 312,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 293,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
        lineNumber: 292,
        columnNumber: 9
    }, this);
}
function NewPostPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            style: {
                padding: '2rem 0 4rem'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: '2rem'
                },
                children: "Loading editor…"
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
                lineNumber: 451,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 451,
            columnNumber: 29
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NewPostPageContent, {}, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 452,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/dashboard/new/page.tsx",
        lineNumber: 451,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_%28dashboard%29_dashboard_new_page_tsx_1-5z2p-._.js.map