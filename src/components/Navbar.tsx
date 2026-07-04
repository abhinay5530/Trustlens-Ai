import { ShieldIcon } from "./icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
            <ShieldIcon className="h-4.5 w-4.5" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            TrustLens <span className="text-accent">AI</span>
          </span>
        </div>
        <a
          href="#analyzer"
          className="rounded-full border border-border-subtle px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent"
        >
          Scan Now
        </a>
      </div>
    </header>
  );
}
