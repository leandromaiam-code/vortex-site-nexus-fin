import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://knexo.com";
  const now = new Date();

  const routes = ["/", "/uk", "/couples-family-budget", "/gamified-budgeting", "/whatsapp-expense-tracker", "/ai-money-coach"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}