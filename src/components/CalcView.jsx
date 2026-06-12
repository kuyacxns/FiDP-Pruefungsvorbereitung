import { useState } from 'react';
import { Check, X, Lightbulb, ChevronRight } from './Icons.jsx';
import { TASK_CATEGORIES, generateTask, checkAnswer } from '../lib/calcTasks.js';

export function CalcView() {
  const [category, setCategory] = useState('all');
  const [task, setTask] = useState(() => generateTask('all'));
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(null); // null | true | false
  const [stats, setStats] = useState({ correct: 0, total: 0 });

  const newTask = (cat = category) => {
    setTask(generateTask(cat));
    setInput('');
    setChecked(null);
  };

  const selectCategory = (cat) => {
    setCategory(cat);
    newTask(cat);
  };

  const handleCheck = () => {
    if (checked !== null || input.trim() === '') return;
    const ok = checkAnswer(task, input);
    setChecked(ok);
    setStats((s) => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
  };

  return (
    <div className="space-y-6">
      <header className="border-b border-zinc-800 pb-5">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">Aufgaben-Generator</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 mb-2">Rechnen</h2>
        <p className="text-zinc-400 max-w-3xl leading-relaxed text-sm">
          Generierte Rechenaufgaben mit Zufallszahlen – die Klassiker aus AP1 und AP2.
          Kein Multiple Choice: rechne selbst und tippe das Ergebnis ein. Dezimalzahlen mit Komma oder Punkt,
          kleine Rundungsabweichungen werden akzeptiert.
        </p>
      </header>

      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => selectCategory('all')}
          className={`px-3 py-1.5 text-xs rounded border font-mono uppercase tracking-wide transition-colors ${
            category === 'all'
              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-800/60'
              : 'text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-600'
          }`}
        >
          Gemischt
        </button>
        {TASK_CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => selectCategory(c.id)}
            className={`px-3 py-1.5 text-xs rounded border font-mono uppercase tracking-wide transition-colors ${
              category === c.id
                ? 'bg-cyan-500/10 text-cyan-300 border-cyan-800/60'
                : 'text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-600'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {stats.total > 0 && (
        <p className="font-mono text-xs text-zinc-500">
          Diese Session: {stats.correct} / {stats.total} richtig
        </p>
      )}

      <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-950/50 space-y-5">
        <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">{task.category}</p>
        <p className="text-zinc-100 leading-relaxed font-medium">{task.question}</p>

        <form
          onSubmit={(e) => { e.preventDefault(); handleCheck(); }}
          className="flex flex-wrap items-center gap-3"
        >
          <input
            type="text"
            inputMode={task.inputType === 'number' ? 'decimal' : 'text'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={checked !== null}
            placeholder={task.inputType === 'number' ? 'Ergebnis …' : 'z. B. 192.168.1.0'}
            className="flex-1 min-w-[160px] max-w-xs px-3 py-2.5 bg-zinc-900 border border-zinc-700 focus:border-cyan-500 focus:outline-none rounded text-sm text-zinc-100 font-mono disabled:opacity-60"
          />
          {task.unit && <span className="text-sm text-zinc-400 font-mono">{task.unit}</span>}
          {checked === null ? (
            <button
              type="submit"
              disabled={input.trim() === ''}
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium rounded transition-colors text-sm tracking-wide"
            >
              Prüfen
            </button>
          ) : (
            <button
              type="button"
              onClick={() => newTask()}
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-medium rounded transition-colors text-sm tracking-wide flex items-center gap-1"
            >
              Nächste Aufgabe <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </form>

        {checked !== null && (
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium ${
              checked
                ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800'
                : 'bg-red-950/50 text-red-300 border border-red-800'
            }`}>
              {checked ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
              {checked
                ? 'Richtig!'
                : `Leider falsch – richtige Antwort: ${typeof task.answer === 'number' ? task.answer.toLocaleString('de-DE') : task.answer}${task.unit ? ` ${task.unit}` : ''}`}
            </div>

            <div className="p-3 bg-zinc-900/80 border-l-2 border-cyan-500 rounded-r">
              <div className="flex gap-2 text-xs text-cyan-400 font-mono mb-2 uppercase tracking-wider">
                <Lightbulb className="w-3.5 h-3.5" /> Rechenweg
              </div>
              <ol className="space-y-1.5">
                {task.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                    <span className="text-cyan-500/60 font-mono text-xs pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
