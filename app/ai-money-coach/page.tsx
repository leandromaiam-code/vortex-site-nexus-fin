import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WaitlistForm } from '@/components/WaitlistForm';
import { CTAButton } from '@/components/CTAButton';
import { Schema } from '@/components/Schema';
import { productSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';

export const metadata: Metadata = {
  title: 'kNexo — AI Money Coach on WhatsApp (US/UK)',
  description:
    'An AI money coach that messages you on WhatsApp: proactive alerts, weekly recaps, and next-best actions — plus missions, XP, and shared household goals. Join the waitlist.',
  alternates: { canonical: '/ai-money-coach' },
};

export default function Page() {
  const pageUrl = `${siteUrl}/ai-money-coach`;

  return (
    <div className="min-h-screen">
      <Schema
        json={productSchema(
          pageUrl,
          'kNexo — AI Money Coach on WhatsApp',
          'Proactive AI money coaching via WhatsApp: alerts, recaps, and next-best actions, plus gamified missions and shared goals.'
        )}
      />

      <Navbar ctaHref="#waitlist" />

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#00D2D3]/18 blur-3xl" />
            <div className="absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-[#6C5CE7]/22 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
            <div className="relative">
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#8B7BFF]">AI money coach</span> — in WhatsApp.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                kNexo doesn’t just answer questions. It proactively alerts you, summarizes your week, and suggests the next best action — with missions and XP to keep you consistent.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton href="#waitlist" variant="primary" eventParams={{ location: 'hero_coach' }}>
                  Join the waitlist
                </CTAButton>
                <p className="text-sm text-white/60">Coaching that fits real life.</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { t: 'Proactive alerts', d: 'Catch overspending early with gentle nudges.' },
                  { t: 'Weekly recaps', d: 'Clear summaries you’ll actually read.' },
                  { t: 'Next best action', d: 'One small step, right now — not 20 charts.' },
                  { t: 'Habit reinforcement', d: 'Missions + XP keep momentum going.' },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-base font-semibold text-white">{x.t}</div>
                    <p className="mt-2 text-sm text-white/70">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="text-sm font-semibold text-white">Coach preview (mock)</div>
                <div className="mt-4 space-y-3">
                  <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white/8 px-4 py-3 text-sm text-white/85 ring-1 ring-white/10">
                    Heads up: Dining is trending +22% vs last week. Want a 3-day micro-mission to rebalance?
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#6C5CE7]/22 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10">
                    Yes. Keep it easy.
                  </div>
                  <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white/8 px-4 py-3 text-sm text-white/85 ring-1 ring-white/10">
                    Mission: “Swap 1 meal” (+120 XP). If you complete it, you’ll likely save $18–$30 / £15–£25.
                  </div>
                </div>
                <div className="mt-4 text-xs text-white/45">{/* Visual: AI coach conversation */}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <WaitlistForm
            source="ai_money_coach"
            headline="Get proactive AI coaching"
            description="Join the waitlist for alerts, recaps, and next-best actions — delivered through WhatsApp."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}