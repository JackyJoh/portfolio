import Link from 'next/link'

const projects = [
  {
    slug: 'music-recommendation-engine',
    title: 'Music Recommendation Engine',
    subtitle: 'Full-Stack Development',
    date: 'March 2025',
    description: 'Web app that takes a song name and returns the 7 most similar songs from a 114,000-song dataset, using a trie for search and a similarity algorithm for ranking.',
    skills: [
      'Javascript', 'C++', 'HTML/CSS', 'Full Stack', 'Algorithms'
    ],
    repo: 'https://github.com/JackyJoh/Proj3Spotify'
  },
  {
    slug: 'asteroid-threat-detection',
    title: 'Asteroid Threat Detection',
    subtitle: 'Machine Learning, Data Science',
    date: 'June 2021 | Stevens Institute of Technology',
    description: 'A machine learning model that classifies near-Earth objects (NEOs) as hazardous or non-hazardous based on features like size, orbit, and velocity. Results are visualized in graphs to highlight which attributes most influence hazard status.',
    skills: [
      'Scikit-learn', 'Python', 'Matplotlib', 'OCaml'
    ],
    organization: 'Stevens Institute of Technology',
    repo: null // disables github link
  },
  {
    slug: 'fut-predictor',
    title: 'Football Performance Predictor',
    subtitle: 'Machine Learning, Data Organization',
    date: 'TBA',
    description: 'COMING SOON: A machine learning model that predicts football player performance using historical data, player statistics, and game conditions to provide insights for team management and strategy.',
    skills: [
      'TBA'
    ],
    organization: 'Stevens Institute of Technology',
    repo: null // disables github link
  }
]

export default function Projects() {
  return (
    <section className="scroll-mt-32 py-8 px-[5vw] md:px-[8vw] xl:px-[10vw] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="w-full mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-1 h-6 bg-accent"></div>
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-border rounded-2xl bg-card/05 backdrop-blur-sm shadow-lg p-6 min-h-[400px] w-full max-w-xl mx-auto hover:border-accent transition"
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
                <div className="mt-auto pt-2 flex gap-2 justify-between">
                  <Link
                    href={project.slug === 'music-recommendation-engine' ? '/demos/music-recommendation-engine' : `/demos/${project.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-br from-accent to-accent/80 text-white font-mono text-sm font-semibold shadow hover:from-accent/90 hover:to-accent/70 transition-all border border-accent"
                  >
                    View Details
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition"
                    >
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C21.138 20.2 24 16.447 24 12.021 24 6.484 19.523 2 12 2z"/></svg>
                    </a>
                  ) : (
                    <svg className="w-10 h-10 text-gray-400 opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C21.138 20.2 24 16.447 24 12.021 24 6.484 19.523 2 12 2z"/></svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
