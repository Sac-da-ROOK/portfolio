import Link from "next/link";
import type { ProjectData } from "@/lib/projects";

type ProjectSummaryProps = {
    project: ProjectData;
};

export default function ProjectSummary({ project }: ProjectSummaryProps) {
    const githubUrl = project.githubUrl || project.repo;

    return (
        <aside className="rounded-[2rem] border border-cyan-400/15 bg-[#0a1830]/80 p-6 shadow-[0_16px_32px_rgba(8,47,73,0.16)] sm:p-8">
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
                                <span key={tech} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-emerald-100">
                                    {tech}
                                </span>
                            ))}
                        </dd>
                    </div>
                </dl>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">Challenges and solutions</h3>
                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                    {(project.challenges && project.challenges.length > 0 ? project.challenges : ["This section is still being documented. I will add the main challenges and solutions later."]).map((challenge) => (
                        <p key={challenge}>• {challenge}</p>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">Future improvements</h3>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                    {(project.nextSteps && project.nextSteps.length > 0 ? project.nextSteps : ["I will add future improvements and ideas for this project later."]).map((nextStep) => (
                        <li key={nextStep}>• {nextStep}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.href ? (
                    <Link href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white">
                        Live Demo
                    </Link>
                ) : null}
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/95 hover:text-cyan-200">
                    GitHub
                </Link>
            </div>
        </aside>
    );
}
