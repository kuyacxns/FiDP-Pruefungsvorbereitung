import { questionId } from './leitner.js';

export const STORAGE_KEY = 'fidp_progress_v1';
export const SCHEMA_VERSION = 3;

export const defaultProgress = {
  version: SCHEMA_VERSION,
  completedTopics: {},
  quizAnswers: {},
  questionStats: {},
  passedTopics: {},
  studyStreakDays: 0,
  lastStudyDate: null,
  totalQuizzesPassed: 0,
};

// Überführt alte Fortschrittsdaten ins aktuelle Schema.
// v1 → v2: Quiz-Antworten werden als initiale Leitner-Statistik
//          übernommen (richtig → Box 2, falsch → Box 1).
// v2 → v3: passedTopics wird aus completedTopics abgeleitet, damit
//          totalQuizzesPassed jedes Thema höchstens einmal zählt.
export function migrateProgress(raw, allTopics = []) {
  const p = { ...defaultProgress, ...raw };
  if (!raw || raw.version >= SCHEMA_VERSION) return p;

  if (!raw.version || raw.version < 2) {
    const questionStats = { ...p.questionStats };
    const answeredAt = p.lastStudyDate || new Date().toISOString();
    for (const topic of allTopics) {
      const answers = p.quizAnswers?.[topic.id];
      if (!answers) continue;
      for (let i = 0; i < topic.quiz.length; i++) {
        if (answers[i] === undefined) continue;
        const qid = questionId(topic.id, i);
        if (questionStats[qid]) continue;
        const isCorrect = answers[i] === topic.quiz[i].correct;
        questionStats[qid] = {
          box: isCorrect ? 2 : 1,
          correct: isCorrect ? 1 : 0,
          wrong: isCorrect ? 0 : 1,
          lastAnswered: answeredAt,
        };
      }
    }
    p.questionStats = questionStats;
  }

  if (!raw.version || raw.version < 3) {
    const passedTopics = { ...p.passedTopics };
    for (const [topicId, status] of Object.entries(p.completedTopics || {})) {
      if (status?.completed) passedTopics[topicId] = true;
    }
    p.passedTopics = passedTopics;
    p.totalQuizzesPassed = Object.keys(passedTopics).length;
  }

  return { ...p, version: SCHEMA_VERSION };
}

export function loadProgress(allTopics = []) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    return migrateProgress(JSON.parse(raw), allTopics);
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(p) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch (e) {
    console.error('Storage error', e);
  }
}
