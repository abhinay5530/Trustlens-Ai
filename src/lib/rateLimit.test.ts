import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { checkRateLimit } from "./rateLimit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(0);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows requests under the limit", () => {
    const key = `test-key-${Math.random()}`;
    for (let i = 0; i < 12; i++) {
      expect(checkRateLimit(key).allowed).toBe(true);
    }
  });

  it("blocks requests once the limit is exceeded", () => {
    const key = `test-key-${Math.random()}`;
    for (let i = 0; i < 12; i++) checkRateLimit(key);
    const result = checkRateLimit(key);
    expect(result.allowed).toBe(false);
    expect(result.retryAfterSeconds).toBeGreaterThan(0);
  });

  it("resets after the window elapses", () => {
    const key = `test-key-${Math.random()}`;
    for (let i = 0; i < 12; i++) checkRateLimit(key);
    expect(checkRateLimit(key).allowed).toBe(false);

    vi.setSystemTime(61_000);
    expect(checkRateLimit(key).allowed).toBe(true);
  });

  it("tracks separate keys independently", () => {
    const keyA = `a-${Math.random()}`;
    const keyB = `b-${Math.random()}`;
    for (let i = 0; i < 12; i++) checkRateLimit(keyA);
    expect(checkRateLimit(keyA).allowed).toBe(false);
    expect(checkRateLimit(keyB).allowed).toBe(true);
  });
});
