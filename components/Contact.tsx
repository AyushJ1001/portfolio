import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 geo-dots opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations
            about technology.
          </p>
        </div>

        {/* Contact cards */}
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:aajuveka@mtu.edu"
              className="group flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                <Mail size={24} className="text-amber-500" />
              </div>
              <div className="flex-1">
                <p className="text-zinc-400 text-sm mb-1">Email</p>
                <p className="text-zinc-100 font-medium">aajuveka@mtu.edu</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-zinc-600 group-hover:text-amber-500 transition-colors"
              />
            </a>

            {/* Phone */}
            <a
              href="tel:+19062994314"
              className="group flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                <Phone size={24} className="text-emerald-500" />
              </div>
              <div className="flex-1">
                <p className="text-zinc-400 text-sm mb-1">Phone</p>
                <p className="text-zinc-100 font-medium">+1 (906) 299-4314</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-zinc-600 group-hover:text-emerald-500 transition-colors"
              />
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center">
            <p className="text-zinc-500 text-sm mb-6">Find me on</p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ayushjuvekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-zinc-900/50 border border-zinc-800/50 rounded-xl hover:border-blue-500/30 transition-all duration-300"
              >
                <Linkedin
                  size={24}
                  className="text-zinc-400 group-hover:text-blue-500 transition-colors"
                />
              </a>
              <a
                href="https://github.com/AyushJ1001"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-zinc-900/50 border border-zinc-800/50 rounded-xl hover:border-zinc-500/30 transition-all duration-300"
              >
                <Github
                  size={24}
                  className="text-zinc-400 group-hover:text-zinc-100 transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-zinc-500 text-sm">
              <MapPin size={16} />
              <span>Houghton, Michigan, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
