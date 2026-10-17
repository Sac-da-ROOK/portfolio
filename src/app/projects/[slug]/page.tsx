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
    const whyChosen = project.whyChosen || project.why || "This section is still being documented. I will explain what made the problem interesting and worth exploring.";
    const hypothesisGoal = project.hypothesisGoal || "I approached this project with a testable goal: to turn an idea into a working system and learn from the outcome.";
    const design = project.design || project.approach || "This project is still being documented. I will add the technical approach and key decisions here as the project develops.";
    const tools = project.tools && project.tools.length > 0 ? project.tools : project.techStack;
    const experiment = project.experiment || "I ran the build and testing process iteratively, adjusting the system based on actual results and observations.";
    const challenges = project.challenges && project.challenges.length > 0 ? project.challenges : ["This section is still being documented. I will add the main challenges I faced and how I addressed them later."];
    const results = project.results && project.results.length > 0 ? project.results : [project.result || "This project is still being documented. I will add the final outcome and impact here as the work evolves."];
    const failure = project.failure || "Every design process includes mistakes. I recorded what did not work as carefully as what did, because those failures shaped the final version.";
    const whatChanged = project.whatChanged && project.whatChanged.length > 0 ? project.whatChanged : ["The first version exposed useful issues, and I revised the design based on testing and reflection."];
    const learnings = project.learnings && project.learnings.length > 0 ? project.learnings : ["This section is still being documented. I will add what I learned from building this project later."];
    const nextVersion = project.nextSteps && project.nextSteps.length > 0 ? project.nextSteps : ["I will add future improvements and ideas for this project later."];
    const sourceCode = project.sourceCode || project.githubUrl || project.repo || "https://github.com/Sac-da-ROOK";

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
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Problem</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{problem}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d2236] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Why I chose it</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{whyChosen}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#112731] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Hypothesis / Goal</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{hypothesisGoal}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0e2237] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Design</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{design}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0f2534] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Tools</h2>
                                        <div className="mt-5 flex flex-wrap gap-3">
                                            {tools.map((tool) => (
                                                <span key={tool} className="rounded-full border border-emerald-400/25 bg-[#102a26] px-3 py-1.5 text-sm font-medium !text-emerald-100">{tool}</span>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d1f2d] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Experiment / Build</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{experiment}</p>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d2236] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Results</h2>
                                        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-base leading-8 !text-slate-100 sm:text-lg">
                                            {results.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d2431] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">What Failed</h2>
                                        <p className="mt-4 max-w-3xl text-base leading-8 !text-slate-100 sm:text-lg">{failure}</p>
                                        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-base leading-8 !text-slate-100 sm:text-lg">
                                            {challenges.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#112d39] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">What I Changed</h2>
                                        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-base leading-8 !text-slate-100 sm:text-lg">
                                            {whatChanged.map((item) => (
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

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0f2534] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Next version</h2>
                                        <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-base leading-8 !text-slate-100 sm:text-lg">
                                            {nextVersion.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    <section className="rounded-[1.5rem] border border-cyan-400/15 bg-[#0d2431] p-5 sm:p-6">
                                        <h2 className="text-2xl font-semibold tracking-[-0.03em] !text-cyan-100 sm:text-3xl">Source Code</h2>
                                        <div className="mt-4 flex flex-wrap items-center gap-3">
                                            <a href={sourceCode} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-emerald-500/20 px-4 py-2.5 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200/50 hover:from-cyan-500/30 hover:to-emerald-500/30">
                                                View GitHub Repository
                                            </a>
                                        </div>
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
