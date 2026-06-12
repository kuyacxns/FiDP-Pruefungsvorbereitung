// Beispieldatenbank im Energieversorger-Kontext und Übungsaufgaben für
// das SQL-Lab. Bewusst enthalten: NULL-Werte (fehlende E-Mails, fehlende
// Messwerte) und Dubletten (doppelte Kundendatensätze) für
// Datenqualitäts-Aufgaben.

export const SCHEMA_SQL = `
CREATE TABLE kunden (
  kunden_id   INTEGER PRIMARY KEY,
  vorname     TEXT,
  nachname    TEXT NOT NULL,
  email       TEXT,
  stadt       TEXT,
  kundentyp   TEXT
);

CREATE TABLE vertraege (
  vertrag_id   INTEGER PRIMARY KEY,
  kunden_id    INTEGER REFERENCES kunden(kunden_id),
  tarif        TEXT,
  sparte       TEXT,
  beginn       DATE,
  ende         DATE,
  grundpreis   REAL,
  arbeitspreis REAL
);

CREATE TABLE zaehler (
  zaehler_id    INTEGER PRIMARY KEY,
  vertrag_id    INTEGER REFERENCES vertraege(vertrag_id),
  zaehlernummer TEXT,
  typ           TEXT,
  einbau_datum  DATE
);

CREATE TABLE verbrauch (
  id         INTEGER PRIMARY KEY,
  zaehler_id INTEGER REFERENCES zaehler(zaehler_id),
  jahr       INTEGER,
  monat      INTEGER,
  kwh        REAL
);

CREATE TABLE rechnungen (
  rechnung_id INTEGER PRIMARY KEY,
  vertrag_id  INTEGER REFERENCES vertraege(vertrag_id),
  datum       DATE,
  betrag      REAL,
  status      TEXT
);

INSERT INTO kunden VALUES
  (1,  'Lena',    'Petersen', 'lena.petersen@mail.de',    'Hamburg',  'privat'),
  (2,  'Jonas',   'Meyer',    'jonas.meyer@web.de',       'Hamburg',  'privat'),
  (3,  'Aylin',   'Yilmaz',   'aylin.yilmaz@gmx.de',      'Berlin',   'privat'),
  (4,  'Torben',  'Hansen',   NULL,                       'Kiel',     'privat'),
  (5,  'Marie',   'Schulz',   'marie.schulz@mail.de',     'Hamburg',  'privat'),
  (6,  'Niklas',  'Brandt',   'n.brandt@firma-brandt.de', 'Lübeck',   'gewerbe'),
  (7,  'Sofia',   'Martens',  'sofia.martens@web.de',     'Berlin',   'privat'),
  (8,  'Erik',    'Johannsen',NULL,                       'Flensburg','privat'),
  (9,  'Hanna',   'Krüger',   'hanna.krueger@gmx.de',     'Hamburg',  'privat'),
  (10, 'Paul',    'Wagner',   'p.wagner@wagner-bau.de',   'Hamburg',  'gewerbe'),
  (11, 'Jonas',   'Meyer',    'jonas.meyer@web.de',       'Hamburg',  'privat'),
  (12, 'Clara',   'Vogel',    'clara.vogel@mail.de',      'Berlin',   'privat'),
  (13, 'Ole',     'Petersen', 'ole.petersen@nordmail.de', 'Kiel',     'privat'),
  (14, 'Marie',   'Schulz',   'marie.schulz@mail.de',     'Hamburg',  'privat'),
  (15, 'Finn',    'Lorenzen', 'finn.lorenzen@web.de',     'Lübeck',   'privat');

INSERT INTO vertraege VALUES
  (101, 1,  'Öko Strom',    'Strom', '2023-01-01', NULL,         12.90, 32.5),
  (102, 2,  'Basis Strom',  'Strom', '2022-06-01', NULL,          9.90, 35.0),
  (103, 3,  'Öko Strom',    'Strom', '2024-03-01', NULL,         12.90, 31.8),
  (104, 4,  'Basis Gas',    'Gas',   '2021-10-01', NULL,         14.50, 11.2),
  (105, 5,  'Wärme Plus',   'Wärme', '2023-09-01', NULL,         19.90,  9.8),
  (106, 6,  'Gewerbe Strom','Strom', '2020-01-01', NULL,         24.90, 28.4),
  (107, 7,  'Basis Strom',  'Strom', '2022-02-01', '2024-12-31',  9.90, 34.2),
  (108, 9,  'Öko Strom',    'Strom', '2024-07-01', NULL,         12.90, 32.5),
  (109, 10, 'Gewerbe Strom','Strom', '2019-05-01', NULL,         24.90, 27.9),
  (110, 10, 'Basis Gas',    'Gas',   '2021-01-01', NULL,         14.50, 10.9),
  (111, 12, 'Basis Strom',  'Strom', '2023-04-01', NULL,          9.90, 35.0),
  (112, 13, 'Öko Strom',    'Strom', '2024-01-01', NULL,         12.90, 31.8),
  (113, 15, 'Basis Gas',    'Gas',   '2022-11-01', '2025-10-31', 14.50, 11.5),
  (114, 5,  'Basis Strom',  'Strom', '2024-10-01', NULL,          9.90, 33.7);

INSERT INTO zaehler VALUES
  (201, 101, 'HH-100234', 'Smart Meter', '2023-01-05'),
  (202, 102, 'HH-100871', 'SLP',         '2022-06-03'),
  (203, 103, 'BE-204411', 'SLP',         '2024-03-04'),
  (204, 104, 'KI-330912', 'SLP',         '2021-10-06'),
  (205, 105, 'HH-101455', 'Smart Meter', '2023-09-02'),
  (206, 106, 'HL-440287', 'RLM',         '2020-01-08'),
  (207, 107, 'BE-205633', 'SLP',         '2022-02-02'),
  (208, 108, 'HH-102001', 'Smart Meter', '2024-07-03'),
  (209, 109, 'HH-102356', 'RLM',         '2019-05-09'),
  (210, 110, 'HH-102357', 'SLP',         '2021-01-11'),
  (211, 111, 'BE-206712', 'SLP',         '2023-04-05'),
  (212, 112, 'KI-331245', 'Smart Meter', '2024-01-09'),
  (213, 113, 'HL-441033', 'SLP',         '2022-11-07'),
  (214, 114, 'HH-103118', 'Smart Meter', '2024-10-02');

INSERT INTO verbrauch VALUES
  (301, 201, 2025, 1, 210.5), (302, 201, 2025, 2, 185.0), (303, 201, 2025, 3, 168.2),
  (304, 202, 2025, 1, 320.0), (305, 202, 2025, 2, NULL),  (306, 202, 2025, 3, 295.4),
  (307, 203, 2025, 1, 150.8), (308, 203, 2025, 2, 142.5), (309, 203, 2025, 3, 139.0),
  (310, 204, 2025, 1, 890.0), (311, 204, 2025, 2, 760.3), (312, 204, 2025, 3, 610.7),
  (313, 205, 2025, 1, 450.2), (314, 205, 2025, 2, 410.0), (315, 205, 2025, 3, NULL),
  (316, 206, 2025, 1, 2840.0),(317, 206, 2025, 2, 2710.5),(318, 206, 2025, 3, 2655.8),
  (319, 208, 2025, 1, 175.3), (320, 208, 2025, 2, 162.0), (321, 208, 2025, 3, 158.9),
  (322, 209, 2025, 1, 3120.7),(323, 209, 2025, 2, 2980.0),(324, 209, 2025, 3, 3005.2),
  (325, 210, 2025, 1, 1450.0),(326, 210, 2025, 2, NULL),  (327, 210, 2025, 3, 1180.4),
  (328, 211, 2025, 1, 280.6), (329, 211, 2025, 2, 265.0), (330, 211, 2025, 3, 254.3),
  (331, 212, 2025, 1, 195.0), (332, 212, 2025, 2, 188.4), (333, 212, 2025, 3, 176.1),
  (334, 214, 2025, 1, 230.8), (335, 214, 2025, 2, 215.5), (336, 214, 2025, 3, 207.0);

INSERT INTO rechnungen VALUES
  (401, 101, '2025-01-31',  81.31, 'bezahlt'),
  (402, 101, '2025-02-28',  73.03, 'bezahlt'),
  (403, 102, '2025-01-31', 121.90, 'bezahlt'),
  (404, 102, '2025-02-28', 109.55, 'offen'),
  (405, 103, '2025-01-31',  60.86, 'bezahlt'),
  (406, 104, '2025-01-31', 114.18, 'offen'),
  (407, 105, '2025-01-31',  64.02, 'bezahlt'),
  (408, 106, '2025-01-31', 831.46, 'bezahlt'),
  (409, 106, '2025-02-28', 794.66, 'offen'),
  (410, 108, '2025-01-31',  69.89, 'bezahlt'),
  (411, 109, '2025-01-31', 895.58, 'bezahlt'),
  (412, 110, '2025-01-31', 172.55, NULL),
  (413, 111, '2025-01-31', 108.11, 'storniert'),
  (414, 112, '2025-01-31',  77.10, 'bezahlt'),
  (415, 113, '2025-01-31', 117.74, 'offen'),
  (416, 114, '2025-01-31',  87.69, 'bezahlt');
`;

export const SQL_EXERCISES = [
  {
    id: 'select-basis',
    title: 'Einfaches SELECT',
    difficulty: 1,
    prompt: 'Gib alle Spalten aller Kunden aus, die in Hamburg wohnen.',
    solution: `SELECT * FROM kunden WHERE stadt = 'Hamburg';`,
  },
  {
    id: 'where-order',
    title: 'WHERE mit Sortierung',
    difficulty: 1,
    prompt: 'Zeige Tarif und Grundpreis aller Stromverträge (Sparte „Strom“), absteigend nach Grundpreis sortiert.',
    solution: `SELECT tarif, grundpreis FROM vertraege WHERE sparte = 'Strom' ORDER BY grundpreis DESC;`,
  },
  {
    id: 'like',
    title: 'Mustersuche mit LIKE',
    difficulty: 1,
    prompt: 'Finde Vorname, Nachname und E-Mail aller Kunden, deren E-Mail-Adresse auf „web.de“ endet.',
    solution: `SELECT vorname, nachname, email FROM kunden WHERE email LIKE '%web.de';`,
  },
  {
    id: 'is-null',
    title: 'NULL-Werte finden',
    difficulty: 1,
    prompt: 'Datenqualität: Liste Vorname, Nachname und Stadt aller Kunden auf, bei denen keine E-Mail-Adresse hinterlegt ist.',
    solution: `SELECT vorname, nachname, stadt FROM kunden WHERE email IS NULL;`,
  },
  {
    id: 'count-group',
    title: 'COUNT mit GROUP BY',
    difficulty: 2,
    prompt: 'Wie viele Kunden gibt es pro Stadt? Gib Stadt und Anzahl aus.',
    solution: `SELECT stadt, COUNT(*) AS anzahl FROM kunden GROUP BY stadt;`,
  },
  {
    id: 'avg-group',
    title: 'Durchschnitt pro Gruppe',
    difficulty: 2,
    prompt: 'Berechne den durchschnittlichen Grundpreis je Sparte (Tabelle vertraege). Gib Sparte und Durchschnitt aus.',
    solution: `SELECT sparte, AVG(grundpreis) AS avg_grundpreis FROM vertraege GROUP BY sparte;`,
  },
  {
    id: 'having',
    title: 'Gruppen filtern mit HAVING',
    difficulty: 2,
    prompt: 'In welchen Städten wohnen mehr als zwei Kunden? Gib Stadt und Anzahl aus.',
    solution: `SELECT stadt, COUNT(*) AS anzahl FROM kunden GROUP BY stadt HAVING COUNT(*) > 2;`,
  },
  {
    id: 'inner-join',
    title: 'INNER JOIN',
    difficulty: 2,
    prompt: 'Zeige zu jedem Vertrag den Nachnamen des Kunden und den Tarif (Tabellen kunden und vertraege verknüpfen).',
    solution: `SELECT k.nachname, v.tarif FROM kunden k INNER JOIN vertraege v ON v.kunden_id = k.kunden_id;`,
  },
  {
    id: 'left-join',
    title: 'LEFT JOIN mit Aggregat',
    difficulty: 3,
    prompt: 'Gib für jeden Kunden Nachname und Anzahl seiner Verträge aus – auch für Kunden ohne Vertrag (Anzahl 0). Gruppiere nach kunden_id.',
    solution: `SELECT k.nachname, COUNT(v.vertrag_id) AS anzahl FROM kunden k LEFT JOIN vertraege v ON v.kunden_id = k.kunden_id GROUP BY k.kunden_id;`,
  },
  {
    id: 'join-sum',
    title: 'JOIN über drei Tabellen',
    difficulty: 3,
    prompt: 'Berechne je Kunde (Nachname) den Gesamtverbrauch in kWh über alle seine Zähler (Tabellen kunden → vertraege → zaehler → verbrauch). Kunden ohne Messwerte sollen nicht erscheinen. Gruppiere nach kunden_id.',
    solution: `SELECT k.nachname, SUM(vb.kwh) AS gesamt_kwh
FROM kunden k
JOIN vertraege v ON v.kunden_id = k.kunden_id
JOIN zaehler z ON z.vertrag_id = v.vertrag_id
JOIN verbrauch vb ON vb.zaehler_id = z.zaehler_id
GROUP BY k.kunden_id;`,
  },
  {
    id: 'subquery',
    title: 'Subquery',
    difficulty: 3,
    prompt: 'Welche Rechnungen liegen über dem durchschnittlichen Rechnungsbetrag? Gib rechnung_id und betrag aus.',
    solution: `SELECT rechnung_id, betrag FROM rechnungen WHERE betrag > (SELECT AVG(betrag) FROM rechnungen);`,
  },
  {
    id: 'dubletten',
    title: 'Dubletten finden',
    difficulty: 3,
    prompt: 'Datenqualität: Finde doppelt angelegte Kunden anhand der E-Mail-Adresse. Gib E-Mail und Anzahl der Datensätze aus (nur E-Mails, die mehrfach vorkommen; NULL ignorieren).',
    solution: `SELECT email, COUNT(*) AS anzahl FROM kunden WHERE email IS NOT NULL GROUP BY email HAVING COUNT(*) > 1;`,
  },
  {
    id: 'null-quality',
    title: 'Fehlende Messwerte',
    difficulty: 2,
    prompt: 'Datenqualität: Liste alle Verbrauchs-Datensätze (zaehler_id, jahr, monat) auf, bei denen der kWh-Wert fehlt.',
    solution: `SELECT zaehler_id, jahr, monat FROM verbrauch WHERE kwh IS NULL;`,
  },
];

// Normalisiert einen Zellwert für den Vergleich (Floats runden, damit
// z. B. AVG-Ergebnisse nicht an Fließkomma-Artefakten scheitern).
function normalizeCell(v) {
  if (v === null || v === undefined) return '∅';
  if (typeof v === 'number') return String(Math.round(v * 1e6) / 1e6);
  return String(v);
}

function rowKey(row) {
  return row.map(normalizeCell).join('');
}

// Vergleicht zwei sql.js-Ergebnismengen ({ columns, values }).
// Verglichen werden die Werte (Spaltenzahl + Zeileninhalte), nicht die
// Spaltennamen – Aliase des Nutzers sind also egal. Ohne ORDER BY in der
// Musterlösung ist die Zeilenreihenfolge unerheblich.
export function resultsEqual(actual, expected, { ordered = false } = {}) {
  if (!actual || !expected) return false;
  const a = actual.values || [];
  const e = expected.values || [];
  if ((actual.columns || []).length !== (expected.columns || []).length) return false;
  if (a.length !== e.length) return false;
  if (ordered) {
    return a.every((row, i) => rowKey(row) === rowKey(e[i]));
  }
  const counts = new Map();
  for (const row of e) {
    const k = rowKey(row);
    counts.set(k, (counts.get(k) || 0) + 1);
  }
  for (const row of a) {
    const k = rowKey(row);
    const c = counts.get(k);
    if (!c) return false;
    counts.set(k, c - 1);
  }
  return true;
}

export function solutionIsOrdered(solutionSql) {
  return /order\s+by/i.test(solutionSql);
}
