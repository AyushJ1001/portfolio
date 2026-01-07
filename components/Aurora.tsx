"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AuroraProps = {
  className?: string;
};

export function Aurora({ className }: AuroraProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <motion.svg
        initial={{ opacity: 0.35 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-40 left-0 right-0 mx-auto h-[520px] w-[1200px]"
        viewBox="0 0 1200 520"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.25" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
        <g filter="url(#blur)">
          <motion.path
            d="M0,220 C200,120 400,320 600,220 C800,120 1000,320 1200,220 L1200,520 L0,520 Z"
            fill="url(#g1)"
            animate={{
              d: [
                "M0,220 C200,120 400,320 600,220 C800,120 1000,320 1200,220 L1200,520 L0,520 Z",
                "M0,240 C200,180 400,280 600,240 C800,220 1000,260 1200,240 L1200,520 L0,520 Z",
                "M0,200 C200,160 400,300 600,200 C800,140 1000,300 1200,200 L1200,520 L0,520 Z",
              ],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
        </g>
      </motion.svg>
    </div>
  );
}
