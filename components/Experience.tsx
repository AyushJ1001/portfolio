"use client";

import { Briefcase, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, springTransition, staggerContainer, viewport } from "@/lib/motion";

const experiences = [
  {
    role: "Teaching Assistant",
    department: "Physics Department",
    company: "Michigan Technological University",
    location: "Houghton, MI",
    period: "Sep 2024 - Present",
    description:
      "Facilitate learning for 60+ students in PH 2100/2200. Developed Python automation reducing admin work 20 hours/semester. Conduct tutorials improving average exam scores 15%.",
    skills: ["Teaching", "Python", "Course Development", "Mentoring"],
    current: true,
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

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
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
            Career Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
            Experience
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Professional experience in teaching and research at academic institutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <motion.div
              initial={{ scaleY: 0, opacity: 0.2 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-amber-500/50 via-zinc-700 to-transparent md:-translate-x-1/2"
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
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div
                    className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full border-2 border-amber-500 bg-zinc-950 z-10"
                    initial={{ scale: 0.75, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, delay: index * 0.12 }}
                  >
                    {experience.current && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-amber-500/50"
                        animate={{ scale: [1, 1.75, 1], opacity: [0.45, 0, 0.45] }}
                        transition={{ duration: 2.3, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </motion.div>

                  <div
                    className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                        borderColor: "rgba(245, 158, 11, 0.22)",
                        boxShadow: "0 18px 40px rgba(0, 0, 0, 0.22)",
                      }}
                      transition={springTransition}
                      className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display text-xl font-semibold text-zinc-100">
                              {experience.role}
                            </h3>
                            {experience.current && (
                              <motion.span
                                className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2.4, repeat: Infinity }}
                              >
                                Current
                              </motion.span>
                            )}
                          </div>
                          <p className="text-amber-400 font-medium">{experience.department}</p>
                        </div>
                        <span className="text-zinc-500 text-sm font-medium">
                          {experience.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={14} />
                          {experience.company}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} />
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
                            className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                            whileHover={{
                              y: -2,
                              borderColor: "rgba(245, 158, 11, 0.28)",
                              color: "#fde68a",
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
