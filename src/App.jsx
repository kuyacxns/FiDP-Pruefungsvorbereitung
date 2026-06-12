import { useState } from 'react';
import { AP1_TOPICS, AP2_PROZESS, AP2_DATEN, AP2_WISO, AP2_PROJEKT } from './data/index.js';
import { useProgress } from './lib/useProgress.js';
import { Dashboard } from './components/Dashboard.jsx';
import { SectionView } from './components/SectionView.jsx';
import { LearningPlanView } from './components/LearningPlanView.jsx';
import { ResourcesView } from './components/ResourcesView.jsx';
import { ReviewView } from './components/ReviewView.jsx';
import { ExamView } from './components/ExamView.jsx';

const TABS = [
  { id: 'home', label: 'Start' },
  { id: 'review', label: 'Wiederholen' },
  { id: 'simulation', label: 'Simulation' },
  { id: 'plan', label: 'Lernplan' },
  { id: 'ap1', label: 'AP1' },
  { id: 'ap2-prozess', label: 'AP2 · Prozesse' },
  { id: 'ap2-daten', label: 'AP2 · Daten' },
  { id: 'ap2-wiso', label: 'AP2 · WiSo' },
  { id: 'ap2-projekt', label: 'AP2 · Projekt' },
  { id: 'quellen', label: 'Quellen' },
];

export default function App() {
  const [tab, setTab] = useState('home');
  const { progress, save, reset } = useProgress();

  const totalTopics = AP1_TOPICS.length + AP2_PROZESS.length + AP2_DATEN.length + AP2_WISO.length + AP2_PROJEKT.length;

  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-100"
      style={{
        backgroundImage: 'radial-gradient(circle at 15% -10%, rgba(34, 211, 238, 0.08), transparent 50%), radial-gradient(circle at 85% 110%, rgba(217, 70, 239, 0.05), transparent 50%)'
      }}
    >
      <header className="border-b border-zinc-800 sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-serif font-bold text-zinc-950 text-lg">
              F
            </div>
            <div>
              <div className="font-serif text-lg leading-tight text-zinc-100">FIDP Prüfungs-Trainer</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-400/80">Daten- und Prozessanalyse · 2025/26</div>
            </div>
          </div>
          <div className="hidden md:block text-xs font-mono text-zinc-500">
            Vattenfall ESH · Hamburg
          </div>
        </div>

        <nav className="max-w-6xl mx-auto px-4 sm:px-6 -mt-1 overflow-x-auto">
          <div className="flex gap-1 pb-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-3 py-1.5 text-sm rounded transition-all whitespace-nowrap font-medium tracking-wide ${
                  tab === t.id
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-800/60'
                    : 'text-zinc-400 border border-transparent hover:text-zinc-200 hover:border-zinc-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {tab === 'home' && <Dashboard progress={progress} reset={reset} totalTopics={totalTopics} onJumpTo={setTab} />}
        {tab === 'review' && <ReviewView progress={progress} save={save} />}
        {tab === 'simulation' && <ExamView progress={progress} save={save} />}
        {tab === 'plan' && <LearningPlanView />}
        {tab === 'ap1' && (
          <SectionView
            title="AP1 · Einrichten eines IT-gestützten Arbeitsplatzes"
            intro="90 Minuten schriftlich, fachrichtungsübergreifend. Voraussichtlich Herbst 2026 für deine verkürzte Ausbildung. Der neue Prüfungskatalog (gültig seit Frühjahr 2025) verlangt mehr zu Projektmanagement, KI, IT-Sicherheit und IPv6. SQL und RAID sind in die AP2 verschoben worden."
            weight="20%"
            topics={AP1_TOPICS}
            progress={progress}
            save={save}
          />
        )}
        {tab === 'ap2-prozess' && (
          <SectionView
            title="AP2 · Durchführen einer Prozessanalyse"
            intro="90 Minuten schriftlich. Fachrichtungsspezifisch für FIDP. BPMN 2.0 und EPK lesen und erstellen, Prozesserhebung, Kennzahlen, Optimierungsmethoden."
            weight="10%"
            topics={AP2_PROZESS}
            progress={progress}
            save={save}
          />
        )}
        {tab === 'ap2-daten' && (
          <SectionView
            title="AP2 · Sicherstellen der Datenqualität"
            intro="90 Minuten schriftlich. Fachrichtungsspezifisch. Datenqualität, ER-Modellierung, SQL, NoSQL, ETL, RAID/Backup."
            weight="10%"
            topics={AP2_DATEN}
            progress={progress}
            save={save}
          />
        )}
        {tab === 'ap2-wiso' && (
          <SectionView
            title="AP2 · Wirtschafts- und Sozialkunde"
            intro="60 Minuten schriftlich. Gilt für alle FI-Fachrichtungen. Wird oft unterschätzt – nicht!"
            weight="10%"
            topics={AP2_WISO}
            progress={progress}
            save={save}
          />
        )}
        {tab === 'ap2-projekt' && (
          <SectionView
            title="AP2 · Betriebliche Projektarbeit"
            intro="50 % der Gesamtnote (!): 25 % Dokumentation + 12,5 % Präsentation + 12,5 % Fachgespräch. Max. 40 Stunden Bearbeitung. Hier holst du am meisten Punkte."
            weight="50%"
            topics={AP2_PROJEKT}
            progress={progress}
            save={save}
          />
        )}
        {tab === 'quellen' && <ResourcesView />}
      </main>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-8 border-t border-zinc-800 mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            FIDP Prüfungs-Trainer · Inhalte gemäß Prüfungskatalog 2025, gültig ab Frühjahr 2025.
          </div>
          <div className="font-mono">
            Fortschritt wird lokal in deinem Browser gespeichert.
          </div>
        </div>
      </footer>
    </div>
  );
}
