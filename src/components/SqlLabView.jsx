import { useState, useEffect, useRef } from 'react';
import { Check, X, Lightbulb, Database, RotateCcw, ChevronRight } from './Icons.jsx';
import { SQL_EXERCISES, resultsEqual, solutionIsOrdered } from '../lib/sqlLab.js';

const DIFFICULTY = { 1: 'Leicht', 2: 'Mittel', 3: 'Schwer' };

function ResultTable({ result }) {
  if (!result || result.columns.length === 0) {
    return <p className="text-xs text-zinc-500 font-mono">Abfrage ausgeführt – keine Ergebniszeilen.</p>;
  }
  const rows = result.values.slice(0, 100);
  return (
    <div className="overflow-x-auto border border-zinc-800 rounded">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-900/80">
            {result.columns.map((c, i) => (
              <th key={i} className="text-left px-3 py-2 font-mono text-xs text-cyan-400 uppercase tracking-wider whitespace-nowrap">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-t border-zinc-800/60">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-3 py-1.5 whitespace-nowrap ${cell === null ? 'text-zinc-600 italic' : 'text-zinc-300'}`}>
                  {cell === null ? 'NULL' : String(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {result.values.length > 100 && (
        <p className="px-3 py-2 text-xs text-zinc-500 font-mono border-t border-zinc-800">… {result.values.length - 100} weitere Zeilen ausgeblendet</p>
      )}
    </div>
  );
}

export function SqlLabView() {
  const [engine, setEngine] = useState(null); // Modul nach Lazy Load
  const [loadError, setLoadError] = useState(null);
  const [mode, setMode] = useState('exercises'); // 'exercises' | 'free'
  const [exerciseIdx, setExerciseIdx] = useState(0);
  const [sqlInput, setSqlInput] = useState('');
  const [output, setOutput] = useState(null); // { ok, result?, error?, verdict? }
  const [showSolution, setShowSolution] = useState(false);
  const [solved, setSolved] = useState({});
  const freeDbRef = useRef(null);

  // sql.js (WASM) erst laden, wenn der Tab geöffnet wird
  useEffect(() => {
    let cancelled = false;
    import('../lib/sqlEngine.js')
      .then(async (mod) => {
        await mod.loadSql();
        if (!cancelled) setEngine(mod);
      })
      .catch((e) => { if (!cancelled) setLoadError(e.message); });
    return () => { cancelled = true; };
  }, []);

  const exercise = SQL_EXERCISES[exerciseIdx];

  const selectExercise = (idx) => {
    setExerciseIdx(idx);
    setSqlInput('');
    setOutput(null);
    setShowSolution(false);
  };

  const runExercise = async () => {
    if (!engine || sqlInput.trim() === '') return;
    // Frische DB pro Lauf: macht die Übung robust gegen UPDATE/DELETE
    const db = await engine.createDatabase();
    try {
      const userRes = engine.runQuery(db, sqlInput);
      if (!userRes.ok) {
        setOutput({ ok: false, error: userRes.error });
        return;
      }
      const expectedDb = await engine.createDatabase();
      try {
        const expected = engine.runQuery(expectedDb, exercise.solution);
        const correct = resultsEqual(userRes.result, expected.result, {
          ordered: solutionIsOrdered(exercise.solution),
        });
        setOutput({ ok: true, result: userRes.result, verdict: correct });
        if (correct) setSolved((s) => ({ ...s, [exercise.id]: true }));
      } finally {
        expectedDb.close();
      }
    } finally {
      db.close();
    }
  };

  const runFree = async () => {
    if (!engine || sqlInput.trim() === '') return;
    if (!freeDbRef.current) {
      freeDbRef.current = await engine.createDatabase();
    }
    const res = engine.runQuery(freeDbRef.current, sqlInput);
    setOutput(res.ok ? { ok: true, result: res.result } : { ok: false, error: res.error });
  };

  const resetFreeDb = () => {
    if (freeDbRef.current) {
      freeDbRef.current.close();
      freeDbRef.current = null;
    }
    setOutput(null);
  };

  const header = (
    <header className="border-b border-zinc-800 pb-5">
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">Praxis</p>
      <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 mb-2">SQL-Lab</h2>
      <p className="text-zinc-400 max-w-3xl leading-relaxed text-sm">
        Echte SQL-Abfragen gegen eine Energieversorger-Datenbank (SQLite via WebAssembly, läuft komplett in
        deinem Browser). Tabellen: <span className="font-mono text-cyan-300 text-xs">kunden, vertraege, zaehler, verbrauch, rechnungen</span> –
        inklusive NULL-Werten und Dubletten für Datenqualitäts-Aufgaben.
      </p>
    </header>
  );

  if (loadError) {
    return (
      <div className="space-y-8">
        {header}
        <p className="text-sm text-red-300">SQL-Engine konnte nicht geladen werden: {loadError}</p>
      </div>
    );
  }

  if (!engine) {
    return (
      <div className="space-y-8">
        {header}
        <div className="flex items-center gap-3 text-zinc-500 font-mono text-sm">
          <Database className="w-4 h-4 animate-pulse text-cyan-400" /> SQL-Engine wird geladen …
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {header}

      <div className="flex gap-1.5">
        {[['exercises', 'Aufgaben'], ['free', 'Freier Modus']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => { setMode(id); setOutput(null); setSqlInput(''); setShowSolution(false); }}
            className={`px-3 py-1.5 text-xs rounded border font-mono uppercase tracking-wide transition-colors ${
              mode === id
                ? 'bg-cyan-500/10 text-cyan-300 border-cyan-800/60'
                : 'text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {mode === 'exercises' && (
        <>
          <div className="flex flex-wrap gap-1.5">
            {SQL_EXERCISES.map((ex, i) => (
              <button
                key={ex.id}
                onClick={() => selectExercise(i)}
                title={ex.title}
                className={`w-8 h-8 border rounded font-mono text-xs transition-all ${
                  solved[ex.id]
                    ? 'border-emerald-800 bg-emerald-950/40 text-emerald-300'
                    : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
                } ${i === exerciseIdx ? 'ring-1 ring-cyan-400' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-950/50 space-y-4">
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <h3 className="font-serif text-lg text-zinc-100">
                {exerciseIdx + 1}. {exercise.title}
                {solved[exercise.id] && <span className="ml-2 text-xs font-mono uppercase text-emerald-400">✓ gelöst</span>}
              </h3>
              <span className={`font-mono text-xs uppercase tracking-wider ${
                exercise.difficulty === 1 ? 'text-emerald-400' : exercise.difficulty === 2 ? 'text-amber-400' : 'text-red-400'
              }`}>
                {DIFFICULTY[exercise.difficulty]}
              </span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{exercise.prompt}</p>

            <textarea
              value={sqlInput}
              onChange={(e) => setSqlInput(e.target.value)}
              rows={5}
              spellCheck={false}
              placeholder="SELECT …"
              className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-700 focus:border-cyan-500 focus:outline-none rounded text-sm text-zinc-100 font-mono resize-y"
            />

            <div className="flex flex-wrap gap-3">
              <button
                onClick={runExercise}
                disabled={sqlInput.trim() === ''}
                className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium rounded transition-colors text-sm tracking-wide"
              >
                Ausführen & prüfen
              </button>
              <button
                onClick={() => setShowSolution((s) => !s)}
                className="px-4 py-2 border border-zinc-700 hover:border-cyan-500 hover:text-cyan-300 text-zinc-400 text-sm rounded transition-colors"
              >
                {showSolution ? 'Musterlösung verbergen' : 'Musterlösung anzeigen'}
              </button>
              {exerciseIdx < SQL_EXERCISES.length - 1 && (
                <button
                  onClick={() => selectExercise(exerciseIdx + 1)}
                  className="px-4 py-2 border border-zinc-700 hover:border-cyan-500 hover:text-cyan-300 text-zinc-400 text-sm rounded transition-colors flex items-center gap-1"
                >
                  Nächste Aufgabe <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {showSolution && (
              <div className="p-3 bg-zinc-900/80 border-l-2 border-amber-500 rounded-r">
                <div className="flex gap-2 text-xs text-amber-400 font-mono mb-1 uppercase tracking-wider">
                  <Lightbulb className="w-3.5 h-3.5" /> Musterlösung
                </div>
                <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{exercise.solution}</pre>
              </div>
            )}

            {output && !output.ok && (
              <div className="flex items-start gap-2 px-4 py-3 rounded text-sm bg-red-950/50 text-red-300 border border-red-800">
                <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="font-mono text-xs">{output.error}</span>
              </div>
            )}

            {output && output.ok && (
              <div className="space-y-3">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium ${
                  output.verdict
                    ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800'
                    : 'bg-amber-950/50 text-amber-300 border border-amber-800'
                }`}>
                  {output.verdict ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  {output.verdict
                    ? 'Richtig – Ergebnis stimmt mit der Musterlösung überein!'
                    : 'Das Ergebnis weicht von der Musterlösung ab.'}
                </div>
                <ResultTable result={output.result} />
              </div>
            )}
          </div>
        </>
      )}

      {mode === 'free' && (
        <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-950/50 space-y-4">
          <p className="text-sm text-zinc-400 leading-relaxed">
            Beliebige Abfragen gegen die Beispieldatenbank – auch INSERT, UPDATE und DELETE.
            Änderungen bleiben erhalten, bis du die Datenbank zurücksetzt.
          </p>
          <textarea
            value={sqlInput}
            onChange={(e) => setSqlInput(e.target.value)}
            rows={6}
            spellCheck={false}
            placeholder={'SELECT * FROM kunden;\n-- Tabellen: kunden, vertraege, zaehler, verbrauch, rechnungen'}
            className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-700 focus:border-cyan-500 focus:outline-none rounded text-sm text-zinc-100 font-mono resize-y"
          />
          <div className="flex flex-wrap gap-3">
            <button
              onClick={runFree}
              disabled={sqlInput.trim() === ''}
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium rounded transition-colors text-sm tracking-wide"
            >
              Ausführen
            </button>
            <button
              onClick={resetFreeDb}
              className="px-4 py-2 border border-zinc-700 hover:border-cyan-500 hover:text-cyan-300 text-zinc-400 text-sm rounded transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Datenbank zurücksetzen
            </button>
          </div>

          {output && !output.ok && (
            <div className="flex items-start gap-2 px-4 py-3 rounded text-sm bg-red-950/50 text-red-300 border border-red-800">
              <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="font-mono text-xs">{output.error}</span>
            </div>
          )}
          {output && output.ok && <ResultTable result={output.result} />}
        </div>
      )}
    </div>
  );
}
