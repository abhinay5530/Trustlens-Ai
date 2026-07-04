import type { RiskLevel } from "@/types/analysis";
import { riskLevelStyles } from "@/lib/riskStyles";
import { AlertTriangleIcon, CheckCircleIcon } from "./icons";

interface VerdictBadgeProps {
  verdict: string;
  riskLevel: RiskLevel;
}

export default function VerdictBadge({ verdict, riskLevel }: VerdictBadgeProps) {
  const styles = riskLevelStyles(riskLevel);
  const Icon = riskLevel === "low" ? CheckCircleIcon : AlertTriangleIcon;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border ${styles.border} ${styles.bg} px-4 py-2`}
    >
      <Icon className={`h-4 w-4 ${styles.text}`} />
      <span className={`text-sm font-semibold ${styles.text}`}>{verdict}</span>
    </div>
  );
}
