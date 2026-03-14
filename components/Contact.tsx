"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, springTransition, staggerContainer, viewport } from "@/lib/motion";

const contactCards = [
  {
    label: "Email",
    value: "aajuveka@mtu.edu",
    href: "mailto:aajuveka@mtu.edu",
    icon: Mail,
    accent: "amber",
  },
  {
    label: "Phone",
    value: "+1 (906) 299-4314",
    href: "tel:+19062994314",
    icon: Phone,
    accent: "emerald",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayushjuvekar/",
    icon: Linkedin,
    hoverClass: "hover:border-blue-500/30",
    iconHoverClass: "group-hover:text-blue-500",
  },
  {
    label: "GitHub",
    href: "https://github.com/AyushJ1001",
    icon: Github,
    hoverClass: "hover:border-zinc-500/30",
    iconHoverClass: "group-hover:text-zinc-100",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 geo-dots opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <motion.div
        className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp(24)}
          className="text-center mb-16"
        >
          <p className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations
            about technology.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const accentClasses =
                card.accent === "amber"
                  ? {
                      box: "bg-amber-500/10 group-hover:bg-amber-500/20",
                      icon: "text-amber-500",
                      arrow: "group-hover:text-amber-500",
                      border: "rgba(245, 158, 11, 0.26)",
                    }
                  : {
                      box: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
                      icon: "text-emerald-500",
                      arrow: "group-hover:text-emerald-500",
                      border: "rgba(16, 185, 129, 0.26)",
                    };

              return (
                <motion.a
                  key={card.label}
                  variants={fadeUp(22)}
                  href={card.href}
                  whileHover={{
                    y: -7,
                    borderColor: accentClasses.border,
                    boxShadow: "0 18px 42px rgba(0, 0, 0, 0.22)",
                  }}
                  whileTap={{ scale: 0.99 }}
                  transition={springTransition}
                  className="group flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6"
                >
                  <motion.div
                    className={`p-4 rounded-xl transition-colors ${accentClasses.box}`}
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={springTransition}
                  >
                    <Icon size={24} className={accentClasses.icon} />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-zinc-400 text-sm mb-1">{card.label}</p>
                    <p className="text-zinc-100 font-medium">{card.value}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className={`text-zinc-600 transition-colors ${accentClasses.arrow}`}
                  />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp(20)}
            className="flex flex-col items-center"
          >
            <p className="text-zinc-500 text-sm mb-6">Find me on</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`group p-4 bg-zinc-900/50 border border-zinc-800/50 rounded-xl transition-all duration-300 ${link.hoverClass}`}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      boxShadow: "0 14px 34px rgba(0, 0, 0, 0.22)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={springTransition}
                  >
                    <Icon
                      size={24}
                      className={`text-zinc-400 transition-colors ${link.iconHoverClass}`}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp(18)}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-zinc-500 text-sm">
              <MapPin size={16} />
              <span>Houghton, Michigan, USA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
