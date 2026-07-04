import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-28 pt-24 sm:pt-32">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_55%_45%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-20 h-[280px] w-[280px] rounded-full bg-accent-cyan/10 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="animate-fade-in-up mb-7 inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated/80 px-4 py-1.5 text-xs font-medium text-muted">
          <Sparkles className="h-3.5 w-3.5 text-accent-strong" strokeWidth={2} />
          Powered by Google Gemini 2.5 Flash
        </div>

        <h1
          className="animate-fade-in-up text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl sm:leading-[1.08] lg:text-[64px]"
          style={{ animationDelay: "80ms" }}
        >
          Know what to trust
          <span className="text-gradient block">before you click.</span>
        </h1>

        <p
          className="animate-fade-in-up mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
          style={{ animationDelay: "160ms" }}
        >
          Drop in a message, link, email, or screenshot. TrustLens reads it
          like a security analyst and returns a clear verdict, the evidence
          behind it, and exactly what to do next.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center gap-5 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#analyzer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent to-accent-strong px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Run Trust Scan
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2.25}
            />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-nowrap text-muted-soft">
            <span>No sign-up</span>
            <span className="h-1 w-1 rounded-full bg-border-strong" />
            <span>Nothing stored</span>
            <span className="h-1 w-1 rounded-full bg-border-strong" />
            <span>Results in seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
