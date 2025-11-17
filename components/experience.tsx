const experiences = [
  {
    title: 'Data Analyst',
    company: 'Naples Comprehensive Health',
    location: 'Naples, FL',
    date: 'June 2025 - Present',
    highlights: [
      'Reduced data entry inefficiencies by 40% by engineering a data integration system using Python and pandas to normalize disparate insurance spreadsheets and eliminate duplicate patient records',
      'Developed a full-stack financial dashboard with React frontend and Python backend for senior leadership, providing real-time metrics on care gap closure and enabling data-driven financial decisions',
      'Automated document management by building a Python script that sorts patient PDFs into appropriate insurance folders, improving operational efficiency and saving an estimated 15 hours per week',
      'Contributed to financial optimization by creating an aggregation script that categorizes care gaps by insurance provider'
    ]
  },
  {
    title: 'Software Developer',
    company: 'UF Swamp Launch Rocket Design Team (USLI)',
    location: 'Gainesville, FL',
    date: 'Sep 2024 - Present',
    highlights: [
      'Developed data logging system for rocket payload using C++; implemented real-time data collection and CSV output',
      'Optimized data transmission by designing and implementing bit-packing algorithms that compressed sensor inputs into a 60-bit format',
      'Engineered modular code architecture that allowed integration of additional sensors; improved system scalability',
      'Collaborated with interdisciplinary team to meet technical requirements and deadlines for NASA competition'
    ]
  },
  {
    title: 'Outside Services',
    company: 'Bonita Bay Club',
    location: 'Naples, FL',
    date: 'Oct 2021 - Present',
    highlights: [
      'Managed member services with focus on excellent customer service and attention to detail',
      'Handled golf equipment and laundry tasks while maintaining club standards',
      'Assisted in closing operations and facility maintenance'
    ]
  }
]

export default function Experience() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-1 h-6 bg-accent"></div>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-accent font-mono text-sm">{exp.company}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-muted-foreground">{exp.location}</p>
                  <p className="text-muted-foreground">{exp.date}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
