"use client";

import { useEffect, useState } from "react";
import { scoreColor } from "@/lib/riskStyles";
import { useCountUp } from "@/lib/useCountUp";

interface TrustScoreGaugeProps {
  score: number;
}

const RADIUS = 58;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function TrustScoreGauge({ score }: TrustScoreGaugeProps) {
  const [ringProgress, setRingProgress] = useState(0);
  const animatedScore = useCountUp(score, 1100);

  useEffect(() => {
    const timer = setTimeout(() => setRingProgress(score), 100);
    return () => clearTimeout(timer);
  }, [score]);

  const offset = CIRCUMFERENCE - (ringProgress / 100) * CIRCUMFERENCE;
  const color = scoreColor(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40">
        <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            stroke="var(--border-subtle)"
            strokeWidth="9"
          />
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-semibold tabular-nums text-foreground">
            {animatedScore}
          </span>
          <span className="text-xs text-muted-soft">out of 100</span>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-muted">Trust Score</p>
    </div>
  );
}
