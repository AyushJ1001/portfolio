"use client";
import { useState } from "react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go", "Rust", "C#"],
    },
    {
      title: "Libraries and Frameworks",
      skills: [
        "NodeJS",
        "React",
        "React Native",
        "TailwindCSS",
        "NextJS",
        "Svelte",
        "Numpy",
        "Matplotlib",
        "Scikit Learn",
        "Tensorflow",
        "OpenCV",
        "Flask"
      ],
    },
    {
      title: "Domains",
      skills: [
        "Web Development",
        "Machine Learning",
        "IoT",
        "Computer Vision",
        "Data Science",
        "Mobile Development",
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
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-white">
          Technical Skills
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base font-medium rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 min-h-[44px] ${
                activeCategory === category.title
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category.title)}
            >
              <span className="whitespace-nowrap">
                {category.title}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-gray-700 p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-white">
            {activeCategory}
          </h3>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
            {skillCategories
              .find((category) => category.title === activeCategory)
              ?.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-600 p-3 sm:p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-200 ease-in-out hover:bg-gray-500 hover:shadow-lg min-h-[56px] sm:min-h-[64px] flex items-center justify-center"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-100 leading-tight">
                    {skill}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
