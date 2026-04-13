import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "kNexo — AI Budgeting on WhatsApp (US) | Join the Waitlist",
  description:
    "The AI budgeting app that works inside WhatsApp. Text your spending, get proactive insights, and stay consistent with missions, XP, and rewards. Join the US waitlist.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "kNexo — AI Budgeting on WhatsApp (US)",
    description:
      "Text your spending on WhatsApp. Get AI insights + missions + XP. Join the waitlist.",
    url: "/",
    images: [{ url: "/og/knexo-og.png", width: 1200, height: 630, alt: "kNexo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "kNexo — AI Budgeting on WhatsApp (US)",
    description:
      "The AI budgeting app that works inside WhatsApp. Join the waitlist.",
    images: ["/og/knexo-og.png"],
  },
};

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
      <span className="text-white/90">{children}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6C5CE7]/30 blur-3xl" />
            <div className="absolute -bottom-40 right-[-80px] h-[520px] w-[520px] rounded-full bg-[#00D2D3]/18 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#00D2D3]" aria-hidden="true" />
                  WhatsApp-first • Proactive AI • Real gamification
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  The <span className="bg-gradient-to-r from-[#8B7BFF] via-white to-[#00D2D3] bg-clip-text text-transparent">AI budgeting app</span>{" "}
                  that works inside WhatsApp.
                </h1>

                <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                  Text your spending like “$12.40 coffee”, and kNexo turns it into categories, trends, and proactive alerts—plus missions, XP, and rewards that make saving stick.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="#waitlist" aria-label="Join the waitlist">
                    <Button size="lg">Join the waitlist</Button>
                  </Link>
                  <Link href="/whatsapp-expense-tracker" aria-label="Explore WhatsApp tracking">
                    <Button size="lg" variant="outline">
                      See WhatsApp demo
                    </Button>
                  </Link>
                </div>

                <div className="mt-4 text-sm text-white/55">
                  Launching in the US. Early access + perks for waitlist members.
                </div>
              </div>

              {/* Hero visual placeholder */}
              <div className="relative">
                <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_120px_rgba(0,0,0,0.55)]">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/90">kNexo • WhatsApp</div>
                    <div className="text-xs text-white/55">Live preview</div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="ml-auto max-w-[85%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/85">
                      Spent $46.20 on groceries at Trader Joe’s
                    </div>
                    <div className="max-w-[90%] rounded-2xl bg-[#00D2D3]/10 px-4 py-3 text-sm text-white/90 shadow-[0_0_0_1px_rgba(0,210,211,0.25)]">
                      Logged. Groceries this week: <span className="font-semibold">$182</span> (↑ 12%).
                      Want a 3-day “No delivery” mission to get back on track?
                    </div>
                    <div className="ml-auto max-w-[70%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/85">
                      Yes — start it.
                    </div>
                    <div className="max-w-[92%] rounded-2xl bg-[#6C5CE7]/14 px-4 py-3 text-sm text-white/90 shadow-[0_0_0_1px_rgba(108,92,231,0.25)]">
                      Mission accepted. +50 XP if you complete it. Current streak: <span className="font-semibold">4 days</span>.
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white/6 p-3">
                      <div className="text-xs text-white/55">Weekly spend</div>
                      <div className="mt-1 text-sm font-semibold">$612</div>
                    </div>
                    <div className="rounded-2xl bg-white/6 p-3">
                      <div className="text-xs text-white/55">XP</div>
                      <div className="mt-1 text-sm font-semibold">1,240</div>
                    </div>
                    <div className="rounded-2xl bg-white/6 p-3">
                      <div className="text-xs text-white/55">Level</div>
                      <div className="mt-1 text-sm font-semibold">7</div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-white/45">
                    {/* Hero image/animation placeholder: pessoa usando app */}
                    Demo UI mockup (placeholder).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid (6) */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">Why kNexo feels effortless</h2>
            <p className="mt-2 text-sm text-white/65">
              Built for real life: less friction, more momentum.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "💬", title: "WhatsApp-first tracking", desc: "Log expenses and ask questions where you already chat—no spreadsheets, no app hopping." },
              { icon: "🧠", title: "Proactive AI insights", desc: "Get alerts, patterns, and opportunities pushed automatically—not just reactive answers." },
              { icon: "🎯", title: "Missions that build habits", desc: "Daily and weekly missions turn saving into a repeatable game loop." },
              { icon: "⚡", title: "XP, levels & streaks", desc: "Real progression mechanics that reward consistency and keep you engaged." },
              { icon: "👫", title: "Couples & family mode", desc: "Shared budgets, shared goals, and visibility designed for households." },
              { icon: "🔒", title: "Privacy-minded by design", desc: "Minimal data collection and clear controls. Built to earn trust." },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/12 bg-white/6 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/8"
              >
                <div className="flex items-start gap-3">
                  <Icon>{f.icon}</Icon>
                  <div>
                    <div className="text-base font-semibold">{f.title}</div>
                    <p className="mt-1 text-sm text-white/65">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social proof */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Built for daily wins</h2>
                <p className="mt-2 text-sm text-white/65">
                  Early metrics placeholders (replace post-launch).
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { k: "Avg. weekly logs", v: "12+" },
                    { k: "Habit streak uplift", v: "2.1×" },
                    { k: "Time-to-log", v: "< 5s" },
                    { k: "Retention focus", v: "Missions + XP" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-2xl bg-white/6 p-4">
                      <div className="text-xs text-white/55">{m.k}</div>
                      <div className="mt-1 text-xl font-semibold">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    quote:
                      "I actually logged spending every day because it felt like texting a friend—and the missions kept me honest.",
                    name: "Waitlist tester (placeholder)",
                  },
                  {
                    quote:
                      "The proactive alerts are the difference. It tells me what changed, not just what I asked.",
                    name: "Beta user (placeholder)",
                  },
                  {
                    quote:
                      "Couple mode made money talks less stressful. We focus on goals, not blame.",
                    name: "Household user (placeholder)",
                  },
                ].map((t) => (
                  <figure key={t.quote} className="rounded-2xl border border-white/12 bg-white/6 p-5">
                    <blockquote className="text-sm text-white/75">“{t.quote}”</blockquote>
                    <figcaption className="mt-3 text-xs text-white/55">{t.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-2 text-sm text-white/65">A simple loop: message → insight → mission → progress.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { step: "01", title: "Text expenses", desc: "Send messages like “$18.90 Uber” or “£24 groceries” (UK page).", color: "from-[#00D2D3]/25" },
              { step: "02", title: "AI categorizes", desc: "kNexo organizes, tags, and learns your patterns automatically.", color: "from-[#6C5CE7]/25" },
              { step: "03", title: "Get proactive nudges", desc: "Alerts, trends, and opportunities show up before problems do.", color: "from-[#FECA57]/20" },
              { step: "04", title: "Win missions & XP", desc: "Complete missions, build streaks, unlock rewards—solo or together.", color: "from-[#8B7BFF]/25" },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-white/12 bg-gradient-to-b from-white/8 to-white/4 p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-white/60">STEP {s.step}</div>
                  <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${s.color} to-transparent`} aria-hidden="true" />
                </div>
                <div className="mt-3 text-base font-semibold">{s.title}</div>
                <p className="mt-1 text-sm text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="waitlist" className="mx-auto max-w-6xl px-4 pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-6 md:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#6C5CE7]/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#00D2D3]/18 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Be first in line for kNexo</h2>
                <p className="mt-3 text-sm text-white/70">
                  Early access, launch perks, and a calmer money routine—powered by conversational AI and real gamification.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  <li>• WhatsApp-first expense tracking</li>
                  <li>• Proactive AI insights + alerts</li>
                  <li>• Missions, XP, levels, streaks</li>
                  <li>• Couples & family shared budgets</li>
                </ul>
              </div>

              <WaitlistForm
                market="US"
                sourcePage="/"
                persona="core"
                headline="Join the US waitlist"
                subcopy="Get early access + launch perks. No spam."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "kNexo (Nexus Fin)",
                  url: process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com",
                  logo: (process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com") + "/og/knexo-og.png",
                },
                {
                  "@type": "Product",
                  name: "kNexo",
                  description:
                    "WhatsApp-first AI budgeting app with proactive insights, gamification (missions, XP), and shared budgets for couples and families.",
                  brand: { "@type": "Brand", name: "kNexo" },
                  category: "Personal finance software",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Do I need to install an app?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "kNexo is WhatsApp-first. You track spending and receive insights inside WhatsApp. A companion app/dashboard may be available later.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is kNexo available in the US?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "kNexo is launching soon. Join the US waitlist to get early access and launch perks.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What makes kNexo different from budgeting apps?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "kNexo combines WhatsApp-first tracking, proactive AI insights, real gamification (missions, XP, streaks), and built-in couples/family shared finances.",
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