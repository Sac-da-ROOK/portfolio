import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

export type PostStatus = 'Draft' | 'Published' | 'Scheduled' | 'Recalled';
export type VoteValue = 'like' | 'dislike';

export interface JournalAttachment {
    id: string;
    name: string;
    kind: string;
    preview?: string;
}

export interface JournalComment {
    id: string;
    articleId: string;
    name: string;
    message: string;
    createdAt: string;
}

export interface JournalVote {
    id: string;
    articleId: string;
    sessionId: string;
    value: VoteValue;
    createdAt: string;
}

export interface SubscriberRecord {
    id: string;
    email: string;
    createdAt: string;
    status: 'active';
}

export interface NotificationRecord {
    id: string;
    articleId: string;
    articleTitle: string;
    sentAt: string;
    subscriberCount: number;
}

export interface JournalPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    status: PostStatus;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    attachments: JournalAttachment[];
    comments: JournalComment[];
    likes: number;
    dislikes: number;
    votes: JournalVote[];
    notificationSentAt?: string;
}

export type JournalData = {
    posts: JournalPost[];
    subscribers: SubscriberRecord[];
    notifications: NotificationRecord[];
};

function normalizeSlug(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || 'entry';
}

function stripHtml(value: string) {
    return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function ensurePostShape(post: Partial<JournalPost> & { id?: string; title?: string; content?: string; status?: PostStatus }): JournalPost {
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
        notificationSentAt: post.notificationSentAt,
    };
}

function resolveSharedPostsFile() {
    const candidates = [
        path.resolve(process.cwd(), 'data', 'posts.json'),
        path.resolve(process.cwd(), '..', 'data', 'posts.json'),
        path.resolve(process.cwd(), '..', '..', 'data', 'posts.json'),
    ];

    for (const filePath of candidates) {
        if (existsSync(filePath)) {
            return filePath;
        }
    }

    return path.resolve(process.cwd(), '..', 'data', 'posts.json');
}

const storageFile = resolveSharedPostsFile();
const storageDir = path.dirname(storageFile);

let posts: JournalPost[] = loadPostsFromFile();

function loadPostsFromFile(): JournalPost[] {
    if (!existsSync(storageFile)) {
        return [];
    }

    try {
        const raw = readFileSync(storageFile, 'utf8');
        const parsed = JSON.parse(raw) as Partial<JournalData> | JournalPost[];

        if (Array.isArray(parsed)) {
            return parsed.map((post) => ensurePostShape(post));
        }

        if (parsed && Array.isArray(parsed.posts)) {
            return parsed.posts.map((post) => ensurePostShape(post));
        }

        return [];
    } catch {
        return [];
    }
}

function persistPostsToFile(nextPosts: JournalPost[]) {
    mkdirSync(storageDir, { recursive: true });

    const payload: JournalData = {
        posts: nextPosts,
        subscribers: loadSubscribers(),
        notifications: loadNotifications(),
    };

    writeFileSync(storageFile, JSON.stringify(payload, null, 2));
}

function loadSubscribers(): SubscriberRecord[] {
    if (!existsSync(storageFile)) {
        return [];
    }

    try {
        const raw = readFileSync(storageFile, 'utf8');
        const parsed = JSON.parse(raw) as Partial<JournalData> | JournalPost[];

        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && Array.isArray(parsed.subscribers)) {
            return parsed.subscribers.filter((subscriber) => subscriber && typeof subscriber.email === 'string');
        }

        return [];
    } catch {
        return [];
    }
}

function loadNotifications(): NotificationRecord[] {
    if (!existsSync(storageFile)) {
        return [];
    }

    try {
        const raw = readFileSync(storageFile, 'utf8');
        const parsed = JSON.parse(raw) as Partial<JournalData> | JournalPost[];

        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && Array.isArray(parsed.notifications)) {
            return parsed.notifications.filter((notification) => notification && typeof notification.articleId === 'string');
        }

        return [];
    } catch {
        return [];
    }
}

function syncPosts(nextPosts: JournalPost[]) {
    posts = nextPosts;
    persistPostsToFile(nextPosts);
}

export function getPosts(): JournalPost[] {
    if (!posts.length) {
        posts = loadPostsFromFile();
    }

    return posts;
}

export function getPostBySlug(slug: string) {
    return getPosts().find((post) => post.slug === slug || post.title === slug);
}

export function createPost(input: { title: string; content: string; status?: PostStatus; attachments?: JournalPost['attachments'] }) {
    const timestamp = new Date();
    const title = input.title.trim();
    const slug = normalizeSlug(title);
    const newPost: JournalPost = ensurePostShape({
        id: `post-${Date.now()}`,
        title,
        slug,
        content: input.content.trim(),
        status: input.status ?? 'Draft',
        createdAt: timestamp.toISOString(),
        updatedAt: timestamp.toISOString(),
        attachments: input.attachments ?? [],
    });

    const nextPosts = [newPost, ...getPosts()];
    syncPosts(nextPosts);
    return newPost;
}

export function updatePost(id: string, input: { title: string; content: string; status?: PostStatus; attachments?: JournalPost['attachments'] }) {
    const existing = getPosts().find((post) => post.id === id);
    if (!existing) {
        return null;
    }

    const nextTitle = input.title.trim();
    const updatedPost: JournalPost = ensurePostShape({
        ...existing,
        title: nextTitle,
        slug: normalizeSlug(nextTitle),
        content: input.content.trim(),
        status: input.status ?? existing.status,
        attachments: input.attachments ?? existing.attachments ?? [],
        updatedAt: new Date().toISOString(),
    });

    const nextPosts = getPosts().map((post) => (post.id === id ? updatedPost : post));
    syncPosts(nextPosts);
    return updatedPost;
}

export function updatePostStatus(id: string, status: PostStatus) {
    const post = getPosts().find((entry) => entry.id === id);
    if (!post) {
        return null;
    }

    const nextPosts = getPosts().map((entry) => {
        if (entry.id !== id) {
            return entry;
        }

        const nextStatus = status;
        return ensurePostShape({
            ...entry,
            status: nextStatus,
            updatedAt: new Date().toISOString(),
            publishedAt: nextStatus === 'Published' ? entry.publishedAt ?? new Date().toISOString() : undefined,
            notificationSentAt: nextStatus === 'Published' ? entry.notificationSentAt : undefined,
        });
    });

    syncPosts(nextPosts);
    return nextPosts.find((entry) => entry.id === id) ?? null;
}

export function deletePost(id: string) {
    const existing = getPosts().find((post) => post.id === id);
    if (!existing) {
        return null;
    }

    const nextPosts = getPosts().filter((post) => post.id !== id);
    syncPosts(nextPosts);
    return existing;
}

export function addCommentToPost(articleId: string, name: string, message: string) {
    const post = getPosts().find((entry) => entry.id === articleId || entry.slug === articleId);
    if (!post) {
        return null;
    }

    const trimmedName = name.trim().slice(0, 80);
    const trimmedMessage = message.trim().slice(0, 2000);
    if (!trimmedName || !trimmedMessage) {
        return null;
    }

    const comment: JournalComment = {
        id: `comment-${Date.now()}`,
        articleId: post.id,
        name: trimmedName,
        message: trimmedMessage,
        createdAt: new Date().toISOString(),
    };

    const nextPosts = getPosts().map((entry) => (entry.id === post.id ? { ...entry, comments: [comment, ...entry.comments], updatedAt: new Date().toISOString() } : entry));
    syncPosts(nextPosts);
    return comment;
}

export function getArticleComments(articleId: string) {
    const post = getPosts().find((entry) => entry.id === articleId || entry.slug === articleId);
    return post ? post.comments : [];
}

export function deleteComment(articleId: string, commentId: string) {
    const nextPosts = getPosts().map((post) => {
        if (post.id !== articleId && post.slug !== articleId) {
            return post;
        }

        return { ...post, comments: post.comments.filter((comment) => comment.id !== commentId), updatedAt: new Date().toISOString() };
    });

    syncPosts(nextPosts);
    return true;
}

export function setVoteForSession(articleId: string, sessionId: string, value: VoteValue) {
    const post = getPosts().find((entry) => entry.id === articleId || entry.slug === articleId);
    if (!post || !sessionId) {
        return null;
    }

    const existingVote = post.votes.find((vote) => vote.sessionId === sessionId && vote.articleId === post.id);
    const nextVotes = existingVote
        ? post.votes.map((vote) => (vote.sessionId === sessionId ? { ...vote, value, createdAt: new Date().toISOString() } : vote))
        : [...post.votes, { id: `vote-${Date.now()}`, articleId: post.id, sessionId, value, createdAt: new Date().toISOString() }];

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

    const nextPost = { ...post, votes: nextVotes, likes, dislikes, updatedAt: new Date().toISOString() };
    const nextPosts = getPosts().map((entry) => (entry.id === post.id ? nextPost : entry));
    syncPosts(nextPosts);
    return { likes, dislikes, vote: value };
}

export function getSubscribers() {
    return loadSubscribers();
}

export function getDashboardStats() {
    const posts = getPosts();
    const subscribers = getSubscribers();
    const totalComments = posts.reduce((sum, post) => sum + post.comments.length, 0);
    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
    const totalDislikes = posts.reduce((sum, post) => sum + post.dislikes, 0);

    return {
        totalSubscribers: subscribers.length,
        totalComments,
        totalLikes,
        totalDislikes,
    };
}

export async function notifySubscribersForPublication(post: Pick<JournalPost, 'id' | 'title' | 'content' | 'slug'>) {
    const subscribers = getSubscribers();
    if (!subscribers.length) {
        return { sent: 0, skipped: 0 };
    }

    const articleUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/lab-journal/reader?entry=${encodeURIComponent(post.slug || post.title)}`;

    const transport = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
        ? await import('./mail').then((module) => module.sendPublishedArticleEmail)
        : null;

    if (!transport) {
        return { sent: 0, skipped: subscribers.length, reason: 'missing-smtp-config' };
    }

    const results = await Promise.allSettled(
        subscribers.map((subscriber) => transport({
            to: subscriber.email,
            title: post.title,
            link: articleUrl,
            articleUrl,
        }))
    );

    const sent = results.filter((result) => result.status === 'fulfilled').length;
    const failed = results.filter((result) => result.status === 'rejected').length;

    if (sent > 0) {
        recordNotification({
            id: `notification-${Date.now()}`,
            title: post.title,
            slug: post.slug,
            content: post.content,
            notificationSentAt: new Date().toISOString(),
        } as JournalPost);
    }

    return { sent, failed, skipped: Math.max(0, subscribers.length - sent) };
}

export function subscribeUser(email: string) {
    const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
        return { ok: false, error: 'Please use a valid email address.' };
    }

    const subscribers = getSubscribers();
    if (subscribers.some((subscriber) => subscriber.email.toLowerCase() === normalized)) {
        return { ok: false, error: 'You are already subscribed.' };
    }

    const record: SubscriberRecord = {
        id: `subscriber-${Date.now()}`,
        email: normalized,
        createdAt: new Date().toISOString(),
        status: 'active',
    };

    const payload = (() => {
        try {
            const raw = readFileSync(storageFile, 'utf8');
            const parsed = JSON.parse(raw) as Partial<JournalData> | JournalPost[];
            return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : { posts: getPosts(), subscribers: [], notifications: [] };
        } catch {
            return { posts: getPosts(), subscribers: [], notifications: [] };
        }
    })();

    const data: JournalData = {
        posts: payload.posts ?? getPosts(),
        subscribers: [...(payload.subscribers ?? []), record],
        notifications: payload.notifications ?? [],
    };

    mkdirSync(storageDir, { recursive: true });
    writeFileSync(storageFile, JSON.stringify(data, null, 2));
    return { ok: true, subscriber: record };
}

export function getSubscriberCount() {
    return getSubscribers().length;
}

export function recordNotification(article: Pick<JournalPost, 'id' | 'title' | 'notificationSentAt'>) {
    const record: NotificationRecord = {
        id: `notification-${Date.now()}`,
        articleId: article.id,
        articleTitle: article.title,
        sentAt: new Date().toISOString(),
        subscriberCount: getSubscribers().length,
    };

    const payload = (() => {
        try {
            const raw = readFileSync(storageFile, 'utf8');
            const parsed = JSON.parse(raw) as Partial<JournalData> | JournalPost[];
            return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : { posts: getPosts(), subscribers: getSubscribers(), notifications: [] };
        } catch {
            return { posts: getPosts(), subscribers: getSubscribers(), notifications: [] };
        }
    })();

    const nextData: JournalData = {
        posts: payload.posts ?? getPosts(),
        subscribers: payload.subscribers ?? getSubscribers(),
        notifications: [record, ...(payload.notifications ?? [])],
    };

    mkdirSync(storageDir, { recursive: true });
    writeFileSync(storageFile, JSON.stringify(nextData, null, 2));

    const nextPosts = getPosts().map((entry) => (entry.id === article.id ? { ...entry, notificationSentAt: new Date().toISOString() } : entry));
    syncPosts(nextPosts);
    return record;
}

export async function recallPost(id: string, code: string) {
    const configuredCode = process.env.RECALL_CODE?.trim();
    const expectedCode = configuredCode || '123456';
    const enteredCode = code?.trim();

    if (enteredCode !== expectedCode) {
        throw new Error('Invalid verification code');
    }

    const nextPosts = getPosts().map((post) => (post.id === id ? { ...post, status: 'Recalled' as PostStatus } : post)) as JournalPost[];
    syncPosts(nextPosts);
    const post = nextPosts.find((entry) => entry.id === id);

    if (post) {
        await fetch(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3001'}/api/notify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: post.title,
                link: 'http://localhost:3000/lab-journal',
                message: 'We are sorry, but this article has been recalled. Meanwhile, check out our other articles!',
                verificationCode: expectedCode,
                to: 'aarushsrivastava04@gmail.com',
            }),
        }).catch(() => undefined);
    }

    return post;
}
