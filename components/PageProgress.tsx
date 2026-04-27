"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function PageProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 260 : 180,
    damping: shouldReduceMotion ? 36 : 28,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-orange-400 shadow-[0_0_20px_rgba(232,168,73,0.4)]"
      style={{ scaleX }}
    />
  );
}
