import { describe, expect, it } from "vitest";
import { riskLevelStyles, scoreColor } from "./riskStyles";

describe("scoreColor", () => {
  it("maps high scores to success", () => {
    expect(scoreColor(100)).toBe("var(--success)");
    expect(scoreColor(80)).toBe("var(--success)");
  });

  it("maps mid-range scores to warning", () => {
    expect(scoreColor(79)).toBe("var(--warning)");
    expect(scoreColor(50)).toBe("var(--warning)");
  });

  it("maps low scores to danger", () => {
    expect(scoreColor(49)).toBe("var(--danger)");
    expect(scoreColor(25)).toBe("var(--danger)");
  });

  it("maps the lowest scores to critical", () => {
    expect(scoreColor(24)).toBe("var(--critical)");
    expect(scoreColor(0)).toBe("var(--critical)");
  });
});

describe("riskLevelStyles", () => {
  it("returns distinct styling for every risk level", () => {
    const levels = ["low", "medium", "high", "critical"] as const;
    const results = levels.map((level) => riskLevelStyles(level).text);
    expect(new Set(results).size).toBe(levels.length);
  });
});
