"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { trackCtaClick } from "@/lib/tracking";

const navLinks = [
  { href: "/whatsapp-expense-tracker", label: "WhatsApp" },
  { href: "/gamified-budgeting", label: "Gamification" },
  { href: "/couples-and-families", label: "Couples & Families" },
  { href: "/ai-money-coach", label: "AI Coach" },
];

export function Navbar({ ctaHref = "#waitlist", ctaLabel = "Join the waitlist" }: { ctaHref?: string; ctaLabel?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07071a]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "text-sm transition-colors",
                  active ? "text-white" : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => trackCtaClick({ label: ctaLabel, location: "navbar" })}
            className="rounded-xl"
            variant="primary"
          >
            {ctaLabel}
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)] md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#07071a] md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/6 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link href={ctaHref} onClick={() => setOpen(false)}>
                <Button
                  className="w-full"
                  onClick={() => trackCtaClick({ label: ctaLabel, location: "mobile_menu" })}
                >
                  {ctaLabel}
                </Button>
              </Link>
              <div className="text-xs text-white/50">
                Single CTA per page: join the waitlist.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}