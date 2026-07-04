import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/70 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <ShieldCheck className="h-4 w-4 text-accent-strong" strokeWidth={2} />
          TrustLens AI
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted-soft">
          Analysis powered by Google Gemini. Built for demonstration purposes —
          always verify high-stakes decisions independently.
        </p>
      </div>
    </footer>
  );
}
