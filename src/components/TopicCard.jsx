import { ChevronRight, ExternalLink, TopicIcon } from './Icons.jsx';
import { Quiz } from './Quiz.jsx';

export function TopicCard({ topic, progress, save, expanded, onToggle }) {
  const status = progress.completedTopics[topic.id];
  const isCompleted = status?.completed;
  const isAttempted = !!status;

  return (
    <div className={`border rounded-lg overflow-hidden transition-all ${
      isCompleted ? 'border-emerald-800/60 bg-emerald-950/10'
        : isAttempted ? 'border-amber-800/40 bg-zinc-950/50'
        : 'border-zinc-800 bg-zinc-950/50 hover:border-zinc-700'
    }`}>
      <button
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:bg-zinc-900/30 transition-colors"
      >
        <div className={`p-2 rounded-md flex-shrink-0 mt-0.5 ${
          isCompleted ? 'bg-emerald-900/40 text-emerald-300' : 'bg-zinc-800/60 text-cyan-400'
        }`}>
          <TopicIcon name={topic.icon} className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h3 className="font-serif text-base sm:text-lg text-zinc-100">{topic.title}</h3>
            {isCompleted && (
              <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-emerald-900/50 text-emerald-300 rounded font-mono">
                Gemeistert
              </span>
            )}
            {isAttempted && !isCompleted && (
              <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-amber-900/40 text-amber-300 rounded font-mono">
                {status.correctCount}/{status.totalQuestions} richtig
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">{topic.summary}</p>
        </div>
        <ChevronRight className={`w-5 h-5 text-zinc-600 transition-transform flex-shrink-0 mt-2 ${expanded ? 'rotate-90' : ''}`} />
      </button>

      {expanded && (
        <div className="border-t border-zinc-800 p-4 sm:p-5 space-y-6 bg-zinc-950">
          <section>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono mb-3">Kernkonzepte</h4>
            <ul className="space-y-2">
              {topic.keyPoints.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                  <span className="text-cyan-500/60 font-mono text-xs pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1">{p}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono mb-3">Übungsfragen</h4>
            <Quiz topic={topic} progress={progress} save={save} />
          </section>

          {topic.resources?.length > 0 && (
            <section>
              <h4 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono mb-3">Vertiefung</h4>
              <ul className="space-y-1.5">
                {topic.resources.map((r, i) => (
                  <li key={i}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-cyan-300 transition-colors group"
                    >
                      <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
