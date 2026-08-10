import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CurrentChessRating from "@/components/CurrentChessRating";

const highlights = ["Mathematics", "Robotics", "Computer Science", "Chess"];

const quickStats = [
    { label: "Projects", value: "12+" },
    { label: "Competitions", value: "10+" },
    { label: "Books", value: "30+" },
    { label: "Awards", value: "8+" }
];

export default function Hero() {
    return (
        <section id="home" className="section-shell relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="ambient-orb ambient-orb-one" />
                <div className="ambient-orb ambient-orb-two" />
                <div className="ambient-orb ambient-orb-three" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(250,204,21,0.26),transparent_42%)]" />
            </div>

            <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-6 pb-10 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
                <AnimatedSection className="max-w-3xl" delay={20}>
                    <div className="inline-flex items-center rounded-full border-2 border-slate-900/20 bg-amber-200/70 px-4 py-2 text-[11px] font-semibold tracking-[0.3em] text-slate-900 uppercase">
                        Student STEM Portfolio
                    </div>

                    <h1 className="mt-8 text-5xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-6xl lg:text-7xl">
                        Aarush Srivastava
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                        Student engineer building software, competing in STEM, and documenting a long-term learning journey with measurable progress.
                    </p>

                    <p className="mt-4 text-xs uppercase tracking-[0.32em] text-amber-900">Grade 8 • Future Engineer & Research-Minded Builder</p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        {highlights.map((item) => (
                            <span
                                key={item}
                                className="glass-chip rounded-full px-4 py-2 text-sm font-medium text-slate-800"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <p className="mt-8 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                        I pursue STEM through mathematics, robotics, science inquiry, and strategic thinking, turning curiosity into measurable progress through disciplined practice and real-world projects.
                    </p>

                    <div className="mt-10 grid gap-3 sm:grid-cols-2">
                        {quickStats.map((stat) => (
                            <div key={stat.label} className="glass-card-soft rounded-2xl px-4 py-4">
                                <p className="text-[11px] uppercase tracking-[0.26em] text-slate-600">{stat.label}</p>
                                <p className="mt-1 text-2xl font-semibold text-slate-900">{stat.value}</p>
                            </div>
                        ))}
                        <CurrentChessRating variant="hero" />
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="#competitions"
                            className="rounded-full border-2 border-slate-900/20 bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 ui-transition hover:-translate-y-0.5 hover:bg-amber-200"
                        >
                            View Highlights
                        </Link>
                        <Link
                            href="#contact"
                            className="rounded-full border-2 border-slate-900/20 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-900 ui-transition hover:-translate-y-0.5 hover:bg-amber-100"
                        >
                            Contact
                        </Link>
                    </div>
                </AnimatedSection>

                <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <AnimatedSection className="interactive-card glass-card rounded-3xl p-5 ui-transition hover:-translate-y-1 hover:border-cyan-400/30" delay={70}>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Profile</p>
                        <div className="mt-3 flex h-44 items-center justify-center rounded-2xl border-2 border-dashed border-slate-900/35 bg-amber-50 text-xs uppercase tracking-[0.24em] text-slate-600">
                            Profile photo placeholder
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="interactive-card glass-card rounded-3xl p-5 ui-transition hover:-translate-y-1 hover:border-cyan-400/30" delay={120}>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Current STEM Focus</p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-3">
                            {[
                                { title: "Math Competitions", note: "Problem sets and timed rounds" },
                                { title: "Robotics Systems", note: "Iteration and reliability" },
                                { title: "Learning Journal", note: "Weekly notes and reflections" }
                            ].map((item) => (
                                <div key={item.title} className="glass-card-soft rounded-2xl px-4 py-3 text-sm text-slate-700">
                                    <p className="font-semibold text-slate-900">{item.title}</p>
                                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-600">{item.note}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
