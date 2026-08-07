import Link from "next/link";
import Section from "@/components/Section";

const roboticsProjects = [
    { title: "Autonomous Line Follower", type: "Control Systems", note: "Sensors + PID tuning placeholder." },
    { title: "Object Sorting Bot", type: "Computer Vision", note: "Classification and servo actuation placeholder." },
    { title: "Robotics Dashboard", type: "Telemetry", note: "Live metrics and test run analytics placeholder." }
];

export default function RoboticsSection() {
    return (
        <Section id="robotics" aria-labelledby="robotics-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Robotics</p>
                <h2 id="robotics-heading" className="section-title">Hardware + software projects with competition-ready iteration.</h2>
                <p className="section-lead">A place for build logs, photos, videos, source code, and event results.</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {roboticsProjects.map((project) => (
                    <article key={project.title} className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">{project.type}</p>
                        <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{project.note}</p>
                        <div className="mt-5 rounded-2xl border border-dashed border-slate-700/90 bg-slate-900/70 p-4 text-xs uppercase tracking-[0.22em] text-slate-500">
                            Photo / video placeholder
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur ui-transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100">Collaborate</Link>
                <a href="https://github.com/Sac-da-ROOK" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur ui-transition hover:border-cyan-400/30 hover:text-white">Code Repository</a>
            </div>
        </Section>
    );
}
