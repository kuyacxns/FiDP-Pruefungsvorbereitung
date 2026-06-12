import { useState, useEffect } from 'react';
import { Check, X, Lightbulb, RotateCcw } from './Icons.jsx';
import { buildShuffledQuizView } from '../lib/shuffle.js';
import { applyQuizAnswers } from '../lib/leitner.js';
import { withStudyActivity } from '../lib/streak.js';

export function Quiz({ topic, progress, save }) {
  const stored = progress.quizAnswers[topic.id] || {};
  // answers ist immer mit Original-Frage-Index → Original-Options-Index belegt,
  // unabhängig von der gemischten Darstellungsreihenfolge.
  const [answers, setAnswers] = useState(stored);
  const [submitted, setSubmitted] = useState(Object.keys(stored).length === topic.quiz.length);
  const [view, setView] = useState(() => buildShuffledQuizView(topic.quiz));

  useEffect(() => {
    const s = progress.quizAnswers[topic.id] || {};
    setAnswers(s);
    setSubmitted(Object.keys(s).length === topic.quiz.length);
    setView(buildShuffledQuizView(topic.quiz));
  }, [topic.id]);

  const handleSelect = (qIndex, oIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: oIndex }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== topic.quiz.length) return;
    setSubmitted(true);
    const correctCount = topic.quiz.reduce(
      (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0
    );
    const passed = correctCount === topic.quiz.length;
    // passedTopics merkt sich jedes bestandene Thema dauerhaft, damit
    // totalQuizzesPassed pro Thema höchstens einmal zählt.
    const passedTopics = passed
      ? { ...progress.passedTopics, [topic.id]: true }
      : progress.passedTopics;
    save(withStudyActivity({
      ...progress,
      quizAnswers: { ...progress.quizAnswers, [topic.id]: answers },
      questionStats: applyQuizAnswers(progress.questionStats, topic.id, topic.quiz, answers),
      completedTopics: {
        ...progress.completedTopics,
        [topic.id]: {
          correctCount,
          totalQuestions: topic.quiz.length,
          completed: passed,
        },
      },
      passedTopics,
      totalQuizzesPassed: Object.keys(passedTopics).length,
    }));
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setView(buildShuffledQuizView(topic.quiz));
    save({
      ...progress,
      quizAnswers: { ...progress.quizAnswers, [topic.id]: {} },
      completedTopics: { ...progress.completedTopics, [topic.id]: undefined },
    });
  };

  const correctCount = topic.quiz.reduce(
    (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0
  );

  return (
    <div className="space-y-6">
      {view.map((v, pos) => {
        const selected = answers[v.qIndex];
        return (
          <div key={v.qIndex} className="border border-zinc-800 rounded-lg p-4 sm:p-5 bg-zinc-950/50">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-cyan-400 font-mono text-sm pt-0.5">{String(pos + 1).padStart(2, '0')}</span>
              <p className="text-zinc-100 leading-relaxed font-medium flex-1">{v.q}</p>
            </div>
            <div className="space-y-2 sm:ml-8">
              {v.options.map((opt, optPos) => {
                const isSelected = selected === opt.oIndex;
                const isCorrect = opt.oIndex === v.correct;
                let style = 'border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 cursor-pointer';
                if (submitted) {
                  if (isCorrect) style = 'border-emerald-700 bg-emerald-950/40 text-emerald-100';
                  else if (isSelected) style = 'border-red-700 bg-red-950/40 text-red-100';
                  else style = 'border-zinc-800 text-zinc-500';
                } else if (isSelected) {
                  style = 'border-cyan-500 bg-cyan-950/30 text-cyan-100';
                }
                return (
                  <button
                    key={opt.oIndex}
                    onClick={() => handleSelect(v.qIndex, opt.oIndex)}
                    disabled={submitted}
                    className={`w-full text-left px-3 sm:px-4 py-2.5 border rounded transition-all duration-200 flex items-center gap-3 ${style}`}
                  >
                    <span className="font-mono text-xs opacity-60 w-4">{String.fromCharCode(65 + optPos)}</span>
                    <span className="flex-1 text-sm">{opt.text}</span>
                    {submitted && isCorrect && <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                    {submitted && isSelected && !isCorrect && <X className="w-4 h-4 text-red-400 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-4 sm:ml-8 p-3 bg-zinc-900/80 border-l-2 border-cyan-500 rounded-r">
                <div className="flex gap-2 text-xs text-cyan-400 font-mono mb-1 uppercase tracking-wider">
                  <Lightbulb className="w-3.5 h-3.5" /> Erklärung
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">{v.explanation}</p>
              </div>
            )}
          </div>
        );
      })}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== topic.quiz.length}
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium rounded transition-colors text-sm tracking-wide"
          >
            Auswerten ({Object.keys(answers).length}/{topic.quiz.length})
          </button>
        ) : (
          <>
            <div className={`px-4 py-2 rounded text-sm font-medium ${
              correctCount === topic.quiz.length
                ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800'
                : 'bg-amber-950/50 text-amber-300 border border-amber-800'
            }`}>
              {correctCount} von {topic.quiz.length} richtig
              {correctCount === topic.quiz.length && ' – Thema gemeistert!'}
            </div>
            <button
              onClick={handleRetry}
              className="px-4 py-2 border border-zinc-700 hover:border-cyan-500 hover:text-cyan-300 text-zinc-400 text-sm rounded transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Erneut versuchen
            </button>
          </>
        )}
      </div>
    </div>
  );
}
