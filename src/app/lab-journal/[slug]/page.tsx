import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import JournalReader from "@/components/JournalReader";
import { getJournalEntryBySlug, getPublishedJournalEntries } from "@/lib/journal-data";

type ArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    const entries = await getPublishedJournalEntries();
    return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const entry = await getJournalEntryBySlug(slug);

    if (!entry) {
        return {
            title: "Article not found",
            description: "The requested Lab Journal article could not be found.",
        };
    }

    return {
        title: `${entry.title} | The Lab Journal`,
        description: entry.description,
    };
}

export default async function LabJournalArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const entry = await getJournalEntryBySlug(slug);

    if (!entry) {
        notFound();
    }

    const entries = await getPublishedJournalEntries();
    const relatedEntries = entries.filter((item) => item.slug !== entry.slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_30%),linear-gradient(180deg,#fffef7_0%,#fff9db_100%)]">
            <Navbar />
            <div className="mx-auto max-w-6xl px-4 pb-8 pt-24 sm:px-6 lg:px-8">
                <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-700">
                    <div className="flex flex-wrap items-center gap-2">
                        <a href="/" className="transition hover:text-slate-900">Home</a>
                        <span aria-hidden="true">/</span>
                        <a href="/lab-journal" className="transition hover:text-slate-900">Journal</a>
                        <span aria-hidden="true">/</span>
                        <span className="text-slate-900">{entry.title}</span>
                    </div>
                </nav>
            </div>
            <AnimatedSection delay={20} className="px-0">
                <JournalReader entries={entries} entryTitle={entry.slug} />
            </AnimatedSection>

            <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
                <div className="rounded-[2rem] border border-amber-300/30 bg-white/80 p-6 shadow-[0_18px_42px_rgba(251,191,36,0.08)] backdrop-blur-sm sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">More from the journal</h2>
                        <a href="/lab-journal" className="text-sm font-semibold text-amber-800 transition hover:text-amber-900">Browse all articles →</a>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {relatedEntries.map((related) => (
                            <a key={related.slug} href={`/lab-journal/${related.slug}`} className="rounded-[1.5rem] border border-amber-300/30 bg-amber-50 p-4 transition hover:border-amber-400 hover:bg-amber-100">
                                <p className="text-[10px] uppercase tracking-[0.24em] text-amber-700">{related.category}</p>
                                <h3 className="mt-2 text-lg font-semibold text-slate-900">{related.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-700">{related.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
