export function Footer() {
  return (
    <footer className="relative py-8 border-t border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-display text-lg font-bold text-zinc-100">
            AJ<span className="text-amber-500">.</span>
          </div>

          {/* Copyright */}
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Ayush Juvekar. Built with Next.js
          </p>

          {/* Back to top */}
          <a
            href="#hero"
            className="text-zinc-500 text-sm hover:text-amber-400 transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
