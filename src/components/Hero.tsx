import { ArrowRightIcon, ShieldIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28">
      <div
        aria-hidden
        className="bg-grid animate-grid-pan pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
          <ShieldIcon className="h-3.5 w-3.5" />
          Powered by Google Gemini 2.5 Flash
        </div>

        <h1
          className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          See through every
          <span className="block bg-gradient-to-r from-accent via-accent-strong to-accent bg-clip-text text-transparent">
            scam, phish, and fake.
          </span>
        </h1>

        <p
          className="animate-fade-in-up mt-6 max-w-xl text-balance text-lg text-muted"
          style={{ animationDelay: "160ms" }}
        >
          Paste a message, drop a screenshot, or upload a PDF. TrustLens AI
          analyzes it in seconds and hands you a clear verdict, evidence, and
          the action to take next.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#analyzer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Analyze Content Now
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="flex items-center gap-6 text-xs text-muted">
            <span>No sign-up required</span>
            <span className="h-1 w-1 rounded-full bg-border-subtle" />
            <span>Real-time AI analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
