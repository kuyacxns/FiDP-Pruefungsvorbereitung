import { useState } from 'react';
import { STORAGE_KEY, defaultProgress, loadProgress, saveProgress } from './storage.js';
import { ALL_TOPICS } from '../data/index.js';

export function useProgress() {
  const [progress, setProgress] = useState(() => loadProgress(ALL_TOPICS));

  const save = (next) => {
    setProgress(next);
    saveProgress(next);
  };

  const reset = () => {
    setProgress(defaultProgress);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  return { progress, save, reset };
}
