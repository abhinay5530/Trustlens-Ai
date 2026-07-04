"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "analyzer", label: "Analyzer" },
  { id: "about", label: "About" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeId === id ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                activeId === id
                  ? "bg-white/[0.06] text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

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
