import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { featuredProjects } from "@/lib/projects";

export const metadata: Metadata = {
    title: "Computer Science",
    description: "A personal computer science page about my interests, projects, skills, goals, and ongoing learning in software and technology."
};

const techSkills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Python",
    "GitHub",
    "Vercel",
    "Node.js"
];

const learningFocus = [
    "Physics modeling and how real systems behave under constraints.",
    "Research methods for clearer problem analysis and better documentation.",
    "Stronger software design habits, UI thinking, and technical problem-solving.",
    "Improving competition strategy and decision-making under pressure."
];

const goals = [
    "Keep building thoughtful, useful software that combines logic, design, and real user value.",
    "Grow deeper in computer science through projects that connect software, mathematics, and problem-solving.",
    "Continue learning by creating systems that are practical, well-structured, and genuinely interesting to build."
];

const currentWork = [
    {
        title: "Autonomous hardware systems",
        description: "Exploring low-cost robot control loops, sensors, and repeatable test routines for fast iteration."
    },
    {
        title: "Math + CS research notes",
        description: "Summarizing proofs, algorithm ideas, and the lessons I learn from trying to solve harder problems clearly."
    },
    {
        title: "Competition preparation",
        description: "Building stronger routines for performance, review, and reflection before key competitions and tasks."
    }
];

// Placeholder timeline data only. Replace with verified dates and details later.
const timelineEntries = [
    {
        year: "2020",
        title: "First Interest",
        description: "Placeholder entry describing the beginning of my interest in technology, logic, and creative problem-solving.",
        technologies: ["Curiosity", "Problem Solving"]
    },
    {
        year: "2021",
        title: "Started Exploring Technology",
        description: "Placeholder entry describing my first technical experiments, learning resources, and early exploration of software and systems.",
        technologies: ["Learning", "Software Basics"]
    },
    {
        year: "2022",
        title: "First Programming Projects",
        description: "Placeholder entry describing the first projects I built to learn coding patterns, structure, and project thinking.",
        technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
        year: "2023",
        title: "Web Development",
        description: "Placeholder entry describing my growth in building interfaces and understanding how design and code work together.",
        technologies: ["React", "Next.js", "Tailwind CSS"]
    },
    {
        year: "2024",
        title: "Bigger Projects",
        description: "Placeholder entry describing larger problem-solving work and a stronger focus on building projects with deeper purpose.",
        technologies: ["TypeScript", "GitHub", "Vercel"]
    },
    {
        year: "2025",
        title: "Expanding My Skills",
        description: "Placeholder entry describing my continued practice in software thinking, research, and building more polished systems.",
        technologies: ["Python", "Research", "Systems Thinking"]
    },
    {
        year: "2026",
        title: "Building My Portfolio",
        description: "Placeholder entry describing my ongoing effort to create a clearer, more professional body of work and technical identity.",
        technologies: ["Portfolio", "Design", "Iteration"]
    }
];

export default function ComputerSciencePage() {
    return (
        <main id="main-content" className="min-h-screen bg-[#050b16] text-slate-100">
            <Navbar theme="cs" />

            <div className="relative overflow-hidden pt-24 sm:pt-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_#050b16_0%,_#0a1325_42%,_#071421_100%)]" />

                <div className="relative z-10">
                    <header className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-6xl">
                            <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-5 shadow-[0_0_50px_rgba(14,116,144,0.16)] backdrop-blur-sm sm:p-7 lg:p-10">
                                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                                    <div className="max-w-3xl">
                                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/90">Computer Science</p>
                                        <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                                            My Computer Science Journey
                                        </h1>
                                        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                            This page highlights the parts of computer science that interest me most: building software, solving difficult problems, learning how technology works, and improving through hands-on projects.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <Link
                                            href="/"
                                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(16,185,129,0.28)]"
                                        >
                                            See how far I've come
                                        </Link>
                                        <Link
                                            href="https://github.com/Sac-da-ROOK"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-500/20"
                                        >
                                            View GitHub
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="rounded-[2rem] border border-cyan-500/20 bg-[#0b1c2d] p-7 shadow-[0_0_45px_rgba(14,116,144,0.12)] sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">About Me</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                    I am drawn to how software and systems turn ideas into real impact.
                                </h2>
                                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                                    I care about computer science because it combines logic, creativity, and problem-solving in a way that feels both technical and meaningful. I enjoy programming, experimenting with how digital tools work, and building websites and applications that make ideas feel tangible.
                                </p>
                                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                                    My interest in technology grows from wanting to understand how things function, improve them, and turn curiosity into practical outcomes. Whether I am working on a project, studying a concept, or refining a system, I want to keep learning how software, interfaces, and problem-solving come together.
                                </p>
                            </div>

                            <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-slate-950/75 to-cyan-950/65 p-7 sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Focus</p>
                                <div className="mt-6 space-y-3 text-sm text-slate-200 sm:text-base">
                                    {[
                                        "Programming and building useful interfaces",
                                        "Understanding how systems work behind the scenes",
                                        "Solving difficult problems with structured thinking",
                                        "Learning through projects, reflection, and iteration"
                                    ].map((point) => (
                                        <div key={point} className="rounded-2xl border border-cyan-400/15 bg-slate-900/40 px-4 py-3">
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
                        <div className="mb-8 max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Projects</p>
                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                A few projects that reflect my software and engineering interests.
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {featuredProjects.map((project) => (
                                <article
                                    key={project.slug}
                                    className="group rounded-[2rem] border border-cyan-400/20 bg-[#0c1e2f] p-5 text-left shadow-[0_16px_34px_rgba(8,47,73,0.18)] transition hover:-translate-y-1 hover:border-emerald-300/40"
                                >
                                    <div className="mb-4 rounded-[1.5rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/15 via-slate-900/60 to-emerald-400/10 p-4">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300">{project.status}</p>
                                        <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                                    </div>

                                    <p className="text-sm leading-7 text-slate-300">{project.description}</p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-500/8 px-3 py-1 text-[11px] font-semibold text-cyan-100">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {project.href ? (
                                            <Link
                                                href={project.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-500/20"
                                            >
                                                Live Demo
                                            </Link>
                                        ) : null}
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:shadow-[0_12px_28px_rgba(16,185,129,0.2)]"
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="border-t border-cyan-500/10 bg-[#071521]">
                        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                            <div className="mb-8 max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Skills</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                    The technologies and tools I use to build and learn.
                                </h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {techSkills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="rounded-[1.5rem] border border-cyan-400/15 bg-gradient-to-br from-[#0d2338] to-[#0b1726] px-4 py-4 text-center text-sm font-semibold text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="mb-8 max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">My Computer Science Journey</p>
                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                A timeline of how my interest in computer science continues to evolve.
                            </h2>
                        </div>

                        <div className="relative mt-10">
                            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-emerald-400 to-cyan-500/30 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />

                            <div className="space-y-8">
                                {timelineEntries.map((entry, index) => (
                                    <div
                                        key={`${entry.year}-${entry.title}`}
                                        className="relative sm:grid sm:grid-cols-[1fr_56px_1fr] sm:items-center"
                                    >
                                        <div className={`sm:col-start-${index % 2 === 0 ? "1" : "3"} ${index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:col-start-3 sm:pl-8"}`}>
                                            <article className="ml-10 rounded-[1.7rem] border border-cyan-400/20 bg-gradient-to-br from-[#0d2135] to-[#0b1e2f] p-5 shadow-[0_14px_28px_rgba(8,47,73,0.16)] transition hover:-translate-y-1 hover:border-emerald-400/35 sm:ml-0">
                                                <div className="mb-3 flex flex-wrap items-center gap-3 sm:justify-between">
                                                    <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                                                        {entry.year}
                                                    </span>
                                                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">Placeholder</span>
                                                </div>
                                                <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
                                                <p className="mt-3 text-sm leading-7 text-slate-300">{entry.description}</p>
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {entry.technologies.map((tech) => (
                                                        <span key={tech} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-100">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </article>
                                        </div>

                                        <div className="absolute left-1 top-5 flex items-center justify-center sm:col-start-2 sm:relative sm:left-0 sm:top-0">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200/40 bg-gradient-to-br from-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]" aria-hidden="true">
                                                <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="rounded-[2rem] border border-cyan-500/20 bg-[#0b1d2f] p-7 sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Currently Learning</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                    Deepening the ideas behind the systems I build.
                                </h2>
                                <ul className="mt-6 space-y-4">
                                    {learningFocus.map((item) => (
                                        <li key={item} className="flex gap-3 rounded-2xl border border-emerald-400/15 bg-[#0f2438] px-4 py-3 text-base leading-7 text-slate-200">
                                            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" aria-hidden="true" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-[#0d2030] to-[#0b1c29] p-7 sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Goals</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                    Building toward a stronger future in technology.
                                </h2>
                                <ul className="mt-6 space-y-4">
                                    {goals.map((goal) => (
                                        <li key={goal} className="rounded-2xl border border-cyan-400/15 bg-slate-950/25 px-4 py-3 text-base leading-7 text-slate-200">
                                            {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="border-t border-cyan-500/10 bg-[#071a2a]">
                        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                            <div className="mx-auto max-w-3xl rounded-[2rem] border border-emerald-400/20 bg-gradient-to-r from-[#0d2235] via-[#0a1a2a] to-[#0d2235] p-7 sm:p-8 lg:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Current Project</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                    What I am working on right now.
                                </h2>

                                <div className="mt-7 grid gap-4 md:grid-cols-3">
                                    {currentWork.map((item) => (
                                        <div key={item.title} className="rounded-[1.5rem] border border-cyan-400/15 bg-[#102235] p-4">
                                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(16,185,129,0.28)]"
                                    >
                                        See how far I've come
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
