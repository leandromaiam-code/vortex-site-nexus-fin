'use client';

import * as React from 'react';
import { trackEvent } from '@/lib/analytics';

type Variant = 'primary' | 'secondary' | 'outline';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-[#6C5CE7] via-[#8B7BFF] to-[#00D2D3] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_30px_rgba(108,92,231,0.28)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_14px_40px_rgba(0,210,211,0.22)]',
  secondary:
    'bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.14)] hover:bg-white/14',
  outline:
    'bg-transparent text-white shadow-[0_0_0_1px_rgba(255,255,255,0.18)] hover:bg-white/8',
};

export function CTAButton({
  children,
  variant = 'primary',
  href,
  onClick,
  eventName = 'cta_click',
  eventParams,
  className = '',
  ariaLabel,
  type = 'button',
  disabled,
}: {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  eventName?: string;
  eventParams?: Record<string, any>;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2D3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A23] disabled:opacity-60 disabled:cursor-not-allowed';

  const handleClick = () => {
    trackEvent(eventName, {
      ...eventParams,
      label: typeof children === 'string' ? children : 'cta',
      href,
    });
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        aria-label={ariaLabel}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}