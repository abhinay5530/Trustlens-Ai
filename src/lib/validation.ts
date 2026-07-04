export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

export function validateUrlInput(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "Enter a URL to analyze.";
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    const url = new URL(withProtocol);
    if (!url.hostname.includes(".")) {
      return "Enter a valid URL, e.g. https://example.com.";
    }
    return null;
  } catch {
    return "Enter a valid URL, e.g. https://example.com.";
  }
}

export function validateTextInput(
  value: string,
  label: string
): string | null {
  const trimmed = value.trim();
  if (!trimmed) return `Enter ${label} to analyze.`;
  if (trimmed.length < 3) return "Enter at least 3 characters.";
  return null;
}

export function validateFileInput(
  file: File,
  kind: "image" | "pdf"
): string | null {
  const isValidType =
    kind === "image" ? file.type.startsWith("image/") : file.type === "application/pdf";

  if (!isValidType) {
    return kind === "image"
      ? "Please upload an image file (PNG, JPG, WEBP)."
      : "Please upload a PDF file.";
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return "File is too large. Maximum size is 5MB.";
  }
  return null;
}
