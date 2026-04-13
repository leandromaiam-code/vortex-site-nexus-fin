import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "kNexo WhatsApp Expense Tracker — Text Your Spending, Get Insights (US/UK)",
  description:
    "Track expenses by messaging on WhatsApp. kNexo categorizes spending, sends proactive AI insights, and keeps you consistent with missions and XP. Join the waitlist.",
  alternates: { canonical: "/whatsapp-expense-tracker" },
  openGraph: {
    title: "kNexo WhatsApp Expense Tracker",
    description: "Text your spending on WhatsApp. Get AI insights, missions, and XP. Join the waitlist.",
    url: "/whatsapp-expense-tracker",
    images: [{ url: "/og/knexo-og.png", width: 1200, height: 630, alt: "kNexo WhatsApp Expense Tracker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "kNexo WhatsApp Expense Tracker",
    description: "Text your spending on WhatsApp. Join the waitlist.",
    images: ["/og/knexo-og.png"],
  },
};

export default function WhatsAppFeaturePage() {
  return (
    <div>
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-44 left-10 h-[520px] w-[520px] rounded-full bg-[#00D2D3]/18 blur-3xl" />
            <div className="absolute -bottom-48 right-0 h-[520px] w-[520px] rounded-full bg-[#6C5CE7]/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#00D2D3]" />
                  WhatsApp-first experience
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  Text your spending.{" "}
                  <span className="bg-gradient-to-r from-[#00D2D3] via-white to-[#8B7BFF] bg-clip-text text-transparent">
                    Get insights automatically.
                  </span>
                </h1>

                <p className="mt-4 text-base text-white/70 md:text-lg">
                  kNexo turns messages into a clean expense log, categories, and proactive nudges—so you stay on budget without opening yet another app.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="#waitlist">
                    <Button size="lg">Join the waitlist</Button>
                  </Link>
                  <Link href="/gamified-budgeting">
                    <Button size="lg" variant="outline">See gamification</Button>
                  </Link>
                </div>

                <div className="mt-4 text-sm text-white/55">
                  Works for US + UK habits. Localized currency support planned.
                </div>
              </div>

              {/* Demo visual: WhatsApp conversation mock */}
              <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_120px_rgba(0,0,0,0.55)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/90">WhatsApp chat (mock)</div>
                  <div className="text-xs text-white/55">kNexo Assistant</div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="ml-auto max-w-[85%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/85">
                    Spent £24.10 groceries
                  </div>
                  <div className="max-w-[92%] rounded-2xl bg-[#00D2D3]/10 px-4 py-3 text-sm text-white/90 shadow-[0_0_0_1px_rgba(0,210,211,0.25)]">
                    Added to <span className="font-semibold">Groceries</span>. This month: <span className="font-semibold">£312</span>.
                    You’re 8% above last month—want a “Cook 3 nights” mission?
                  </div>
                  <div className="ml-auto max-w-[60%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/85">
                    Yes
                  </div>
                  <div className="max-w-[92%] rounded-2xl bg-[#6C5CE7]/14 px-4 py-3 text-sm text-white/90 shadow-[0_0_0_1px_rgba(108,92,231,0.25)]">
                    Mission started. Complete it for <span className="font-semibold">+60 XP</span>. Current level: <span className="font-semibold">8</span>.
                  </div>
                </div>

                <div className="mt-4 text-xs text-white/45">
                  {/* Demo visual placeholder */}
                  Conversation UI mockup (placeholder).
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Why WhatsApp beats “another finance app”</h2>
          <p className="mt-2 text-sm text-white/65">Lower friction → more consistency → better outcomes.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "5-second logging", d: "Message an amount + label. kNexo does the rest." },
              { t: "Works in the moment", d: "Log right after you spend—no backlog, no guilt." },
              { t: "Proactive nudges", d: "Get alerts when patterns change, not weeks later." },
              { t: "Natural language queries", d: "Ask: “How much on takeout this week?”" },
              { t: "Shared by default", d: "Households already coordinate in chat—kNexo fits the flow." },
              { t: "Accessible for everyone", d: "No learning curve. Just message like you normally do." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-white/12 bg-white/6 p-5">
                <div className="text-base font-semibold">{b.t}</div>
                <p className="mt-1 text-sm text-white/65">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="text-2xl font-semibold tracking-tight">kNexo vs traditional budgeting apps</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/12">
            <div className="grid grid-cols-3 bg-white/6 text-sm">
              <div className="p-4 font-semibold">Feature</div>
              <div className="p-4 font-semibold">kNexo</div>
              <div className="p-4 font-semibold">Traditional apps</div>
            </div>

            {[
              ["Log expenses", "Text in WhatsApp", "Open app + forms"],
              ["Insights", "Proactive alerts", "Mostly reactive dashboards"],
              ["Habit system", "Missions + XP + streaks", "Light badges (if any)"],
              ["Households", "Built-in shared mode", "Often add-on / limited"],
              ["Consistency", "Designed for daily use", "High drop-off after setup"],
            ].map((row) => (
              <div key={row[0]} className="grid grid-cols-3 border-t border-white/10 text-sm">
                <div className="p-4 text-white/75">{row[0]}</div>
                <div className="p-4 text-white">{row[1]}</div>
                <div className="p-4 text-white/70">{row[2]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="waitlist" className="mx-auto max-w-6xl px-4 pb-20">
          <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Ready to track spending the easy way?</h2>
                <p className="mt-3 text-sm text-white/70">
                  Join the waitlist for WhatsApp-first expense tracking + proactive AI insights.
                </p>
              </div>
              <WaitlistForm market="INTL" sourcePage="/whatsapp-expense-tracker" persona="whatsapp" />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Product",
                  name: "kNexo WhatsApp Expense Tracker",
                  description:
                    "Track expenses by messaging on WhatsApp. Get proactive AI insights, missions, XP, and shared budgets.",
                  brand: { "@type": "Brand", name: "kNexo" },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "How do I track expenses on WhatsApp?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "You message your spending in natural language (amount + note). kNexo categorizes it and updates your budget automatically.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does it work in the US and UK?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "kNexo is built for US and UK users. Currency localization is planned as part of the launch rollout.",
                      },
                    },
                  ],
                },
              ],
            },
            null,
            2
          ),
        }}
      />
    </div>
  );
}