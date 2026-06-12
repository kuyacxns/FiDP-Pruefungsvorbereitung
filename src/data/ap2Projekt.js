export const AP2_PROJEKT = [
  {
    id: 'antrag',
    title: 'Projektantrag',
    icon: 'fileText',
    summary: 'Wie du einen IHK-tauglichen Projektantrag formulierst.',
    keyPoints: [
      'Projektantrag wird ca. 3 Monate vor Projektstart bei der IHK eingereicht – Termine prüfen!',
      'Pflichtinhalte: Projektbezeichnung, Kurzbeschreibung, Projektumfeld, Ist-Analyse, Ziel/Soll-Konzept, Phasen mit Zeitplanung (≤ 40 h), Dokumentation',
      'Sinnvolle Projekttypen FIDP: Datenqualitätsanalyse & -verbesserung, Prozessanalyse & -optimierung, Reporting/Dashboard-Aufbau, ETL-Strecke, Datenmodell für ein Fachbereich-Use-Case',
      'Klassische Phasen: Analyse, Konzeption, Realisierung, Test, Abnahme & Dokumentation',
      'Bei Vattenfall denkbar: Kundendatenqualität (Adress-/Vertragsdaten), Forderungs-/Mahnprozess, Verbrauchsdatenanalyse, Reporting für Vertrieb',
      'Wichtig: kaufmännischer/wirtschaftlicher Bezug muss erkennbar sein, eigenes Werk, klare Abgrenzung zu Tagesgeschäft',
      'Häufige Ablehnungsgründe: zu klein/zu groß, zu wenig fachlicher Bezug zur Fachrichtung, unklare Aufgabenstellung, Kollegen-Projekt',
    ],
    quiz: [
      {
        q: 'Wie viel Bearbeitungszeit hast du als FIDP für das Abschlussprojekt?',
        options: ['20 Stunden', '40 Stunden', '70 Stunden', '80 Stunden'],
        correct: 1,
        explanation: 'Für FIDP gilt: max. 40 Stunden für Durchführung UND Dokumentation. (FISI/FIAE haben ebenfalls 40 h, FI Digitale Vernetzung 70 h.)'
      },
      {
        q: 'Welcher Projekttyp passt besonders gut zur Fachrichtung Daten- und Prozessanalyse?',
        options: [
          'Einrichten eines neuen Druckerservers',
          'Programmierung eines Spiels in Unity',
          'Analyse und Optimierung eines Geschäftsprozesses inkl. Datenauswertung',
          'Verkabelung eines Serverraums'
        ],
        correct: 2,
        explanation: 'Typische FIDP-Projekte: Prozessanalysen, Datenqualitätsverbesserungen, BI-/Reporting-Lösungen, ETL-Strecken. Hardware-/Klassische Programmierprojekte passen nicht zur Fachrichtung.'
      },
      {
        q: 'Was bedeutet „kaufmännischer Bezug" im Projektantrag und warum ist er nötig?',
        options: ['Das Projekt muss für eine Bank oder ein Handelsunternehmen sein', 'Das Projekt muss eine wirtschaftliche Dimension haben (Kosten-Nutzen, ROI, Effizienzgewinn) – erkennbar in Ist-Analyse und Wirtschaftlichkeitsbetrachtung', 'Es müssen Buchungssätze erstellt werden', 'Kaufmännischer Bezug ist nur für AP1, nicht für FIDP relevant'],
        correct: 1,
        explanation: 'IHK-Anforderung: Jedes Abschlussprojekt muss einen nachvollziehbaren kaufmännischen Bezug haben. Das heißt: Warum lohnt sich das Projekt wirtschaftlich? Was kostet es? Was spart/bringt es? Für FIDP: Wie viele Stunden manuelle Arbeit werden durch die Datenqualitätsverbesserung eingespart? Wie hoch ist der ROI?'
      },
      {
        q: 'Warum wird ein Projektantrag häufig abgelehnt?',
        options: ['Weil das Projekt zu komplex ist', 'Häufige Ablehnungsgründe: zu wenig Stunden, kein klarer Fachrichtungsbezug, kollaboratives Projekt ohne eigenen Anteil, unklares Projektziel', 'Weil keine BPMN-Diagramme beigefügt wurden', 'Weil der Antrag zu lang ist'],
        correct: 1,
        explanation: 'Typische Ablehnungsgründe: Scope zu klein (< 35 h) oder zu groß (> 40 h), fehlendes eigenständiges Werk (Gruppenarbeit ohne klare Abgrenzung), kein FIDP-typisches Thema, unklarer Ist-/Soll-Zustand, fehlende Wirtschaftlichkeitsbetrachtung. Empfehlung: Antrag mit Ausbilder und IHK-Leitfaden abgleichen.'
      },
    ],
    resources: [
      { title: 'Stefan Macke – Beispielanträge & Bewertungen', url: 'https://it-berufe-podcast.de/beispielantraege/' },
      { title: 'IHK Hamburg – Projektanträge Online', url: 'https://www.hk24.de/' },
    ]
  },
  {
    id: 'doku',
    title: 'Projektdokumentation',
    icon: 'fileText',
    summary: 'Aufbau, Umfang und typische Stolperfallen der 40-h-Doku.',
    keyPoints: [
      'Umfang: meist 10–15 Seiten reiner Fließtext (ohne Anhang), je nach IHK',
      'Klassische Struktur: 1. Einleitung/Projektumfeld – 2. Projektplanung – 3. Analyse/Ist-Aufnahme – 4. Soll-Konzept/Entwurf – 5. Realisierung – 6. Test/Qualitätssicherung – 7. Abnahme/Übergabe – 8. Fazit/Ausblick',
      'Anhang: Glossar, Quellen, Code-Auszüge, Screenshots, Wirtschaftlichkeitsrechnung, Zeitnachweis',
      'Wirtschaftlichkeit IMMER nachweisen: Aufwand vs. Nutzen, ROI, Amortisation',
      'Quellen sauber zitieren (Fußnoten oder IEEE-Style), Plagiatsrisiken vermeiden',
      'Schreibstil: Vergangenheitsform (was getan wurde), Fachsprache, Ich-Form ist je nach IHK akzeptiert',
      'Bewertet wird u. a.: fachliche Tiefe, Methodensicherheit, Wirtschaftlichkeit, Dokumentationsqualität',
    ],
    quiz: [
      {
        q: 'Welches Kapitel gehört NICHT in die typische Projektdokumentation?',
        options: ['Ist-Analyse', 'Soll-Konzept', 'Persönliche Bewerbung beim nächsten Arbeitgeber', 'Wirtschaftlichkeitsbetrachtung'],
        correct: 2,
        explanation: 'Eine Bewerbung gehört offensichtlich nicht in eine Projektdoku. Pflicht sind Analyse, Konzept, Realisierung, Test, Wirtschaftlichkeit, Fazit.'
      },
      {
        q: 'Wie viele Seiten reiner Fließtext (ohne Anhang) umfasst eine typische FIDP-Projektdokumentation?',
        options: ['5 Seiten', '10–15 Seiten', '25–30 Seiten', '50 Seiten'],
        correct: 1,
        explanation: '10–15 Seiten Fließtext sind der übliche Richtwert (je nach IHK). Anhänge (Screenshots, Code-Auszüge, Zeitnachweis, Glossar) kommen dazu. Zu kurz: fehlende Tiefe. Zu lang: Prüfer verlieren Überblick. Qualität > Quantität: Lieber 12 saubere Seiten mit guten Diagrammen als 25 Seiten Fülltext.'
      },
      {
        q: 'Warum muss eine Wirtschaftlichkeitsbetrachtung in der Doku enthalten sein?',
        options: ['Weil die IHK das Geld des Unternehmens prüfen will', 'Weil das Projekt einen kaufmännischen Bezug haben muss – der Nutzen muss die Kosten rechtfertigen', 'Nur bei Projekten über 10.000 € Kosten', 'Die Wirtschaftlichkeit ist optional'],
        correct: 1,
        explanation: 'Die Wirtschaftlichkeitsbetrachtung belegt den geschäftlichen Sinn des Projekts. Inhalt: Projektkosten (Personalkosten = Stunden × Stundensatz, ggf. Lizenzkosten) + quantitativer Nutzen (Zeitersparnis pro Jahr × Stundensatz = Einsparung) + Amortisationsdauer. Fehlt diese, sind Punkte verloren.'
      },
      {
        q: 'Was sollte im Kapitel „Test/Qualitätssicherung" einer FIDP-Projektdokumentation stehen?',
        options: ['Eine Liste aller möglichen Fehler im Code', 'Beschreibung der Testmethodik, Testfälle (was wurde getestet, wie, Ergebnis), Abnahmeprotokoll', 'Nur ein Screenshot des Endprodukts', 'Tests sind nur für FISI-Projekte relevant'],
        correct: 1,
        explanation: 'Testdokumentation: Welche Tests wurden durchgeführt (Unit-Tests, manuelle Tests, Akzeptanztests)? Was wurde getestet (Testfälle)? Welche Ergebnisse gab es? Wurden Fehler gefunden und behoben? Das Abnahmeprotokoll zeigt, dass das Ergebnis vom Auftraggeber als vollständig akzeptiert wurde.'
      },
      {
        q: 'Warum sollte die Dokumentation begleitend zum Projekt und nicht erst danach geschrieben werden?',
        options: ['IHK-Vorschrift verbietet nachträgliches Schreiben', 'Details, Entscheidungsgründe und Zwischenstände sind unmittelbar danach präziser dokumentierbar; nachträglich entstehen Lücken und Ungenauigkeiten', 'Nur wenn das Projekt länger als 2 Wochen dauert', 'Begleitende Dokumentation ist optional'],
        correct: 1,
        explanation: 'In der Praxis vergisst man schnell: Warum wurde Variante A statt B gewählt? Welches Problem trat am dritten Tag auf? Wer hat welche Anforderungen geändert? Parallel dokumentieren sichert diese Details. Zudem: Wenn das Projekt läuft und die Doku 0 % ist, entsteht enormer Zeitdruck am Ende.'
      },
    ],
    resources: [
      { title: 'Stefan Macke – Beispieldokumentationen', url: 'https://it-berufe-podcast.de/beispieldokumentationen/' },
    ]
  },
  {
    id: 'praesentation',
    title: 'Präsentation & Fachgespräch',
    icon: 'briefcase',
    summary: 'Die mündliche Prüfung: 15 Min. Vortrag + 15 Min. Fachgespräch.',
    keyPoints: [
      'Aufbau Präsentation: Einstieg/Aufhänger (1 Min.), Projektumfeld (2 Min.), Ziel (1 Min.), Vorgehen/Highlights (8–10 Min.), Ergebnis & Nutzen (1–2 Min.), Fazit',
      'Folien: max. ~10 Folien für 15 Min., 1 Hauptaussage pro Folie, wenig Text, klare Visualisierungen',
      'Equipment vor Ort prüfen: HDMI/USB-C-Adapter, Backup auf USB-Stick UND in Cloud, Notebook geladen',
      'Fachgespräch: Prüfer fragen zu Inhalt der Doku UND zu allgemeinen Themen der Fachrichtung. Du sollst dein Projekt VERTEIDIGEN und kommentieren',
      'Üben, üben, üben: vor Familie/Kollegen, Aufnahme prüfen, auf Zeit achten',
      'Kleidung: Business-Casual reicht meist – aber nicht zu leger. Lieber etwas zu schick als zu salopp',
      'Letzter Tipp: Wenn du eine Frage im Fachgespräch nicht weißt, ehrlich sagen + zeigen, wie du sie angegangen wärst',
    ],
    quiz: [
      {
        q: 'Wie lang darf die Projektpräsentation maximal sein?',
        options: ['10 Minuten', '15 Minuten', '20 Minuten', '30 Minuten'],
        correct: 1,
        explanation: 'Die Präsentation darf höchstens 15 Min. dauern. Danach folgt ein 15-minütiges Fachgespräch. Insgesamt also 30 Min. mündliche Prüfung.'
      },
      {
        q: 'Wofür ist das Fachgespräch da?',
        options: [
          'Du wiederholst nur die Präsentation kürzer',
          'Du verteidigst dein Projekt und antwortest auf Fragen zu Projekt UND Fachrichtung',
          'Du präsentierst ein zweites Projekt',
          'Du absolvierst eine spontane schriftliche Aufgabe'
        ],
        correct: 1,
        explanation: 'Das Fachgespräch dient den Prüfern, deine Methodensicherheit, fachliche Tiefe und das Verständnis deines Projekts zu prüfen – auch im breiteren FIDP-Kontext.'
      },
      {
        q: 'Wie viele Folien sind für eine 15-minütige Präsentation sinnvoll?',
        options: ['3–5 Folien', '8–12 Folien', '20–25 Folien', 'So viele wie nötig – Menge ist egal'],
        correct: 1,
        explanation: 'Richtwert: 1 Folie pro 1–2 Minuten = ca. 8–12 Folien für 15 Minuten. Zu wenige: zu wenig Struktur. Zu viele: Hetzerei, keine Zeit für Erklärungen. Jede Folie eine Kernaussage. Wenig Text (max. 6 Zeilen), starke Visualisierungen, Diagramme statt Tabellen, großes Schriftbild.'
      },
      {
        q: 'Welche technische Vorbereitung ist für die Präsentation besonders wichtig?',
        options: ['Den Prüfern vorab die Präsentation per Mail schicken', 'Adapter (HDMI, USB-C, VGA), Backup auf USB-Stick und Cloud, Notebook vollgeladen, Präsentation offline verfügbar', 'Eine gedruckte Version für alle Prüfer', 'Nur die eigene Präsentationssoftware ist relevant'],
        correct: 1,
        explanation: 'Tech-Checkliste: HDMI/USB-C-Adapter (je nach Raum!), Backup auf USB + Cloud (OneDrive, Google Drive), Notebook voll geladen und Ladekabel dabei, Präsentation als PDF-Fallback, Zeiger/Laserpointer optional. Der häufigste Fehler: fehlender Adapter. Vor Ort: Technik 20 Min. vor Prüfungsbeginn testen.'
      },
      {
        q: 'Was ist die beste Strategie, wenn im Fachgespräch eine Frage nicht beantwortet werden kann?',
        options: ['Eine plausible Antwort erfinden', 'Ehrlich sagen dass man es nicht weiß, dann erklären wie man an die Antwort herangehen würde', 'Das Thema ignorieren und zur nächsten Frage übergehen', 'Auf Notizen schauen und ablesen'],
        correct: 1,
        explanation: 'Prüfer:innen testen nicht nur Wissen, sondern auch Haltung und Lernfähigkeit. „Das weiß ich gerade nicht genau, aber ich würde folgendes herausfinden: …" zeigt Methodenkompetenz und Ehrlichkeit – viel besser als eine erfundene Antwort, die bei Nachfragen sofort auffällt. Prüfer:innen sind keine Feinde.'
      },
    ],
    resources: [
      { title: 'Stefan Macke – Beispielpräsentationen', url: 'https://it-berufe-podcast.de/beispielpraesentationen/' },
    ]
  },
  {
    id: 'risikomanagement',
    title: 'Zeit- & Risikomanagement im Projekt',
    icon: 'briefcase',
    summary: 'Risiken identifizieren, bewerten und mitigieren – Wahrscheinlichkeits-Auswirkungs-Matrix, Puffer.',
    keyPoints: [
      'Risiko: unsicheres Ereignis, das das Projekt negativ beeinflussen könnte (Zeit, Kosten, Qualität)',
      'Risikomanagement-Prozess: Identifizieren → Analysieren/Bewerten → Maßnahmen planen → Überwachen',
      'Wahrscheinlichkeits-Auswirkungs-Matrix (W×A): Risikoprioritäts-Zahl = Eintrittswahrscheinlichkeit × Schadensausmaß',
      'Risikostrategien: Vermeiden (Ursache eliminieren), Mindern (Wahrscheinlichkeit oder Schaden senken), Übertragen (Versicherung, Verträge), Akzeptieren (bewusst hinnehmen)',
      'Puffer im Zeitplan: Gesamtpuffer (GP) auf dem kritischen Pfad = 0. Sicherheitspuffer am Projektende (Managementreserve)',
      'Risiken für FIDP-Projekte: Datenzugang verzögert, Anforderungen ändern sich, Testsystem nicht rechtzeitig verfügbar, Krankheit, unterschätzte Aufgaben',
      'Risikoregister: dokumentiert alle Risiken mit Bewertung, Verantwortlichem und Maßnahmenstatus',
    ],
    quiz: [
      {
        q: 'Ein Risiko hat eine Eintrittswahrscheinlichkeit von 30 % und einen geschätzten Schaden von 5.000 €. Wie hoch ist der Erwartungswert des Risikos?',
        options: ['500 €', '1.500 €', '3.500 €', '5.000 €'],
        correct: 1,
        explanation: 'Erwartungswert = Eintrittswahrscheinlichkeit × Schadensausmaß = 0,3 × 5.000 € = 1.500 €. Dieser Wert hilft, Risiken zu priorisieren und zu entscheiden, wie viel in Gegenmaßnahmen investiert werden soll. Gegenmaßnahme mit Kosten < 1.500 € lohnt sich.'
      },
      {
        q: 'Welche Risiko-Reaktionsstrategie wird gewählt, wenn man eine riskante Projektaktivität ganz streicht?',
        options: ['Mindern', 'Übertragen', 'Vermeiden', 'Akzeptieren'],
        correct: 2,
        explanation: 'Vermeiden: Das Risiko wird durch Änderung des Plans vollständig eliminiert (z. B. riskante Technologie durch bewährte ersetzen, Projektumfang reduzieren). Mindern = Wahrscheinlichkeit oder Schaden senken. Übertragen = Versicherung/Vertragsklausel. Akzeptieren = bewusst in Kauf nehmen (oft bei niedrigem Risikoscore).'
      },
      {
        q: 'Warum sollte ein Zeitpuffer NICHT auf dem kritischen Pfad verteilt werden?',
        options: ['Weil Puffer auf dem kritischen Pfad keinen Sinn macht – kritische Aktivitäten haben GP=0', 'Weil das Projektbudget sonst überschritten wird', 'Weil Prüfer Puffer auf dem kritischen Pfad bestrafen', 'Puffer darf nirgendwo im Plan stehen'],
        correct: 0,
        explanation: 'Der kritische Pfad besteht aus Aktivitäten mit Gesamtpuffer (GP) = 0. Jede Verzögerung dort verzögert das gesamte Projekt. Puffer werden am Projektende als Managementreserve oder auf nicht-kritischen Pfaden als freier Puffer eingeplant. Auf dem kritischen Pfad gibt es per Definition keinen Spielraum.'
      },
      {
        q: 'Welches Risiko ist bei FIDP-Abschlussprojekten besonders typisch und wie begegnet man ihm?',
        options: ['Netzwerkausfall im Rechenzentrum', 'Verzögerter Datenzugang oder unvollständige Datenbasis – Gegenmaßnahme: frühzeitig Datenbedarf klären und Datenzugang vor Projektstart sichern', 'Zu hohe Serverkosten', 'Fehlende WLAN-Verbindung im Büro'],
        correct: 1,
        explanation: 'Häufiges FIDP-Risiko: „Daten stehen nicht rechtzeitig zur Verfügung" – Systeme nicht zugänglich, Datenschutzkonflikte, unerwartete Datenlücken. Gegenmaßnahme: Datenbedarf im Projektantrag konkret benennen, Zugangsberechtigungen frühzeitig beantragen, Testsatz vorab prüfen. Alternativ: Testdaten als Fallback.'
      },
      {
        q: 'Was enthält ein Risikoregister?',
        options: ['Eine Liste aller Mitarbeitenden des Projekts', 'Eine strukturierte Übersicht aller identifizierten Risiken mit Bewertung (W×A), Verantwortlichen, Maßnahmen und aktuellem Status', 'Alle abgeschlossenen Aufgaben des Projekts', 'Das Projektbudget und die Kostenkontrolle'],
        correct: 1,
        explanation: 'Das Risikoregister (Risk Register) ist das zentrale Instrument des Risikomanagements. Spalten typischerweise: Risiko-ID, Beschreibung, Kategorie, Eintrittswahrscheinlichkeit, Schadenspotenzial, Risikoscore, Verantwortliche:r, Gegenmaßnahme, Restrisiko, Status (offen/geschlossen). Regelmäßig im Projektverlauf aktualisieren.'
      },
    ],
    resources: [
      { title: 'IT-Berufe-Podcast – Projektmanagement', url: 'https://it-berufe-podcast.de/' },
      { title: 'PMI – Risikomanagement Grundlagen', url: 'https://www.pmi.org/' },
    ]
  },
];
