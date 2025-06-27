import { Calendar, Building2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Teaching Assistant",
      company: "Michigan Technological University",
      period: "2024 - Present",
      description:
        "Assisting professors with course material preparation, grading assignments, and conducting lab sessions for undergraduate computer science courses.",
      skills: ["Teaching", "Course Development", "Student Mentoring"],
    },
    {
      role: "Research Assistant",
      company:
        "Computer Vision, Blockchain and Distributed Systems Lab (CVBDSL)",
      period: "2023",
      description:
        'Worked on "Secure Data Analytics Module using Homomorphic Encryption" using Python Language, Pandas, NumPy, and Jupyter Notebook to develop privacy-preserving data analysis techniques.',
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Jupyter Notebook",
        "Homomorphic Encryption",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-500/50 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[33px] sm:-left-[41px] -top-1 w-5 h-5 sm:w-6 sm:h-6 bg-gray-900 rounded-full border-2 border-blue-500 z-10 shadow-lg shadow-blue-500/20 group-hover:border-purple-500 transition-colors duration-300"></div>

                {/* Content card */}
                <div className="bg-gray-700/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-600/30 transform transition-all duration-300 hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-start text-gray-300 mb-4">
                    <Building2 size={16} className="mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gradient-to-br from-gray-600 to-gray-700 text-blue-300 text-xs px-3 py-1.5 rounded-lg border border-gray-500/20 hover:border-blue-400/30 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
