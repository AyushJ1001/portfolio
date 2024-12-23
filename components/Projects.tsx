import { Github } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  github?: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "Anomaly Detection in Crowd Surveillance using Edge Computing",
      date: "2023 - 2024",
      description:
        "The aim is to create an optimised and efficient machine learning system to detect anomalies in real time video surveillance feed by using Edge Computing and Neural Networks.",
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Matplotlib",
        "Jetson Nano",
      ],
    },
    {
      title:
        "Carbon Monoxide Concentration Monitoring System for Automating Air Filters",
      date: "2022 - 2023",
      description:
        "Emerging Smart Computing and Informatics (ESCI), 2023 International Conference. The aim is to create an optimised and efficient machine learning system to detect anomalies in real time video surveillance feed by using Edge Computing and Neural Networks.",
      technologies: ["NodeJS", "NodeRed", "C++", "Arduino", "Zigbee"],
    },
    {
      title: "BookApp",
      date: "2022",
      description:
        "A full stack typescript app for tagging books into a personal library for reading reference. Involves use of ExpressJS, MongoDB and React for UI.",
      technologies: ["React", "Typescript", "Axios", "MySQL"],
      github: "https://github.com/AyushJ1001/bookApp/tree/master",
    },
    {
      title: "YelpCamp",
      date: "2021 - 2022",
      description:
        "A full stack web app for organizing camping activities for yourself and your friends. It uses ExpressJS framework along with numerous libraries for geolocation data, authentication, database management and MongoDB as database.",
      technologies: [
        "NodeJS",
        "ExpressJS",
        "EJS",
        "Bootstrap",
        "Google Maps API",
        "MongoDB",
        "Heroku",
      ],
    },
    {
      title: "YayCamp",
      date: "2024",
      description:
        "Second iteration of YelpCamp, but with modern tools, including NextJS, TypeScript, TailwindCSS, Clerk (Authentication), T3 Stack",
      technologies: [
        "Typescript",
        "Tailwind",
        "NextJS",
        "Clerk",
        "Prisma",
        "PostgreSQL",
        "Vercel",
        "NeonDB",
      ],
      github: "https://github.com/AyushJ1001/yaycamp",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.date}</p>
              <p>{project.description}</p>
              <p className="my-4 break-words whitespace-normal">
                <b>Technologies: </b>
                <span>{project.technologies.join(", ")}</span>
              </p>
              {project.github && (
                <Link href={project.github}>
                  <Github />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
