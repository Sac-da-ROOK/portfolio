import Link from "next/link";
import type { ProjectData } from "@/lib/projects";

type ProjectSummaryProps = {
    project: ProjectData;
};

export default function ProjectSummary({ project }: ProjectSummaryProps) {
    return (
        <aside className="glass-card space-y-10 rounded-[2rem] p-8">
            <div>
                <h3 className="text-xl font-semibold text-white">Project details</h3>
                <dl className="mt-6 grid gap-4 text-sm leading-7 text-slate-300">
                    <div>
                        <dt className="font-semibold text-white">Status</dt>
                        <dd className="mt-1">{project.status}</dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-white">Tech stack</dt>
                        <dd className="mt-1 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="glass-chip rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                                    {tech}
                                </span>
                            ))}
                        </dd>
                    </div>
                </dl>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white">Challenges and solutions</h3>
                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                    {project.challenges.map((challenge) => (
                        <p key={challenge}>• {challenge}</p>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white">Future improvements</h3>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                    {project.nextSteps.map((nextStep) => (
                        <li key={nextStep}>• {nextStep}</li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap gap-3">
                <Link href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white">
                    Live Demo
                </Link>
                <Link href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80 hover:text-cyan-200">
                    GitHub
                </Link>
            </div>
        </aside>
    );
}
