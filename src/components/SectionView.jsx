import { useState } from 'react';
import { ProgressBar } from './ProgressBar.jsx';
import { TopicCard } from './TopicCard.jsx';

export function SectionView({ title, intro, weight, topics, progress, save }) {
  const [expanded, setExpanded] = useState(null);
  const completedCount = topics.filter(t => progress.completedTopics[t.id]?.completed).length;

  return (
    <div className="space-y-6">
      <header className="border-b border-zinc-800 pb-5">
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
          <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100">{title}</h2>
          {weight && (
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              {weight} der Gesamtnote
            </span>
          )}
        </div>
        <p className="text-zinc-400 leading-relaxed max-w-3xl text-sm">{intro}</p>
        <div className="mt-4 flex items-center gap-3">
          <ProgressBar value={completedCount} max={topics.length} className="max-w-xs" />
          <span className="font-mono text-xs text-zinc-500">
            {completedCount} / {topics.length} gemeistert
          </span>
        </div>
      </header>

      <div className="space-y-3">
        {topics.map((t) => (
          <TopicCard
            key={t.id}
            topic={t}
            progress={progress}
            save={save}
            expanded={expanded === t.id}
            onToggle={() => setExpanded(expanded === t.id ? null : t.id)}
          />
        ))}
      </div>
    </div>
  );
}
