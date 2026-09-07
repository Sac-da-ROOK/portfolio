"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type GalleryLightboxItem = {
    src: string;
    type: "photo" | "video";
    title: string;
    caption?: string;
    articleSlug?: string;
    articleTitle?: string;
};

type GalleryLightboxProps = {
    items: GalleryLightboxItem[];
    initialIndex: number;
    onClose: () => void;
    canEditCaption?: boolean;
    onEditCaption?: (item: GalleryLightboxItem) => void;
};

export default function GalleryLightbox({ items, initialIndex, onClose, canEditCaption = false, onEditCaption }: GalleryLightboxProps) {
    const [index, setIndex] = useState(initialIndex);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
            if (event.key === "ArrowRight") {
                setIndex((current) => (current + 1) % items.length);
            }
            if (event.key === "ArrowLeft") {
                setIndex((current) => (current - 1 + items.length) % items.length);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [items.length, onClose]);

    const item = items[index];

    const prevItem = useMemo(() => {
        if (items.length <= 1) return null;
        return items[(index - 1 + items.length) % items.length];
    }, [index, items]);

    const nextItem = useMemo(() => {
        if (items.length <= 1) return null;
        return items[(index + 1) % items.length];
    }, [index, items]);

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(2,6,23,0.86)] p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative z-10 flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-[0_30px_80px_rgba(15,23,42,0.55)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
                    <div className="min-w-0 pr-3">
                        <p className="truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                            {item.type === "video" ? "Video" : "Photo"}
                        </p>
                        <h2 className="truncate text-sm font-semibold text-white sm:text-base">{item.title}</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        {canEditCaption && onEditCaption ? (
                            <button type="button" onClick={() => onEditCaption(item)} className="hidden rounded-full border border-amber-300/60 bg-amber-400/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200 transition hover:bg-amber-400/20 sm:inline-flex">
                                Edit Caption
                            </button>
                        ) : null}
                        {item.articleSlug && item.articleTitle ? (
                            <Link href={`/lab-journal/${item.articleSlug}`} className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:inline-flex">
                                From the Lab Journal
                            </Link>
                        ) : null}
                        <button type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition hover:bg-white/10" aria-label="Close viewer">
                            ×
                        </button>
                    </div>
                </div>

                <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-950">
                    <button type="button" onClick={() => setIndex((current) => (current - 1 + items.length) % items.length)} className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/25 text-xl text-white transition hover:bg-black/40 sm:left-6" aria-label="Previous media">
                        ‹
                    </button>

                    <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-6">
                        {item.type === "video" ? (
                            <video className="max-h-[78vh] w-full max-w-5xl rounded-[1.25rem] bg-black object-contain" controls autoPlay>
                                <source src={item.src} />
                            </video>
                        ) : (
                            <Image src={item.src} alt={item.title} width={1800} height={1200} className="max-h-[78vh] w-full max-w-5xl rounded-[1.25rem] object-contain" priority />
                        )}
                    </div>

                    <button type="button" onClick={() => setIndex((current) => (current + 1) % items.length)} className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/25 text-xl text-white transition hover:bg-black/40 sm:right-6" aria-label="Next media">
                        ›
                    </button>
                </div>

                {item.caption ? (
                    <div className="border-t border-white/10 bg-slate-950/80 px-4 py-4 sm:px-6">
                        <p className="max-w-4xl text-sm leading-7 text-slate-200 sm:text-base">{item.caption}</p>
                    </div>
                ) : null}

                <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                        {prevItem ? <button type="button" onClick={() => setIndex((index - 1 + items.length) % items.length)} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10">Prev</button> : null}
                        {nextItem ? <button type="button" onClick={() => setIndex((index + 1) % items.length)} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10">Next</button> : null}
                    </div>

                    {item.articleSlug && item.articleTitle ? (
                        <Link href={`/lab-journal/${item.articleSlug}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
                            {item.articleTitle}
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
