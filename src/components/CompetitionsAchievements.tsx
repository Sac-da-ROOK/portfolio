import Section from "@/components/Section";

type Track = {
    name: string;
    highlights: string[];
    reflection: string;
};

const tracks: Track[] = [
    {
        name: "Algebra 1",
        highlights: [
            "Current Coursework",
            "Regular problem sets and pace checks",
            "Classroom-based skill development"
        ],
        reflection: "I am building strong algebraic reasoning through current coursework, regular problem solving, and careful review of mistakes."
    },
    {
        name: "Python",
        highlights: [
            "Learning through projects",
            "Writing code for logic and automation",
            "Building structure and debugging habits"
        ],
        reflection: "Python practice is helping me build confidence with logic, syntax, and project structure while learning by creating useful tools."
    },
    {
        name: "Robotics",
        highlights: [
            "Projects in motion and control",
            "Hands-on testing and improvement",
            "Systems thinking across hardware and software"
        ],
        reflection: "Robotics helps me apply sensors, iteration, and problem-solving to real engineering challenges with measurable improvement over time."
    },
    {
        name: "Scientific Method",
        highlights: [
            "Applied through experiments",
            "Observation and evidence gathering",
            "Reflection after each trial"
        ],
        reflection: "I use the scientific method to turn questions into testable experiments and to improve my thinking through evidence and revision."
    },
    {
        name: "Chess",
        highlights: [
            "Tournament experience",
            "Pattern recognition and strategy",
            "Reviewing games for improvement"
        ],
        reflection: "Chess strengthens long-term planning, calm decision-making, and tactical awareness in ways that connect directly to STEM problem solving."
    },
    {
        name: "Technical Writing",
        highlights: [
            "Project reports",
            "Learning journal entries",
            "Clear explanation of methods and ideas"
        ],
        reflection: "Writing helps me organize my thinking, explain projects clearly, and turn experiences into useful learning records."
    }
];

const timeline = [
    { year: "2023", event: "First local STEM competitions", note: "Started building a competition routine and reflection notes." },
    { year: "2024", event: "Expanded into math + science circuits", note: "Began developing deeper habits around practice, review, and learning documentation." },
    { year: "2025", event: "Robotics and chess crossover", note: "Used strategy and systems thinking across domains." },
    { year: "2026", event: "Portfolio development", note: "Structured project work, lessons, and technical writing into a clearer public story." }
];

export default function CompetitionsAchievements() {
    return (
        <Section id="competitions" aria-labelledby="competitions-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Competitions & Growth</p>
                <h2 id="competitions-heading" className="section-title">Progress, reflection, and the skills I am building through real work.</h2>
                <p className="section-lead">
                    This section focuses on the learning and growth I am building across mathematics, science, robotics, and chess. I only include evidence-based progress and current practice areas.
                </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {timeline.map((item) => (
                    <article key={item.year} className="interactive-card glass-card-soft rounded-2xl p-4 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">{item.year}</p>
                        <h3 className="mt-3 text-lg font-semibold text-white">{item.event}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
                    </article>
                ))}
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
                {tracks.map((track) => (
                    <article key={track.name} className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <h3 className="text-xl font-semibold text-white">{track.name}</h3>
                        <ul className="mt-4 grid gap-3">
                            {track.highlights.map((item) => (
                                <li key={item} className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-200">{item}</li>
                            ))}
                        </ul>
                        <p className="mt-5 text-sm leading-7 text-slate-300">{track.reflection}</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
