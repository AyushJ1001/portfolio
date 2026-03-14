"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { fadeUp, springTransition, staggerContainer } from "@/lib/motion";

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ y: -1 }} transition={springTransition}>
            <Link
            href="/"
            className="font-display text-lg font-bold text-zinc-100 hover:text-amber-400 transition-colors"
            >
              AJ<span className="text-amber-500">.</span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <motion.a
              href="/ayush_juvekar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-2 text-zinc-400 hover:text-amber-400 transition-colors"
              whileHover={{ y: -1, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={springTransition}
            >
              <FileText size={18} />
            </motion.a>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.92 }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-amber-400"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
                whileHover={{ y: -1 }}
                transition={springTransition}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-amber-500/10 border border-amber-500/20"
                    transition={springTransition}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="active-nav-dot"
                    className="absolute bottom-0 left-1/2 z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-500"
                    transition={springTransition}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="/ayush_juvekar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="ml-4 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-glow-sm flex items-center gap-2"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={springTransition}
            >
              <FileText size={16} />
              Resume
            </motion.a>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed inset-x-0 top-full"
            >
              <motion.div
                variants={staggerContainer(0.05, 0.02)}
                initial="hidden"
                animate="show"
                className="bg-zinc-950/95 backdrop-blur-xl mx-4 mt-2 p-2 rounded-2xl border border-zinc-800/50 shadow-2xl"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    variants={fadeUp(16)}
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? "text-amber-400 bg-amber-500/10"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
