import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const highlights = ["Student", "Developer", "Builder"];

export default function Hero() {
    return (
        <section id="home" className="relative isolate overflow-hidden bg-[#050816]">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="ambient-orb ambient-orb-one" />
                <div className="ambient-orb ambient-orb-two" />
                <div className="ambient-orb ambient-orb-three" />
            </div>

            <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
                <AnimatedSection className="max-w-3xl" delay={20}>
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.24em] text-slate-300 uppercase backdrop-blur">
                        Building ambitious digital experiences
                    </div>

                    <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Aarush Srivastava
                    </h1>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {highlights.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                        Building interactive educational software, games, and web applications with a focus on clarity, impact, and thoughtful design.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 ui-transition hover:-translate-y-0.5 hover:bg-slate-100"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="https://github.com/Sac-da-ROOK"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white ui-transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                        >
                            GitHub
                        </Link>
                    </div>
                </AnimatedSection>

                <div className="mt-16 grid gap-4 md:grid-cols-3">
                    <AnimatedSection className="interactive-card rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl ui-transition hover:-translate-y-1 hover:border-cyan-400/30" delay={70}>
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Focus</p>
                        <p className="mt-2 text-lg font-medium text-white">Educational technology & interactive systems</p>
                    </AnimatedSection>
                    <AnimatedSection className="interactive-card rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl ui-transition hover:-translate-y-1 hover:border-cyan-400/30" delay={95}>
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Interest</p>
                        <p className="mt-2 text-lg font-medium text-white">Computer science, AI, and game development</p>
                    </AnimatedSection>
                    <AnimatedSection className="interactive-card rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl ui-transition hover:-translate-y-1 hover:border-cyan-400/30" delay={120}>
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Approach</p>
                        <p className="mt-2 text-lg font-medium text-white">Elegant interfaces with intentional motion</p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
