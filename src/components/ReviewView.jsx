import { useState } from 'react';
import { Check, X, Lightbulb, RotateCcw, Zap } from './Icons.jsx';
import { ProgressBar } from './ProgressBar.jsx';
import { ALL_TOPICS } from '../data/index.js';
import { getDueQuestions, questionId, recordAnswer } from '../lib/leitner.js';
import { shuffle } from '../lib/shuffle.js';

export function ReviewView({ progress, save }) {
  // Session-Queue: einmal beim Start aus den fälligen Fragen gemischt.
  const [queue, setQueue] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [optionOrder, setOptionOrder] = useState(null);
  const [results, setResults] = useState([]);

  const dueNow = getDueQuestions(progress.questionStats, ALL_TOPICS);

  const startSession = () => {
    const q = shuffle(dueNow);
    setQueue(q);
    setCurrent(0);
    setSelected(null);
    setOptionOrder(shuffle(q[0].question.options.map((_, i) => i)));
    setResults([]);
  };

  const handleSelect = (oIndex) => {
    if (selected !== null) return;
    setSelected(oIndex);
    const item = queue[current];
    const isCorrect = oIndex === item.question.correct;
    const qid = questionId(item.topicId, item.qIndex);
    save({
      ...progress,
      questionStats: {
        ...progress.questionStats,
        [qid]: recordAnswer(progress.questionStats[qid], isCorrect),
      },
      lastStudyDate: new Date().toISOString(),
    });
    setResults((r) => [...r, isCorrect]);
  };

  const handleNext = () => {
    const next = current + 1;
    setCurrent(next);
    setSelected(null);
    if (next < queue.length) {
      setOptionOrder(shuffle(queue[next].question.options.map((_, i) => i)));
    }
  };

  const header = (
    <header className="border-b border-zinc-800 pb-5">
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">Spaced Repetition</p>
      <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 mb-2">Wiederholen</h2>
      <p className="text-zinc-400 max-w-3xl leading-relaxed text-sm">
        Fragen, die du schon einmal beantwortet hast, werden nach dem Leitner-System wiederholt:
        richtig beantwortet → längeres Intervall (1, 3, 7, 14 Tage), falsch beantwortet → zurück an den Anfang.
        So übst du genau das, was du noch nicht sicher kannst.
      </p>
    </header>
  );

  // Noch keine Session gestartet
  if (queue === null) {
    return (
      <div className="space-y-8">
        {header}
        <div className="border border-zinc-800 bg-zinc-950/60 rounded-lg p-6 sm:p-8 text-center space-y-4">
          <Zap className="w-8 h-8 text-cyan-400 mx-auto" />
          <div className="font-serif text-3xl text-zinc-100">{dueNow.length}</div>
          <p className="text-sm text-zinc-400">
            {dueNow.length === 1 ? 'Frage ist' : 'Fragen sind'} aktuell fällig.
          </p>
          {dueNow.length > 0 ? (
            <button
              onClick={startSession}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-medium rounded transition-colors text-sm tracking-wide"
            >
              Wiederholung starten
            </button>
          ) : (
            <p className="text-xs text-zinc-500 max-w-md mx-auto">
              Nichts zu tun – beantworte zuerst Quizfragen in den Themenbereichen.
              Falsch beantwortete Fragen tauchen hier automatisch wieder auf.
            </p>
          )}
        </div>
      </div>
    );
  }

  // Session beendet → Zusammenfassung
  if (current >= queue.length) {
    const correctCount = results.filter(Boolean).length;
    const pct = queue.length > 0 ? Math.round((correctCount / queue.length) * 100) : 0;
    return (
      <div className="space-y-8">
        {header}
        <div className="border border-zinc-800 bg-zinc-950/60 rounded-lg p-6 sm:p-8 text-center space-y-4">
          <div className="font-serif text-3xl text-zinc-100">{correctCount} / {queue.length}</div>
          <p className="text-sm text-zinc-400">richtig beantwortet ({pct} %)</p>
          <ProgressBar value={correctCount} max={queue.length} className="max-w-xs mx-auto" />
          <p className="text-xs text-zinc-500 max-w-md mx-auto">
            {pct >= 80
              ? 'Stark! Die Fragen rücken in höhere Boxen und kommen seltener wieder.'
              : 'Falsch beantwortete Fragen landen zurück in Box 1 und sind sofort wieder fällig.'}
          </p>
          <button
            onClick={() => setQueue(null)}
            className="px-4 py-2 border border-zinc-700 hover:border-cyan-500 hover:text-cyan-300 text-zinc-400 text-sm rounded transition-colors inline-flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Zur Übersicht
          </button>
        </div>
      </div>
    );
  }

  // Laufende Session: eine Frage pro Bildschirm
  const item = queue[current];
  const q = item.question;

  return (
    <div className="space-y-6">
      {header}

      <div className="flex items-center gap-3">
        <ProgressBar value={current + (selected !== null ? 1 : 0)} max={queue.length} className="max-w-xs" />
        <span className="font-mono text-xs text-zinc-500">{current + 1} / {queue.length}</span>
      </div>

      <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-950/50">
        <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-3">{item.topicTitle}</p>
        <p className="text-zinc-100 leading-relaxed font-medium mb-5">{q.q}</p>
        <div className="space-y-2">
          {optionOrder.map((oIndex, pos) => {
            const isSelected = selected === oIndex;
            const isCorrect = oIndex === q.correct;
            let style = 'border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 cursor-pointer';
            if (selected !== null) {
              if (isCorrect) style = 'border-emerald-700 bg-emerald-950/40 text-emerald-100';
              else if (isSelected) style = 'border-red-700 bg-red-950/40 text-red-100';
              else style = 'border-zinc-800 text-zinc-500';
            }
            return (
              <button
                key={oIndex}
                onClick={() => handleSelect(oIndex)}
                disabled={selected !== null}
                className={`w-full text-left px-3 sm:px-4 py-2.5 border rounded transition-all duration-200 flex items-center gap-3 ${style}`}
              >
                <span className="font-mono text-xs opacity-60 w-4">{String.fromCharCode(65 + pos)}</span>
                <span className="flex-1 text-sm">{q.options[oIndex]}</span>
                {selected !== null && isCorrect && <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                {selected !== null && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="mt-4 p-3 bg-zinc-900/80 border-l-2 border-cyan-500 rounded-r">
            <div className="flex gap-2 text-xs text-cyan-400 font-mono mb-1 uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5" /> Erklärung
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{q.explanation}</p>
          </div>
        )}
      </div>

      {selected !== null && (
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-medium rounded transition-colors text-sm tracking-wide"
        >
          {current + 1 < queue.length ? 'Nächste Frage' : 'Zusammenfassung'}
        </button>
      )}
    </div>
  );
}
