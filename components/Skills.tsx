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
import { fadeUp, springTransition, staggerContainer, viewport } from "@/lib/motion";

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

const stats = [
  { label: "Languages", value: "7+" },
  { label: "Frameworks", value: "10+" },
  { label: "Projects", value: "15+" },
  { label: "Years Coding", value: "5+" },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-zinc-950/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp(24)}
          className="text-center mb-16"
        >
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
        </motion.div>

        <motion.div
          variants={staggerContainer(0.07)}
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
                  borderColor: "rgba(245, 158, 11, 0.28)",
                  boxShadow: "0 16px 45px rgba(0, 0, 0, 0.24)",
                }}
                transition={springTransition}
                className="group bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-2 rounded-lg bg-amber-500/10 text-amber-500"
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={springTransition}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="font-display text-sm font-semibold text-zinc-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-2.5 py-1 bg-zinc-800/60 text-zinc-300 rounded-md text-xs border border-zinc-700/50"
                      whileHover={{
                        y: -2,
                        borderColor: "rgba(245, 158, 11, 0.3)",
                        color: "#fde68a",
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

        <motion.div
          variants={staggerContainer(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp(20)}
              whileHover={{
                y: -4,
                scale: 1.01,
                borderColor: "rgba(245, 158, 11, 0.24)",
              }}
              transition={springTransition}
              className="text-center p-5 bg-zinc-900/30 border border-zinc-800/50 rounded-xl"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
