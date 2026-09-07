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
    time?: string;
    media?: string[];
    published?: boolean;
};

export function formatJournalDateTime(date?: string, time?: string) {
    const cleanDate = typeof date === "string" && date.trim() ? date.trim() : "";
    const cleanTime = typeof time === "string" && time.trim() ? time.trim() : "";

    const displayDate = (() => {
        if (!cleanDate) {
            return "";
        }

        const match = cleanDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (!match) {
            return cleanDate;
        }

        const [, year, month, day] = match;
        const parsed = new Date(Number(year), Number(month) - 1, Number(day));
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC"
        }).format(parsed);
    })();

    const displayTime = (() => {
        if (!cleanTime) {
            return "";
        }

        const match = cleanTime.match(/^(\d{1,2}):(\d{2})$/);
        if (!match) {
            return cleanTime;
        }

        const [, rawHour, rawMinute] = match;
        const hour = Number(rawHour);
        const minute = Number(rawMinute);
        const normalizedHour = hour % 12 === 0 ? 12 : hour % 12;
        const suffix = hour >= 12 ? "PM" : "AM";
        return `${normalizedHour}:${String(minute).padStart(2, "0")} ${suffix}`;
    })();

    if (!displayDate && !displayTime) {
        return "";
    }

    if (displayDate && displayTime) {
        return `${displayDate} • ${displayTime}`;
    }

    return displayDate || displayTime;
}

export function getReadingTime(content?: string) {
    const text = stripHtml(content ?? "").replace(/\s+/g, " ").trim();
    if (!text) {
        return "1 min read";
    }

    const wordCount = text.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    return `${minutes} min read`;
}

export function formatJournalMeta(date?: string, time?: string, content?: string) {
    const dateTime = formatJournalDateTime(date, time);
    const readingTime = getReadingTime(content);

    if (!dateTime) {
        return readingTime;
    }

    return `${dateTime} • ${readingTime}`;
}

export function isNewJournalEntry(date?: string, time?: string) {
    const cleanDate = typeof date === "string" && date.trim() ? date.trim() : "";
    if (!cleanDate || !/^\d{4}-\d{2}-\d{2}$/.test(cleanDate)) {
        return false;
    }

    const [year, month, day] = cleanDate.split("-").map(Number);
    const cleanTime = typeof time === "string" && time.trim() ? time.trim() : "00:00";
    const [hour = 0, minute = 0] = cleanTime.split(":").map(Number);

    const publishedAt = new Date(Date.UTC(year, month - 1, day, hour, minute, 0, 0)).getTime();
    const ageMs = Date.now() - publishedAt;
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;

    return ageMs >= 0 && ageMs <= sevenDaysMs;
}

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

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderInlineMarkdown(value: string) {
    let html = escapeHtml(value);
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" class="journal-inline-image" />');
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
    return html;
}

export function renderMarkdownToHtml(markdown: string) {
    const blocks = (markdown || "").trim().split(/\n\s*\n/);
    const htmlBlocks: string[] = [];

    for (const block of blocks) {
        const trimmed = block.trim();
        if (!trimmed) {
            continue;
        }

        if (trimmed.startsWith("### ")) {
            htmlBlocks.push(`<h3>${renderInlineMarkdown(trimmed.slice(4))}</h3>`);
            continue;
        }

        if (trimmed.startsWith("## ")) {
            htmlBlocks.push(`<h2>${renderInlineMarkdown(trimmed.slice(3))}</h2>`);
            continue;
        }

        if (trimmed.startsWith("# ")) {
            htmlBlocks.push(`<h1>${renderInlineMarkdown(trimmed.slice(2))}</h1>`);
            continue;
        }

        if (trimmed.startsWith("> ")) {
            htmlBlocks.push(`<blockquote>${renderInlineMarkdown(trimmed.slice(2))}</blockquote>`);
            continue;
        }

        if (trimmed.startsWith("- ")) {
            const items = block
                .split(/\n/)
                .map((line) => line.trim())
                .filter((line) => line.startsWith("- "))
                .map((line) => `<li>${renderInlineMarkdown(line.slice(2))}</li>`)
                .join("");
            htmlBlocks.push(`<ul>${items}</ul>`);
            continue;
        }

        if (trimmed.startsWith("```")) {
            const code = trimmed.replace(/^```[a-zA-Z]*\n?|```$/g, "").trim();
            htmlBlocks.push(`<pre><code>${escapeHtml(code)}</code></pre>`);
            continue;
        }

        const paragraphs = trimmed
            .split(/\n/)
            .filter((line) => line.trim())
            .map((line) => renderInlineMarkdown(line.trim()))
            .join("<br />");

        htmlBlocks.push(`<p>${paragraphs}</p>`);
    }

    return htmlBlocks.join("\n");
}
