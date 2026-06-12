export const AP2_WISO = [
  {
    id: 'arbeitsrecht',
    title: 'Berufsausbildung & Arbeitsrecht',
    icon: 'briefcase',
    summary: 'BBiG, JArbSchG, ArbZG, Kündigung, Probezeit, Pflichten Azubi/Ausbildender.',
    keyPoints: [
      'BBiG (Berufsbildungsgesetz): regelt Ausbildungsverhältnis, Inhalt des Ausbildungsvertrags, Pflichten',
      'Pflichten Auszubildende:r: Lern-, Sorgfalts-, Befolgungs-, Berichtsheft-, Schweige-, Pflege-, Bekanntgabepflicht',
      'Pflichten Ausbildende:r: Ausbildungs-, Erziehungs-, Freistellungs-, Vergütungs-, Zeugnis-, Fürsorgepflicht',
      'Probezeit: 1–4 Monate (BBiG § 20). Während Probezeit jederzeit ohne Frist kündbar',
      'Nach Probezeit: ordentliche Kündigung durch Azubi mit 4 Wochen Frist möglich, durch Betrieb nur außerordentlich (wichtiger Grund)',
      'JArbSchG (Jugendarbeitsschutzgesetz): gilt für unter 18-Jährige – max. 8 h/Tag, 40 h/Woche, Berufsschule auf Arbeitszeit anrechenbar',
      'ArbZG (Arbeitszeitgesetz): max. 8 h/Tag (10 h ausnahmsweise), Pausen (30 Min. bei 6–9 h, 45 Min. bei >9 h), Ruhezeit 11 h',
      'Mindesturlaub: 24 Werktage (6-Tage-Woche) bzw. 20 Arbeitstage (5-Tage-Woche). Für Azubis unter 18 mehr',
    ],
    quiz: [
      {
        q: 'Wie lange darf die Probezeit in einer Berufsausbildung maximal dauern?',
        options: ['1 Monat', '3 Monate', '4 Monate', '6 Monate'],
        correct: 2,
        explanation: '§ 20 BBiG: Probezeit zwischen 1 und 4 Monaten. In der Probezeit kann beidseitig fristlos ohne Angabe von Gründen gekündigt werden.'
      },
      {
        q: 'Mit welcher Frist kann ein Auszubildender NACH der Probezeit ordentlich kündigen, um die Ausbildung aufzugeben oder den Beruf zu wechseln?',
        options: ['1 Woche', '2 Wochen', '4 Wochen', '3 Monate'],
        correct: 2,
        explanation: 'Nach der Probezeit kann der Azubi mit einer Frist von 4 Wochen kündigen (z. B. bei Berufswechsel). Der Ausbildende kann ordentlich nicht mehr kündigen – nur außerordentlich aus wichtigem Grund.'
      },
      {
        q: 'Welche Pause schreibt das ArbZG bei einer täglichen Arbeitszeit zwischen 6 und 9 Stunden vor?',
        options: ['15 Minuten', '30 Minuten', '45 Minuten', '60 Minuten'],
        correct: 1,
        explanation: 'ArbZG § 4: Bei 6–9 h Arbeitszeit mind. 30 Min. Pause, ab 9 h mind. 45 Min. Pausen unter 15 Min. zählen nicht.'
      },
      {
        q: 'Welche Pflicht zählt NICHT zu den Pflichten eines Ausbildenden?',
        options: ['Vergütungspflicht', 'Freistellungspflicht für Berufsschule', 'Wirtschaftliche Beratung des Azubi-Privatlebens', 'Zeugnispflicht'],
        correct: 2,
        explanation: 'Der Ausbildende muss ausbilden, vergüten, Berufsschulzeit anrechnen, ein Zeugnis ausstellen und fürsorglich handeln – ist aber nicht für die wirtschaftliche Beratung des Privatlebens zuständig.'
      },
      {
        q: 'Wie viele Wochen Mutterschutz stehen einer Arbeitnehmerin nach der Geburt zu?',
        options: ['4 Wochen', '6 Wochen', '8 Wochen', '12 Wochen'],
        correct: 2,
        explanation: 'Mutterschutzgesetz (MuSchG): 6 Wochen vor dem errechneten Geburtstermin (bei Zustimmung der Mutter, sonst Verbot) und 8 Wochen nach der Geburt (absolutes Beschäftigungsverbot). Bei Frühgeburt, Mehrlingsgeburt oder behindertem Kind: 12 Wochen nach der Geburt.'
      },
      {
        q: 'Was regelt das AGG (Allgemeines Gleichbehandlungsgesetz)?',
        options: ['Gleiche Ausbildungsvergütung für alle Berufe', 'Verbot der Benachteiligung aus Gründen wie Rasse, Geschlecht, Religion, Behinderung, Alter, sexuelle Identität', 'Gleiches Wahlrecht am Arbeitsplatz', 'Gleiche Steuerbelastung für Arbeitnehmer:innen und Arbeitgeber:innen'],
        correct: 1,
        explanation: 'Das AGG (§ 1): schützt vor Benachteiligung in Beschäftigung und Beruf wegen Rasse/ethnischer Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter und sexueller Identität. Bei Verletzung: Schadensersatz, Schmerzensgeld. Arbeitgeber:innen müssen Beschwerden nach §13 AGG nachgehen.'
      },
      {
        q: 'Welchen gesetzlichen Mindesturlaub hat ein:e Arbeitnehmer:in bei einer 5-Tage-Woche nach dem BUrlG?',
        options: ['15 Arbeitstage', '20 Arbeitstage', '24 Werktage', '30 Arbeitstage'],
        correct: 1,
        explanation: 'BUrlG § 3: Mindesturlaub 24 Werktage (6-Tage-Woche). Bei 5-Tage-Woche: 24 × 5/6 = 20 Arbeitstage. Viele Tarifverträge sehen mehr vor (z. B. 30 Tage). Auszubildende unter 18 haben nach JArbSchG erhöhten Urlaubsanspruch (25–30 Werktage je nach Alter).'
      },
      {
        q: 'Wann greift das Kündigungsschutzgesetz (KSchG)?',
        options: ['Ab dem ersten Arbeitstag bei jedem Arbeitgeber', 'Nach 6 Monaten Betriebszugehörigkeit und wenn der Betrieb mehr als 10 Vollzeitbeschäftigte hat', 'Nur in Betrieben mit Betriebsrat', 'Das KSchG gilt nicht für Auszubildende'],
        correct: 1,
        explanation: 'Geltungsvoraussetzungen KSchG: Arbeitsverhältnis > 6 Monate (Wartezeit) UND Betrieb > 10 Vollzeit-AN (Kleinbetriebsklausel). Dann: Kündigung nur wirksam bei personen-, verhaltens- oder betriebsbedingten Gründen. Ohne KSchG-Schutz: freie Kündigung, aber Mindestfrist nach § 622 BGB gilt weiterhin.'
      },
    ],
    resources: [
      { title: 'BBiG – Gesetzestext', url: 'https://www.gesetze-im-internet.de/bbig_2005/' },
      { title: 'IHK – Ausbildungsrecht', url: 'https://www.ihk.de/' },
    ]
  },
  {
    id: 'sozialversicherung',
    title: 'Sozialversicherung & Lohnabrechnung',
    icon: 'briefcase',
    summary: 'Die 5 Säulen, Beitragssätze, Brutto vs. Netto.',
    keyPoints: [
      'Fünf Säulen der Sozialversicherung: Kranken-, Pflege-, Renten-, Arbeitslosen-, Unfallversicherung',
      'Beitragssätze (Stand 2025/26, allgemein, Arbeitgeber + Arbeitnehmer hälftig): KV ca. 14,6 % + Zusatzbeitrag, PV 3,6 % (+ 0,6 % für Kinderlose ab 23), RV 18,6 %, ALV 2,6 %',
      'Unfallversicherung: zahlt allein der Arbeitgeber an die zuständige Berufsgenossenschaft',
      'Brutto → Netto: – Lohnsteuer (nach Steuerklasse + Soli ab gewissem Einkommen) – KiSt (falls Mitglied) – Arbeitnehmeranteil SV-Beiträge',
      'Steuerklassen: I (ledig), II (alleinerziehend), III/V (Ehegatten kombiniert), IV (Ehegatten gleich), VI (zweiter Job)',
      'Beitragsbemessungsgrenze (BBG): Einkommen oberhalb dieser Grenze beitragsfrei',
      'Sozialversicherungspflicht ab ca. 556 €/Monat (Geringfügigkeit/Minijob darunter)',
    ],
    quiz: [
      {
        q: 'Welche Sozialversicherung wird allein vom Arbeitgeber finanziert?',
        options: ['Krankenversicherung', 'Rentenversicherung', 'Unfallversicherung', 'Arbeitslosenversicherung'],
        correct: 2,
        explanation: 'Die gesetzliche Unfallversicherung wird vollständig vom Arbeitgeber an die zuständige Berufsgenossenschaft gezahlt. Die anderen vier Säulen sind paritätisch (hälftig AG/AN), wobei in der PV Kinderlose ab 23 einen Zuschlag tragen.'
      },
      {
        q: 'Welche Steuerklasse gilt für eine ledige Person ohne Kinder?',
        options: ['I', 'II', 'III', 'IV'],
        correct: 0,
        explanation: 'Steuerklasse I: ledig, geschieden, verwitwet (nach Jahr X), ohne Kindergeldberechtigung. II: alleinerziehend mit Kind. III/V/IV: Ehegatten.'
      },
      {
        q: 'Wie hoch ist der ungefähre Gesamtbeitragssatz zur gesetzlichen Rentenversicherung (2025/26) und wie wird er aufgeteilt?',
        options: ['12 % – vollständig vom Arbeitnehmer', '18,6 % – je zur Hälfte AG und AN (9,3 % je)', '25 % – vollständig vom Arbeitgeber', '10 % – vollständig vom Staat'],
        correct: 1,
        explanation: 'Rentenversicherung 2025: 18,6 % des Bruttolohns, paritätisch geteilt: AG 9,3 % + AN 9,3 %. Gesamtübersicht (ca. 2025/26): KV 14,6 % + Zusatzbeitrag ~1,7 % (paritätisch), PV 3,6 % + Kinderlosenzuschlag 0,6 %, RV 18,6 %, ALV 2,6 %. Merke: Unfallversicherung zahlt nur AG.'
      },
      {
        q: 'Was ist die Minijob-Grenze und welche Folge hat sie?',
        options: ['Bruttoeinkommen bis 400 €/Monat – keine Steuern und SV-Beiträge für AN', 'Bruttoeinkommen bis 556 €/Monat (2025) – AN zahlt keine SV-Beiträge, AG pauschal 28 %', 'Bruttoeinkommen bis 1000 €/Monat – SV-Beiträge auf halber Höhe', 'Minijobs sind vollständig steuerbefreit und SV-frei'],
        correct: 1,
        explanation: 'Minijob-Grenze 2025: 556 €/Monat (geknüpft an gesetzlichen Mindestlohn × 10 h/Woche × 52/12). AN-Seite: keine eigenen SV-Beiträge (nur optionale RV-Aufstockung). AG zahlt Pauschalbeträge: 13 % KV, 15 % RV, 2 % pauschale Lohnsteuer = ca. 30 % Zusatzkosten für AG. Wichtig für Azubis mit Nebenjob!'
      },
      {
        q: 'Was ist die Beitragsbemessungsgrenze (BBG) in der Rentenversicherung?',
        options: ['Der Mindestbeitrag, den jede:r leisten muss', 'Das Einkommensniveau, ab dem kein zusätzlicher RV-Beitrag anfällt – Einkommen darüber ist beitragsfrei', 'Die Grenze, ab der Steuern anfallen', 'Der maximale Beitrag, den der Arbeitgeber zahlt'],
        correct: 1,
        explanation: 'BBG RV West 2025: ca. 8.050 €/Monat (ca. 96.600 €/Jahr). Einkommen über der BBG wird für die RV-Beitragsberechnung nicht herangezogen. Für die KV gibt es eine eigene (niedrigere) BBG. Damit ist das SV-System gedeckelt: Spitzenverdiener zahlen anteilig weniger und bekommen im Alter proportional mehr.'
      },
    ],
    resources: [
      { title: 'Bundesministerium für Arbeit – Sozialversicherung', url: 'https://www.bmas.de/' },
      { title: 'DRV – Rentenversicherung', url: 'https://www.deutsche-rentenversicherung.de/' },
    ]
  },
  {
    id: 'wirtschaftsordnung',
    title: 'Wirtschaftsordnung & Markt',
    icon: 'chart',
    summary: 'Soziale Marktwirtschaft, Angebot/Nachfrage, Unternehmensformen.',
    keyPoints: [
      'Wirtschaftssysteme: Marktwirtschaft (Privateigentum, freier Wettbewerb), Planwirtschaft (Staat plant alles), Soziale Marktwirtschaft (D, Mix mit Sozialstaat)',
      'Angebot & Nachfrage: Preis bildet sich am Markt durch Gleichgewicht. Höherer Preis → mehr Angebot, weniger Nachfrage',
      'Marktformen: Monopol (1 Anbieter), Oligopol (wenige Anbieter), Polypol (viele Anbieter)',
      'Rechtsformen: Einzelunternehmen, Personengesellschaften (GbR, OHG, KG), Kapitalgesellschaften (GmbH, AG, UG)',
      'GmbH: Mindestkapital 25.000 €, Haftung beschränkt aufs Gesellschaftsvermögen, Geschäftsführer',
      'AG: Mindestkapital 50.000 €, Aktien, Vorstand + Aufsichtsrat + Hauptversammlung',
      'Vattenfall Europe Sales GmbH (dein Betrieb): GmbH, also Kapitalgesellschaft, beschränkte Haftung',
      'Kaufverträge: Angebot + Annahme. § 433 BGB. Mängelarten: Sach- vs. Rechtsmangel, offen vs. versteckt',
    ],
    quiz: [
      {
        q: 'Wie hoch ist das Mindestkapital einer GmbH (regulär)?',
        options: ['1 €', '12.500 €', '25.000 €', '50.000 €'],
        correct: 2,
        explanation: 'GmbH-Mindeststammkapital: 25.000 €. Bei Gründung müssen mindestens 12.500 € eingezahlt sein. Die UG (haftungsbeschränkt) gibt es schon ab 1 €.'
      },
      {
        q: 'Welche Marktform liegt vor, wenn es wenige große Anbieter und viele Nachfrager gibt?',
        options: ['Monopol', 'Oligopol', 'Polypol', 'Bilaterales Monopol'],
        correct: 1,
        explanation: 'Wenige Anbieter, viele Nachfrager = Angebotsoligopol. Typisch z. B. für Mobilfunkmarkt oder Energieversorgung.'
      },
      {
        q: 'Wer haftet bei einer GmbH typischerweise?',
        options: [
          'Die Geschäftsführer mit ihrem Privatvermögen',
          'Die Gesellschafter mit ihrem Privatvermögen',
          'Die Gesellschaft mit ihrem Gesellschaftsvermögen',
          'Alle Mitarbeiter persönlich'
        ],
        correct: 2,
        explanation: 'Genau das ist der Vorteil einer GmbH: Haftung beschränkt sich auf das Gesellschaftsvermögen. Persönliche Haftung gibt es nur in Ausnahmen (z. B. bei Pflichtverletzung der Geschäftsführer).'
      },
      {
        q: 'Was beschreibt das „Magische Viereck" der Wirtschaftspolitik?',
        options: ['Vier Unternehmensformen der sozialen Marktwirtschaft', 'Vier wirtschaftspolitische Ziele: Preisniveaustabilität, hoher Beschäftigungsstand, Wirtschaftswachstum, außenwirtschaftliches Gleichgewicht', 'Vier Schritte der Unternehmensplanung', 'Die vier größten deutschen Unternehmen'],
        correct: 1,
        explanation: 'Das Magische Viereck (§ 1 StabG): Stabiles Preisniveau (geringe Inflation), hoher Beschäftigungsstand (geringe Arbeitslosigkeit), stetiges Wirtschaftswachstum, außenwirtschaftliches Gleichgewicht (ausgeglichene Handelsbilanz). „Magisch" = Ziele stehen im Widerspruch: Vollbeschäftigung kann Inflation fördern, Wachstum die Handelsbilanz belasten.'
      },
      {
        q: 'In welcher Konjunkturphase ist die Arbeitslosigkeit typischerweise am niedrigsten und die Investitionen am höchsten?',
        options: ['Rezession', 'Depression', 'Aufschwung (Expansion)', 'Hochkonjunktur (Boom)'],
        correct: 3,
        explanation: 'Konjunkturzyklus: Aufschwung → Hochkonjunktur (Boom, Vollbeschäftigung, hohe Investitionen, Inflationsgefahr) → Abschwung → Rezession (negatives BIP-Wachstum ≥ 2 Quartale, steigende Arbeitslosigkeit) → Talsohle → erneuter Aufschwung. Staatliche Fiskalpolitik: antizyklisch (im Boom sparen, in der Rezession investieren).'
      },
    ],
    resources: [
      { title: 'Bundeszentrale für politische Bildung – Wirtschaft', url: 'https://www.bpb.de/themen/wirtschaft/' },
    ]
  },
  {
    id: 'tarifvertrag',
    title: 'Tarifvertrag & Betriebsrat',
    icon: 'briefcase',
    summary: 'Tarifautonomie, BetrVG, Mitbestimmungsrechte des Betriebsrats, kollektives Arbeitsrecht.',
    keyPoints: [
      'Tarifvertrag: Vereinbarung zwischen Gewerkschaft und Arbeitgeberverband über Arbeitsbedingungen (Lohn, Arbeitszeit, Urlaub)',
      'Tarifautonomie: Verfassungsrecht (Art. 9 Abs. 3 GG) – Arbeitgeber und Arbeitnehmer regeln Arbeitsbedingungen selbst, ohne staatliche Einmischung',
      'Günstigkeitsprinzip: Individuelle Vereinbarungen dürfen günstiger (nicht schlechter!) als der Tarifvertrag sein',
      'Allgemeinverbindlichkeitserklärung: Bundesministerium erklärt TV für alle Betriebe einer Branche verbindlich (auch ohne Gewerkschaftsmitgliedschaft)',
      'Betriebsrat: demokratisch gewähltes Gremium der Arbeitnehmer:innen im Betrieb. Wählbar ab 5 dauerhaft Beschäftigten (§ 1 BetrVG)',
      'Mitbestimmungsrechte (§ 87 BetrVG): erzwingbare Mitbestimmung z. B. bei Arbeitszeiten, Urlaubsgrundsätzen, Lohngestaltung, Ordnung im Betrieb, Einführung technischer Überwachungseinrichtungen',
      'Informations- und Beratungsrechte: Betriebsrat muss bei Einstellungen, Versetzungen, Kündigungen informiert werden',
      'Mitbestimmung ≠ Mitentscheidung: Bei erzwingbarer Mitbestimmung kann Betriebsrat die Einigung erzwingen; bei Informationsrechten nur informiert/angehört werden',
    ],
    quiz: [
      {
        q: 'Was garantiert die Tarifautonomie (Art. 9 Abs. 3 GG)?',
        options: ['Das Recht auf bezahlten Urlaub', 'Das Recht von Arbeitgeber- und Arbeitnehmerorganisationen, Arbeitsbedingungen selbstständig durch Tarifverträge zu regeln', 'Gleichen Lohn für Männer und Frauen', 'Das Recht auf Mitgliedschaft in einer Gewerkschaft'],
        correct: 1,
        explanation: 'Tarifautonomie ist ein Grundrecht: Koalitionen (Gewerkschaften, Arbeitgeberverbände) verhandeln Löhne und Arbeitsbedingungen eigenständig – ohne staatliche Einmischung. Der Staat setzt nur den Rahmen (Mindestlohn, Arbeitsschutz). Streik und Aussperrung sind legitime Druckmittel im Arbeitskampf.'
      },
      {
        q: 'Was besagt das Günstigkeitsprinzip im Tarifrecht?',
        options: ['Der Tarifvertrag gilt immer, egal was der Einzelvertrag sagt', 'Vom Tarifvertrag darf nur zugunsten der Arbeitnehmer:in abgewichen werden – bessere individuelle Vereinbarungen sind erlaubt', 'Günstigere Bedingungen für den Arbeitgeber können einzelvertraglich vereinbart werden', 'Das Günstigkeitsprinzip gilt nur bei allgemeinverbindlichen Tarifverträgen'],
        correct: 1,
        explanation: 'Günstigkeitsprinzip: Wenn der individuelle Arbeitsvertrag für die Arbeitnehmer:in günstiger ist als der TV (z. B. mehr Urlaub, höherer Lohn), gilt der Einzelvertrag. Schlechtere Bedingungen als im TV sind unwirksam (Unterschreitung). Ziel: Mindestniveau durch TV, Spielraum nach oben.'
      },
      {
        q: 'Bei der Einführung einer neuen Zeiterfassungssoftware im Betrieb: Welches Recht hat der Betriebsrat?',
        options: ['Keines – technische Entscheidungen sind allein Sache des Arbeitgebers', 'Erzwingbares Mitbestimmungsrecht nach § 87 Abs. 1 Nr. 6 BetrVG (technische Überwachungseinrichtungen)', 'Nur ein Informationsrecht', 'Das Recht, die Software selbst auszuwählen'],
        correct: 1,
        explanation: '§ 87 Abs. 1 Nr. 6 BetrVG: Einführung von technischen Einrichtungen, die geeignet sind, Verhalten oder Leistung der Arbeitnehmer:innen zu überwachen → zwingende Mitbestimmung. Der Arbeitgeber darf ohne Zustimmung des Betriebsrats oder Einigungsstellenspruch nicht einführen. Gilt z. B. auch für GPS-Tracking, Videoüberwachung.'
      },
      {
        q: 'Ab wann kann in einem Betrieb ein Betriebsrat gewählt werden?',
        options: ['Ab 1 Beschäftigten', 'Ab 5 dauerhaft wahlberechtigten Beschäftigten', 'Ab 10 Vollzeitbeschäftigten', 'Ab 20 Beschäftigten'],
        correct: 1,
        explanation: '§ 1 BetrVG: Betriebsräte können in Betrieben mit mind. 5 dauerhaft wahlberechtigten Arbeitnehmer:innen (davon 3 wählbar) gewählt werden. Wahlberechtigt: alle AN ab 18 Jahren. Wählbar: AN ab 18 Jahren mit mind. 6 Monaten Betriebszugehörigkeit. Azubis sind wahlberechtigt, aber besondere JAV (Jugend- und Auszubildendenvertretung) ab 5 jugendlichen AN.'
      },
      {
        q: 'Was versteht man unter einem Manteltarifvertrag?',
        options: ['Ein Tarifvertrag speziell für die Textilindustrie', 'Ein Rahmentarifvertrag, der allgemeine Arbeitsbedingungen (Arbeitszeit, Urlaub, Zuschläge) für eine Branche regelt', 'Ein Tarifvertrag für leitende Angestellte', 'Ein freiwilliger Tarifvertrag ohne Rechtswirkung'],
        correct: 1,
        explanation: 'Manteltarifvertrag (MTV): regelt die allgemeinen Rahmenbedingungen einer Branche (Arbeitszeit, Urlaubsdauer, Kündigungsfristen, Überstundenzuschläge) – im Gegensatz zum Entgelttarifvertrag, der konkrete Lohnsätze festlegt. MTVs haben meist längere Laufzeiten als reine Lohntarifverträge.'
      },
    ],
    resources: [
      { title: 'Bundeszentrale für pol. Bildung – Tarifrecht', url: 'https://www.bpb.de/themen/wirtschaft/arbeitsmarkt/' },
      { title: 'Gewerkschaft ver.di – Tarifverträge', url: 'https://www.verdi.de/' },
      { title: 'BetrVG – Gesetzestext', url: 'https://www.gesetze-im-internet.de/betrvg/' },
    ]
  },
  {
    id: 'unternehmensformen',
    title: 'Unternehmensformen & Rechtsformen',
    icon: 'briefcase',
    summary: 'Einzelunternehmen, GbR, OHG, KG, GmbH, UG, AG – Haftung, Kapital, Organe, Vor-/Nachteile.',
    keyPoints: [
      'Einzelunternehmen: Gründer haftet unbeschränkt mit Privatvermögen. Einfachste Gründung, volle Selbstständigkeit',
      'GbR (Gesellschaft bürgerlichen Rechts): mind. 2 Gesellschafter, unbeschränkte persönliche Haftung aller, kein Mindestkapital, kein Handelsregistereintrag nötig',
      'OHG (Offene Handelsgesellschaft): Handelsgeschäft, alle Gesellschafter unbeschränkt haftend, Handelsregisterpflicht',
      'KG (Kommanditgesellschaft): Komplementär haftet unbeschränkt, Kommanditist nur mit Einlage. Typisch für Familienunternehmen',
      'GmbH: Mindestkapital 25.000 €, Haftung beschränkt aufs Gesellschaftsvermögen, Organe: Geschäftsführer + Gesellschafterversammlung',
      'UG (haftungsbeschränkt): „Mini-GmbH" ab 1 € Stammkapital, muss 25 % Gewinn ansparen bis 25.000 € erreicht',
      'AG: Mindestkapital 50.000 €, Organe: Vorstand (Geschäftsführung), Aufsichtsrat (Kontrolle), Hauptversammlung (Aktionäre)',
      'GmbH & Co. KG: KG mit GmbH als Komplementär – Haftungsbeschränkung bei Personengesellschaftsstruktur',
    ],
    quiz: [
      {
        q: 'Welche Rechtsform ermöglicht eine Haftungsbeschränkung auf das Gesellschaftsvermögen mit dem geringsten Stammkapital?',
        options: ['GmbH (25.000 €)', 'UG haftungsbeschränkt (ab 1 €)', 'AG (50.000 €)', 'GbR (kein Mindestkapital)'],
        correct: 1,
        explanation: 'Die UG (haftungsbeschränkt) ist die „kleine GmbH" – Stammkapital ab 1 €, Haftungsbeschränkung wie GmbH. Nachteil: 25 % des Jahresgewinns müssen in die Gewinnrücklage, bis 25.000 € erreicht sind (dann Umwandlung in GmbH möglich). Beliebt für Start-ups in der frühen Phase.'
      },
      {
        q: 'Wie haften Gesellschafter einer GbR?',
        options: ['Nur mit ihrer Einlage', 'Unbeschränkt mit dem gesamten Privatvermögen (gesamtschuldnerisch)', 'Gar nicht – die GbR haftet allein', 'Nur bis zur Höhe ihres Gesellschaftsanteils'],
        correct: 1,
        explanation: 'GbR-Gesellschafter haften unbeschränkt und gesamtschuldnerisch: Jeder kann für alle Schulden der GbR in voller Höhe herangezogen werden – auch mit dem Privatvermögen. Deshalb ist die GbR für größere Geschäftsrisiken ungünstig. Für risikoarme Kooperationen (z. B. Projektgemeinschaften) aber einfach und kostengünstig.'
      },
      {
        q: 'Welche drei Organe hat eine Aktiengesellschaft (AG)?',
        options: ['Geschäftsführer, Prokuristen, Aktionäre', 'Vorstand (Führung), Aufsichtsrat (Kontrolle), Hauptversammlung (Aktionäre/Eigentümer)', 'CEO, CFO, COO', 'Gesellschafterversammlung, Beirat, Vorstand'],
        correct: 1,
        explanation: 'AG-Organe: Vorstand (leitet das Unternehmen, wird vom Aufsichtsrat bestellt), Aufsichtsrat (kontrolliert den Vorstand, wird von der Hauptversammlung gewählt – ab 2000 AN mit Arbeitnehmervertretern, Mitbestimmungsgesetz), Hauptversammlung (Aktionäre wählen AR, beschließen über Gewinnverwendung).'
      },
      {
        q: 'Was ist der Hauptvorteil einer KG (Kommanditgesellschaft) gegenüber einer GbR?',
        options: ['Weniger Verwaltungsaufwand', 'Kommanditisten haften nur bis zur Höhe ihrer Einlage – ermöglicht Kapitalaufnahme ohne Vollhaftung', 'Alle Gesellschafter haben gleiches Stimmrecht', 'KG hat immer ein Mindestkapital'],
        correct: 1,
        explanation: 'KG: Komplementär (Vollhafter) führt das Unternehmen und haftet unbeschränkt. Kommanditisten sind stille Kapitalgeber mit Haftungsbeschränkung auf ihre Einlage. So können externe Investor:innen Kapital einbringen, ohne das volle Haftungsrisiko zu tragen. Bei der GmbH & Co. KG ist der Komplementär eine GmbH → vollständige Haftungsbeschränkung.'
      },
    ],
    resources: [
      { title: 'IHK – Rechtsformen im Überblick', url: 'https://www.ihk.de/' },
      { title: 'Bundesministerium der Justiz – GmbHG', url: 'https://www.gesetze-im-internet.de/gmbhg/' },
    ]
  },
  {
    id: 'vertraege',
    title: 'Verträge & Kaufrecht',
    icon: 'fileText',
    summary: 'Kauf-, Werk-, Dienst-, Mietvertrag, Mängelarten, Gewährleistung vs. Garantie, Verzug.',
    keyPoints: [
      'Kaufvertrag (§ 433 BGB): Verkäufer liefert Eigentum + Besitz, Käufer zahlt Kaufpreis. Zustandekommen: Angebot + Annahme (Willenserklärungen)',
      'Werkvertrag (§ 631 BGB): Unternehmer schuldet einen Erfolg (das fertige Werk). Beispiel: Software-Entwicklungsauftrag, Renovierung',
      'Dienstvertrag (§ 611 BGB): Schuldner schuldet die Tätigkeit, nicht den Erfolg. Beispiel: Arbeitsvertrag, Beratungsvertrag',
      'Mietvertrag (§ 535 BGB): Vermieter überlässt Gebrauch einer Sache gegen Miete. Kein Eigentumsübergang',
      'Mängelarten: Sachmangel (Ware entspricht nicht dem Vertrag), Rechtsmangel (Dritte haben Rechte an der Sache)',
      'Gewährleistung (gesetzlich, § 437 BGB): Nacherfüllung (Reparatur/Ersatz), Minderung, Rücktritt, Schadensersatz. Frist: 2 Jahre bei Neukauf',
      'Garantie: freiwillige Zusatzleistung des Herstellers/Händlers – über gesetzliche Gewährleistung hinaus',
      'Lieferverzug: Schuldner liefert nicht rechtzeitig. Mahnung nötig (außer Kalendertermin). Folge: Schadensersatz möglich',
    ],
    quiz: [
      {
        q: 'Ein IT-Dienstleister soll eine individuelle Software entwickeln. Welcher Vertragstyp ist i. d. R. zutreffend?',
        options: ['Mietvertrag', 'Dienstvertrag', 'Werkvertrag', 'Kaufvertrag'],
        correct: 2,
        explanation: 'Werkvertrag: der Auftragnehmer schuldet einen Erfolg – die funktionierende Software (das Werk). Nur wenn eine mangelfreie Software geliefert wird, entsteht der Vergütungsanspruch. Beim Dienstvertrag würde lediglich die Tätigkeit geschuldet (z. B. Stunden-Consulting ohne Ergebnispflicht). Bei der Abgrenzung zählt: Erfolg (Werk) oder Tätigkeit (Dienst)?'
      },
      {
        q: 'Was ist der Unterschied zwischen Gewährleistung und Garantie?',
        options: ['Gewährleistung ist freiwillig, Garantie ist gesetzlich vorgeschrieben', 'Gewährleistung ist die gesetzliche Pflicht des Verkäufers (2 Jahre); Garantie ist eine freiwillige Zusatzleistung des Herstellers/Händlers', 'Beide bedeuten dasselbe', 'Garantie gilt länger als die gesetzliche Gewährleistung immer'],
        correct: 1,
        explanation: 'Gewährleistung (§ 437 BGB): gesetzlich, automatisch, 2 Jahre ab Übergabe, Verkäufer ist Anspruchsgegner. Garantie: freiwillig, Inhalt vom Garantiegeber frei definiert, kann kürzer oder länger als 2 Jahre sein, oft Hersteller als Anspruchsgegner. Beide können parallel bestehen. Tipp: Bei Mängeln zuerst Gewährleistung prüfen (stärker geregelt).'
      },
      {
        q: 'Ein Lieferant liefert Hardware einen Monat später als vereinbart. Was muss der Käufer vor einem Schadensersatzanspruch wegen Schuldnerverzugs grundsätzlich tun?',
        options: ['Sofort Klage einreichen', 'Den Lieferanten mahnen (außer wenn Leistungszeit im Kalender fest vereinbart war)', 'Den Vertrag sofort widerrufen', 'Nichts – Verzug tritt automatisch bei Fristüberschreitung ein'],
        correct: 1,
        explanation: '§ 286 BGB: Schuldnerverzug erfordert Fälligkeit + Mahnung. Ausnahme: Leistung ist nach dem Kalender bestimmbar (z. B. „Lieferung bis 31.03."), dann tritt Verzug automatisch mit Fristablauf ein – keine Mahnung nötig (§ 286 Abs. 2 Nr. 1 BGB). Nach Verzugseintritt: Schadensersatz wegen Verzugs möglich.'
      },
      {
        q: 'Welchen Gewährleistungsanspruch hat ein Käufer bei einem defekten Produkt als ERSTES geltend zu machen?',
        options: ['Sofort Rücktritt vom Vertrag', 'Sofort Schadensersatz', 'Nacherfüllung (Reparatur oder Ersatzlieferung) – dem Verkäufer muss zunächst Gelegenheit zur Nacherfüllung gegeben werden', 'Sofortige Minderung des Kaufpreises'],
        correct: 2,
        explanation: '§ 437 i. V. m. § 439 BGB: Primäranspruch ist Nacherfüllung (Reparatur ODER Ersatzlieferung nach Wahl des Käufers). Erst wenn Nacherfüllung fehlschlägt, verweigert wird oder unzumutbar ist: Sekundäransprüche Rücktritt, Minderung, Schadensersatz. Merksatz: Nacherfüllung vor allem anderen!'
      },
    ],
    resources: [
      { title: 'BGB – Kaufrecht § 433 ff.', url: 'https://www.gesetze-im-internet.de/bgb/__433.html' },
      { title: 'Elektronik-Kompendium – Vertragsrecht', url: 'https://www.elektronik-kompendium.de/' },
    ]
  },
  {
    id: 'rechnungswesen',
    title: 'Rechnungswesen Grundlagen',
    icon: 'chart',
    summary: 'Bilanz (Aktiva/Passiva), GuV, Kalkulation, Skonto, Rabatt, Mehrwertsteuer.',
    keyPoints: [
      'Bilanz: Gegenüberstellung von Aktiva (Vermögen: Anlagevermögen + Umlaufvermögen) und Passiva (Kapitalherkunft: Eigenkapital + Fremdkapital)',
      'Bilanzgleichung: Aktiva = Passiva (immer ausgeglichen!)',
      'GuV (Gewinn- und Verlustrechnung): Erträge − Aufwendungen = Jahresüberschuss (Gewinn) oder Jahresfehlbetrag (Verlust)',
      'Einnahmen ≠ Erträge: Erträge sind periodengerecht abgegrenzt. Ausgaben ≠ Aufwendungen: gleiches Prinzip',
      'Kalkulationsschema: Einkaufspreis + Bezugskosten = Bezugspreis. + Gemeinkosten + Gewinnzuschlag = Angebotspreis. − Rabatt − Skonto = Zielverkaufspreis',
      'Rabatt: prozentualer Nachlass auf den Listenpreis (z. B. Mengenrabatt 10 %)',
      'Skonto: Nachlass für schnelle Zahlung (z. B. 2 % Skonto bei Zahlung innerhalb 10 Tagen)',
      'MwSt. (USt.): 19 % Regelsatz, 7 % ermäßigt (Lebensmittel, Bücher). Nettobetrag × 1,19 = Bruttobetrag',
    ],
    quiz: [
      {
        q: 'Eine Aktiva-Position in der Bilanz ist das Bankkonto mit 50.000 €. Auf welcher Seite steht dieser Wert und was sagt er aus?',
        options: ['Passiva – das Eigenkapital beträgt 50.000 €', 'Aktiva – das Unternehmen hat 50.000 € Geld auf der Bank (Vermögenswert)', 'Aktiva – das Unternehmen schuldet der Bank 50.000 €', 'Passiva – das Unternehmen hat Verbindlichkeiten von 50.000 €'],
        correct: 1,
        explanation: 'Aktiva zeigen, WO das Kapital steckt (Mittelverwendung): Maschinen, Gebäude, Forderungen, Bankguthaben. Passiva zeigen, WOHER das Kapital stammt (Mittelherkunft): Eigenkapital (EK), Darlehen (FK), Lieferantenverbindlichkeiten. Bankguthaben = Vermögen → Aktivseite. Bankkredit = Schuld → Passivseite.'
      },
      {
        q: 'Ein Laptop hat einen Listenpreis von 1.000 € netto. Es gibt 10 % Rabatt. Wie hoch ist der Bruttorechnungsbetrag (19 % MwSt.)?',
        options: ['1.090 €', '900 € (ohne MwSt.)', '900 € netto → 1.071 € brutto', '1.190 €'],
        correct: 2,
        explanation: 'Rechnung: 1.000 € − 10 % Rabatt = 900 € netto. 900 € × 1,19 (MwSt. 19 %) = 1.071 € brutto. Häufige Falle: Rabatt immer vom Nettopreis abziehen, dann MwSt. aufschlagen. MwSt. gehört nicht zum Unternehmensertrag (Durchlaufposten ans Finanzamt).'
      },
      {
        q: 'Was bedeutet „2/10 netto 30" auf einer Rechnung?',
        options: ['2 % Rabatt ab 10 Stück, 30 Tage Lieferzeit', '2 % Skonto bei Zahlung innerhalb von 10 Tagen; voll fällig nach 30 Tagen', '2 Monate Gewährleistung, 10 % Skonto, netto 30 Tage', 'Zahlung in 2 Raten à 10 € bis Tag 30'],
        correct: 1,
        explanation: '„2/10 netto 30": 2 % Skonto wenn innerhalb 10 Tagen gezahlt wird; ohne Skonto 30 Tage netto. Skonto ist immer eine Finanzierungsentscheidung: 2 % für 20 Tage früher = ca. 36 % p. a. effektiver Zinssatz → Skonto nutzen ist fast immer günstiger als Lieferantenkredit!'
      },
      {
        q: 'Was zeigt die Gewinn- und Verlustrechnung (GuV)?',
        options: ['Den Bestand von Vermögen und Schulden zu einem Stichtag', 'Alle Erträge und Aufwendungen einer Periode, mit dem Ergebnis Jahresüberschuss oder Jahresfehlbetrag', 'Den Cashflow des Unternehmens', 'Die Investitionsplanung für das nächste Jahr'],
        correct: 1,
        explanation: 'GuV (Periodenrechnung): Erträge − Aufwendungen = Ergebnis. Im Gegensatz dazu: Bilanz = Stichtagsbetrachtung (Vermögen und Kapital zum 31.12.). Die GuV erklärt, wie das Ergebnis entstanden ist. Jahresüberschuss erhöht das Eigenkapital in der Bilanz, Jahresfehlbetrag mindert es.'
      },
    ],
    resources: [
      { title: 'Bundeszentrale für pol. Bildung – Bilanz erklärt', url: 'https://www.bpb.de/' },
      { title: 'IHK – Rechnungswesen Lernmaterialien', url: 'https://www.ihk.de/' },
      { title: 'Lehrerschmidt – Buchführung Grundlagen', url: 'https://www.youtube.com/@lehrerschmidt' },
    ]
  },
];
