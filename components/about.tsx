export default function About() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-1 h-6 bg-accent"></div>
          <h2 className="text-3xl font-bold">About</h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground font-semibold">Computer Science TEST INSERTstudent at University of Florida</span> with a passion for building efficient, scalable systems and creating polished user experiences. My interests span full-stack web development, embedded systems, machine learning, and data optimization.
          </p>

          <p>
            Since my freshman year, I've focused on developing practical skills across the entire technology stack. My work centers around solving real-world problems through code—whether that's compressing sensor data for aerospace applications, building recommendation engines, or automating healthcare workflows.
          </p>

          <p>
            Currently, I'm working as a <span className="text-foreground font-semibold">Data Analyst at Naples Comprehensive Health</span>, where I build systems that reduce administrative burden and drive data-informed decisions. I'm also developing the <span className="text-foreground font-semibold">payload software for UF's competitive rocket</span> in the NASA Student Launch Initiative.
          </p>

          <p>
            I believe the best software is built at the intersection of technical excellence and practical impact. I'm always exploring new technologies, contributing to meaningful projects, and looking for opportunities to grow.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="text-accent font-mono text-sm mb-2">Education</div>
            <div className="text-foreground">
              <p className="font-semibold">University of Florida</p>
              <p className="text-sm text-muted-foreground">B.S. Computer Science</p>
              <p className="text-sm text-muted-foreground">3.93 GPA</p>
            </div>
          </div>
          <div>
            <div className="text-accent font-mono text-sm mb-2">Location</div>
            <div className="text-foreground">
              <p className="font-semibold">Gainesville, FL</p>
              <p className="text-sm text-muted-foreground">Available for internships & full-time</p>
            </div>
          </div>
          <div>
            <div className="text-accent font-mono text-sm mb-2">Contact</div>
            <div className="text-foreground text-sm space-y-1">
              <p><a href="mailto:jjohannessen@ufl.edu" className="hover:text-accent transition">jjohannessen@ufl.edu</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
