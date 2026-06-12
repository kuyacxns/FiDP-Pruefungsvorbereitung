export const AP2_PROZESS = [
  {
    id: 'bpmn',
    title: 'Prozessmodellierung (BPMN 2.0)',
    icon: 'chart',
    summary: 'BPMN-Notation für Geschäftsprozesse: Events, Tasks, Gateways, Pools, Lanes.',
    keyPoints: [
      'BPMN = Business Process Model and Notation (OMG-Standard)',
      'Flow Objects: Events (Kreise), Activities (abgerundete Rechtecke), Gateways (Rauten)',
      'Events: Start (dünner Kreis), Intermediate (doppelter Kreis), End (dicker Kreis) – mit Spezialisierung (Message, Timer, Error, …)',
      'Activities: Task (atomar), Subprocess (zerlegt, Plus im Rahmen)',
      'Gateways: exklusiv (XOR, leere oder X-Raute), parallel (AND, +-Raute), inklusiv (OR, O-Raute), ereignisbasiert',
      'Pools & Lanes: Pool = Organisation/Prozessteilnehmer, Lane = Rolle/Abteilung innerhalb',
      'Message Flow (gestrichelt) zwischen Pools, Sequence Flow (durchgezogen) innerhalb',
      'Best Practices: max. 1 Start-Event je Pool, Gateways sinnvoll beschriften, keine "diamond hell"',
    ],
    quiz: [
      {
        q: 'Welcher Gateway-Typ wird genutzt, wenn an einem Punkt im Prozess GENAU EIN Pfad weitergeführt werden soll?',
        options: ['Paralleles Gateway (AND)', 'Exklusives Gateway (XOR)', 'Inklusives Gateway (OR)', 'Komplexes Gateway'],
        correct: 1,
        explanation: 'Das exklusive Gateway (XOR, leere Raute oder mit X) wählt genau einen ausgehenden Pfad anhand einer Bedingung. AND aktiviert alle, OR mindestens einen.'
      },
      {
        q: 'Was bedeutet eine gestrichelte Linie zwischen zwei BPMN-Pools?',
        options: [
          'Sequence Flow innerhalb derselben Organisation',
          'Message Flow – Kommunikation zwischen Pools',
          'Datenfluss zwischen Aktivitäten',
          'Eine optionale Verknüpfung'
        ],
        correct: 1,
        explanation: 'Gestrichelte Pfeile = Message Flow (Nachrichtenfluss). Sie sind die einzigen erlaubten Verbindungen ZWISCHEN unterschiedlichen Pools. Innerhalb eines Pools nutzt man Sequence Flow (durchgezogen).'
      },
      {
        q: 'Wie unterscheidet sich ein Subprozess von einem normalen Task in BPMN?',
        options: [
          'Subprozess ist immer manuell, Task immer automatisiert',
          'Subprozess ist atomar, Task zerlegt',
          'Subprozess ist zerlegt (Plus-Symbol), Task atomar',
          'Subprozess kann nur in Pools liegen, Task nur in Lanes'
        ],
        correct: 2,
        explanation: 'Ein Subprozess ist eine zerlegte Aktivität (collapsed mit Plus-Symbol oder expanded). Ein Task ist atomar – wird nicht weiter zerlegt.'
      },
      {
        q: 'Welches Symbol wird für ein zeitgesteuertes Zwischenereignis (Intermediate Timer Event) verwendet?',
        options: [
          'Doppelter Kreis mit Uhr-Symbol',
          'Raute mit Pluszeichen',
          'Abgerundetes Rechteck mit Uhr',
          'Einfacher Kreis mit Brief-Symbol'
        ],
        correct: 0,
        explanation: 'Intermediate Events haben einen doppelten Kreisrand. Mit Uhr-Symbol = Timer (wartet auf einen Zeitpunkt/eine Dauer).'
      },
      {
        q: 'Was ist ein Boundary Event in BPMN?',
        options: ['Ein Event am Rand des gesamten Diagramms', 'Ein Intermediate Event, das am Rand einer Aktivität hängt und diese bei Eintritt unterbricht oder nicht unterbricht', 'Ein Startevent außerhalb eines Pools', 'Ein Event, das Pools verbindet'],
        correct: 1,
        explanation: 'Boundary Events hängen am Rand (Boundary) einer Aktivität oder eines Subprozesses. Unterbrechend (durchgezogene Linie): Aktivität wird abgebrochen, Kontrollfluss geht zu Exception-Pfad. Nicht-unterbrechend (gestrichelt): Aktivität läuft weiter, parallel wird ein weiterer Pfad aktiviert. Beispiel: Timer-Boundary löst Eskalation aus, wenn Task zu lange dauert.'
      },
      {
        q: 'Wofür steht das Compensation-Event (Rücknahme-Event) in BPMN?',
        options: ['Es zeigt an, dass eine Zahlung geleistet wurde', 'Es löst eine kompensierende Aktion aus, um eine bereits abgeschlossene Aktivität rückgängig zu machen', 'Es signalisiert das Ende einer Transaktion', 'Es verbindet zwei Pools mit Geldfluss'],
        correct: 1,
        explanation: 'Compensation in BPMN modelliert das Rückgängigmachen (Rollback) von Aktivitäten in langen Geschäftstransaktionen. Beispiel: Kunde storniert Bestellung – die Compensation-Handler für „Zahlung buchen" und „Lager reservieren" werden rückwärts ausgelöst. Wichtig in Transaktions-Subprozessen.'
      },
      {
        q: 'Wie werden Message-Start-Events und Timer-Start-Events in BPMN unterschieden?',
        options: ['Durch unterschiedliche Pool-Farben', 'Message-Start: Kreis mit Briefumschlag-Symbol; Timer-Start: Kreis mit Uhrzeigersymbol', 'Message-Events sind Rauten, Timer-Events sind Rechtecke', 'Beide werden identisch als leerer Kreis dargestellt'],
        correct: 1,
        explanation: 'Start-Events sind dünne Kreise, differenziert durch ihr inneres Symbol: Leer = normaler Start, Briefumschlag = Message (Prozess startet beim Empfang einer Nachricht), Uhr = Timer (Prozess startet zu einem Zeitpunkt oder Intervall), Blitz = Signal. Die Symbole unterscheiden auch Intermediate und End Events.'
      },
      {
        q: 'Was ist beim inklusiven Gateway (OR) im Vergleich zum exklusiven Gateway (XOR) anders?',
        options: ['OR-Gateway benötigt keine Bedingungen an den ausgehenden Pfeilen', 'OR-Gateway kann einen oder mehrere Pfade gleichzeitig aktivieren; XOR aktiviert genau einen', 'OR-Gateways dürfen nicht in Serie geschaltet werden', 'OR-Gateways sind in BPMN 2.0 abgeschafft'],
        correct: 1,
        explanation: 'Inklusives Gateway (OR, Kreis in der Raute): Alle Pfade, deren Bedingung zutrifft, werden aktiviert – mindestens einer. Join: wartet auf alle aktivierten Pfade. XOR: genau einer. AND: alle. Das OR-Gateway ist das flexibelste, aber auch schwierigste bei Join-Logik.'
      },
    ],
    resources: [
      { title: 'BPMN Quick Guide (Camunda)', url: 'https://camunda.com/bpmn/reference/' },
      { title: 'Camunda Modeler (kostenlos)', url: 'https://camunda.com/download/modeler/' },
      { title: 'Signavio Academy – BPMN-Tutorial', url: 'https://www.signavio.com/' },
    ]
  },
  {
    id: 'epk',
    title: 'EPK & Wertschöpfungskette',
    icon: 'chart',
    summary: 'Ereignisgesteuerte Prozesskette als alternative Notation, klassische Wertschöpfungsketten.',
    keyPoints: [
      'EPK = Ereignisgesteuerte Prozesskette (entwickelt an Uni Saarbrücken, genutzt in ARIS)',
      'Elemente: Ereignis (Sechseck, passiv), Funktion (Rechteck mit abgerundeten Ecken, aktiv), Konnektoren',
      'Konnektoren: XOR, AND, OR – aufteilend oder zusammenführend',
      'Strikte Abwechslung: nach Ereignis → Funktion, nach Funktion → Ereignis (außer bei Konnektoren)',
      'eEPK (erweitert): zusätzlich Organisationseinheiten, Informationsobjekte, Anwendungssysteme',
      'Wertschöpfungskettendiagramm: grobe Ansicht der Hauptprozesse (Beschaffung → Produktion → Vertrieb)',
      'Vergleich BPMN vs. EPK: BPMN ist OMG-Standard, sprachenneutral, BPMS-fähig; EPK ist im DACH-Raum verbreitet und SAP-nah',
    ],
    quiz: [
      {
        q: 'Welches Element ist in einer EPK ein „Ereignis"?',
        options: ['„Rechnung erstellen"', '„Rechnung erstellt"', '„Kunde anrufen"', '„Bestellung prüfen"'],
        correct: 1,
        explanation: 'Ereignisse sind passive Zustände in Vergangenheitsform: „Rechnung erstellt", „Bestellung eingegangen". Funktionen sind aktive Tätigkeiten: „Rechnung erstellen", „Bestellung prüfen".'
      },
      {
        q: 'In einer EPK folgt einer Funktion „Bestellung prüfen" üblicherweise…',
        options: [
          'eine weitere Funktion',
          'ein Ereignis oder ein Konnektor',
          'ein Pool',
          'ein Datenobjekt'
        ],
        correct: 1,
        explanation: 'In einer EPK wechseln sich Ereignis und Funktion ab. Auf eine Funktion folgt entweder ein Ereignis oder ein Konnektor (XOR/AND/OR), der z. B. mehrere alternative Ereignisse einleitet.'
      },
      {
        q: 'Ein Bestellprozess soll entweder per Express oder Standardversand abgewickelt werden. Welcher Konnektor in der EPK ist korrekt?',
        options: ['AND (∧)', 'OR (∨)', 'XOR (✕)', 'Kein Konnektor nötig'],
        correct: 2,
        explanation: 'XOR (exklusives Oder, ✕): Genau ein Pfad wird gewählt – entweder Express ODER Standard, aber nicht beide. OR (∨) wäre, wenn mehrere Optionen gleichzeitig möglich wären. AND (∧) würde bedeuten: beide Wege werden immer ausgeführt (Parallelisierung).'
      },
      {
        q: 'Was erweitert die eEPK (erweiterte EPK) gegenüber der klassischen EPK?',
        options: ['Die eEPK führt Swimlanes ein und ersetzt Ereignisse durch Tasks', 'Die eEPK ergänzt Informationsobjekte, Organisationseinheiten und Anwendungssysteme', 'Die eEPK entfernt Konnektoren zugunsten von Gateways', 'Die eEPK ist ein vollständig neues Notationsstandard'],
        correct: 1,
        explanation: 'Die erweiterte EPK (eEPK) fügt der klassischen EPK (Ereignisse, Funktionen, Konnektoren) weitere Elemente hinzu: Informationsobjekte (z. B. Dokumente, die eine Funktion nutzt), Organisationseinheiten (wer führt die Funktion aus) und Anwendungssysteme (welches IT-System wird genutzt). Damit wird die eEPK deutlich ausdrucksstärker für reale Prozesse.'
      },
      {
        q: 'Welcher wesentliche Nachteil spricht dafür, BPMN statt EPK für neue Projekte zu verwenden?',
        options: ['BPMN ist komplizierter zu zeichnen', 'EPK ist kein international anerkannter Standard und bietet weniger direkte Anbindung an Process Engines', 'BPMN kennt keine Ereignisse', 'EPK hat mehr Notationselemente als BPMN'],
        correct: 1,
        explanation: 'EPK ist im DACH-Raum (Deutschland, Österreich, Schweiz) verbreitet, besonders durch ARIS und SAP. BPMN 2.0 ist ein OMG-Standard mit direkter Ausführbarkeit in BPMN-fähigen Process Engines (z. B. Camunda, Zeebe). EPK-Modelle sind nicht direkt ausführbar und haben keine standardisierte internationale Austauschbarkeit.'
      },
    ],
    resources: [
      { title: 'ARIS Community', url: 'https://www.ariscommunity.com/' },
      { title: 'EPK-Tutorial (BPM-Wiki)', url: 'https://www.bpm-wiki.de/' },
    ]
  },
  {
    id: 'erhebung',
    title: 'Prozesserhebung & -dokumentation',
    icon: 'book',
    summary: 'Wie man Ist-Prozesse aufnimmt: Interviews, Beobachtung, Workshops, Process Mining.',
    keyPoints: [
      'Top-Down: vom Gesamtüberblick in Details (z. B. Wertschöpfungskette → Hauptprozesse → Teilprozesse)',
      'Bottom-Up: vom Einzelschritt aufwärts (selten, eher zur Detaillierung)',
      'Erhebungsmethoden: strukturierte Interviews, teilnehmende Beobachtung, Workshops, Dokumentenanalyse, Fragebogen',
      'Process Mining: automatische Prozessrekonstruktion aus Logdaten (z. B. mit Celonis, Disco)',
      'Soll-/Ist-Analyse: Aktueller Zustand (Ist) ↔ Wunschzustand (Soll), Lücken identifizieren',
      'Dokumentation: Prozessbeschreibung, Modell (BPMN/EPK), RACI-Matrix (Responsible, Accountable, Consulted, Informed)',
      'Versionierung & Validierung: Stakeholder-Reviews, Walkthroughs',
    ],
    quiz: [
      {
        q: 'Was ist Process Mining?',
        options: [
          'Manuelles Zeichnen von BPMN-Diagrammen',
          'Automatische Prozessrekonstruktion aus IT-Logdaten',
          'Interviewtechnik für Prozessverantwortliche',
          'Methode zur Prozesskostenrechnung'
        ],
        correct: 1,
        explanation: 'Process Mining analysiert Event-Logs aus IT-Systemen (z. B. ERP, CRM) und rekonstruiert daraus automatisch den tatsächlich gelebten Prozess. Tools: Celonis, Disco, ProM, UiPath Process Mining.'
      },
      {
        q: 'In einer RACI-Matrix bedeutet „A" (Accountable)…',
        options: [
          'Die Person, die die Aufgabe durchführt',
          'Die Person, die rechenschaftspflichtig ist – pro Aufgabe nur EINE',
          'Eine zu informierende Person',
          'Eine konsultierte Fachperson'
        ],
        correct: 1,
        explanation: 'A = Accountable = die finale Verantwortung trägt. Pro Aufgabe nur EINE Person. R = ausführend, C = wird konsultiert, I = wird informiert.'
      },
      {
        q: 'Welcher Ansatz wird empfohlen, um zunächst einen Gesamtüberblick zu gewinnen?',
        options: ['Bottom-Up', 'Top-Down', 'Zufällige Erhebung', 'Nur Dokumentenanalyse'],
        correct: 1,
        explanation: 'Top-Down beginnt mit der Wertschöpfungskette/den Hauptprozessen und detailliert schrittweise – ideal für den Überblick und gemeinsamen Konsens.'
      },
      {
        q: 'Welcher Nachteil hat das strukturierte Interview als Erhebungsmethode?',
        options: ['Interviews liefern keine qualitativen Informationen', 'Interviewte beschreiben oft den Sollzustand oder Idealfall, nicht den tatsächlich gelebten Prozess', 'Interviews sind immer teurer als Process Mining', 'Interviews können nur bei weniger als 5 Mitarbeitenden durchgeführt werden'],
        correct: 1,
        explanation: 'Ein bekanntes Problem bei Interviews: Menschen schildern, wie sie glauben, dass der Prozess läuft – nicht wie er wirklich läuft. Ergänzend eignen sich teilnehmende Beobachtung oder Process Mining (aus Systemlogs), um die Realität zu erfassen. Interviews bleiben wertvoll für Kontext, Motive und Problembeschreibungen.'
      },
      {
        q: 'Wozu dient die Dokumentenanalyse bei der Prozesserhebung?',
        options: ['Ausschließlich zur Prüfung von Datenschutzdokumenten', 'Zur Erfassung formaler Vorgaben, Formulare, SOPs und historischer Prozessversionen als Grundlage für das Verständnis des Ist-Zustands', 'Sie ersetzt vollständig die Beobachtung vor Ort', 'Sie ist nur für IT-Prozesse geeignet'],
        correct: 1,
        explanation: 'Dokumentenanalyse: Auswertung vorhandener Unterlagen (Arbeitsanweisungen, Formulare, IT-Logs, Organigramme, Handbücher). Vorteil: keine direkte Interaktion nötig, Zugang zu historischen Informationen. Nachteil: Dokumente können veraltet sein und nicht dem tatsächlichen Prozess entsprechen.'
      },
      {
        q: 'Was ist ein „Walkthrough" in der Prozessvalidierung?',
        options: ['Ein automatisiertes Test-Verfahren für BPMN-Engines', 'Eine strukturierte Durchsprache des modellierten Prozesses mit Prozessbeteiligten zur Validierung und Fehlerfindung', 'Ein Synonym für den Critical Path im Netzplan', 'Eine Methode zur Prozesskostenrechnung'],
        correct: 1,
        explanation: 'Beim Walkthrough präsentiert der Analyst das erstellte Prozessmodell den Fachexpert:innen Schritt für Schritt. Beteiligte prüfen, ob das Modell ihrer Realität entspricht. Ziel: Fehler, Lücken und Missverständnisse früh finden – bevor Maßnahmen abgeleitet werden. Effektiver als schriftliches Review.'
      },
    ],
    resources: [
      { title: 'Celonis Academy (kostenlose Kurse)', url: 'https://academy.celonis.com/' },
      { title: 'Fluxicon Disco – Process Mining', url: 'https://fluxicon.com/disco/' },
    ]
  },
  {
    id: 'kennzahlen',
    title: 'Prozesskennzahlen (KPIs)',
    icon: 'chart',
    summary: 'Durchlaufzeit, Bearbeitungszeit, Liegezeit, Qualitätskennzahlen, Kosten.',
    keyPoints: [
      'Durchlaufzeit (DLZ) = Bearbeitungszeit + Liegezeit + Transportzeit + Rüstzeit',
      'Bearbeitungszeit: aktive Wertschöpfung',
      'Liegezeit: Warten ohne Bearbeitung (meist größter Anteil!)',
      'Durchsatz = Anzahl Vorgänge pro Zeiteinheit',
      'Fehlerquote = fehlerhafte Vorgänge / alle Vorgänge × 100 %',
      'First-Pass-Yield (FPY): Anteil Vorgänge ohne Nacharbeit',
      'Prozesskosten = ∑(Bearbeitungszeit × Kostensatz) + Ressourcen- und Sachkosten',
      'KPIs sollten messbar, relevant, beeinflussbar und kommuniziert sein (vgl. SMART)',
    ],
    quiz: [
      {
        q: 'In einer Auftragsabwicklung beträgt die Bearbeitungszeit 45 Min., die Liegezeit zwischen Stationen 6 Stunden und die Transportzeit 15 Min. Wie hoch ist die Durchlaufzeit?',
        options: ['45 Min.', '6 Std. 60 Min. = 7 Std.', 'Genau 6 Stunden', '7 Stunden 0 Min.'],
        correct: 3,
        explanation: 'DLZ = 45 Min. + 360 Min. + 15 Min. = 420 Min. = 7 Stunden.'
      },
      {
        q: 'Bei 500 produzierten Stück sind 25 fehlerhaft. Wie hoch ist die Fehlerquote?',
        options: ['2 %', '5 %', '10 %', '25 %'],
        correct: 1,
        explanation: 'Fehlerquote = 25 / 500 = 0,05 = 5 %.'
      },
      {
        q: 'Welche Maßnahme reduziert typischerweise die Durchlaufzeit am wirkungsvollsten?',
        options: [
          'Bearbeitungszeit minimal optimieren',
          'Liegezeiten zwischen Stationen reduzieren',
          'Mehr Pausenräume schaffen',
          'Mehr Berichte erstellen'
        ],
        correct: 1,
        explanation: 'Liegezeiten sind oft 70–95 % der DLZ. Hier liegt der größte Hebel (z. B. Bestände senken, Engpässe auflösen, Workflows automatisieren).'
      },
      {
        q: 'Was ist ein SLA (Service Level Agreement)?',
        options: ['Ein internes Protokoll zur Datensicherung', 'Eine vertragliche Vereinbarung zwischen Dienstleister und Kunden über messbare Qualitätsstandards (z. B. Verfügbarkeit, Reaktionszeit)', 'Eine KPI-Auswertung am Monatsende', 'Ein Acronym für Software License Agreement'],
        correct: 1,
        explanation: 'Ein SLA definiert verbindliche Kennzahlen: z. B. „System verfügbar ≥ 99,9 %", „Incident-Response < 4 h", „Wiederherstellung < 8 h". Bei Unterschreitung drohen Vertragsstrafen. OLA (Operational Level Agreement) ist das interne Pendant zwischen Abteilungen. Wichtig: SLAs messen können (Monitoring).'
      },
      {
        q: 'Was misst die OEE (Overall Equipment Effectiveness)?',
        options: ['Die durchschnittliche Energieeffizienz aller Gebäude', 'Die Gesamtanlageneffektivität: Verfügbarkeit × Leistung × Qualität', 'Den ROI einer Investition in Maschinen', 'Die Fehlerquote im letzten Quartal'],
        correct: 1,
        explanation: 'OEE = Verfügbarkeit × Leistungsgrad × Qualitätsrate. Beispiel: 90 % × 95 % × 99 % ≈ 84,6 %. Weltklasse gilt ab ca. 85 %. OEE zeigt, wie effektiv eine Anlage tatsächlich produziert, verglichen mit ihrem theoretischen Maximum. Häufig in der Produktion, aber auch für IT-Systeme adaptierbar.'
      },
      {
        q: 'Was bedeutet First Pass Yield (FPY)?',
        options: ['Die Anzahl der Produkte im ersten Produktionsmonat', 'Der Anteil der Vorgänge, die beim ersten Durchlauf OHNE Nacharbeit korrekt abgeschlossen werden', 'Die erste Fehlerquote in einem neuen Prozess', 'FPY ist ein Synonym für Durchlaufzeit'],
        correct: 1,
        explanation: 'FPY = (Einheiten ohne Nacharbeit ÷ Gesamteinheiten) × 100 %. Beispiel: 950 von 1000 Bestellungen fehlerfrei im ersten Durchlauf → FPY = 95 %. FPY misst die Qualität des Prozesses selbst, nicht nur das Endprodukt (da Nacharbeit Kosten und Zeit verbirgt).'
      },
      {
        q: 'Ein Callcenter verarbeitet täglich 800 Anrufe mit 5 Agenten à 8 Stunden. Wie viele Minuten hat ein Agent pro Anruf (Taktzeit)?',
        options: ['2 min', '3 min', '4 min', '5 min'],
        correct: 1,
        explanation: 'Verfügbare Zeit: 5 Agenten × 8 h × 60 min = 2400 Minuten. Taktzeit = 2400 ÷ 800 Anrufe = 3 Minuten/Anruf. Ist die durchschnittliche Gesprächsdauer kürzer als 3 Min., gibt es Leerzeiten. Ist sie länger, entsteht ein Stau. Taktzeit ist ein zentrales Planungswerkzeug.'
      },
    ],
    resources: [
      { title: 'Lean Six Sigma – Übersicht KPIs', url: 'https://www.sixsigmablackbelt.de/' },
    ]
  },
  {
    id: 'optimierung',
    title: 'Prozessoptimierung & Methoden',
    icon: 'lightbulb',
    summary: 'Lean, Six Sigma, Kaizen, PDCA, DMAIC – Methoden zur Verbesserung.',
    keyPoints: [
      'PDCA-Zyklus (Deming): Plan, Do, Check, Act – kontinuierliche Verbesserung',
      'Kaizen: Philosophie der kleinen, kontinuierlichen Verbesserungen',
      'Lean Management: 7 Verschwendungsarten (TIM WOOD) – Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects',
      'Six Sigma DMAIC: Define, Measure, Analyze, Improve, Control',
      'Ishikawa (Fischgräten-Diagramm): Ursache-Wirkungs-Analyse, oft mit 6M (Mensch, Maschine, Material, Methode, Milieu, Messung)',
      '5-Why-Methode: 5x „warum?" fragen, um die Wurzelursache zu finden',
      'ABC-/Pareto-Analyse: 80/20-Regel, kritische Wenige identifizieren',
      'Automatisierung: RPA, Workflow-Engines, Process Orchestration',
    ],
    quiz: [
      {
        q: 'In welcher Phase eines DMAIC-Projektes werden Wurzelursachen ermittelt?',
        options: ['Define', 'Measure', 'Analyze', 'Control'],
        correct: 2,
        explanation: 'DMAIC: Define (Problem & Ziel), Measure (Ist-Daten), Analyze (Ursachen!), Improve (Lösungen), Control (Nachhaltigkeit sichern).'
      },
      {
        q: 'Was beschreibt die „7 Arten der Verschwendung" im Lean Management?',
        options: [
          'Sieben Phasen eines Prozesses',
          'Aktivitäten ohne Wertschöpfung für den Kunden',
          'Sieben Prozesskennzahlen',
          'Sieben Prinzipien der Qualitätssicherung'
        ],
        correct: 1,
        explanation: 'Die 7 Mudas (Verschwendungsarten) sind Aktivitäten, die KEINEN Wert für den Kunden erzeugen: Transport, Bestände, Bewegung, Wartezeit, Überproduktion, Überbearbeitung, Fehler/Nacharbeit.'
      },
      {
        q: 'Welche Methode passt am besten, um die Wurzelursache eines wiederkehrenden Fehlers strukturiert zu finden?',
        options: ['Gantt-Diagramm', 'Ishikawa + 5-Why', 'BPMN-Modell', 'Nutzwertanalyse'],
        correct: 1,
        explanation: 'Ishikawa kategorisiert Ursachen (6M), 5-Why bohrt rekursiv tiefer. Beide ergänzen sich hervorragend in der Analyze-Phase.'
      },
      {
        q: 'Was unterscheidet Kaizen von Business Process Reengineering (BPR)?',
        options: ['Kaizen ist ein Software-Tool, BPR eine Methode', 'Kaizen = viele kleine kontinuierliche Verbesserungen; BPR = radikales Neugestalten von Prozessen von Grund auf', 'Kaizen ist teurer als BPR', 'BPR fokussiert auf Menschen, Kaizen auf Maschinen'],
        correct: 1,
        explanation: 'Kaizen (japanisch: „Veränderung zum Besseren"): evolutionäre, inkrementelle Verbesserung durch alle Mitarbeiter:innen – kein Prozess ist zu klein. BPR (Hammer/Champy): revolutionärer Ansatz – bestehende Prozesse komplett hinterfragen und neu aufbauen. BPR birgt höhere Risiken, verspricht aber Quantensprünge in Effizienz.'
      },
      {
        q: 'Im Ishikawa-Diagramm werden Ursachen in 6 Kategorien (6M) gegliedert. Welche davon bezieht sich auf Arbeitsplatzbedingungen wie Lärm, Temperatur und Beleuchtung?',
        options: ['Mensch', 'Maschine', 'Methode', 'Milieu (auch: Mitwelt)'],
        correct: 3,
        explanation: 'Milieu/Mitwelt: Umgebungsfaktoren, die den Prozess beeinflussen (Temperatur, Lärm, Beleuchtung, Platz, externe Störungen). Die 6M: Mensch (Qualifikation, Fehler), Maschine (Defekte, Wartung), Material (Rohstoffe, Zulieferer), Methode (Prozessschritte, Standards), Milieu (Umgebung), Messung (Messtechnik, Kalibrierung).'
      },
      {
        q: 'Eine Pareto-Analyse eines Beschwerdesystems zeigt: Von 10 Fehlerarten verursachen 2 Arten zusammen 78 % aller Reklamationen. Was sollte getan werden?',
        options: ['Alle 10 Fehlerarten gleichzeitig bearbeiten', 'Die 2 häufigsten Fehlerarten priorisiert bearbeiten, da hier der größte Hebel liegt (80/20-Regel)', 'Nur die seltensten Fehler beheben, da sie am schwierigsten zu lösen sind', 'Keine Maßnahmen – 78 % ist unter der 80 %-Schwelle'],
        correct: 1,
        explanation: 'Pareto-Prinzip (80/20-Regel): 20 % der Ursachen verursachen 80 % der Probleme. Die Analyse zeigt die „vital few" – die kritischen Wenigen. Ressourcen auf diese konzentrieren bringt den größten Nutzen. In der Praxis: erst die zwei häufigsten Ursachen beheben, dann erneut analysieren.'
      },
      {
        q: 'Was ist Poka-Yoke?',
        options: ['Eine japanische Bezeichnung für den PDCA-Zyklus', 'Eine Technik, die Fehler durch technische Vorrichtungen unmöglich macht oder sofort sichtbar macht (Fehlerverhinderung)', 'Eine Form des Six-Sigma-Black-Belt-Trainings', 'Eine Kennzahl für Prozessqualität'],
        correct: 1,
        explanation: 'Poka-Yoke (japanisch: „Fehler vermeiden"): Konstruktive Maßnahmen, die Fehler verhindern. Beispiele: USB-Stecker passt nur in eine Richtung, Formularfelder prüfen Eingaben sofort, Checkboxen verhindern Weiterklicken ohne Bestätigung. Ziel: Fehler durch Design unmöglich machen, nicht durch Sorgfalt kompensieren.'
      },
    ],
    resources: [
      { title: 'BPM-Handbuch Online', url: 'https://www.bpm-handbuch.de/' },
      { title: 'Lean Six Sigma Tutorials', url: 'https://www.leansixsigmadefinition.com/' },
    ]
  },
  {
    id: 'prozessarten',
    title: 'Prozessarten & Wertschöpfungskette',
    icon: 'chart',
    summary: 'Kern-, Unterstützungs- und Managementprozesse, Porter\'sche Wertkette, Prozesslandkarte.',
    keyPoints: [
      'Kernprozesse (Wertschöpfungsprozesse): erzeugen direkt Wert für den Kunden – z. B. Vertrieb, Produktion, Lieferung. Direkte Auswirkung auf Kundenzufriedenheit',
      'Unterstützungsprozesse (Support-Prozesse): ermöglichen Kernprozesse ohne direkten Kundenwert – z. B. IT, HR, Buchhaltung, Facility Management',
      'Managementprozesse: Steuerung und Koordination der Organisation – z. B. Strategieentwicklung, Controlling, Qualitätsmanagement',
      'Prozesslandkarte: Visualisierung aller Prozesse einer Organisation und ihrer Beziehungen (Überblick vor der Detailmodellierung)',
      'Porter\'sche Wertkette: Primäre Aktivitäten (Eingangslogistik, Produktion, Marketing, Vertrieb, Kundendienst) + Unterstützungsaktivitäten (Beschaffung, Technologie, HR, Infrastruktur)',
      'Wertschöpfung: Was ein Kunde bereit ist zu zahlen minus die entstandenen Kosten',
      'Prozess-Owner: Verantwortliche Person für den gesamten Prozess – für Leistung, Qualität und Optimierung zuständig',
    ],
    quiz: [
      {
        q: 'Welcher Prozess ist ein typischer Kernprozess bei einem Energieversorger wie Vattenfall?',
        options: ['IT-Helpdesk-Support', 'Buchhaltung', 'Kundenvertragsabschluss und Energielieferung', 'Gebäudereinigung'],
        correct: 2,
        explanation: 'Kernprozesse erzeugen direkt Wert für den Kunden. Bei einem Energieversorger: Vertragsabschluss, Zählerablesung, Energielieferung, Abrechnung. IT-Support, Buchhaltung und Reinigung sind Unterstützungsprozesse, die Kernprozesse erst ermöglichen, aber keinen direkten Kundenwert liefern.'
      },
      {
        q: 'Was sind „primäre Aktivitäten" in der Porter\'schen Wertkette?',
        options: ['Nur die profitabelsten Aktivitäten', 'Aktivitäten, die direkt zur Erstellung und Lieferung des Produkts/der Dienstleistung beitragen (Eingangslogistik bis After-Sales-Service)', 'Alle Aktivitäten der HR-Abteilung', 'Aktivitäten, die zuerst ausgeführt werden'],
        correct: 1,
        explanation: 'Porter unterscheidet primäre Aktivitäten (direkte Wertschöpfung: Eingangslogistik → Produktion → Ausgangslogistik → Marketing/Vertrieb → Kundendienst) von unterstützenden Aktivitäten (Beschaffung, Technologieentwicklung, Personalmanagement, Unternehmensinfrastruktur). Die Marge entsteht aus der Differenz von Wert und Kosten.'
      },
      {
        q: 'Wozu dient eine Prozesslandkarte?',
        options: ['Zur detaillierten BPMN-Modellierung einzelner Prozesse', 'Als strategischer Überblick über alle Prozesse einer Organisation und ihre gegenseitigen Beziehungen', 'Zur Berechnung von Prozesskennzahlen', 'Als Alternative zum Organigramm für Abteilungen'],
        correct: 1,
        explanation: 'Die Prozesslandkarte ist die „Vogelperspektive" aller Prozesse: Kernprozesse, Unterstützungsprozesse, Managementprozesse und ihre Verbindungen. Sie ist Ausgangspunkt für Prozessmanagement-Projekte. Nach der Landkarte folgen BPMN/EPK-Detailmodelle für einzelne Prozesse.'
      },
      {
        q: 'Was beschreibt die Rolle des „Prozess-Owners"?',
        options: ['Der IT-Admin, der die Prozessmodellierungs-Software verwaltet', 'Die fachlich verantwortliche Person, die für Leistung, Qualität und Optimierung eines Prozesses zuständig ist', 'Der:die Geschäftsführer:in als generelle:r Verantwortliche:r', 'Ein externer Berater für Prozessverbesserung'],
        correct: 1,
        explanation: 'Der Prozess-Owner ist die definierte Verantwortungsperson für einen Prozess – end-to-end, über Abteilungsgrenzen hinweg. Er/sie sorgt dafür, dass der Prozess gemessen, verbessert und an Strategieänderungen angepasst wird. Im Gegensatz zum Linienvorgesetzten hat der Prozess-Owner horizontale Verantwortung.'
      },
      {
        q: 'Welche der folgenden Aussagen zur Wertschöpfung ist korrekt?',
        options: ['Wertschöpfung = Umsatz - Materialkosten', 'Wertschöpfung entsteht, wenn eine Aktivität aus Kundensicht den Wert des Produkts/der Dienstleistung erhöht', 'Alle Unternehmensaktivitäten sind automatisch wertschöpfend', 'Wertschöpfung ist nur in der Produktion möglich'],
        correct: 1,
        explanation: 'Wertschöpfend = der Kunde ist bereit, dafür zu zahlen. Nicht-wertschöpfend (Verschwendung): Warten, Korrektur, Transport, Überproduktion. Lean-Philosophie: Verschwendung eliminieren, den wertschöpfenden Anteil maximieren. Bei Vattenfall wäre z. B. Abrechnung wertschöpfend, nicht aber doppelte Dateneingabe.'
      },
    ],
    resources: [
      { title: 'BPM-Handbuch – Prozessarten', url: 'https://www.bpm-handbuch.de/' },
      { title: 'Bundeszentrale für pol. Bildung – Porter', url: 'https://www.bpb.de/' },
    ]
  },
  {
    id: 'processmining',
    title: 'Process Mining & Automatisierung',
    icon: 'database',
    summary: 'Celonis, Disco, ProM, RPA, Workflow-Engines – wie Prozesse digital analysiert und automatisiert werden.',
    keyPoints: [
      'Process Mining: automatische Rekonstruktion von Prozessen aus Event-Logs. Drei Varianten: Discovery (Prozess entdecken), Conformance Checking (Soll-Ist-Vergleich), Enhancement (Anreichern mit KPIs)',
      'Event Log: Rohdaten für Process Mining – mind. Case-ID, Aktivitätsname, Zeitstempel. Optional: Ressource, Kosten',
      'Tools: Celonis (Marktführer), Fluxicon Disco (einfache Analyse), ProM (Open-Source-Forschungstool), UiPath Process Mining',
      'Conformance Checking: Abweichungen zwischen normativem BPMN-Modell und tatsächlichem Prozess aufdecken (z. B. Schritte übersprungen, rückwärts gelaufen)',
      'RPA (Robotic Process Automation): Software-Bots imitieren Mensch-Maschine-Interaktionen (Klicks, Dateneingaben) ohne Systemintegration. Tools: UiPath, Blue Prism, Automation Anywhere',
      'Workflow-Engine: führt formell modellierte Prozesse aus (BPMN-basiert). Z. B. Camunda, Flowable, jBPM. Unterschied zu RPA: Workflow-Engines integrieren direkt mit Systemen via API',
      'Automatisierungspotenzial: repetitive, regelbasierte, strukturierte Prozesse mit hohem Volumen – ideal für RPA und Workflow-Automation',
    ],
    quiz: [
      {
        q: 'Was ist das Mindestelement, das ein Event-Log für Process Mining enthalten muss?',
        options: ['Kosten und Mitarbeitername', 'Case-ID, Aktivitätsname und Zeitstempel', 'Nur die Aktivitätsnamen', 'Systemnamen und IP-Adressen'],
        correct: 1,
        explanation: 'Ein Event-Log für Process Mining braucht mindestens: Case-ID (Vorgangs-ID, z. B. Bestellnummer), Activity (Aktivitätsname, was passierte), Timestamp (wann). Weitere Attribute wie Ressource (wer), Kosten, System, Status sind optional, aber anreichernd für tiefere Analysen.'
      },
      {
        q: 'Was untersucht „Conformance Checking" im Process Mining?',
        options: ['Ob der Prozess DSGVO-konform ist', 'Wie stark der tatsächlich ausgeführte Prozess vom Soll-Modell abweicht', 'Ob alle Mitarbeitenden ausreichend geschult wurden', 'Die Performance des Process-Mining-Tools selbst'],
        correct: 1,
        explanation: 'Conformance Checking vergleicht das normative Soll-Modell (z. B. BPMN) mit dem aus den Logs entdeckten Ist-Prozess. Ergebnis: Fitness-Score (wie gut passen Logs zum Modell), aufgedeckte Abweichungen (übersprungene Schritte, Schleifen, Varianten). Basis für gezielte Prozessverbesserungen.'
      },
      {
        q: 'Wofür ist RPA (Robotic Process Automation) am besten geeignet?',
        options: ['Für kreative Entscheidungsprozesse mit vielen Ausnahmen', 'Für hochvolumige, regelbasierte, repetitive Aufgaben an bestehenden Systemen ohne API', 'Für komplexe KI-Analysen großer Datensätze', 'Für die Modellierung von BPMN-Prozessen'],
        correct: 1,
        explanation: 'RPA-Bots imitieren Mausbewegungen und Tastatureingaben – ohne dass an Legacy-Systemen etwas geändert wird. Ideal für: Datenübertragung zwischen Systemen, Formularausfüllung, Berichtsgenerierung. Schwächen: nicht robust bei UI-Änderungen, keine echte Intelligenz, hoher Wartungsaufwand.'
      },
      {
        q: 'Was unterscheidet eine Workflow-Engine von RPA?',
        options: ['Workflow-Engines sind immer teurer', 'Workflow-Engines führen formal modellierte Prozesse aus und integrieren via APIs; RPA imitiert menschliche UI-Interaktionen', 'RPA ist stabiler bei Systemänderungen', 'Workflow-Engines können keine BPMN-Modelle ausführen'],
        correct: 1,
        explanation: 'Workflow-Engines (Camunda, Flowable) führen BPMN-Prozesse direkt aus: robuste API-Integration, Prozessüberwachung, Fehlerbehandlung. RPA hingegen greift auf Benutzeroberflächen zu – fragil bei Layout-Änderungen. Trend: Kombination aus beiden für Legacy-Systeme ohne API (RPA) und neue Systeme (Workflow-Engine).'
      },
      {
        q: 'Welcher Prozesstyp ist am besten für RPA-Automatisierung geeignet?',
        options: ['Kreativprozesse wie Produktdesign', 'Hochvolumige, regelbasierte Dateneingabe mit klaren Entscheidungsregeln und stabiler UI', 'Strategische Managemententscheidungen', 'Kundengespräche im Callcenter'],
        correct: 1,
        explanation: 'RPA-Kandidaten erfüllen: hohes Volumen (lohnt Automatisierungskosten), klare Regeln (kein menschliches Ermessen nötig), strukturierte Daten, stabile UI (Änderungen = Wartungsaufwand). Bei Vattenfall denkbar: automatisches Einlesen von Zählerständen, Mahnungserzeugung nach klaren Kriterien.'
      },
    ],
    resources: [
      { title: 'Celonis Academy (kostenlos)', url: 'https://academy.celonis.com/' },
      { title: 'Fluxicon Disco – Process Mining Tool', url: 'https://fluxicon.com/disco/' },
      { title: 'Camunda – BPMN Workflow Engine', url: 'https://camunda.com/' },
    ]
  },
];
