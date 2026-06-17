import { Link } from "wouter";
import { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost" | "link";

const ARROW = (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

const VARIANT_STYLES: Record<Variant, CSSProperties> = {
  primary: {
    background: "var(--navy)",
    color: "var(--text-on-dark)",
  },
  accent: {
    background: "var(--gold-accent)",
    color: "var(--navy-deep)",
  },
  ghost: {
    border: "1.5px solid oklch(96% 0.015 85 / 0.3)",
    color: "var(--text-on-dark)",
  },
  link: {
    color: "var(--blue-accent)",
  },
};

const BASE_CLASS =
  "inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] gap-2";
const LINK_CLASS =
  "group inline-flex items-center text-sm font-semibold tracking-wide gap-2 transition-all duration-300 hover:gap-3";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  style,
  external = false,
  showArrow,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  external?: boolean;
  showArrow?: boolean;
}) {
  const isLink = variant === "link";
  const arrow = (showArrow ?? isLink) ? ARROW : null;
  const classes = `${isLink ? LINK_CLASS : BASE_CLASS} ${className}`;
  const merged = { ...VARIANT_STYLES[variant], ...style };

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        style={merged}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
      >
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={merged}>
      {children}
      {arrow}
    </Link>
  );
}
