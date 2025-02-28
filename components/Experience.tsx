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
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-500/50 pl-8 ml-4 space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] -top-1 w-6 h-6 bg-gray-900 rounded-full border-2 border-blue-500 z-10 shadow-lg shadow-blue-500/20 group-hover:border-purple-500 transition-colors duration-300"></div>

                {/* Content card */}
                <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700/50 transform transition-all duration-300 hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <h3 className="text-xl font-semibold text-blue-400">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-300 mb-4">
                    <Building2 size={16} className="mr-2 text-gray-400" />
                    <span className="font-medium">{exp.company}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-700/50 text-blue-300 text-xs px-2 py-1 rounded-md border border-gray-600/50"
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
