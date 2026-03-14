import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageProgress } from "@/components/PageProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative">
      <PageProgress />

      {/* Noise overlay */}
      <div className="noise-bg fixed inset-0 pointer-events-none z-50" />

      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
