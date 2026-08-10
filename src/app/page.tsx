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
          <BlogSection />
        </AnimatedSection>
        <AnimatedSection delay={240}>
          <ContactSection />
        </AnimatedSection>
      </div>
    </main>
  );
}