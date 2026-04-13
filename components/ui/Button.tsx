"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { trackCtaClick } from "@/lib/track";

type Variant = "primary" | "secondary" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#6C5CE7] via-[#7C6CFF] to-[#00D2D3] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_20px_60px_-20px_rgba(108,92,231,0.75)] hover:opacity-95",
  secondary:
    "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] hover:bg-white/15",
  outline:
    "bg-transparent text-white border border-white/15 hover:border-white/25 hover:bg-white/5",
};

export function Button({
  as = "button",
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  eventName,
}: {
  as?: "button" | "link";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
  eventName?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2D3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A23]";
  const sizes =
    size === "sm"
      ? "px-3 py-2 text-sm"
      : size === "lg"
        ? "px-6 py-3.5 text-base"
        : "px-4 py-2.5 text-sm md:text-base";

  const cls = cn(base, sizes, styles[variant], className);

  if (as === "link" && href) {
    return (
      <Link
        href={href}
        className={cls}
        aria-label={ariaLabel}
        onClick={() => {
          trackCtaClick(eventName || "cta_click", { href, variant });
          onClick?.();
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      aria-label={ariaLabel}
      onClick={() => {
        trackCtaClick(eventName || "cta_click", { variant });
        onClick?.();
      }}
      type="button"
    >
      {children}
    </button>
  );
}