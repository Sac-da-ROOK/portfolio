const interests = ["Computer Science", "Artificial Intelligence", "Educational Technology", "Game Development"];

import Section from "@/components/Section";

export default function About() {
    return (
        <Section id="about" aria-labelledby="about-heading">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">About</p>
                    <h2 id="about-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A student builder with a strong interest in meaningful technology.</h2>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        I am a student developer focused on creating software that is both technically strong and genuinely useful. My work sits at the intersection of design, logic, and human-centered problem solving, with particular interest in systems that support learning, creativity, and interaction.
                    </p>
                    <p className="mt-5 text-lg leading-8 text-slate-300">
                        I am especially drawn to computer science, artificial intelligence, and educational technology because they offer a way to turn abstract ideas into tools that have tangible value. I approach each project with curiosity, structure, and a desire to build with care.
                    </p>
                </div>

                <div className="interactive-card rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Areas of Focus</p>
                    <div className="mt-6 space-y-3">
                        {interests.map((interest) => (
                            <div key={interest} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 ui-transition hover:border-cyan-400/30 hover:bg-slate-900/80">
                                {interest}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
