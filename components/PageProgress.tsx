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
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 shadow-[0_0_18px_rgba(245,158,11,0.45)]"
      style={{ scaleX }}
    />
  );
}
