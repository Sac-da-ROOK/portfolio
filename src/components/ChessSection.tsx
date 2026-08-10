import Section from "@/components/Section";
import CurrentChessRating from "@/components/CurrentChessRating";

const tournaments = [
    { season: "2026 Spring", event: "Local Scholastic Open", result: "Result placeholder", lesson: "Preparation quality matters as much as opening prep." },
    { season: "2026 Summer", event: "City Rapid", result: "Result placeholder", lesson: "Clock management can convert equal positions into wins." },
    { season: "2026 Fall", event: "Regional Classic", result: "Result placeholder", lesson: "Endgame discipline creates consistent score gains." }
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
                    <h3 className="text-xl font-semibold text-white">Goals & Lessons</h3>
                    <ul className="mt-4 grid gap-3">
                        <li className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-200">Reach next rating milestone (placeholder).</li>
                        <li className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-200">
                            <a href="#blog" className="ui-transition hover:text-white">Publish annotated game summaries monthly.</a>
                        </li>
                        <li className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-200">
                            <a href="#blog" className="ui-transition hover:text-white">Build a tactical warm-up routine before tournaments.</a>
                        </li>
                    </ul>
                    <div className="mt-6 rounded-2xl border border-dashed border-slate-700/90 bg-slate-900/70 p-5 text-sm uppercase tracking-[0.25em] text-slate-500">
                        Gallery placeholder for future games, trophies, and certificates
                    </div>
                </article>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {tournaments.map((tournament) => (
                    <article key={tournament.season} className="interactive-card glass-card-soft rounded-2xl p-5 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-200">{tournament.season}</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">{tournament.event}</h3>
                        <p className="mt-3 text-sm text-slate-300">{tournament.result}</p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{tournament.lesson}</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
