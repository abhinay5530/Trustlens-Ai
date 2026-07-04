import { AlignLeft, Link2, Mail, ImageIcon, FileText } from "lucide-react";
import type { AnalysisContentType } from "@/types/analysis";

const TABS: { mode: AnalysisContentType; label: string; icon: typeof AlignLeft }[] = [
  { mode: "text", label: "Text", icon: AlignLeft },
  { mode: "url", label: "URL", icon: Link2 },
  { mode: "email", label: "Email", icon: Mail },
  { mode: "image", label: "Screenshot", icon: ImageIcon },
  { mode: "pdf", label: "PDF", icon: FileText },
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
      className="flex flex-wrap gap-1.5 rounded-2xl border border-border-subtle bg-background-card p-1.5"
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
            className={`flex flex-1 min-w-[6.5rem] items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-accent-blue to-accent text-white shadow-[0_4px_16px_-4px_rgba(99,102,241,0.6)]"
                : "text-muted hover:bg-white/[0.04] hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={1.75} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
