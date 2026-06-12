import { shuffle } from './shuffle.js';

// Zieht `count` zufällige, eindeutige Fragen quer über die übergebenen Themen.
// Jedes Item erhält zusätzlich eine gemischte Options-Reihenfolge.
export function drawExamQuestions(topics, count, rng = Math.random) {
  const pool = [];
  for (const topic of topics) {
    topic.quiz.forEach((question, qIndex) => {
      pool.push({ topicId: topic.id, topicTitle: topic.title, qIndex, question });
    });
  }
  return shuffle(pool, rng).slice(0, Math.min(count, pool.length)).map((item) => ({
    ...item,
    optionOrder: shuffle(item.question.options.map((_, i) => i), rng),
  }));
}

// IHK-Notenschlüssel: ≥92 % = 1, ≥81 % = 2, ≥67 % = 3, ≥50 % = 4,
// darunter nicht bestanden (Note 5).
export function ihkGrade(pct) {
  if (pct >= 92) return { grade: 1, passed: true };
  if (pct >= 81) return { grade: 2, passed: true };
  if (pct >= 67) return { grade: 3, passed: true };
  if (pct >= 50) return { grade: 4, passed: true };
  return { grade: 5, passed: false };
}

// Wertet eine Simulation aus: Gesamtergebnis, Aufschlüsselung nach Thema
// und Liste der falsch (oder nicht) beantworteten Fragen.
export function scoreExam(items, answers) {
  let correct = 0;
  const byTopic = {};
  const wrong = [];

  items.forEach((item, i) => {
    const t = byTopic[item.topicId] || (byTopic[item.topicId] = { title: item.topicTitle, correct: 0, total: 0 });
    t.total++;
    const given = answers[i];
    const isCorrect = given === item.question.correct;
    if (isCorrect) {
      correct++;
      t.correct++;
    } else {
      wrong.push({ index: i, item, given });
    }
  });

  const pct = items.length > 0 ? Math.round((correct / items.length) * 100) : 0;
  return { total: items.length, correct, pct, byTopic, wrong, ...ihkGrade(pct) };
}
