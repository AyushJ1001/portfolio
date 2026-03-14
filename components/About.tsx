"use client";

import { GraduationCap, Sparkles, Target } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, springTransition, staggerContainer, viewport } from "@/lib/motion";

const focusAreas = [
  {
    title: "Machine Learning & CV",
    desc: "Building intelligent systems that interpret visual data",
  },
  {
    title: "Full-Stack Development",
    desc: "Creating comprehensive web apps with modern frameworks",
  },
  {
    title: "Edge Computing",
    desc: "Optimizing systems for real-time processing",
  },
  {
    title: "IoT Solutions",
    desc: "Interconnected device networks for smart applications",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 geo-grid opacity-30" />
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
            Background
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
            About Me
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A passionate engineer dedicated to building intelligent systems and
            solving complex problems.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid lg:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeUp(24)}
              whileHover={{
                y: -6,
                borderColor: "rgba(245, 158, 11, 0.22)",
                boxShadow: "0 18px 36px rgba(0, 0, 0, 0.22)",
              }}
              transition={springTransition}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-3 rounded-xl bg-amber-500/10"
                  whileHover={{ rotate: -6, scale: 1.06 }}
                  transition={springTransition}
                >
                  <GraduationCap size={22} className="text-amber-500" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-zinc-100">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  variants={fadeUp(18)}
                  className="relative pl-6 border-l-2 border-amber-500/30"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-amber-500" />
                  <h4 className="font-semibold text-zinc-100 mb-1">
                    Michigan Technological University
                  </h4>
                  <p className="text-amber-400 text-sm font-medium mb-1">
                    M.S. Computer Science
                  </p>
                  <p className="text-zinc-500 text-sm">
                    2024 - 2026 (Expected) | GPA: 3.88/4.0
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp(18)}
                  className="relative pl-6 border-l-2 border-zinc-700/50"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-zinc-600" />
                  <h4 className="font-semibold text-zinc-100 mb-1">
                    Pune Institute of Computer Technology
                  </h4>
                  <p className="text-zinc-400 text-sm font-medium mb-1">
                    B.E. Computer Engineering
                  </p>
                  <p className="text-zinc-500 text-sm">2020 - 2024 | GPA: 8.14/10</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp(24)}
              whileHover={{
                y: -6,
                borderColor: "rgba(16, 185, 129, 0.22)",
                boxShadow: "0 18px 36px rgba(0, 0, 0, 0.22)",
              }}
              transition={springTransition}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-3 rounded-xl bg-emerald-500/10"
                  whileHover={{ rotate: 6, scale: 1.06 }}
                  transition={springTransition}
                >
                  <Target size={22} className="text-emerald-400" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-zinc-100">
                  Focus Areas
                </h3>
              </div>

              <motion.div variants={staggerContainer(0.06)} className="space-y-4">
                {focusAreas.map((item) => (
                  <motion.div key={item.title} variants={fadeUp(16)} className="flex gap-3">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                    />
                    <div>
                      <h4 className="text-zinc-200 font-medium text-sm">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp(24)}
            whileHover={{
              y: -4,
              borderColor: "rgba(245, 158, 11, 0.18)",
            }}
            transition={springTransition}
            className="mt-8 bg-gradient-to-r from-amber-500/5 via-zinc-900/50 to-amber-500/5 border border-zinc-800/50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="p-3 rounded-xl bg-amber-500/10"
                whileHover={{ rotate: -4, scale: 1.05 }}
                transition={springTransition}
              >
                <Sparkles size={22} className="text-amber-500" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-zinc-100">
                My Approach
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              I combine theoretical knowledge with practical implementation to solve
              complex problems. My approach involves continuous learning,
              collaborative development, and a focus on creating solutions that are
              technically sound and user-centered. I&apos;m dedicated to writing
              clean, efficient code and deploying robust systems that scale with
              growing demands.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
