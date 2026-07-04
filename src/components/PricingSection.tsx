"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const FREE_FEATURES = [
  "Core AI Analysis",
  "URL Analysis",
  "Screenshot Analysis",
  "Trust Score",
  "AI Explanation",
  "Scam Detection",
];

const PRO_FEATURES = [
  "Unlimited AI Analysis",
  "PDF Analysis",
  "Email Analysis",
  "Browser Extension",
  "Scan History",
  "Download Reports",
  "API Access",
  "Team Dashboard",
  "Priority AI Processing",
];

export default function PricingSection() {
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);

  return (
    <section id="pricing" className="border-t border-border-subtle/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-muted">
            TrustLens will always have a free tier. No surprises.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-background-card p-8">
            <h3 className="text-lg font-semibold text-foreground">Free</h3>
            <p className="mt-1 text-sm text-muted">
              Everything you need to check before you click.
            </p>
            <p className="mt-6 text-3xl font-semibold text-foreground">
              $0 <span className="text-base font-normal text-muted-soft">forever</span>
            </p>
            <ul className="mt-6 space-y-3">
              {FREE_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-success" strokeWidth={2} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.06] to-transparent p-8">
            <span className="absolute right-6 top-6 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-strong">
              Coming Soon
            </span>
            <h3 className="text-lg font-semibold text-foreground">TrustLens Pro</h3>
            <p className="mt-1 text-sm text-muted">For power users and teams.</p>
            <p className="mt-6 text-3xl font-semibold text-foreground">TBD</p>
            <ul className="mt-6 space-y-3">
              {PRO_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-accent-strong" strokeWidth={2} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setJoinedWaitlist(true)}
              disabled={joinedWaitlist}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-strong px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-default disabled:opacity-70 disabled:hover:scale-100"
            >
              <Sparkles className="h-4 w-4" strokeWidth={2} />
              {joinedWaitlist ? "You're on the list!" : "Join Waitlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
