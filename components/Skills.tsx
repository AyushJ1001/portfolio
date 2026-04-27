"use client";

import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layout,
  Server,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  springTransition,
  staggerContainer,
  viewport,
} from "@/lib/motion";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript/TypeScript",
      "Java",
      "C++",
      "Go",
      "Rust",
      "C#",
    ],
    span: 2,
    tint: "from-amber-500/[0.06] to-orange-500/[0.04]",
    iconBg: "bg-amber-500/10 text-amber-500",
    hoverBorder: "rgba(232, 168, 73, 0.25)",
  },
  {
    title: "ML / AI",
    icon: Brain,
    skills: ["TensorFlow", "Scikit-learn", "OpenCV", "NumPy", "Pandas"],
    span: 2,
    tint: "from-emerald-500/[0.06] to-teal-500/[0.04]",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    hoverBorder: "rgba(16, 185, 129, 0.25)",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TailwindCSS", "shadcn/ui"],
    span: 1,
    tint: "",
    iconBg: "bg-blue-500/10 text-blue-400",
    hoverBorder: "rgba(59, 130, 246, 0.25)",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Prisma ORM"],
    span: 1,
    tint: "",
    iconBg: "bg-violet-500/10 text-violet-400",
    hoverBorder: "rgba(139, 92, 246, 0.25)",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB"],
    span: 1,
    tint: "",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    hoverBorder: "rgba(6, 182, 212, 0.25)",
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Docker", "Git", "Vercel", "Linux"],
    span: 1,
    tint: "",
    iconBg: "bg-rose-500/10 text-rose-400",
    hoverBorder: "rgba(244, 63, 94, 0.25)",
  },
  {
    title: "IoT",
    icon: Cpu,
    skills: ["Arduino", "MQTT", "Zigbee"],
    span: 1,
    tint: "",
    iconBg: "bg-orange-500/10 text-orange-400",
    hoverBorder: "rgba(249, 115, 22, 0.25)",
  },
  {
    title: "Auth",
    icon: Shield,
    skills: ["Clerk", "JWT"],
    span: 1,
    tint: "",
    iconBg: "bg-indigo-500/10 text-indigo-400",
    hoverBorder: "rgba(99, 102, 241, 0.25)",
  },
];

const stats = [
  { label: "Languages", value: "7+" },
  { label: "Frameworks", value: "10+" },
  { label: "Projects", value: "15+" },
  { label: "Years Coding", value: "5+" },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--bg-secondary)]/40" />
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
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-heading mb-4">
            Skills{" "}
            <span className="font-display italic text-zinc-500">&</span>{" "}
            Technologies
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning full-stack development, machine
            learning, and systems engineering.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={fadeUp(22)}
                whileHover={{
                  y: -6,
                  borderColor: category.hoverBorder,
                  boxShadow: `0 18px 50px rgba(0, 0, 0, 0.25)`,
                }}
                transition={springTransition}
                className={`group rounded-2xl border border-white/[0.06] p-5 transition-all duration-500 ${
                  category.span === 2
                    ? "sm:col-span-2 bg-gradient-to-br " + category.tint
                    : "bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-2.5 rounded-xl ${category.iconBg}`}
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={springTransition}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="font-display text-base font-semibold text-zinc-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-white/[0.04] text-zinc-300 rounded-lg text-xs border border-white/[0.06] transition-all duration-300"
                      whileHover={{
                        y: -2,
                        borderColor: category.hoverBorder,
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                      }}
                      transition={springTransition}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp(20)}
              whileHover={{
                y: -4,
                scale: 1.01,
                borderColor: "rgba(232, 168, 73, 0.2)",
              }}
              transition={springTransition}
              className="text-center p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-xs tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
