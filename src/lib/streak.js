// Tages-Streak: an aufeinanderfolgenden Kalendertagen (lokale Zeit)
// mindestens eine Frage beantwortet.

function dayKey(d) {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

export function computeStreak(prevStreak, lastStudyDate, now = new Date()) {
  if (!lastStudyDate) return 1;
  const last = new Date(lastStudyDate);
  if (dayKey(last) === dayKey(now)) {
    // Heute schon gelernt – Streak läuft bereits
    return Math.max(prevStreak, 1);
  }
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (dayKey(last) === dayKey(yesterday)) {
    // Gestern gelernt → Streak setzt sich fort. max(prev, 1) fängt
    // Altdaten ab, bei denen der Streak nie berechnet wurde (0).
    return Math.max(prevStreak, 1) + 1;
  }
  // Lücke → Streak beginnt neu
  return 1;
}

// Verbucht Lernaktivität "jetzt" auf einem Progress-Objekt.
export function withStudyActivity(progress, now = new Date()) {
  return {
    ...progress,
    studyStreakDays: computeStreak(progress.studyStreakDays, progress.lastStudyDate, now),
    lastStudyDate: now.toISOString(),
  };
}
