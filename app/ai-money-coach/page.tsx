import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { buildMetadata, OrganizationJsonLd, ProductJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "kNexo — AI Money Coach on WhatsApp (US/UK)",
  description:
    "An AI money coach on WhatsApp: proactive alerts, weekly plans, and mission-based habits. Track spending by text and get smarter decisions automatically.",
  path: "/ai-money-coach",
});

export default function MoneyCoachPage() {
  return (
    <div className="min-h-dvh">
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main className="mx-auto max-w-6xl px-4 md:px-6">
        <OrganizationJsonLd />
        <ProductJsonLd
          name="kNexo — AI Money Coach"
          description="Proactive AI money coaching on WhatsApp with missions, XP, and shared finances."
        />

        <section className="pt-14 pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="h-hero text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Your{" "}
                <span className="bg-gradient-to-r from-[#6C5CE7] to-[#00D2D3] bg-clip-text text-transparent">
                  AI money coach
                </span>{" "}
                — right on WhatsApp.
              </h1>
              <p className="mt-4 text-base text-white/75 md:text-lg">
                kNexo doesn’t just answer questions — it proactively flags risks, suggests missions, and keeps you on track week after week.
              </p>
              <div className="mt-7" id="waitlist">
                <WaitlistForm source="ai_money_coach_page" buttonLabel="Join the waitlist" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
              <div className="text-sm font-semibold">Proactive alert (mock)</div>
              <div className="mt-4 rounded-2xl bg-[#0A0A23] ring-1 ring-white/10 p-4 text-sm text-white/80">
                <p className="text-white/60">kNexo:</p>
                <p className="mt-1">
                  “Heads up: subscriptions are up 18% this month. Want a 10-minute audit mission to cut £/$15–£/$40?”
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}