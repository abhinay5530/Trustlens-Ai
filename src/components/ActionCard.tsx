import { Compass } from "lucide-react";

export default function ActionCard({ action }: { action: string }) {
  if (!action) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.08] to-transparent p-6">
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-blue to-accent-strong"
      />
      <div className="flex items-center gap-2.5 text-sm font-semibold text-accent-strong">
        <Compass className="h-4.5 w-4.5" strokeWidth={2} />
        What to do next
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-foreground">{action}</p>
    </div>
  );
}
