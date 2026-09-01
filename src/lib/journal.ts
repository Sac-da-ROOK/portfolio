export type JournalEntry = {
    id: string;
    slug: string;
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
    slug?: string;
    title?: string;
    content?: string;
    status?: string;
    createdAt?: string;
};

const DEFAULT_CMS_BASE_URL = "http://localhost:3001";

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

function getCmsBaseUrl() {
    const configuredUrl = process.env.LAB_JOURNAL_CMS_URL ?? process.env.NEXT_PUBLIC_LAB_JOURNAL_CMS_URL;
    if (!configuredUrl) {
        return DEFAULT_CMS_BASE_URL;
    }

    return configuredUrl.replace(/\/$/, "");
}

async function fetchPublishedCmsPosts(): Promise<CmsPost[]> {
    const cmsBaseUrl = getCmsBaseUrl();
    const response = await fetch(`${cmsBaseUrl}/api/journal`, {
        cache: "no-store",
        headers: {
            Accept: "application/json",
        },
    }).catch(() => null);

    if (!response || !response.ok) {
        return [];
    }

    const payload = await response.json().catch(() => null);
    if (!Array.isArray(payload)) {
        return [];
    }

    return payload.filter((post) => post && typeof post === "object");
}

export async function getPublishedJournalEntries(): Promise<JournalEntry[]> {
    const posts = await fetchPublishedCmsPosts();
    const publishedPosts = posts.filter((post) => post.status === "Published");

    if (!publishedPosts.length) {
        return [];
    }

    return publishedPosts.map((post) => ({
        id: post.id ?? `post-${Math.random().toString(36).slice(2)}`,
        slug: post.slug ?? (post.title ? post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "entry" : "entry"),
        category: "Published entry",
        title: post.title ?? "Untitled entry",
        description: stripHtml(post.content ?? "A published journal entry from the CMS.") || "A published journal entry from the CMS.",
        format: "Article",
        accent: "from-amber-300/20 to-transparent",
        notes: [post.createdAt ? `Published ${post.createdAt}` : "Published", "CMS"],
        content: post.content ?? "",
    }));
}
