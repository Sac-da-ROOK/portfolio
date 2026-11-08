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
    delay?: number;
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
    featured = false,
    delay = 0
}: ProjectCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className={`interactive-card group relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(9,19,34,0.98),rgba(15,27,41,0.96))] text-slate-100 shadow-[0_18px_40px_rgba(14,116,144,0.12)] ui-transition hover:-translate-y-1 hover:border-cyan-300/45 ${featured ? "ring-1 ring-cyan-300/25" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="relative overflow-hidden rounded-t-[2rem] border-b border-cyan-300/10 bg-slate-900/80">
                <div className="relative h-44 overflow-hidden sm:h-52">
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
                <div className="absolute left-4 top-4 rounded-full border border-cyan-300/30 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-sm">
                    {status}
                </div>
                {featured && (
                    <div className="absolute right-4 top-4 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-sm">
                        Featured
                    </div>
                )}
            </div>

            <div className="p-5 sm:p-6">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                        <h3 className="text-xl font-semibold text-white">{title}</h3>
                        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${featured ? "border border-cyan-300/30 bg-cyan-400/10 text-cyan-100" : "border border-cyan-300/20 bg-sky-500/10 text-sky-100"}`}>
                            {featured ? "Featured" : "Live"}
                        </span>
                    </div>

                    <p className="text-sm leading-7 text-slate-200">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-cyan-300/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-100">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-3">
                            <Link href={detailPath} className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 ui-transition hover:border-cyan-200/40 hover:bg-cyan-500/15 hover:text-white">
                                View Details
                            </Link>
                            <Link href={liveHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-sky-300/25 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-100 ui-transition hover:border-sky-200/40 hover:bg-sky-500/15 hover:text-white">
                                Live Demo
                            </Link>
                            <Link href={repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-300/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-100 ui-transition hover:border-blue-200/40 hover:bg-blue-500/15 hover:text-white">
                                GitHub
                            </Link>
                        </div>
                        <button
                            type="button"
                            onClick={() => setExpanded((prev) => !prev)}
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-500/5 px-4 py-2 text-sm font-semibold text-cyan-100 ui-transition hover:border-cyan-200/40 hover:bg-cyan-500/10 hover:text-white"
                        >
                            {expanded ? "Show Less" : "Read More"}
                            <span className={`transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}>
                                ↓
                            </span>
                        </button>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mt-4 text-sm leading-7 text-slate-200">{details}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
