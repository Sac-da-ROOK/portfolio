"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import GalleryLightbox, { type GalleryLightboxItem } from "@/components/GalleryLightbox";

const galleryFilters = ["ALL", "PHOTOS", "VIDEOS"] as const;

type GalleryFilter = (typeof galleryFilters)[number];

type GalleryGridProps = {
    items: GalleryLightboxItem[];
    activeFilter: GalleryFilter;
};

function buildGalleryHref(filter: GalleryFilter, searchParams: URLSearchParams) {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (filter === "ALL") {
        nextParams.delete("filter");
    } else {
        nextParams.set("filter", filter.toLowerCase());
    }

    const queryString = nextParams.toString();
    return queryString ? `/gallery?${queryString}` : "/gallery";
}

export default function GalleryGrid({ items, activeFilter }: GalleryGridProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const searchTerm = (searchParams.get("search") ?? "").trim();

    const filteredItems = useMemo(() => {
        let result = items;

        if (activeFilter !== "ALL") {
            result = result.filter((item) => item.type === (activeFilter === "PHOTOS" ? "photo" : "video"));
        }

        if (!searchTerm) {
            return result;
        }

        const queryWords = searchTerm
            .toLowerCase()
            .split(/\s+/)
            .filter(Boolean);

        return result.filter((item) => {
            const captionText = (item.caption ?? "").toLowerCase();
            return queryWords.every((word) => captionText.includes(word));
        });
    }, [activeFilter, items, searchTerm]);

    const updateSearch = (nextValue: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (nextValue.trim()) {
            params.set("search", nextValue.trim());
        } else {
            params.delete("search");
        }

        const queryString = params.toString();
        router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    };

    return (
        <main id="main-content" className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_30%),linear-gradient(180deg,#fffef7_0%,#fff9db_100%)] text-slate-900">
            <section className="section-shell relative isolate overflow-hidden px-3 pb-12 pt-24 sm:px-4 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="ambient-orb ambient-orb-one" />
                    <div className="ambient-orb ambient-orb-two" />
                    <div className="ambient-orb ambient-orb-three" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(250,204,21,0.26),transparent_42%)]" />
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center rounded-full border border-white/30 bg-white/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-700 backdrop-blur-sm">
                            Portfolio Media
                        </div>

                        <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] text-slate-900">
                            Gallery
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                            A collection of project moments, experiments, competition snapshots, and Lab Journal highlights.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 border-b border-slate-900/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 p-1 backdrop-blur-sm">
                            {galleryFilters.map((filter) => {
                                const isActive = activeFilter === filter;
                                const href = buildGalleryHref(filter, searchParams);

                                return (
                                    <Link
                                        key={filter}
                                        href={href}
                                        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] transition ${isActive ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                                    >
                                        {filter}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="relative w-full max-w-sm">
                            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden="true">
                                ⌕
                            </span>
                            <input
                                type="search"
                                value={searchTerm}
                                onChange={(event) => updateSearch(event.target.value)}
                                placeholder="Search captions"
                                className="w-full rounded-full border border-slate-200 bg-white/80 py-2.5 pl-10 pr-10 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-amber-200"
                                aria-label="Search gallery captions"
                            />
                            {searchTerm ? (
                                <button
                                    type="button"
                                    onClick={() => updateSearch("")}
                                    className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                                    aria-label="Clear search"
                                >
                                    ×
                                </button>
                            ) : null}
                        </div>
                    </div>

                    {filteredItems.length === 0 ? (
                        <div className="mt-10 rounded-[2rem] border border-slate-900/10 bg-white/55 p-8 text-sm leading-7 text-slate-700 backdrop-blur-sm">
                            {searchTerm ? `No media found matching your search for "${searchTerm}".` : "No gallery media has been added yet."}
                        </div>
                    ) : (
                        <div className="mt-8 grid grid-cols-3 gap-1.5 sm:gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {filteredItems.map((item, index) => (
                                <button
                                    key={`${item.src}-${index}`}
                                    type="button"
                                    onClick={() => setSelectedIndex(index)}
                                    className="group relative aspect-square overflow-hidden rounded-[0.9rem] border border-slate-900/10 bg-slate-100 text-left shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition duration-200 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
                                >
                                    {item.type === "video" ? (
                                        <>
                                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-xl text-white shadow-lg backdrop-blur-sm">
                                                    ▶
                                                </div>
                                            </div>
                                            <div className="absolute left-2 top-2 z-10 rounded-full border border-white/30 bg-black/35 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                                                Video
                                            </div>
                                        </>
                                    ) : null}

                                    {item.type === "video" ? (
                                        <div className="h-full w-full bg-slate-900">
                                            <video
                                                className="h-full w-full object-cover opacity-90 transition duration-200 group-hover:scale-[1.02]"
                                                muted
                                                playsInline
                                                preload="metadata"
                                                src={item.src}
                                            />
                                        </div>
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            width={1200}
                                            height={1200}
                                            className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                                            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                            loading="lazy"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {selectedIndex !== null && filteredItems[selectedIndex] ? (
                <GalleryLightbox
                    items={filteredItems}
                    initialIndex={selectedIndex}
                    onClose={() => setSelectedIndex(null)}
                />
            ) : null}
        </main>
    );
}
