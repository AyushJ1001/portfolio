"use client";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUp,
  springTransition,
  staggerContainer,
  viewport,
} from "@/lib/motion";

const contactCards = [
  {
    label: "Email",
    value: "aajuveka@mtu.edu",
    href: "mailto:aajuveka@mtu.edu",
    icon: Mail,
    accent: "amber" as const,
  },
  {
    label: "Phone",
    value: "+1 (906) 299-4314",
    href: "tel:+19062994314",
    icon: Phone,
    accent: "emerald" as const,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayushjuvekar/",
    icon: Linkedin,
    hoverBorder: "rgba(59, 130, 246, 0.25)",
    hoverColor: "#3b82f6",
  },
  {
    label: "GitHub",
    href: "https://github.com/AyushJ1001",
    icon: Github,
    hoverBorder: "rgba(255, 255, 255, 0.2)",
    hoverColor: "#f5f5f5",
  },
];

const accentStyles = {
  amber: {
    box: "bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/15",
    icon: "text-[var(--accent)]",
    border: "rgba(232, 168, 73, 0.22)",
  },
  emerald: {
    box: "bg-emerald-500/10 group-hover:bg-emerald-500/15",
    icon: "text-emerald-400",
    border: "rgba(16, 185, 129, 0.22)",
  },
};

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 geo-dots opacity-15" />
      <div className="absolute top-0 left-0 right-0 accent-line" />

      {/* Background glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,168,73,0.06) 0%, transparent 70%)" }}
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        {/* Section header — dramatic CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp(24)}
          className="text-center mb-16"
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-100 tracking-tight mb-4">
            Let&apos;s{" "}
            <span className="font-display italic text-[var(--accent)]">
              Connect
            </span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Open to opportunities, collaborations, and interesting conversations
            about technology.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid sm:grid-cols-2 gap-5 mb-12"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const styles = accentStyles[card.accent];

              return (
                <motion.a
                  key={card.label}
                  variants={fadeUp(22)}
                  href={card.href}
                  whileHover={{
                    y: -7,
                    borderColor: styles.border,
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.99 }}
                  transition={springTransition}
                  className="group flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 transition-all duration-500"
                >
                  <motion.div
                    className={`p-4 rounded-xl transition-colors duration-500 ${styles.box}`}
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={springTransition}
                  >
                    <Icon size={24} className={styles.icon} />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-zinc-400 text-sm mb-1">{card.label}</p>
                    <p className="text-zinc-100 font-medium">{card.value}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-zinc-600 group-hover:text-[var(--accent)] transition-colors duration-500"
                  />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp(20)}
            className="flex flex-col items-center"
          >
            <p className="text-zinc-500 text-sm mb-6 tracking-wide">
              Find me on
            </p>
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
                    className="group p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl transition-all duration-500"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      borderColor: link.hoverBorder,
                      boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={springTransition}
                  >
                    <Icon
                      size={24}
                      className="text-zinc-400 transition-colors duration-500"
                      style={
                        {
                          "--hover-color": link.hoverColor,
                        } as React.CSSProperties
                      }
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Location */}
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
