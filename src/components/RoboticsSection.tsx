import Link from "next/link";
import Section from "@/components/Section";

const engineeringCycle = [
    "Version 1 — Photo → Design → Performance",
    "Problem — Robot fails sharp turns",
    "Investigation — Sensor Positioning / Speed / Control Algorithm",
    "Version 2 — Modification",
    "Result — Measured Improvement"
];

export default function RoboticsSection() {
    return (
        <Section id="robotics" aria-labelledby="robotics-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Robotics</p>
                <h2 id="robotics-heading" className="section-title">Robotics work is in progress and will be documented as real engineering builds.</h2>
                <p className="section-lead">I do not publish placeholder builds. When a robot project is ready, I will document the full engineering design cycle: build, test, diagnose, improve, and measure the result.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">Current status</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">No public robotics project yet</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                        This section will only feature real builds once the project has been built, tested, and documented with evidence.
                    </p>
                </div>

                <div className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-200">Documentation standard</p>
                    <div className="mt-4 space-y-3">
                        {engineeringCycle.map((item) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="#contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur ui-transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100">Collaborate</Link>
                <a href="https://github.com/Sac-da-ROOK" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur ui-transition hover:border-cyan-400/30 hover:text-white">Code Repository</a>
            </div>
        </Section>
    );
}
