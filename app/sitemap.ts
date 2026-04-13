import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://knexo.com';

  const routes = [
    '',
    '/uk',
    '/whatsapp-expense-tracker',
    '/gamified-budgeting',
    '/couples-families',
    '/ai-money-coach',
    '/privacy',
    '/terms',
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}