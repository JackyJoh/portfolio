"use client";
import ParticleBackground from '@/components/particle-background';
import Link from 'next/link';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
export default function MusicRecommendationEnginePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm min-h-[64px]">
        <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4 min-h-[64px] flex items-center relative">
          {/* Back button fixed at the very left of the screen, above header, vertically centered in header */}
          <div className="fixed left-[3vw] top-0 z-[100] h-[64px] flex items-center" style={{ pointerEvents: 'auto' }}>
            <a
              href="/#projects"
              aria-label="Back to Projects"
              className="uppercase font-mono tracking-wider text-muted-foreground text-sm bg-transparent border-0 shadow-none px-0 py-0 hover:text-foreground transition"
              style={{ letterSpacing: '0.1em' }}
            >
              Back
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-4 mx-auto">
            <span
              className="uppercase font-mono tracking-wider text-foreground text-lg md:text-xl"
              style={{ letterSpacing: '0.1em' }}
            >
              Music Recommendation Engine
            </span>
            <a
              href="https://www.youtube.com/watch?v=yWauT5_8_Sc&ab_channel=JackyJoh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Demo"
              className="rounded bg-transparent p-1.5 text-muted-foreground hover:text-foreground transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.347 0 12 0 12s0 3.653.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.653 24 12 24 12s0-3.653-.502-5.814zM9.75 16.02V7.98l7.5 4.02-7.5 4.02z"/></svg>
            </a>
            <a
              href="https://github.com/JackyJoh/Proj3Spotify"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repo"
              className="rounded bg-transparent p-1.5 text-muted-foreground hover:text-foreground transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C21.138 20.2 24 16.447 24 12.021 24 6.484 19.523 2 12 2z"/></svg>
            </a>
          </div>
        </nav>
      </header>
      <div className="relative z-10">
        <main className="max-w-5xl mx-auto py-8 px-2 sm:py-12 sm:px-4">
          {/* Project Overview / Specs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Overview / Specs</h2>
            <p className="text-muted-foreground mb-6">
              This web app recommends the 7 most similar songs to a user-provided song name, searching a dataset of over 114,000 tracks. It features fast search and ranking using custom data structures and algorithms for both performance and accuracy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Frontend</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>HTML, CSS, JavaScript</li>
                  <li>Responsive UI</li>
                </ul>
              </div>
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Backend</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>C++ (rapidcsv, httplib)</li>
                  <li>Custom API for song search and recommendation</li>
                </ul>
              </div>
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Algorithms</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>Trie tree for fast prefix search</li>
                  <li>Similarity scoring and ranking with max-heap</li>
                  <li>Bit-packing for efficient data transfer</li>
                </ul>
              </div>
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Frameworks</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>rapidcsv</li>
                  <li>httplib</li>
                  <li>Vanilla JS/CSS for frontend</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Preview Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Example screenshot and explanation */}
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border flex flex-col items-center">
                <div className="w-full h-40 sm:h-48 bg-muted rounded mb-4 flex items-center justify-center text-muted-foreground">
                  Screenshot 1 (placeholder)
                </div>
                <p className="text-muted-foreground text-sm">Enter a song name in the search bar. The app uses a trie to quickly find matches and displays the top 7 most similar songs.</p>
              </div>
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border flex flex-col items-center">
                <div className="w-full h-48 bg-muted rounded mb-4 flex items-center justify-center text-muted-foreground">
                  Screenshot 2 (placeholder)
                </div>
                <p className="text-muted-foreground text-sm">The backend ranks results using a custom similarity algorithm and returns them instantly, even for large datasets.</p>
              </div>
            </div>
          </section>
          {/* How to Run / Live Demo Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How to Run / Live Demo</h2>
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border">
              <p className="text-muted-foreground mb-4">
                You can try the project live or run it locally by following these steps:
              </p>
              <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-2 text-sm">
                <li className="break-words">
                  Visit the <a href="https://github.com/JackyJoh/Proj3Spotify" target="_blank" rel="noopener noreferrer" className="text-accent underline">GitHub repository</a> and clone the project.
                </li>
                <li>
                  Follow the setup instructions in the README to install dependencies and build the backend (C++).
                </li>
                <li>
                  Start the backend server and open the frontend in your browser.
                </li>
                <li>
                  Optionally, watch the <a href="https://www.youtube.com/watch?v=yWauT5_8_Sc&ab_channel=JackyJoh" target="_blank" rel="noopener noreferrer" className="text-accent underline">video demo</a> for a walkthrough.
                </li>
              </ol>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <a
                  href="https://github.com/JackyJoh/Proj3Spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent text-white font-mono text-sm font-bold shadow-md hover:bg-accent/90 hover:scale-105 transition-all group border-2 border-accent"
                >
                  GitHub Repo
                </a>
                <a
                  href="https://www.youtube.com/watch?v=yWauT5_8_Sc&ab_channel=JackyJoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent text-white font-mono text-sm font-bold shadow-md hover:bg-accent/90 hover:scale-105 transition-all group border-2 border-accent"
                >
                  Video Demo
                </a>
                <a
                  href="https://example.com/live-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent text-white font-mono text-sm font-bold shadow-md hover:bg-accent/90 hover:scale-105 transition-all group border-2 border-accent"
                >
                  Live Demo (Example)
                </a>
              </div>
              <p className="text-xs text-muted-foreground">Note: Replace the live demo link with your actual deployment if available.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
