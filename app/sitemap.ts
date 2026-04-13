import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com";
  const now = new Date();

  const routes = [
    "/",
    "/uk",
    "/whatsapp-expense-tracker",
    "/gamified-budgeting",
    "/couples-and-families",
    "/ai-money-coach",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}