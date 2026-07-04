import { FileInput, ScanSearch, ClipboardCheck } from "lucide-react";

const STEPS = [
  {
    icon: FileInput,
    title: "Submit anything suspicious",
    description:
      "Paste a message, link, or email — or drop in a screenshot or PDF.",
  },
  {
    icon: ScanSearch,
    title: "Gemini inspects it",
    description:
      "Language, links, structure, and intent are analyzed in real time — nothing is stored.",
  },
  {
    icon: ClipboardCheck,
    title: "Get your verdict",
    description:
      "A trust score, the evidence behind it, and one clear action to take.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-border-subtle/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-muted">
            Three steps between a suspicious message and a confident answer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative text-center sm:text-left">
              {index < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-gradient-to-r from-border-strong to-transparent sm:block"
                />
              )}
              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border-strong bg-background-elevated text-accent-strong">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-xs text-muted-soft sm:hidden">
                  Step {index + 1}
                </span>
              </div>
              <span className="mt-4 hidden font-mono text-xs uppercase tracking-widest text-muted-soft sm:block">
                Step {index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
