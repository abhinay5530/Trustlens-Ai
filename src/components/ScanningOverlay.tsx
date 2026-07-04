"use client";

import { useEffect, useState } from "react";
import { ShieldIcon } from "./icons";

const STAGES = [
  "Establishing secure analysis session…",
  "Extracting content signals…",
  "Cross-referencing threat patterns…",
  "Evaluating sender and domain trust…",
  "Calculating trust score…",
  "Finalizing verdict…",
];

export default function ScanningOverlay() {
  const [stageIndex, setStageIndex] = useState(0);
  const [progress, setProgress] = useState(6);

  useEffect(() => {
    const stageTimer = setInterval(() => {
      setStageIndex((i) => (i + 1) % STAGES.length);
    }, 1500);
    const progressTimer = setInterval(() => {
      setProgress((p) => (p >= 92 ? p : p + Math.random() * 6));
    }, 350);
    return () => {
      clearInterval(stageTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="animate-fade-in-up flex flex-col items-center gap-8 rounded-2xl border border-border-subtle bg-background-elevated px-8 py-16 text-center">
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-border-subtle" />
        <div
          className="animate-radar-spin absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, var(--accent) 20%, transparent 40%)",
            maskImage: "radial-gradient(closest-side, transparent 68%, black 70%)",
            WebkitMaskImage:
              "radial-gradient(closest-side, transparent 68%, black 70%)",
          }}
        />
        <span className="animate-pulse-glow flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <ShieldIcon className="h-7 w-7" />
        </span>
      </div>

      <div className="w-full max-w-sm">
        <p className="text-sm font-medium text-foreground" aria-live="polite">
          {STAGES[stageIndex]}
        </p>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
