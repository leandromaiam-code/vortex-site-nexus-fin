import * as React from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

export function Button({
  asChild,
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2D3]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07071a] disabled:opacity-60 disabled:pointer-events-none";
  const sizes: Record<Size, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-5 text-base",
  };
  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-[#6C5CE7] via-[#8B7BFF] to-[#00D2D3] text-[#060616] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_50px_rgba(108,92,231,0.25)] hover:brightness-110",
    secondary:
      "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)] hover:bg-white/14",
    outline:
      "bg-transparent text-white shadow-[0_0_0_1px_rgba(255,255,255,0.18)] hover:bg-white/8",
  };

  // asChild not implemented (no Radix). Keep simple.
  return (
    <button className={[base, sizes[size], variants[variant], className].filter(Boolean).join(" ")} {...props} />
  );
}