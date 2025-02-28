export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-800/50 rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Education & Background
              </h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                I&apos;m a Computer Science graduate student at Michigan
                Technological University, expected to graduate in Spring 2026.
                With a strong foundation in Computer Engineering from Pune
                Institute of Computer Technology, I&apos;m passionate about
                exploring cutting-edge technologies.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    <strong>Michigan Technological University</strong> - M.S.
                    Computer Science (2024-2026)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    <strong>Pune Institute of Computer Technology</strong> -
                    B.E. Computer Engineering (2019-2023)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Professional Interests
              </h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                My research and professional interests span several cutting-edge
                domains in computer science. I&apos;m particularly focused on:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    <strong>Machine Learning & Computer Vision</strong> -
                    Developing intelligent systems that can interpret visual
                    data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    <strong>Full-Stack Development</strong> - Building
                    comprehensive web applications with modern frameworks
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    <strong>Edge Computing</strong> - Optimizing systems for
                    real-time processing at the network edge
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>
                    <strong>IoT Solutions</strong> - Creating interconnected
                    device networks for smart applications
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-gray-800/50 rounded-xl p-8 shadow-lg backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              My Approach
            </h3>
            <p className="text-gray-200 leading-relaxed">
              I combine theoretical knowledge with practical implementation to
              solve complex problems. My approach involves continuous learning,
              collaborative development, and a focus on creating solutions that
              are not only technically sound but also user-centered. I&apos;m
              dedicated to writing clean, efficient code and deploying robust
              systems that can scale with growing demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
