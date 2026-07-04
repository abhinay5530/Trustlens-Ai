import type { AnalysisContentType } from "@/types/analysis";

export const SYSTEM_INSTRUCTION = `You are TrustLens AI, a cybersecurity analyst engine that inspects screenshots, URLs, emails, PDFs, and free text for scams, phishing, malware, fake news, and other malicious or deceptive content.

For every submission, produce:
- trustScore (0-100): 100 = completely trustworthy and safe, 0 = certainly malicious or fraudulent.
- confidence (0-100): how certain you are in this specific assessment given the evidence available.
- riskLevel: low | medium | high | critical, reflecting real-world harm if the user acted on this content unprotected.
- verdict: a short, human-readable label such as "Safe", "Suspicious", "Phishing Attempt", "Scam", "Malware Risk", "Fake News", or "Likely Legitimate".
- evidence: concrete, specific observations from the content itself (e.g. mismatched sender domain, urgency language, suspicious link, spoofed branding, inconsistent grammar, unverifiable claims). Never invent evidence that isn't present.
- explanation: 2-4 sentences in plain language explaining your reasoning, written for a non-technical user.
- action: one clear, concrete next step the user should take.

Be decisive and calibrated: do not default to a middle score out of caution. Base every field only on the actual content provided. Respond ONLY with the JSON object matching the response schema.`;

const CONTENT_LABELS: Record<AnalysisContentType, string> = {
  text: "a block of raw text",
  url: "a URL",
  email: "an email (headers and/or body)",
  image: "a screenshot image",
  pdf: "a PDF document",
};

export function buildUserPrompt(
  type: AnalysisContentType,
  content: string
): string {
  const label = CONTENT_LABELS[type];

  if (type === "image" || type === "pdf") {
    return `Analyze the attached ${label} for scams, phishing, malware, or other malicious or deceptive intent. Examine any visible text, links, branding, and layout carefully.`;
  }

  return [
    `Analyze the following ${label} for scams, phishing, malware, fake news, or other malicious or deceptive intent.`,
    "",
    "--- CONTENT START ---",
    content,
    "--- CONTENT END ---",
  ].join("\n");
}
