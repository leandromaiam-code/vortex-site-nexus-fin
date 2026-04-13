'use client';

import * as React from 'react';
import { CTAButton } from '@/components/CTAButton';
import { Logo } from '@/components/Logo';

const navLinks = [
  { href: '/whatsapp-expense-tracker', label: 'WhatsApp' },
  { href: '/gamified-budgeting', label: 'Gamification' },
  { href: '/couples-families', label: 'Couples & Families' },
  { href: '/ai-money-coach', label: 'AI Coach' },
];

export function Navbar({ ctaHref = '#waitlist' }: { ctaHref?: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A23]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A23]/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="/" className="flex items-center gap-3" aria-label="kNexo home">
          <Logo className="h-8 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <CTAButton href={ctaHref} variant="primary" eventParams={{ location: 'navbar' }}>
            Join the waitlist
          </CTAButton>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2D3]/70"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="h-5 w-5">
            <div className={`h-0.5 w-5 bg-current transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <div className={`mt-1.5 h-0.5 w-5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <div className={`mt-1.5 h-0.5 w-5 bg-current transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <CTAButton
              href={ctaHref}
              variant="primary"
              className="w-full"
              eventParams={{ location: 'mobile_nav' }}
            >
              Join the waitlist
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}