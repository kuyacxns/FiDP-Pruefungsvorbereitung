import { describe, it, expect } from 'vitest';
import { drawExamQuestions, ihkGrade, scoreExam } from './exam.js';

function seededRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const topics = [
  {
    id: 't1', title: 'Thema 1',
    quiz: Array.from({ length: 5 }, (_, i) => ({
      q: `F1-${i}`, options: ['a', 'b', 'c', 'd'], correct: i % 4, explanation: '',
    })),
  },
  {
    id: 't2', title: 'Thema 2',
    quiz: Array.from({ length: 5 }, (_, i) => ({
      q: `F2-${i}`, options: ['a', 'b', 'c', 'd'], correct: (i + 1) % 4, explanation: '',
    })),
  },
];

describe('drawExamQuestions', () => {
  it('zieht genau count Fragen ohne Duplikate', () => {
    const items = drawExamQuestions(topics, 6, seededRng(1));
    expect(items).toHaveLength(6);
    const keys = items.map((it) => `${it.topicId}:${it.qIndex}`);
    expect(new Set(keys).size).toBe(6);
  });

  it('begrenzt auf die Poolgröße, wenn count größer ist', () => {
    const items = drawExamQuestions(topics, 99, seededRng(1));
    expect(items).toHaveLength(10);
  });

  it('jedes Item hat eine vollständige Options-Permutation', () => {
    const items = drawExamQuestions(topics, 10, seededRng(3));
    for (const it of items) {
      expect(it.optionOrder.slice().sort()).toEqual([0, 1, 2, 3]);
    }
  });
});

describe('ihkGrade (IHK-Notenschlüssel)', () => {
  it.each([
    [100, 1], [92, 1],
    [91, 2], [81, 2],
    [80, 3], [67, 3],
    [66, 4], [50, 4],
  ])('%i %% → Note %i (bestanden)', (pct, grade) => {
    expect(ihkGrade(pct)).toEqual({ grade, passed: true });
  });

  it.each([[49], [30], [0]])('%i %% → nicht bestanden', (pct) => {
    expect(ihkGrade(pct)).toEqual({ grade: 5, passed: false });
  });
});

describe('scoreExam', () => {
  const items = drawExamQuestions(topics, 10, seededRng(5));

  it('wertet alles richtig beantwortet als 100 % / Note 1', () => {
    const answers = Object.fromEntries(items.map((it, i) => [i, it.question.correct]));
    const r = scoreExam(items, answers);
    expect(r.correct).toBe(10);
    expect(r.pct).toBe(100);
    expect(r.grade).toBe(1);
    expect(r.wrong).toHaveLength(0);
  });

  it('zählt unbeantwortete Fragen als falsch', () => {
    const r = scoreExam(items, {});
    expect(r.correct).toBe(0);
    expect(r.passed).toBe(false);
    expect(r.wrong).toHaveLength(10);
  });

  it('schlüsselt nach Themen auf', () => {
    const answers = Object.fromEntries(items.map((it, i) => [i, it.question.correct]));
    const r = scoreExam(items, answers);
    const sum = Object.values(r.byTopic).reduce((a, t) => a + t.total, 0);
    expect(sum).toBe(10);
    for (const t of Object.values(r.byTopic)) {
      expect(t.correct).toBe(t.total);
    }
  });

  it('liefert falsche Antworten mit Index und gegebener Antwort', () => {
    const answers = Object.fromEntries(items.map((it, i) => [i, it.question.correct]));
    const wrongAnswer = (items[0].question.correct + 1) % 4;
    answers[0] = wrongAnswer;
    const r = scoreExam(items, answers);
    expect(r.correct).toBe(9);
    expect(r.wrong).toHaveLength(1);
    expect(r.wrong[0].index).toBe(0);
    expect(r.wrong[0].given).toBe(wrongAnswer);
  });
});
