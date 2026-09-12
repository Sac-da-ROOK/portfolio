import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
    title: "All Projects",
    description: "Browse the full collection of projects I have built, explored, and iterated on."
};

export default function AllProjectsPage() {
    return (
        <main id="main-content" className="min-h-screen bg-[#050b16] text-slate-100">
            <Navbar theme="cs" />

            <div className="relative overflow-hidden pt-24 sm:pt-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_#050b16_0%,_#0a1325_42%,_#071421_100%)]" />

                <div className="relative z-10">
                    <header className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-6xl">
                            <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-5 shadow-[0_0_50px_rgba(14,116,144,0.16)] backdrop-blur-sm sm:p-7 lg:p-10">
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                                    <div className="max-w-3xl">
                                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/90">Project Archive</p>
                                        <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                                            Explore All Projects
                                        </h1>
                                        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                            Browse everything I&apos;ve built, experimented with, and worked on.
                                        </p>
                                    </div>

                                    <Link
                                        href="/cs"
                                        className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-[#0a1830]/80 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-[#0d2340]"
                                    >
                                        ← Back to Computer Science
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {projects.map((project) => (
                                <div
                                    key={project.slug}
                                    className="group rounded-[2rem] border border-cyan-400/20 bg-[#0c1e2f] p-5 text-left shadow-[0_16px_34px_rgba(8,47,73,0.18)] transition hover:-translate-y-1 hover:border-emerald-300/40"
                                >
                                    <Link href={`/projects/${project.slug}`} className="block">
                                        <div className="mb-4 rounded-[1.5rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/15 via-slate-900/60 to-emerald-400/10 p-4">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300">{project.status}</p>
                                            <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>
                                        </div>

                                        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-500/8 px-3 py-1 text-[11px] font-semibold text-cyan-100">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>

                                    <div className="mt-6 flex items-center justify-between gap-3">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:shadow-[0_12px_28px_rgba(16,185,129,0.2)]"
                                        >
                                            Details
                                        </Link>
                                        {project.href ? (
                                            <Link
                                                href={project.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                                            >
                                                Live Demo
                                            </Link>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
