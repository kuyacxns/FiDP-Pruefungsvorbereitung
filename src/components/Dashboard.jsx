import { useRef } from 'react';
import { ProgressBar } from './ProgressBar.jsx';
import { Trophy, Target, Zap, Award, Clock, AlertCircle, RotateCcw, Flame, Download, Upload } from './Icons.jsx';
import { ALL_TOPICS } from '../data/index.js';
import { getDueQuestions } from '../lib/leitner.js';
import { serializeProgress, parseImportedProgress } from '../lib/exportImport.js';

export function Dashboard({ progress, save, reset, totalTopics, onJumpTo }) {
  const dueCount = getDueQuestions(progress.questionStats, ALL_TOPICS).length;
  const fileInputRef = useRef(null);

  const handleExport = () => {
    const blob = new Blob([serializeProgress(progress)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fidp-fortschritt-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const res = parseImportedProgress(await file.text(), ALL_TOPICS);
    if (res.ok) {
      save(res.progress);
      alert('Fortschritt erfolgreich importiert.');
    } else {
      alert(`Import fehlgeschlagen: ${res.error}`);
    }
  };
  const completed = Object.values(progress.completedTopics).filter(t => t?.completed).length;
  const attempted = Object.values(progress.completedTopics).filter(t => t).length;
  const totalPoints = Object.values(progress.completedTopics).reduce(
    (a, b) => a + (b?.correctCount || 0), 0
  );
  const totalQuestions = Object.values(progress.completedTopics).reduce(
    (a, b) => a + (b?.totalQuestions || 0), 0
  );
  const accuracy = totalQuestions > 0 ? Math.round((totalPoints / totalQuestions) * 100) : 0;

  const stats = [
    { label: 'Themen gemeistert', value: `${completed} / ${totalTopics}`, icon: Trophy, color: 'text-emerald-400' },
    { label: 'Themen begonnen', value: attempted, icon: Target, color: 'text-cyan-400' },
    { label: 'Trefferquote', value: `${accuracy}%`, icon: Zap, color: 'text-amber-400' },
    { label: 'Quizzes bestanden', value: progress.totalQuizzesPassed, icon: Award, color: 'text-fuchsia-400' },
    { label: 'Tage-Streak', value: progress.studyStreakDays, icon: Flame, color: 'text-orange-400' },
  ];

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-3">Übersicht</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 mb-2 leading-tight">
          Willkommen zurück.
        </h2>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
          Dein persönlicher Prüfungs-Trainer für die <span className="text-cyan-300">Fachinformatiker:in für Daten- und Prozessanalyse</span> – ausgerichtet auf den Prüfungskatalog 2025/2026.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="border border-zinc-800 bg-zinc-950/60 rounded-lg p-3 sm:p-4">
              <Icon className={`w-5 h-5 ${s.color} mb-3`} />
              <div className="font-serif text-xl sm:text-2xl text-zinc-100 mb-0.5">{s.value}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500">{s.label}</div>
            </div>
          );
        })}
      </div>

      <ProgressBar value={completed} max={totalTopics} />

      {dueCount > 0 && (
        <button
          onClick={() => onJumpTo('review')}
          className="w-full text-left border border-cyan-800/60 bg-gradient-to-br from-cyan-950/40 to-zinc-950 hover:from-cyan-950/60 rounded-lg p-4 sm:p-5 flex items-center gap-4 transition-all group"
        >
          <div className="p-2.5 rounded-md bg-cyan-900/40 text-cyan-300 flex-shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="font-serif text-lg text-zinc-100 group-hover:text-cyan-200 transition-colors">
              {dueCount} {dueCount === 1 ? 'Frage' : 'Fragen'} fällig
            </div>
            <div className="text-xs text-zinc-400">
              Wiederholung nach dem Leitner-System – übe gezielt deine Schwächen.
            </div>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">Wiederholen →</span>
        </button>
      )}

      <section className="grid md:grid-cols-2 gap-4">
        <div className="border border-zinc-800 rounded-lg p-5 bg-gradient-to-br from-cyan-950/30 to-zinc-950">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <h3 className="font-serif text-lg text-zinc-100">Deine Prüfungstermine</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider">AP1</div>
              <div className="text-zinc-200">Voraussichtlich Herbst 2026</div>
              <div className="text-xs text-zinc-500">90 Min. schriftlich · 20 % Gesamtnote</div>
            </div>
            <div>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider">AP2</div>
              <div className="text-zinc-200">Voraussichtlich Frühjahr/Sommer 2027</div>
              <div className="text-xs text-zinc-500">3× schriftlich (Prozess, Daten, WiSo) + Projekt</div>
            </div>
            <p className="text-xs text-zinc-500 pt-2 border-t border-zinc-800">
              Genaue Termine über deinen Ausbilder oder die IHK Hamburg verifizieren.
            </p>
          </div>
        </div>

        <div className="border border-zinc-800 rounded-lg p-5 bg-gradient-to-br from-fuchsia-950/20 to-zinc-950">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <h3 className="font-serif text-lg text-zinc-100">Aktuelle Empfehlung</h3>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed mb-3">
            Du bist in Monat 8 deiner Ausbildung – Fokus diese Phase: <strong className="text-cyan-300">AP1-Themen</strong> systematisch durchgehen. Beginne mit Projektmanagement und Wirtschaftlichkeit.
          </p>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => onJumpTo('ap1')} className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-700/50 hover:bg-cyan-500/20 text-cyan-300 text-xs rounded font-mono tracking-wide uppercase">
              Zur AP1
            </button>
            <button onClick={() => onJumpTo('plan')} className="px-3 py-1.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-xs rounded font-mono tracking-wide uppercase">
              Lernplan ansehen
            </button>
          </div>
        </div>
      </section>

      <div className="border-t border-zinc-800 pt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          onClick={handleExport}
          className="text-xs text-zinc-500 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
        >
          <Download className="w-3 h-3" /> Fortschritt exportieren (JSON)
        </button>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-xs text-zinc-500 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
        >
          <Upload className="w-3 h-3" /> Fortschritt importieren
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json,.json"
          onChange={handleImportFile}
          className="hidden"
        />
        <button
          onClick={() => { if (confirm('Wirklich allen Fortschritt zurücksetzen?')) reset(); }}
          className="text-xs text-zinc-600 hover:text-red-400 transition-colors flex items-center gap-1.5"
        >
          <RotateCcw className="w-3 h-3" /> Fortschritt zurücksetzen
        </button>
      </div>
    </div>
  );
}
