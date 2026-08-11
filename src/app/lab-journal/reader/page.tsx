import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import JournalReader from "@/components/JournalReader";
import { getPublishedJournalEntries } from "@/lib/journal";

export const dynamic = "force-dynamic";

export default async function ReaderPage({ searchParams }: { searchParams?: Promise<{ entry?: string }> }) {
    const params = searchParams ? await searchParams : {};
    const entryTitle = params.entry ? decodeURIComponent(params.entry) : "";
    const entries = getPublishedJournalEntries();
    const entry = entries.find((item) => item.title === entryTitle) ?? entries[0];

    if (!entry) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_30%),linear-gradient(180deg,#fffef7_0%,#fff9db_100%)]">
            <Navbar />
            <AnimatedSection delay={20} className="px-0">
                <JournalReader entries={entries} entryTitle={entry.title} />
            </AnimatedSection>
        </main>
    );
}
