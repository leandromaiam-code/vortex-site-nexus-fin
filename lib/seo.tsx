import type { Metadata } from "next";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com";
  const url = `${base}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "kNexo",
      type: "website",
      images: [{ url: "/og/knexo-og.png", width: 1200, height: 630, alt: "kNexo" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/knexo-og.png"],
    },
  };
}

export function OrganizationJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "kNexo",
    url: siteUrl,
    logo: `${siteUrl}/og/knexo-og.png`,
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function ProductJsonLd({ name, description }: { name: string; description: string }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "kNexo" },
    url: siteUrl,
    category: "Personal Finance Software",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}