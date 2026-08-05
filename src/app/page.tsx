import dynamic from "next/dynamic";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const Journey = dynamic(() => import("@/components/Journey"), {
  ssr: true,
  loading: () => <div className="min-h-[720px]" aria-hidden="true" />,
});

const GithubRepos = dynamic(() => import("@/components/GithubRepos"), {
  ssr: true,
  loading: () => <div className="min-h-[640px]" aria-hidden="true" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: true,
  loading: () => <div className="min-h-[680px]" aria-hidden="true" />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: true,
  loading: () => <div className="min-h-[540px]" aria-hidden="true" />,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <Hero />
        <Projects />
        <Journey />
        <GithubRepos />
        <ContactSection />
        <Skills />
        <About />
      </div>
    </main>
  );
}