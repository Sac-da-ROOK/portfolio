import dynamic from "next/dynamic";
import Link from "next/link";
import About from "@/components/About";
import ActivitiesLeadership from "@/components/ActivitiesLeadership";
import AnimatedSection from "@/components/AnimatedSection";
import BlogSection from "@/components/BlogSection";
import ChessSection from "@/components/ChessSection";
import CompetitionsAchievements from "@/components/CompetitionsAchievements";
import LearningSection from "@/components/LearningSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import RoboticsSection from "@/components/RoboticsSection";
import SectionSkeleton from "@/components/SectionSkeleton";
import StemGallerySection from "@/components/StemGallerySection";
import { featuredProjects } from "@/lib/projects";

const Journey = dynamic(() => import("@/components/Journey"), {
  ssr: true,
  loading: () => <SectionSkeleton minHeightClass="min-h-[720px]" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: true,
  loading: () => <SectionSkeleton minHeightClass="min-h-[680px]" />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: true,
  loading: () => <SectionSkeleton minHeightClass="min-h-[540px]" />,
});

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <div>
        <Hero />
        <section className="section-shell px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="section-kicker">Choose your path</p>
              <h2 className="section-title">Three ways to explore my work.</h2>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "IMSA / admissions reader",
                  description: "See my current academic focus, competition work, and long-term STEM growth in one place.",
                  actions: [
                    { label: "View Academics", href: "/academics" },
                    { label: "Read Research", href: "/research" }
                  ]
                },
                {
                  title: "STEM mentor or teacher",
                  description: "Browse my project process, research thinking, and journal reflections for how I learn and iterate.",
                  actions: [
                    { label: "Explore Projects", href: "/projects" },
                    { label: "Open Journal", href: "/lab-journal" }
                  ]
                },
                {
                  title: "Developer / collaborator",
                  description: "Jump straight to software, engineering, and evidence-based project work that demonstrates technical thinking.",
                  actions: [
                    { label: "See Code Work", href: "/projects" },
                    { label: "Contact Me", href: "/#contact" }
                  ]
                }
              ].map((audience) => (
                <article key={audience.title} className="interactive-card glass-card rounded-[2rem] p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-700">Audience path</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-900">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{audience.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {audience.actions.map((action) => (
                      <Link
                        key={action.label}
                        href={action.href}
                        className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:border-cyan-500/40 hover:bg-cyan-500/15"
                      >
                        {action.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="section-kicker">Featured Work</p>
              <h2 className="section-title">Evidence of how I think, build, and improve.</h2>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-3">
              {featuredProjects.slice(0, 3).map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  details={project.details}
                  status={project.status}
                  tags={project.tags}
                  detailPath={`/projects/${project.slug}`}
                  liveHref={project.href || `/projects/${project.slug}`}
                  repo={project.repo}
                  screenshot={project.screenshot}
                  gallery={project.gallery}
                  featured={project.featured}
                />
              ))}
            </div>
          </div>
        </section>

        <AnimatedSection delay={60}>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={80}>
          <Skills />
        </AnimatedSection>
        <Journey />
        <AnimatedSection delay={120}>
          <CompetitionsAchievements />
        </AnimatedSection>
        <AnimatedSection delay={140}>
          <LearningSection />
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <ActivitiesLeadership />
        </AnimatedSection>
        <AnimatedSection delay={170}>
          <ChessSection />
        </AnimatedSection>
        <AnimatedSection delay={180}>
          <RoboticsSection />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <StemGallerySection />
        </AnimatedSection>
        <AnimatedSection delay={220}>
          <section className="section-shell px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="section-kicker">Currently working on</p>
                <h2 className="section-title">A few active projects that are shaping the next few months.</h2>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  {
                    title: "Autonomous hardware systems",
                    description: "Exploring low-cost robot control loops, sensors, and repeatable test routines for fast iteration.",
                    accent: "from-amber-200 via-yellow-100 to-emerald-100"
                  },
                  {
                    title: "Math + CS research notes",
                    description: "Summarizing proofs, algorithm ideas, and the lessons I learn from trying to solve harder problems clearly.",
                    accent: "from-cyan-200 via-sky-100 to-indigo-100"
                  },
                  {
                    title: "Competition preparation",
                    description: "Building stronger routines for performance, review, and reflection before key competitions and tasks.",
                    accent: "from-rose-200 via-orange-100 to-amber-100"
                  }
                ].map((project) => (
                  <article key={project.title} className="interactive-card glass-card rounded-[2rem] p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                    <div className={`mb-4 h-24 rounded-[1.5rem] bg-gradient-to-br ${project.accent}`} aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{project.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={240}>
          <BlogSection />
        </AnimatedSection>
        <AnimatedSection delay={260}>
          <ContactSection />
        </AnimatedSection>

        <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-24">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-[#0b1c2d] via-[#071521] to-[#0b1c2d] p-8 text-center shadow-[0_0_50px_rgba(14,116,144,0.16)] sm:p-10 lg:p-12">
            <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
              Done with STEM? Check out my Computer Science page next!
            </h2>

            <div className="mt-8 flex justify-center">
              <Link
                href="/cs"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(16,185,129,0.28)]"
              >
                Explore Computer Science →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}