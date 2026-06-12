import { describe, it, expect } from 'vitest';
import { shuffle, buildShuffledQuizView } from './shuffle.js';

// Deterministischer Pseudozufall für reproduzierbare Tests
function seededRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const sampleQuiz = [
  { q: 'F1', options: ['a', 'b', 'c', 'd'], correct: 1, explanation: 'E1' },
  { q: 'F2', options: ['e', 'f', 'g', 'h'], correct: 0, explanation: 'E2' },
  { q: 'F3', options: ['i', 'j', 'k', 'l'], correct: 3, explanation: 'E3' },
];

describe('shuffle', () => {
  it('verändert das Original-Array nicht', () => {
    const arr = [1, 2, 3, 4, 5];
    shuffle(arr, seededRng(1));
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('enthält dieselben Elemente', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const out = shuffle(arr, seededRng(42));
    expect(out.slice().sort((a, b) => a - b)).toEqual(arr);
  });

  it('erzeugt mit unterschiedlichen Seeds unterschiedliche Reihenfolgen', () => {
    const arr = Array.from({ length: 20 }, (_, i) => i);
    const a = shuffle(arr, seededRng(1));
    const b = shuffle(arr, seededRng(99));
    expect(a).not.toEqual(b);
  });
});

describe('buildShuffledQuizView', () => {
  it('enthält alle Fragen genau einmal (Original-Indizes vollständig)', () => {
    const view = buildShuffledQuizView(sampleQuiz, seededRng(7));
    const qIndices = view.map((v) => v.qIndex).sort();
    expect(qIndices).toEqual([0, 1, 2]);
  });

  it('enthält pro Frage alle Optionen genau einmal', () => {
    const view = buildShuffledQuizView(sampleQuiz, seededRng(7));
    for (const v of view) {
      const oIndices = v.options.map((o) => o.oIndex).sort();
      expect(oIndices).toEqual([0, 1, 2, 3]);
    }
  });

  it('mappt Optionstexte korrekt auf Original-Indizes', () => {
    const view = buildShuffledQuizView(sampleQuiz, seededRng(13));
    for (const v of view) {
      for (const opt of v.options) {
        expect(opt.text).toBe(sampleQuiz[v.qIndex].options[opt.oIndex]);
      }
    }
  });

  it('die korrekte Antwort bleibt über das Mapping auffindbar', () => {
    const view = buildShuffledQuizView(sampleQuiz, seededRng(99));
    for (const v of view) {
      const correctOption = v.options.find((o) => o.oIndex === v.correct);
      expect(correctOption.text).toBe(sampleQuiz[v.qIndex].options[sampleQuiz[v.qIndex].correct]);
    }
  });

  it('correct übernimmt den Original-correct-Index der Frage', () => {
    const view = buildShuffledQuizView(sampleQuiz, seededRng(5));
    for (const v of view) {
      expect(v.correct).toBe(sampleQuiz[v.qIndex].correct);
    }
  });
});
