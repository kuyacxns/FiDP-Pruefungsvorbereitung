import { AlertCircle, ExternalLink } from './Icons.jsx';

export function LearningPlanView() {
  const phases = [
    {
      title: 'Phase 1 · Mai – Juli 2026',
      tag: 'Grundlagen festigen',
      months: '3 Monate',
      focus: 'AP1-Themen mit größtem Hebel',
      items: [
        'Projektmanagement (Wasserfall vs. Scrum, Netzplan, SMART) – 2 Wochen',
        'Wirtschaftlichkeit & Nutzwertanalyse – 1 Woche',
        'Hardware & Berechnungen (Übertragungsraten, Datenmengen) – 2 Wochen',
        'Netzwerktechnik & Subnetting – 3 Wochen',
        'IT-Sicherheit + Datenschutz (CIA, DSGVO, Hashverfahren) – 2 Wochen',
        'Wöchentlich 1× alte AP1-Aufgaben (Frühjahr 2025, Herbst 2025)',
      ],
      resources: [
        { title: 'IT-Berufe-Podcast – AP1-Episoden', url: 'https://it-berufe-podcast.de/' },
        { title: 'Elektronik-Kompendium – Netzwerk & Hardware', url: 'https://www.elektronik-kompendium.de/' },
        { title: 'subnetting.org – Subnetting interaktiv üben', url: 'https://www.subnetting.org/' },
        { title: 'BSI – IT-Grundschutz & DSGVO', url: 'https://www.bsi.bund.de/' },
        { title: 'BfDI – Datenschutz-Grundlagen', url: 'https://www.bfdi.bund.de/' },
      ],
    },
    {
      title: 'Phase 2 · August – September 2026',
      tag: 'AP1-Endspurt',
      months: '2 Monate',
      focus: 'Restthemen + Prüfungssimulationen',
      items: [
        'Software, Lizenzen, KI-Grundlagen',
        'UML-Aktivitätsdiagramm üben (Beispiele zeichnen!)',
        'Ergonomie & Barrierefreiheit (BFSG)',
        '4–6 vollständige AP1-Probeprüfungen unter Zeitdruck (90 Min.)',
        'Lernzettel: Eigene Zusammenfassung pro Thema (handschriftlich = besser)',
      ],
      resources: [
        { title: 'Stark-Verlag – AP1-Originalprüfungen FIDP', url: 'https://www.stark-verlag.de/' },
        { title: 'U-Form – Prüfungsvorbereitung IT-Berufe', url: 'https://www.u-form.de/' },
        { title: 'MyDigi Academy – FIDP Prüfungstrainer', url: 'https://mydigi.academy/pruefungsvorbereitung/fachinformatiker-daten-und-prozessanalyse/' },
        { title: 'draw.io – UML-Diagramme kostenlos zeichnen', url: 'https://app.diagrams.net/' },
        { title: 'WCAG 2.1 – Barrierefreiheit Referenz', url: 'https://www.w3.org/TR/WCAG21/' },
      ],
    },
    {
      title: 'Phase 3 · Oktober 2026',
      tag: 'AP1 schreiben',
      months: '1 Monat',
      focus: 'Letzte Lücken, mentale Vorbereitung',
      items: [
        'Schwachstellen aus Probeprüfungen schließen',
        'Formelblatt & Cheatsheets (Subnetting, RAID, Verfügbarkeitsklassen) auswendig',
        '1 Tag vor Prüfung: nichts Neues mehr lernen – ausschlafen, ruhen',
      ],
      resources: [
        { title: 'IHK Hamburg – Prüfungstermine & Anmeldung', url: 'https://www.hk24.de/' },
        { title: 'IHK-AKA – Aktuelle Prüfungsnews', url: 'https://www.ihk-aka.de/' },
        { title: 'Prüfungstrainer.de – Letzte Wiederholung', url: 'https://www.pruefungstrainer.de/' },
      ],
    },
    {
      title: 'Phase 4 · November 2026 – Februar 2027',
      tag: 'AP2-Vertiefung',
      months: '4 Monate',
      focus: 'Prozessanalyse + Datenqualität',
      items: [
        'BPMN 2.0 + EPK – Camunda Modeler aktiv nutzen, eigene Prozesse modellieren',
        'Prozesserhebung, Kennzahlen, DMAIC, Lean-Methoden',
        'SQL intensiv: SQLZoo, Lerneinheiten zu JOINs, GROUP BY, Subqueries',
        'Datenqualität: Dimensionen, Profiling, ETL',
        'NoSQL: MongoDB University Kurs (kostenlos)',
        'RAID, Backup, Verfügbarkeitsklassen',
      ],
      resources: [
        { title: 'Camunda Modeler – BPMN-Tool (kostenlos)', url: 'https://camunda.com/download/modeler/' },
        { title: 'Camunda BPMN-Referenz', url: 'https://camunda.com/bpmn/reference/' },
        { title: 'SQLZoo – interaktives SQL-Training', url: 'https://sqlzoo.net/' },
        { title: 'datenbanken-verstehen.de – SQL & Normalformen', url: 'https://www.datenbanken-verstehen.de/' },
        { title: 'MongoDB University – NoSQL Kurs (kostenlos)', url: 'https://learn.mongodb.com/' },
        { title: 'Celonis Academy – Process Mining (kostenlos)', url: 'https://academy.celonis.com/' },
        { title: 'Kimball Group – Data Warehouse Methodik', url: 'https://www.kimballgroup.com/' },
      ],
    },
    {
      title: 'Phase 5 · März – April 2027',
      tag: 'Projektantrag & Projektstart',
      months: '2 Monate',
      focus: 'Eigenes Abschlussprojekt',
      items: [
        'Projektidee mit Ausbilder abstimmen (Vattenfall-spezifisch: z. B. Kundendatenqualität)',
        'Projektantrag schreiben & rechtzeitig einreichen (Termin bei IHK Hamburg checken!)',
        'Nach Genehmigung: 40 h Projektdurchführung + Doku',
        'Wöchentlich Doku schreiben (nicht alles am Schluss!)',
      ],
      resources: [
        { title: 'Stefan Macke – Beispielanträge & Bewertungen', url: 'https://it-berufe-podcast.de/beispielantraege/' },
        { title: 'Stefan Macke – Beispieldokumentationen', url: 'https://it-berufe-podcast.de/beispieldokumentationen/' },
        { title: 'IHK Hamburg – Projektanträge einreichen', url: 'https://www.hk24.de/' },
        { title: 'IT-Berufe-Podcast – Abschlussprojekt-Episoden', url: 'https://it-berufe-podcast.de/' },
      ],
    },
    {
      title: 'Phase 6 · Mai – Juli 2027',
      tag: 'AP2-Endspurt + mündliche Prüfung',
      months: '2 Monate',
      focus: 'Schriftliche AP2 + Präsentation',
      items: [
        'Alle drei schriftlichen Prüfungsbereiche durch Probeprüfungen festigen',
        'WiSo (oft unterschätzt!): Arbeitsrecht, Sozialversicherung, Unternehmensformen',
        'Projektpräsentation 3–5× üben (vor Publikum, mit Stoppuhr)',
        'Fachgespräch-Vorbereitung: Standardfragen sammeln, eigene Antworten formulieren',
      ],
      resources: [
        { title: 'Stark-Verlag – AP2-Originalprüfungen FIDP', url: 'https://www.stark-verlag.de/' },
        { title: 'Westermann – Wirtschafts- und Sozialkunde', url: 'https://www.westermann.de/' },
        { title: 'Stefan Macke – Beispielpräsentationen', url: 'https://it-berufe-podcast.de/beispielpraesentationen/' },
        { title: 'Reddit r/Fachinformatiker – Prüfungsberichte', url: 'https://www.reddit.com/r/Fachinformatiker/' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-5">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">2026 → 2027</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 mb-2">Dein Lernplan auf der Zeitachse</h2>
        <p className="text-zinc-400 max-w-3xl leading-relaxed text-sm">
          Sechs Phasen über 15 Monate. Plane realistisch: ca. 5–8 h pro Woche Selbststudium zusätzlich zur Berufsschule.
          Die Phasen sind so geschnitten, dass du die Prüfungen mit Polster, nicht auf Kante schreibst.
        </p>
      </header>

      <div className="relative">
        <div className="absolute left-3.5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-cyan-700 to-zinc-700"></div>
        <div className="space-y-6">
          {phases.map((p, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-cyan-500 bg-zinc-950 flex items-center justify-center font-mono text-xs text-cyan-300">
                {i + 1}
              </div>
              <div className="border border-zinc-800 bg-zinc-950/60 rounded-lg p-5">
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <h3 className="font-serif text-lg sm:text-xl text-zinc-100">{p.title}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">{p.tag}</span>
                  <span className="font-mono text-xs text-zinc-500">· {p.months}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-3 italic">Fokus: {p.focus}</p>
                <ul className="space-y-1.5">
                  {p.items.map((it, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-zinc-300">
                      <span className="text-cyan-500/60 mt-1">›</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                {p.resources && p.resources.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-zinc-800/60">
                    <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">Quellen</p>
                    <ul className="space-y-1">
                      {p.resources.map((r, ri) => (
                        <li key={ri}>
                          <a href={r.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-cyan-300 transition-colors group">
                            <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                            {r.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="border border-amber-800/40 bg-amber-950/10 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          <h3 className="font-serif text-lg sm:text-xl text-zinc-100">Strategie für deine spezielle Situation</h3>
        </div>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li className="flex gap-3"><span className="text-amber-400">›</span><span>Die Berufsschule deckt möglicherweise nicht alle Prüfungsthemen ab – nutze diese Plattform und externe Quellen <strong>parallel</strong> zur ITECH, nicht erst danach.</span></li>
          <li className="flex gap-3"><span className="text-amber-400">›</span><span>Lerne aktiv (Quiz, eigene Notizen, Erklären können), nicht passiv (nur lesen). Aktive Wiederholung schlägt jede Mitschrift.</span></li>
          <li className="flex gap-3"><span className="text-amber-400">›</span><span>Mache regelmäßig <strong>alte Original-Prüfungen</strong> (Stark-Verlag, U-Form). Das ist die mit Abstand wirkungsvollste Vorbereitung.</span></li>
          <li className="flex gap-3"><span className="text-amber-400">›</span><span>Bei Vattenfall: nutze das ESH-Umfeld aktiv für dein Abschlussprojekt – ein gut gewähltes Projekt ist 50 % der AP2-Note.</span></li>
          <li className="flex gap-3"><span className="text-amber-400">›</span><span>Tausche dich mit anderen Azubis aus (Discord/Reddit r/Ausbildung) – Erfahrungsberichte zur AP1 nach neuem Katalog sind Gold wert.</span></li>
        </ul>
      </section>
    </div>
  );
}
