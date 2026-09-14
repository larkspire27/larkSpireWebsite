import { MetadataRoute } from "next";
import { servicesData } from "@/lib/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://larkspire.in";

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic service routes
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  return [...staticRoutes, ...serviceRoutes];
}
