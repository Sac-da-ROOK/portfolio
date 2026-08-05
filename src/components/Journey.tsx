"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

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
        year: "April 2022",
        title: "Starting from Scratch",
        description: "Began with logic puzzles, small scripts, and building confidence through practice.",
        technologies: ["Scratch", "Block Coding", "Interactive Learning"],
        icon: "code",
        image: false
    },
    {
        year: "July 2024",
        title: "Transition to Python",
        description: "Transitioned to Python, learning real programming through projects, practice, and problem-solving.",
        technologies: ["Python", "Object-Oriented Programming", "Data Structures"],
        icon: "web",
        image: true
    },
    {
        year: "June 2025",
        title: "Building Desktop Applications",
        description: "Created interactive desktop applications with Python, learning GUI design and user interaction.",
        technologies: ["Python", "Tkinter", "GUI Design"],
        icon: "math",
        image: false
    },
    {
        year: "October 2025",
        title: "AI-Assisted Development",
        description: "Learned to use AI tools to accelerate learning, solve problems, and build increasingly ambitious projects.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        icon: "school",
        image: true
    },
    {
        year: "May 2026",
        title: "My First Website",
        description: "Launched a refined math platform focused on analytics, mastery, and speed training.",
        technologies: ["React", "TypeScript", "Vercel"],
        icon: "keyboard",
        image: true
    },
    {
        year: "2023",
        title: "OmniMath",
        description: "Built an adaptive math toolkit that blends practice, visual learning, and constructive feedback.",
        technologies: ["Next.js", "UI", "Learning"],
        icon: "atom",
        image: false
    },
    {
        year: "2024",
        title: "Math Sprint Arena",
        description: "Developed a fast-paced math fluency game with rhythm, reward loops, and immersive interaction.",
        technologies: ["JavaScript", "Game Design", "Web"],
        icon: "gamepad",
        image: true
    },
    {
        year: "2025",
        title: "Portfolio launch",
        description: "Published a premium developer portfolio that showcases my growth, projects, and creative vision.",
        technologies: ["Next.js", "Tailwind CSS", "Vercel"],
        icon: "launch",
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

    useEffect(() => {
        const root = sectionRef.current;
        if (!root) return;

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
    }, []);

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
        <section id="journey" ref={sectionRef} className="relative overflow-hidden border-t border-white/10 bg-[#050816] px-6 py-24 sm:px-8 lg:px-12" aria-labelledby="journey-heading">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Development Journey</p>
                    <h2 id="journey-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A story of growth, experimentation, and purposeful creation.</h2>
                    <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                        This timeline highlights the moments that shaped my developer path, from early experiments to product-ready learning experiences. Each step reflects a renewed focus on usability, systems thinking, and polished craftsmanship.
                    </p>
                </div>

                <div className="relative mt-14">
                    <div className="pointer-events-none absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white/10" aria-hidden="true" />
                    <div className="pointer-events-none absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-cyan-400/70 origin-top transition-all duration-500" style={{ height: `${fillProgress}%` }} aria-hidden="true" />

                    <div className="grid gap-10">
                        {journeyEntries.map((entry, index) => {
                            const isLeft = index % 2 === 0;
                            const visible = visibleCards[index];
                            return (
                                <article
                                    key={entry.title}
                                    data-index={index}
                                    className={`timeline-card relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 transition duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                        } ${isLeft ? "lg:ml-auto lg:max-w-[45%]" : "lg:mr-auto lg:max-w-[45%]"}`}
                                    aria-labelledby={`journey-title-${index}`}
                                >
                                    <div className="absolute left-1/2 top-8 hidden h-6 w-6 -translate-x-1/2 rounded-full border-2 border-white/20 bg-slate-950 shadow-lg shadow-cyan-500/10 lg:block">
                                        <span className={`absolute inset-0 m-1 rounded-full bg-cyan-400 transition-transform duration-700 ${visible ? "scale-100" : "scale-0"}`} />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/90 text-cyan-300 ring-1 ring-white/10 transition group-hover:bg-cyan-400/10">
                                            {journeyIconMap[entry.icon]}
                                        </div>
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{entry.year}</p>
                                            <h3 id={`journey-title-${index}`} className="mt-2 text-xl font-semibold text-white">
                                                {entry.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-sm leading-7 text-slate-300">{entry.description}</p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {entry.technologies.map((tech) => (
                                            <span key={tech} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {entry.image ? (
                                        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 shadow-inner shadow-black/20">
                                            <div className="flex h-40 items-center justify-center rounded-3xl border border-dashed border-slate-700 bg-slate-900/80 text-sm uppercase tracking-[0.3em] text-slate-500">
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
