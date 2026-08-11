module.exports = [
"[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewPostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
        icon: '1.'
    },
    {
        label: 'Quote',
        command: 'formatBlock',
        value: 'blockquote',
        icon: '❝'
    }
];
function NewPostPageContent() {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Untitled document');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Draft');
    const [editorHtml, setEditorHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('<h3>Start writing your lab note</h3><p>Capture the experiment, the insight, and the next step.</p>');
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const documentInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const postId = searchParams.get('postId');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!postId) {
            return;
        }
        async function loadPost() {
            const response = await fetch(`/api/posts/${postId}`);
            if (!response.ok) {
                return;
            }
            const post = await response.json();
            setTitle(post.title ?? 'Untitled document');
            setStatus(post.status ?? 'Draft');
            setEditorHtml(post.content ?? '<h3>Start writing your lab note</h3><p>Capture the experiment, the insight, and the next step.</p>');
            setAttachments(post.attachments ?? []);
        }
        loadPost();
    }, [
        postId
    ]);
    const applyFormat = (command, value)=>{
        editorRef.current?.focus();
        document.execCommand(command, false, value);
        setEditorHtml(editorRef.current?.innerHTML ?? '');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        style: {
            padding: '2rem 0 4rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "editor-shell card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "editor-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "editor-eyebrow",
                                    children: "Google Docs-style editor"
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "editor-title",
                                    children: postId ? 'Edit journal entry' : 'Create a new journal entry'
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "editor-subtitle",
                                    children: "Write, style, and attach media in one place before publishing."
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: status,
                                    onChange: (event)=>setStatus(event.target.value),
                                    className: "editor-select",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Draft",
                                            children: "Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Published",
                                            children: "Published"
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Scheduled",
                                            children: "Scheduled"
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    form: "editor-form",
                                    className: "editor-primary-button",
                                    disabled: isSaving,
                                    children: isSaving ? 'Saving…' : 'Save to draft'
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: "editor-form",
                    onSubmit: handleSubmit,
                    className: "editor-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-toolbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: title,
                                    onChange: (event)=>setTitle(event.target.value),
                                    className: "editor-title-input",
                                    placeholder: "Document title"
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group",
                                    children: toolbarActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>applyFormat(action.command, action.value),
                                            title: action.label,
                                            children: action.icon
                                        }, action.label, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>imageInputRef.current?.click(),
                                            title: "Add photo",
                                            children: "📷"
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>videoInputRef.current?.click(),
                                            title: "Add video",
                                            children: "🎬"
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "toolbar-button",
                                            onClick: ()=>documentInputRef.current?.click(),
                                            title: "Add document",
                                            children: "📄"
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-surface",
                            contentEditable: true,
                            suppressContentEditableWarning: true,
                            ref: editorRef,
                            dangerouslySetInnerHTML: {
                                __html: editorHtml
                            },
                            onInput: (event)=>setEditorHtml(event.target.innerHTML)
                        }, void 0, false, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "attachment-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "attachment-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Attached media"
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Photos, videos, and documents stay right alongside the draft."
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "attachment-list",
                                    children: attachments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "attachment-empty",
                                        children: "Add a photo, video, or document to enrich the entry."
                                    }, void 0, false, {
                                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this) : attachments.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "attachment-card",
                                            children: [
                                                item.kind === 'image' && item.preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.preview,
                                                    alt: item.name,
                                                    className: "attachment-preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "attachment-placeholder",
                                                    children: item.kind === 'video' ? '🎬' : '📄'
                                                }, void 0, false, {
                                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "attachment-name",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "attachment-kind",
                                                            children: item.kind
                                                        }, void 0, false, {
                                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 164,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: imageInputRef,
                            type: "file",
                            accept: "image/*",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('image', event)
                        }, void 0, false, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: videoInputRef,
                            type: "file",
                            accept: "video/*",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('video', event)
                        }, void 0, false, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: documentInputRef,
                            type: "file",
                            className: "sr-only",
                            onChange: (event)=>handleFileSelection('document', event)
                        }, void 0, false, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                            lineNumber: 192,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 126,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
        lineNumber: 125,
        columnNumber: 9
    }, this);
}
function NewPostPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            style: {
                padding: '2rem 0 4rem'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: '2rem'
                },
                children: "Loading editor…"
            }, void 0, false, {
                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
                lineNumber: 201,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 201,
            columnNumber: 29
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NewPostPageContent, {}, void 0, false, {
            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
            lineNumber: 202,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/new/page.tsx",
        lineNumber: 201,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=lab-journal-cms_src_app_%28dashboard%29_dashboard_new_page_tsx_1kixpck._.js.map