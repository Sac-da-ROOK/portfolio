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
