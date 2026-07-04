import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { RiskLevel } from "@/types/analysis";
import { riskLevelStyles } from "@/lib/riskStyles";

interface EvidenceTimelineProps {
  evidence: string[];
  riskLevel: RiskLevel;
}

export default function EvidenceTimeline({
  evidence,
  riskLevel,
}: EvidenceTimelineProps) {
  if (evidence.length === 0) return null;

  const styles = riskLevelStyles(riskLevel);
  const Icon = riskLevel === "low" ? CheckCircle2 : AlertTriangle;

  return (
    <div className="rounded-2xl border border-border-subtle bg-background-card p-6">
      <h3 className="text-sm font-semibold text-foreground">Evidence</h3>
      <ul className="relative mt-5 space-y-5 border-l border-border-subtle pl-6">
        {evidence.map((item, index) => (
          <li
            key={index}
            className="animate-fade-in-up relative text-sm leading-relaxed text-muted"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <span
              className={`absolute -left-[1.95rem] flex h-6 w-6 items-center justify-center rounded-full bg-background-card ${styles.text}`}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
