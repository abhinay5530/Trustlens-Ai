export default function AboutSection() {
  return (
    <section id="about" className="border-t border-border-subtle/70 px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About TrustLens AI
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            TrustLens AI helps you instantly verify suspicious messages, emails,
            links, screenshots, and other online content before you trust or
            share them. Our goal is to make digital safety simple, accessible,
            and understandable for everyone.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.08] to-transparent p-8">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-blue to-accent-strong"
          />
          <h3 className="text-sm font-semibold uppercase tracking-widest text-accent-strong">
            Our Mission
          </h3>
          <p className="mt-3 leading-relaxed text-foreground">
            In today&apos;s digital world, misinformation, phishing, and online
            scams spread faster than ever. Our mission is to give every
            internet user a simple AI-powered tool that helps them make safer
            decisions in seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
