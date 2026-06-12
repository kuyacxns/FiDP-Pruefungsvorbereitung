// Fisher-Yates-Shuffle. Liefert eine neue, gemischte Kopie des Arrays.
export function shuffle(arr, rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Baut eine gemischte Sicht auf ein Quiz: Reihenfolge der Fragen und der
// Optionen jeder Frage wird gemischt, aber jede Option/Frage behält ihren
// Original-Index. Gespeicherte Antworten beziehen sich dadurch immer auf
// die Original-Frage und Original-Option, nie auf die gemischte Position.
export function buildShuffledQuizView(quiz, rng = Math.random) {
  const questionOrder = shuffle(quiz.map((_, i) => i), rng);
  return questionOrder.map((qIndex) => {
    const q = quiz[qIndex];
    const optionOrder = shuffle(q.options.map((_, i) => i), rng);
    return {
      qIndex,
      q: q.q,
      explanation: q.explanation,
      correct: q.correct,
      options: optionOrder.map((oIndex) => ({ oIndex, text: q.options[oIndex] })),
    };
  });
}
