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
        <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4 min-h-[64px] flex flex-col sm:flex-row items-center relative">
          {/* Responsive back button: static on mobile, fixed on larger screens */}
          <div className="sm:fixed sm:left-[3vw] sm:top-0 sm:z-[100] h-[48px] sm:h-[64px] flex items-center w-full sm:w-auto mb-2 sm:mb-0" style={{ pointerEvents: 'auto' }}>
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
            <p className="text-muted-foreground mb-3">
              <strong>Proj3Spotify</strong> is a full-stack music recommendation engine that finds the 7 most similar songs to a user-provided track, searching a dataset of over 114,000 Spotify songs. It features fast search and ranking using custom data structures and algorithms for both performance and accuracy.
            </p>
            <p className="text-muted-foreground mb-6">
              There are two main ways to search for recommendations in the app: by entering a song name or by selecting a random song. If you leave the input blank and click <strong>Update Song</strong>, the app defaults to "The Real Slim Shady". When you use <strong>Update Song</strong>, the app leverages a trie tree for fast prefix search to find the closest matching song title, then ranks the songs using a min-heap. If you use <strong>Random Song</strong>, the app picks a random track from the dataset and ranks the results using an ordered map. Both methods use the same similarity algorithm, comparing audio features like tempo, danceability, energy, and genre to find the best matches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Frontend</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>HTML, CSS, JavaScript</li>
                  <li>Responsive UI with song cards and details</li>
                </ul>
              </div>
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Backend</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>C++ (rapidcsv for CSV parsing, httplib for HTTP server)</li>
                  <li>API for song search and recommendation</li>
                  <li>Returns JSON with top 7 similar songs and their attributes</li>
                </ul>
              </div>
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Algorithms & Data Structures</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>Trie tree for fast prefix search on song names</li>
                  <li>Max-heap and merge sort for efficient sorting and ranking</li>
                </ul>
              </div>
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Dataset & Features</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>114,000+ Spotify tracks (CSV)</li>
                  <li>API returns detailed song info for recommendations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Preview Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <div className="flex flex-col gap-6">
              {/* Trie Tree Search Autocomplete */}
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border flex flex-col items-center">
                     <img
                       src="/previews/music_trie.png"
                       alt="Trie tree search screenshot"
                       className="object-cover rounded mb-6 shadow-lg w-full"
                       style={{
                         maxWidth: '900px',
                         height: 'auto',
                         display: 'block',
                         margin: '0 auto',
                         width: '100%',
                       }}
                     />
                   <p className="text-muted-foreground text-sm mt-2">Trie tree search: Input an incomplete song name and the closest match will be used by the app.</p>
                <p className="text-muted-foreground text-sm mt-1">E.g., typing "Bohemian R" will match "Bohemian Rhapsody".</p>
              </div>
              {/* Song Card Details Popup */}
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border flex flex-col items-center">
                     <img
                       src="/previews/music_card.png"
                       alt="Song card details screenshot"
                       className="object-cover rounded mb-6 shadow-lg w-full"
                       style={{
                         maxWidth: '900px',
                         height: 'auto',
                         display: 'block',
                         margin: '0 auto',
                         width: '100%',
                       }}
                     />
                   <p className="text-muted-foreground text-sm mt-2">Song details: Click a song card to view a popup with full details—title, artist, album, score, tempo, genre, danceability, energy, duration.</p>
              </div>
            </div>
          </section>
          {/* How to Run / Live Demo Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How to Run / Live Demo</h2>
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border">
              <p className="text-muted-foreground mb-2 font-semibold">After forking the repository and creating your project folder:</p>
              <div className="mb-6">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">CLion Users</h3>
                <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-2 text-sm">
                  <li>Install CLion and MinGW-w64 (for g++), and add MinGW-w64's bin folder to your system PATH.</li>
                  <li>Open the project in CLion.</li>
                  <li>Build the project.</li>
                  <li>Edit the run configuration: In the "before launch" section, remove the build phase and add "Launch Web Browser" with the link set to <span className="font-mono text-xs">http://localhost:63342/Proj3Spotify/frontEnd/index.html</span>.</li>
                  <li>After building, press the run button. This will launch both the website and the backend server at the same time.</li>
                  <li><strong>MacOS users:</strong> Remove the last line in <span className="font-mono text-xs">CMakeLists.txt</span> where it says "Add windows socket libraries".</li>
                </ol>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">VS Code Users (Windows)</h3>
                <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-2 text-sm">
                  <li>Install MinGW-w64 (for g++), and add its bin folder to your system PATH.</li>
                  <li>Install VS Code and the "Live Server" extension.</li>
                  <li>Open a Command Prompt in your project folder.</li>
                  <li>Compile the backend server:
                    <pre className="bg-muted p-2 rounded text-xs mt-2 mb-2">g++ -o backend_server backend_server.cpp</pre>
                    Run the backend server:
                    <pre className="bg-muted p-2 rounded text-xs mt-2 mb-2">backend_server.exe</pre>
                  </li>
                  <li>Open <span className="font-mono text-xs">index.html</span> in VS Code.</li>
                  <li>Right-click <span className="font-mono text-xs">index.html</span> and select "Open with Live Server".</li>
                  <li>Your browser will open to <span className="font-mono text-xs">http://127.0.0.1:5500/frontEnd/index.html</span>.</li>
                </ol>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4 mt-2">
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
              </div>
              <p className="text-xs text-muted-foreground">Note: You do not need to use CLion specifically—any IDE or terminal will work. Replace the live demo link with your actual deployment if available.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
