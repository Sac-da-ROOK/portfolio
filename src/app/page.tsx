import dynamic from "next/dynamic";
import About from "@/components/About";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SectionSkeleton from "@/components/SectionSkeleton";

const Journey = dynamic(() => import("@/components/Journey"), {
  ssr: true,
  loading: () => <SectionSkeleton minHeightClass="min-h-[720px]" />,
});

const GithubRepos = dynamic(() => import("@/components/GithubRepos"), {
  ssr: true,
  loading: () => <SectionSkeleton minHeightClass="min-h-[640px]" />,
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
      <div className="pt-24">
        <Hero />
        <AnimatedSection delay={60}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection delay={90}>
          <Journey />
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <GithubRepos />
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <ContactSection />
        </AnimatedSection>
        <AnimatedSection delay={180}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection delay={210}>
          <About />
        </AnimatedSection>
      </div>
    </main>
  );
}