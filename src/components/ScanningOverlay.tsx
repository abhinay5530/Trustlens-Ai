"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, Loader2, ScanSearch } from "lucide-react";

const STAGES = [
  "Extracting content",
  "Detecting phishing indicators",
  "Checking scam patterns",
  "Analyzing language",
  "Cross-validating with Gemini",
  "Generating trust report",
];

const STAGE_INTERVAL_MS = 850;

export default function ScanningOverlay() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => Math.min(i + 1, STAGES.length - 1));
    }, STAGE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const progress = ((activeIndex + 1) / STAGES.length) * 100;

  return (
    <div className="animate-fade-in-up rounded-2xl border border-border-subtle bg-background-elevated p-8 sm:p-10">
      <div className="flex items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
          <ScanSearch className="animate-pulse-glow h-5 w-5" strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Inspecting for potential threats…
          </h3>
          <p className="text-sm text-muted">
            Gemini is analyzing your content across multiple signal categories.
          </p>
        </div>
      </div>

      <ul className="mt-8 space-y-4" aria-live="polite">
        {STAGES.map((stage, index) => {
          const isDone = index < activeIndex;
          const isActive = index === activeIndex;
          return (
            <li key={stage} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center transition-colors duration-300 ${
                  isDone
                    ? "text-success"
                    : isActive
                      ? "text-accent-strong"
                      : "text-muted-soft/50"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                ) : isActive ? (
                  <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2} />
                ) : (
                  <Circle className="h-5 w-5" strokeWidth={1.5} />
                )}
              </span>
              <span
                className={`text-sm transition-colors duration-300 ${
                  isDone || isActive ? "text-foreground" : "text-muted-soft"
                }`}
              >
                {stage}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-strong transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
