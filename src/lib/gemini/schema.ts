import { Type, type Schema } from "@google/genai";

export const analysisResponseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    trustScore: {
      type: Type.INTEGER,
      description:
        "Trust score from 0 (certainly malicious/fraudulent) to 100 (completely trustworthy).",
      minimum: 0,
      maximum: 100,
    },
    verdict: {
      type: Type.STRING,
      description:
        'Short verdict label, e.g. "Safe", "Suspicious", "Phishing Attempt", "Scam", "Malware Risk", "Fake News", "Likely Legitimate".',
    },
    riskLevel: {
      type: Type.STRING,
      format: "enum",
      enum: ["low", "medium", "high", "critical"],
      description:
        "Overall risk severity if the user acted on this content unprotected.",
    },
    confidence: {
      type: Type.INTEGER,
      description: "Model's confidence in this analysis, from 0 to 100.",
      minimum: 0,
      maximum: 100,
    },
    evidence: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description:
        "Concrete, specific observations from the content that support the verdict.",
    },
    explanation: {
      type: Type.STRING,
      description:
        "2-4 sentence plain-language explanation of the reasoning, written for a non-technical user.",
    },
    action: {
      type: Type.STRING,
      description: "One clear, concrete next step the user should take.",
    },
  },
  required: [
    "trustScore",
    "verdict",
    "riskLevel",
    "confidence",
    "evidence",
    "explanation",
    "action",
  ],
  propertyOrdering: [
    "trustScore",
    "verdict",
    "riskLevel",
    "confidence",
    "evidence",
    "explanation",
    "action",
  ],
};
