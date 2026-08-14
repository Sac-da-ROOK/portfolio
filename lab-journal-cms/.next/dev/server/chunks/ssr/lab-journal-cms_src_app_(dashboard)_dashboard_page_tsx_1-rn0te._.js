module.exports = [
"[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function DashboardPage() {
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activePostId, setActivePostId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recallCode, setRecallCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('123456');
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const loadPosts = async ()=>{
        const response = await fetch('/api/posts');
        if (response.ok) {
            const data = await response.json();
            setPosts(data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadPosts();
    }, []);
    const filteredPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const normalized = query.trim().toLowerCase();
        if (!normalized) {
            return posts;
        }
        return posts.filter((post)=>{
            const haystack = `${post.title} ${post.content} ${post.status}`.toLowerCase();
            return haystack.includes(normalized);
        });
    }, [
        posts,
        query
    ]);
    const openPostOptions = (postId)=>{
        setActivePostId((current)=>current === postId ? null : postId);
        setFeedback('');
    };
    const publishPost = async (postId)=>{
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'publish'
            })
        });
        if (response.ok) {
            await loadPosts();
            setActivePostId(null);
            setFeedback('Article published successfully.');
        }
    };
    const recallPost = async (postId)=>{
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'recall',
                code: recallCode
            })
        });
        if (response.ok) {
            await loadPosts();
            setActivePostId(null);
            setRecallCode('');
            setFeedback('Article recalled and subscribers notified.');
        } else {
            const error = await response.json().catch(()=>({
                    error: 'Unable to recall article.'
                }));
            setFeedback(error.error || 'Unable to recall article.');
        }
    };
    const deletePost = async (postId)=>{
        const confirmed = window.confirm('Delete this article? This action cannot be undone.');
        if (!confirmed) {
            return;
        }
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            await loadPosts();
            setActivePostId(null);
            setFeedback('Article deleted successfully.');
        } else {
            const error = await response.json().catch(()=>({
                    error: 'Unable to delete article.'
                }));
            setFeedback(error.error || 'Unable to delete article.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        style: {
            padding: '3rem 0 5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.25em',
                                    color: '#8fb3ff'
                                },
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: '0.3rem 0 0',
                                    fontSize: '2rem'
                                },
                                children: "Manage journal content"
                            }, void 0, false, {
                                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/new",
                        style: {
                            padding: '0.8rem 1rem',
                            borderRadius: 999,
                            background: '#22c55e',
                            color: '#07111f',
                            fontWeight: 700
                        },
                        children: "New post"
                    }, void 0, false, {
                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    display: 'grid',
                    gap: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: query,
                        onChange: (event)=>setQuery(event.target.value),
                        placeholder: "Search titles, content, or status",
                        style: {
                            padding: '0.8rem 1rem',
                            borderRadius: 12,
                            border: '1px solid rgba(255,255,255,0.12)',
                            background: '#0f172a',
                            color: 'white'
                        }
                    }, void 0, false, {
                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this),
                    feedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#8fb3ff'
                        },
                        children: feedback
                    }, void 0, false, {
                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 115,
                        columnNumber: 29
                    }, this) : null,
                    filteredPosts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: '1px dashed rgba(255,255,255,0.16)',
                            borderRadius: 16,
                            padding: '1.2rem',
                            color: '#cbd5e1'
                        },
                        children: "No journal entries yet. Save a draft and it will appear here instantly."
                    }, void 0, false, {
                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, this) : filteredPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: 16,
                                padding: '1rem',
                                display: 'grid',
                                gap: '0.8rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        gap: '1rem',
                                        alignItems: 'center',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 700
                                                    },
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#cbd5e1',
                                                        marginTop: '0.25rem'
                                                    },
                                                    children: post.createdAt
                                                }, void 0, false, {
                                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                padding: '0.35rem 0.7rem',
                                                borderRadius: 999,
                                                background: 'rgba(255,255,255,0.1)',
                                                color: '#f7f7f2'
                                            },
                                            children: post.status
                                        }, void 0, false, {
                                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '0.75rem',
                                        flexWrap: 'wrap'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openPostOptions(post.id),
                                        style: {
                                            padding: '0.65rem 0.9rem',
                                            borderRadius: 999,
                                            background: 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            cursor: 'pointer'
                                        },
                                        children: "Manage"
                                    }, void 0, false, {
                                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                activePostId === post.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gap: '0.75rem',
                                        borderTop: '1px solid rgba(255,255,255,0.1)',
                                        paddingTop: '0.8rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '0.75rem',
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/dashboard/new?postId=${post.id}`,
                                                style: {
                                                    padding: '0.65rem 0.9rem',
                                                    borderRadius: 999,
                                                    background: '#8fb3ff',
                                                    color: '#07111f',
                                                    fontWeight: 700
                                                },
                                                children: "Open in editor"
                                            }, void 0, false, {
                                                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 41
                                            }, this),
                                            post.status === 'Published' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gap: '0.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: recallCode,
                                                        onChange: (event)=>setRecallCode(event.target.value),
                                                        placeholder: "Demo code: 123456",
                                                        style: {
                                                            padding: '0.7rem 0.9rem',
                                                            borderRadius: 12,
                                                            border: '1px solid rgba(255,255,255,0.12)',
                                                            background: '#0f172a',
                                                            color: 'white'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>recallPost(post.id),
                                                        style: {
                                                            padding: '0.65rem 0.9rem',
                                                            borderRadius: 999,
                                                            background: '#f59e0b',
                                                            color: '#07111f',
                                                            fontWeight: 700,
                                                            border: 'none',
                                                            cursor: 'pointer'
                                                        },
                                                        children: "Recall article"
                                                    }, void 0, false, {
                                                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 45
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>publishPost(post.id),
                                                style: {
                                                    padding: '0.65rem 0.9rem',
                                                    borderRadius: 999,
                                                    background: '#22c55e',
                                                    color: '#07111f',
                                                    fontWeight: 700,
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                },
                                                children: "Publish"
                                            }, void 0, false, {
                                                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>deletePost(post.id),
                                                style: {
                                                    padding: '0.65rem 0.9rem',
                                                    borderRadius: 999,
                                                    background: '#ef4444',
                                                    color: 'white',
                                                    fontWeight: 700,
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                },
                                                children: "Delete article"
                                            }, void 0, false, {
                                                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 33
                                }, this) : null
                            ]
                        }, post.id, true, {
                            fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                            lineNumber: 123,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/lab-journal-cms/src/app/(dashboard)/dashboard/page.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=lab-journal-cms_src_app_%28dashboard%29_dashboard_page_tsx_1-rn0te._.js.map