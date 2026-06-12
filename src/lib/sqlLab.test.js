import { describe, it, expect, beforeAll } from 'vitest';
import path from 'node:path';
import initSqlJs from 'sql.js';
import { SCHEMA_SQL, SQL_EXERCISES, resultsEqual, solutionIsOrdered } from './sqlLab.js';

describe('resultsEqual', () => {
  const rs = (columns, values) => ({ columns, values });

  it('vergleicht identische Ergebnisse als gleich', () => {
    const a = rs(['a', 'b'], [[1, 'x'], [2, 'y']]);
    expect(resultsEqual(a, a)).toBe(true);
  });

  it('ignoriert ohne ordered die Zeilenreihenfolge', () => {
    const a = rs(['a'], [[1], [2], [3]]);
    const b = rs(['a'], [[3], [1], [2]]);
    expect(resultsEqual(a, b)).toBe(true);
    expect(resultsEqual(a, b, { ordered: true })).toBe(false);
  });

  it('ignoriert abweichende Spaltennamen (Aliase), nicht aber Spaltenzahl', () => {
    const a = rs(['anzahl'], [[5]]);
    const b = rs(['cnt'], [[5]]);
    expect(resultsEqual(a, b)).toBe(true);
    expect(resultsEqual(rs(['a', 'b'], [[1, 2]]), rs(['a'], [[1]]))).toBe(false);
  });

  it('erkennt unterschiedliche Werte und Zeilenzahlen', () => {
    expect(resultsEqual(rs(['a'], [[1]]), rs(['a'], [[2]]))).toBe(false);
    expect(resultsEqual(rs(['a'], [[1]]), rs(['a'], [[1], [1]]))).toBe(false);
  });

  it('behandelt Multimengen korrekt (doppelte Zeilen)', () => {
    const a = rs(['a'], [[1], [1], [2]]);
    const b = rs(['a'], [[1], [2], [2]]);
    expect(resultsEqual(a, b)).toBe(false);
  });

  it('toleriert Fließkomma-Artefakte', () => {
    const a = rs(['avg'], [[12.300000000000001]]);
    const b = rs(['avg'], [[12.3]]);
    expect(resultsEqual(a, b)).toBe(true);
  });

  it('unterscheidet NULL von Strings/Zahlen', () => {
    expect(resultsEqual(rs(['a'], [[null]]), rs(['a'], [['null']]))).toBe(false);
    expect(resultsEqual(rs(['a'], [[null]]), rs(['a'], [[null]]))).toBe(true);
  });
});

describe('solutionIsOrdered', () => {
  it('erkennt ORDER BY in Musterlösungen', () => {
    expect(solutionIsOrdered('SELECT * FROM t ORDER BY x')).toBe(true);
    expect(solutionIsOrdered('SELECT * FROM t')).toBe(false);
  });
});

describe('Beispieldatenbank & Musterlösungen (Integration mit sql.js)', () => {
  let db;

  beforeAll(async () => {
    const SQL = await initSqlJs({
      locateFile: (f) => path.join(process.cwd(), 'node_modules/sql.js/dist', f),
    });
    db = new SQL.Database();
    db.run(SCHEMA_SQL);
  });

  it('enthält alle fünf Tabellen mit Daten', () => {
    for (const table of ['kunden', 'vertraege', 'zaehler', 'verbrauch', 'rechnungen']) {
      const [{ values }] = db.exec(`SELECT COUNT(*) FROM ${table}`);
      expect(values[0][0]).toBeGreaterThan(0);
    }
  });

  it('enthält NULL-Werte und Dubletten für Datenqualitäts-Aufgaben', () => {
    expect(db.exec(`SELECT COUNT(*) FROM kunden WHERE email IS NULL`)[0].values[0][0]).toBeGreaterThan(0);
    expect(db.exec(`SELECT COUNT(*) FROM verbrauch WHERE kwh IS NULL`)[0].values[0][0]).toBeGreaterThan(0);
    const dups = db.exec(`SELECT email FROM kunden WHERE email IS NOT NULL GROUP BY email HAVING COUNT(*) > 1`);
    expect(dups[0].values.length).toBeGreaterThan(0);
  });

  it('hat 10–15 Übungsaufgaben', () => {
    expect(SQL_EXERCISES.length).toBeGreaterThanOrEqual(10);
    expect(SQL_EXERCISES.length).toBeLessThanOrEqual(15);
  });

  it.each(SQL_EXERCISES.map((e) => [e.title, e]))(
    'Musterlösung "%s" läuft fehlerfrei und liefert Zeilen',
    (_title, exercise) => {
      const results = db.exec(exercise.solution);
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].values.length).toBeGreaterThan(0);
    }
  );

  it('eine inhaltlich gleiche Abfrage mit anderem Alias gilt als richtig', () => {
    const expected = db.exec(`SELECT stadt, COUNT(*) AS anzahl FROM kunden GROUP BY stadt`)[0];
    const actual = db.exec(`SELECT stadt, COUNT(kunden_id) AS cnt FROM kunden GROUP BY stadt ORDER BY stadt`)[0];
    expect(resultsEqual(actual, expected)).toBe(true);
  });
});
