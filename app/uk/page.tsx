import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTAButton } from '@/components/CTAButton';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Schema } from '@/components/Schema';
import { productSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';

export const metadata: Metadata = {
  title: 'kNexo — AI Budgeting on WhatsApp (UK) | Join the Waitlist',
  description:
    'A budgeting app for the UK that works on WhatsApp. Track spending in seconds, get proactive AI insights, and stay consistent with missions, XP, and rewards. Join the UK waitlist.',
  alternates: { canonical: '/uk' },
  openGraph: {
    title: 'kNexo — AI Budgeting on WhatsApp (UK)',
    description: 'WhatsApp-first budgeting for the UK (GBP-ready) with AI insights + gamification.',
    url: `${siteUrl}/uk`,
    images: [{ url: '/og/knexo-og.png', width: 1200, height: 630, alt: 'kNexo' }],
    type: 'website',
  },
};

export default function Page() {
  const pageUrl = `${siteUrl}/uk`;

  return (
    <div className="min-h-screen">
      <Schema
        json={productSchema(
          pageUrl,
          'kNexo — AI Budgeting on WhatsApp (UK)',
          'UK budgeting on WhatsApp with proactive AI insights, missions, XP, and shared household goals.'
        )}
      />

      <Navbar ctaHref="#waitlist" />

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6C5CE7]/22 blur-3xl" />
            <div className="absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-[#00D2D3]/16 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-medium text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D2D3]" />
              UK launch waitlist
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B7BFF] to-[#00D2D3]">budgeting app for the UK</span> — on WhatsApp.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Track spending in seconds (GBP-ready). Get proactive AI insights and a gamified habit loop with missions, XP, and streaks.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="#waitlist" variant="primary" eventParams={{ location: 'hero_uk' }}>
                Join the waitlist
              </CTAButton>
              <p className="text-sm text-white/60">Privacy-minded. Unsubscribe anytime.</p>
            </div>

            <div className="mt-10">
              <WaitlistForm
                source="landing_uk"
                locale="UK"
                headline="Join the UK waitlist"
                description="Be first to try WhatsApp-first budgeting with AI insights + missions, XP, and shared goals."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}