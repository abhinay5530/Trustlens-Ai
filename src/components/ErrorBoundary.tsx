"use client";

import { Component, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("TrustLens UI crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-critical/10 text-critical">
            <AlertTriangle className="h-5 w-5" strokeWidth={2} />
          </span>
          <h2 className="text-xl font-semibold text-foreground">
            Something broke on our end
          </h2>
          <p className="mt-2 text-sm text-muted">
            Refresh the page to start a new scan. Your previous input wasn&apos;t saved.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl border border-border-subtle px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-strong/40 hover:text-accent-strong"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
