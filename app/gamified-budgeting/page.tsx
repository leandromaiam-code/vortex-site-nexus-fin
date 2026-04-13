import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WaitlistForm } from '@/components/WaitlistForm';
import { CTAButton } from '@/components/CTAButton';
import { Schema } from '@/components/Schema';
import { faqSchema, productSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';

export const metadata: Metadata = {
  title: 'kNexo Gamified Budgeting — Turn Saving into a Game (US/UK)',
  description:
    'A gamified budgeting app with missions, XP, streaks, and rewards — powered by AI and built for daily consistency. Join the kNexo waitlist.',
  alternates: { canonical: '/gamified-budgeting' },
  openGraph: {
    title: 'kNexo Gamified Budgeting',
    description: 'Turn saving into a game: missions, XP, streaks, levels — with proactive AI.',
    url: `${siteUrl}/gamified-budgeting`,
    images: [{ url: '/og/knexo-og.png', width: 1200, height: 630, alt: 'kNexo' }],
    type: 'website',
  },
};

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
      {text}
    </span>
  );
}

export default function Page() {
  const pageUrl = `${siteUrl}/gamified-budgeting`;

  const faqs = [
    { q: 'Is this just badges?', a: 'No. kNexo uses missions, XP, streaks, and levels tied to real behaviors (spending caps, savings actions, reviews).' },
    { q: 'Can couples play together?', a: 'Yes. Household missions and shared goals are built-in.' },
  ];

  return (
    <div className="min-h-screen">
      <Schema
        json={productSchema(
          pageUrl,
          'kNexo Gamified Budgeting',
          'A gamified budgeting app with missions, XP, streaks, and rewards — powered by AI and built for daily consistency.'
        )}
      />
      <Schema json={faqSchema(pageUrl, faqs)} />

      <Navbar ctaHref="#waitlist" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-10 h-[520px] w-[520px] rounded-full bg-[#FECA57]/12 blur-3xl" />
            <div className="absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-[#6C5CE7]/22 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
            <div className="relative">
              <div className="flex flex-wrap gap-2">
                <Badge text="Missions" />
                <Badge text="XP" />
                <Badge text="Streaks" />
                <Badge text="Levels" />
                <Badge text="Rewards" />
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Turn saving into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FECA57] to-[#00D2D3]">game</span>.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                kNexo makes budgeting consistent with missions you can actually complete — plus XP, levels, and streaks that reinforce real money habits.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton href="#waitlist" variant="primary" eventParams={{ location: 'hero_gamification' }}>
                  Join the waitlist
                </CTAButton>
                <p className="text-sm text-white/60">Designed for US & UK users.</p>
              </div>
            </div>

            {/* Visual journey */}
            <div className="relative">
              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">Progress</div>
                  <div className="text-xs text-white/55">Example</div>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-[#0A0A23]/35 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-white/60">Level 4</div>
                    <div className="text-xs font-semibold text-[#CFFBFB]">840 / 1200 XP</div>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/8">
                    <div className="h-2 w-[70%] rounded-full bg-gradient-to-r from-[#FECA57] via-[#6C5CE7] to-[#00D2D3]" />
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { t: 'Streak', v: '8 days' },
                      { t: 'Missions', v: '3 active' },
                      { t: 'Rewards', v: '2 unlocked' },
                    ].map((s) => (
                      <div key={s.t} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <div className="text-xs text-white/55">{s.t}</div>
                        <div className="text-sm font-semibold text-white">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    { t: 'Mission: “No takeout Tuesday”', d: '+150 XP · Ends in 18h' },
                    { t: 'Mission: “Review subscriptions”', d: '+250 XP · Find 1 cancel' },
                    { t: 'Mission: “Weekly money check-in”', d: '+120 XP · 5 min' },
                  ].map((m) => (
                    <div key={m.t} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-sm font-semibold text-white">{m.t}</div>
                      <div className="mt-1 text-xs text-white/60">{m.d}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-white/45">
                  {/* Visual: badges, XP bar, level card */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections: how to earn points, levels, rewards */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">How you earn points</h2>
          <p className="mt-2 text-sm text-white/70">Reward behaviors that actually move the needle.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: 'Log spending consistently', d: 'Daily capture via WhatsApp builds awareness automatically.' },
              { t: 'Complete missions', d: 'Small, winnable actions: caps, reviews, and habit swaps.' },
              { t: 'Hit weekly goals', d: 'Savings goals and category caps that adapt to your life.' },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-base font-semibold text-white">{c.t}</div>
                <p className="mt-2 text-sm text-white/70">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Levels & evolution</h2>
          <p className="mt-2 text-sm text-white/70">A clear journey from chaotic to confident.</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {[
              { t: 'Level 1: Starter', d: 'Track basics + first weekly review.' },
              { t: 'Level 2: Builder', d: 'Set caps + complete 2 missions.' },
              { t: 'Level 3: Defender', d: 'Protect savings + reduce leaks.' },
              { t: 'Level 4+: Strategist', d: 'Optimize categories + proactive goals.' },
            ].map((l) => (
              <div key={l.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-sm font-semibold text-white">{l.t}</div>
                <p className="mt-2 text-sm text-white/70">{l.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Rewards that keep it fun</h2>
          <p className="mt-2 text-sm text-white/70">Placeholders — customize based on partnerships.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: 'Unlock themes & badges', d: 'Cosmetics that reflect progress — not pressure.' },
              { t: 'Partner perks', d: 'Discounts or offers (future roadmap).' },
              { t: 'Household rewards', d: 'Shared rewards for shared missions.' },
            ].map((r) => (
              <div key={r.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-base font-semibold text-white">{r.t}</div>
                <p className="mt-2 text-sm text-white/70">{r.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <WaitlistForm
            source="gamification_page"
            headline="Get gamified budgeting that actually sticks"
            description="Join the waitlist for missions, XP, streaks, and AI nudges — built for real life."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}