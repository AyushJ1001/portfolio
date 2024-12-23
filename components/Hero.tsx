import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <div className="relative inline-block">
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/profile.jpg"
              alt="Ayush Juvekar"
              fill
              priority
              sizes="300px"
              className="rounded-full mx-auto border-4 border-blue-400 object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Ayush Juvekar
        </h1>
        <h2 className="text-2xl text-blue-400 mb-8">
          Computer Science Graduate Student
        </h2>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:aajuveka@mtu.edu"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors transform hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/ayushjuvekar/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-colors transform hover:scale-105"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
