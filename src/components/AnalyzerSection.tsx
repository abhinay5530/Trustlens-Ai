"use client";

import { useState } from "react";
import type { AnalysisContentType, AnalyzeResponseBody } from "@/types/analysis";
import InputTabs from "./InputTabs";
import ContentTextInput from "./ContentTextInput";
import FileUpload from "./FileUpload";
import ScanButton from "./ScanButton";
import ScanningOverlay from "./ScanningOverlay";
import ResultsDashboard from "./ResultsDashboard";
import ErrorBanner from "./ErrorBanner";
import { analyze, AnalyzeApiError } from "@/lib/analyzeClient";
import { fileToDataUrl } from "@/lib/fileToBase64";
import {
  validateFileInput,
  validateTextInput,
  validateUrlInput,
} from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";
type TextMode = "text" | "url" | "email";
type FileMode = "image" | "pdf";

export default function AnalyzerSection() {
  const [mode, setMode] = useState<AnalysisContentType>("text");
  const [values, setValues] = useState<Record<TextMode, string>>({
    text: "",
    url: "",
    email: "",
  });
  const [files, setFiles] = useState<Record<FileMode, File | null>>({
    image: null,
    pdf: null,
  });
  const [previewUrls, setPreviewUrls] = useState<Record<FileMode, string | null>>({
    image: null,
    pdf: null,
  });
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<AnalyzeResponseBody | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleModeChange(next: AnalysisContentType) {
    setMode(next);
    setFieldError(null);
  }

  async function handleFileSelected(kind: FileMode, file: File) {
    const validationError = validateFileInput(file, kind);
    if (validationError) {
      setFieldError(validationError);
      return;
    }
    setFieldError(null);
    const dataUrl = await fileToDataUrl(file);
    setFiles((prev) => ({ ...prev, [kind]: file }));
    setPreviewUrls((prev) => ({ ...prev, [kind]: dataUrl }));
  }

  function handleClearFile(kind: FileMode) {
    setFiles((prev) => ({ ...prev, [kind]: null }));
    setPreviewUrls((prev) => ({ ...prev, [kind]: null }));
  }

  function validateCurrentInput(): boolean {
    if (mode === "url") {
      const err = validateUrlInput(values.url);
      setFieldError(err);
      return !err;
    }
    if (mode === "text" || mode === "email") {
      const err = validateTextInput(
        values[mode],
        mode === "text" ? "some text" : "an email"
      );
      setFieldError(err);
      return !err;
    }

    const file = files[mode];
    if (!file) {
      setFieldError(
        mode === "image" ? "Upload a screenshot to inspect." : "Upload a PDF to inspect."
      );
      return false;
    }
    return true;
  }

  async function handleScan() {
    if (!validateCurrentInput()) return;

    setStatus("loading");
    setErrorMessage(null);

    try {
      let content: string;
      let mimeType: string | undefined;

      if (mode === "image" || mode === "pdf") {
        content = previewUrls[mode] as string;
        mimeType = files[mode]?.type;
      } else {
        content = values[mode];
      }

      const response = await analyze({ type: mode, content, mimeType });
      setResult(response);
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof AnalyzeApiError
          ? error.message
          : "Unexpected error. Please try again."
      );
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setResult(null);
    setErrorMessage(null);
    setFieldError(null);
    setValues({ text: "", url: "", email: "" });
    setFiles({ image: null, pdf: null });
    setPreviewUrls({ image: null, pdf: null });
  }

  return (
    <section id="analyzer" className="mx-auto max-w-2xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Run a Trust Scan
        </h2>
        <p className="mt-3 text-muted">
          Pick a format, drop in the details, and let Gemini do the rest.
        </p>
      </div>

      {status === "loading" && <ScanningOverlay />}

      {status === "success" && result && (
        <ResultsDashboard result={result} onReset={handleReset} />
      )}

      {(status === "idle" || status === "error") && (
        <div className="space-y-5 rounded-2xl border border-border-subtle bg-background-elevated p-6 sm:p-8">
          <InputTabs active={mode} onChange={handleModeChange} />

          {mode === "image" || mode === "pdf" ? (
            <FileUpload
              kind={mode}
              file={files[mode]}
              previewUrl={previewUrls[mode]}
              error={fieldError}
              onFileSelected={(file) => handleFileSelected(mode, file)}
              onClear={() => handleClearFile(mode)}
            />
          ) : (
            <ContentTextInput
              mode={mode}
              value={values[mode]}
              onChange={(value) => setValues((prev) => ({ ...prev, [mode]: value }))}
              error={fieldError}
            />
          )}

          {status === "error" && errorMessage && (
            <ErrorBanner message={errorMessage} onRetry={handleScan} />
          )}

          <ScanButton onClick={handleScan} />
        </div>
      )}
    </section>
  );
}
