'use client';

import * as React from 'react';
import { CTAButton } from '@/components/CTAButton';
import { trackEvent } from '@/lib/analytics';
import { assertSupabaseEnv, supabaseConfig } from '@/lib/supabase';

type Props = {
  source: string; // page identifier
  locale?: 'US' | 'UK';
  headline?: string;
  description?: string;
};

export function WaitlistForm({
  source,
  locale,
  headline = 'Get early access',
  description = 'Join the waitlist. We’ll email you when kNexo launches in your region.',
}: Props) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = React.useState<string>('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      assertSupabaseEnv();

      const res = await fetch(`${supabaseConfig.url}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          apikey: supabaseConfig.anonKey,
          Authorization: `Bearer ${supabaseConfig.anonKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          email,
          source,
          locale: locale ?? null,
          created_at: new Date().toISOString(),
          user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
          referrer: typeof document !== 'undefined' ? document.referrer : null,
          page_url: typeof window !== 'undefined' ? window.location.href : null,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Failed to submit');
      }

      trackEvent('waitlist_signup', { source, locale: locale ?? 'NA' });

      setStatus('success');
      setMessage('You’re in. Check your inbox soon.');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
    }
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-6 md:p-8"
      aria-label="Waitlist signup"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6C5CE7]/20 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-[#00D2D3]/18 blur-3xl" />
      </div>

      <div className="relative">
        <h3 className="text-xl font-semibold text-white">{headline}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>

        <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full flex-1 rounded-xl border border-white/12 bg-[#0A0A23]/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-[#00D2D3]/40"
          />

          <CTAButton
            type="submit"
            variant="primary"
            disabled={status === 'loading'}
            eventParams={{ location: 'waitlist_form', source }}
          >
            {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
          </CTAButton>
        </form>

        <div className="mt-3 min-h-[1.25rem] text-sm">
          {status === 'success' && <p className="text-[#CFFBFB]">{message}</p>}
          {status === 'error' && <p className="text-[#FECA57]">{message}</p>}
          {status === 'idle' && (
            <p className="text-white/55">
              No spam. Unsubscribe anytime. We’ll never sell your data.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}