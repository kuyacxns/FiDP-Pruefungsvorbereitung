import { ExternalLink } from './Icons.jsx';

export function ResourcesView() {
  const resourceGroups = [
    {
      title: 'Offizielle IHK & Bundesinstitut',
      items: [
        { name: 'Prüfungskataloge IT-Berufe (IHK Hannover)', desc: 'Die zweite Auflage gilt seit Frühjahr 2025 verbindlich für AP1 und AP2.', url: 'https://www.ihk.de/hannover/hauptnavigation/ausbildung-und-weiterbildung/ausbildung/ausbildung-a-z/neuordnungen/pruefungskataloge-it-berufe-6438900' },
        { name: 'IHK-AKA – Aufgabenerstellungsausschuss', desc: 'Aktuelle Prüfungsnews, neue Belegsätze und Termine.', url: 'https://www.ihk-aka.de/' },
        { name: 'IHK Hamburg', desc: 'Deine zuständige IHK – Anmeldung, Termine, Leitfäden.', url: 'https://www.hk24.de/' },
        { name: 'BIBB – Berufsbildungsinstitut', desc: 'Rahmenlehrpläne, Ausbildungsverordnung Fachinformatiker:in.', url: 'https://www.bibb.de/' },
      ],
    },
    {
      title: 'Lehrbücher (Goldstandard)',
      items: [
        { name: '„IT-Handbuch für Fachinformatiker" (Sascha Kersken, Rheinwerk)', desc: 'Das Standardwerk. Deckt 80 % der AP1-Themen ab.', url: 'https://www.rheinwerk-verlag.de/' },
        { name: 'Stark-Verlag Abschlussprüfungen Originalprüfungen FIDP', desc: 'Originalprüfungen mit Lösungen. KAUFEN!', url: 'https://www.stark-verlag.de/' },
        { name: 'U-Form Prüfungsvorbereitung', desc: 'Alternative Prüfungsbücher mit Lösungswegen.', url: 'https://www.u-form.de/' },
        { name: 'Westermann „Wirtschafts- und Sozialkunde für Berufsschulen"', desc: 'Klassiker für WiSo. Sehr empfehlenswert.', url: 'https://www.westermann.de/' },
      ],
    },
    {
      title: 'Podcasts & Blogs (Pflichtprogramm)',
      items: [
        { name: 'IT-Berufe-Podcast (Stefan Macke)', desc: 'Mit Abstand die beste deutschsprachige Quelle. Folgen zu AP1/AP2-Themen, Beispieldokumentationen, Projektanträgen.', url: 'https://it-berufe-podcast.de/' },
        { name: 'ausbildung-in-der-it.de', desc: 'Strukturierte Leitfäden zu beiden Prüfungsteilen + FIDP-spezifische Inhalte.', url: 'https://ausbildung-in-der-it.de/' },
        { name: 'fachinformatiker.de Forum', desc: 'Größtes deutsches Forum für FI-Azubis. AP-Diskussionen, Berichte, Hilfe.', url: 'https://www.fachinformatiker.de/' },
        { name: 'Reddit r/Ausbildung & r/Fachinformatiker', desc: 'Aktuelle Diskussionen, Prüfungsberichte, Tipps.', url: 'https://www.reddit.com/r/Fachinformatiker/' },
      ],
    },
    {
      title: 'Online-Lernplattformen & Trainer',
      items: [
        { name: 'MyDigi Academy – FIDP Vorbereitung 2026', desc: 'Echte IHK-Prüfungsfragen, Videos, Prüfungssimulation. Kostenpflichtig.', url: 'https://mydigi.academy/pruefungsvorbereitung/fachinformatiker-daten-und-prozessanalyse/' },
        { name: 'Prüfungstrainer.de', desc: 'Themen-Drill mit Multiple-Choice.', url: 'https://www.pruefungstrainer.de/' },
        { name: 'SQLZoo', desc: 'Interaktives SQL-Training. Hervorragend für AP2-Datenqualität.', url: 'https://sqlzoo.net/' },
        { name: 'subnetting.org', desc: 'Subnetting wird in jeder AP1 abgefragt – hier endlos üben.', url: 'https://www.subnetting.org/' },
        { name: 'MongoDB University', desc: 'Kostenlose Kurse für NoSQL-Grundlagen.', url: 'https://learn.mongodb.com/' },
        { name: 'Celonis Academy', desc: 'Kostenlose Process-Mining-Kurse. Direkt FIDP-relevant.', url: 'https://academy.celonis.com/' },
      ],
    },
    {
      title: 'Modellierungs-Tools',
      items: [
        { name: 'Camunda Modeler (kostenlos)', desc: 'Industriestandard für BPMN 2.0. Open Source.', url: 'https://camunda.com/download/modeler/' },
        { name: 'draw.io / diagrams.net', desc: 'Universelles Diagramm-Tool: BPMN, UML, ERM, Netzpläne – alles kostenlos.', url: 'https://app.diagrams.net/' },
        { name: 'dbdiagram.io', desc: 'ER-Diagramme aus SQL-DDL generieren – sehr schnell.', url: 'https://dbdiagram.io/' },
        { name: 'Mermaid Live Editor', desc: 'Diagramme als Code. Markdown-tauglich.', url: 'https://mermaid.live/' },
      ],
    },
    {
      title: 'Fachliche Vertiefung',
      items: [
        { name: 'Elektronik-Kompendium', desc: 'Bestes deutschsprachiges Tutorial zu Netzwerk- und Computertechnik.', url: 'https://www.elektronik-kompendium.de/' },
        { name: 'BSI – Grundschutz', desc: 'IT-Sicherheit auf hohem Niveau.', url: 'https://www.bsi.bund.de/' },
        { name: 'Heise Security', desc: 'Aktuelle IT-Sicherheits-News, gute Erklärartikel.', url: 'https://www.heise.de/security/' },
        { name: 'Bundesdatenschutzbeauftragter (BfDI)', desc: 'DSGVO-Erklärungen aus erster Hand.', url: 'https://www.bfdi.bund.de/' },
        { name: 'datenbanken-verstehen.de', desc: 'Tutorials zu ERM, SQL, Normalformen.', url: 'https://www.datenbanken-verstehen.de/' },
      ],
    },
    {
      title: 'YouTube-Kanäle',
      items: [
        { name: 'The Morpheus Tutorials', desc: 'IT-Grundlagen, Netzwerk, Programmierung – sehr beliebt unter Azubis.', url: 'https://www.youtube.com/@TheMorpheusTutorials' },
        { name: 'IT-Service Ruhr', desc: 'Detaillierte AP1/AP2-Erklärvideos.', url: 'https://www.youtube.com/@itserviceruhr' },
        { name: 'Lehrerschmidt (für Mathe-Auffrischung)', desc: 'Grundrechenarten, Prozent, Zinsrechnung.', url: 'https://www.youtube.com/@lehrerschmidt' },
      ],
    },
    {
      title: 'Apps & Karteikarten',
      items: [
        { name: 'Anki', desc: 'Spaced-Repetition. Karteikarten erstellen oder fertige Decks für IT-Berufe nutzen.', url: 'https://apps.ankiweb.net/' },
        { name: 'Brainyoo', desc: 'Karteikarten-App mit IHK-Fertigsets.', url: 'https://www.brainyoo.de/' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-5">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">Bibliothek</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 mb-2">Alle Quellen auf einen Blick</h2>
        <p className="text-zinc-400 max-w-3xl text-sm">
          Kuratierte Sammlung. Drei Empfehlungen: <span className="text-cyan-300">IT-Berufe-Podcast</span>,
          das <span className="text-cyan-300">Kersken-Handbuch</span> und <span className="text-cyan-300">Original-Prüfungen vom Stark-Verlag</span>.
          Damit deckst du 80 % ab.
        </p>
      </header>

      <div className="space-y-8">
        {resourceGroups.map((grp) => (
          <section key={grp.title}>
            <h3 className="font-serif text-lg sm:text-xl text-zinc-100 mb-4 flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">§</span> {grp.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {grp.items.map((r) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-zinc-800 hover:border-cyan-700 bg-zinc-950/50 hover:bg-zinc-900/50 rounded-lg p-4 transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-medium text-zinc-100 group-hover:text-cyan-300 transition-colors text-sm leading-snug">
                      {r.name}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{r.desc}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
