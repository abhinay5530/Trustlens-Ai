"use client";

import { useRef, useState } from "react";
import { FileIcon, UploadCloudIcon, XCircleIcon } from "./icons";

interface FileUploadProps {
  kind: "image" | "pdf";
  file: File | null;
  previewUrl: string | null;
  error: string | null;
  onFileSelected: (file: File) => void;
  onClear: () => void;
}

const COPY = {
  image: {
    label: "Screenshot to analyze",
    hint: "PNG, JPG, or WEBP up to 5MB",
    accept: "image/*",
  },
  pdf: {
    label: "PDF to analyze",
    hint: "PDF document up to 5MB",
    accept: "application/pdf",
  },
};

export default function FileUpload({
  kind,
  file,
  previewUrl,
  error,
  onFileSelected,
  onClear,
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { label, hint, accept } = COPY[kind];

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragOver(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) onFileSelected(dropped);
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>

      {file ? (
        <div className="flex items-center justify-between rounded-xl border border-border-subtle bg-background-elevated p-3.5">
          <div className="flex min-w-0 items-center gap-3">
            {kind === "image" && previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewUrl}
                alt="Selected screenshot preview"
                className="h-12 w-12 rounded-lg object-cover"
              />
            ) : (
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <FileIcon className="h-6 w-6" />
              </span>
            )}
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
              <p className="text-xs text-muted">{(file.size / 1024).toFixed(0)} KB</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClear}
            aria-label="Remove file"
            className="shrink-0 text-muted transition-colors hover:text-danger"
          >
            <XCircleIcon className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
          }}
          className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
            isDragOver
              ? "border-accent bg-accent/5"
              : "border-border-subtle bg-background-elevated hover:border-accent/40"
          }`}
        >
          <UploadCloudIcon className="h-8 w-8 text-accent" />
          <p className="text-sm text-foreground">
            <span className="font-medium text-accent">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-muted">{hint}</p>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => {
              const selected = e.target.files?.[0];
              if (selected) onFileSelected(selected);
              e.target.value = "";
            }}
          />
        </div>
      )}

      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </div>
  );
}
