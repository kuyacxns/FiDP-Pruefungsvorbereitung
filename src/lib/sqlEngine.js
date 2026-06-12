// Dieser Modul wird per dynamischem import() geladen, damit sql.js
// (WebAssembly, ~1 MB) die initiale Ladezeit der App nicht verschlechtert.
import initSqlJs from 'sql.js';
import wasmUrl from 'sql.js/dist/sql-wasm.wasm?url';
import { SCHEMA_SQL } from './sqlLab.js';

let sqlPromise = null;

export function loadSql() {
  if (!sqlPromise) {
    sqlPromise = initSqlJs({ locateFile: () => wasmUrl });
  }
  return sqlPromise;
}

// Frische In-Memory-Datenbank mit Beispieldaten. Die Daten sind klein,
// daher ist ein Neuaufbau pro Ausführung billig und macht die Übungen
// robust gegen versehentliche UPDATE/DELETE-Statements.
export async function createDatabase() {
  const SQL = await loadSql();
  const db = new SQL.Database();
  db.run(SCHEMA_SQL);
  return db;
}

// Führt SQL aus und liefert das letzte Ergebnis-Set oder einen Fehler.
export function runQuery(db, sql) {
  try {
    const results = db.exec(sql);
    const last = results.length > 0 ? results[results.length - 1] : { columns: [], values: [] };
    return { ok: true, result: last };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}
