export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="w-full max-w-4xl">
        <div className="mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-accent"></div>
          <span className="text-accent text-sm font-mono uppercase tracking-wider">Welcome</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Jackson Johannessen
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl">
          Computer Science student at University of Florida building scalable systems, 
          <span className="text-foreground font-semibold"> full-stack applications</span>, and 
          <span className="text-foreground font-semibold"> data-driven solutions</span>.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="mailto:jjohannessen@ufl.edu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-mono text-sm font-semibold hover:opacity-90 transition"
          >
            Get in Touch →
          </a>
          <a 
            href="https://github.com/JackyJoh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-muted transition font-mono text-sm"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-border flex gap-8 md:gap-12">
          <div>
            <div className="text-accent font-mono text-sm mb-2">3.93</div>
            <div className="text-muted-foreground text-sm">GPA</div>
          </div>
          <div>
            <div className="text-accent font-mono text-sm mb-2">8+</div>
            <div className="text-muted-foreground text-sm">Languages & Frameworks</div>
          </div>
        </div>
      </div>
    </section>
  )
}
