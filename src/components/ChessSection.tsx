import Section from "@/components/Section";
import CurrentChessRating from "@/components/CurrentChessRating";

const chessEvidence = [
    {
        title: "US Chess Profile",
        description: "Tracked through official US Chess records, including current rating status and recent tournament activity.",
    },
    {
        title: "Current Verified Rating",
        description: "The latest regular rating reflects tournament performance and is updated as a result of completed events.",
    },
    {
        title: "Rating History",
        description: "Monitoring progress over time shows consistency, plateaus, and key improvements across tournament seasons.",
    },
    {
        title: "Tournament History",
        description: "Competition experience provides context for strategic growth, decision-making under pressure, and resilience.",
    },
    {
        title: "Selected Games",
        description: "A few representative games help show tournament patterns, opening ideas, and improving positional understanding.",
    },
    {
        title: "Annotated Games",
        description: "Reviewing key positions helps turn results into learning by explaining what was planned, what went wrong, and why.",
    },
    {
        title: "Chess Goals",
        description: "The next step is more structured opening preparation, stronger endgames, and sharper post-game review.",
    },
    {
        title: "Lessons Learned",
        description: "Chess teaches patience, discipline, and the value of learning from difficult positions instead of reacting impulsively.",
    },
];

const gameAnalysisSteps = [
    "Position",
    "My thought process",
    "Mistakes",
    "Engine analysis",
    "Improved variation",
    "Lesson",
];

export default function ChessSection() {
    return (
        <Section id="chess" aria-labelledby="chess-heading">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                    <p className="section-kicker">Chess</p>
                    <h2 id="chess-heading" className="section-title">
                        Sustained commitment, strategic thinking, and growth through review.
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                        Chess has become a strong demonstration of focused practice: technical preparation, tournament discipline, and a habit of learning from mistakes.
                    </p>
                    <div className="glass-card mt-6 rounded-3xl p-6">
                        <CurrentChessRating variant="section" />
                    </div>
                </div>

                <article className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:border-cyan-400/30">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">Game Analysis</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Position → Thought process → Improvement</h3>
                    <div className="mt-5 space-y-3">
                        {gameAnalysisSteps.map((step, index) => (
                            <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-xs font-bold text-slate-950">
                                    {index + 1}
                                </div>
                                <span className="text-sm text-slate-200">{step}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-300">
                        This approach matters because it shows the full learning loop: what I saw, what I missed, what the engine suggests, and what I learned for the next position.
                    </p>
                </article>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {chessEvidence.map((item) => (
                    <article key={item.title} className="interactive-card glass-card-soft rounded-2xl p-5 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-200">Chess</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
