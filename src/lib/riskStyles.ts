import type { RiskLevel } from "@/types/analysis";

export function riskLevelStyles(level: RiskLevel) {
  switch (level) {
    case "low":
      return {
        text: "text-success",
        bg: "bg-success/10",
        border: "border-success/30",
      };
    case "medium":
      return {
        text: "text-warning",
        bg: "bg-warning/10",
        border: "border-warning/30",
      };
    case "high":
      return {
        text: "text-danger",
        bg: "bg-danger/10",
        border: "border-danger/30",
      };
    case "critical":
      return {
        text: "text-critical",
        bg: "bg-critical/10",
        border: "border-critical/30",
      };
  }
}

export function scoreColor(score: number): string {
  if (score >= 80) return "var(--success)";
  if (score >= 50) return "var(--warning)";
  if (score >= 25) return "var(--danger)";
  return "var(--critical)";
}
