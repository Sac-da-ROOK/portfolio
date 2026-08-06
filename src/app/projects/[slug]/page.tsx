import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { getProjectBySlug, getProjectSlugs, metadataForProject } from "@/lib/projects";

type ProjectPageProps = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps) {
    const project = getProjectBySlug(params.slug);
    if (!project) {
        return {
            title: "Project not found | Portfolio",
            description: "The project you are looking for could not be found.",
        };
    }

    return metadataForProject(project);
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <Section id="project-detail" aria-labelledby="project-detail-heading">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Project Case Study</p>
                            <h1 id="project-detail-heading" className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                                {project.title}
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-slate-300">{project.subtitle}</p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{project.status}</span>
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white"
                                >
                                    Visit Live App
                                </Link>
                                <Link
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80 hover:text-cyan-200"
                                >
                                    View GitHub
                                </Link>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-1 shadow-2xl shadow-black/20">
                            <div className="relative h-80 w-full overflow-hidden rounded-[1.75rem] bg-slate-900/90">
                                <Image
                                    src={project.screenshot}
                                    alt={`${project.title} screenshot`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 640px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-semibold text-white">The challenge</h2>
                                <p className="mt-4 text-base leading-8 text-slate-300">{project.problem}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white">Why this approach</h2>
                                <p className="mt-4 text-base leading-8 text-slate-300">{project.why}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white">Core features</h2>
                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    {project.features.map((feature) => (
                                        <div key={feature} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                                            <p className="text-sm font-semibold text-white">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white">What I learned</h2>
                                <div className="mt-6 space-y-4">
                                    {project.learnings.map((lesson) => (
                                        <p key={lesson} className="text-base leading-8 text-slate-300">{lesson}</p>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <aside className="space-y-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-black/20">
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
                                                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white">Development notes</h3>
                                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                                    {project.challenges.map((challenge) => (
                                        <p key={challenge}>• {challenge}</p>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white">Next steps</h3>
                                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                                    {project.nextSteps.map((nextStep) => (
                                        <li key={nextStep}>• {nextStep}</li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>

                    <div className="mt-16 space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">Project gallery</h2>
                            <p className="mt-4 text-base leading-8 text-slate-300">Quick visual highlights from the experience and interface.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {project.gallery.map((image) => (
                                <div key={image} className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 h-64">
                                    <Image src={image} alt={`${project.title} screenshot`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-slate-300 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ready to explore more?</p>
                            <p className="mt-2 text-base leading-7 text-white">Go back to the portfolio and browse other projects.</p>
                        </div>
                        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white">
                            Return to home
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
