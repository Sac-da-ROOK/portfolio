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
