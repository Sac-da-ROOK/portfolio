import { redirect } from "next/navigation";
import { getPublishedJournalEntries } from "@/lib/journal-data";
import { slugify } from "@/lib/journal";

export default async function ReaderPage({ searchParams }: { searchParams?: Promise<{ entry?: string }> }) {
    const params = searchParams ? await searchParams : {};
    const entryValue = params.entry ? decodeURIComponent(params.entry) : "";
    const entries = await getPublishedJournalEntries();

    if (!entryValue) {
        redirect("/lab-journal");
    }

    const match = entries.find((item) => item.title === entryValue || item.slug === entryValue || slugify(item.title) === slugify(entryValue));
    if (!match) {
        redirect("/lab-journal");
    }

    redirect(`/lab-journal/${match.slug}`);
}
