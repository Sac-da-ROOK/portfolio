import Link from "next/link";
import LabJournalExplorer from "@/components/LabJournalExplorer";
import Navbar from "@/components/Navbar";
import { getPublishedJournalEntries } from "@/lib/journal-data";

export const metadata = {
    title: "All Lab Journal Articles",
    description: "Browse the complete library of published Lab Journal articles and manage article actions.",
};

export default async function LabJournalArticlesPage() {
    const entries = await getPublishedJournalEntries();

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
                    <div className="rounded-[2rem] border border-slate-900/15 bg-white/80 p-6 shadow-[12px_12px_0_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-3xl">
                                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-600">The Lab Journal</p>
                                <h1 className="mt-4 text-[clamp(2.6rem,5vw,4.2rem)] font-semibold tracking-[-0.04em] text-slate-900">
                                    All Lab Journal Articles
                                </h1>
                                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                                    Browse the complete archive of published notes, experiments, project reflections, and STEM thinking.
                                </p>
                            </div>

                            <Link
                                href="/lab-journal"
                                className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-amber-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-200"
                            >
                                ← Back to Lab Journal
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10">
                        <LabJournalExplorer entries={entries} />
                    </div>
                </div>
            </section>
        </main>
    );
}
