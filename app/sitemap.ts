import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lobglaw.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/constitutional-law`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/services/civil-rights-litigation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/services/anti-slapp-litigation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/services/appeals`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/victories`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
