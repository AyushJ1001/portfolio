"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

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
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Ayush Juvekar
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a
              href="/Ayush Juvekar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-sm text-gray-300 hover:text-blue-400 flex items-center"
              download
            >
              <Download size={16} className="mr-1" />
              <span>Resume</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-gray-800/50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeSection === link.id
                    ? "text-blue-400 font-medium"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Ayush Juvekar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center text-sm"
              download
            >
              <Download size={16} className="mr-1" />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-x-0 transition-all duration-300 transform ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-lg mt-4 p-4 rounded-lg shadow-xl border border-gray-800/50">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={`px-4 py-3 rounded-md transition-colors ${
                    activeSection === link.id
                      ? "text-blue-400 bg-blue-500/10 font-medium"
                      : "text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
