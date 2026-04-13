import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTAButton } from '@/components/CTAButton';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Schema } from '@/components/Schema';
import { faqSchema, organizationSchema, productSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';

export const metadata: Metadata = {
  title: 'kNexo — AI Budgeting on WhatsApp (US) | Join the Waitlist',
  description:
    'The AI budgeting app that works on WhatsApp. Text your spending, get proactive insights, and stay consistent with missions, XP, and rewards. Join the US waitlist.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'kNexo — AI Budgeting on WhatsApp (US)',
    description:
      'Text your spending on WhatsApp. Get AI insights + real gamification. Join the waitlist.',
    url: siteUrl,
    images: [{ url: '/og/knexo-og.png', width: 1200, height: 630, alt: 'kNexo' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kNexo — AI Budgeting on WhatsApp (US)',
    description:
      'Text your spending on WhatsApp. Get AI insights + real gamification. Join the waitlist.',
    images: ['/og/knexo-og.png'],
  },
};

function Icon({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 ring-1 ring-white/12"
      title={label}
    >
      <span className="h-4 w-4 rounded bg-gradient-to-br from-[#6C5CE7] to-[#00D2D3]" />
    </span>
  );
}

export default function Page() {
  const pageUrl = `${siteUrl}/`;

  const faqs = [
    {
      q: 'Is kNexo a WhatsApp budgeting app?',
      a: 'Yes. kNexo is built WhatsApp-first: you text spending and get categorized tracking, summaries, and insights without opening a traditional app.',
    },
    {
      q: 'Does kNexo use AI?',
      a: 'Yes. kNexo uses AI to categorize spending, detect patterns, and send proactive alerts and suggestions.',
    },
    {
      q: 'Is there gamification?',
      a: 'Yes. kNexo includes missions, XP, streaks, and levels designed to build consistent money habits.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Schema json={organizationSchema()} />
      <Schema
        json={productSchema(
          pageUrl,
          'kNexo — AI Budgeting on WhatsApp',
          'Track spending by texting on WhatsApp. Get proactive AI insights, missions, XP, and rewards.'
        )}
      />
      <Schema json={faqSchema(pageUrl, faqs)} />

      <Navbar ctaHref="#waitlist" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6C5CE7]/25 blur-3xl" />
            <div className="absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-[#00D2D3]/18 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-medium text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D2D3]" />
                US launch waitlist
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B7BFF] to-[#00D2D3]">AI budgeting app</span> that lives on WhatsApp.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                Text your spending. Get proactive insights. Stay consistent with missions, XP, and rewards — solo or with your partner/family.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton href="#waitlist" variant="primary" eventParams={{ location: 'hero' }}>
                  Join the waitlist
                </CTAButton>
                <p className="text-sm text-white/60">
                  Early access + founding-user perks.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: '60s', v: 'setup' },
                  { k: '0', v: 'spreadsheets' },
                  { k: '24/7', v: 'AI nudges' },
                ].map((m) => (
                  <div key={m.v} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-lg font-semibold text-white">{m.k}</div>
                    <div className="text-xs text-white/60">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">WhatsApp-style AI Budgeting</div>
                  <div className="text-xs text-white/55">Preview</div>
                </div>

                <div className="mt-4 space-y-3">
                  {/* Placeholder conversation */}
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#6C5CE7]/25 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10">
                    Spent $18.40 at Trader Joe’s
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/8 px-4 py-3 text-sm text-white/85 ring-1 ring-white/10">
                    Logged: <span className="font-semibold">Groceries</span>. Want a weekly grocery cap?
                    <div className="mt-2 text-xs text-white/60">
                      Suggested: $90/week · You’re at $41.20
                    </div>
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#00D2D3]/20 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10">
                    Yes — set it.
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/8 px-4 py-3 text-sm text-white/85 ring-1 ring-white/10">
                    Done. Mission unlocked: <span className="font-semibold">“Week 1 Grocery Guard”</span> (+120 XP)
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-[#0A0A23]/40 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-white/60">Streak</div>
                    <div className="text-xs font-semibold text-[#CFFBFB]">5 days</div>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/8">
                    <div className="h-2 w-[62%] rounded-full bg-gradient-to-r from-[#FECA57] to-[#00D2D3]" />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-white/55">
                    <span>Level 3</span>
                    <span>620 / 1000 XP</span>
                  </div>
                </div>

                {/* Hero image placeholder */}
                <div className="mt-4 text-xs text-white/45">
                  {/* Hero image: person using WhatsApp on phone, dark UI */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Built for daily wins — not monthly guilt.
              </h2>
              <p className="mt-2 text-sm text-white/70">
                WhatsApp-first capture + proactive AI + real gamification + shared budgets.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: 'WhatsApp-first tracking',
                d: 'Log expenses in seconds by texting — no spreadsheet, no app switching.',
              },
              {
                t: 'Proactive AI insights',
                d: 'Get alerts when spending drifts, plus opportunities to save automatically.',
              },
              {
                t: 'Missions, XP & streaks',
                d: 'A real loop that keeps you consistent — not “badge-only” gamification.',
              },
              {
                t: 'Couples & family mode',
                d: 'Shared visibility, shared goals, and household missions built-in.',
              },
              {
                t: 'Smart categories',
                d: 'AI categorization with quick corrections and learning over time.',
              },
              {
                t: 'Privacy-minded by design',
                d: 'Clear data handling, minimal collection, and unsubscribe anytime.',
              },
            ].map((f) => (
              <div
                key={f.t}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06]"
              >
                <Icon label={f.t} />
                <div className="mt-4 text-base font-semibold text-white">{f.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social proof */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Momentum you can feel.
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  Placeholders below — swap with real metrics and testimonials as you collect them.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: '10k+', v: 'messages processed' },
                    { k: '92%', v: 'categorization accuracy' },
                    { k: '4.8/5', v: 'habit satisfaction' },
                  ].map((m) => (
                    <div key={m.v} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-lg font-semibold">{m.k}</div>
                      <div className="text-xs text-white/60">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    q: '“I finally track spending without thinking about it.”',
                    a: '— Beta user (placeholder)',
                  },
                  {
                    q: '“The missions made saving feel doable.”',
                    a: '— Early adopter (placeholder)',
                  },
                  {
                    q: '“Couple mode stopped money fights.”',
                    a: '— Household tester (placeholder)',
                  },
                ].map((t) => (
                  <figure
                    key={t.q}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <blockquote className="text-sm text-white/80">“{t.q.replaceAll('“', '').replaceAll('”', '')}”</blockquote>
                    <figcaption className="mt-2 text-xs text-white/55">{t.a}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">How it works</h2>
          <p className="mt-2 text-sm text-white/70">A simple loop designed for consistency.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { n: '01', t: 'Text an expense', d: 'Send “Spent $12 on coffee” on WhatsApp.' },
              { n: '02', t: 'AI logs & learns', d: 'Auto-categorizes and adapts to your corrections.' },
              { n: '03', t: 'Get proactive nudges', d: 'Alerts, summaries, and “next best action” suggestions.' },
              { n: '04', t: 'Earn XP & level up', d: 'Missions, streaks, rewards — solo or shared.' },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-xs font-semibold text-white/55">{s.n}</div>
                <div className="mt-2 text-base font-semibold text-white">{s.t}</div>
                <p className="mt-2 text-sm text-white/70">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <WaitlistForm
            source="landing_us"
            locale="US"
            headline="Join the US waitlist"
            description="Be first to try WhatsApp-first AI budgeting + missions, XP, and shared household goals."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}