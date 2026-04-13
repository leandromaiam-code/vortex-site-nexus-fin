import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { buildMetadata, FaqJsonLd, OrganizationJsonLd, ProductJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "kNexo WhatsApp Expense Tracker — Text Your Spending, Get Insights (US/UK)",
  description:
    "Track expenses on WhatsApp: text purchases, auto-categorize, and get AI insights and weekly summaries. No spreadsheets. Join the kNexo waitlist (US/UK).",
  path: "/whatsapp-expense-tracker",
});

export default function WhatsAppPage() {
  return (
    <div className="min-h-dvh">
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main className="mx-auto max-w-6xl px-4 md:px-6">
        <OrganizationJsonLd />
        <ProductJsonLd
          name="kNexo WhatsApp Expense Tracker"
          description="Text your spending on WhatsApp and get AI insights, summaries, and missions."
        />
        <FaqJsonLd
          faqs={[
            {
              question: "How do I track expenses on WhatsApp with kNexo?",
              answer:
                "You send a message like “Groceries $42” and kNexo logs it, categorizes it, and updates your budget automatically.",
            },
            {
              question: "Do I need to open an app?",
              answer:
                "No. kNexo is WhatsApp-first, designed to reduce friction so you can stay consistent.",
            },
          ]}
        />

        {/* Hero */}
        <section className="pt-14 pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#00D2D3]" />
                WhatsApp-first experience
              </div>

              <h1 className="h-hero mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Text your spending.{" "}
                <span className="bg-gradient-to-r from-[#6C5CE7] to-[#00D2D3] bg-clip-text text-transparent">
                  Get clarity
                </span>{" "}
                automatically.
              </h1>
              <p className="mt-4 text-base text-white/75 md:text-lg">
                kNexo turns WhatsApp messages into a clean expense timeline, categories, caps, and proactive insights — without spreadsheets.
              </p>

              <div className="mt-7" id="waitlist">
                <WaitlistForm source="whatsapp_page" buttonLabel="Join the waitlist" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/60">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Lower friction than apps</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Faster daily capture</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Proactive reminders</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Weekly summaries</div>
              </div>
            </div>

            {/* Demo visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">WhatsApp conversation</div>
                  <div className="text-xs text-white/60">Mockup</div>
                </div>
                <div className="mt-4 rounded-2xl bg-[#0A0A23] ring-1 ring-white/10 p-4">
                  <div className="space-y-3 text-sm">
                    <Bubble from="user" text="Uber $18.20" />
                    <Bubble from="ai" text="Logged under Transport. You’re at 72% of your weekly transport cap." />
                    <Bubble from="user" text="Any tips to cut it?" />
                    <Bubble from="ai" text="Try a 2-day transit challenge. Complete it → +80 XP and save ~$25/week." />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-r from-[#00D2D3]/20 via-transparent to-[#6C5CE7]/20 blur-2xl" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12">
          <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">Why WhatsApp works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Benefit title="Capture in seconds" desc="Log spending the moment it happens — before you forget." />
            <Benefit title="No new habit required" desc="You already use WhatsApp daily. kNexo meets you there." />
            <Benefit title="Conversational clarity" desc="Ask “How am I doing this week?” and get a direct answer." />
            <Benefit title="Proactive alerts" desc="Get nudges when caps are at risk — not after the damage." />
            <Benefit title="Works for households" desc="Shared budgets and goals without spreadsheet battles." />
            <Benefit title="Gamified consistency" desc="Missions and streaks turn tracking into daily wins." />
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-12">
          <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">kNexo vs traditional apps</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead className="border-b border-white/10 text-white/80">
                <tr>
                  <th className="px-5 py-4">Feature</th>
                  <th className="px-5 py-4">kNexo</th>
                  <th className="px-5 py-4">Traditional budgeting apps</th>
                </tr>
              </thead>
              <tbody className="text-white/75">
                <Row feature="Capture spending" a="WhatsApp message" b="Open app + tap flows" />
                <Row feature="Insights" a="Proactive AI nudges" b="Mostly dashboards" />
                <Row feature="Consistency" a="Missions, XP, streaks" b="Basic reminders/badges" />
                <Row feature="Households" a="Built-in couples/family mode" b="Often an add-on" />
                <Row feature="Time to first win" a="~60 seconds" b="Setup-heavy" />
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="h-hero text-2xl font-extrabold tracking-tight md:text-3xl">Want the WhatsApp-first beta?</h2>
                <p className="mt-3 text-white/70">
                  Join the waitlist for US/UK launch updates and early access.
                </p>
              </div>
              <WaitlistForm source="whatsapp_page_bottom" buttonLabel="Join the waitlist" />
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
          isUser ? "bg-[#6C5CE7]/20 ring-[#6C5CE7]/35" : "bg-white/5 ring-white/10 text-white/90"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function Row({ feature, a, b }: { feature: string; a: string; b: string }) {
  return (
    <tr className="border-b border-white/10 last:border-b-0">
      <td className="px-5 py-4 font-semibold text-white/85">{feature}</td>
      <td className="px-5 py-4">{a}</td>
      <td className="px-5 py-4 text-white/65">{b}</td>
    </tr>
  );
}