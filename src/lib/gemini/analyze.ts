import type { Part } from "@google/genai";
import { getGeminiClient, GEMINI_MODEL } from "./client";
import { analysisResponseSchema } from "./schema";
import { SYSTEM_INSTRUCTION, buildUserPrompt } from "./prompt";
import type {
  AnalyzeRequestBody,
  AnalyzeResponseBody,
  RiskLevel,
} from "@/types/analysis";

const RISK_LEVELS: RiskLevel[] = ["low", "medium", "high", "critical"];

export class GeminiResponseError extends Error {}

export async function analyzeContent(
  body: AnalyzeRequestBody
): Promise<AnalyzeResponseBody> {
  const ai = getGeminiClient();

  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: buildContentParts(body),
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: analysisResponseSchema,
      temperature: 0.2,
      httpOptions: {
        timeout: 25_000,
        retryOptions: { attempts: 3 },
      },
    },
  });

  const raw = response.text;
  if (!raw) {
    throw new GeminiResponseError("Gemini returned an empty response.");
  }

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new GeminiResponseError(
      "Gemini returned a response that was not valid JSON."
    );
  }

  return normalizeResponse(parsed);
}

function buildContentParts(body: AnalyzeRequestBody): Part[] {
  const parts: Part[] = [{ text: buildUserPrompt(body.type, body.content) }];

  if (body.type === "image" || body.type === "pdf") {
    parts.push({
      inlineData: {
        data: stripDataUrlPrefix(body.content),
        mimeType:
          body.mimeType ??
          (body.type === "pdf" ? "application/pdf" : "image/png"),
      },
    });
  }

  return parts;
}

function stripDataUrlPrefix(data: string): string {
  const commaIndex = data.indexOf(",");
  return data.startsWith("data:") && commaIndex !== -1
    ? data.slice(commaIndex + 1)
    : data;
}

function clampScore(value: unknown): number {
  const num = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(num)) return 0;
  return Math.min(100, Math.max(0, Math.round(num)));
}

function normalizeRiskLevel(value: unknown): RiskLevel {
  const lower = typeof value === "string" ? value.toLowerCase() : "";
  return (RISK_LEVELS as string[]).includes(lower)
    ? (lower as RiskLevel)
    : "medium";
}

function normalizeResponse(
  parsed: Record<string, unknown>
): AnalyzeResponseBody {
  return {
    trustScore: clampScore(parsed.trustScore),
    verdict: typeof parsed.verdict === "string" ? parsed.verdict : "Unknown",
    riskLevel: normalizeRiskLevel(parsed.riskLevel),
    confidence: clampScore(parsed.confidence),
    evidence: Array.isArray(parsed.evidence)
      ? parsed.evidence.filter((e): e is string => typeof e === "string")
      : [],
    explanation:
      typeof parsed.explanation === "string" ? parsed.explanation : "",
    action:
      typeof parsed.action === "string"
        ? parsed.action
        : "Proceed with caution.",
  };
}
