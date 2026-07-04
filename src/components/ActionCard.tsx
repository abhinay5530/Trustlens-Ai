import { ShieldIcon } from "./icons";

export default function ActionCard({ action }: { action: string }) {
  if (!action) return null;

  return (
    <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-accent">
        <ShieldIcon className="h-4 w-4" />
        Recommended Action
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{action}</p>
    </div>
  );
}
