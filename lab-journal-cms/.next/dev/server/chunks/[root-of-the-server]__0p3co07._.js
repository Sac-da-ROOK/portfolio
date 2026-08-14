module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
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
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lab-journal-cms/src/app/api/posts/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab-journal-cms/src/lib/posts.ts [app-route] (ecmascript)");
;
;
async function GET(request, { params }) {
    const { id } = await params;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosts"])().find((entry)=>entry.id === id);
    if (!post) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Not found'
        }, {
            status: 404
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(post);
}
async function PATCH(request, { params }) {
    const { id } = await params;
    const body = await request.json();
    if (body.action === 'publish') {
        const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updatePostStatus"])(id, 'Published');
        return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(post);
    }
    if (body.action === 'update') {
        const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updatePost"])(id, {
            title: body.title,
            content: body.content,
            status: body.status,
            attachments: body.attachments
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(post ?? {
            error: 'Not found'
        }, post ? {
            status: 200
        } : {
            status: 404
        });
    }
    if (body.action === 'delete') {
        const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deletePost"])(id);
        if (!post) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Not found'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            deletedPost: post
        });
    }
    if (body.action === 'recall') {
        try {
            const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recallPost"])(id, body.code);
            return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(post);
        } catch (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error instanceof Error ? error.message : 'Unable to recall article.'
            }, {
                status: 400
            });
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Unknown action'
    }, {
        status: 400
    });
}
async function DELETE(request, { params }) {
    const { id } = await params;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deletePost"])(id);
    if (!post) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Not found'
        }, {
            status: 404
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$lab$2d$journal$2d$cms$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        deletedPost: post
    });
}
}),
"[project]/lab-journal-cms/src/lib/posts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPost",
    ()=>createPost,
    "deletePost",
    ()=>deletePost,
    "getPosts",
    ()=>getPosts,
    "recallPost",
    ()=>recallPost,
    "updatePost",
    ()=>updatePost,
    "updatePostStatus",
    ()=>updatePostStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function resolveSharedPostsFile() {
    const candidates = [
        __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'data', 'posts.json'),
        __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), '..', 'data', 'posts.json'),
        __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), '..', '..', 'data', 'posts.json')
    ];
    for (const filePath of candidates){
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(filePath)) {
            return filePath;
        }
    }
    // Default to the nearest parent data folder when bootstrapping fresh storage.
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), '..', 'data', 'posts.json');
}
const storageFile = resolveSharedPostsFile();
const storageDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(storageFile);
let posts = loadPostsFromFile();
function loadPostsFromFile() {
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(storageFile)) {
        return [];
    }
    try {
        const raw = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(storageFile, 'utf8');
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch  {
        return [];
    }
}
function persistPostsToFile(nextPosts) {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["mkdirSync"])(storageDir, {
        recursive: true
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["writeFileSync"])(storageFile, JSON.stringify(nextPosts, null, 2));
}
function syncPosts(nextPosts) {
    posts = nextPosts;
    persistPostsToFile(nextPosts);
}
function getPosts() {
    if (!posts.length) {
        posts = loadPostsFromFile();
    }
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
    const nextPosts = [
        newPost,
        ...getPosts()
    ];
    syncPosts(nextPosts);
    return newPost;
}
function updatePost(id, input) {
    const existing = getPosts().find((post)=>post.id === id);
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
    const nextPosts = getPosts().map((post)=>post.id === id ? updatedPost : post);
    syncPosts(nextPosts);
    return updatedPost;
}
function updatePostStatus(id, status) {
    const nextPosts = getPosts().map((post)=>post.id === id ? {
            ...post,
            status
        } : post);
    syncPosts(nextPosts);
    return nextPosts.find((post)=>post.id === id);
}
function deletePost(id) {
    const existing = getPosts().find((post)=>post.id === id);
    if (!existing) {
        return null;
    }
    const nextPosts = getPosts().filter((post)=>post.id !== id);
    syncPosts(nextPosts);
    return existing;
}
async function recallPost(id, code) {
    const configuredCode = process.env.RECALL_CODE?.trim();
    const expectedCode = configuredCode || '123456';
    const enteredCode = code?.trim();
    if (enteredCode !== expectedCode) {
        throw new Error('Invalid verification code');
    }
    const nextPosts = getPosts().map((post)=>post.id === id ? {
            ...post,
            status: 'Recalled'
        } : post);
    syncPosts(nextPosts);
    const post = nextPosts.find((entry)=>entry.id === id);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0p3co07._.js.map