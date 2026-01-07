"use client";

import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Cloud,
  Cpu,
  Shield,
} from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "Go", "Rust", "C#"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TailwindCSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Prisma ORM"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "ML/AI",
    icon: Brain,
    skills: ["TensorFlow", "Scikit-learn", "OpenCV", "NumPy", "Pandas"],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Docker", "Git", "Vercel", "Linux"],
  },
  {
    title: "IoT",
    icon: Cpu,
    skills: ["Arduino", "MQTT", "Zigbee"],
  },
  {
    title: "Auth",
    icon: Shield,
    skills: ["Clerk", "JWT"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-3">
            Technical Expertise
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning,
            and systems engineering.
          </p>
        </div>

        {/* Skills grid - all categories visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-amber-500/30 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-zinc-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2.5 py-1 bg-zinc-800/60 text-zinc-300 rounded-md text-xs border border-zinc-700/50 hover:border-amber-500/30 hover:text-amber-200 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Languages", value: "7+" },
            { label: "Frameworks", value: "10+" },
            { label: "Projects", value: "15+" },
            { label: "Years Coding", value: "5+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 bg-zinc-900/30 border border-zinc-800/50 rounded-xl"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
