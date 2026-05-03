"use client";

import { Briefcase, MapPin } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  springTransition,
  staggerContainer,
  viewport,
} from "@/lib/motion";
import { useAudience } from "@/components/AudienceProvider";

const baseExperiences = [
  {
    role: "Teaching Assistant",
    department: "Physics Department",
    company: "Michigan Technological University",
    location: "Houghton, MI",
    period: "Sep 2024 - Apr 24, 2026",
    description:
      "Facilitated learning for 60+ students in PH 2100/2200. Developed Python automation reducing admin work 20 hours/semester. Conducted tutorials improving average exam scores 15%.",
    skills: ["Teaching", "Python", "Course Development", "Mentoring"],
    current: false,
  },
  {
    role: "Research Assistant",
    department: "CVBDSL Lab",
    company: "Pune Institute of Computer Technology",
    location: "Pune, India",
    period: "2023",
    description:
      "Worked on Secure Data Analytics using Homomorphic Encryption (CKKS) for healthcare data, achieving 98% accuracy with HIPAA compliance.",
    skills: ["Python", "Pandas", "NumPy", "CKKS Encryption", "Docker"],
    current: false,
  },
];

const indiaOnlyExperiences = [
  {
    role: "Freelance Sole Developer",
    department: "The Mind Point",
    company: "Mental Health Education Platform",
    location: "Pune, India",
    period: "Aug 2025 - Present",
    description:
      "Own development of a course commerce platform with Next.js 15, React 19, Clerk, Razorpay payments, dynamic pricing, BOGO campaigns, enrollment confirmations, Google Sheets admin tracking, and PostHog analytics.",
    skills: ["Next.js", "React", "Clerk", "Razorpay", "PostHog"],
    current: false,
  },
];

export function Experience() {
  const audience = useAudience();
  const experiences =
    audience === "india"
      ? [...indiaOnlyExperiences, ...baseExperiences]
      : baseExperiences;

  return (
    <section id="experience" className="section-padding relative">
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
          <span className="section-label">Career Journey</span>
          <h2 className="section-heading mb-4">Experience</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Professional experience across software development, teaching, and
            research.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0.2 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[var(--accent)]/40 via-zinc-700/50 to-transparent md:-translate-x-1/2"
            />

            <motion.div
              variants={staggerContainer(0.16)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="space-y-12"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.role}
                  variants={fadeUp(28)}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] z-10"
                    initial={{ scale: 0.75, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.12,
                    }}
                  >
                    {experience.current && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-[var(--accent)]/40"
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.4, 0, 0.4],
                        }}
                        transition={{
                          duration: 2.3,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Card */}
                  <div
                    className={`flex-1 ml-8 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                        borderColor: "rgba(232, 168, 73, 0.18)",
                        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
                      }}
                      transition={springTransition}
                      className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 transition-all duration-500"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display text-xl font-semibold text-zinc-100">
                              {experience.role}
                            </h3>
                            {experience.current && (
                              <motion.span
                                className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{
                                  duration: 2.4,
                                  repeat: Infinity,
                                }}
                              >
                                Current
                              </motion.span>
                            )}
                          </div>
                          <p className="text-[var(--accent)] font-medium">
                            {experience.department}
                          </p>
                        </div>
                        <span className="text-zinc-500 text-sm font-medium">
                          {experience.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={14} className="text-zinc-500" />
                          {experience.company}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-zinc-500" />
                          {experience.location}
                        </div>
                      </div>

                      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                            whileHover={{
                              y: -2,
                              borderColor: "rgba(232, 168, 73, 0.25)",
                              color: "#f0c060",
                            }}
                            transition={springTransition}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
