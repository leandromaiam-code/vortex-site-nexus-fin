"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function LogoMark() {
  // Inline simplified mark (keeps brand feel; avoids huge SVG in navbar)
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-2xl bg-white/5 ring-1 ring-white/10 grid place-items-center">
        <span className="h-4 w-4 rounded-full bg-gradient-to-br from-[#FECA57] to-[#FF9F43] shadow-[0_0_30px_rgba(254,202,87,0.35)]" />
      </div>
      <span className="text-lg font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-white via-white to-[#CFFBFB] bg-clip-text text-transparent">
          kNexo
        </span>
      </span>
    </div>
  );
}

export function Navbar({ ctaHref = "#waitlist", ctaLabel = "Join the waitlist" }: { ctaHref?: string; ctaLabel?: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A23]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center" aria-label="Go to homepage">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm text-white/80 hover:text-white transition" href="/whatsapp-expense-tracker">
            WhatsApp
          </Link>
          <Link className="text-sm text-white/80 hover:text-white transition" href="/gamified-budgeting">
            Gamification
          </Link>
          <Link className="text-sm text-white/80 hover:text-white transition" href="/couples-family-budget">
            Couples & Families
          </Link>
          <Button as="link" href={ctaHref} variant="primary" size="sm" ariaLabel={ctaLabel} eventName="cta_click_nav">
            {ctaLabel}
          </Button>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      <div className={cn("md:hidden overflow-hidden border-t border-white/10", open ? "max-h-96" : "max-h-0")}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
          <Link className="text-sm text-white/80 hover:text-white transition" href="/whatsapp-expense-tracker" onClick={() => setOpen(false)}>
            WhatsApp
          </Link>
          <Link className="text-sm text-white/80 hover:text-white transition" href="/gamified-budgeting" onClick={() => setOpen(false)}>
            Gamification
          </Link>
          <Link className="text-sm text-white/80 hover:text-white transition" href="/couples-family-budget" onClick={() => setOpen(false)}>
            Couples & Families
          </Link>
          <Button as="link" href={ctaHref} variant="primary" ariaLabel={ctaLabel} eventName="cta_click_nav_mobile">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}