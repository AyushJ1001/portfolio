import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      </div>

      <div className="text-center z-10 max-w-4xl">
        <div className="relative inline-block mb-8">
          <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin-slow blur-md opacity-70"></div>
            <Image
              src="https://utfs.io/f/6bBGFcWk1gIAPAamxrSv9Tch7i2WK6ex4NUmSVzlIufbLZQA"
              alt="Ayush Juvekar"
              fill
              priority
              sizes="(max-width: 768px) 200px, 250px"
              className="rounded-full border-2 border-white/20 object-cover p-1 bg-gray-900 relative z-10"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight">
          Ayush Juvekar
        </h1>

        <div className="relative">
          <h2 className="text-xl md:text-2xl text-gray-200 mb-6 font-light">
            <span className="text-blue-400 font-normal">Graduate Student</span>{" "}
            in Computer Science
            <span className="block mt-1 text-lg md:text-xl text-gray-300">
              Specializing in Machine Learning, Computer Vision & Full-Stack
              Development
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href="#skills"
            className="bg-gray-800/80 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-lg border border-gray-700/50 transition-all hover:scale-105 text-sm md:text-base"
          >
            Technical Skills
          </a>
          <a
            href="#projects"
            className="bg-gray-800/80 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-lg border border-gray-700/50 transition-all hover:scale-105 text-sm md:text-base"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="bg-gray-800/80 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-lg border border-gray-700/50 transition-all hover:scale-105 text-sm md:text-base"
          >
            Experience
          </a>
          <a
            href="/Ayush Juvekar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600/80 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all hover:scale-105 text-sm md:text-base"
            download
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center space-x-5 mb-10">
          <a
            href="mailto:aajuveka@mtu.edu"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushjuvekar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/AyushJ1001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-400">
        <ArrowDown size={28} />
      </div>
    </section>
  );
}
