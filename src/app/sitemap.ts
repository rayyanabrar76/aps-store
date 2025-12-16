import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");

  const routes = [
    "",
    "/inventory",
    "/company",
    "/cart",
  ];

  return routes.map((route) => ({
    url: `${base}${route || "/"}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}


