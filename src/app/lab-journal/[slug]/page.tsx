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

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_30%),linear-gradient(180deg,#fffef7_0%,#fff9db_100%)]">
            <Navbar />
            <AnimatedSection delay={20} className="px-0">
                <JournalReader entries={entries} entryTitle={entry.slug} />
            </AnimatedSection>
        </main>
    );
}
