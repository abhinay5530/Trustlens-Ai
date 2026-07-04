import type { RiskLevel } from "@/types/analysis";
import { riskLevelStyles } from "@/lib/riskStyles";

export default function RiskLevelBadge({ level }: { level: RiskLevel }) {
  const styles = riskLevelStyles(level);
  return (
    <span
      className={`inline-flex items-center rounded-full border ${styles.border} ${styles.bg} px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles.text}`}
    >
      {level} risk
    </span>
  );
}
