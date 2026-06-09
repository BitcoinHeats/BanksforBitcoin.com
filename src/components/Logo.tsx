import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** When true, only render the icon mark without the wordmark text. */
  iconOnly?: boolean;
}

/**
 * Brand logo for Banks for Bitcoin.
 * A classic bank "building with columns" silhouette whose pediment carries
 * the Bitcoin ₿ symbol, paired with a two-line wordmark.
 */
export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-12 w-12 shrink-0" />
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">
            Banks<span className="text-primary">for</span>Bitcoin
            <span className="text-muted-foreground">.com</span>
          </span>
          <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Bitcoin-Friendly Banking
          </span>
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Banks for Bitcoin logo"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bfb-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBB034" />
          <stop offset="100%" stopColor="#F7931A" />
        </linearGradient>
      </defs>

      {/* Rounded badge background */}
      <rect width="64" height="64" rx="15" fill="url(#bfb-grad)" />

      {/* Bank building, drawn in white */}
      <g fill="#ffffff">
        {/* Roof / pediment */}
        <path d="M32 12 L51 23 H13 Z" />
        {/* Columns */}
        <rect x="17" y="27" width="4.5" height="16" rx="1" />
        <rect x="25" y="27" width="4.5" height="16" rx="1" />
        <rect x="34.5" y="27" width="4.5" height="16" rx="1" />
        <rect x="42.5" y="27" width="4.5" height="16" rx="1" />
        {/* Base / steps */}
        <rect x="13" y="46" width="38" height="4" rx="1.5" />
        <rect x="10" y="51" width="44" height="3.5" rx="1.75" />
      </g>

      {/* Bitcoin ₿ in the pediment */}
      <text
        x="32"
        y="22"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#F7931A"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        ₿
      </text>
    </svg>
  );
}
