"use client";

import { GraduationCap, Sparkles, Target } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  springTransition,
  staggerContainer,
  viewport,
} from "@/lib/motion";

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
      <div className="absolute inset-0 geo-grid opacity-25" />
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
          <span className="section-label">Background</span>
          <h2 className="section-heading mb-4">
            About{" "}
            <span className="font-display italic text-zinc-500">Me</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
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
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* Education */}
            <motion.div
              variants={fadeUp(24)}
              whileHover={{
                y: -6,
                borderColor: "rgba(232, 168, 73, 0.18)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
              }}
              transition={springTransition}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-3 rounded-xl bg-[var(--accent)]/10"
                  whileHover={{ rotate: -6, scale: 1.06 }}
                  transition={springTransition}
                >
                  <GraduationCap size={22} className="text-[var(--accent)]" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-zinc-100">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  variants={fadeUp(18)}
                  className="relative pl-6 border-l-2 border-[var(--accent)]/30"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-[var(--accent)]" />
                  <h4 className="font-semibold text-zinc-100 mb-1">
                    Michigan Technological University
                  </h4>
                  <p className="text-[var(--accent)] text-sm font-medium mb-1">
                    M.S. Computer Science
                  </p>
                  <p className="text-zinc-500 text-sm">
                    Graduated Apr 24, 2026 | CGPA: 3.9/4.0
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp(18)}
                  className="relative pl-6 border-l-2 border-zinc-700/40"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-zinc-600" />
                  <h4 className="font-semibold text-zinc-100 mb-1">
                    Pune Institute of Computer Technology
                  </h4>
                  <p className="text-zinc-400 text-sm font-medium mb-1">
                    B.E. Computer Engineering
                  </p>
                  <p className="text-zinc-500 text-sm">
                    2020 - 2024 | GPA: 8.14/10
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Focus Areas */}
            <motion.div
              variants={fadeUp(24)}
              whileHover={{
                y: -6,
                borderColor: "rgba(16, 185, 129, 0.18)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
              }}
              transition={springTransition}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 transition-all duration-500"
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

              <motion.div
                variants={staggerContainer(0.06)}
                className="space-y-4"
              >
                {focusAreas.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp(16)}
                    className="flex gap-3"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                      }}
                    />
                    <div>
                      <h4 className="text-zinc-200 font-medium text-sm">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp(24)}
            whileHover={{
              y: -4,
              borderColor: "rgba(232, 168, 73, 0.15)",
            }}
            transition={springTransition}
            className="mt-6 bg-gradient-to-r from-[var(--accent)]/[0.04] via-white/[0.02] to-[var(--accent)]/[0.04] border border-white/[0.06] rounded-2xl p-8 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="p-3 rounded-xl bg-[var(--accent)]/10"
                whileHover={{ rotate: -4, scale: 1.05 }}
                transition={springTransition}
              >
                <Sparkles size={22} className="text-[var(--accent)]" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-zinc-100">
                My Approach
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              I combine theoretical knowledge with practical implementation to
              solve complex problems. My approach involves continuous learning,
              collaborative development, and a focus on creating solutions that
              are technically sound and user-centered. I&apos;m dedicated to
              writing clean, efficient code and deploying robust systems that
              scale with growing demands.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
