import { MessageSquareText } from "lucide-react";

export default function ExplanationCard({ explanation }: { explanation: string }) {
  if (!explanation) return null;

  return (
    <div className="rounded-2xl border border-border-subtle bg-background-card p-6">
      <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
        <MessageSquareText className="h-4.5 w-4.5 text-accent-strong" strokeWidth={1.75} />
        Why this verdict
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{explanation}</p>
    </div>
  );
}
