import { useState, useEffect, useRef } from 'react';
import { Check, X, Clock, ChevronLeft, ChevronRight, Lightbulb, RotateCcw, AlertCircle } from './Icons.jsx';
import { ProgressBar } from './ProgressBar.jsx';
import { AP1_TOPICS, AP2_PROZESS, AP2_DATEN, AP2_WISO } from '../data/index.js';
import { drawExamQuestions, scoreExam } from '../lib/exam.js';
import { questionId, recordAnswer } from '../lib/leitner.js';
import { withStudyActivity } from '../lib/streak.js';

const EXAM_CONFIGS = [
  {
    id: 'ap1', label: 'AP1 · Gesamtsimulation', count: 30, minutes: 45,
    topics: AP1_TOPICS,
    desc: '30 zufällige Fragen aus allen AP1-Themen. Wie in der echten Prüfung: keine Auswertung pro Frage.',
  },
  {
    id: 'ap2-prozess', label: 'AP2 · Prozessanalyse', count: 20, minutes: 30,
    topics: AP2_PROZESS,
    desc: '20 Fragen zu BPMN, EPK, Prozesserhebung, Kennzahlen und Optimierung.',
  },
  {
    id: 'ap2-daten', label: 'AP2 · Datenqualität', count: 20, minutes: 30,
    topics: AP2_DATEN,
    desc: '20 Fragen zu Datenqualität, ER-Modellierung, SQL, NoSQL, ETL und RAID.',
  },
  {
    id: 'ap2-wiso', label: 'AP2 · WiSo', count: 20, minutes: 30,
    topics: AP2_WISO,
    desc: '20 Fragen zu Arbeitsrecht, Sozialversicherung, Verträgen und Wirtschaft.',
  },
];

function formatTime(ms) {
  const totalSec = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function ExamView({ progress, save }) {
  const [exam, setExam] = useState(null); // { config, items, deadline }
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState({});
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(null);
  const [remaining, setRemaining] = useState(0);
  // Refs, damit der Timer-Effekt beim Ablauf den aktuellen Stand auswertet
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const progressRef = useRef(progress);
  progressRef.current = progress;

  const finishExam = (examState, finalAnswers) => {
    const r = scoreExam(examState.items, finalAnswers);
    // Falsch beantwortete Simulationsfragen fließen ins Leitner-System ein
    const p = progressRef.current;
    const questionStats = { ...p.questionStats };
    for (const w of r.wrong) {
      const qid = questionId(w.item.topicId, w.item.qIndex);
      questionStats[qid] = recordAnswer(questionStats[qid], false);
    }
    save(withStudyActivity({ ...p, questionStats }));
    setResult(r);
  };

  useEffect(() => {
    if (!exam || result) return;
    const tick = () => {
      const left = exam.deadline - Date.now();
      setRemaining(left);
      if (left <= 0) {
        finishExam(exam, answersRef.current);
      }
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, [exam, result]);

  const startExam = (config) => {
    const items = drawExamQuestions(config.topics, config.count);
    setExam({ config, items, deadline: Date.now() + config.minutes * 60 * 1000 });
    setAnswers({});
    setMarked({});
    setCurrent(0);
    setResult(null);
    setRemaining(config.minutes * 60 * 1000);
  };

  const resetAll = () => {
    setExam(null);
    setResult(null);
  };

  const header = (
    <header className="border-b border-zinc-800 pb-5">
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">Prüfungsmodus</p>
      <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 mb-2">Simulation</h2>
      <p className="text-zinc-400 max-w-3xl leading-relaxed text-sm">
        Wie in der echten IHK-Prüfung: feste Zeit, keine Sofort-Auswertung, Ergebnis erst am Ende.
        Bei Zeitablauf wird automatisch ausgewertet.
      </p>
    </header>
  );

  // ── Auswahl ───────────────────────────────────────────────────
  if (!exam) {
    return (
      <div className="space-y-8">
        {header}
        <div className="grid sm:grid-cols-2 gap-4">
          {EXAM_CONFIGS.map((c) => (
            <button
              key={c.id}
              onClick={() => startExam(c)}
              className="text-left border border-zinc-800 hover:border-cyan-700 bg-zinc-950/50 hover:bg-zinc-900/50 rounded-lg p-5 transition-all group"
            >
              <h3 className="font-serif text-lg text-zinc-100 group-hover:text-cyan-300 transition-colors mb-1">{c.label}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">{c.desc}</p>
              <div className="flex gap-4 font-mono text-xs text-cyan-400">
                <span>{c.count} Fragen</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.minutes} Min.</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Ergebnis ──────────────────────────────────────────────────
  if (result) {
    return (
      <div className="space-y-8">
        {header}

        <div className={`border rounded-lg p-6 sm:p-8 text-center space-y-3 ${
          result.passed ? 'border-emerald-800/60 bg-emerald-950/10' : 'border-red-800/60 bg-red-950/10'
        }`}>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">{exam.config.label}</p>
          <div className="font-serif text-4xl text-zinc-100">{result.pct} %</div>
          <p className="text-sm text-zinc-300">
            {result.correct} von {result.total} Fragen richtig
          </p>
          <div className={`inline-block px-4 py-2 rounded text-sm font-medium ${
            result.passed
              ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800'
              : 'bg-red-950/50 text-red-300 border border-red-800'
          }`}>
            {result.passed ? `Note ${result.grade} – bestanden` : 'Nicht bestanden (unter 50 %)'}
          </div>
          <p className="text-xs text-zinc-500">
            IHK-Schlüssel: ≥92 % Note 1 · ≥81 % Note 2 · ≥67 % Note 3 · ≥50 % Note 4
          </p>
        </div>

        <section>
          <h3 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono mb-3">Nach Themengebiet</h3>
          <div className="space-y-2">
            {Object.entries(result.byTopic).map(([id, t]) => (
              <div key={id} className="border border-zinc-800 bg-zinc-950/50 rounded-lg p-3 flex items-center gap-3">
                <span className="flex-1 text-sm text-zinc-300">{t.title}</span>
                <ProgressBar value={t.correct} max={t.total} className="max-w-[120px]" />
                <span className="font-mono text-xs text-zinc-500 w-12 text-right">{t.correct}/{t.total}</span>
              </div>
            ))}
          </div>
        </section>

        {result.wrong.length > 0 && (
          <section>
            <h3 className="text-xs uppercase tracking-[0.2em] text-amber-400 font-mono mb-3">
              Falsch beantwortete Fragen ({result.wrong.length})
            </h3>
            <p className="text-xs text-zinc-500 mb-4 flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              Diese Fragen sind jetzt im Wiederholen-Tab fällig.
            </p>
            <div className="space-y-4">
              {result.wrong.map(({ index, item, given }) => (
                <div key={index} className="border border-zinc-800 rounded-lg p-4 sm:p-5 bg-zinc-950/50">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">{item.topicTitle}</p>
                  <p className="text-zinc-100 font-medium mb-3">{item.question.q}</p>
                  <div className="space-y-1.5 text-sm">
                    {given !== undefined ? (
                      <p className="flex items-start gap-2 text-red-300">
                        <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>Deine Antwort: {item.question.options[given]}</span>
                      </p>
                    ) : (
                      <p className="flex items-start gap-2 text-zinc-500">
                        <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>Nicht beantwortet</span>
                      </p>
                    )}
                    <p className="flex items-start gap-2 text-emerald-300">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>Richtig: {item.question.options[item.question.correct]}</span>
                    </p>
                  </div>
                  <div className="mt-3 p-3 bg-zinc-900/80 border-l-2 border-cyan-500 rounded-r">
                    <div className="flex gap-2 text-xs text-cyan-400 font-mono mb-1 uppercase tracking-wider">
                      <Lightbulb className="w-3.5 h-3.5" /> Erklärung
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">{item.question.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <button
          onClick={resetAll}
          className="px-4 py-2 border border-zinc-700 hover:border-cyan-500 hover:text-cyan-300 text-zinc-400 text-sm rounded transition-colors inline-flex items-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Neue Simulation
        </button>
      </div>
    );
  }

  // ── Laufende Prüfung ──────────────────────────────────────────
  const item = exam.items[current];
  const q = item.question;
  const answeredCount = Object.keys(answers).length;
  const lowTime = remaining < 5 * 60 * 1000;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">{exam.config.label}</p>
          <p className="text-xs text-zinc-500">{answeredCount} / {exam.items.length} beantwortet</p>
        </div>
        <div className={`flex items-center gap-2 font-mono text-lg px-3 py-1.5 rounded border ${
          lowTime ? 'border-red-800 text-red-300 bg-red-950/30' : 'border-zinc-800 text-zinc-200 bg-zinc-950/60'
        }`}>
          <Clock className="w-4 h-4" />
          {formatTime(remaining)}
        </div>
      </div>

      {/* Fragen-Navigator */}
      <div className="flex flex-wrap gap-1.5">
        {exam.items.map((_, i) => {
          let style = 'border-zinc-800 text-zinc-500';
          if (answers[i] !== undefined) style = 'border-cyan-800 bg-cyan-950/40 text-cyan-300';
          if (marked[i]) style = 'border-amber-700 bg-amber-950/40 text-amber-300';
          if (i === current) style += ' ring-1 ring-cyan-400';
          return (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-8 h-8 border rounded font-mono text-xs transition-all ${style}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-950/50">
        <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
          <span className="text-cyan-400 font-mono text-sm">Frage {current + 1} / {exam.items.length}</span>
          <button
            onClick={() => setMarked((m) => ({ ...m, [current]: !m[current] }))}
            className={`px-3 py-1 text-xs rounded border font-mono uppercase tracking-wide transition-colors ${
              marked[current]
                ? 'border-amber-700 bg-amber-950/40 text-amber-300'
                : 'border-zinc-700 text-zinc-400 hover:border-amber-700 hover:text-amber-300'
            }`}
          >
            {marked[current] ? 'Markiert ●' : 'Frage markieren'}
          </button>
        </div>
        <p className="text-zinc-100 leading-relaxed font-medium mb-5">{q.q}</p>
        <div className="space-y-2">
          {item.optionOrder.map((oIndex, pos) => {
            const isSelected = answers[current] === oIndex;
            return (
              <button
                key={oIndex}
                onClick={() => setAnswers((a) => ({ ...a, [current]: oIndex }))}
                className={`w-full text-left px-3 sm:px-4 py-2.5 border rounded transition-all duration-200 flex items-center gap-3 ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-950/30 text-cyan-100'
                    : 'border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 cursor-pointer'
                }`}
              >
                <span className="font-mono text-xs opacity-60 w-4">{String.fromCharCode(65 + pos)}</span>
                <span className="flex-1 text-sm">{q.options[oIndex]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="px-3 py-2 border border-zinc-700 hover:border-cyan-500 hover:text-cyan-300 disabled:opacity-40 disabled:hover:border-zinc-700 disabled:hover:text-zinc-400 text-zinc-400 text-sm rounded transition-colors flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Zurück
          </button>
          <button
            onClick={() => setCurrent((c) => Math.min(exam.items.length - 1, c + 1))}
            disabled={current === exam.items.length - 1}
            className="px-3 py-2 border border-zinc-700 hover:border-cyan-500 hover:text-cyan-300 disabled:opacity-40 disabled:hover:border-zinc-700 disabled:hover:text-zinc-400 text-zinc-400 text-sm rounded transition-colors flex items-center gap-1"
          >
            Weiter <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => {
            if (answeredCount < exam.items.length && !confirm(`Es sind erst ${answeredCount} von ${exam.items.length} Fragen beantwortet. Trotzdem abgeben?`)) return;
            finishExam(exam, answers);
          }}
          className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-medium rounded transition-colors text-sm tracking-wide"
        >
          Abgeben & auswerten
        </button>
      </div>
    </div>
  );
}
