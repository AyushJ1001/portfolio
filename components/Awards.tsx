export function Awards() {
  const awards = [
    { title: "PICT InC '24 - 2nd place in Concepts-DS", year: "2024" },
    { title: "Technical Presentation Event in Pulzion", year: "2023" },
    { title: "Dr. Homi Bhabha Balvaidnyanik Competition - 2nd phase", year: "2017" },
    { title: "Sakal Schoolympics (Chess)", year: "2016" },
    { title: "MSCE Scholarship - High School", year: "2015" },
    { title: "Mathex - Middle School & High School", year: "2013" },
    { title: "MSCE Scholarship - Middle School", year: "2012" }
  ]

  return (
    <section id="awards" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Awards & Honors</h2>
        <div className="max-w-3xl mx-auto">
          {awards.map((award, index) => (
            <div key={index} className="mb-4 flex justify-between items-center">
              <span className="text-lg">{award.title}</span>
              <span className="text-blue-400">{award.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

