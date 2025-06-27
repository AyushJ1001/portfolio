export function Awards() {
  const awards = [
    {
      title: "PICT InC '24 - 2nd place in Concepts-DS",
      year: "2024",
      icon: "🏆",
    },
    {
      title: "Technical Presentation Event in Pulzion",
      year: "2023",
      icon: "📊",
    },
    {
      title: "Dr. Homi Bhabha Balvaidnyanik Competition - 2nd phase",
      year: "2017",
      icon: "🔬",
    },
    { title: "Sakal Schoolympics (Chess)", year: "2016", icon: "♟️" },
    { title: "MSCE Scholarship - High School", year: "2015", icon: "🎓" },
    { title: "Mathex - Middle School & High School", year: "2013", icon: "📐" },
    { title: "MSCE Scholarship - Middle School", year: "2012", icon: "🎓" },
  ];

  return (
    <section id="awards" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Awards & Honors
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-gray-700/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 mt-1">
                    {award.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-gray-100 leading-tight mb-2 group-hover:text-white transition-colors duration-200">
                      {award.title}
                    </h3>
                    <span className="text-blue-400 text-sm font-medium">
                      {award.year}
                    </span>
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
