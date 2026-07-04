export default function ExplanationCard({ explanation }: { explanation: string }) {
  if (!explanation) return null;

  return (
    <div className="rounded-xl border border-border-subtle bg-background-card p-5">
      <h3 className="text-sm font-semibold text-foreground">AI Explanation</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{explanation}</p>
    </div>
  );
}
