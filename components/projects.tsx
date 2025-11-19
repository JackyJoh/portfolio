import Link from 'next/link'

const projects = [
  {
    slug: 'music-recommendation-engine',
    title: 'Music Recommendation Engine',
    subtitle: 'Full-Stack Development',
    date: 'March 2025',
    description: 'Web app that takes a song name and returns the 7 most similar songs from a 114,000-song dataset, using a trie for search and a similarity algorithm for ranking.',
    skills: [
      'TypeScript', 'Next.js', 'Python', 'Pandas', 'Scikit-learn', 'TailwindCSS'
    ]
  },
  {
    slug: './',
    title: 'NASA USLI Rocket Payload',
    subtitle: 'Embedded Systems & C++',
    date: 'Sep 2024 - Present',
    description: 'Real-time data logging program that wrote sensor (IMU) data to CSV \n Bit-packing system to format multiple sensor inputs into a 52-bit package for Raspberry Pi \n Detection software to identify launch/landing events and trigger payload deployment.',
    skills: [
      'C++', 'Embedded', 'RTOS', 'Telemetry'
    ]
  },
  {
    slug: './',
    title: 'Corporate Dashboards',
    subtitle: 'Full-Stack Development',
    date: 'August 2025',
    description: 'Web-based dashboards for internal use at a health-care company, featuring real-time data visualization, streamlined auditing workflows, and secure user login with JWT tokens and CORS.',
    skills: [
      'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Supabase'
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
              className="flex flex-col border border-border rounded-2xl bg-card/70 shadow-lg p-6 min-h-[400px] w-full max-w-xl mx-auto hover:border-accent transition"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-accent font-mono text-xs mb-2">{project.subtitle}</p>
                  <div className="text-muted-foreground text-xs mb-3">{project.date}</div>
                  <p className="text-muted-foreground mb-3">
                    {project.description.split('\n').map((line, idx) => (
                      <span
                        key={idx}
                        className={idx > 0 ? 'block mt-2' : 'block'}
                      >
                        {line}
                      </span>
                    ))}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-xl bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground border border-border shadow-sm"
                        style={{ borderRadius: '1.25rem' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-2">
                  <Link
                    href={project.slug === 'music-recommendation-engine' ? '/demos/music-recommendation-engine' : `/demos/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent text-white font-mono text-sm font-bold shadow-md hover:bg-accent/90 hover:scale-105 transition-all group border-2 border-accent"
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
