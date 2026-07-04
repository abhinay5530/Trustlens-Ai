import { RotateCcw } from "lucide-react";
import type { AnalyzeResponseBody } from "@/types/analysis";
import TrustScoreGauge from "./TrustScoreGauge";
import VerdictBadge from "./VerdictBadge";
import RiskLevelBadge from "./RiskLevelBadge";
import ConfidenceMeter from "./ConfidenceMeter";
import EvidenceTimeline from "./EvidenceTimeline";
import ExplanationCard from "./ExplanationCard";
import ActionCard from "./ActionCard";

interface ResultsDashboardProps {
  result: AnalyzeResponseBody;
  onReset: () => void;
}

export default function ResultsDashboard({ result, onReset }: ResultsDashboardProps) {
  return (
    <div className="animate-fade-in-up space-y-5">
      <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-background-elevated p-8">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-strong/60 to-transparent"
        />
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-soft sm:text-left">
          Scan Summary
        </p>
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <TrustScoreGauge score={result.trustScore} />
          <div className="flex flex-1 flex-col items-center gap-3.5 sm:items-end">
            <VerdictBadge verdict={result.verdict} riskLevel={result.riskLevel} />
            <RiskLevelBadge level={result.riskLevel} />
            <div className="w-full max-w-[220px]">
              <ConfidenceMeter confidence={result.confidence} />
            </div>
          </div>
        </div>
      </div>

      <EvidenceTimeline evidence={result.evidence} riskLevel={result.riskLevel} />
      <ExplanationCard explanation={result.explanation} />
      <ActionCard action={result.action} />

      <button
        type="button"
        onClick={onReset}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent-strong/40 hover:bg-white/[0.03] hover:text-accent-strong"
      >
        <RotateCcw className="h-4 w-4" strokeWidth={1.75} />
        Run Another Scan
      </button>
    </div>
  );
}
