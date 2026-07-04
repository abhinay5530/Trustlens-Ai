import { describe, expect, it } from "vitest";
import { presentVerdict } from "./verdictPresentation";

describe("presentVerdict", () => {
  it("maps phishing-related verdicts", () => {
    expect(presentVerdict("Phishing Attempt")).toBe("Phishing Attempt Detected");
  });

  it("maps scam-related verdicts", () => {
    expect(presentVerdict("Scam")).toBe("Likely Scam");
  });

  it("maps safe/legitimate verdicts", () => {
    expect(presentVerdict("Safe")).toBe("Looks Legitimate");
    expect(presentVerdict("Likely Legitimate")).toBe("Looks Legitimate");
  });

  it("maps suspicious verdicts", () => {
    expect(presentVerdict("Suspicious")).toBe("Potential Red Flags Detected");
  });

  it("falls back to the raw verdict when nothing matches", () => {
    expect(presentVerdict("Something Unusual")).toBe("Something Unusual");
  });
});
