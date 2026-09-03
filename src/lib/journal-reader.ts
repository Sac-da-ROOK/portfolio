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
    date?: string;
    published?: boolean;
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

export function createEntryHref(titleOrSlug: string) {
    return `/lab-journal/${slugify(titleOrSlug)}`;
}
