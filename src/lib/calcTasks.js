// Generatoren für prüfungstypische Rechenaufgaben. Jede Aufgabe liefert:
// { category, question, answer, unit, tolerance, steps[], inputType, params }
// answer ist bei inputType 'number' eine Zahl (Toleranz für Rundung),
// bei inputType 'text' ein String (z. B. IP-Adressen, exakter Vergleich).

function randInt(rng, min, max) {
  return min + Math.floor(rng() * (max - min + 1));
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

function round2(x) {
  return Math.round(x * 100) / 100;
}

// ── Subnetting ────────────────────────────────────────────────

function ipToInt(parts) {
  return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
}

function intToIp(n) {
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
}

export function maskFromCidr(cidr) {
  const m = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
  return intToIp(m);
}

export function networkAddress(ipParts, cidr) {
  const mask = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
  return intToIp((ipToInt(ipParts) & mask) >>> 0);
}

export function broadcastAddress(ipParts, cidr) {
  const mask = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
  return intToIp((ipToInt(ipParts) | (~mask >>> 0)) >>> 0);
}

export function usableHosts(cidr) {
  return Math.pow(2, 32 - cidr) - 2;
}

export function genSubnettingHosts(rng = Math.random) {
  const cidr = randInt(rng, 20, 29);
  const hosts = usableHosts(cidr);
  return {
    category: 'Subnetting',
    inputType: 'number',
    question: `Ein Netz hat die Präfixlänge /${cidr}. Wie viele nutzbare Host-Adressen stehen zur Verfügung?`,
    answer: hosts,
    unit: 'Hosts',
    tolerance: 0,
    params: { cidr },
    steps: [
      `Host-Bits: 32 − ${cidr} = ${32 - cidr} Bit`,
      `Adressen im Netz: 2^${32 - cidr} = ${Math.pow(2, 32 - cidr)}`,
      `Abzüglich Netzadresse und Broadcast: ${Math.pow(2, 32 - cidr)} − 2 = ${hosts} nutzbare Hosts`,
    ],
  };
}

export function genSubnettingNetwork(rng = Math.random) {
  const cidr = randInt(rng, 21, 28);
  const ip = [randInt(rng, 10, 192), randInt(rng, 0, 255), randInt(rng, 0, 255), randInt(rng, 1, 254)];
  const which = pick(rng, ['netz', 'broadcast']);
  const ipStr = ip.join('.');
  const net = networkAddress(ip, cidr);
  const bc = broadcastAddress(ip, cidr);
  const answer = which === 'netz' ? net : bc;
  return {
    category: 'Subnetting',
    inputType: 'text',
    question: `Gegeben ist die IP-Adresse ${ipStr}/${cidr}. Bestimme die ${which === 'netz' ? 'Netzadresse' : 'Broadcast-Adresse'}. (Format: x.x.x.x)`,
    answer,
    unit: '',
    tolerance: 0,
    params: { ip, cidr, which },
    steps: [
      `Subnetzmaske für /${cidr}: ${maskFromCidr(cidr)}`,
      `Netzadresse = IP UND Maske (alle Host-Bits auf 0): ${net}`,
      `Broadcast = Netzadresse mit allen Host-Bits auf 1: ${bc}`,
      `Gesucht war die ${which === 'netz' ? `Netzadresse: ${net}` : `Broadcast-Adresse: ${bc}`}`,
    ],
  };
}

export function genSubnetMask(rng = Math.random) {
  const cidr = randInt(rng, 18, 30);
  const mask = maskFromCidr(cidr);
  return {
    category: 'Subnetting',
    inputType: 'text',
    question: `Welche Subnetzmaske (dotted decimal) gehört zur Präfixlänge /${cidr}? (Format: x.x.x.x)`,
    answer: mask,
    unit: '',
    tolerance: 0,
    params: { cidr },
    steps: [
      `/${cidr} bedeutet: die ersten ${cidr} Bit sind Netzanteil (auf 1 gesetzt)`,
      `In Oktetten: ${Math.floor(cidr / 8)} volle Oktette (255) + ${cidr % 8} Bit im nächsten Oktett`,
      `Ergebnis: ${mask}`,
    ],
  };
}

// ── Übertragungszeit ──────────────────────────────────────────

export function genTransferTime(rng = Math.random) {
  const useGb = rng() < 0.5;
  const size = useGb ? pick(rng, [1, 2, 4, 5, 8, 10]) : pick(rng, [50, 100, 200, 250, 400, 500, 800]);
  const sizeMb = useGb ? size * 1000 : size;
  const speed = pick(rng, [16, 50, 100, 250, 500, 1000]);
  const seconds = round2((sizeMb * 8) / speed);
  return {
    category: 'Übertragungszeit',
    inputType: 'number',
    question: `Eine Datei von ${size} ${useGb ? 'GB' : 'MB'} wird über eine Leitung mit ${speed} Mbit/s übertragen. Wie lange dauert die Übertragung in Sekunden? (1 GB = 1000 MB, 1 Byte = 8 Bit)`,
    answer: seconds,
    unit: 's',
    tolerance: Math.max(0.05, seconds * 0.01),
    params: { size, useGb, sizeMb, speed },
    steps: [
      ...(useGb ? [`${size} GB = ${sizeMb} MB`] : []),
      `Megabyte in Megabit umrechnen: ${sizeMb} MB × 8 = ${sizeMb * 8} Mbit`,
      `Zeit = Datenmenge ÷ Übertragungsrate = ${sizeMb * 8} Mbit ÷ ${speed} Mbit/s`,
      `= ${seconds} Sekunden`,
    ],
  };
}

// ── Wirtschaftlichkeit ────────────────────────────────────────

export function genAmortisation(rng = Math.random) {
  const kosten = randInt(rng, 4, 40) * 2500;
  const ersparnis = randInt(rng, 2, 12) * 1250;
  const jahre = round2(kosten / ersparnis);
  return {
    category: 'Wirtschaftlichkeit',
    inputType: 'number',
    question: `Eine neue Software kostet ${kosten.toLocaleString('de-DE')} € in der Anschaffung und spart jährlich ${ersparnis.toLocaleString('de-DE')} € an Betriebskosten. Nach wie vielen Jahren hat sie sich amortisiert?`,
    answer: jahre,
    unit: 'Jahre',
    tolerance: 0.05,
    params: { kosten, ersparnis },
    steps: [
      `Amortisationsdauer = Anschaffungskosten ÷ jährliche Ersparnis`,
      `= ${kosten.toLocaleString('de-DE')} € ÷ ${ersparnis.toLocaleString('de-DE')} €/Jahr`,
      `= ${jahre} Jahre`,
    ],
  };
}

export function genRoi(rng = Math.random) {
  const invest = randInt(rng, 4, 40) * 2500;
  const gewinn = randInt(rng, 1, 20) * 1250;
  const roi = round2((gewinn / invest) * 100);
  return {
    category: 'Wirtschaftlichkeit',
    inputType: 'number',
    question: `Ein IT-Projekt erfordert eine Investition von ${invest.toLocaleString('de-DE')} € und erwirtschaftet einen Gewinn von ${gewinn.toLocaleString('de-DE')} €. Wie hoch ist der ROI in Prozent?`,
    answer: roi,
    unit: '%',
    tolerance: 0.05,
    params: { invest, gewinn },
    steps: [
      `ROI = Gewinn ÷ investiertes Kapital × 100`,
      `= ${gewinn.toLocaleString('de-DE')} € ÷ ${invest.toLocaleString('de-DE')} € × 100`,
      `= ${roi} %`,
    ],
  };
}

export function genAfa(rng = Math.random) {
  const wert = randInt(rng, 2, 30) * 600;
  const jahre = pick(rng, [3, 4, 5, 6, 8, 10]);
  const afa = round2(wert / jahre);
  return {
    category: 'Wirtschaftlichkeit',
    inputType: 'number',
    question: `Ein Server wird für ${wert.toLocaleString('de-DE')} € angeschafft und über ${jahre} Jahre linear abgeschrieben. Wie hoch ist der jährliche Abschreibungsbetrag in Euro?`,
    answer: afa,
    unit: '€',
    tolerance: 0.5,
    params: { wert, jahre },
    steps: [
      `Lineare AfA = Anschaffungswert ÷ Nutzungsdauer`,
      `= ${wert.toLocaleString('de-DE')} € ÷ ${jahre} Jahre`,
      `= ${afa.toLocaleString('de-DE')} € pro Jahr`,
    ],
  };
}

// ── RAID-Nettokapazität ───────────────────────────────────────

export function raidNetCapacity(level, n, size) {
  switch (level) {
    case 0: return n * size;
    case 1: return size;
    case 5: return (n - 1) * size;
    case 6: return (n - 2) * size;
    case 10: return (n / 2) * size;
    default: return NaN;
  }
}

export function genRaid(rng = Math.random) {
  const level = pick(rng, [0, 1, 5, 6, 10]);
  const size = pick(rng, [1, 2, 4, 8]);
  let n;
  if (level === 1) n = 2;
  else if (level === 10) n = pick(rng, [4, 6, 8]);
  else if (level === 6) n = randInt(rng, 4, 8);
  else n = randInt(rng, 3, 8); // RAID 0 / 5
  const net = raidNetCapacity(level, n, size);
  const formula = {
    0: `n × Größe = ${n} × ${size} TB (Striping, keine Redundanz)`,
    1: `Größe einer Platte = ${size} TB (Spiegelung)`,
    5: `(n − 1) × Größe = ${n - 1} × ${size} TB (1 Platte Parität)`,
    6: `(n − 2) × Größe = ${n - 2} × ${size} TB (2 Platten Parität)`,
    10: `(n ÷ 2) × Größe = ${n / 2} × ${size} TB (gespiegelte Stripes)`,
  }[level];
  return {
    category: 'RAID',
    inputType: 'number',
    question: `Ein RAID ${level} besteht aus ${n} Festplatten mit je ${size} TB. Wie groß ist die nutzbare Nettokapazität in TB?`,
    answer: net,
    unit: 'TB',
    tolerance: 0,
    params: { level, n, size },
    steps: [
      `RAID ${level}: ${formula}`,
      `Nettokapazität = ${net} TB`,
    ],
  };
}

// ── Netzplan ──────────────────────────────────────────────────

export function genNetzplan(rng = Math.random) {
  const dauer = randInt(rng, 2, 10);
  const faz = randInt(rng, 0, 15);
  const fez = faz + dauer;
  const puffer = randInt(rng, 0, 8);
  const saz = faz + puffer;
  const sez = fez + puffer;
  return {
    category: 'Netzplan',
    inputType: 'number',
    question: `Ein Vorgang im Netzplan hat folgende Zeitpunkte: FAZ = ${faz}, FEZ = ${fez}, SAZ = ${saz}, SEZ = ${sez}. Wie groß ist der Gesamtpuffer (GP)?`,
    answer: puffer,
    unit: 'ZE',
    tolerance: 0,
    params: { faz, fez, saz, sez, dauer },
    steps: [
      `Gesamtpuffer GP = SAZ − FAZ (oder gleichwertig SEZ − FEZ)`,
      `GP = ${saz} − ${faz} = ${puffer}`,
      `Kontrolle: ${sez} − ${fez} = ${puffer}`,
      puffer === 0 ? `GP = 0 → der Vorgang liegt auf dem kritischen Pfad.` : `GP > 0 → der Vorgang kann sich um ${puffer} ZE verschieben, ohne das Projektende zu gefährden.`,
    ],
  };
}

// ── Durchlaufzeit & Qualität ──────────────────────────────────

export function genDurchlaufzeit(rng = Math.random) {
  const bearbeitung = randInt(rng, 2, 8) * 15;
  const liege = randInt(rng, 2, 12) * 15;
  const transport = randInt(rng, 1, 4) * 15;
  const total = bearbeitung + liege + transport;
  return {
    category: 'Durchlaufzeit & Qualität',
    inputType: 'number',
    question: `Ein Prozessschritt besteht aus ${bearbeitung} Min. Bearbeitungszeit, ${liege} Min. Liegezeit und ${transport} Min. Transportzeit. Wie groß ist die Durchlaufzeit in Minuten?`,
    answer: total,
    unit: 'Min.',
    tolerance: 0,
    params: { bearbeitung, liege, transport },
    steps: [
      `Durchlaufzeit = Bearbeitungszeit + Liegezeit + Transportzeit`,
      `= ${bearbeitung} + ${liege} + ${transport}`,
      `= ${total} Minuten`,
      `Hinweis: Liegezeiten sind meist der größte Hebel zur Prozessoptimierung.`,
    ],
  };
}

export function genFehlerquote(rng = Math.random) {
  const produced = randInt(rng, 4, 40) * 250;
  const defectRate = randInt(rng, 1, 60) / 1000;
  const defects = Math.round(produced * defectRate);
  const quote = round2((defects / produced) * 100);
  return {
    category: 'Durchlaufzeit & Qualität',
    inputType: 'number',
    question: `Von ${produced.toLocaleString('de-DE')} verarbeiteten Datensätzen sind ${defects.toLocaleString('de-DE')} fehlerhaft. Wie hoch ist die Fehlerquote in Prozent?`,
    answer: quote,
    unit: '%',
    tolerance: 0.05,
    params: { produced, defects },
    steps: [
      `Fehlerquote = fehlerhafte Einheiten ÷ Gesamtmenge × 100`,
      `= ${defects.toLocaleString('de-DE')} ÷ ${produced.toLocaleString('de-DE')} × 100`,
      `= ${quote} %`,
    ],
  };
}

export function genFpy(rng = Math.random) {
  const produced = randInt(rng, 4, 40) * 250;
  const reworked = Math.round(produced * (randInt(rng, 2, 15) / 100));
  const firstPass = produced - reworked;
  const fpy = round2((firstPass / produced) * 100);
  return {
    category: 'Durchlaufzeit & Qualität',
    inputType: 'number',
    question: `In einem Prozess werden ${produced.toLocaleString('de-DE')} Vorgänge bearbeitet, davon müssen ${reworked.toLocaleString('de-DE')} nachbearbeitet werden. Wie hoch ist der First Pass Yield (FPY) in Prozent?`,
    answer: fpy,
    unit: '%',
    tolerance: 0.05,
    params: { produced, reworked, firstPass },
    steps: [
      `FPY = fehlerfrei im ersten Durchlauf ÷ Gesamtmenge × 100`,
      `Fehlerfrei im ersten Durchlauf: ${produced.toLocaleString('de-DE')} − ${reworked.toLocaleString('de-DE')} = ${firstPass.toLocaleString('de-DE')}`,
      `FPY = ${firstPass.toLocaleString('de-DE')} ÷ ${produced.toLocaleString('de-DE')} × 100 = ${fpy} %`,
    ],
  };
}

// ── Registry & Antwortprüfung ─────────────────────────────────

export const TASK_CATEGORIES = [
  { id: 'subnetting', label: 'Subnetting', generators: [genSubnettingHosts, genSubnettingNetwork, genSubnetMask] },
  { id: 'transfer', label: 'Übertragungszeit', generators: [genTransferTime] },
  { id: 'wirtschaft', label: 'Wirtschaftlichkeit', generators: [genAmortisation, genRoi, genAfa] },
  { id: 'raid', label: 'RAID', generators: [genRaid] },
  { id: 'netzplan', label: 'Netzplan', generators: [genNetzplan] },
  { id: 'prozess', label: 'Durchlaufzeit & Qualität', generators: [genDurchlaufzeit, genFehlerquote, genFpy] },
];

export function generateTask(categoryId, rng = Math.random) {
  const cats = categoryId === 'all'
    ? TASK_CATEGORIES
    : TASK_CATEGORIES.filter((c) => c.id === categoryId);
  const gens = cats.flatMap((c) => c.generators);
  return pick(rng, gens)(rng);
}

// Prüft die Nutzereingabe gegen die Musterlösung. Zahlen akzeptieren
// Komma als Dezimaltrennzeichen und die definierte Rundungstoleranz.
export function checkAnswer(task, input) {
  const trimmed = String(input).trim();
  if (trimmed === '') return false;
  if (task.inputType === 'text') {
    return trimmed.toLowerCase() === String(task.answer).toLowerCase();
  }
  const num = Number(trimmed.replace(/\s/g, '').replace(',', '.'));
  if (!Number.isFinite(num)) return false;
  return Math.abs(num - task.answer) <= task.tolerance;
}
