import {
  Github,
  ExternalLink,
  Calendar,
  Code,
  BookOpen,
  Laptop,
} from "lucide-react";

type Project = {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
  type: "research" | "personal";
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "Anomaly Detection in Crowd Surveillance using Edge Computing",
      date: "2023 - 2024",
      description:
        "The aim is to create an optimized and efficient machine learning system to detect anomalies in real-time video surveillance feed by using Edge Computing and Neural Networks.",
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Matplotlib",
        "Jetson Nano",
      ],
      type: "research",
    },
    {
      title:
        "Carbon Monoxide Concentration Monitoring System for Automating Air Filters",
      date: "2022 - 2023",
      description:
        "Emerging Smart Computing and Informatics (ESCI), 2023 International Conference. The aim is to create an optimized and efficient machine learning system to detect anomalies in real time video surveillance feed by using Edge Computing and Neural Networks.",
      technologies: ["NodeJS", "NodeRed", "C++", "Arduino", "Zigbee"],
      link: "https://ieeexplore.ieee.org/document/10100144",
      type: "research",
    },
    {
      title: "Particle Vibration Analysis System",
      date: "2025",
      description:
        "Developed a computer vision system using ZED 2 stereo cameras and OpenCV to track particle movement on vibrating plate, while creating visualization tools for trajectory and velocity analysis. Designed a comprehensive 3D data pipeline, and applied statistical methods to correlate motion patterns with vibration frequencies for mechanical engineering research.",
      technologies: [
        "Computer Vision",
        "ZED 2 Stereo Cameras",
        "OpenCV",
        "3D Data Pipeline",
        "Statistical Analysis",
        "Python",
      ],
      type: "personal",
    },

    {
      title: "Ranking App",
      date: "2024",
      description:
        "A tournament bracket creator tool that helps users create and manage brackets. Users input items to bracket, and the tool tracks selections and timing - longer decision times indicate closer matchups, which affects scoring. The final results are scaled to a 100-point system, making it easy to compare different items.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "React",
        "Vercel",
        "Typescript",
      ],
      github: "https://github.com/AyushJ1001/ranking",
      link: "https://ranking.ayushjuvekar.com",
      type: "personal",
    },
    {
      title: "Yaycamp",
      date: "2024",
      description:
        "A platform for discovering and sharing camping experiences. Users can browse camping locations, leave reviews, and connect with fellow outdoor enthusiasts.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "React",
        "PostgreSQL",
        "Clerk",
        "React Leaflet",
      ],
      github: "https://github.com/AyushJ1001/yaycamp",
      link: "https://yaycamp.ayushjuvekar.com",
      type: "personal",
    },

    {
      title: "BookApp",
      date: "2022",
      description:
        "A full stack typescript app for tagging books into a personal library for reading reference. Involves use of ExpressJS, MongoDB and React for UI.",
      technologies: ["React", "Typescript", "Axios", "MySQL"],
      github: "https://github.com/AyushJ1001/bookApp/tree/master",
      type: "personal",
    },
    {
      title: "YelpCamp",
      date: "2021 - 2022",
      description:
        "A full stack web app for organizing camping activities for yourself and your friends. It uses ExpressJS framework along with numerous libraries for geolocation data, authentication, database management and MongoDB as database.",
      technologies: [
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "JWT",
        "Mapbox",
        "Bootstrap",
      ],
      github: "https://github.com/AyushJ1001/yelpcamp",
      type: "personal",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 rounded-xl overflow-hidden border ${
                project.type === "research"
                  ? "border-purple-500/50 shadow-lg group hover:border-purple-400/70"
                  : "border-gray-700/50 shadow-lg group hover:border-blue-500/30"
              } transition-all duration-300 hover:shadow-blue-500/10 hover:-translate-y-1`}
            >
              <div
                className={`${
                  project.type === "research" ? "bg-purple-900/20" : ""
                } p-6`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-xl font-semibold ${
                      project.type === "research"
                        ? "text-purple-300"
                        : "text-blue-400"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-2" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <div
                  className={`border-l-2 ${
                    project.type === "research"
                      ? "border-purple-500/50"
                      : "border-blue-500/30"
                  } pl-4 py-1 mb-4`}
                >
                  <div className="flex items-center text-gray-300 text-sm space-x-2">
                    {project.type === "research" ? (
                      <BookOpen size={14} className="text-purple-400" />
                    ) : (
                      <Laptop size={14} className="text-blue-400" />
                    )}
                    <span>
                      {project.type === "research"
                        ? "Research Project"
                        : "Personal Project"}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${
                        project.type === "research"
                          ? "bg-purple-900/30 text-purple-200 border-purple-700/50"
                          : "bg-gray-700/70 text-blue-300 border-gray-600/50"
                      } text-xs px-2 py-1 rounded-md border`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-700/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${
                        project.type === "research"
                          ? "hover:text-purple-400"
                          : "hover:text-blue-400"
                      } transition-colors flex items-center`}
                      aria-label="GitHub repository"
                    >
                      <Github size={18} className="mr-1" />
                      <span className="text-sm">Repository</span>
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${
                        project.type === "research"
                          ? "hover:text-purple-400"
                          : "hover:text-blue-400"
                      } transition-colors flex items-center`}
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span className="text-sm">View Project</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
