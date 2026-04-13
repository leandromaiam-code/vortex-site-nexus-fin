import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WaitlistForm } from '@/components/WaitlistForm';
import { CTAButton } from '@/components/CTAButton';
import { Schema } from '@/components/Schema';
import { productSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';

export const metadata: Metadata = {
  title: 'kNexo for Couples & Families — Shared Budget + Missions (US/UK)',
  description:
    'A budget app for couples and families: shared spending visibility, shared goals, and gamified missions — powered by AI and WhatsApp-first tracking. Join the waitlist.',
  alternates: { canonical: '/couples-families' },
};

export default function Page() {
  const pageUrl = `${siteUrl}/couples-families`;

  return (
    <div className="min-h-screen">
      <Schema
        json={productSchema(
          pageUrl,
          'kNexo for Couples & Families',
          'Shared budget + missions for couples and families, powered by WhatsApp-first tracking and proactive AI insights.'
        )}
      />

      <Navbar ctaHref="#waitlist" />

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-10 h-[520px] w-[520px] rounded-full bg-[#6C5CE7]/22 blur-3xl" />
            <div className="absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-[#FECA57]/12 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
            <div className="relative">
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Shared money, fewer fights — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FECA57] to-[#00D2D3]">one household game plan</span>.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                kNexo brings couples and families a shared budget with missions, XP, and proactive AI insights — all through a WhatsApp-first flow.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton href="#waitlist" variant="primary" eventParams={{ location: 'hero_couples' }}>
                  Join the waitlist
                </CTAButton>
                <p className="text-sm text-white/60">Built for US & UK households.</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { t: 'Shared visibility', d: 'Know where money goes without interrogations.' },
                  { t: 'Shared missions', d: 'Turn “we should save” into small weekly wins.' },
                  { t: 'Role-based goals', d: 'Personal goals + household goals in one place.' },
                  { t: 'Proactive alerts', d: 'Catch drift early — before it becomes stress.' },
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
                <div className="text-sm font-semibold text-white">Household journey (example)</div>
                <div className="mt-4 space-y-3">
                  {[
                    { t: 'Set shared goal', d: 'Save $300 / £250 this month' },
                    { t: 'Pick missions', d: '“No delivery week” + “Subscription sweep”' },
                    { t: 'Track via WhatsApp', d: 'Both partners log spending in seconds' },
                    { t: 'Celebrate wins', d: 'XP, streaks, and a clear weekly recap' },
                  ].map((s) => (
                    <div key={s.t} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-sm font-semibold text-white">{s.t}</div>
                      <div className="mt-1 text-xs text-white/60">{s.d}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-white/45">{/* Visual: shared goal card + missions */}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <WaitlistForm
            source="couples_families"
            headline="Get shared budgeting that actually sticks"
            description="Join the waitlist for couples & families: shared goals, missions, and AI nudges — WhatsApp-first."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}