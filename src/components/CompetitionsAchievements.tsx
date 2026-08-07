import Section from "@/components/Section";

type Track = {
    name: string;
    highlights: string[];
    reflection: string;
};

const tracks: Track[] = [
    {
        name: "AMC 8",
        highlights: [
            "Score placeholder: 00 / 25",
            "Top percentile placeholder",
            "Certificate placeholder"
        ],
        reflection: "Practicing AMC-style questions strengthened pattern recognition and improved calm decision-making under time pressure."
    },
    {
        name: "MathCounts",
        highlights: [
            "Chapter/School round placeholder",
            "Sprint/Target round notes",
            "Ranking placeholder"
        ],
        reflection: "MathCounts helped me build speed with precision and taught me to break challenging problems into reusable strategies."
    },
    {
        name: "Math Kangaroo",
        highlights: [
            "Participation year placeholder",
            "Score range placeholder",
            "Recognition placeholder"
        ],
        reflection: "Math Kangaroo strengthened flexible thinking by requiring quick shifts between arithmetic, logic, and pattern-based problems."
    },
    {
        name: "Science Olympiad",
        highlights: [
            "Event participation placeholder",
            "Medal placeholder",
            "Team result placeholder"
        ],
        reflection: "Science Olympiad sharpened both scientific reasoning and collaboration, especially when balancing prep across multiple events."
    },
    {
        name: "Robotics",
        highlights: [
            "Competition placeholder",
            "Build award placeholder",
            "Driver/control role placeholder"
        ],
        reflection: "Robotics taught me how software and hardware trade-offs influence real-world performance, reliability, and teamwork."
    },
    {
        name: "Chess",
        highlights: [
            "Tournament placeholder",
            "Rating milestone placeholder",
            "Best game result placeholder"
        ],
        reflection: "Chess improved long-horizon planning, tactical awareness, and post-match analysis habits I now apply to STEM projects."
    }
];

const timeline = [
    { year: "2023", event: "First local STEM competitions", note: "Started building a competition routine and reflection notes." },
    { year: "2024", event: "Expanded into math + science circuits", note: "Began collecting certificates, rank snapshots, and lessons learned." },
    { year: "2025", event: "Robotics and chess crossover", note: "Used strategy and systems thinking across domains." },
    { year: "2026", event: "Portfolio-ready achievement tracking", note: "Structured competition data into goals, outcomes, and improvement plans." }
];

export default function CompetitionsAchievements() {
    return (
        <Section id="competitions" aria-labelledby="competitions-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Competitions & Achievements</p>
                <h2 id="competitions-heading" className="section-title">Performance, awards, and the lessons behind each result.</h2>
                <p className="section-lead">
                    This section tracks my progress across mathematics, science, robotics, and chess. Each competition entry includes outcomes and reflections to turn every event into a measurable growth loop.
                </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
                {timeline.map((item) => (
                    <article key={item.year} className="interactive-card glass-card-soft rounded-2xl p-4 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">{item.year}</p>
                        <h3 className="mt-3 text-lg font-semibold text-white">{item.event}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
                    </article>
                ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
