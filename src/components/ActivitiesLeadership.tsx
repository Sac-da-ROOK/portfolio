import Section from "@/components/Section";

const activities = [
    {
        title: "STEM club and team projects",
        what: "I work with peers on problems that require planning, communication, and iteration rather than one-off answers.",
        responsibility: "I help keep the team focused on the goal, break larger tasks into manageable pieces, and make sure our thinking is documented clearly.",
        impact: "Participation improves the quality of the final result because the team is more organized, more consistent, and better at testing ideas before committing to them.",
        learning: "The best group work does not happen by accident; it grows from clear roles, honest feedback, and a willingness to revise ideas."
    },
    {
        title: "Science Olympiad and structured inquiry",
        what: "I take part in analytical challenges that reward careful reading, precise method, and evidence-based reasoning.",
        responsibility: "I am responsible for understanding the rules, preparing for the task, and communicating my reasoning in a way that is clear and testable.",
        impact: "This kind of participation strengthens both technical skill and composure under pressure, especially when the problem requires quick adjustment.",
        learning: "I have learned that strong performance is not only about knowing facts—it is also about staying calm, thinking clearly, and validating each step."
    },
    {
        title: "Robotics and engineering builds",
        what: "I work on physical systems that involve movement, sensors, testing, and redesign.",
        responsibility: "I help move a project from first idea to a working prototype by identifying failure points, improving the build, and measuring what changed.",
        impact: "The process turns a vague idea into something observable, testable, and improvable, which makes progress much more meaningful.",
        learning: "I have found that engineering is not about getting everything right the first time; it is about learning quickly, testing carefully, and improving with evidence."
    },
    {
        title: "Chess and competitive strategy",
        what: "I study positions, patterns, and decision-making in a context where accuracy and foresight matter.",
        responsibility: "I review my games, analyze my mistakes, and look for recurring themes in how I choose moves under pressure.",
        impact: "This kind of structured repetition sharpens concentration, pattern recognition, and decision quality over time.",
        learning: "The bigger lesson is not just tactical skill; it is learning to slow down, assess choices, and improve from each decision rather than rushing through the position."
    },
    {
        title: "Community service and mentoring",
        what: "I participate in opportunities where I can support others with learning, encouragement, or practical help.",
        responsibility: "I take responsibility for helping others understand a concept, stay engaged, or feel more confident in what they are trying to do.",
        impact: "These experiences build stronger communication skills and create a sense of contribution beyond my own learning.",
        learning: "Leadership is not only about leading a team—it is also about helping other people grow and making a difficult task feel more manageable."
    }
];

export default function ActivitiesLeadership() {
    return (
        <Section id="activities" aria-labelledby="activities-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Activities & Leadership</p>
                <h2 id="activities-heading" className="section-title">Participation that builds responsibility, confidence, and better thinking.</h2>
                <p className="section-lead">
                    I care most about activities where I can contribute, learn, and improve the outcome for the group—not just check a box. For each experience, the important questions are simple: what did I do, what responsibility did I have, what changed because I participated, and what did I learn?
                </p>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
                {activities.map((activity) => (
                    <article key={activity.title} className="interactive-card glass-card rounded-[2rem] p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">Activity</p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">{activity.title}</h3>

                        <div className="mt-5 space-y-4">
                            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">What did I do?</p>
                                <p className="mt-2 text-sm leading-7 text-slate-200">{activity.what}</p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">What responsibility did I have?</p>
                                <p className="mt-2 text-sm leading-7 text-slate-200">{activity.responsibility}</p>
                            </div>

                            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-200">What changed because I participated?</p>
                                <p className="mt-2 text-sm leading-7 text-slate-200">{activity.impact}</p>
                            </div>

                            <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-amber-200">What did I learn?</p>
                                <p className="mt-2 text-sm leading-7 text-slate-200">{activity.learning}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}
