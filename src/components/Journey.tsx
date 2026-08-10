"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type JourneyEntry = {
    year: string;
    title: string;
    description: string;
    technologies: string[];
    icon: string;
    image?: boolean;
};

const journeyEntries: JourneyEntry[] = [
    {
        year: "2022",
        title: "Early Curiosity in STEM",
        description: "Started exploring math puzzles and science challenges, building confidence through consistent practice.",
        technologies: ["Math Puzzles", "Logic", "Scientific Curiosity"],
        icon: "code",
        image: false
    },
    {
        year: "2023",
        title: "Structured Competition Preparation",
        description: "Built stronger study systems for mathematics and science competitions with focused review cycles.",
        technologies: ["AMC 8", "MathCounts", "Science Prep"],
        icon: "math",
        image: true
    },
    {
        year: "2024",
        title: "First Robotics Builds",
        description: "Started designing and improving robotic prototypes, learning iteration, testing, and teamwork.",
        technologies: ["Robotics", "Sensors", "Iteration"],
        icon: "keyboard",
        image: false
    },
    {
        year: "2025",
        title: "Science Olympiad Expansion",
        description: "Expanded across STEM events and improved experimental thinking, documentation, and analysis.",
        technologies: ["Science Olympiad", "Experiment Design", "Research Notes"],
        icon: "school",
        image: true
    },
    {
        year: "2025",
        title: "Chess as Strategic Training",
        description: "Used tournament play and post-game analysis to strengthen planning, discipline, and decision quality.",
        technologies: ["Tournament Play", "Endgame Study", "Game Analysis"],
        icon: "gamepad",
        image: true
    },
    {
        year: "2026",
        title: "Integrated STEM Portfolio",
        description: "Consolidated projects, achievements, learning logs, and reflections into one structured STEM platform.",
        technologies: ["Projects", "Competitions", "Learning Journal"],
        icon: "launch",
        image: true
    },
    {
        year: "Present",
        title: "Robotics + Math Growth Phase",
        description: "Focused on stronger competition outcomes, deeper conceptual understanding, and consistent project execution.",
        technologies: ["Robotics", "Mathematics", "Scientific Thinking"],
        icon: "atom",
        image: true
    },
    {
        year: "Next Step",
        title: "Future STEM Goals",
        description: "Preparing for advanced competitions, richer research projects, and interdisciplinary problem-solving at a higher level.",
        technologies: ["Advanced Competitions", "Research", "Engineering Mindset"],
        icon: "school",
        image: false
    }
];

const journeyIconMap: Record<string, ReactNode> = {
    code: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M8.5 6.5 3 12l5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.5 6.5 21 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    web: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M4.5 12h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 4.5v15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    math: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M7.5 12h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 7.5v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6.5 6.5 8.5 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M17.5 15.5 19.5 17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    school: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M12 4 3 8l9 4 9-4-9-4Z" fill="currentColor" />
            <path d="M4.5 8.5v6.5c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    keyboard: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect x="3.5" y="7.5" width="17" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M7.5 11.5h1.5M11 11.5h1.5M14.5 11.5h1.5M8.5 14.5h1.5M12 14.5h1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    atom: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <circle cx="12" cy="12" r="2.2" fill="currentColor" />
            <path d="M4.5 12c0 3.8 3.1 6.9 6.9 6.9S18.3 15.8 18.3 12 15.2 5.1 11.4 5.1 4.5 8.2 4.5 12Z" stroke="currentColor" strokeWidth="1.8" />
            <path d="M6.5 5.5c3 1.5 5 5.2 5 9s-2 7.5-5 9" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    ),
    gamepad: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect x="4.5" y="7.5" width="15" height="9" rx="4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8.5 12h1.5M11.5 12h1.5M16.5 11h.01M16.5 13h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    launch: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M8.5 14.5 15 8l1.5 3.5-4.5 4.5-3-1.5Z" fill="currentColor" />
            <path d="M17.5 6.5 19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M5.5 18.5 7 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    )
};

export default function Journey() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visibleCards, setVisibleCards] = useState<boolean[]>(journeyEntries.map(() => false));
    const [fillProgress, setFillProgress] = useState(0);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const fallback = window.setTimeout(() => {
            setVisibleCards((prev) => (prev.some(Boolean) ? prev : journeyEntries.map(() => true)));
        }, 650);

        return () => window.clearTimeout(fallback);
    }, [prefersReducedMotion]);

    useEffect(() => {
        const root = sectionRef.current;
        if (!root || prefersReducedMotion) return;

        const cards = Array.from(root.querySelectorAll<HTMLDivElement>(".timeline-card"));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute("data-index"));
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => {
                            if (prev[index]) return prev;
                            const next = [...prev];
                            next[index] = true;
                            return next;
                        });
                    }
                });
            },
            { threshold: 0.35 }
        );

        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, [prefersReducedMotion]);

    useEffect(() => {
        const root = sectionRef.current;
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
        <section id="journey" ref={sectionRef} className="section-shell px-6 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16" aria-labelledby="journey-heading">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="section-kicker text-amber-200">Journey Timeline</p>
                    <h2 id="journey-heading" className="section-title">A STEM journey shaped by competitions, projects, and reflection.</h2>
                    <p className="section-lead">
                        This timeline highlights milestones that shaped my growth across math, science, robotics, chess, and long-term learning. Each step informs how I prepare, perform, and improve.
                    </p>
                </div>

                <div className="relative mt-8 sm:mt-10">
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] border border-dashed border-slate-900/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[length:24px_24px] opacity-40" aria-hidden="true" />

                    <div className="relative grid gap-6 sm:gap-8 md:grid-cols-2">
                        {journeyEntries.map((entry, index) => {
                            const visible = prefersReducedMotion || visibleCards[index];
                            return (
                                <article
                                    key={entry.title}
                                    data-index={index}
                                    className={`interactive-card glass-card timeline-card relative rounded-[2rem] p-5 sm:p-6 transition duration-700 ease-out ui-transition ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                    aria-labelledby={`journey-title-${index}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="glass-card-soft flex h-14 w-14 items-center justify-center rounded-3xl text-cyan-300 transition group-hover:bg-cyan-400/10">
                                            {journeyIconMap[entry.icon]}
                                        </div>
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{entry.year}</p>
                                            <h3 id={`journey-title-${index}`} className="mt-2 text-xl font-semibold text-white">
                                                {entry.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm leading-7 text-slate-300">{entry.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {entry.technologies.map((tech) => (
                                            <span key={tech} className="glass-chip rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {entry.image ? (
                                        <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-inner shadow-black/20">
                                            <div className="flex h-28 items-center justify-center rounded-3xl border border-dashed border-slate-700 bg-slate-900/80 text-sm uppercase tracking-[0.3em] text-slate-500">
                                                image preview
                                            </div>
                                        </div>
                                    ) : null}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
