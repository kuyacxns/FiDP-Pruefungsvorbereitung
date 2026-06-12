import { migrateProgress } from './storage.js';

// Export/Import des Fortschritts als JSON-Datei.

export function serializeProgress(progress) {
  return JSON.stringify(progress, null, 2);
}

const OBJECT_FIELDS = ['completedTopics', 'quizAnswers', 'questionStats', 'passedTopics'];

export function parseImportedProgress(text, allTopics = []) {
  let raw;
  try {
    raw = JSON.parse(text);
  } catch {
    return { ok: false, error: 'Die Datei enthält kein gültiges JSON.' };
  }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, error: 'Unerwartetes Format – erwartet wird ein Fortschritts-Objekt.' };
  }
  if (!OBJECT_FIELDS.some((f) => f in raw)) {
    return { ok: false, error: 'Die Datei sieht nicht nach einem FIDP-Fortschritts-Export aus.' };
  }
  for (const f of OBJECT_FIELDS) {
    if (raw[f] !== undefined && (raw[f] === null || typeof raw[f] !== 'object' || Array.isArray(raw[f]))) {
      return { ok: false, error: `Feld „${f}“ hat ein ungültiges Format.` };
    }
  }
  if (raw.lastStudyDate != null && Number.isNaN(Date.parse(raw.lastStudyDate))) {
    return { ok: false, error: 'Feld „lastStudyDate“ ist kein gültiges Datum.' };
  }
  // Ältere Exporte werden beim Import auf das aktuelle Schema migriert
  return { ok: true, progress: migrateProgress(raw, allTopics) };
}
