import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@/components/analytics/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A23",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com"),
  title: {
    default: "kNexo — AI Budgeting on WhatsApp | Join the Waitlist",
    template: "%s | kNexo",
  },
  description:
    "Track spending by messaging on WhatsApp. Get proactive AI insights, missions, XP, and rewards — solo or with your partner/family. Join the kNexo waitlist.",
  applicationName: "kNexo",
  openGraph: {
    type: "website",
    siteName: "kNexo",
    title: "kNexo — AI Budgeting on WhatsApp | Join the Waitlist",
    description:
      "WhatsApp-first AI budgeting + real gamification + shared family finances. Join the waitlist.",
    url: "/",
    images: [{ url: "/og/knexo-og.png", width: 1200, height: 630, alt: "kNexo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "kNexo — AI Budgeting on WhatsApp",
    description:
      "Text your spending on WhatsApp. Get AI insights, missions, XP, and rewards. Join the waitlist.",
    images: ["/og/knexo-og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="min-h-dvh bg-[#0A0A23] text-white antialiased selection:bg-[#6C5CE7]/40 selection:text-white">
        {/* Google Tag Manager (head) */}
        {gtmId ? (
          <Script id="gtm-head" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        ) : null}

        {/* Google Analytics 4 */}
        {gaId ? (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}

        {/* Google Tag Manager (noscript) */}
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        <Analytics />
        {children}
      </body>
    </html>
  );
}