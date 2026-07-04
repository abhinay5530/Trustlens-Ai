interface ContentTextInputProps {
  mode: "text" | "url" | "email";
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

const COPY: Record<ContentTextInputProps["mode"], { label: string; placeholder: string }> = {
  text: {
    label: "Text to analyze",
    placeholder: "Paste a suspicious message, SMS, or social media post…",
  },
  url: {
    label: "URL to analyze",
    placeholder: "https://example.com/suspicious-link",
  },
  email: {
    label: "Email to analyze",
    placeholder: "Paste the full email, including subject and sender if possible…",
  },
};

export default function ContentTextInput({
  mode,
  value,
  onChange,
  error,
}: ContentTextInputProps) {
  const { label, placeholder } = COPY[mode];
  const isUrl = mode === "url";

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
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className="w-full rounded-xl border border-border-subtle bg-background-elevated px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60"
        />
      ) : (
        <textarea
          id="content-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={7}
          aria-invalid={Boolean(error)}
          className="w-full resize-none rounded-xl border border-border-subtle bg-background-elevated px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60"
        />
      )}
      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </div>
  );
}
