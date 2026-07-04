"use client";

import { useRef, useState } from "react";
import { FileText, UploadCloud, XCircle, AlertCircle } from "lucide-react";

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
    label: "Screenshot to inspect",
    dropLabel: "screenshot",
    hint: "PNG, JPG, or WEBP · up to 5MB",
    accept: "image/*",
  },
  pdf: {
    label: "PDF to inspect",
    dropLabel: "PDF",
    hint: "PDF document · up to 5MB",
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
  const { label, dropLabel, hint, accept } = COPY[kind];

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
        <div className="flex items-center justify-between rounded-2xl border border-border-subtle bg-background-card p-4">
          <div className="flex min-w-0 items-center gap-3.5">
            {kind === "image" && previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewUrl}
                alt="Selected screenshot preview"
                className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/10"
              />
            ) : (
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                <FileText className="h-6 w-6" strokeWidth={1.75} />
              </span>
            )}
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
              <p className="text-xs text-muted-soft">{(file.size / 1024).toFixed(0)} KB</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClear}
            aria-label="Remove file"
            className="shrink-0 rounded-full p-1 text-muted transition-colors hover:bg-critical/10 hover:text-critical"
          >
            <XCircle className="h-5 w-5" strokeWidth={1.75} />
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
          className={`group relative flex cursor-pointer flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-all duration-300 ${
            isDragOver
              ? "border-accent-strong bg-accent/[0.06] shadow-[0_0_0_6px_rgba(99,102,241,0.08)]"
              : "border-border-subtle bg-background-card hover:border-accent/40 hover:bg-white/[0.02]"
          }`}
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent-strong transition-transform duration-300 ${
              isDragOver ? "scale-110" : "group-hover:-translate-y-1"
            }`}
          >
            <UploadCloud className="h-7 w-7" strokeWidth={1.5} />
          </span>
          <p className="text-sm text-foreground">
            Drop a {dropLabel} or{" "}
            <span className="font-medium text-accent-strong">click to upload</span>
          </p>
          <p className="text-xs text-muted-soft">{hint}</p>
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

      {error && (
        <p className="mt-2 flex items-center gap-1.5 text-sm text-critical">
          <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
          {error}
        </p>
      )}
    </div>
  );
}
