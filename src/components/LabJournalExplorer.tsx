"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { createEntryHref } from "@/lib/journal-reader";
import { formatJournalMeta, getReadingTime, isNewJournalEntry, type JournalEntry } from "@/lib/journal";

type LabJournalExplorerProps = {
    entries: JournalEntry[];
};

export default function LabJournalExplorer({ entries }: LabJournalExplorerProps) {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const latestEntry = entries[0] ?? null;

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

    return (
        <>
            {latestEntry ? (
                <div className="mt-10">
                    <Link href={createEntryHref(latestEntry.slug)} className="group block">
                        <article className="interactive-card glass-card relative overflow-hidden rounded-[2rem] border border-slate-900/15 bg-white/80 p-6 shadow-[12px_12px_0_rgba(15,23,42,0.08)] ui-transition hover:-translate-y-1 hover:border-cyan-400/30 sm:p-8 lg:p-10">
                            <div className={`absolute inset-0 bg-gradient-to-br ${latestEntry.accent} opacity-90`} aria-hidden="true" />
                            <div className="relative z-10">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="rounded-full border border-slate-900/15 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-800">
                                            {latestEntry.category}
                                        </span>
                                        <span className="rounded-full border border-slate-900/15 bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-800">
                                            LATEST ENTRY
                                        </span>
                                        {isNewJournalEntry(latestEntry.date, latestEntry.time) ? (
                                            <span className="rounded-full border border-emerald-500/30 bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-700">
                                                New
                                            </span>
                                        ) : null}
                                    </div>
                                    <span className="text-[11px] uppercase tracking-[0.24em] text-slate-600">{latestEntry.format}</span>
                                </div>

                                <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                                    <div>
                                        <h3 className="text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">{latestEntry.title}</h3>
                                        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">{latestEntry.description}</p>
                                    </div>

                                    <div className="flex justify-start lg:justify-end">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[6px_6px_0_rgba(15,23,42,0.06)] transition-transform group-hover:-translate-y-0.5">
                                            Read Entry →
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">{formatJournalMeta(latestEntry.date, latestEntry.time, latestEntry.content ?? latestEntry.description)}</p>
                                        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">All dates and times are in CT</p>
                                    </div>
                                    <div className="text-sm font-medium text-slate-700">{getReadingTime(latestEntry.content ?? latestEntry.description)}</div>
                                </div>
                            </div>
                        </article>
                    </Link>
                </div>
            ) : null}

            <div className="mt-10 rounded-[2rem] border border-slate-900/10 bg-white/75 p-4 shadow-[8px_8px_0_rgba(15,23,42,0.04)] backdrop-blur-sm sm:p-6">
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

                        return (
                            <Link key={entry.slug} href={createEntryHref(entry.slug)} className="block">
                                <article className="interactive-card glass-card group relative overflow-hidden rounded-[2rem] p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
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
                                                <span key={note} className="glass-chip rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-700">
                                                    {note}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="mt-6 text-xs uppercase tracking-[0.24em] text-slate-500">Open in reader</p>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
}
