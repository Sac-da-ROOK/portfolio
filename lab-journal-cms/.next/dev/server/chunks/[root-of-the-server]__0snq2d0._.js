module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/lab-journal-cms/src/app/api/posts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/src/lib/posts.ts [app-route] (ecmascript)");
;
;
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosts"])());
}
async function POST(request) {
    const body = await request.json();
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPost"])({
        title: body.title,
        content: body.content,
        status: body.status,
        attachments: body.attachments
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(post, {
        status: 201
    });
}
}),
"[project]/lab-journal-cms/src/lib/posts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPost",
    ()=>createPost,
    "getPosts",
    ()=>getPosts,
    "recallPost",
    ()=>recallPost,
    "updatePost",
    ()=>updatePost,
    "updatePostStatus",
    ()=>updatePostStatus
]);
let posts = [];
function getPosts() {
    return posts;
}
function createPost(input) {
    const newPost = {
        id: `post-${Date.now()}`,
        title: input.title.trim(),
        content: input.content.trim(),
        status: input.status ?? 'Draft',
        createdAt: new Date().toISOString().slice(0, 10),
        attachments: input.attachments ?? []
    };
    posts = [
        newPost,
        ...posts
    ];
    return newPost;
}
function updatePost(id, input) {
    const existing = posts.find((post)=>post.id === id);
    if (!existing) {
        return null;
    }
    const updatedPost = {
        ...existing,
        title: input.title.trim(),
        content: input.content.trim(),
        status: input.status ?? existing.status,
        attachments: input.attachments ?? existing.attachments ?? []
    };
    posts = posts.map((post)=>post.id === id ? updatedPost : post);
    return updatedPost;
}
function updatePostStatus(id, status) {
    posts = posts.map((post)=>post.id === id ? {
            ...post,
            status
        } : post);
    return posts.find((post)=>post.id === id);
}
async function recallPost(id, code) {
    const configuredCode = process.env.RECALL_CODE?.trim();
    const expectedCode = configuredCode || '123456';
    const enteredCode = code?.trim();
    if (enteredCode !== expectedCode) {
        throw new Error('Invalid verification code');
    }
    posts = posts.map((post)=>post.id === id ? {
            ...post,
            status: 'Recalled'
        } : post);
    const post = posts.find((entry)=>entry.id === id);
    if (post) {
        await fetch(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3001'}/api/notify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: post.title,
                link: 'http://localhost:3000/lab-journal',
                message: 'We are sorry, but this article has been recalled. Meanwhile, check out our other articles!',
                verificationCode: expectedCode,
                to: 'aarushsrivastava04@gmail.com'
            })
        }).catch(()=>undefined);
    }
    return post;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0snq2d0._.js.map