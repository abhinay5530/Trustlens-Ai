import { useRef } from "react";
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
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function focusTab(index: number) {
    const wrapped = (index + TABS.length) % TABS.length;
    tabRefs.current[wrapped]?.focus();
    onChange(TABS[wrapped].mode);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(TABS.length - 1);
        break;
    }
  }

  return (
    <div
      role="tablist"
      aria-label="Content type to analyze"
      className="flex flex-wrap gap-1.5 rounded-2xl border border-border-subtle bg-background-card p-1.5"
    >
      {TABS.map(({ mode, label, icon: Icon }, index) => {
        const isActive = mode === active;
        return (
          <button
            key={mode}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            role="tab"
            type="button"
            id={`tab-${mode}`}
            aria-selected={isActive}
            aria-controls="analyzer-panel"
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(mode)}
            onKeyDown={(e) => handleKeyDown(e, index)}
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
