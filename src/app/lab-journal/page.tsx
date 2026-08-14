import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import { createEntryHref } from "@/lib/journal-reader";
import { getPublishedJournalEntries, type JournalEntry } from "@/lib/journal";

const journalCategories = [
    "Math",
    "Computer Science",
    "Science",
    "Robotics",
    "Chess",
    "Competitions",
    "Projects",
    "Learning"
];

const mediaPanels = [
    {
        title: "Photo archive",
        description: "Experiment setups, notebook pages, trophies, and project snapshots.",
        label: "Photos"
    },
    {
        title: "Video logs",
        description: "Demo clips, competition recaps, and walkthroughs of what I built.",
        label: "Videos"
    },
    {
        title: "Discovery notes",
        description: "Short personal entries about ideas, mistakes, and what changed my thinking.",
        label: "Learned"
    }
];

export const metadata = {
    title: "The Lab Journal",
    description: "A polished student STEM journal for projects, experiments, competitions, ideas, and lessons learned."
};

async function getJournalEntries(): Promise<JournalEntry[]> {
    return getPublishedJournalEntries();
}

export const dynamic = 'force-dynamic';

export default async function LabJournalPage() {
    const journalEntries = await getJournalEntries();
    const latestArticleLabel = journalEntries[0]?.title ?? "No published articles yet";

    return (
        <main id="main-content" className="min-h-screen">
            <Navbar />

            <section className="section-shell relative isolate overflow-hidden px-6 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="ambient-orb ambient-orb-one" />
                    <div className="ambient-orb ambient-orb-two" />
                    <div className="ambient-orb ambient-orb-three" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(250,204,21,0.26),transparent_42%)]" />
                </div>

                <div className="mx-auto max-w-6xl">
                    <AnimatedSection className="max-w-3xl" delay={20}>
                        <div className="inline-flex items-center rounded-full border-2 border-slate-900/20 bg-amber-200/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-900">
                            Student STEM Journal
                        </div>

                        <h1 className="mt-8 text-[clamp(3rem,8vw,5.5rem)] font-semibold tracking-[-0.03em] text-slate-900">
                            The Lab Journal
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg lg:text-xl">
                            A place where I document projects, experiments, competitions, ideas, and things I learn, keeping each entry organized like a polished STEM notebook.
                        </p>

                        <p className="mt-4 max-w-2xl text-xs uppercase tracking-[0.34em] text-amber-900/80">
                            Academic notes • Field observations • Competition reflections • Project write-ups
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                            <Link
                                href="#entries"
                                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-slate-900/20 bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 ui-transition hover:-translate-y-0.5 hover:bg-amber-200"
                            >
                                Browse entries
                            </Link>
                            <Link
                                href="#method"
                                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-slate-900/20 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 ui-transition hover:-translate-y-0.5 hover:bg-amber-100"
                            >
                                View journal method
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                        <AnimatedSection className="interactive-card glass-card rounded-[2rem] p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30" delay={70}>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.24em] text-slate-600">Notebook Index</p>
                                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">Organized by subject, medium, and lesson</h2>
                                </div>
                                <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border-2 border-dashed border-slate-900/25 bg-amber-50 text-slate-500 sm:flex">
                                    01
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                                {journalCategories.map((category) => (
                                    <span key={category} className="glass-chip rounded-full px-4 py-2 text-sm font-medium text-slate-800">
                                        {category}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {[
                                    { label: "Latest article", value: latestArticleLabel },
                                    { label: "Media ready", value: "Photos and videos" },
                                    { label: "Tone", value: "Academic and personal" }
                                ].map((item) => (
                                    <div key={item.label} className="glass-card-soft rounded-2xl px-4 py-4">
                                        <p className="text-[11px] uppercase tracking-[0.26em] text-slate-600">{item.label}</p>
                                        <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="interactive-card glass-card rounded-[2rem] p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30" delay={110}>
                            <p className="text-xs uppercase tracking-[0.24em] text-slate-600">Journal Notes</p>
                            <div className="mt-5 space-y-4">
                                {[
                                    "I write entries like school notes, but with enough detail to help me return, review, and improve.",
                                    "Every entry can include a write-up, photos, videos, experiment results, competition experiences, or project progress.",
                                    "The goal is not just to archive work, but to show how my thinking changes after each challenge."
                                ].map((note) => (
                                    <div key={note} className="rounded-[1.5rem] border-2 border-slate-900/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,250,215,0.85))] px-5 py-4 text-sm leading-7 text-slate-700">
                                        {note}
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <AnimatedSection delay={100}>
                <section className="section-shell px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20" aria-labelledby="media-heading">
                    <div className="mx-auto max-w-6xl">
                        <div className="max-w-3xl">
                            <p className="section-kicker">Media Shelf</p>
                            <h2 id="media-heading" className="section-title">A journal that holds images, clips, and project evidence.</h2>
                            <p className="section-lead">
                                Photo essays, demo videos, experiment snapshots, and school project artifacts all fit into the same visual system.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <article className="interactive-card glass-card rounded-[2rem] p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.24em] text-slate-600">Featured media</p>
                                        <h3 className="mt-3 text-2xl font-semibold text-slate-900">Project gallery and experiment evidence</h3>
                                    </div>
                                    <div className="rounded-full border-2 border-slate-900/15 bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-800">
                                        Archive
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    {[
                                        "Annotated photos from experiments and builds",
                                        "Video walkthroughs of demos and competition runs",
                                        "Short summaries of what I changed and why",
                                        "Screenshots and charts that support the write-up"
                                    ].map((item) => (
                                        <div key={item} className="glass-card-soft rounded-[1.5rem] px-4 py-4 text-sm leading-7 text-slate-700">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                                {mediaPanels.map((panel) => (
                                    <article key={panel.title} className="interactive-card glass-card rounded-[2rem] p-5 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                                        <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-900/80">{panel.label}</p>
                                        <h3 className="mt-3 text-xl font-semibold text-slate-900">{panel.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-700">{panel.description}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={140}>
                <section id="entries" className="section-shell px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20" aria-labelledby="entries-heading">
                    <div className="mx-auto max-w-6xl">
                        <div className="max-w-3xl">
                            <p className="section-kicker">Entries</p>
                            <h2 id="entries-heading" className="section-title">Articles and write-ups arranged like a clean STEM notebook.</h2>
                            <p className="section-lead">
                                This journal is built for articles, photos, videos, project write-ups, experiments, competition experiences, and short reflections on what I learned.
                            </p>
                        </div>

                        {journalEntries.length === 0 ? (
                            <div className="mt-10 rounded-[2rem] border border-slate-900/10 bg-white/70 p-8 text-sm leading-7 text-slate-700">
                                No published entries have been synced from the Lab Journal CMS yet.
                            </div>
                        ) : (
                            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {journalEntries.map((entry) => (
                                    <Link key={entry.title} href={createEntryHref(entry.title)} target="_blank" rel="noopener noreferrer" className="block">
                                        <article className="interactive-card glass-card group relative overflow-hidden rounded-[2rem] p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${entry.accent} opacity-90`} aria-hidden="true" />
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between gap-4">
                                                    <span className="glass-chip rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
                                                        {entry.category}
                                                    </span>
                                                    <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">{entry.format}</span>
                                                </div>

                                                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">{entry.title}</h3>
                                                <p className="mt-4 text-sm leading-7 text-slate-700">{entry.description}</p>

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
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={140}>
                <section id="method" className="section-shell px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20" aria-labelledby="method-heading">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                            <div className="max-w-2xl">
                                <p className="section-kicker">Journal Method</p>
                                <h2 id="method-heading" className="section-title">A simple academic structure that keeps every entry useful.</h2>
                                <p className="section-lead">
                                    Each post can follow a classroom-style flow so the journal stays organized, easy to scan, and useful for future review.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    { step: "Question", text: "What am I trying to learn, build, or solve?" },
                                    { step: "Process", text: "What did I try, measure, sketch, code, or test?" },
                                    { step: "Evidence", text: "What photos, results, or observations support it?" },
                                    { step: "Reflection", text: "What would I do differently next time?" }
                                ].map((item) => (
                                    <article key={item.step} className="glass-card rounded-[1.75rem] p-5">
                                        <p className="text-[11px] uppercase tracking-[0.26em] text-slate-600">{item.step}</p>
                                        <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </main>
    );
}