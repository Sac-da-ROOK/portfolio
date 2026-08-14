import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

export type PostStatus = 'Draft' | 'Published' | 'Scheduled' | 'Recalled';

export interface JournalPost {
    id: string;
    title: string;
    content: string;
    status: PostStatus;
    createdAt: string;
    attachments?: Array<{ id: string; name: string; kind: string; preview?: string }>;
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

    // Default to the nearest parent data folder when bootstrapping fresh storage.
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
        const parsed = JSON.parse(raw) as JournalPost[];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function persistPostsToFile(nextPosts: JournalPost[]) {
    mkdirSync(storageDir, { recursive: true });
    writeFileSync(storageFile, JSON.stringify(nextPosts, null, 2));
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

export function createPost(input: { title: string; content: string; status?: PostStatus; attachments?: JournalPost['attachments'] }) {
    const newPost: JournalPost = {
        id: `post-${Date.now()}`,
        title: input.title.trim(),
        content: input.content.trim(),
        status: input.status ?? 'Draft',
        createdAt: new Date().toISOString().slice(0, 10),
        attachments: input.attachments ?? [],
    };

    const nextPosts = [newPost, ...getPosts()];
    syncPosts(nextPosts);
    return newPost;
}

export function updatePost(id: string, input: { title: string; content: string; status?: PostStatus; attachments?: JournalPost['attachments'] }) {
    const existing = getPosts().find((post) => post.id === id);
    if (!existing) {
        return null;
    }

    const updatedPost: JournalPost = {
        ...existing,
        title: input.title.trim(),
        content: input.content.trim(),
        status: input.status ?? existing.status,
        attachments: input.attachments ?? existing.attachments ?? [],
    };

    const nextPosts = getPosts().map((post) => (post.id === id ? updatedPost : post));
    syncPosts(nextPosts);
    return updatedPost;
}

export function updatePostStatus(id: string, status: PostStatus) {
    const nextPosts = getPosts().map((post) => (post.id === id ? { ...post, status } : post)) as JournalPost[];
    syncPosts(nextPosts);
    return nextPosts.find((post) => post.id === id);
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
