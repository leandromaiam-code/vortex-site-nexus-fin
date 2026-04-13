import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "kNexo Gamified Budgeting — Turn Saving into a Game (US/UK)",
  description:
    "A gamified budgeting app with missions, XP, levels, streaks, and rewards—powered by proactive AI insights. Join the kNexo waitlist.",
  alternates: { canonical: "/gamified-budgeting" },
  openGraph: {
    title: "kNexo Gamified Budgeting",
    description: "Turn saving into a game with missions, XP, levels, and rewards. Join the waitlist.",
    url: "/gamified-budgeting",
    images: [{ url: "/og/knexo-og.png", width: 1200, height: 630, alt: "kNexo Gamified Budgeting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "kNexo Gamified Budgeting",
    description: "Missions, XP, levels, streaks—join the waitlist.",
    images: ["/og/knexo-og.png"],
  },
};

export default function GamificationPage() {
  return (
    <div>
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#FECA57]/14 blur-3xl" />
            <div className="absolute -bottom-48 left-0 h-[520px] w-[520px] rounded-full bg-[#6C5CE7]/25 blur-3xl" />
            <div className="absolute -bottom-48 right-0 h-[520px] w-[520px] rounded-full bg-[#00D2D3]/16 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#FECA57]" />
                  Real gamification loop
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  Turn saving into a{" "}
                  <span className="bg-gradient-to-r from-[#FECA57] via-white to-[#00D2D3] bg-clip-text text-transparent">
                    game you actually keep playing.
                  </span>
                </h1>

                <p className="mt-4 text-base text-white/70 md:text-lg">
                  Missions, XP, levels, streaks, and rewards—designed to build habits. Powered by proactive AI that adapts missions to your spending patterns.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="#waitlist">
                    <Button size="lg">Join the waitlist</Button>
                  </Link>
                  <Link href="/whatsapp-expense-tracker">
                    <Button size="lg" variant="outline">See WhatsApp flow</Button>
                  </Link>
                </div>
              </div>

              {/* Game UI visual */}
              <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_120px_rgba(0,0,0,0.55)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/90">Progress (mock)</div>
                  <div className="text-xs text-white/55">Level 8</div>
                </div>

                <div className="mt-4 rounded-2xl bg-white/6 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-white/75">XP</div>
                    <div className="font-semibold">1,840 / 2,000</div>
                  </div>
                  <div className="mt-3 h-3 w-full rounded-full bg-white/10">
                    <div className="h-3 w-[92%] rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#00D2D3]" />
                  </div>
                  <div className="mt-2 text-xs text-white/55">92% to Level 9</div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { t: "Streak", v: "6 days" },
                    { t: "Missions", v: "3 active" },
                    { t: "Rewards", v: "2 unlocked" },
                  ].map((x) => (
                    <div key={x.t} className="rounded-2xl bg-white/6 p-3">
                      <div className="text-xs text-white/55">{x.t}</div>
                      <div className="mt-1 text-sm font-semibold">{x.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/12 bg-[#FECA57]/10 p-4">
                  <div className="text-sm font-semibold">Today’s mission</div>
                  <div className="mt-1 text-sm text-white/75">“No delivery” — save $15+ today.</div>
                  <div className="mt-2 text-xs text-white/60">Reward: +50 XP • Badge: “Discipline”</div>
                </div>

                <div className="mt-4 text-xs text-white/45">
                  {/* Hero visual placeholder */}
                  Badges/XP/levels UI mockup (placeholder).
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections: how to earn points, levels, rewards */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">How you earn points</h2>
          <p className="mt-2 text-sm text-white/65">A habit loop that rewards the actions that matter.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Log spending", d: "+5 XP per day when you keep the habit alive." },
              { t: "Complete missions", d: "+30–100 XP depending on difficulty and consistency." },
              { t: "Hit weekly goals", d: "Stack bonuses for staying under target categories." },
              { t: "Build streaks", d: "Streak multipliers reward consistency (not perfection)." },
              { t: "Team up (couples/family)", d: "Shared missions unlock co-op rewards." },
              { t: "Reflect & improve", d: "Weekly review prompts earn XP and improve AI coaching." },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl border border-white/12 bg-white/6 p-5">
                <div className="text-base font-semibold">{i.t}</div>
                <p className="mt-1 text-sm text-white/65">{i.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-6">
              <h3 className="text-xl font-semibold tracking-tight">Levels of evolution</h3>
              <p className="mt-2 text-sm text-white/65">Progress from “Starter” to “Strategist” with clear milestones.</p>

              <div className="mt-5 space-y-3">
                {[
                  { lvl: "Level 1–3", name: "Starter", note: "Log consistently. Learn your baseline." },
                  { lvl: "Level 4–6", name: "Builder", note: "Complete missions. Reduce leaks." },
                  { lvl: "Level 7–9", name: "Optimizer", note: "Proactive insights + category goals." },
                  { lvl: "Level 10+", name: "Strategist", note: "Shared goals, long-term planning, rewards." },
                ].map((l) => (
                  <div key={l.lvl} className="rounded-2xl bg-white/6 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">{l.name}</div>
                      <div className="text-xs text-white/55">{l.lvl}</div>
                    </div>
                    <div className="mt-1 text-sm text-white/70">{l.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-6">
              <h3 className="text-xl font-semibold tracking-tight">Rewards that reinforce habits</h3>
              <p className="mt-2 text-sm text-white/65">Rewards are optional, but motivation isn’t.</p>

              <div className="mt-5 grid gap-3">
                {[
                  { t: "Achievement badges", d: "Meaningful milestones tied to real outcomes." },
                  { t: "Streak boosts", d: "Momentum mechanics to keep you consistent." },
                  { t: "Unlockable missions", d: "New challenges as you level up." },
                  { t: "Partner/family co-op", d: "Shared wins that reduce money stress." },
                ].map((r) => (
                  <div key={r.t} className="rounded-2xl bg-white/6 p-4">
                    <div className="text-sm font-semibold">{r.t}</div>
                    <div className="mt-1 text-sm text-white/70">{r.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Journey/progress visual */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="text-2xl font-semibold tracking-tight">Your journey (visual)</h2>
          <p className="mt-2 text-sm text-white/65">A simple roadmap from logging to mastery.</p>

          <div className="mt-6 rounded-3xl border border-white/12 bg-white/6 p-6">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { t: "Log", d: "Message spending daily" },
                { t: "Understand", d: "AI finds patterns" },
                { t: "Act", d: "Missions + nudges" },
                { t: "Win", d: "Levels + rewards" },
              ].map((x, idx) => (
                <div key={x.t} className="relative rounded-2xl bg-[#07071a]/35 p-4 shadow-inner">
                  <div className="text-xs text-white/55">Stage {idx + 1}</div>
                  <div className="mt-1 text-base font-semibold">{x.t}</div>
                  <div className="mt-1 text-sm text-white/65">{x.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 w-[55%] rounded-full bg-gradient-to-r from-[#FECA57] via-[#6C5CE7] to-[#00D2D3]" />
            </div>
            <div className="mt-2 text-xs text-white/55">Example progress bar (placeholder).</div>
          </div>
        </section>

        {/* CTA */}
        <section id="waitlist" className="mx-auto max-w-6xl px-4 pb-20">
          <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-white/10 to-white/4 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Want budgeting that actually sticks?</h2>
                <p className="mt-3 text-sm text-white/70">Join the waitlist for missions, XP, and proactive AI coaching.</p>
              </div>
              <WaitlistForm market="INTL" sourcePage="/gamified-budgeting" persona="gamification" />
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
                  name: "kNexo Gamified Budgeting",
                  description:
                    "Gamified budgeting with missions, XP, levels, streaks, and rewards—powered by proactive AI insights.",
                  brand: { "@type": "Brand", name: "kNexo" },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is gamified budgeting?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Gamified budgeting uses missions, points (XP), levels, and streaks to make money habits consistent and rewarding.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does kNexo have real rewards?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "kNexo focuses on habit reinforcement with missions, XP, levels, and unlocks. Reward systems may evolve during launch.",
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