import { useState } from 'react';
import { STORAGE_KEY, defaultProgress, loadProgress, saveProgress } from './storage.js';

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress);

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
