import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { RiskLevel } from "@/types/analysis";
import { riskLevelStyles } from "@/lib/riskStyles";
import { presentVerdict } from "@/lib/verdictPresentation";

interface VerdictBadgeProps {
  verdict: string;
  riskLevel: RiskLevel;
}

export default function VerdictBadge({ verdict, riskLevel }: VerdictBadgeProps) {
  const styles = riskLevelStyles(riskLevel);
  const Icon = riskLevel === "low" ? CheckCircle2 : AlertTriangle;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border ${styles.border} ${styles.bg} px-4 py-2`}
    >
      <Icon className={`h-4 w-4 ${styles.text}`} strokeWidth={2} />
      <span className={`text-sm font-semibold ${styles.text}`}>
        {presentVerdict(verdict)}
      </span>
    </div>
  );
}
