import GalleryGrid from "@/components/GalleryGrid";
import Navbar from "@/components/Navbar";
import { getGalleryItems } from "@/lib/gallery";
import { getPublishedJournalEntries } from "@/lib/journal-data";

export const metadata = {
    title: "Gallery",
    description: "A clean media gallery for project photos and videos from the Lab Journal and portfolio.",
};

type GalleryFilter = "ALL" | "PHOTOS" | "VIDEOS";

export default async function GalleryPage({
    searchParams,
}: {
    searchParams?: Promise<{ filter?: string; search?: string }>;
}) {
    const params = (await searchParams) ?? {};
    const activeFilter: GalleryFilter = (() => {
        const value = params.filter?.toUpperCase();
        if (value === "PHOTOS" || value === "VIDEOS") {
            return value;
        }
        return "ALL";
    })();

    const galleryItems = await getGalleryItems();
    const journalEntries = await getPublishedJournalEntries();

    const articleMediaMap = new Map<string, { slug: string; title: string }>();
    journalEntries.forEach((entry) => {
        if (!entry.media || entry.media.length === 0) {
            return;
        }

        entry.media.forEach((media) => {
            articleMediaMap.set(media, { slug: entry.slug, title: entry.title });
        });
    });

    const items = galleryItems
        .map((item) => {
            const matchedArticle = articleMediaMap.get(item.src);
            return {
                ...item,
                articleSlug: matchedArticle?.slug,
                articleTitle: matchedArticle?.title,
            };
        })
        .filter(Boolean);

    return (
        <>
            <Navbar />
            <GalleryGrid items={items} activeFilter={activeFilter} />
        </>
    );
}
