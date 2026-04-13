import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/analytics/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com"),
  title: {
    default: "kNexo — AI Budgeting on WhatsApp | Join the Waitlist",
    template: "%s | kNexo",
  },
  description:
    "Track spending by texting on WhatsApp. Get proactive AI insights, missions, XP, and shared budgets for couples & families. Join the kNexo waitlist.",
  applicationName: "kNexo",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "kNexo",
    title: "kNexo — AI Budgeting on WhatsApp",
    description:
      "WhatsApp-first AI budgeting + real gamification + shared family finances. Join the waitlist.",
    images: [{ url: "/og/knexo-og.png", width: 1200, height: 630, alt: "kNexo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "kNexo — AI Budgeting on WhatsApp",
    description:
      "Text your spending on WhatsApp. Get AI insights + missions + XP. Join the waitlist.",
    images: ["/og/knexo-og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh bg-[#07071a] text-white antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}