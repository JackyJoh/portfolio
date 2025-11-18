import React from 'react';
import MusicRecommendationEngine from '@/components/demos/music-recommendation-engine';

export default function DemoPage({ params }: { params: { slug: string } }) {
  if (params.slug === 'music-recommendation-engine') {
    return <MusicRecommendationEngine />;
  }
  // Fallback for other slugs
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Project Demo: {params.slug.replace(/-/g, ' ')}</h1>
      <p className="text-muted-foreground mb-8">This is a placeholder for the project demo page. You can customize this page for each project.</p>
      <div className="bg-card border border-border rounded-lg p-8 shadow">
        <p>Project details and interactive demo will go here.</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'music-recommendation-engine' },
    { slug: 'uf-swamp-launch-rocket-payload' },
    { slug: 'asteroid-hazard-classification-model' },
  ];
}
