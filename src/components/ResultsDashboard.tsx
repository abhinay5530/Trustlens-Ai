import type { AnalyzeResponseBody } from "@/types/analysis";
import TrustScoreGauge from "./TrustScoreGauge";
import VerdictBadge from "./VerdictBadge";
import RiskLevelBadge from "./RiskLevelBadge";
import ConfidenceMeter from "./ConfidenceMeter";
import EvidenceList from "./EvidenceList";
import ExplanationCard from "./ExplanationCard";
import ActionCard from "./ActionCard";

interface ResultsDashboardProps {
  result: AnalyzeResponseBody;
  onReset: () => void;
}

export default function ResultsDashboard({ result, onReset }: ResultsDashboardProps) {
  return (
    <div className="animate-fade-in-up space-y-6">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-border-subtle bg-background-elevated p-8 sm:flex-row sm:justify-between">
        <TrustScoreGauge score={result.trustScore} />
        <div className="flex flex-1 flex-col items-center gap-3 sm:items-end">
          <VerdictBadge verdict={result.verdict} riskLevel={result.riskLevel} />
          <RiskLevelBadge level={result.riskLevel} />
          <div className="w-full max-w-[220px]">
            <ConfidenceMeter confidence={result.confidence} />
          </div>
        </div>
      </div>

      <EvidenceList evidence={result.evidence} />
      <ExplanationCard explanation={result.explanation} />
      <ActionCard action={result.action} />

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-xl border border-border-subtle px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
      >
        Scan Another Item
      </button>
    </div>
  );
}
