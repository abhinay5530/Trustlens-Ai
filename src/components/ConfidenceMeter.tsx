"use client";

import { useCountUp } from "@/lib/useCountUp";

export default function ConfidenceMeter({ confidence }: { confidence: number }) {
  const animatedConfidence = useCountUp(confidence, 900);

  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>AI Confidence</span>
        <span className="font-medium tabular-nums text-foreground">
          {animatedConfidence}%
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan transition-all duration-700 ease-out"
          style={{ width: `${confidence}%` }}
        />
      </div>
    </div>
  );
}
