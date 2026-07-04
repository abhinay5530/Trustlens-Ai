import type { AnalyzeRequestBody, AnalyzeResponseBody } from "@/types/analysis";

export class AnalyzeApiError extends Error {}

const REQUEST_TIMEOUT_MS = 30_000;

export async function analyze(
  body: AnalyzeRequestBody
): Promise<AnalyzeResponseBody> {
  let res: Response;
  try {
    res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "TimeoutError") {
      throw new AnalyzeApiError(
        "The scan took too long to respond. Please try again."
      );
    }
    throw new AnalyzeApiError(
      "Could not reach the analysis server. Check your connection and try again."
    );
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message =
      data && typeof data.error === "string"
        ? data.error
        : `Request failed with status ${res.status}.`;
    throw new AnalyzeApiError(message);
  }

  return data as AnalyzeResponseBody;
}
