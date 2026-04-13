import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { buildMetadata, OrganizationJsonLd, ProductJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "kNexo — AI Budgeting on WhatsApp (UK) | Join the Waitlist",
  description:
    "A budgeting app for the UK that works on WhatsApp. Track spending in seconds, get AI insights, and stay consistent with missions, XP, and rewards. Join the UK waitlist.",
  path: "/uk",
});

export default function UKLanding() {
  return (
    <div className="min-h-dvh">
      <Navbar ctaHref="#waitlist" ctaLabel="Join the waitlist" />
      <main className="mx-auto max-w-6xl px-4 md:px-6">
        <OrganizationJsonLd />
        <ProductJsonLd
          name="kNexo — AI Budgeting on WhatsApp (UK)"
          description="WhatsApp-first AI budgeting for the UK with gamification and shared finances."
        />

        <section className="pt-14 pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#00D2D3]" />
                UK launch waitlist — privacy-minded
              </div>
              <h1 className="h-hero mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Budgeting on{" "}
                <span className="bg-gradient-to-r from-[#6C5CE7] to-[#00D2D3] bg-clip-text text-transparent">
                  WhatsApp
                </span>
                , powered by AI.
              </h1>
              <p className="mt-4 text-base text-white/75 md:text-lg">
                Track spending in seconds (in pounds), get proactive insights, and build habits with missions, XP, and rewards.
              </p>

              <div className="mt-7" id="waitlist">
                <WaitlistForm source="landing_uk" buttonLabel="Join the waitlist" />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                Security & privacy: we’re building with a security-first mindset. Full details will be published before launch.
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
              <div className="text-sm font-semibold">Example</div>
              <div className="mt-4 rounded-2xl bg-[#0A0A23] ring-1 ring-white/10 p-4 text-sm text-white/80">
                <p className="text-white/60">You:</p>
                <p className="mt-1">“Groceries £38.40”</p>
                <p className="mt-4 text-white/60">kNexo:</p>
                <p className="mt-1">“Logged. You’re on track for your weekly food budget. Want a £60 cap?”</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}