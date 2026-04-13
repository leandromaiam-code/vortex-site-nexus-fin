import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WaitlistForm } from '@/components/WaitlistForm';
import { CTAButton } from '@/components/CTAButton';
import { Schema } from '@/components/Schema';
import { faqSchema, productSchema } from '@/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';

export const metadata: Metadata = {
  title: 'kNexo WhatsApp Expense Tracker — Text Your Spending, Get Insights (US/UK)',
  description:
    'A WhatsApp expense tracker powered by AI. Text purchases, auto-categorize spending, and get proactive insights — no spreadsheets, no app switching. Join the waitlist.',
  alternates: { canonical: '/whatsapp-expense-tracker' },
  openGraph: {
    title: 'kNexo WhatsApp Expense Tracker',
    description:
      'Text your spending on WhatsApp. AI logs it, categorizes it, and sends proactive insights.',
    url: `${siteUrl}/whatsapp-expense-tracker`,
    images: [{ url: '/og/knexo-og.png', width: 1200, height: 630, alt: 'kNexo' }],
    type: 'website',
  },
};

export default function Page() {
  const pageUrl = `${siteUrl}/whatsapp-expense-tracker`;

  const faqs = [
    {
      q: 'Do I need to install an app?',
      a: 'kNexo is WhatsApp-first. You can track spending by messaging. A companion app may exist later, but the core loop is chat-based.',
    },
    {
      q: 'Can it handle receipts or merchants?',
      a: 'The assistant can categorize by merchant and learn patterns over time. Receipt features may be added based on waitlist demand.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Schema
        json={productSchema(
          pageUrl,
          'kNexo WhatsApp Expense Tracker',
          'Text your spending on WhatsApp. AI categorizes, summarizes, and sends proactive insights.'
        )}
      />
      <Schema json={faqSchema(pageUrl, faqs)} />

      <Navbar ctaHref="#waitlist" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/3 h-[520px] w-[520px] rounded-full bg-[#00D2D3]/18 blur-3xl" />
            <div className="absolute -bottom-40 right-10 h-[520px] w-[520px] rounded-full bg-[#6C5CE7]/22 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-medium text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FECA57]" />
                WhatsApp-first expense tracking
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Track spending by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#8B7BFF]">texting</span>.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
                kNexo turns WhatsApp into your expense tracker: log purchases in seconds, get smart categories, and receive proactive insights.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton href="#waitlist" variant="primary" eventParams={{ location: 'hero_whatsapp' }}>
                  Join the waitlist
                </CTAButton>
                <p className="text-sm text-white/60">Works for US & UK habits (USD/GBP-ready).</p>
              </div>
            </div>

            {/* Demo visual */}
            <div className="relative">
              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">WhatsApp demo</div>
                  <div className="text-xs text-white/55">Mock conversation</div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#00D2D3]/18 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10">
                    Paid £42.10 for groceries
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/8 px-4 py-3 text-sm text-white/85 ring-1 ring-white/10">
                    Added to <span className="font-semibold">Groceries</span>. This is 68% of your weekly cap.
                    <div className="mt-2 text-xs text-white/60">
                      Tip: try a “no-delivery week” mission to save ~£25.
                    </div>
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#6C5CE7]/22 px-4 py-3 text-sm text-white/90 ring-1 ring-white/10">
                    Start the mission
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/8 px-4 py-3 text-sm text-white/85 ring-1 ring-white/10">
                    Mission started. Earn <span className="font-semibold">+200 XP</span> if you complete it by Sunday.
                  </div>
                </div>

                <div className="mt-4 text-xs text-white/45">
                  {/* Demo visual: WhatsApp chat UI with assistant messages */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Why WhatsApp works</h2>
          <p className="mt-2 text-sm text-white/70">Less friction means more consistency.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Zero context switching', d: 'Capture spending where you already chat every day.' },
              { t: 'Fast logging', d: 'One message is enough — no forms, no categories to hunt.' },
              { t: 'Proactive reminders', d: 'Get nudges when you drift, not after the month ends.' },
              { t: 'Natural language', d: '“Spent 12 on coffee” or “Uber 18.90” — kNexo understands.' },
              { t: 'Shared by default', d: 'Perfect for couples/families: shared thread, shared clarity.' },
              { t: 'Habit-friendly', d: 'Short loops beat perfect systems. WhatsApp makes it stick.' },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-base font-semibold text-white">{b.t}</div>
                <p className="mt-2 text-sm text-white/70">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">kNexo vs traditional budgeting apps</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-3 bg-white/[0.04]">
              <div className="p-4 text-sm font-semibold text-white">Feature</div>
              <div className="p-4 text-sm font-semibold text-white">kNexo</div>
              <div className="p-4 text-sm font-semibold text-white">Traditional apps</div>
            </div>

            {[
              ['Log expenses', 'Text on WhatsApp', 'Open app + forms'],
              ['Insights', 'Proactive AI nudges', 'Mostly dashboards'],
              ['Consistency', 'Missions + XP + streaks', 'Willpower-based'],
              ['Households', 'Couples/family mode built-in', 'Often add-on'],
              ['Friction', 'Low', 'Medium–high'],
            ].map((row) => (
              <div key={row[0]} className="grid grid-cols-3 border-t border-white/10">
                <div className="p-4 text-sm text-white/80">{row[0]}</div>
                <div className="p-4 text-sm text-white/80">{row[1]}</div>
                <div className="p-4 text-sm text-white/65">{row[2]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <WaitlistForm
            source="whatsapp_feature"
            headline="Get WhatsApp-first expense tracking"
            description="Join the waitlist to be first to try texting your spending + AI insights + missions."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}