import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
