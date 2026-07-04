import { ShieldCheck } from "lucide-react";

interface ScanButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ScanButton({ onClick, disabled }: ScanButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue via-accent to-accent-strong px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-10px_rgba(99,102,241,0.65)] transition-all duration-200 hover:shadow-[0_10px_36px_-8px_rgba(99,102,241,0.75)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
    >
      <ShieldCheck
        className="h-4.5 w-4.5 transition-transform group-hover:scale-110"
        strokeWidth={2}
      />
      Run Trust Scan
    </button>
  );
}
