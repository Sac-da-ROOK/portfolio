import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "STEM",
    description: "STEM-focused page highlighting learning, problem solving, engineering, and curiosity across science, technology, engineering, and mathematics."
};

export default function StemPage() {
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
                                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/90">STEM</p>
                                        <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                                            Curiosity across science, technology, engineering, and math
                                        </h1>
                                        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                            I am motivated by how STEM connects deep understanding with real-world impact. From software to systems thinking, these disciplines shape how I learn, build, and approach difficult problems.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <Link
                                            href="/cs"
                                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(16,185,129,0.28)]"
                                        >
                                            Explore Computer Science
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="rounded-[2rem] border border-cyan-500/20 bg-[#0b1c2d] p-7 shadow-[0_0_45px_rgba(14,116,144,0.12)] sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Why STEM</p>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                    I like asking how things work and how to improve them.
                                </h2>
                                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                                    STEM gives me a framework for understanding the world: how systems behave, how models explain reality, and how careful thinking can turn abstract ideas into useful tools.
                                </p>
                                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                                    Whether I am programming, reading about physics, designing a strategy, or learning how to think more rigorously, I want to build a deeper understanding of the patterns behind real problems.
                                </p>
                            </div>

                            <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-slate-950/75 to-cyan-950/65 p-7 sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Areas of interest</p>
                                <div className="mt-6 space-y-3 text-sm text-slate-200 sm:text-base">
                                    {[
                                        "Mathematics and structure",
                                        "Software and problem-solving",
                                        "Engineering mindset and experimentation",
                                        "Science-driven curiosity and systems thinking"
                                    ].map((point) => (
                                        <div key={point} className="rounded-2xl border border-cyan-400/15 bg-slate-900/40 px-4 py-3">
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
