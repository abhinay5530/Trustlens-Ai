import type { AnalysisContentType } from "@/types/analysis";
import { FileIcon, ImageIcon, LinkIcon, MailIcon, TextIcon } from "./icons";

const TABS: { mode: AnalysisContentType; label: string; icon: typeof TextIcon }[] = [
  { mode: "text", label: "Text", icon: TextIcon },
  { mode: "url", label: "URL", icon: LinkIcon },
  { mode: "email", label: "Email", icon: MailIcon },
  { mode: "image", label: "Screenshot", icon: ImageIcon },
  { mode: "pdf", label: "PDF", icon: FileIcon },
];

interface InputTabsProps {
  active: AnalysisContentType;
  onChange: (mode: AnalysisContentType) => void;
}

export default function InputTabs({ active, onChange }: InputTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Content type to analyze"
      className="flex flex-wrap gap-2 rounded-xl border border-border-subtle bg-background-elevated p-1.5"
    >
      {TABS.map(({ mode, label, icon: Icon }) => {
        const isActive = mode === active;
        return (
          <button
            key={mode}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(mode)}
            className={`flex flex-1 min-w-[6.5rem] items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-accent text-background"
                : "text-muted hover:bg-white/5 hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
