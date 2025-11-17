const projects = [
  {
    title: 'Music Recommendation Engine',
    subtitle: 'Full-Stack Development',
    date: 'March 2025',
    description: 'Built a full-stack music recommendation system that identifies similar songs from a 114,000-song dataset using efficient data structures and algorithms.',
    highlights: [
      'Reduced search time by 90% using a trie tree for autocomplete and efficient searching',
      'Engineered data processing pipeline with rapidcsv for handling large datasets',
      'Implemented min-heap and merge-sort for optimal song sorting and ranking',
      'Tech: C++, JavaScript, HTML/CSS, Git'
    ],
    impact: ''
  },
  {
    title: 'UF Swamp Launch Rocket Payload',
    subtitle: 'Embedded Systems & C++',
    date: 'Sep 2024 - Present',
    description: 'Developing real-time data logging and transmission system for a NASA Student Launch Initiative competition rocket.',
    highlights: [
      'Designed bit-packing algorithms that compressed sensor data into a 60-bit format, significantly reducing transmission overhead',
      'Built modular C++ architecture supporting multiple sensor integrations and scalable data collection',
      'Enabled post-flight analysis through CSV output and performance metric visualization',
      'Collaborating with interdisciplinary team to meet NASA competition requirements'
    ],
    impact: ''
  },
  {
    title: 'Asteroid Hazard Classification Model',
    subtitle: 'Machine Learning & Data Science',
    date: 'July 2024',
    description: 'Developed a machine learning model to classify asteroids as hazardous or non-hazardous based on orbital and physical attributes.',
    highlights: [
      'Achieved 70% classification accuracy using scikit-learn and Python',
      'Created data visualizations with Matplotlib to analyze relationships between attributes and risk',
      'Performed feature analysis on relative velocity, distance, and other key parameters',
      'Provided actionable insights for space science research'
    ],
    impact: ''
  }
]

export default function Projects() {
  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-1 h-6 bg-accent"></div>
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-6 pb-8 last:pb-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-accent font-mono text-sm">{project.subtitle}</p>
                </div>
                <div className="text-right">
                  <div className="text-accent font-mono text-sm">{project.impact}</div>
                  <div className="text-muted-foreground text-sm">{project.date}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
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
