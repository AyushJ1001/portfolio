"use client";
import { useState } from "react";

/**
 * Renders a responsive, interactive section displaying categorized technical skills with tab navigation.
 *
 * Users can switch between skill categories using tab buttons, view the associated skills in a dynamically sized grid, and see a count of skills per category. The layout and styling adapt for mobile and desktop screens, and each category is represented with an icon and custom grid configuration.
 *
 * @returns The rendered skills section as a React element.
 */
export function Skills() {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go", "Rust", "C#"],
      gridCols: { mobile: 2, tablet: 4, desktop: 4 }
    },
    {
      title: "Frameworks",
      icon: "🚀",
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
      gridCols: { mobile: 2, tablet: 3, desktop: 4 }
    },
    {
      title: "Domains",
      icon: "🎯",
      skills: [
        "Web Development",
        "Machine Learning",
        "IoT",
        "Computer Vision",
        "Data Science",
        "Mobile Development",
      ],
      gridCols: { mobile: 2, tablet: 3, desktop: 3 }
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: ["Docker", "Git", "Bash", "Linux", "VS Code", "Vim"],
      gridCols: { mobile: 2, tablet: 3, desktop: 3 }
    },
    {
      title: "Office",
      icon: "📊",
      skills: [
        "MS Word",
        "MS Project",
        "MS PowerPoint",
        "MS Excel",
        "Latex Overleaf",
      ],
      gridCols: { mobile: 2, tablet: 3, desktop: 5 }
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
          Technical Skills
        </h2>
        
        {/* Mobile-first tab navigation */}
        <div className="mb-8">
          {/* Mobile: Horizontal scroll tabs */}
          <div className="sm:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {skillCategories.map((category) => (
                <button
                  key={category.title}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category.title
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  onClick={() => setActiveCategory(category.title)}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: Centered flex layout */}
          <div className="hidden sm:flex flex-wrap justify-center gap-3">
            {skillCategories.map((category) => (
              <button
                key={category.title}
                className={`flex items-center gap-2 px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-base font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                  activeCategory === category.title
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category.title)}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills display */}
        <div className="bg-gray-700/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-600/30">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">
              {skillCategories.find(cat => cat.title === activeCategory)?.icon}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              {activeCategory}
            </h3>
          </div>
          
          {/* Optimized responsive grid for better alignment */}
          <div className={`grid gap-3 sm:gap-4 ${
            activeCategory === "Languages" ? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-4" :
            activeCategory === "Frameworks" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" :
            activeCategory === "Domains" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3" :
            activeCategory === "Tools" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3" :
            activeCategory === "Office" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" :
            "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          }`}>
            {skillCategories
              .find((category) => category.title === activeCategory)
              ?.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-600 to-gray-700 p-3 sm:p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300 ease-out hover:from-gray-500 hover:to-gray-600 hover:shadow-lg hover:shadow-blue-500/10 border border-gray-500/20 hover:border-blue-400/30 min-h-[60px] sm:min-h-[70px] flex items-center justify-center"
                >
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-100 leading-tight block group-hover:text-white transition-colors duration-200 px-1">
                    {skill}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Skills count indicator */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            {skillCategories.find(cat => cat.title === activeCategory)?.skills.length} skills in {activeCategory}
          </p>
        </div>
      </div>
    </section>
  );
}
