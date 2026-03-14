import type { Transition, Variants } from "motion/react";

export const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewport = {
  once: true,
  amount: 0.18,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 20,
};

export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeUp = (distance = 24): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: revealEase,
    },
  },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: revealEase,
    },
  },
});

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: revealEase,
    },
  },
};
