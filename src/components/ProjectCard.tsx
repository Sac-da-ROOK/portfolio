"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    details: string;
    status: string;
    tags: string[];
    detailPath: string;
    liveHref: string;
    repo: string;
    screenshot: string;
    gallery?: string[];
    featured?: boolean;
};

export default function ProjectCard({
    title,
    description,
    details,
    status,
    tags,
    detailPath,
    liveHref,
    repo,
    screenshot,
    gallery = [],
    featured = false
}: ProjectCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className={`group relative overflow-hidden rounded-3xl border bg-slate-950/70 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${featured ? "border-2 border-yellow-300/80 shadow-[0_0_60px_rgba(250,204,21,0.18)]" : "border-white/10 hover:border-cyan-400/30 hover:bg-slate-900/80"}`}>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80">
                <div className="relative h-52 overflow-hidden">
                    <Image
                        src={screenshot}
                        alt={`${title} screenshot`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-200">
                    {status}
                </div>
                {featured && (
                    <div className="absolute right-4 top-4 rounded-full border border-yellow-300/50 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-200 backdrop-blur-sm">
                        Featured
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-white">{title}</h3>
                        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${featured ? "border border-yellow-300/30 bg-yellow-300/10 text-yellow-200" : "border border-white/10 bg-white/5 text-slate-300"}`}>
                            {featured ? "Featured" : "Live"}
                        </span>
                    </div>

                    <p className="text-sm leading-7 text-slate-300">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-3">
                            <Link href={detailPath} className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white">
                                View Details
                            </Link>
                            <Link href={liveHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80 hover:text-cyan-200">
                                Live Demo
                            </Link>
                            <Link href={repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80 hover:text-cyan-200">
                                GitHub
                            </Link>
                        </div>
                        <button
                            type="button"
                            onClick={() => setExpanded((prev) => !prev)}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition duration-300 hover:bg-white/10 hover:text-white"
                        >
                            {expanded ? "Show Less" : "Read More"}
                            <span className={`transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}>
                                ↓
                            </span>
                        </button>
                    </div>

                    <div className={`overflow-hidden transition-[max-height] duration-300 ${expanded ? "max-h-80" : "max-h-0"}`}>
                        <p className="mt-4 text-sm leading-7 text-slate-300">{details}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
