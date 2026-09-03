import dynamic from "next/dynamic";
import About from "@/components/About";
import AnimatedSection from "@/components/AnimatedSection";
import BlogSection from "@/components/BlogSection";
import ChessSection from "@/components/ChessSection";
import CompetitionsAchievements from "@/components/CompetitionsAchievements";
import LearningSection from "@/components/LearningSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RoboticsSection from "@/components/RoboticsSection";
import SectionSkeleton from "@/components/SectionSkeleton";
import StemGallerySection from "@/components/StemGallerySection";

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
        <AnimatedSection delay={160}>
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
      </div>
    </main>
  );
}