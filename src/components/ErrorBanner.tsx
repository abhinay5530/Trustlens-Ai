import { AlertTriangle, RotateCcw } from "lucide-react";

interface ErrorBannerProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorBanner({ message, onRetry }: ErrorBannerProps) {
  return (
    <div
      role="alert"
      className="animate-fade-in-up flex items-start gap-3.5 rounded-2xl border border-critical/25 bg-critical/[0.06] p-5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-critical/10 text-critical">
        <AlertTriangle className="h-4.5 w-4.5" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">Scan interrupted</p>
        <p className="mt-1 text-sm text-muted">{message}</p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border-strong px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent-strong/50 hover:text-accent-strong"
        >
          <RotateCcw className="h-3.5 w-3.5" strokeWidth={2} />
          Retry Scan
        </button>
      )}
    </div>
  );
}
