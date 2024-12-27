"use client";
import { useState } from "react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "Go", "Rust", "C#"],
    },
    {
      title: "Libraries and Frameworks",
      skills: [
        "React",
        "NextJS",
        "Node",
        "TailwindCSS",
        "Numpy",
        "Matplotlib",
        "Pandas",
        "Scikit Learn",
        "Tensorflow",
      ],
    },
    {
      title: "Domains",
      skills: [
        "Frontend",
        "Backend",
        "Machine Learning",
        "IoT",
        "Computer Vision",
        "Data Science",
      ],
    },
    {
      title: "Technologies",
      skills: ["Docker", "Git", "Bash", "Linux", "VS Code", "Vim"],
    },
    {
      title: "Additional Proficiencies",
      skills: [
        "MS Word",
        "MS Project",
        "MS PowerPoint",
        "MS Excel",
        "Latex Overleaf",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              className={`px-3 py-1 text-sm md:px-4 md:py-2 md:text-base rounded-full transition-colors ${
                activeCategory === category.title
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-700 p-4 md:p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{activeCategory}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skillCategories
              .find((category) => category.title === activeCategory)
              ?.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-600 p-3 rounded-lg text-center transform hover:scale-105 transition-transform"
                >
                  {skill}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
