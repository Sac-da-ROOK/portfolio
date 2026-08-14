import { existsSync, readFileSync } from "fs";
import path from "path";

export type JournalEntry = {
    category: string;
    title: string;
    description: string;
    format: string;
    accent: string;
    notes: string[];
    content?: string;
};

export type CmsPost = {
    id?: string;
    title?: string;
    content?: string;
    status?: string;
    createdAt?: string;
};

export function stripHtml(value: string) {
    return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function slugify(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "entry";
}

export function createEntryHref(title: string) {
    return `/lab-journal/reader?entry=${encodeURIComponent(title)}`;
}

export function readCmsPosts(): CmsPost[] {
    const candidates = [
        path.resolve(process.cwd(), "data", "posts.json"),
        path.resolve(process.cwd(), "..", "data", "posts.json"),
        path.resolve(process.cwd(), "..", "..", "data", "posts.json"),
    ];

    for (const filePath of candidates) {
        if (!existsSync(filePath)) {
            continue;
        }

        try {
            const raw = readFileSync(filePath, "utf8");
            const parsed = JSON.parse(raw) as CmsPost[];
            if (Array.isArray(parsed)) {
                return parsed;
            }
        } catch {
            continue;
        }
    }

    return [];
}

export function getPublishedJournalEntries(): JournalEntry[] {
    const posts = readCmsPosts();
    const publishedPosts = (Array.isArray(posts) ? posts : []).filter((post) => post.status === "Published");

    if (!publishedPosts.length) {
        return [];
    }

    return publishedPosts.map((post) => ({
        category: "Published entry",
        title: post.title ?? "Untitled entry",
        description: stripHtml(post.content ?? "A published journal entry from the CMS.") || "A published journal entry from the CMS.",
        format: "Article",
        accent: "from-amber-300/20 to-transparent",
        notes: [post.createdAt ? `Published ${post.createdAt}` : "Published", "CMS"],
        content: post.content ?? "",
    }));
}
