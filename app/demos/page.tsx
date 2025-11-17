'use client'

import Link from 'next/link'
import ParticleBackground from '@/components/particle-background'

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-lg font-bold hover:text-accent transition">
              ← Back to Portfolio
            </Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-20">
          <div className="mb-12 flex items-center gap-3">
            <div className="w-1 h-8 bg-accent"></div>
            <h1 className="text-4xl md:text-5xl font-bold">Project Demos</h1>
          </div>

          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Live demonstrations of my projects. Explore interactive examples and see my work in action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Demo cards will go here */}
            <div className="border border-border rounded-lg p-6 hover:border-accent transition">
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Project demos will be added here.
              </p>
              <div className="text-accent font-mono text-xs">Under Development</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
