import { ShieldIcon } from "./icons";

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
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-background transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
    >
      <ShieldIcon className="h-4.5 w-4.5" />
      Scan for Threats
    </button>
  );
}
