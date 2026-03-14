"use client";

import { Award, BookOpen, FileText, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, springTransition, staggerContainer, viewport } from "@/lib/motion";

const achievements = [
  {
    title: "2nd Place - PICT InC '24",
    subtitle: "Data Structures Competition",
    year: "2024",
    icon: Trophy,
    color: "amber",
  },
  {
    title: "IEEE Publication",
    subtitle: "ESCI 2023 Conference Presenter",
    year: "2023",
    icon: FileText,
    color: "emerald",
  },
  {
    title: "Academic Scholarships",
    subtitle: "Mathex & MSCE Awards",
    year: "2021-24",
    icon: Award,
    color: "blue",
  },
];

const colorClasses = {
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/20",
    glow: "rgba(245, 158, 11, 0.18)",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "border-emerald-500/20",
    glow: "rgba(16, 185, 129, 0.18)",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/20",
    glow: "rgba(59, 130, 246, 0.18)",
  },
};

export function Awards() {
  return (
    <section id="awards" className="section-padding relative">
      <div className="absolute inset-0 bg-zinc-950/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp(24)}
          className="text-center mb-12"
        >
          <p className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-3">
            Recognition
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
            Awards & Publications
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {achievements.map((item) => {
              const Icon = item.icon;
              const colors = colorClasses[item.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp(22)}
                  whileHover={{
                    y: -6,
                    borderColor: colors.glow,
                    boxShadow: `0 18px 38px ${colors.glow}`,
                  }}
                  transition={springTransition}
                  className="group flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4"
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
                    <p className="text-zinc-500 text-xs truncate">{item.subtitle}</p>
                    <span className="text-zinc-600 text-xs">{item.year}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp(22)}
            whileHover={{
              y: -4,
              borderColor: "rgba(16, 185, 129, 0.2)",
            }}
            transition={springTransition}
            className="mt-8 bg-gradient-to-r from-emerald-500/5 via-zinc-900/50 to-emerald-500/5 border border-zinc-800/50 rounded-xl p-5"
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 flex-shrink-0"
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
                  A. Juvekar et al., &ldquo;Carbon Monoxide Concentration Monitoring
                  System,&rdquo; <span className="text-emerald-400">ESCI 2023</span>,{" "}
                  <a
                    href="https://doi.org/10.1109/ESCI56872.2023.10100144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-emerald-400 transition-colors underline underline-offset-2"
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
