import { AlertTriangleIcon } from "./icons";

export default function EvidenceList({ evidence }: { evidence: string[] }) {
  if (evidence.length === 0) return null;

  return (
    <div className="rounded-xl border border-border-subtle bg-background-card p-5">
      <h3 className="text-sm font-semibold text-foreground">Evidence</h3>
      <ul className="mt-3 space-y-2.5">
        {evidence.map((item, index) => (
          <li
            key={index}
            className="animate-fade-in-up flex items-start gap-2.5 text-sm text-muted"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
