import { Layers, MessageSquareText, Compass, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Layers,
    title: "Every format, one scanner",
    description:
      "Raw text, links, emails, screenshots, or PDFs — submit whatever you're unsure about, in whatever shape it's in.",
  },
  {
    icon: MessageSquareText,
    title: "Reasoning, not just a score",
    description:
      "Every result comes with a plain-language explanation of why, so you understand the risk instead of just trusting a number.",
  },
  {
    icon: Compass,
    title: "A clear next step",
    description:
      "No ambiguity. Every scan ends with one concrete recommendation for what to do next.",
  },
  {
    icon: Zap,
    title: "Seconds, not minutes",
    description:
      "Built on Gemini 2.5 Flash, tuned for fast, decisive analysis without the wait.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Built to be trusted, not just used
        </h2>
        <p className="mt-3 text-muted">
          Every part of TrustLens is designed around one goal: give you an
          answer you can act on with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-2xl border border-border-subtle bg-background-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_16px_40px_-24px_rgba(99,102,241,0.5)]"
          >
            <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-strong transition-colors group-hover:bg-accent/15">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
