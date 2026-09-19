"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { createEntryHref } from "@/lib/journal-reader";
import { formatJournalMeta, getReadingTime, isNewJournalEntry, renderMarkdownToHtml, type JournalEntry } from "@/lib/journal";

const articleToMarkdown = (entry: JournalEntry) => {
    const metadata = [
        `# ${entry.title}`,
        "",
        `Category: ${entry.category}`,
        `Date: ${entry.date ?? "Unknown date"}`,
        `Time: ${entry.time ?? "Unknown time"}`,
        `Format: ${entry.format}`,
        "",
        entry.description,
        "",
        entry.content ?? "",
    ].join("\n");

    return metadata.trim() + "\n";
};

const downloadEntry = (entry: JournalEntry) => {
    const blob = new Blob([articleToMarkdown(entry)], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const fileName = `${(entry.slug || entry.title).toLowerCase().replace(/[^a-z0-9]+/g, "-")}.md`;

    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

const printEntry = (entry: JournalEntry) => {
    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) {
        return;
    }

    const content = renderMarkdownToHtml(entry.content ?? entry.description);
    const articleMeta = formatJournalMeta(entry.date, entry.time, entry.content ?? entry.description);
    const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${entry.title}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #0f172a; background: #ffffff; margin: 32px; line-height: 1.7; }
          article { page-break-inside: avoid; }
          h1, h2, h3 { color: #111827; margin: 1.2em 0 0.6em; }
          p, li { color: #1f2937; }
          .meta { color: #475569; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 18px; }
          .description { color: #334155; font-size: 18px; margin-bottom: 18px; }
          blockquote { border-left: 4px solid #fbbf24; padding-left: 16px; color: #374151; }
          pre { background: #f8fafc; padding: 16px; border-radius: 12px; overflow: auto; }
          ul, ol { padding-left: 1.5rem; }
          @media print { .page-break { page-break-before: always; } .page-break:first-child { page-break-before: auto; } }
        </style>
      </head>
      <body>
        <article>
          <div class="meta">${entry.category} • ${articleMeta || "Lab Journal"}</div>
          <h1>${entry.title}</h1>
          <p class="description">${entry.description}</p>
          ${content}
        </article>
      </body>
    </html>`;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    window.setTimeout(() => printWindow.print(), 250);
};

const printEntries = (entries: JournalEntry[]) => {
    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) {
        return;
    }

    const articles = entries
        .map((entry) => {
            const content = renderMarkdownToHtml(entry.content ?? entry.description);
            const articleMeta = formatJournalMeta(entry.date, entry.time, entry.content ?? entry.description);
            return `
              <article class="page-break">
                <div class="meta">${entry.category} • ${articleMeta || "Lab Journal"}</div>
                <h1>${entry.title}</h1>
                <p class="description">${entry.description}</p>
                ${content}
              </article>
            `;
        })
        .join("");

    const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Selected Lab Journal Articles</title>
        <style>
          body { font-family: Arial, sans-serif; color: #0f172a; background: #ffffff; margin: 32px; line-height: 1.7; }
          article { page-break-inside: avoid; }
          .page-break { page-break-before: always; }
          .page-break:first-child { page-break-before: auto; }
          h1, h2, h3 { color: #111827; margin: 1.2em 0 0.6em; }
          p, li { color: #1f2937; }
          .meta { color: #475569; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 18px; }
          .description { color: #334155; font-size: 18px; margin-bottom: 18px; }
          blockquote { border-left: 4px solid #fbbf24; padding-left: 16px; color: #374151; }
          pre { background: #f8fafc; padding: 16px; border-radius: 12px; overflow: auto; }
          ul, ol { padding-left: 1.5rem; }
        </style>
      </head>
      <body>
        ${articles}
      </body>
    </html>`;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    window.setTimeout(() => printWindow.print(), 250);
};

const shareEntry = async (entry: JournalEntry) => {
    const shareUrl = `${window.location.origin}${createEntryHref(entry.slug)}`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: entry.title,
                text: entry.description,
                url: shareUrl,
            });
            return;
        } catch {
            // Ignore share cancellation.
        }
    }

    try {
        await navigator.clipboard.writeText(`${entry.title}\n${entry.description}\n${shareUrl}`);
    } catch {
        window.prompt("Copy this article link:", shareUrl);
    }
};

const shareSelectedEntries = async (entries: JournalEntry[]) => {
    const shareUrlList = entries
        .map((entry) => `${entry.title}: ${window.location.origin}${createEntryHref(entry.slug)}`)
        .join("\n");

    const files = entries.map((entry) => new File([articleToMarkdown(entry)], `${(entry.slug || entry.title).toLowerCase().replace(/[^a-z0-9]+/g, "-")}.md`, { type: "text/markdown;charset=utf-8" }));

    if (navigator.canShare && navigator.canShare({ files })) {
        try {
            await navigator.share({
                title: `Selected Lab Journal Articles (${entries.length})`,
                text: "Selected articles from The Lab Journal",
                files,
            });
            return;
        } catch {
            // Fall back gracefully when sharing is cancelled or unsupported.
        }
    }

    try {
        await navigator.clipboard.writeText(shareUrlList);
    } catch {
        window.prompt("Copy the selected article links:", shareUrlList);
    }
};

type LabJournalExplorerProps = {
    entries: JournalEntry[];
};

export default function LabJournalExplorer({ entries }: LabJournalExplorerProps) {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
    const [showLibrary, setShowLibrary] = useState(false);

    const recentEntries = entries.slice(0, 3);

    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(entries.map((entry) => entry.category).filter(Boolean)));
        return ["All", ...uniqueCategories];
    }, [entries]);

    const filteredEntries = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return entries.filter((entry) => {
            const matchesCategory = activeCategory === "All" || entry.category === activeCategory;
            if (!matchesCategory) {
                return false;
            }

            if (!normalizedQuery) {
                return true;
            }

            const searchText = [entry.title, entry.description, entry.category, ...entry.notes].join(" ").toLowerCase();
            return searchText.includes(normalizedQuery);
        });
    }, [activeCategory, entries, query]);

    const selectedEntries = entries.filter((entry) => selectedSlugs.includes(entry.slug));

    const toggleEntrySelection = (slug: string) => {
        setSelectedSlugs((current) =>
            current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]
        );
    };

    const selectVisibleEntries = () => {
        const slugs = filteredEntries.map((entry) => entry.slug);
        setSelectedSlugs((current) => Array.from(new Set([...current, ...slugs])));
    };

    const clearSelection = () => setSelectedSlugs([]);

    return (
        <>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {recentEntries.map((entry) => {
                    const meta = formatJournalMeta(entry.date, entry.time, entry.content ?? entry.description);
                    const readingTime = getReadingTime(entry.content ?? entry.description);
                    const isNew = isNewJournalEntry(entry.date, entry.time);

                    return (
                        <article key={entry.slug} className="interactive-card glass-card group relative overflow-hidden rounded-[2rem] p-5 ui-transition hover:-translate-y-1 hover:border-cyan-400/30 sm:p-6">
                            <div className={`absolute inset-0 bg-gradient-to-br ${entry.accent} opacity-90`} aria-hidden="true" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="glass-chip rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
                                        {entry.category}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {isNew ? (
                                            <span className="rounded-full border border-emerald-500/30 bg-emerald-100 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                                                New
                                            </span>
                                        ) : null}
                                        <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">{entry.format}</span>
                                    </div>
                                </div>

                                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">{entry.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-700">{entry.description}</p>

                                {meta ? (
                                    <div className="mt-4">
                                        <p className="text-sm font-medium text-slate-800">{meta}</p>
                                        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">{readingTime}</p>
                                    </div>
                                ) : null}

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {entry.notes.map((note) => (
                                        <span key={note} className="glass-chip rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-700">
                                            {note}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    <Link
                                        href={createEntryHref(entry.slug)}
                                        className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-100"
                                    >
                                        Read Article
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => downloadEntry(entry)}
                                        aria-label={`Download ${entry.title}`}
                                        className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                                    >
                                        Download
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => printEntry(entry)}
                                        aria-label={`Print ${entry.title}`}
                                        className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                                    >
                                        Print
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => void shareEntry(entry)}
                                        aria-label={`Share ${entry.title}`}
                                        className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                                    >
                                        Share
                                    </button>
                                </div>

                                <label className="mt-5 flex items-center gap-3 text-sm font-medium text-slate-800">
                                    <input
                                        type="checkbox"
                                        checked={selectedSlugs.includes(entry.slug)}
                                        onChange={() => toggleEntrySelection(entry.slug)}
                                        aria-label={`Select ${entry.title}`}
                                        className="h-4 w-4 rounded border-slate-900/20 bg-white text-amber-500 focus:ring-2 focus:ring-amber-300"
                                    />
                                    Select article
                                </label>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    type="button"
                    onClick={() => {
                        setShowLibrary(true);
                        window.setTimeout(() => {
                            document.getElementById("article-library")?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 50);
                    }}
                    className="inline-flex items-center justify-center rounded-full border-2 border-slate-900/20 bg-amber-300 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_14px_30px_rgba(251,191,36,0.18)] transition hover:-translate-y-0.5 hover:bg-amber-200"
                >
                    See All Articles →
                </button>
            </div>

            {showLibrary ? (
                <div id="article-library" className="mt-12">
                    <div className="rounded-[2rem] border border-slate-900/10 bg-white/75 p-4 shadow-[8px_8px_0_rgba(15,23,42,0.04)] backdrop-blur-sm sm:p-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <label className="relative block w-full max-w-xl">
                                <span className="sr-only">Search journal entries</span>
                                <input
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search articles, notes, and topics..."
                                    className="w-full rounded-full border border-slate-900/15 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
                                />
                            </label>

                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        className={`rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${activeCategory === category
                                            ? "border-slate-900 bg-slate-900 text-white"
                                            : "border-slate-900/15 bg-white text-slate-700 hover:border-slate-900/25"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {selectedEntries.length > 0 ? (
                        <div className="mt-6 flex flex-col gap-3 rounded-[1.75rem] border border-slate-900/15 bg-white/80 p-4 shadow-[8px_8px_0_rgba(15,23,42,0.04)] sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm font-semibold text-slate-800">
                                {selectedEntries.length} article{selectedEntries.length === 1 ? "" : "s"} selected
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={() => selectVisibleEntries()}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-50"
                                >
                                    Select All
                                </button>
                                <button
                                    type="button"
                                    onClick={clearSelection}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-50"
                                >
                                    Clear Selection
                                </button>
                                <button
                                    type="button"
                                    onClick={() => downloadEntries(selectedEntries)}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-amber-100 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-200"
                                >
                                    Download Selected
                                </button>
                                <button
                                    type="button"
                                    onClick={() => printEntries(selectedEntries)}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-amber-100 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-200"
                                >
                                    Print Selected
                                </button>
                                <button
                                    type="button"
                                    onClick={() => void shareSelectedEntries(selectedEntries)}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-amber-100 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-200"
                                >
                                    Share/Export Selected
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-6 flex flex-col gap-3 rounded-[1.75rem] border border-slate-900/10 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm font-medium text-slate-700">No articles selected</p>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={() => selectVisibleEntries()}
                                    disabled={filteredEntries.length === 0}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Select All
                                </button>
                                <button
                                    type="button"
                                    onClick={clearSelection}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-50"
                                >
                                    Clear Selection
                                </button>
                            </div>
                        </div>
                    )}

                    {filteredEntries.length === 0 ? (
                        <div className="mt-10 rounded-[2rem] border border-slate-900/10 bg-white/70 p-8 text-sm leading-7 text-slate-700">
                            No matching journal articles yet.
                        </div>
                    ) : (
                        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {filteredEntries.map((entry) => {
                                const meta = formatJournalMeta(entry.date, entry.time, entry.content ?? entry.description);
                                const readingTime = getReadingTime(entry.content ?? entry.description);
                                const isNew = isNewJournalEntry(entry.date, entry.time);
                                const isSelected = selectedSlugs.includes(entry.slug);

                                return (
                                    <article key={entry.slug} className={`interactive-card glass-card group relative overflow-hidden rounded-[2rem] p-5 ui-transition hover:-translate-y-1 hover:border-cyan-400/30 sm:p-6 ${isSelected ? "border-2 border-amber-400 shadow-[0_0_0_3px_rgba(251,191,36,0.12)]" : "border border-slate-900/15"}`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${entry.accent} opacity-90`} aria-hidden="true" />
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="glass-chip rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
                                                    {entry.category}
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    {isNew ? (
                                                        <span className="rounded-full border border-emerald-500/30 bg-emerald-100 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                                                            New
                                                        </span>
                                                    ) : null}
                                                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">{entry.format}</span>
                                                </div>
                                            </div>

                                            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">{entry.title}</h3>
                                            <p className="mt-4 text-sm leading-7 text-slate-700">{entry.description}</p>

                                            {meta ? (
                                                <div className="mt-4">
                                                    <p className="text-sm font-medium text-slate-800">{meta}</p>
                                                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">{readingTime}</p>
                                                </div>
                                            ) : null}

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {entry.notes.map((note) => (
                                                    <span key={note} className="glass-chip rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-700">
                                                        {note}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-6 flex flex-wrap gap-2">
                                                <Link
                                                    href={createEntryHref(entry.slug)}
                                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-100"
                                                >
                                                    Read Article
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => downloadEntry(entry)}
                                                    aria-label={`Download ${entry.title}`}
                                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                                                >
                                                    Download
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => printEntry(entry)}
                                                    aria-label={`Print ${entry.title}`}
                                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                                                >
                                                    Print
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => void shareEntry(entry)}
                                                    aria-label={`Share ${entry.title}`}
                                                    className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                                                >
                                                    Share
                                                </button>
                                            </div>

                                            <label className="mt-5 flex items-center gap-3 text-sm font-medium text-slate-800">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => toggleEntrySelection(entry.slug)}
                                                    aria-label={`Select ${entry.title}`}
                                                    className="h-4 w-4 rounded border-slate-900/20 bg-white text-amber-500 focus:ring-2 focus:ring-amber-300"
                                                />
                                                Select article
                                            </label>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </div>
            ) : null}
            <style>{`
                @media print {
                  body * { visibility: hidden; }
                  .journal-print-area, .journal-print-area * { visibility: visible; }
                  .journal-print-area { position: absolute; inset: 0; background: white; }
                }
            `}</style>
        </>
    );
}

const downloadEntries = (entries: JournalEntry[]) => {
    entries.forEach((entry) => downloadEntry(entry));
};
