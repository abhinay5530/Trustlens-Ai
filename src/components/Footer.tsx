import { ShieldCheck } from "lucide-react";

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const COMING_SOON_LINKS = ["Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/70 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <ShieldCheck className="h-4 w-4 text-accent-strong" strokeWidth={2} />
          TrustLens AI
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
        >
          {FOOTER_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
          {COMING_SOON_LINKS.map((label) => (
            <span key={label} className="cursor-default text-muted-soft">
              {label} <span className="text-muted-soft">(Coming Soon)</span>
            </span>
          ))}
        </nav>

        <p className="max-w-md text-xs leading-relaxed text-muted-soft">
          Analysis powered by Google Gemini. Built for demonstration purposes —
          always verify high-stakes decisions independently.
        </p>

        <p className="text-xs text-muted-soft">Version 1.0 · © 2026 TrustLens AI</p>
      </div>
    </footer>
  );
}
