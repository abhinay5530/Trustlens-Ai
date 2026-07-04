import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <ShieldCheck className="h-4.5 w-4.5" strokeWidth={2} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            TrustLens <span className="text-gradient">AI</span>
          </span>
        </div>
        <a
          href="#analyzer"
          className="rounded-full border border-border-subtle px-4 py-2 text-sm font-medium text-foreground/90 transition-all hover:border-accent-strong/50 hover:bg-white/[0.03] hover:text-white"
        >
          Run a Scan
        </a>
      </div>
    </header>
  );
}
