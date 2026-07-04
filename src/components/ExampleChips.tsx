import { Sparkles } from "lucide-react";
import { EXAMPLE_CONTENT } from "@/lib/exampleContent";

interface ExampleChipsProps {
  mode: "text" | "url" | "email";
  onSelect: (value: string) => void;
}

export default function ExampleChips({ mode, onSelect }: ExampleChipsProps) {
  const examples = EXAMPLE_CONTENT[mode];

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="flex items-center gap-1 text-muted-soft">
        <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
        Try an example:
      </span>
      {examples.map(({ label, value }) => (
        <button
          key={label}
          type="button"
          onClick={() => onSelect(value)}
          className="rounded-full border border-border-subtle px-3 py-1 font-medium text-muted transition-colors hover:border-accent-strong/40 hover:text-accent-strong"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
