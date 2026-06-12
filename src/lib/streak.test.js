import { describe, it, expect } from 'vitest';
import { computeStreak, withStudyActivity } from './streak.js';

const at = (s) => new Date(s);

describe('computeStreak', () => {
  it('startet bei 1, wenn nie zuvor gelernt wurde', () => {
    expect(computeStreak(0, null, at('2026-06-12T10:00:00'))).toBe(1);
  });

  it('bleibt am selben Tag unverändert', () => {
    expect(computeStreak(3, '2026-06-12T08:00:00', at('2026-06-12T22:00:00'))).toBe(3);
  });

  it('zählt am Folgetag hoch', () => {
    expect(computeStreak(3, '2026-06-11T23:30:00', at('2026-06-12T00:10:00'))).toBe(4);
  });

  it('setzt nach einer Lücke auf 1 zurück', () => {
    expect(computeStreak(7, '2026-06-09T10:00:00', at('2026-06-12T10:00:00'))).toBe(1);
  });

  it('repariert Altdaten mit Streak 0 trotz Aktivität gestern', () => {
    expect(computeStreak(0, '2026-06-11T10:00:00', at('2026-06-12T10:00:00'))).toBe(2);
    expect(computeStreak(0, '2026-06-12T08:00:00', at('2026-06-12T10:00:00'))).toBe(1);
  });

  it('funktioniert über Monatsgrenzen', () => {
    expect(computeStreak(5, '2026-05-31T20:00:00', at('2026-06-01T07:00:00'))).toBe(6);
  });
});

describe('withStudyActivity', () => {
  it('aktualisiert Streak und lastStudyDate', () => {
    const now = at('2026-06-12T10:00:00');
    const p = withStudyActivity(
      { studyStreakDays: 2, lastStudyDate: '2026-06-11T09:00:00', foo: 'bar' },
      now
    );
    expect(p.studyStreakDays).toBe(3);
    expect(p.lastStudyDate).toBe(now.toISOString());
    expect(p.foo).toBe('bar');
  });
});
