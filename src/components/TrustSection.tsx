import { Lock, ShieldCheck, EyeOff, Gauge } from "lucide-react";

const PRIVACY_POINTS = [
  {
    icon: EyeOff,
    text: "Content is analyzed in real time and is never stored on our servers.",
  },
  {
    icon: Lock,
    text: "Your submission goes straight to Gemini for analysis — nothing is logged in between.",
  },
];

const RELIABILITY_POINTS = [
  {
    icon: Gauge,
    text: "Every verdict is backed by specific, cited evidence — never a bare score.",
  },
  {
    icon: ShieldCheck,
    text: "Calibrated to be decisive: no vague 'maybe' verdicts sitting on the fence.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-t border-border-subtle/70 px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border-subtle bg-background-card p-8">
          <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
            <Lock className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <h3 className="text-xl font-semibold text-foreground">
            Privacy by design
          </h3>
          <p className="mt-2 text-sm text-muted">
            Built so you never have to think twice about pasting something
            sensitive.
          </p>
          <ul className="mt-6 space-y-4">
            {PRIVACY_POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-muted">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" strokeWidth={1.75} />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-background-card p-8">
          <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
            <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <h3 className="text-xl font-semibold text-foreground">
            Engineered to be trusted
          </h3>
          <p className="mt-2 text-sm text-muted">
            Every design decision favors clarity over noise.
          </p>
          <ul className="mt-6 space-y-4">
            {RELIABILITY_POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-muted">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" strokeWidth={1.75} />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
