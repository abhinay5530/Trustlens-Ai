export type AnalysisContentType = "text" | "url" | "email" | "image" | "pdf";

export interface AnalyzeRequestBody {
  type: AnalysisContentType;
  content: string;
  mimeType?: string;
}

export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface AnalyzeResponseBody {
  trustScore: number;
  verdict: string;
  riskLevel: RiskLevel;
  confidence: number;
  evidence: string[];
  explanation: string;
  action: string;
}
