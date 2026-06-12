import { describe, it, expect } from 'vitest';
import {
  questionId, parseQuestionId, recordAnswer, applyQuizAnswers,
  isDue, getDueQuestions, MAX_BOX,
} from './leitner.js';
import { migrateProgress, defaultProgress, SCHEMA_VERSION } from './storage.js';

const DAY = 24 * 60 * 60 * 1000;
const NOW = new Date('2026-06-12T10:00:00Z').getTime();

describe('questionId', () => {
  it('erzeugt und parst IDs korrekt (auch mit Sonderzeichen in Topic-IDs)', () => {
    const qid = questionId('sql_joins', 4);
    expect(qid).toBe('sql_joins::4');
    expect(parseQuestionId(qid)).toEqual({ topicId: 'sql_joins', qIndex: 4 });
  });
});

describe('recordAnswer (Leitner-Box-Logik)', () => {
  it('legt neue Fragen bei richtiger Antwort in Box 2 an', () => {
    const stat = recordAnswer(undefined, true, NOW);
    expect(stat.box).toBe(2);
    expect(stat.correct).toBe(1);
    expect(stat.wrong).toBe(0);
    expect(stat.lastAnswered).toBe(new Date(NOW).toISOString());
  });

  it('legt neue Fragen bei falscher Antwort in Box 1 an', () => {
    const stat = recordAnswer(undefined, false, NOW);
    expect(stat.box).toBe(1);
    expect(stat.wrong).toBe(1);
  });

  it('erhöht die Box bei richtiger Antwort um 1, maximal bis Box 5', () => {
    let stat = { box: 4, correct: 3, wrong: 1, lastAnswered: null };
    stat = recordAnswer(stat, true, NOW);
    expect(stat.box).toBe(5);
    stat = recordAnswer(stat, true, NOW);
    expect(stat.box).toBe(MAX_BOX);
  });

  it('setzt bei falscher Antwort zurück in Box 1', () => {
    const stat = recordAnswer({ box: 5, correct: 9, wrong: 0, lastAnswered: null }, false, NOW);
    expect(stat.box).toBe(1);
    expect(stat.correct).toBe(9);
    expect(stat.wrong).toBe(1);
  });
});

describe('isDue (Fälligkeit)', () => {
  const statIn = (box, daysAgo) => ({
    box, correct: 0, wrong: 0,
    lastAnswered: new Date(NOW - daysAgo * DAY).toISOString(),
  });

  it('Box 1 ist sofort fällig', () => {
    expect(isDue(statIn(1, 0), NOW)).toBe(true);
  });

  it('Box 2 ist nach 1 Tag fällig, vorher nicht', () => {
    expect(isDue(statIn(2, 0.5), NOW)).toBe(false);
    expect(isDue(statIn(2, 1), NOW)).toBe(true);
  });

  it('Box 5 ist erst nach 14 Tagen fällig', () => {
    expect(isDue(statIn(5, 13), NOW)).toBe(false);
    expect(isDue(statIn(5, 14), NOW)).toBe(true);
  });
});

const topics = [
  {
    id: 't1', title: 'Thema 1',
    quiz: [
      { q: 'A', options: ['1', '2', '3', '4'], correct: 0, explanation: '' },
      { q: 'B', options: ['1', '2', '3', '4'], correct: 2, explanation: '' },
    ],
  },
  {
    id: 't2', title: 'Thema 2',
    quiz: [
      { q: 'C', options: ['1', '2', '3', '4'], correct: 1, explanation: '' },
    ],
  },
];

describe('applyQuizAnswers', () => {
  it('verbucht alle beantworteten Fragen eines Quiz', () => {
    const stats = applyQuizAnswers({}, 't1', topics[0].quiz, { 0: 0, 1: 1 }, NOW);
    expect(stats['t1::0'].box).toBe(2); // richtig (correct=0)
    expect(stats['t1::1'].box).toBe(1); // falsch (correct=2, geantwortet 1)
  });

  it('lässt unbeantwortete Fragen aus und mutiert das Original nicht', () => {
    const before = {};
    const stats = applyQuizAnswers(before, 't1', topics[0].quiz, { 0: 0 }, NOW);
    expect(stats['t1::1']).toBeUndefined();
    expect(before).toEqual({});
  });
});

describe('getDueQuestions', () => {
  it('liefert nur beantwortete und fällige Fragen quer über alle Themen', () => {
    const questionStats = {
      't1::0': { box: 1, correct: 0, wrong: 1, lastAnswered: new Date(NOW - DAY).toISOString() },
      't1::1': { box: 5, correct: 5, wrong: 0, lastAnswered: new Date(NOW - DAY).toISOString() },
      't2::0': { box: 2, correct: 1, wrong: 0, lastAnswered: new Date(NOW - 2 * DAY).toISOString() },
    };
    const due = getDueQuestions(questionStats, topics, NOW);
    const ids = due.map((d) => questionId(d.topicId, d.qIndex));
    expect(ids).toEqual(['t1::0', 't2::0']);
    expect(due[0].question.q).toBe('A');
    expect(due[0].topicTitle).toBe('Thema 1');
  });
});

describe('migrateProgress (v1 → v2)', () => {
  it('überführt vorhandene Quiz-Antworten in Leitner-Statistiken', () => {
    const v1 = {
      completedTopics: { t1: { correctCount: 1, totalQuestions: 2, completed: false } },
      quizAnswers: { t1: { 0: 0, 1: 1 } },
      lastStudyDate: '2026-06-01T00:00:00.000Z',
      totalQuizzesPassed: 0,
    };
    const p = migrateProgress(v1, topics);
    expect(p.version).toBe(SCHEMA_VERSION);
    expect(p.questionStats['t1::0']).toMatchObject({ box: 2, correct: 1, wrong: 0 });
    expect(p.questionStats['t1::1']).toMatchObject({ box: 1, correct: 0, wrong: 1 });
    expect(p.questionStats['t1::0'].lastAnswered).toBe('2026-06-01T00:00:00.000Z');
    // Bestehende Felder bleiben unangetastet
    expect(p.completedTopics).toEqual(v1.completedTopics);
    expect(p.quizAnswers).toEqual(v1.quizAnswers);
  });

  it('migriert bereits aktuelles Schema nicht erneut', () => {
    const v2 = {
      ...defaultProgress,
      questionStats: { 't1::0': { box: 3, correct: 2, wrong: 0, lastAnswered: 'x' } },
      quizAnswers: { t1: { 0: 0 } },
    };
    const p = migrateProgress(v2, topics);
    expect(p.questionStats['t1::0'].box).toBe(3);
  });

  it('füllt fehlende Felder mit Defaults auf', () => {
    const p = migrateProgress({}, []);
    expect(p.questionStats).toEqual({});
    expect(p.completedTopics).toEqual({});
    expect(p.version).toBe(SCHEMA_VERSION);
  });
});
