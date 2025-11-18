import Link from 'next/link'

const projects = [
  {
    slug: 'music-recommendation-engine',
    title: 'Music Recommendation Engine',
    subtitle: 'Full-Stack Development',
    date: 'March 2025',
    description: 'Built a full-stack music recommendation system that identifies similar songs from a 114,000-song dataset using efficient data structures and algorithms.',
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
  },
  {
    slug: './',
    title: 'UF Swamp Launch Rocket Payload',
    subtitle: 'Embedded Systems & C++',
    date: 'Sep 2024 - Present',
    description: 'Developing real-time data logging and transmission system for a NASA Student Launch Initiative competition rocket.',
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
  },
  {
    slug: './',
    title: 'Asteroid Hazard Classification Model',
    subtitle: 'Machine Learning & Data Science',
    date: 'July 2024',
    description: 'Developed a machine learning model to classify asteroids as hazardous or non-hazardous based on orbital and physical attributes.',
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-1 h-6 bg-accent"></div>
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-border rounded-xl bg-card shadow-lg p-4 min-h-[320px] aspect-[4/5] hover:border-accent transition group"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-accent font-mono text-xs mb-2">{project.subtitle}</p>
                  <div className="text-muted-foreground text-xs mb-3">{project.date}</div>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <ul className="space-y-1 mb-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-xs">
                        <span className="text-accent font-bold mt-1">→</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <Link
                    href={project.slug === 'music-recommendation-engine' ? '/demos/music-recommendation-engine' : `/demos/${project.slug}`}
                    className="inline-block px-4 py-1.5 rounded-lg bg-accent text-accent-foreground font-mono text-xs font-semibold shadow hover:opacity-90 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
