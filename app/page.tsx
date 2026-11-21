import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageProgress } from "@/components/PageProgress";

const techStack = [
  "TypeScript",
  "React",
  "TanStack Start",
  "Next.js",
  "Effect v4",
  "Swift",
  "SwiftUI",
  "Kotlin",
  "Jetpack Compose",
  "Convex",
  "libSQL",
  "PostgreSQL",
  "Redis",
  "Playwright",
  "Python",
  "LiteRT",
];

const toolsStack = [
  "Full-Stack Web",
  "Native iOS",
  "Native Android",
  "On-Device ML",
  "Computer Vision",
  "OMR Scanning",
  "Payments & Auth",
  "Automated Testing",
  "Edge Computing",
  "IoT Systems",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative">
      <PageProgress />
      <div className="noise-bg fixed inset-0 pointer-events-none z-50" />

      <Header />
      <Hero />

      {/* Tech marquee */}
      <div className="py-10 sm:py-14 border-y border-white/[0.04] space-y-3 relative overflow-hidden">
        <Marquee items={techStack} duration={40} />
        <Marquee items={toolsStack} duration={45} reverse />
      </div>

      <Experience />
      <Projects />
      <Skills />
      <About />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
