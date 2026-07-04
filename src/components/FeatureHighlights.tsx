import { Zap, Gauge, Users, Wand2, Timer, Lock } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Instant AI Analysis",
    description: "Submit any content and get a full analysis in seconds, powered by Gemini 2.5 Flash.",
  },
  {
    icon: Gauge,
    title: "Understandable Trust Score",
    description: "A single 0–100 score plus plain-language reasoning, not a cryptic percentage.",
  },
  {
    icon: Users,
    title: "Easy for Everyone",
    description: "Built for anyone who's ever second-guessed a message, not just security experts.",
  },
  {
    icon: Wand2,
    title: "No Technical Knowledge Required",
    description: "Paste, drop, or upload — TrustLens handles the analysis, you just read the verdict.",
  },
  {
    icon: Timer,
    title: "Fast Results",
    description: "No queues, no waiting rooms. Most scans finish before you'd finish typing a reply.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your content is analyzed in real time and is never stored on our servers.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Why TrustLens?
        </h2>
        <p className="mt-3 text-muted">
          Every part of TrustLens is designed around one goal: give you an
          answer you can act on with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
