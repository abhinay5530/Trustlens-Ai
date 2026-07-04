import { GoogleGenAI } from "@google/genai";

export const GEMINI_MODEL = "gemini-2.5-flash";

export class MissingApiKeyError extends Error {
  constructor() {
    super(
      "GEMINI_API_KEY is not set. Add it to .env.local and restart the dev server."
    );
    this.name = "MissingApiKeyError";
  }
}

let client: GoogleGenAI | null = null;

export function getGeminiClient(): GoogleGenAI {
  if (!client) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new MissingApiKeyError();
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
}
