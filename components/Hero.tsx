"use client";

import { useId } from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  const gradientId = useId();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20 sm:pt-0 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 geo-grid opacity-50" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-zinc-400">Open to opportunities</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-fade-in delay-100">
              <span className="text-zinc-100">Ayush</span>{" "}
              <span className="gradient-text">Juvekar</span>
            </h1>

            {/* Role */}
            <p className="text-xl sm:text-2xl text-zinc-400 mb-6 animate-fade-in delay-200 font-light">
              Software Engineer & ML Researcher
            </p>

            {/* Description */}
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in delay-300">
              Graduate student at Michigan Tech building intelligent systems
              at the intersection of{" "}
              <span className="text-zinc-300">machine learning</span>,{" "}
              <span className="text-zinc-300">computer vision</span>, and{" "}
              <span className="text-zinc-300">full-stack development</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 animate-fade-in delay-400">
              <a
                href="#projects"
                className="group px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-glow"
              >
                View Projects
              </a>
              <a
                href="/ayush_juvekar_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group px-6 py-3 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 font-medium rounded-xl border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in delay-500">
              <a
                href="mailto:aajuveka@mtu.edu"
                className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayushjuvekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/AyushJ1001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-zinc-800/50" />
              <div className="absolute -inset-8 rounded-full border border-zinc-800/30" />

              {/* Accent arc */}
              <svg
                className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] animate-spin-slow"
                style={{ animationDuration: "20s" }}
                viewBox="0 0 100 100"
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
              </svg>

              {/* Photo container */}
              <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-2xl" />
                <Image
                  src="https://utfs.io/f/6bBGFcWk1gIAPAamxrSv9Tch7i2WK6ex4NUmSVzlIufbLZQA"
                  alt="Ayush Juvekar"
                  fill
                  priority
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 320px"
                  className="rounded-full object-cover border-2 border-zinc-800 p-1 bg-zinc-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#skills"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
