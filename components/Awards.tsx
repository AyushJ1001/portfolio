"use client";

import { Award, BookOpen, FileText, Trophy } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  springTransition,
  staggerContainer,
  viewport,
} from "@/lib/motion";

const achievements = [
  {
    title: "2nd Place - PICT InC '24",
    subtitle: "Data Structures Competition",
    year: "2024",
    icon: Trophy,
    color: "amber" as const,
  },
  {
    title: "IEEE Publication",
    subtitle: "ESCI 2023 Conference Presenter",
    year: "2023",
    icon: FileText,
    color: "emerald" as const,
  },
  {
    title: "Academic Scholarships",
    subtitle: "Mathex & MSCE Awards",
    year: "2021-24",
    icon: Award,
    color: "blue" as const,
  },
];

const colorClasses = {
  amber: {
    bg: "bg-[var(--accent)]/10",
    text: "text-[var(--accent)]",
    border: "border-[var(--accent)]/20",
    glow: "rgba(232, 168, 73, 0.15)",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    glow: "rgba(59, 130, 246, 0.15)",
  },
};

export function Awards() {
  return (
    <section id="awards" className="section-padding relative">
      <div className="absolute inset-0 bg-[var(--bg-secondary)]/40" />
      <div className="absolute top-0 left-0 right-0 accent-line" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp(24)}
          className="text-center mb-12"
        >
          <span className="section-label">Recognition</span>
          <h2 className="section-heading mb-4">
            Awards{" "}
            <span className="font-display italic text-zinc-500">&</span>{" "}
            Publications
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Achievement cards */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {achievements.map((item) => {
              const Icon = item.icon;
              const colors = colorClasses[item.color];

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp(22)}
                  whileHover={{
                    y: -6,
                    borderColor: colors.glow,
                    boxShadow: `0 20px 50px ${colors.glow}`,
                  }}
                  transition={springTransition}
                  className="group flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 transition-all duration-500"
                >
                  <motion.div
                    className={`p-3 rounded-xl ${colors.bg} ${colors.text} border ${colors.border}`}
                    whileHover={{ scale: 1.1, rotate: -4 }}
                    transition={springTransition}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-semibold text-zinc-100 mb-0.5 truncate">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-xs truncate">
                      {item.subtitle}
                    </p>
                    <span className="text-zinc-600 text-xs">{item.year}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Published research */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp(22)}
            whileHover={{
              y: -4,
              borderColor: "rgba(16, 185, 129, 0.18)",
            }}
            transition={springTransition}
            className="mt-8 bg-gradient-to-r from-emerald-500/[0.04] via-white/[0.02] to-emerald-500/[0.04] border border-white/[0.06] rounded-xl p-6 transition-all duration-500"
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0"
                whileHover={{ rotate: -5, scale: 1.06 }}
                transition={springTransition}
              >
                <BookOpen size={20} />
              </motion.div>
              <div>
                <h4 className="font-display text-sm font-semibold text-zinc-100 mb-1">
                  Published Research
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  A. Juvekar et al., &ldquo;Carbon Monoxide Concentration
                  Monitoring System,&rdquo;{" "}
                  <span className="text-emerald-400">ESCI 2023</span>,{" "}
                  <a
                    href="https://doi.org/10.1109/ESCI56872.2023.10100144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-emerald-400 transition-colors duration-500 underline underline-offset-2"
                  >
                    DOI: 10.1109/ESCI56872.2023.10100144
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
