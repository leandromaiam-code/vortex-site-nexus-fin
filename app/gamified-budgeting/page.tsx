import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { buildMetadata, FaqJsonLd, OrganizationJsonLd, ProductJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "kNexo Gamified Budgeting — Turn Saving into a Game (US/UK)",
  description:
    "A gamified budgeting app with missions, XP, levels, streaks, and rewards. Build money habits that stick — powered by WhatsApp-first tracking and AI insights.",
  path: "/gamified-budgeting",
});

export default function GamificationPage() {
  return (
    <div className="min-h-dvh">
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main className="mx-auto max-w-6xl px-4 md:px-6">
        <OrganizationJsonLd />
        <ProductJsonLd
          name="kNexo Gamified Budgeting"
          description="Gamified budgeting with missions, XP, levels, streaks, and rewards — powered by WhatsApp-first AI."
        />
        <FaqJsonLd
          faqs={[
            {
              question: "What makes kNexo a gamified budgeting app?",
              answer:
                "kNexo uses missions, XP, levels, streaks, and rewards tied to real money behaviors (like weekly caps and no-spend challenges).",
            },
            {
              question: "Is it just badges?",
              answer:
                "No. The system is designed as a habit loop: clear missions, immediate feedback, and progression that reinforces consistency.",
            },
          ]}
        />

        {/* Hero */}
        <section className="pt-14 pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#FECA57] shadow-[0_0_18px_rgba(254,202,87,0.55)]" />
                Missions • XP • Levels • Rewards
              </div>

              <h1 className="h-hero mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Turn saving into a{" "}
                <span className="bg-gradient-to-r from-[#FECA57] via-white to-[#00D2D3] bg-clip-text text-transparent">
                  game you can win
                </span>
                .
              </h1>
              <p className="mt-4 text-base text-white/75 md:text-lg">
                kNexo keeps you consistent with real missions and progression — powered by WhatsApp-first tracking and proactive AI insights.
              </p>

              <div className="mt-7" id="waitlist">
                <WaitlistForm source="gamification_page" buttonLabel="Join the waitlist" />
              </div>
            </div>

            {/* Visual: badges / XP / levels */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Progress preview</div>
                  <div className="text-xs text-white/60">Placeholder</div>
                </div>

                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0A0A23] p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-semibold">Level 7 — Budget Ranger</div>
                      <div className="text-white/60">1,420 / 1,800 XP</div>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#00D2D3]" />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge label="3-day streak" />
                      <Badge label="No-spend mission" />
                      <Badge label="Weekly review" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <CardStat label="Missions" value="Daily" />
                    <CardStat label="Rewards" value="Real" />
                    <CardStat label="Insights" value="AI" />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-r from-[#FECA57]/18 via-transparent to-[#6C5CE7]/18 blur-2xl" />
            </div>
          </div>
        </section>

        {/* How to earn points */}
        <section className="py-12">
          <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">How you earn points</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Tile title="Log spending" desc="Every logged expense builds your timeline (+XP)." />
            <Tile title="Complete missions" desc="No-spend days, caps, weekly reviews (+big XP)." />
            <Tile title="Hit streaks" desc="Consistency multiplies progress and momentum." />
            <Tile title="Improve categories" desc="Tighten one category for 7 days and level up." />
            <Tile title="Household teamwork" desc="Shared missions for couples & families." />
            <Tile title="AI challenges" desc="Proactive suggestions turn into optional quests." />
          </div>
        </section>

        {/* Levels */}
        <section className="py-12">
          <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">Levels of evolution</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Level name="Starter" perk="First budget + first mission" />
            <Level name="Tracker" perk="Weekly caps + streaks" />
            <Level name="Optimizer" perk="AI insights + smarter goals" />
            <Level name="Hero" perk="Shared wins + long-term momentum" />
          </div>
        </section>

        {/* Rewards */}
        <section className="py-12">
          <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">Rewards that reinforce habits</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Reward title="Unlock new missions" desc="Progress opens more tailored challenges." />
            <Reward title="Streak boosts" desc="Consistency makes future missions easier to complete." />
            <Reward title="Real-world perks" desc="Placeholder for partner perks/coupons at launch." />
          </div>
        </section>

        {/* Journey visual */}
        <section className="py-12">
          <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">Your journey</h2>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <ol className="grid gap-4 md:grid-cols-4">
              <JourneyStep title="Day 1" desc="Text 3 expenses → instant clarity" />
              <JourneyStep title="Week 1" desc="Set caps + complete 1 mission" />
              <JourneyStep title="Week 2" desc="AI finds patterns + saves you money" />
              <JourneyStep title="Month 1" desc="Streaks + levels make it automatic" />
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">Ready to make money habits stick?</h2>
                <p className="mt-3 text-white/70">Join the waitlist for US/UK launch updates and early access.</p>
              </div>
              <WaitlistForm source="gamification_page_bottom" buttonLabel="Join the waitlist" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{label}</span>;
}
function CardStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
function Tile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}
function Level({ name, perk }: { name: string; perk: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white">{name}</div>
      <p className="mt-2 text-sm text-white/70">{perk}</p>
    </div>
  );
}
function Reward({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}
function JourneyStep({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="rounded-2xl border border-white/10 bg-[#0A0A23] p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </li>
  );
}