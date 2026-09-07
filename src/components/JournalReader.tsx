"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import JournalArticleInteractions from "@/components/JournalArticleInteractions";
import JournalComments from "@/components/JournalComments";
import { formatJournalMeta, isNewJournalEntry, renderMarkdownToHtml, type JournalEntry } from "@/lib/journal";
import { createEntryHref } from "@/lib/journal-reader";

type JournalReaderProps = {
    entries: JournalEntry[];
    entryTitle: string;
};

export default function JournalReader({ entries, entryTitle }: JournalReaderProps) {
    const bodyRef = useRef<HTMLDivElement>(null);
    const entry = entries.find((item) => item.title === entryTitle || item.slug === entryTitle) ?? entries[0];

    if (!entry) {
        return null;
    }

    const index = entries.findIndex((item) => item.title === entry.title || item.slug === entry.slug);
    const prevEntry = index > 0 ? entries[index - 1] : null;
    const nextEntry = index >= 0 && index < entries.length - 1 ? entries[index + 1] : null;
    const content = renderMarkdownToHtml(entry.content ?? entry.description);
    const articleDateTime = formatJournalMeta(entry.date, entry.time, entry.content ?? entry.description);
    const isNew = isNewJournalEntry(entry.date, entry.time);

    const scrollBody = (direction: "up" | "down") => {
        bodyRef.current?.scrollBy({ top: direction === "up" ? -260 : 260, behavior: "smooth" });
    };

    return (
        <div className="mx-auto flex max-w-7xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
            <div className="sticky top-4 z-20 mb-6 flex flex-wrap items-center justify-between gap-3 rounded-full border border-slate-900/15 bg-white/85 px-4 py-3 shadow-[6px_6px_0_rgba(15,23,42,0.08)] backdrop-blur">
                <Link href="/lab-journal" className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-amber-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:-translate-y-0.5">
                    <span aria-hidden="true">←</span>
                    Return to Lab Journal
                </Link>

                <div className="flex items-center gap-2">
                    <Link
                        href={prevEntry ? createEntryHref(prevEntry.title) : "/lab-journal"}
                        aria-label="Previous article"
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/15 text-lg font-semibold ${prevEntry ? "bg-white text-slate-900" : "bg-slate-100 text-slate-400"}`}
                    >
                        ←
                    </Link>
                    <Link
                        href={nextEntry ? createEntryHref(nextEntry.title) : "/lab-journal"}
                        aria-label="Next article"
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/15 text-lg font-semibold ${nextEntry ? "bg-white text-slate-900" : "bg-slate-100 text-slate-400"}`}
                    >
                        →
                    </Link>
                </div>
            </div>

            <div className="rounded-[2rem] border border-slate-900/15 bg-white/90 p-6 shadow-[12px_12px_0_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
                <div className="flex flex-col gap-8 lg:flex-row">
                    <article className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-slate-900/15 bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-800">
                                {entry.category}
                            </span>
                            <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{entry.format}</span>
                            {isNew ? (
                                <span className="rounded-full border border-emerald-500/30 bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-700">
                                    New
                                </span>
                            ) : null}
                        </div>

                        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-4xl">
                            {entry.title}
                        </h1>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                            {entry.description}
                        </p>

                        {articleDateTime ? (
                            <div className="mt-5">
                                <p className="text-base font-semibold text-slate-800">{articleDateTime}</p>
                                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">All dates and times are in CT</p>
                            </div>
                        ) : null}

                        <div className="mt-6 flex flex-wrap gap-2">
                            {entry.notes.map((note) => (
                                <span key={note} className="rounded-full border border-slate-900/15 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-700">
                                    {note}
                                </span>
                            ))}
                        </div>

                        <div
                            ref={bodyRef}
                            className="journal-markdown mt-8 max-h-[70vh] overflow-y-auto rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,250,215,0.92))] p-6 text-base leading-8 text-slate-800 shadow-inner"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />

                        {entry.media && entry.media.length > 0 ? (
                            <div className="mt-8">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-600">Media</p>
                                <div className="mt-4 grid gap-4 md:grid-cols-2">
                                    {entry.media.map((media) => {
                                        const isVideo = /\.(mp4|webm|mov|m4v)$/i.test(media);
                                        if (isVideo) {
                                            return (
                                                <div key={media} className="overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-slate-900/95 shadow-[8px_8px_0_rgba(15,23,42,0.08)]">
                                                    <video className="h-72 w-full object-cover" controls preload="metadata">
                                                        <source src={media} />
                                                    </video>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div key={media} className="overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-white shadow-[8px_8px_0_rgba(15,23,42,0.08)]">
                                                <Image src={media} alt={entry.title} width={1200} height={900} className="h-72 w-full object-cover" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : null}

                        <div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-slate-900/10 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href={prevEntry ? createEntryHref(prevEntry.title) : "/lab-journal"}
                                className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${prevEntry ? "border-slate-900/15 bg-white text-slate-900" : "border-slate-200 bg-slate-100 text-slate-400"}`}
                            >
                                ← Previous article
                            </Link>
                            <Link
                                href={nextEntry ? createEntryHref(nextEntry.title) : "/lab-journal"}
                                className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${nextEntry ? "border-slate-900/15 bg-white text-slate-900" : "border-slate-200 bg-slate-100 text-slate-400"}`}
                            >
                                Next article →
                            </Link>
                        </div>

                        <JournalArticleInteractions articleId={entry.slug || entry.title} initialLikes={0} initialDislikes={0} />
                        <JournalComments articleId={entry.slug || entry.title} />
                    </article>

                    <aside className="flex w-full max-w-[5rem] flex-col items-center gap-3 self-start rounded-[1.75rem] border border-slate-900/15 bg-slate-50/90 p-3 lg:sticky lg:top-28">
                        <button type="button" onClick={() => scrollBody("up")} aria-label="Scroll up" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/15 bg-white text-xl text-slate-800 hover:bg-amber-100">
                            ↑
                        </button>
                        <button type="button" onClick={() => scrollBody("down")} aria-label="Scroll down" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/15 bg-white text-xl text-slate-800 hover:bg-amber-100">
                            ↓
                        </button>
                    </aside>
                </div>
            </div>
        </div>
    );
}
