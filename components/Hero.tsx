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
import { springTransition } from "@/lib/motion";

const socialLinks = [
  { href: "mailto:aajuveka@mtu.edu", label: "Email", icon: Mail },
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

function AnimatedText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span>{text}</span>;
  }

  return (
    <span aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 55, rotateX: -50 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.75,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const gradientId = useId();
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ambientY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : 100]
  );
  const photoYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -50]
  );
  const photoY = useSpring(photoYRaw, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });
  const photoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, shouldReduceMotion ? 1 : 1.05]
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-4 pt-24 sm:pt-0 overflow-hidden"
    >
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 geo-grid opacity-40"
        style={{ y: ambientY }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,168,73,0.06) 0%, transparent 70%)" }}
        animate={
          shouldReduceMotion
            ? {}
            : { opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(224,122,58,0.04) 0%, transparent 70%)" }}
        animate={
          shouldReduceMotion
            ? {}
            : { opacity: [0.3, 0.5, 0.3], x: [0, 20, 0] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-10"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-500"
                animate={
                  shouldReduceMotion
                    ? {}
                    : { opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm text-zinc-400 font-light tracking-wide">
                Open to opportunities
              </span>
            </motion.div>

            {/* Name — massive serif typography */}
            <div className="mb-6 overflow-hidden perspective-[1000px]">
              <h1 className="font-display font-bold tracking-tight leading-[0.92]">
                <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] text-zinc-100">
                  <AnimatedText text="Ayush" delay={0.3} />
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] text-[var(--accent)]">
                  <AnimatedText text="Juvekar" delay={0.55} />
                  <motion.span
                    initial={
                      shouldReduceMotion ? {} : { opacity: 0, scale: 0 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block text-[var(--accent)]"
                  >
                    .
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Expanding line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px w-28 lg:w-44 bg-gradient-to-r from-[var(--accent)] to-transparent origin-left mb-8 mx-auto lg:mx-0"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl sm:text-2xl text-zinc-400 mb-6 font-light tracking-wide"
            >
              Software Engineer{" "}
              <span className="text-zinc-600 font-display italic">&</span> ML
              Researcher
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Graduate student at Michigan Tech building intelligent systems at
              the intersection of{" "}
              <span className="text-zinc-300">machine learning</span>,{" "}
              <span className="text-zinc-300">computer vision</span>, and{" "}
              <span className="text-zinc-300">full-stack development</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                className="group px-7 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-zinc-900 font-semibold rounded-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(232,168,73,0.2)]"
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
                className="group px-7 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 font-medium rounded-xl border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 flex items-center gap-2.5"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransition}
              >
                <FileText size={18} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map(({ href, label, icon: Icon, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-zinc-400 hover:text-[var(--accent)] hover:border-[var(--accent)]/25 transition-all duration-500"
                  aria-label={label}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    boxShadow: "0 12px 30px rgba(232, 168, 73, 0.1)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={springTransition}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1 lg:order-2 flex justify-center"
            style={{ y: photoY, scale: photoScale }}
          >
            <motion.div
              className="relative"
              whileHover={
                shouldReduceMotion ? undefined : { scale: 1.02 }
              }
              transition={springTransition}
            >
              {/* Orbital rings */}
              <motion.div
                className="absolute -inset-6 rounded-full border border-white/[0.04]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { scale: [1, 1.03, 1] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full border border-white/[0.02]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { scale: [1, 1.05, 1] }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating gradient ring */}
              <motion.svg
                className="absolute -inset-6 h-[calc(100%+48px)] w-[calc(100%+48px)]"
                viewBox="0 0 100 100"
                animate={
                  shouldReduceMotion ? undefined : { rotate: 360 }
                }
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="0.4"
                  strokeDasharray="25 275"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id={gradientId}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#e8a849" />
                    <stop offset="100%" stopColor="#e07a3a" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Photo */}
              <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px]">
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(232,168,73,0.15) 0%, rgba(224,122,58,0.1) 50%, transparent 70%)" }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.55, 0.3],
                        }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="https://utfs.io/f/6bBGFcWk1gIAPAamxrSv9Tch7i2WK6ex4NUmSVzlIufbLZQA"
                  alt="Ayush Juvekar"
                  fill
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 320px"
                  className="rounded-full object-cover border border-white/[0.08] p-1 bg-[var(--bg-secondary)]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.6,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.a
          href="#skills"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-[var(--accent)] transition-colors duration-500"
          animate={
            shouldReduceMotion ? undefined : { y: [0, 6, 0] }
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">
            Scroll
          </span>
          <ArrowDown size={14} />
        </motion.a>
      </motion.div>
    </section>
  );
}
