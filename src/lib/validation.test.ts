import { describe, expect, it } from "vitest";
import {
  validateUrlInput,
  validateTextInput,
  validateFileInput,
  MAX_FILE_SIZE_BYTES,
} from "./validation";

describe("validateUrlInput", () => {
  it("rejects empty input", () => {
    expect(validateUrlInput("")).toBe("Enter a URL to inspect.");
    expect(validateUrlInput("   ")).toBe("Enter a URL to inspect.");
  });

  it("accepts a bare domain by assuming https", () => {
    expect(validateUrlInput("example.com")).toBeNull();
  });

  it("accepts a fully-qualified URL", () => {
    expect(validateUrlInput("https://example.com/path?query=1")).toBeNull();
  });

  it("rejects a string with no valid hostname", () => {
    expect(validateUrlInput("not a url")).not.toBeNull();
  });
});

describe("validateTextInput", () => {
  it("rejects empty input", () => {
    expect(validateTextInput("", "some text")).toBe("Enter some text to inspect.");
  });

  it("rejects input under the minimum length", () => {
    expect(validateTextInput("hi", "some text")).toBe("Enter at least 3 characters.");
  });

  it("accepts valid input", () => {
    expect(validateTextInput("hello world", "some text")).toBeNull();
  });
});

describe("validateFileInput", () => {
  function makeFile(type: string, size: number): File {
    return new File([new Uint8Array(size)], "test-file", { type });
  }

  it("accepts a valid image under the size limit", () => {
    expect(validateFileInput(makeFile("image/png", 1024), "image")).toBeNull();
  });

  it("rejects a non-image file for the image slot", () => {
    expect(validateFileInput(makeFile("application/pdf", 1024), "image")).not.toBeNull();
  });

  it("accepts a valid pdf under the size limit", () => {
    expect(validateFileInput(makeFile("application/pdf", 1024), "pdf")).toBeNull();
  });

  it("rejects a file over the size limit", () => {
    expect(
      validateFileInput(makeFile("image/png", MAX_FILE_SIZE_BYTES + 1), "image")
    ).toBe("File is too large. Maximum size is 5MB.");
  });
});
