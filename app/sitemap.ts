import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fahoproso.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
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
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/investment-focus/residential`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
   },
   {
      url: `${baseUrl}/investment-focus/rentals`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
   },
   {
      url: `${baseUrl}/investment-focus/commercial`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
  url: `${baseUrl}/resources`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},
{
  url: `${baseUrl}/resources/homeowner-guides`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: `${baseUrl}/resources/sell-inherited-house`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/resources/sell-house-as-is`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/resources/probate-guide`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/resources/sell-rental-property`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/service-areas`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/sell-my-house-michigan`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url: `${baseUrl}/sell-my-house-grand-rapids`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url: `${baseUrl}/sell-my-house-kent-county`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url: `${baseUrl}/sell-my-house-ottawa-county`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url: `${baseUrl}/sell-my-house-troy`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
  ];
}