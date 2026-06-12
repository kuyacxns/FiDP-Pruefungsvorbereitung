export const STORAGE_KEY = 'fidp_progress_v1';

export const defaultProgress = {
  completedTopics: {},
  quizAnswers: {},
  studyStreakDays: 0,
  lastStudyDate: null,
  totalQuizzesPassed: 0,
};

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(raw) };
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
