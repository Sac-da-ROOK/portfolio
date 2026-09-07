import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { JournalEntry } from "@/lib/journal";

export type FrontmatterEntry = {
    title?: string;
    description?: string;
    category?: string;
    date?: string;
    time?: string;
    format?: string;
    accent?: string;
    published?: boolean;
    notes?: string[];
    media?: string[];
    slug?: string;
};

function slugify(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "entry";
}

function stripHtml(value: string) {
    return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function parseFrontmatter(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed.startsWith("---")) {
        return { attributes: {} as FrontmatterEntry, body: raw.trim() };
    }

    const match = trimmed.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
    if (!match) {
        return { attributes: {} as FrontmatterEntry, body: raw.trim() };
    }

    const [, frontmatter, body] = match;
    const attributes: FrontmatterEntry = {};
    const lines = frontmatter.split(/\r?\n/);

    let currentKey: string | null = null;
    let currentList: string[] = [];

    const commitList = () => {
        if (!currentKey) {
            return;
        }

        attributes[currentKey as keyof FrontmatterEntry] = currentList as never;
        currentKey = null;
        currentList = [];
    };

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) {
            continue;
        }

        if (trimmedLine.startsWith("- ")) {
            if (!currentKey) {
                continue;
            }
            currentList.push(trimmedLine.replace(/^-\s*/, "").trim());
            continue;
        }

        if (currentKey) {
            commitList();
        }

        const idx = trimmedLine.indexOf(":");
        if (idx === -1) {
            continue;
        }

        const key = trimmedLine.slice(0, idx).trim();
        const value = trimmedLine.slice(idx + 1).trim();

        if (value === "") {
            currentKey = key;
            currentList = [];
            continue;
        }

        if (key === "published") {
            attributes[key] = (value === "true") as never;
            continue;
        }

        attributes[key as keyof FrontmatterEntry] = value.replace(/^['\"]|['\"]$/g, "") as never;
    }

    if (currentKey) {
        commitList();
    }

    return { attributes, body: body.trim() };
}

async function getJournalFiles() {
    const directory = path.join(process.cwd(), "content", "journal");

    try {
        const entries = await readdir(directory, { withFileTypes: true });
        return entries
            .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && !entry.name.startsWith("_"))
            .map((entry) => path.join(directory, entry.name))
            .sort();
    } catch {
        return [];
    }
}

async function parseJournalFile(filePath: string): Promise<JournalEntry | null> {
    try {
        const raw = await readFile(filePath, "utf8");
        const { attributes, body } = parseFrontmatter(raw);

        const now = new Date();
        const title = typeof attributes.title === "string" && attributes.title.trim() ? attributes.title.trim() : path.basename(filePath, ".md");
        const category = typeof attributes.category === "string" && attributes.category.trim() ? attributes.category.trim() : "General";
        const description = typeof attributes.description === "string" && attributes.description.trim() ? attributes.description.trim() : stripHtml(body) || "A Lab Journal article.";
        const date = typeof attributes.date === "string" && attributes.date.trim() ? attributes.date.trim() : now.toISOString().slice(0, 10);
        const time = typeof attributes.time === "string" && attributes.time.trim() ? attributes.time.trim() : now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "America/Chicago" });
        const format = typeof attributes.format === "string" && attributes.format.trim() ? attributes.format.trim() : "Article";
        const accent = typeof attributes.accent === "string" && attributes.accent.trim() ? attributes.accent.trim() : "from-amber-200 to-yellow-100";
        const published = attributes.published === undefined ? true : Boolean(attributes.published);
        const notes = Array.isArray(attributes.notes) ? attributes.notes.map((note) => String(note).trim()).filter(Boolean) : [];
        const media = Array.isArray(attributes.media) ? attributes.media.map((item) => String(item).trim()).filter(Boolean) : [];
        const slugValue = typeof attributes.slug === "string" && attributes.slug.trim() ? attributes.slug.trim() : slugify(title);

        return {
            id: slugValue,
            slug: slugValue,
            category,
            title,
            description,
            format,
            accent,
            notes,
            content: body,
            date,
            time,
            media,
            published,
        };
    } catch {
        return null;
    }
}

export async function getPublishedJournalEntries(): Promise<JournalEntry[]> {
    const files = await getJournalFiles();
    const entries = await Promise.all(files.map((filePath) => parseJournalFile(filePath)));

    return entries
        .filter((entry): entry is JournalEntry => Boolean(entry && entry.published))
        .sort((a, b) => {
            const aDate = new Date(a.date ?? "1970-01-01").getTime();
            const bDate = new Date(b.date ?? "1970-01-01").getTime();
            return bDate - aDate;
        });
}

export async function getJournalEntryBySlug(slug: string): Promise<JournalEntry | null> {
    const entries = await getPublishedJournalEntries();
    return entries.find((entry) => entry.slug === slug) ?? null;
}
