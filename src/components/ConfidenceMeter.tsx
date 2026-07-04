export default function ConfidenceMeter({ confidence }: { confidence: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>AI Confidence</span>
        <span className="font-medium text-foreground">{confidence}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
        <div
          className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
          style={{ width: `${confidence}%` }}
        />
      </div>
    </div>
  );
}
