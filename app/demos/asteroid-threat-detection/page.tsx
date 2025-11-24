
"use client";
import ParticleBackground from '@/components/particle-background';
import Link from 'next/link';


export default function AsteroidThreatDetectionDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm min-h-[64px]">
        <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4 min-h-[64px] flex flex-col sm:flex-row items-center relative">
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
              Asteroid Threat Detection
            </span>
          </div>
        </nav>
      </header>
      <div className="relative z-10">
        <main className="max-w-5xl mx-auto py-8 px-2 sm:py-12 sm:px-4">
          {/* Project Overview / Specs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Overview / Specs</h2>
            <p className="text-muted-foreground mb-3">
                                        Machine learning is used to predict whether a near-Earth object (NEO) is hazardous, helping prioritize which asteroids may pose a risk to Earth. Early detection and classification is crucial for planetary defense and scientific research.
              The goal was to maximize accuracy and use data visualization to show which features are most critical for classification.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Data Description</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>ID and Name</li>
                  <li>Estimated Diameter (min/max)</li>
                  <li>Relative Velocity</li>
                  <li>Miss Distance (from Earth)</li>
                  <li>Absolute Magnitude</li>
                  <li>Orbiting Body (Earth)</li>
                  <li>Sentry Object (Boolean)</li>
                  <li>Target Variable: hazardous (Boolean)</li>
                </ul>
              </div>
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Tech Stack & Libraries</h3>
                <ul className="text-muted-foreground text-sm list-disc pl-4">
                  <li>Python, pandas, numpy</li>
                  <li>matplotlib, seaborn</li>
                  <li>scikit-learn (StandardScaler, LogisticRegression)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
                            <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Why These Features?</h3>
                            <ul className="text-muted-foreground text-sm list-disc pl-4 mb-2">
                              <li><strong>Relative velocity</strong>: Faster objects are harder to deflect and may cause more damage.</li>
                              <li><strong>Miss distance</strong>: Objects passing closer to Earth are more likely to be hazardous.</li>
                              <li><strong>Diameter & magnitude</strong>: Larger and brighter objects are easier to detect and may pose greater risk.</li>
                            </ul>
              <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Exploratory Data Analysis (EDA)</h3>
              <ul className="text-muted-foreground text-sm list-disc pl-4">
                <li>Histograms for diameter, velocity, miss distance, magnitude</li>
                <li>Split data by hazardous/non-hazardous for comparison</li>
                <li>Standardized sample sizes to avoid bias</li>
              </ul>
              <div className="overflow-x-auto mt-2">
                <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border w-full max-w-xl">
                  <table className="text-xs text-muted-foreground w-full">
                    <thead>
                      <tr className="bg-card/10">
                        <th className="p-2">Feature</th>
                        <th className="p-2">Median</th>
                        <th className="p-2">Mean</th>
                        <th className="p-2">Std</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2">Estimated Diameter (min)</td>
                        <td className="p-2">0.0484</td>
                        <td className="p-2">—</td>
                        <td className="p-2">—</td>
                      </tr>
                      <tr>
                        <td className="p-2">Relative Velocity</td>
                        <td className="p-2">44190</td>
                        <td className="p-2">48066</td>
                        <td className="p-2">25293</td>
                      </tr>
                      <tr>
                        <td className="p-2">Miss Distance</td>
                        <td className="p-2">37846679</td>
                        <td className="p-2">37066546</td>
                        <td className="p-2">22352040</td>
                      </tr>
                      <tr>
                        <td className="p-2">Absolute Magnitude</td>
                        <td className="p-2">23.7</td>
                        <td className="p-2">23.5</td>
                        <td className="p-2">2.89</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Preview Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <div className="flex flex-col gap-6">
              <div className="bg-card/20 backdrop-blur-sm rounded-xl p-5 border border-border flex flex-col items-center">
                <img
                  src="/previews/asteroid_scatter.png"
                  alt="Scatterplot of hazardous and non-hazardous NEOs"
                  className="object-cover rounded mb-6 shadow-lg w-full"
                  style={{
                    maxWidth: '900px',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                    width: '100%',
                  }}
                />
                <p className="text-muted-foreground text-sm mt-2">Scatterplot showing hazardous (blue) and non-hazardous (red) near-Earth objects by relative velocity and miss distance.</p>
              </div>
            </div>
          </section>

          {/* Model & Results Section */}
                    {/* Key Takeaways Section */}
                    <section className="mb-12">
                      <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
                      <ul className="text-muted-foreground text-md list-disc pl-4 mb-4">
                        <li>Balanced data and feature selection are critical for accurate hazard prediction.</li>
                        <li>Velocity and miss distance are strong indicators of hazard status.</li>
                        <li>Model accuracy reached 70%, showing promise for future improvements.</li>
                        <li>Visualizations help scientists and decision-makers quickly assess risk.</li>
                      </ul>
                    </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Model & Results</h2>
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border">
              <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Data Preparation & Modeling</h3>
              <ul className="text-muted-foreground text-sm list-disc pl-4 mb-4">
                <li>Split data by hazardous/non-hazardous for comparative analysis</li>
                <li>Standardized sample sizes to avoid bias</li>
                <li>Standardized velocity and miss distance using StandardScaler</li>
                <li>Train/test split: 80% train, 20% test</li>
                <li>Logistic Regression model trained on standardized data</li>
              </ul>
              <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Model Parameters</h3>
              <ul className="text-muted-foreground text-sm list-disc pl-4 mb-4">
                <li>Coefficients (velocity, miss distance): <span className="font-mono">[0.69, -0.04]</span></li>
                <li>Intercept: <span className="font-mono">0.12</span></li>
              </ul>
              <h3 className="font-semibold text-accent mb-2 text-sm uppercase">Results</h3>
              <ul className="text-muted-foreground text-sm list-disc pl-4 mb-4">
                <li>Overall accuracy: <span className="font-mono">0.70</span> (70%)</li>
                <li>Classification report:</li>
                <ul className="pl-6">
                  <li>Precision (False/True): <span className="font-mono">0.68 / 0.72</span></li>
                  <li>Recall (False/True): <span className="font-mono">0.68 / 0.72</span></li>
                  <li>F1-Score (False/True): <span className="font-mono">0.68 / 0.72</span></li>
                </ul>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
