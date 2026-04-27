"use client";

import { motion } from "motion/react";
import { springTransition } from "@/lib/motion";

export function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/[0.04]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            whileHover={{ y: -1 }}
            transition={springTransition}
            className="font-display italic text-xl font-bold text-zinc-100"
          >
            AJ<span className="text-[var(--accent)] not-italic">.</span>
          </motion.div>

          {/* Copyright */}
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Ayush Juvekar
          </p>

          {/* Back to top */}
          <motion.a
            href="#hero"
            className="text-zinc-500 text-sm hover:text-[var(--accent)] transition-colors duration-500"
            whileHover={{ y: -2 }}
            transition={springTransition}
          >
            Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
