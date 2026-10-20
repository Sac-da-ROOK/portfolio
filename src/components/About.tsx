const interests = ["Mathematics", "Physics", "Computer Science", "Engineering Design"];

const evidenceFramework = [
    { label: "Claim", text: "I identify the problem, interest, or goal I want to pursue." },
    { label: "Evidence", text: "I show the work behind it: notes, experiments, code, tests, and results." },
    { label: "Reflection", text: "I look at what worked, what failed, and what changed." },
    { label: "Growth", text: "I use that feedback to improve the next iteration and the next idea." }
];

const goals = [
    "Compete at higher-level STEM competitions with stronger consistency.",
    "Build interdisciplinary projects combining software, robotics, and math.",
    "Develop a long-term foundation for engineering and research."
];

import Section from "@/components/Section";

export default function About() {
    return (
        <Section id="about" aria-labelledby="about-heading">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                    <p className="section-kicker">About</p>
                    <h2 id="about-heading" className="section-title">My story and why I build in STEM.</h2>
                    <p className="section-lead">
                        I do not treat curiosity as a statement without proof. I try to follow the pattern: claim → evidence → reflection → growth. That means every interest is supported by the work behind it: the experiments, the notes, the projects, and the lessons learned from improving them.
                    </p>
                    <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                        Instead of saying, “I am interested in robotics,” I ask: What did I build, what did I test, and what changed after the first version? Instead of saying, “I am good at math,” I show the ideas, investigations, and competition results that built that confidence over time.
                    </p>

                    <div className="glass-card mt-8 rounded-3xl p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Goals</p>
                        <ul className="mt-4 grid gap-3">
                            {goals.map((goal) => (
                                <li key={goal} className="glass-card-soft rounded-xl px-3 py-2 text-sm leading-7 text-cyan-100">{goal}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="interactive-card glass-card rounded-3xl p-8 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Evidence system</p>
                    <div className="mt-6 space-y-3">
                        {evidenceFramework.map((step) => (
                            <div key={step.label} className="glass-card-soft rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 ui-transition hover:border-cyan-400/30">
                                <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">{step.label}</span>
                                <span className="mt-2 block leading-7 text-slate-100">{step.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Current areas</p>
                        <div className="mt-3 space-y-3">
                            {interests.map((interest) => (
                                interest === "Computer Science" ? (
                                    <a
                                        key={interest}
                                        href="https://github.com/Sac-da-ROOK"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-card-soft block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 ui-transition hover:border-cyan-400/30"
                                    >
                                        Computer Science — project evidence and code work
                                    </a>
                                ) : (
                                    <div key={interest} className="glass-card-soft rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 ui-transition hover:border-cyan-400/30">
                                        {interest}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
