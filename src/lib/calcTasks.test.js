import { describe, it, expect } from 'vitest';
import {
  maskFromCidr, networkAddress, broadcastAddress, usableHosts, raidNetCapacity,
  genSubnettingHosts, genSubnettingNetwork, genSubnetMask, genTransferTime,
  genAmortisation, genRoi, genAfa, genRaid, genNetzplan,
  genDurchlaufzeit, genFehlerquote, genFpy,
  generateTask, checkAnswer, TASK_CATEGORIES,
} from './calcTasks.js';

function seededRng(seed) {
  let s = seed;
  const next = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
  // LCG-Aufwärmphase: die ersten Werte korrelieren stark mit kleinen Seeds
  next(); next(); next();
  return next;
}

describe('Subnetting-Grundfunktionen', () => {
  it('berechnet Subnetzmasken korrekt', () => {
    expect(maskFromCidr(24)).toBe('255.255.255.0');
    expect(maskFromCidr(26)).toBe('255.255.255.192');
    expect(maskFromCidr(20)).toBe('255.255.240.0');
    expect(maskFromCidr(30)).toBe('255.255.255.252');
  });

  it('berechnet Netz- und Broadcast-Adresse korrekt', () => {
    expect(networkAddress([192, 168, 13, 77], 24)).toBe('192.168.13.0');
    expect(broadcastAddress([192, 168, 13, 77], 24)).toBe('192.168.13.255');
    expect(networkAddress([172, 16, 35, 200], 20)).toBe('172.16.32.0');
    expect(broadcastAddress([172, 16, 35, 200], 20)).toBe('172.16.47.255');
    expect(networkAddress([10, 0, 5, 130], 26)).toBe('10.0.5.128');
    expect(broadcastAddress([10, 0, 5, 130], 26)).toBe('10.0.5.191');
  });

  it('berechnet nutzbare Hosts korrekt', () => {
    expect(usableHosts(24)).toBe(254);
    expect(usableHosts(26)).toBe(62);
    expect(usableHosts(29)).toBe(6);
  });
});

describe('RAID-Nettokapazität', () => {
  it.each([
    [0, 4, 2, 8],
    [1, 2, 4, 4],
    [5, 5, 2, 8],
    [6, 6, 1, 4],
    [10, 6, 2, 6],
  ])('RAID %i mit %i × %i TB → %i TB', (level, n, size, expected) => {
    expect(raidNetCapacity(level, n, size)).toBe(expected);
  });
});

describe('Generatoren liefern konsistente Aufgaben', () => {
  const generators = [
    genSubnettingHosts, genSubnettingNetwork, genSubnetMask, genTransferTime,
    genAmortisation, genRoi, genAfa, genRaid, genNetzplan,
    genDurchlaufzeit, genFehlerquote, genFpy,
  ];

  it.each(generators.map((g) => [g.name, g]))('%s erzeugt vollständige Aufgabe', (_name, gen) => {
    for (let seed = 1; seed <= 20; seed++) {
      const task = gen(seededRng(seed));
      expect(task.question.length).toBeGreaterThan(10);
      expect(task.steps.length).toBeGreaterThan(0);
      expect(['number', 'text']).toContain(task.inputType);
      if (task.inputType === 'number') {
        expect(Number.isFinite(task.answer)).toBe(true);
      } else {
        expect(typeof task.answer).toBe('string');
      }
    }
  });

  it('Antworten stimmen mit den Parametern überein (Stichproben)', () => {
    for (let seed = 1; seed <= 30; seed++) {
      const hosts = genSubnettingHosts(seededRng(seed));
      expect(hosts.answer).toBe(Math.pow(2, 32 - hosts.params.cidr) - 2);

      const t = genTransferTime(seededRng(seed));
      expect(t.answer).toBeCloseTo((t.params.sizeMb * 8) / t.params.speed, 1);

      const a = genAmortisation(seededRng(seed));
      expect(a.answer).toBeCloseTo(a.params.kosten / a.params.ersparnis, 1);

      const r = genRaid(seededRng(seed));
      expect(r.answer).toBe(raidNetCapacity(r.params.level, r.params.n, r.params.size));

      const np = genNetzplan(seededRng(seed));
      expect(np.answer).toBe(np.params.saz - np.params.faz);
      expect(np.answer).toBe(np.params.sez - np.params.fez);

      const net = genSubnettingNetwork(seededRng(seed));
      const expected = net.params.which === 'netz'
        ? networkAddress(net.params.ip, net.params.cidr)
        : broadcastAddress(net.params.ip, net.params.cidr);
      expect(net.answer).toBe(expected);
    }
  });

  it('RAID 10 hat immer eine gerade Plattenzahl, RAID 6 mindestens 4', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const r = genRaid(seededRng(seed));
      if (r.params.level === 10) expect(r.params.n % 2).toBe(0);
      if (r.params.level === 6) expect(r.params.n).toBeGreaterThanOrEqual(4);
      if (r.params.level === 1) expect(r.params.n).toBe(2);
    }
  });
});

describe('generateTask', () => {
  it('liefert nur Aufgaben der gewählten Kategorie', () => {
    for (const cat of TASK_CATEGORIES) {
      const task = generateTask(cat.id, seededRng(7));
      expect(task.category).toBe(cat.label);
    }
  });

  it('mischt bei "all" über alle Kategorien', () => {
    const seen = new Set();
    for (let seed = 1; seed <= 60; seed++) {
      seen.add(generateTask('all', seededRng(seed)).category);
    }
    expect(seen.size).toBeGreaterThan(3);
  });
});

describe('checkAnswer', () => {
  const numTask = { inputType: 'number', answer: 12.5, tolerance: 0.05 };

  it('akzeptiert Punkt und Komma als Dezimaltrennzeichen', () => {
    expect(checkAnswer(numTask, '12.5')).toBe(true);
    expect(checkAnswer(numTask, '12,5')).toBe(true);
    expect(checkAnswer(numTask, ' 12,50 ')).toBe(true);
  });

  it('respektiert die Rundungstoleranz', () => {
    expect(checkAnswer(numTask, '12.46')).toBe(true);
    expect(checkAnswer(numTask, '12.54')).toBe(true);
    expect(checkAnswer(numTask, '12.4')).toBe(false);
    expect(checkAnswer(numTask, '13')).toBe(false);
  });

  it('weist leere und unsinnige Eingaben zurück', () => {
    expect(checkAnswer(numTask, '')).toBe(false);
    expect(checkAnswer(numTask, 'abc')).toBe(false);
  });

  it('vergleicht Text-Antworten exakt (case-insensitiv, getrimmt)', () => {
    const textTask = { inputType: 'text', answer: '192.168.1.0' };
    expect(checkAnswer(textTask, '192.168.1.0')).toBe(true);
    expect(checkAnswer(textTask, ' 192.168.1.0 ')).toBe(true);
    expect(checkAnswer(textTask, '192.168.1.1')).toBe(false);
  });
});
