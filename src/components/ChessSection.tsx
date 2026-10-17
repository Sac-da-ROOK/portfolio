import Section from "@/components/Section";
import CurrentChessRating from "@/components/CurrentChessRating";

const focusAreas = [
    { season: "Current focus", event: "Opening prep", result: "Ongoing training", lesson: "Preparation quality matters as much as tactical sharpness." },
    { season: "Current focus", event: "Endgames", result: "Ongoing training", lesson: "Clock management and endgame technique create better decisions under pressure." },
    { season: "Current focus", event: "Tournament analysis", result: "Ongoing training", lesson: "Reviewing games helps turn mistakes into repeatable improvement." }
];

export default function ChessSection() {
    return (
        <Section id="chess" aria-labelledby="chess-heading">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <p className="section-kicker">Chess</p>
                    <h2 id="chess-heading" className="section-title">Rating growth, tournament discipline, and strategic thinking.</h2>
                    <div className="glass-card mt-6 rounded-3xl p-6">
                        <CurrentChessRating variant="section" />
                    </div>
                </div>

                <article className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-white">Currently preparing for</h3>
                    <ul className="mt-4 grid gap-3">
                        <li className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-200">Stronger opening preparation before tournament rounds.</li>
                        <li className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-200">
                            <a href="#blog" className="ui-transition hover:text-white">More regular tactical warm-up sessions.</a>
                        </li>
                        <li className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-200">
                            <a href="#blog" className="ui-transition hover:text-white">Better post-game review and pattern recognition.</a>
                        </li>
                    </ul>
                </article>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {focusAreas.map((item) => (
                    <article key={`${item.season}-${item.event}`} className="interactive-card glass-card-soft rounded-2xl p-5 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-200">{item.season}</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">{item.event}</h3>
                        <p className="mt-3 text-sm text-slate-300">{item.result}</p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.lesson}</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
