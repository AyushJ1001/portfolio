"use client";

import { ArrowUpRight, FlaskConical, Github, Laptop } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  springTransition,
  staggerContainer,
  viewport,
} from "@/lib/motion";

type Project = {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
  type: "research" | "personal";
  highlight?: string;
};

const projects: Project[] = [
  {
    title: "YayCamp",
    date: "2024",
    description:
      "Full-stack camping platform with Next.js 14 SSR and Clerk authentication managing 100+ users. PostgreSQL schema with Prisma ORM and React Leaflet mapping.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk"],
    github: "https://github.com/AyushJ1001/yaycamp",
    link: "https://yaycamp.ayushjuvekar.com",
    type: "personal",
    highlight: "40% faster load time",
  },
  {
    title: "MonkeyLang-CS",
    date: "2024",
    description:
      "Complete programming language interpreter with lexer, parser, and tree-walking evaluator. Supports functions, closures, and first-class functions with REPL.",
    technologies: ["C#", ".NET", "Unit Testing"],
    github: "https://github.com/AyushJ1001/MonkeyLang-CS",
    type: "personal",
    highlight: "95%+ test coverage",
  },
  {
    title: "Anomaly Detection in Crowd Surveillance",
    date: "2023-24",
    description:
      "CNN achieving 92% accuracy on 10K+ frames, optimized with TensorFlow Lite. Real-time pipeline processing 720p at 25 FPS across 5 edge devices.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Jetson Nano"],
    type: "research",
    highlight: "85% cost reduction",
  },
  {
    title: "Particle Vibration Analysis",
    date: "2025",
    description:
      "Computer vision system tracking 50+ particles at 60 FPS with sub-mm precision. Statistical analysis correlating motion patterns with vibration frequencies.",
    technologies: ["Python", "OpenCV", "ZED Cameras", "3D Pipeline"],
    type: "research",
    highlight: "75% faster analysis",
  },
  {
    title: "Secure Data Analytics (CKKS)",
    date: "2023",
    description:
      "Privacy-preserving pipeline using CKKS homomorphic encryption for healthcare data, achieving 98% accuracy with HIPAA compliance.",
    technologies: ["Python", "CKKS", "Docker", "NumPy"],
    type: "research",
    highlight: "HIPAA compliant",
  },
  {
    title: "IoT Air Quality Monitor",
    date: "2022-23",
    description:
      "CO monitoring system with MQTT protocol and ML predictive alerts. Presented at ESCI 2023 International Conference (IEEE publication).",
    technologies: ["C++", "Arduino", "MQTT", "Zigbee"],
    link: "https://ieeexplore.ieee.org/document/10100144",
    type: "research",
    highlight: "IEEE Published",
  },
  {
    title: "Ranking App",
    date: "2024",
    description:
      "Tournament bracket system with decision-time-weighted scoring algorithm and real-time Redis persistence for multi-device sync.",
    technologies: ["TypeScript", "React", "Next.js", "Redis"],
    github: "https://github.com/AyushJ1001/ranking",
    link: "https://ranking.ayushjuvekar.com",
    type: "personal",
  },
];

export function Projects() {
  const researchProjects = projects.filter((p) => p.type === "research");
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 geo-dots opacity-25" />
      <div className="absolute top-0 left-0 right-0 accent-line" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp(24)}
          className="text-center mb-16"
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-heading mb-4">Projects</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            A selection of research and personal projects spanning ML, computer
            vision, and full-stack development.
          </p>
        </motion.div>

        {/* Research Projects */}
        <ProjectGroup
          title="Research Projects"
          icon={FlaskConical}
          iconClasses="bg-emerald-500/10 text-emerald-400"
          projects={researchProjects}
          variant="research"
          gridClassName="grid md:grid-cols-2 gap-5"
        />

        {/* Personal Projects */}
        <ProjectGroup
          title="Personal Projects"
          icon={Laptop}
          iconClasses="bg-[var(--accent)]/10 text-[var(--accent)]"
          projects={personalProjects}
          variant="personal"
          gridClassName="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          className="mt-16"
        />
      </div>
    </section>
  );
}

function ProjectGroup({
  title,
  icon: Icon,
  iconClasses,
  projects,
  variant,
  gridClassName,
  className = "",
}: {
  title: string;
  icon: typeof FlaskConical;
  iconClasses: string;
  projects: Project[];
  variant: "research" | "personal";
  gridClassName: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp(20)}
        className="flex items-center gap-3 mb-8"
      >
        <div className={`p-2.5 rounded-xl ${iconClasses}`}>
          <Icon size={18} />
        </div>
        <h3 className="font-display text-xl font-semibold text-zinc-100">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/[0.06] to-transparent ml-4" />
      </motion.div>

      <motion.div
        variants={staggerContainer(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={gridClassName}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} variant={variant} />
        ))}
      </motion.div>
    </div>
  );
}

function ProjectCard({
  project,
  variant,
}: {
  project: Project;
  variant: "research" | "personal";
}) {
  const isResearch = variant === "research";

  return (
    <motion.article
      variants={fadeUp(24)}
      whileHover={{
        y: -8,
        boxShadow: isResearch
          ? "0 20px 50px rgba(16, 185, 129, 0.06)"
          : "0 20px 50px rgba(232, 168, 73, 0.06)",
        borderColor: isResearch
          ? "rgba(16, 185, 129, 0.22)"
          : "rgba(232, 168, 73, 0.22)",
      }}
      transition={springTransition}
      className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 transition-all duration-500"
    >
      {/* Highlight badge */}
      {project.highlight && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.35, delay: 0.18 }}
          className={`absolute -top-3 right-6 px-3 py-1 text-xs font-medium rounded-full ${
            isResearch
              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
              : "bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/25"
          }`}
        >
          {project.highlight}
        </motion.div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4 gap-4">
        <div>
          <h4
            className={`font-display text-lg font-semibold mb-1 transition-colors duration-500 ${
              isResearch
                ? "text-emerald-400"
                : "text-zinc-100 group-hover:text-[var(--accent)]"
            }`}
          >
            {project.title}
          </h4>
          <span className="text-zinc-500 text-sm">{project.date}</span>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.08] transition-all duration-500"
              aria-label={`${project.title} GitHub`}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={springTransition}
            >
              <Github size={16} />
            </motion.a>
          )}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:bg-white/[0.08] transition-all duration-500 ${
                isResearch
                  ? "hover:text-emerald-400"
                  : "hover:text-[var(--accent)]"
              }`}
              aria-label={`${project.title} link`}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={springTransition}
            >
              <ArrowUpRight size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <motion.span
            key={tech}
            className={`px-2.5 py-1 text-xs rounded-lg ${
              isResearch
                ? "bg-emerald-500/[0.08] text-emerald-300 border border-emerald-500/[0.15]"
                : "bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
            }`}
            whileHover={{
              y: -2,
              scale: 1.02,
              borderColor: isResearch
                ? "rgba(16, 185, 129, 0.3)"
                : "rgba(232, 168, 73, 0.3)",
            }}
            transition={springTransition}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}
