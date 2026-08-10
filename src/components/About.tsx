const interests = ["Mathematics", "Physics", "Computer Science", "Engineering Design"];

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
                        I started with curiosity around puzzles, systems, and problem-solving, then gradually turned that curiosity into projects across mathematics, science, and robotics. Today, I build with a balance of analytical thinking and creative experimentation.
                    </p>
                    <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                        I love STEM because it connects ideas to real outcomes. Whether through an experiment, a robotics iteration, or a math competition problem, each challenge strengthens how I reason, create, and improve.
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
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Favorite Subjects</p>
                    <div className="mt-6 space-y-3">
                        {interests.map((interest) => (
                            interest === "Computer Science" ? (
                                <a
                                    key={interest}
                                    href="https://github.com/Sac-da-ROOK"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card-soft block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 ui-transition hover:border-cyan-400/30"
                                >
                                    Computer Science - click to go to GitHub
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
        </Section>
    );
}
