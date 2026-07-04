import { AlertTriangleIcon } from "./icons";

interface ErrorBannerProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorBanner({ message, onRetry }: ErrorBannerProps) {
  return (
    <div
      role="alert"
      className="animate-fade-in-up flex items-start gap-3 rounded-xl border border-danger/30 bg-danger/10 p-4"
    >
      <AlertTriangleIcon className="mt-0.5 h-5 w-5 shrink-0 text-danger" />
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">Something went wrong</p>
        <p className="mt-1 text-sm text-muted">{message}</p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="shrink-0 rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
