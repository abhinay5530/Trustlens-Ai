import { AlertCircle } from "lucide-react";

interface ContentTextInputProps {
  mode: "text" | "url" | "email";
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  onSubmit?: () => void;
}

const COPY: Record<ContentTextInputProps["mode"], { label: string; placeholder: string }> = {
  text: {
    label: "Text to inspect",
    placeholder: "Paste a suspicious message, SMS, or social media post…",
  },
  url: {
    label: "Link to inspect",
    placeholder: "https://example.com/suspicious-link",
  },
  email: {
    label: "Email to inspect",
    placeholder: "Paste the full email, including subject and sender if possible…",
  },
};

export default function ContentTextInput({
  mode,
  value,
  onChange,
  error,
  onSubmit,
}: ContentTextInputProps) {
  const { label, placeholder } = COPY[mode];
  const isUrl = mode === "url";
  const sharedClasses =
    "w-full rounded-xl border bg-background-card px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-soft focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]";
  const borderClass = error
    ? "border-critical/50 focus:border-critical/70"
    : "border-border-subtle focus:border-accent-strong/60";

  function handleKeyDown(e: React.KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      onSubmit?.();
    }
  }

  return (
    <div>
      <label htmlFor="content-input" className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {isUrl ? (
        <input
          id="content-input"
          type="text"
          inputMode="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={`${sharedClasses} ${borderClass}`}
        />
      ) : (
        <textarea
          id="content-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={7}
          aria-invalid={Boolean(error)}
          className={`${sharedClasses} resize-none ${borderClass}`}
        />
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
