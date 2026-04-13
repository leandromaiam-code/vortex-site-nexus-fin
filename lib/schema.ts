const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexus Fin (kNexo)',
    url: siteUrl,
    logo: `${siteUrl}/og/knexo-og.png`,
    sameAs: ['https://x.com', 'https://instagram.com'],
  };
}

export function productSchema(pageUrl: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: { '@type': 'Brand', name: 'kNexo' },
    url: pageUrl,
    category: 'Personal finance software',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      url: pageUrl,
    },
  };
}

export function faqSchema(pageUrl: string, faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
    url: pageUrl,
  };
}