const VERDICT_PATTERNS: { match: RegExp; label: string }[] = [
  { match: /phish/i, label: "Phishing Attempt Detected" },
  { match: /scam/i, label: "Likely Scam" },
  { match: /malware/i, label: "Malware Risk Detected" },
  { match: /fake news|misinformation/i, label: "Misinformation Detected" },
  { match: /suspicious/i, label: "Potential Red Flags Detected" },
  { match: /legitimate|^safe$/i, label: "Looks Legitimate" },
];

export function presentVerdict(raw: string): string {
  const trimmed = raw.trim();
  const found = VERDICT_PATTERNS.find(({ match }) => match.test(trimmed));
  return found ? found.label : trimmed;
}
