import { describe, it, expect } from 'vitest';
import { serializeProgress, parseImportedProgress } from './exportImport.js';
import { defaultProgress, SCHEMA_VERSION } from './storage.js';

describe('Export/Import-Roundtrip', () => {
  it('exportierter Fortschritt lässt sich verlustfrei importieren', () => {
    const progress = {
      ...defaultProgress,
      completedTopics: { sql: { correctCount: 4, totalQuestions: 4, completed: true } },
      quizAnswers: { sql: { 0: 1, 1: 2 } },
      passedTopics: { sql: true },
      questionStats: { 'sql::0': { box: 3, correct: 2, wrong: 0, lastAnswered: '2026-06-01T00:00:00.000Z' } },
      studyStreakDays: 4,
      lastStudyDate: '2026-06-12T08:00:00.000Z',
      totalQuizzesPassed: 1,
    };
    const res = parseImportedProgress(serializeProgress(progress));
    expect(res.ok).toBe(true);
    expect(res.progress).toEqual(progress);
  });

  it('migriert alte Exporte (v1) beim Import', () => {
    const topics = [{
      id: 't1', title: 'T',
      quiz: [{ q: '', options: ['a', 'b', 'c', 'd'], correct: 0, explanation: '' }],
    }];
    const v1 = JSON.stringify({
      completedTopics: { t1: { correctCount: 1, totalQuestions: 1, completed: true } },
      quizAnswers: { t1: { 0: 0 } },
      lastStudyDate: '2026-06-01T00:00:00.000Z',
    });
    const res = parseImportedProgress(v1, topics);
    expect(res.ok).toBe(true);
    expect(res.progress.version).toBe(SCHEMA_VERSION);
    expect(res.progress.questionStats['t1::0'].box).toBe(2);
    expect(res.progress.passedTopics.t1).toBe(true);
    expect(res.progress.totalQuizzesPassed).toBe(1);
  });
});

describe('Import-Validierung', () => {
  it('weist kaputtes JSON zurück', () => {
    const res = parseImportedProgress('{nicht json');
    expect(res.ok).toBe(false);
    expect(res.error).toMatch(/JSON/);
  });

  it('weist Arrays und Primitives zurück', () => {
    expect(parseImportedProgress('[1,2]').ok).toBe(false);
    expect(parseImportedProgress('"hallo"').ok).toBe(false);
    expect(parseImportedProgress('null').ok).toBe(false);
  });

  it('weist JSON ohne Fortschritts-Felder zurück', () => {
    const res = parseImportedProgress('{"foo": 1}');
    expect(res.ok).toBe(false);
  });

  it('weist falsch typisierte Felder zurück', () => {
    expect(parseImportedProgress('{"completedTopics": "abc"}').ok).toBe(false);
    expect(parseImportedProgress('{"quizAnswers": [1,2]}').ok).toBe(false);
  });

  it('weist ungültige Datumsangaben zurück', () => {
    const res = parseImportedProgress('{"completedTopics": {}, "lastStudyDate": "kein-datum"}');
    expect(res.ok).toBe(false);
    expect(res.error).toMatch(/lastStudyDate/);
  });
});
