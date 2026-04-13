import type { Metadata } from 'next';
import Script from 'next/script';
import { Providers } from '@/app/providers';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';
const ga4 = process.env.NEXT_PUBLIC_GA4_ID;
const gtm = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'kNexo — AI budgeting on WhatsApp',
  description:
    'Track spending by texting on WhatsApp. Get proactive AI insights, missions, XP, and shared budgets for couples & families.',
  openGraph: {
    title: 'kNexo — AI budgeting on WhatsApp',
    description:
      'Track spending by texting on WhatsApp. Get proactive AI insights, missions, XP, and shared budgets for couples & families.',
    url: siteUrl,
    siteName: 'kNexo',
    images: [{ url: '/og/knexo-og.png', width: 1200, height: 630, alt: 'kNexo' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kNexo — AI budgeting on WhatsApp',
    description:
      'Track spending by texting on WhatsApp. Get proactive AI insights, missions, XP, and shared budgets for couples & families.',
    images: ['/og/knexo-og.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0A0A23] text-white antialiased">
        {/* Google Tag Manager */}
        {gtm ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtm}');`}
          </Script>
        ) : null}

        {/* GA4 */}
        {ga4 ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${ga4}', { anonymize_ip: true });`}
            </Script>
          </>
        ) : null}

        {/* GTM noscript */}
        {gtm ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}