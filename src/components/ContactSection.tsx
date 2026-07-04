"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-border-subtle/70 px-6 py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-sm text-muted">
            Questions, feedback, or partnership ideas — we&apos;d love to hear
            from you.
          </p>
          <a
            href="mailto:hello@trustlens.ai"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-strong transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            hello@trustlens.ai
          </a>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-background-card p-8">
          {submitted ? (
            <p className="text-sm text-foreground" role="status">
              Support portal coming soon. Thank you for your interest.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  required
                  type="text"
                  className="w-full rounded-xl border border-border-subtle bg-background-elevated px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-accent-strong/60 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  className="w-full rounded-xl border border-border-subtle bg-background-elevated px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-accent-strong/60 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border-subtle bg-background-elevated px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-accent-strong/60 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-accent-blue to-accent-strong px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
