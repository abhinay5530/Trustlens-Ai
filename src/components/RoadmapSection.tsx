import {
  Blocks,
  Smartphone,
  MessageCircle,
  Send,
  ShieldAlert,
  Building2,
  Code2,
  Users,
  History,
  FileDown,
} from "lucide-react";

const ROADMAP_ITEMS = [
  { icon: Blocks, label: "Browser Extension" },
  { icon: Smartphone, label: "Mobile App" },
  { icon: MessageCircle, label: "WhatsApp Verification" },
  { icon: Send, label: "Telegram Verification" },
  { icon: ShieldAlert, label: "Email Protection" },
  { icon: Building2, label: "Enterprise Dashboard" },
  { icon: Code2, label: "Developer API" },
  { icon: Users, label: "Team Collaboration" },
  { icon: History, label: "Scan History" },
  { icon: FileDown, label: "PDF Reports" },
];

export default function RoadmapSection() {
  return (
    <section className="border-t border-border-subtle/70 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Coming Soon
        </h2>
        <p className="mt-3 text-muted">What we&apos;re building next.</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {ROADMAP_ITEMS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-card px-4 py-2 text-sm text-muted"
            >
              <Icon className="h-4 w-4 text-accent-strong" strokeWidth={1.75} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
