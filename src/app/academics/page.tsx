import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Academics",
    description: "Academic focus in mathematics, science, computer science, and the courses that shaped my learning."
};

const currentFocus = [
    {
        area: "Mathematics",
        summary: "Current school mathematics course",
        points: [
            "Working through algebraic reasoning, functions, and problem solving in a structured classroom setting.",
            "Studying how equations, patterns, and relationships model real-world situations.",
            "Tackling multi-step problems that require careful breakdown, careful checking, and logical organization."
        ],
        challenge: "Selected challenging problems: systems of equations, variable manipulation, function behavior, and multi-step word problems."
    },
    {
        area: "Science",
        summary: "School science and biology studies",
        points: [
            "Learning through school science content and guided investigations with a focus on evidence and explanation.",
            "Studying biology through the Keystone School curriculum, including biological systems, structure, and interactions.",
            "Developing notebook-based scientific thinking through observations, lab questions, and analysis."
        ],
        challenge: "Laboratory investigations: making careful observations, comparing results, and explaining how evidence supports conclusions."
    },
    {
        area: "Computer Science",
        summary: "Python, algorithms, and project-building",
        points: [
            "Exploring Python and computational thinking through structured problem solving.",
            "Learning how algorithms help organize logic, efficiency, and decision-making.",
            "Building small applications and projects to connect concepts to practical outcomes."
        ],
        challenge: "Applied thinking: writing clean code, testing logic, debugging patterns, and improving systems step by step."
    }
];

const completedCourses = [
    {
        course: "Algebra: Elementary to Advanced",
        provider: "Johns Hopkins University",
        dates: "2025",
        status: "Completed",
        topics: [
            "Functions and algebraic structure",
            "Solving equations and modeling patterns",
            "Graph interpretation and problem solving",
            "Mathematical reasoning and proof-style thinking"
        ],
        project: "Completed guided problem sets and applied exercises focused on algebraic reasoning.",
        reflection: "This course helped me see how algebra is not just symbol manipulation—it is a way of modeling relationships and thinking clearly about patterns."
    },
    {
        course: "How to Get Into Robotics",
        provider: "Coursera",
        dates: "2025",
        status: "Completed",
        topics: [
            "Foundations of robotics and systems thinking",
            "How mechanical, electrical, and software components fit together",
            "Project planning and engineering workflow",
            "Problem solving in real robotics contexts"
        ],
        project: "Used the concepts to frame how I approach robot design, testing, and iteration in my own projects.",
        reflection: "The course showed me that robotics is not only about building hardware—it is about designing systems that work together reliably and can be improved over time."
    },
    {
        course: "AI For Everyone",
        provider: "DeepLearning.AI / Andrew Ng",
        dates: "2025",
        status: "Completed",
        topics: [
            "Core ideas behind AI and machine learning",
            "How AI systems are built and applied",
            "The role of data, models, and human decision-making",
            "Ethical and practical considerations in technology"
        ],
        project: "Reflected on the broader role of AI in problem solving and developed a clearer understanding of where these tools add value. ",
        reflection: "This course helped me understand AI in a practical way: it is a powerful tool, but it works best when paired with clear thinking, good design, and meaningful goals."
    }
];

export default function AcademicsPage() {
    return (
        <main id="main-content" className="min-h-screen bg-[#050b16] text-slate-100">
            <Navbar theme="cs" />

            <div className="relative overflow-hidden pt-24 sm:pt-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_#050b16_0%,_#0a1325_42%,_#071421_100%)]" />

                <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-10">
                    <header className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-5 shadow-[0_0_50px_rgba(14,116,144,0.16)] backdrop-blur-sm sm:p-7 lg:p-10">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-3xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/90">Academics</p>
                                <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                                    Learning that is disciplined, practical, and curiosity-driven.
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                    My academic work centers on mathematics, science, and computation. I care most about understanding the ideas deeply, applying them through projects, and learning how to improve through reflection.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/cs"
                                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(16,185,129,0.28)]"
                                >
                                    Explore CS
                                </Link>
                            </div>
                        </div>
                    </header>

                    <section className="mt-12">
                        <div className="mb-6 flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Current Academic Focus</p>
                                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">What I am learning now</h2>
                            </div>
                        </div>

                        <div className="grid gap-6 xl:grid-cols-3">
                            {currentFocus.map((item) => (
                                <article key={item.area} className="rounded-[2rem] border border-cyan-500/20 bg-[#0b1c2d] p-6 shadow-[0_0_45px_rgba(14,116,144,0.12)]">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">{item.area}</p>
                                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">{item.summary}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                                        {item.points.map((point) => (
                                            <li key={point} className="rounded-2xl border border-cyan-400/15 bg-slate-900/40 px-4 py-3">{point}</li>
                                        ))}
                                    </ul>
                                    <p className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 px-4 py-3 text-sm leading-7 text-emerald-100">
                                        {item.challenge}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="mt-16">
                        <div className="mb-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Completed Courses</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Substantial learning with tangible outcomes</h2>
                        </div>

                        <div className="space-y-6">
                            {completedCourses.map((course) => (
                                <article key={course.course} className="rounded-[2rem] border border-slate-700/70 bg-slate-950/40 p-6 shadow-[0_0_30px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:p-8">
                                    <div className="flex flex-col gap-3 border-b border-slate-700/80 pb-5 lg:flex-row lg:items-end lg:justify-between">
                                        <div>
                                            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{course.course}</h3>
                                            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-cyan-200">{course.provider}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200">
                                            <span className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-2">{course.dates}</span>
                                            <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-2">{course.status}</span>
                                        </div>
                                    </div>

                                    <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Major Topics Learned</p>
                                            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
                                                {course.topics.map((topic) => (
                                                    <li key={topic} className="flex gap-3">
                                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="rounded-[1.5rem] border border-slate-700/70 bg-slate-900/55 p-4 sm:p-5">
                                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Project / Assessment</p>
                                            <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">{course.project}</p>
                                        </div>
                                    </div>

                                    <div className="mt-5 rounded-[1.5rem] border border-amber-400/20 bg-amber-500/5 p-4 sm:p-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Reflection: What I learned</p>
                                        <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">{course.reflection}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
