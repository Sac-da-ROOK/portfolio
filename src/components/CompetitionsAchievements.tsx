import Section from "@/components/Section";

type VerifiedAchievement = {
    title: string;
    category: string;
    metrics: Array<{ label: string; value: string }>;
    lesson: string;
    reflection: string;
};

const achievements: VerifiedAchievement[] = [
    {
        title: "Map Test Fall 2026 (Growth Test)",
        category: "Math Student Progress Report",
        metrics: [
            { label: "RIT Score", value: "269" },
            { label: "Percentile", value: "99" },
            { label: "Preparation", value: "6 Months" }
        ],
        lesson: "Staying calm during preparation and during the test is one of the strongest advantages a student can have.",
        reflection: "The most valuable part of this experience was not only the result, but the discipline behind it: consistent preparation, careful review, and the ability to stay composed under pressure. That mindset matters as much as the score itself."
    },
    {
        title: "IAC Regionals 2025 (Buzzer Tournament)",
        category: "Science",
        metrics: [
            { label: "Place", value: "3rd in IL" },
            { label: "Qualified for", value: "Nationals + Internationals" },
            { label: "Preparation", value: "9 Months" }
        ],
        lesson: "Taking the risk to buzz is often the difference between a missed opportunity and a meaningful one.",
        reflection: "This competition taught me that real progress often comes from being willing to act when the moment is uncertain. The experience sharpened my confidence, reinforced my science thinking, and showed me how important it is to trust what I know while staying ready to adapt."
    }
];

export default function CompetitionsAchievements() {
    return (
        <Section id="competitions" aria-labelledby="competitions-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Competitions & Achievements</p>
                <h2 id="competitions-heading" className="section-title">Verified results, clear preparation, and lessons that mattered more than the medal.</h2>
                <p className="section-lead">
                    These outcomes reflect actual preparation, measurable performance, and reflection on how I improved under pressure. The strongest part is often the learning behind the result.
                </p>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
                {achievements.map((achievement) => (
                    <article key={achievement.title} className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">{achievement.category}</p>
                                <h3 className="mt-3 text-xl font-semibold text-white">{achievement.title}</h3>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {achievement.metrics.map((metric) => (
                                <div key={metric.label} className="glass-card-soft rounded-2xl px-3 py-3">
                                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
                                    <p className="mt-2 text-base font-semibold text-white">{metric.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-200">Biggest lesson</p>
                            <p className="mt-3 text-sm leading-7 text-slate-200">{achievement.lesson}</p>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-slate-300">{achievement.reflection}</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
