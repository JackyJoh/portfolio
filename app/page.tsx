'use client'

  import { useState, useEffect } from 'react'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'

import About from '@/components/about'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import ParticleBackground from '@/components/particle-background'

export default function Home() {
  // Scroll to projects if coming from demo page
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('scrollToProjects') === 'true') {
      sessionStorage.removeItem('scrollToProjects');
      window.location.hash = '#projects';
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <div className="relative z-10">
      <Navigation />
      <main className="max-w-6xl mx-auto">
        <Hero />
          <div id="projects" className="mb-32 scroll-mt-[100px]">
            <Projects />
          </div>
          <div id="experience" className="mb-16 scroll-mt-[100px] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 px-[5vw] md:px-[8vw] xl:px-[10vw]">
            <Experience />
          </div>
        <div className="mt-32" />
        <div id="skills" className="mb-4 scroll-mt-[100px] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 px-[5vw] md:px-[8vw] xl:px-[10vw]">
          <Skills />
        </div>
        <div id="about" className="mb-0 scroll-mt-[100px] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 px-[5vw] md:px-[8vw] xl:px-[10vw]">
          <About />
        </div>
      </main>
      <Contact />
      </div>
    </div>
  )
}
