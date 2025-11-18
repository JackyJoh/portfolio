import React from 'react';

export default function MusicRecommendationEnginePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Music Recommendation Engine</h1>
      <p className="text-muted-foreground mb-8">
        Built a full-stack music recommendation system that identifies similar songs from a 114,000-song dataset using efficient data structures and algorithms.
      </p>
      <div className="bg-card border border-border rounded-lg p-8 shadow">
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Reduced search time by 90% using a trie tree for autocomplete and efficient searching.</li>
          <li>Engineered data processing pipeline with rapidcsv for handling large datasets.</li>
          <li>Implemented min-heap and merge-sort for optimal song sorting and ranking.</li>
          <li>Tech: C++, JavaScript, HTML/CSS, Git</li>
        </ul>
      </div>
    </div>
  );
}
