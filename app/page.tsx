import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { buildMetadata, FaqJsonLd, OrganizationJsonLd, ProductJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "kNexo — AI Budgeting on WhatsApp (US) | Join the Waitlist",
  description:
    "The AI budgeting app that lives on WhatsApp. Text your spending, get proactive insights, and stay consistent with missions, XP, and rewards. Join the US waitlist.",
  path: "/",
});

export default function Page() {
  return (
    <div className="min-h-dvh">
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main>
        {/* JSON-LD */}
        <OrganizationJsonLd />
        <ProductJsonLd
          name="kNexo — AI Budgeting on WhatsApp"
          description="WhatsApp-first AI budgeting with gamification and shared finances."
        />
        <FaqJsonLd
          faqs={[
            {
              question: "Is kNexo a WhatsApp budgeting app?",
              answer:
                "kNexo is a WhatsApp-first budgeting experience: you text expenses and get categorized summaries, insights, and reminders via conversational AI.",
            },
            {
              question: "Does kNexo support gamified budgeting?",
              answer:
                "Yes. kNexo includes missions, XP, streaks, and rewards designed to build consistent money habits.",
            },
            {
              question: "Can I use kNexo with my partner or family?",
              answer:
                "Yes. kNexo is built for shared household visibility and goals (couples & families mode).",
            },
          ]}
        />

        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6C5CE7]/25 blur-[90px]" />
          <div className="absolute right-[-10%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#00D2D3]/18 blur-[110px]" />
          <div className="absolute left-[-10%] bottom-[-10%] h-[520px] w-[520px] rounded-full bg-[#FECA57]/10 blur-[110px]" />
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:px-6 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#00D2D3] shadow-[0_0_20px_rgba(0,210,211,0.6)]" />
                US launch waitlist — early access perks
              </div>

              <h1 className="h-hero mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                The AI budgeting app that lives on{" "}
                <span className="bg-gradient-to-r from-[#6C5CE7] to-[#00D2D3] bg-clip-text text-transparent">
                  WhatsApp
                </span>
                .
              </h1>
              <p className="mt-4 text-base text-white/75 md:text-lg">
                Text your spending. Get proactive insights. Stay consistent with missions, XP, and rewards — solo or with your partner/family.
              </p>

              <div className="mt-7" id="waitlist">
                <WaitlistForm source="landing_us" buttonLabel="Join the waitlist" />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/60">
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">No spreadsheets</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">WhatsApp-first</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Real gamification</div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Shared budgets</div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-60px_rgba(0,210,211,0.45)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">WhatsApp demo</div>
                  <div className="text-xs text-white/60">Placeholder UI</div>
                </div>

                {/* Hero image/animation placeholder */}
                <div className="mt-4 rounded-2xl bg-[#0A0A23] ring-1 ring-white/10 p-4">
                  <div className="space-y-3 text-sm">
                    <Bubble from="user" text="Coffee $5.75" />
                    <Bubble from="ai" text="Logged. ☕ Food & Drink. Want a weekly cap for coffee?" />
                    <Bubble from="user" text="Yes, $20/week" />
                    <Bubble from="ai" text="Done. Mission unlocked: 3 no-spend days this week → +120 XP" />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <MiniStat label="Auto-categorize" value="Instant" />
                  <MiniStat label="Insights" value="Proactive" />
                  <MiniStat label="Consistency" value="XP + streaks" />
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-r from-[#6C5CE7]/25 via-transparent to-[#00D2D3]/25 blur-2xl" />
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="max-w-2xl">
            <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">
              Built for real life (not spreadsheets).
            </h2>
            <p className="mt-3 text-white/70">
              kNexo combines WhatsApp-first tracking, proactive AI, and a real habit loop — so budgeting finally sticks.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon="💬" title="WhatsApp-first tracking" desc="Log expenses where you already chat — no app-switching friction." />
            <FeatureCard icon="🧠" title="Proactive AI insights" desc="Get alerts, patterns, and opportunities pushed automatically." />
            <FeatureCard icon="🎮" title="Real gamification loop" desc="Missions, XP, streaks, and achievements designed to build habits." />
            <FeatureCard icon="👥" title="Couples & family mode" desc="Shared visibility, shared goals, shared wins — without chaos." />
            <FeatureCard icon="🔒" title="Privacy-minded design" desc="Clear data handling and security-first architecture (details at launch)." />
            <FeatureCard icon="⚡" title="Fast daily wins" desc="Small actions → immediate progress. Make money feel manageable again." />
          </div>
        </section>

        {/* Social proof */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">Momentum you can feel.</h2>
              <p className="mt-3 text-white/70">
                Early community + placeholder metrics. Replace with real numbers post-launch.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Metric value="2.4k+" label="Waitlist interest" />
              <Metric value="4.8/5" label="Concept rating" />
              <Metric value="60s" label="To first win" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Testimonial
              quote="“If I can text my spending and get a weekly plan automatically, I’m in.”"
              name="Waitlist user"
              role="US"
            />
            <Testimonial quote="“The missions + XP idea is the first budgeting thing that feels motivating.”" name="Beta interest" role="Personal finance" />
            <Testimonial quote="“Shared household money without spreadsheets would be a game-changer.”" name="Couples lead" role="NYC" />
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">How it works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Step n="1" title="Text an expense" desc="Send “Lunch $12” on WhatsApp." />
            <Step n="2" title="AI organizes it" desc="Auto-categorizes and updates your budget." />
            <Step n="3" title="Get proactive nudges" desc="Alerts, caps, and weekly summaries — automatically." />
            <Step n="4" title="Earn XP & rewards" desc="Missions and streaks keep you consistent." />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">Be first in line for US launch.</h2>
                <p className="mt-3 text-white/70">
                  Early access + launch perks. One email when it’s time.
                </p>
              </div>
              <WaitlistForm source="landing_us_bottom" buttonLabel="Join the waitlist" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Bubble({ from, text }: { from: "user" | "ai"; text: string }) {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ring-1 ${
          isUser
            ? "bg-[#6C5CE7]/20 ring-[#6C5CE7]/35 text-white"
            : "bg-white/5 ring-white/10 text-white/90"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/7">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <span aria-hidden>{icon}</span>
        </div>
        <div className="text-base font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-[#6C5CE7]/60 via-white/10 to-[#00D2D3]/60 opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center">
      <div className="text-xl font-extrabold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}

function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <figure className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <blockquote className="text-sm text-white/80"> {quote} </blockquote>
      <figcaption className="mt-4 flex items-center justify-between text-xs text-white/60">
        <span className="font-semibold text-white/75">{name}</span>
        <span>{role}</span>
      </figcaption>
    </figure>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-[#6C5CE7]/40 to-[#00D2D3]/20 ring-1 ring-white/10 text-sm font-extrabold">
          {n}
        </div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  );
}