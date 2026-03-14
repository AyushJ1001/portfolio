"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  fadeUp,
  revealEase,
  springTransition,
  staggerContainer,
} from "@/lib/motion";

const socialLinks = [
  {
    href: "mailto:aajuveka@mtu.edu",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/ayushjuvekar/",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/AyushJ1001",
    label: "GitHub",
    icon: Github,
    external: true,
  },
];

export function Hero() {
  const gradientId = useId();
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ambientY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 90]);
  const photoYRaw = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -42]);
  const photoY = useSpring(photoYRaw, {
    stiffness: 140,
    damping: 22,
    mass: 0.4,
  });
  const photoRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -4]
  );
  const photoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, shouldReduceMotion ? 1 : 1.04]
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-4 pt-20 sm:pt-0 overflow-hidden"
    >
      <motion.div className="absolute inset-0 geo-grid opacity-50" style={{ y: ambientY }} />

      <motion.div
        className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none"
        animate={
          shouldReduceMotion
            ? { opacity: 0.6 }
            : {
                opacity: [0.45, 0.7, 0.45],
                scale: [1, 1.06, 1],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none"
        animate={
          shouldReduceMotion
            ? { opacity: 0.5 }
            : {
                opacity: [0.35, 0.55, 0.35],
                x: [0, 16, 0],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp(18)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-500"
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: [0.55, 1, 0.55], scale: [1, 1.25, 1] }
                }
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-sm text-zinc-400">Open to opportunities</span>
            </motion.div>

            <motion.h1
              variants={fadeUp(24)}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
            >
              <span className="text-zinc-100">Ayush</span>{" "}
              <motion.span
                className="gradient-text inline-block"
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { y: [0, -3, 0], filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"] }
                }
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Juvekar
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp(20)}
              className="text-xl sm:text-2xl text-zinc-400 mb-6 font-light"
            >
              Software Engineer & ML Researcher
            </motion.p>

            <motion.p
              variants={fadeUp(20)}
              className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Graduate student at Michigan Tech building intelligent systems at the
              intersection of <span className="text-zinc-300">machine learning</span>,{" "}
              <span className="text-zinc-300">computer vision</span>, and{" "}
              <span className="text-zinc-300">full-stack development</span>.
            </motion.p>

            <motion.div
              variants={fadeUp(18)}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                className="group px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-glow"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/ayush_juvekar_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group px-6 py-3 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 font-medium rounded-xl border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 flex items-center gap-2"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
              >
                <FileText size={18} />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp(16)}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map(({ href, label, icon: Icon, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
                  aria-label={label}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                    boxShadow: "0 10px 30px rgba(245, 158, 11, 0.12)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={springTransition}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36, y: 18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: revealEase }}
            className="order-1 lg:order-2 flex justify-center"
            style={{
              y: photoY,
              rotate: photoRotate,
              scale: photoScale,
            }}
          >
            <motion.div
              className="relative"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              transition={springTransition}
            >
              <motion.div
                className="absolute -inset-4 rounded-full border border-zinc-800/50"
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-zinc-800/30"
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.04, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.svg
                className="absolute -inset-6 h-[calc(100%+48px)] w-[calc(100%+48px)]"
                viewBox="0 0 100 100"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="0.5"
                  strokeDasharray="30 270"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </motion.svg>

              <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px]">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-2xl"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.08, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }
                  }
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="relative h-full w-full rounded-full"
                  whileHover={shouldReduceMotion ? undefined : { rotate: 1.5 }}
                  transition={springTransition}
                >
                  <Image
                    src="https://utfs.io/f/6bBGFcWk1gIAPAamxrSv9Tch7i2WK6ex4NUmSVzlIufbLZQA"
                    alt="Ayush Juvekar"
                    fill
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 320px"
                    className="rounded-full object-cover border-2 border-zinc-800 p-1 bg-zinc-900"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: revealEase }}
      >
        <motion.a
          href="#skills"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors"
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
