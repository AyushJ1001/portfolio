"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-lg font-bold text-zinc-100 hover:text-amber-400 transition-colors"
          >
            AJ<span className="text-amber-500">.</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="/ayush_juvekar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-2 text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <FileText size={18} />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-amber-400"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
                )}
              </a>
            ))}
            <a
              href="/ayush_juvekar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="ml-4 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-glow-sm flex items-center gap-2"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-full transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-zinc-950/95 backdrop-blur-xl mx-4 mt-2 p-2 rounded-2xl border border-zinc-800/50 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
