// Leitner-System: 5 Boxen mit aufsteigenden Wiederholungsintervallen.
// Richtig beantwortet → eine Box höher, falsch → zurück in Box 1.
export const BOX_INTERVALS_DAYS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14 };
export const MAX_BOX = 5;

const DAY_MS = 24 * 60 * 60 * 1000;

// Eindeutige Frage-ID aus Topic-ID und Frage-Index innerhalb des Topics.
export function questionId(topicId, qIndex) {
  return `${topicId}::${qIndex}`;
}

export function parseQuestionId(qid) {
  const sep = qid.lastIndexOf('::');
  return { topicId: qid.slice(0, sep), qIndex: Number(qid.slice(sep + 2)) };
}

// Verbucht eine Antwort und liefert den neuen Statistik-Eintrag.
export function recordAnswer(stat, isCorrect, now = Date.now()) {
  const prev = stat || { box: 1, correct: 0, wrong: 0, lastAnswered: null };
  return {
    box: isCorrect ? Math.min(MAX_BOX, prev.box + 1) : 1,
    correct: prev.correct + (isCorrect ? 1 : 0),
    wrong: prev.wrong + (isCorrect ? 0 : 1),
    lastAnswered: new Date(now).toISOString(),
  };
}

// Verbucht alle Antworten eines ausgewerteten Themen-Quiz in questionStats.
export function applyQuizAnswers(questionStats, topicId, quiz, answers, now = Date.now()) {
  const next = { ...questionStats };
  for (let i = 0; i < quiz.length; i++) {
    if (answers[i] === undefined) continue;
    const qid = questionId(topicId, i);
    next[qid] = recordAnswer(next[qid], answers[i] === quiz[i].correct, now);
  }
  return next;
}

// Eine Frage ist fällig, wenn ihr Box-Intervall seit der letzten Antwort
// verstrichen ist. Fragen ohne Statistik sind nicht Teil des Wiederholungs-
// Pools (sie wurden noch nie beantwortet).
export function isDue(stat, now = Date.now()) {
  if (!stat || !stat.lastAnswered) return true;
  const interval = BOX_INTERVALS_DAYS[stat.box] ?? 0;
  return now >= new Date(stat.lastAnswered).getTime() + interval * DAY_MS;
}

// Liefert alle fälligen Fragen quer über alle Themen:
// [{ topicId, topicTitle, qIndex, question, stat }]
export function getDueQuestions(questionStats, allTopics, now = Date.now()) {
  const due = [];
  for (const topic of allTopics) {
    for (let i = 0; i < topic.quiz.length; i++) {
      const stat = questionStats[questionId(topic.id, i)];
      if (stat && isDue(stat, now)) {
        due.push({ topicId: topic.id, topicTitle: topic.title, qIndex: i, question: topic.quiz[i], stat });
      }
    }
  }
  return due;
}
