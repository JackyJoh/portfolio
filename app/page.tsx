'use client'

import { useState } from 'react'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import About from '@/components/about'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="max-w-6xl mx-auto">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
      </main>
      <Contact />
    </div>
  )
}
