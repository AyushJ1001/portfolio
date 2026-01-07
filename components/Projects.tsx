import { Github, FlaskConical, Laptop, ArrowUpRight } from "lucide-react";

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

export function Projects() {
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

  const researchProjects = projects.filter((p) => p.type === "research");
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <section id="projects" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 geo-dots opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-3">
            Featured Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
            Projects
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A selection of research and personal projects spanning ML, computer vision,
            and full-stack development.
          </p>
        </div>

        {/* Research Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <FlaskConical size={18} className="text-emerald-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-zinc-100">
              Research Projects
            </h3>
            <div className="flex-1 h-px bg-zinc-800/50 ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="research" />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Laptop size={18} className="text-amber-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-zinc-100">
              Personal Projects
            </h3>
            <div className="flex-1 h-px bg-zinc-800/50 ml-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="personal" />
            ))}
          </div>
        </div>
      </div>
    </section>
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
    <div className="group relative bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700/50 transition-all duration-300 hover:-translate-y-1">
      {/* Highlight badge */}
      {project.highlight && (
        <div
          className={`absolute -top-3 right-6 px-3 py-1 text-xs font-medium rounded-full ${
            isResearch
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
          }`}
        >
          {project.highlight}
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4
            className={`font-display text-lg font-semibold mb-1 transition-colors ${
              isResearch
                ? "text-emerald-400 group-hover:text-emerald-400"
                : "text-zinc-100 group-hover:text-amber-400"
            }`}
          >
            {project.title}
          </h4>
          <span className="text-zinc-500 text-sm">{project.date}</span>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-800/50 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 transition-colors ${
                isResearch ? "hover:text-emerald-400" : "hover:text-amber-400"
              }`}
              aria-label="Live demo"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-2.5 py-1 text-xs rounded-md ${
              isResearch
                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                : "bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
