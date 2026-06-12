export function ProgressBar({ value, max = 100, className = '' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={`h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 transition-all duration-700 rounded-full"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
