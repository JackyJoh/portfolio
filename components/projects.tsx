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
    title: 'NASA USLI Rocket Payload',
    subtitle: 'Embedded Systems & C++',
    date: 'Sep 2024 - Present',
    description: 'Developed real-time data logging, bit-packing transmission system, and land-detection software for a NASA student launch competition rocket.',
    highlights: [
      'framework 1 i used',
      'second framework i used'
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
    <section id="projects" className="py-8 px-[5vw] md:px-[8vw] xl:px-[10vw] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="w-full mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-1 h-6 bg-accent"></div>
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-border rounded-2xl bg-card/70 shadow-lg p-6 min-h-[200px] w-full max-w-xl mx-auto hover:border-accent transition"
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
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-accent text-accent font-mono text-xs font-semibold hover:bg-accent/10 hover:text-accent transition group"
                  >
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
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
