"use client";

import { useEffect, useRef, useState } from "react";

type TimelineEntry = {
    year: string;
    title: string;
    description: string;
    technologies: string[];
};

export default function CSJourneyTimeline({ entries }: { entries: TimelineEntry[] }) {
    const timelineSectionRef = useRef<HTMLElement | null>(null);
    const [fillProgress, setFillProgress] = useState(0);
    const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(entries.length).fill(false));
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

        handleChange();
        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }

        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    useEffect(() => {
        const cards = Array.from(timelineSectionRef.current?.querySelectorAll<HTMLElement>(".timeline-card") ?? []);
        if (!cards.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleCards((previous) => {
                    const next = [...previous];
                    entries.forEach((entry) => {
                        const card = entry.target as HTMLElement;
                        const index = Number(card.dataset.index ?? 0);
                        next[index] = entry.isIntersecting;
                    });
                    return next;
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px"
            }
        );

        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const root = timelineSectionRef.current;
        if (!root) return;

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const rect = root.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const rawProgress = ((windowHeight - rect.top) / (rect.height + windowHeight)) * 100;
                const clamped = Math.min(100, Math.max(0, rawProgress));
                setFillProgress(clamped);
                ticking = false;
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section id="cs-timeline" ref={timelineSectionRef} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="cs-timeline-heading">
            <div className="mb-8 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">My Computer Science Journey</p>
                <h2 id="cs-timeline-heading" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                    A timeline of how my interest in computer science continues to evolve.
                </h2>
            </div>

            <div className="relative mt-10">
                <div
                    className="pointer-events-none absolute left-4 top-0 hidden h-full w-px rounded-full bg-slate-900/15 md:left-1/2 md:block md:-translate-x-1/2"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute left-4 top-0 h-full w-px rounded-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 transition-[height] duration-700 ease-out sm:left-5 md:left-1/2 md:-translate-x-1/2"
                    style={{ height: prefersReducedMotion ? "100%" : `${fillProgress}%` }}
                    aria-hidden="true"
                />

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                    {entries.map((entry, index) => {
                        const visible = prefersReducedMotion || visibleCards[index];
                        const isLeft = index % 2 === 0;
                        const shouldAnimate = isMounted && !prefersReducedMotion && visible;

                        return (
                            <article
                                key={`${entry.year}-${entry.title}`}
                                data-index={index}
                                className="timeline-card relative grid grid-cols-[2rem_1fr] items-start gap-4 sm:grid-cols-[2.5rem_1fr] md:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)] md:items-center md:gap-0"
                                aria-labelledby={`cs-timeline-title-${index}`}
                            >
                                <div className="relative col-start-1 row-start-1 flex justify-center md:col-start-2 md:pt-6">
                                    <span
                                        className={`timeline-node mt-6 h-4 w-4 rounded-full border-2 border-amber-300 bg-white shadow-[0_0_0_6px_rgba(250,204,21,0.16)] transition duration-700 ease-out ${visible ? "scale-100 opacity-100" : "scale-75 opacity-70"}`}
                                    />
                                </div>

                                <div
                                    className={`timeline-card group relative col-start-2 row-start-1 w-full max-w-none rounded-[2rem] border border-cyan-500/15 bg-[#0b1d2f]/90 p-5 shadow-[0_10px_20px_rgba(8,47,73,0.12)] transition duration-700 ease-out ui-transition opacity-100 translate-y-0 ${shouldAnimate ? "timeline-card-enter" : ""} ${isLeft ? "md:col-start-1 md:justify-self-end md:pr-10 md:max-w-[34rem]" : "md:col-start-3 md:justify-self-start md:pl-10 md:max-w-[34rem]"}`}
                                    style={{ transitionDelay: `${index * 60}ms` }}
                                >
                                    <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0a1830]/70 p-5 sm:p-6">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.06),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.05),_transparent_30%)] opacity-100" aria-hidden="true" />
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-cyan-400/15 bg-slate-900/60 text-cyan-300 transition group-hover:bg-cyan-400/10">
                                                    <span className="text-lg font-bold text-amber-300">{entry.year.slice(0, 1)}</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{entry.year}</p>
                                                    <h3 id={`cs-timeline-title-${index}`} className="mt-2 text-xl font-semibold text-white">
                                                        {entry.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-sm leading-7 text-slate-300">{entry.description}</p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {entry.technologies.map((tech) => (
                                                    <span key={tech} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
