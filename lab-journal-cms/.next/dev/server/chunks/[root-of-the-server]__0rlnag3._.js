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
"[project]/src/app/api/posts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/posts.ts [app-route] (ecmascript)");
;
;
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPosts"])());
}
async function POST(request) {
    const body = await request.json();
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPost"])({
        title: body.title,
        content: body.content,
        status: body.status,
        attachments: body.attachments
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(post, {
        status: 201
    });
}
}),
"[project]/src/lib/posts.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCommentToPost",
    ()=>addCommentToPost,
    "createPost",
    ()=>createPost,
    "deleteComment",
    ()=>deleteComment,
    "deletePost",
    ()=>deletePost,
    "getArticleComments",
    ()=>getArticleComments,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPosts",
    ()=>getPosts,
    "getSubscriberCount",
    ()=>getSubscriberCount,
    "getSubscribers",
    ()=>getSubscribers,
    "notifySubscribersForPublication",
    ()=>notifySubscribersForPublication,
    "recallPost",
    ()=>recallPost,
    "recordNotification",
    ()=>recordNotification,
    "setVoteForSession",
    ()=>setVoteForSession,
    "subscribeUser",
    ()=>subscribeUser,
    "updatePost",
    ()=>updatePost,
    "updatePostStatus",
    ()=>updatePostStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function normalizeSlug(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'entry';
}
function stripHtml(value) {
    return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
function ensurePostShape(post) {
    const title = (post.title ?? 'Untitled article').trim();
    const content = post.content ?? '';
    const status = post.status ?? 'Draft';
    return {
        id: post.id ?? `post-${Date.now()}`,
        title,
        slug: post.slug ?? normalizeSlug(title),
        content,
        excerpt: post.excerpt ?? (stripHtml(content).slice(0, 220) || 'A published journal entry from the CMS.'),
        status,
        createdAt: post.createdAt ?? new Date().toISOString(),
        updatedAt: post.updatedAt ?? new Date().toISOString(),
        publishedAt: post.publishedAt,
        attachments: Array.isArray(post.attachments) ? post.attachments : [],
        comments: Array.isArray(post.comments) ? post.comments : [],
        likes: Number(post.likes ?? 0),
        dislikes: Number(post.dislikes ?? 0),
        votes: Array.isArray(post.votes) ? post.votes : [],
        notificationSentAt: post.notificationSentAt
    };
}
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
        if (Array.isArray(parsed)) {
            return parsed.map((post)=>ensurePostShape(post));
        }
        if (parsed && Array.isArray(parsed.posts)) {
            return parsed.posts.map((post)=>ensurePostShape(post));
        }
        return [];
    } catch  {
        return [];
    }
}
function persistPostsToFile(nextPosts) {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["mkdirSync"])(storageDir, {
        recursive: true
    });
    const payload = {
        posts: nextPosts,
        subscribers: loadSubscribers(),
        notifications: loadNotifications()
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["writeFileSync"])(storageFile, JSON.stringify(payload, null, 2));
}
function loadSubscribers() {
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(storageFile)) {
        return [];
    }
    try {
        const raw = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(storageFile, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && Array.isArray(parsed.subscribers)) {
            return parsed.subscribers.filter((subscriber)=>subscriber && typeof subscriber.email === 'string');
        }
        return [];
    } catch  {
        return [];
    }
}
function loadNotifications() {
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(storageFile)) {
        return [];
    }
    try {
        const raw = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(storageFile, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && Array.isArray(parsed.notifications)) {
            return parsed.notifications.filter((notification)=>notification && typeof notification.articleId === 'string');
        }
        return [];
    } catch  {
        return [];
    }
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
function getPostBySlug(slug) {
    return getPosts().find((post)=>post.slug === slug || post.title === slug);
}
function createPost(input) {
    const timestamp = new Date();
    const title = input.title.trim();
    const slug = normalizeSlug(title);
    const newPost = ensurePostShape({
        id: `post-${Date.now()}`,
        title,
        slug,
        content: input.content.trim(),
        status: input.status ?? 'Draft',
        createdAt: timestamp.toISOString(),
        updatedAt: timestamp.toISOString(),
        attachments: input.attachments ?? []
    });
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
    const nextTitle = input.title.trim();
    const updatedPost = ensurePostShape({
        ...existing,
        title: nextTitle,
        slug: normalizeSlug(nextTitle),
        content: input.content.trim(),
        status: input.status ?? existing.status,
        attachments: input.attachments ?? existing.attachments ?? [],
        updatedAt: new Date().toISOString()
    });
    const nextPosts = getPosts().map((post)=>post.id === id ? updatedPost : post);
    syncPosts(nextPosts);
    return updatedPost;
}
function updatePostStatus(id, status) {
    const post = getPosts().find((entry)=>entry.id === id);
    if (!post) {
        return null;
    }
    const nextPosts = getPosts().map((entry)=>{
        if (entry.id !== id) {
            return entry;
        }
        const nextStatus = status;
        return ensurePostShape({
            ...entry,
            status: nextStatus,
            updatedAt: new Date().toISOString(),
            publishedAt: nextStatus === 'Published' ? entry.publishedAt ?? new Date().toISOString() : undefined,
            notificationSentAt: nextStatus === 'Published' ? entry.notificationSentAt : undefined
        });
    });
    syncPosts(nextPosts);
    return nextPosts.find((entry)=>entry.id === id) ?? null;
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
function addCommentToPost(articleId, name, message) {
    const post = getPosts().find((entry)=>entry.id === articleId || entry.slug === articleId);
    if (!post) {
        return null;
    }
    const trimmedName = name.trim().slice(0, 80);
    const trimmedMessage = message.trim().slice(0, 2000);
    if (!trimmedName || !trimmedMessage) {
        return null;
    }
    const comment = {
        id: `comment-${Date.now()}`,
        articleId: post.id,
        name: trimmedName,
        message: trimmedMessage,
        createdAt: new Date().toISOString()
    };
    const nextPosts = getPosts().map((entry)=>entry.id === post.id ? {
            ...entry,
            comments: [
                comment,
                ...entry.comments
            ],
            updatedAt: new Date().toISOString()
        } : entry);
    syncPosts(nextPosts);
    return comment;
}
function getArticleComments(articleId) {
    const post = getPosts().find((entry)=>entry.id === articleId || entry.slug === articleId);
    return post ? post.comments : [];
}
function deleteComment(articleId, commentId) {
    const nextPosts = getPosts().map((post)=>{
        if (post.id !== articleId && post.slug !== articleId) {
            return post;
        }
        return {
            ...post,
            comments: post.comments.filter((comment)=>comment.id !== commentId),
            updatedAt: new Date().toISOString()
        };
    });
    syncPosts(nextPosts);
    return true;
}
function setVoteForSession(articleId, sessionId, value) {
    const post = getPosts().find((entry)=>entry.id === articleId || entry.slug === articleId);
    if (!post || !sessionId) {
        return null;
    }
    const existingVote = post.votes.find((vote)=>vote.sessionId === sessionId && vote.articleId === post.id);
    const nextVotes = existingVote ? post.votes.map((vote)=>vote.sessionId === sessionId ? {
            ...vote,
            value,
            createdAt: new Date().toISOString()
        } : vote) : [
        ...post.votes,
        {
            id: `vote-${Date.now()}`,
            articleId: post.id,
            sessionId,
            value,
            createdAt: new Date().toISOString()
        }
    ];
    let likes = post.likes;
    let dislikes = post.dislikes;
    if (existingVote) {
        if (existingVote.value === 'like' && value === 'dislike') {
            likes = Math.max(0, likes - 1);
            dislikes += 1;
        }
        if (existingVote.value === 'dislike' && value === 'like') {
            dislikes = Math.max(0, dislikes - 1);
            likes += 1;
        }
    } else {
        if (value === 'like') {
            likes += 1;
        }
        if (value === 'dislike') {
            dislikes += 1;
        }
    }
    const nextPost = {
        ...post,
        votes: nextVotes,
        likes,
        dislikes,
        updatedAt: new Date().toISOString()
    };
    const nextPosts = getPosts().map((entry)=>entry.id === post.id ? nextPost : entry);
    syncPosts(nextPosts);
    return {
        likes,
        dislikes,
        vote: value
    };
}
function getSubscribers() {
    return loadSubscribers();
}
function getDashboardStats() {
    const posts = getPosts();
    const subscribers = getSubscribers();
    const totalComments = posts.reduce((sum, post)=>sum + post.comments.length, 0);
    const totalLikes = posts.reduce((sum, post)=>sum + post.likes, 0);
    const totalDislikes = posts.reduce((sum, post)=>sum + post.dislikes, 0);
    return {
        totalSubscribers: subscribers.length,
        totalComments,
        totalLikes,
        totalDislikes
    };
}
async function notifySubscribersForPublication(post) {
    const subscribers = getSubscribers();
    if (!subscribers.length) {
        return {
            sent: 0,
            skipped: 0
        };
    }
    const articleUrl = `${("TURBOPACK compile-time value", "http://localhost:3000") ?? 'http://localhost:3000'}/lab-journal/reader?entry=${encodeURIComponent(post.slug || post.title)}`;
    const transport = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS ? await __turbopack_context__.A("[project]/src/lib/mail.ts [app-route] (ecmascript, async loader)").then((module)=>module.sendPublishedArticleEmail) : null;
    if (!transport) {
        return {
            sent: 0,
            skipped: subscribers.length,
            reason: 'missing-smtp-config'
        };
    }
    const results = await Promise.allSettled(subscribers.map((subscriber)=>transport({
            to: subscriber.email,
            title: post.title,
            link: articleUrl,
            articleUrl
        })));
    const sent = results.filter((result)=>result.status === 'fulfilled').length;
    const failed = results.filter((result)=>result.status === 'rejected').length;
    if (sent > 0) {
        recordNotification({
            id: `notification-${Date.now()}`,
            title: post.title,
            slug: post.slug,
            content: post.content,
            notificationSentAt: new Date().toISOString()
        });
    }
    return {
        sent,
        failed,
        skipped: Math.max(0, subscribers.length - sent)
    };
}
function subscribeUser(email) {
    const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
        return {
            ok: false,
            error: 'Please use a valid email address.'
        };
    }
    const subscribers = getSubscribers();
    if (subscribers.some((subscriber)=>subscriber.email.toLowerCase() === normalized)) {
        return {
            ok: false,
            error: 'You are already subscribed.'
        };
    }
    const record = {
        id: `subscriber-${Date.now()}`,
        email: normalized,
        createdAt: new Date().toISOString(),
        status: 'active'
    };
    const payload = (()=>{
        try {
            const raw = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(storageFile, 'utf8');
            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {
                posts: getPosts(),
                subscribers: [],
                notifications: []
            };
        } catch  {
            return {
                posts: getPosts(),
                subscribers: [],
                notifications: []
            };
        }
    })();
    const data = {
        posts: payload.posts ?? getPosts(),
        subscribers: [
            ...payload.subscribers ?? [],
            record
        ],
        notifications: payload.notifications ?? []
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["mkdirSync"])(storageDir, {
        recursive: true
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["writeFileSync"])(storageFile, JSON.stringify(data, null, 2));
    return {
        ok: true,
        subscriber: record
    };
}
function getSubscriberCount() {
    return getSubscribers().length;
}
function recordNotification(article) {
    const record = {
        id: `notification-${Date.now()}`,
        articleId: article.id,
        articleTitle: article.title,
        sentAt: new Date().toISOString(),
        subscriberCount: getSubscribers().length
    };
    const payload = (()=>{
        try {
            const raw = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(storageFile, 'utf8');
            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {
                posts: getPosts(),
                subscribers: getSubscribers(),
                notifications: []
            };
        } catch  {
            return {
                posts: getPosts(),
                subscribers: getSubscribers(),
                notifications: []
            };
        }
    })();
    const nextData = {
        posts: payload.posts ?? getPosts(),
        subscribers: payload.subscribers ?? getSubscribers(),
        notifications: [
            record,
            ...payload.notifications ?? []
        ]
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["mkdirSync"])(storageDir, {
        recursive: true
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["writeFileSync"])(storageFile, JSON.stringify(nextData, null, 2));
    const nextPosts = getPosts().map((entry)=>entry.id === article.id ? {
            ...entry,
            notificationSentAt: new Date().toISOString()
        } : entry);
    syncPosts(nextPosts);
    return record;
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
        await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000") ?? 'http://localhost:3001'}/api/notify`, {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0rlnag3._.js.map