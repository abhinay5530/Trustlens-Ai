import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "@google/genai";
import { analyzeContent, GeminiResponseError } from "@/lib/gemini/analyze";
import { MissingApiKeyError } from "@/lib/gemini/client";
import type { AnalysisContentType, AnalyzeRequestBody } from "@/types/analysis";

const VALID_TYPES: AnalysisContentType[] = [
  "text",
  "url",
  "email",
  "image",
  "pdf",
];
const MAX_CONTENT_LENGTH = 8_000_000; // ~8MB, covers base64 screenshots/PDFs

class ValidationError extends Error {}

function validateBody(body: unknown): AnalyzeRequestBody {
  if (typeof body !== "object" || body === null) {
    throw new ValidationError("Request body must be a JSON object.");
  }
  const { type, content, mimeType } = body as Record<string, unknown>;

  if (
    typeof type !== "string" ||
    !VALID_TYPES.includes(type as AnalysisContentType)
  ) {
    throw new ValidationError(
      `"type" must be one of: ${VALID_TYPES.join(", ")}.`
    );
  }
  if (typeof content !== "string" || content.trim().length === 0) {
    throw new ValidationError('"content" must be a non-empty string.');
  }
  if (content.length > MAX_CONTENT_LENGTH) {
    throw new ValidationError("content exceeds the maximum allowed size.");
  }
  if (mimeType !== undefined && typeof mimeType !== "string") {
    throw new ValidationError('"mimeType" must be a string when provided.');
  }

  return { type: type as AnalysisContentType, content, mimeType };
}

export async function POST(request: NextRequest) {
  let body: AnalyzeRequestBody;
  try {
    const json = await request.json();
    body = validateBody(json);
  } catch (error) {
    const message =
      error instanceof ValidationError
        ? error.message
        : "Request body must be valid JSON.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    const result = await analyzeContent(body);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Gemini analysis failed:", error);

    if (error instanceof MissingApiKeyError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    if (error instanceof GeminiResponseError) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }
    if (error instanceof ApiError) {
      return NextResponse.json(
        { error: "Gemini API error", details: error.message },
        { status: error.status || 502 }
      );
    }
    return NextResponse.json(
      { error: "Failed to analyze content." },
      { status: 500 }
    );
  }
}
