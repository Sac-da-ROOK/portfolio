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
        <article className={`interactive-card group relative overflow-hidden rounded-[2rem] border border-cyan-200/25 bg-[linear-gradient(180deg,rgba(15,24,38,0.98),rgba(17,30,45,0.96))] text-slate-50 shadow-[0_18px_40px_rgba(14,116,144,0.12)] ui-transition hover:-translate-y-1 hover:border-cyan-200/40 ${featured ? "ring-1 ring-cyan-200/25" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="relative overflow-hidden rounded-t-[2rem] border-b border-cyan-200/10 bg-slate-800/80">
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
                <div className="absolute left-4 top-4 rounded-full border border-cyan-200/35 bg-sky-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-50 backdrop-blur-sm">
                    {status}
                </div>
                {featured && (
                    <div className="absolute right-4 top-4 rounded-full border border-cyan-200/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-50 backdrop-blur-sm">
                        Featured
                    </div>
                )}
            </div>

            <div className="p-5 sm:p-6">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                        <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
                        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${featured ? "border border-cyan-200/35 bg-cyan-300/10 text-cyan-50" : "border border-cyan-200/25 bg-sky-300/10 text-sky-50"}`}>
                            {featured ? "Featured" : "Live"}
                        </span>
                    </div>

                    <p className="text-sm leading-7 text-slate-200">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-cyan-200/25 bg-cyan-400/8 px-3 py-1 text-xs font-medium text-cyan-50">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-3">
                            <Link href={detailPath} className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-50 ui-transition hover:border-cyan-100/50 hover:bg-cyan-300/15 hover:text-white">
                                View Details
                            </Link>
                            <Link href={liveHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-sky-200/30 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-50 ui-transition hover:border-sky-100/50 hover:bg-sky-300/15 hover:text-white">
                                Live Demo
                            </Link>
                            <Link href={repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-200/30 bg-blue-300/10 px-4 py-2 text-sm font-semibold text-blue-50 ui-transition hover:border-blue-100/50 hover:bg-blue-300/15 hover:text-white">
                                GitHub
                            </Link>
                        </div>
                        <button
                            type="button"
                            onClick={() => setExpanded((prev) => !prev)}
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-50 ui-transition hover:border-cyan-100/50 hover:bg-cyan-300/12 hover:text-white"
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
