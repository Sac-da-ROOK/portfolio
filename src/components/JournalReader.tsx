"use client";

import Link from "next/link";
import { useRef } from "react";
import { createEntryHref, type JournalEntry } from "@/lib/journal-reader";

type JournalReaderProps = {
    entries: JournalEntry[];
    entryTitle: string;
};

function normalizeText(value: string) {
    return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export default function JournalReader({ entries, entryTitle }: JournalReaderProps) {
    const bodyRef = useRef<HTMLDivElement>(null);
    const entry = entries.find((item) => item.title === entryTitle) ?? entries[0];

    if (!entry) {
        return null;
    }

    const index = entries.findIndex((item) => item.title === entry.title);
    const prevEntry = index > 0 ? entries[index - 1] : null;
    const nextEntry = index >= 0 && index < entries.length - 1 ? entries[index + 1] : null;
    const content = normalizeText(entry.content ?? entry.description);

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
                        </div>

                        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-4xl">
                            {entry.title}
                        </h1>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                            {entry.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {entry.notes.map((note) => (
                                <span key={note} className="rounded-full border border-slate-900/15 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-700">
                                    {note}
                                </span>
                            ))}
                        </div>

                        <div ref={bodyRef} className="mt-8 max-h-[70vh] overflow-y-auto rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,250,215,0.92))] p-6 text-base leading-8 text-slate-800 shadow-inner">
                            <p>{content}</p>
                        </div>
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
