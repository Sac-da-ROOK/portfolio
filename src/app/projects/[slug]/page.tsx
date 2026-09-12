import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectFooter from "@/components/projects/ProjectFooter";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import { getProjectBySlug, getProjectSlugs, metadataForProject } from "@/lib/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project not found | Portfolio",
            description: "The project you are looking for could not be found.",
        };
    }

    return metadataForProject(project);
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const overview = project.overview || "This project is still being documented. I will add a clearer overview here as I refine the project and its purpose.";
    const problem = project.problem || "This project is still being documented. I will add a clearer description of the problem or idea behind it later.";
    const approach = project.approach || "This project is still being documented. I will add the technical approach and key decisions here as the project develops.";
    const challenges = project.challenges && project.challenges.length > 0 ? project.challenges : ["This section is still being documented. I will add the main challenges I faced and how I addressed them later."];
    const learnings = project.learnings && project.learnings.length > 0 ? project.learnings : ["This section is still being documented. I will add what I learned from building this project later."];
    const result = project.result || "This project is still being documented. I will add the final outcome and impact here as the work evolves.";
    const nextSteps = project.nextSteps && project.nextSteps.length > 0 ? project.nextSteps : ["I will add future improvements and ideas for this project later."];

    return (
        <main className="min-h-screen bg-[#050b16] text-slate-100">
            <Navbar theme="cs" />

            <div className="relative overflow-hidden pt-24 sm:pt-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_#050b16_0%,_#0a1325_42%,_#071421_100%)]" />

                <div className="relative z-10">
                    <Section
                        id="project-detail"
                        aria-labelledby="project-detail-heading"
                        className="border border-cyan-400/15"
                        style={{
                            background:
                                "radial-gradient(circle at 15% 0%, rgba(34, 211, 238, 0.14), transparent 38%), radial-gradient(circle at 85% 10%, rgba(45, 212, 191, 0.14), transparent 48%), linear-gradient(180deg, rgba(8, 26, 42, 0.97), rgba(8, 20, 33, 0.96))"
                        }}
                    >
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-8 flex items-center justify-start">
                                <Link href="/cs" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#0a1830]/80 px-4 py-2 text-sm font-medium !text-cyan-100 transition hover:border-cyan-300/40 hover:bg-[#0d2340]">
                                    ← Back to Computer Science
                                </Link>
                            </div>

                            <ProjectHero project={project} />

                            <article className="mt-10 rounded-[2rem] border border-cyan-400/20 bg-[#0a1727] p-5 shadow-[0_0_45px_rgba(14,116,144,0.08)] sm:p-7 lg:p-10">
                                <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-cyan-400/10 pb-6 text-sm !text-slate-200">
                                    <span className="rounded-full border border-cyan-400/20 bg-[#0e2438] px-3 py-1.5 font-medium !text-cyan-100">
                                        {project.status}
                                    </span>
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="rounded-full border border-emerald-400/20 bg-[#102a26] px-3 py-1.5 font-medium !text-emerald-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-6 !text-slate-200">
                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d1e2f] p-5 sm:p-6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.32em] !text-cyan-200">Overview</p>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{overview}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d1f32] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">The problem</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{problem}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0e2237] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">How I built it</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{approach}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d2236] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Challenges and solutions</h2>
                                        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-base leading-8 !text-slate-100 sm:text-lg">
                                            {challenges.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d1f2d] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">What I learned</h2>
                                        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-base leading-8 !text-slate-100 sm:text-lg">
                                            {learnings.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#112731] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">The result</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{result}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0f2534] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">What I would do next</h2>
                                        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-base leading-8 !text-slate-100 sm:text-lg">
                                            {nextSteps.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d2431] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Core features</h2>
                                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                            {project.features.map((feature) => (
                                                <div key={feature} className="rounded-[1.25rem] border border-cyan-400/20 bg-[#132d3d] px-4 py-4 text-sm font-medium !text-cyan-50">
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </article>

                            {project.gallery && project.gallery.length > 0 ? <ProjectGallery project={project} /> : null}
                            <ProjectFooter />
                        </div>
                    </Section>
                </div>
            </div>
        </main>
    );
}
