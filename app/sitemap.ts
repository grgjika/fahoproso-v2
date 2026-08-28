import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fahoproso.com";

  const englishRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/faq",
    "/contact",

    // Investment Focus
    "/investment-focus/residential",
    "/investment-focus/rentals",
    "/investment-focus/commercial",

    // Resources
    "/resources",
    "/resources/homeowner-guides",
    "/resources/property-evaluation",
    "/resources/residential-investments",
    "/resources/commercial-investments",
    "/resources/rental-strategies",
    "/resources/michigan-guides",

    // Homeowner Guides
    "/resources/sell-house-as-is",
    "/resources/sell-inherited-house",
    "/resources/probate-guide",
    "/resources/sell-rental-property",
    "/resources/selling-vacant-house",
    "/resources/downsizing-your-home",
    "/resources/selling-house-needs-repairs",
    "/resources/first-time-home-seller-guide",

    // Service Areas
    "/service-areas",
    "/sell-my-house-michigan",
    "/sell-my-house-grand-rapids",
    "/sell-my-house-kent-county",
    "/sell-my-house-ottawa-county",
    "/sell-my-house-troy",
  ];

  const translatedRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/faq",
    "/contact",
    "/resources",
    "/resources/homeowner-guides",
    "/resources/residential-investments",
    "/resources/michigan-guides",
    "/resources/first-time-home-seller-guide",
    "/resources/downsizing-your-home",
    "/resources/probate-guide",
  ];

  const languages = ["es", "el", "sq"];

  const englishPages: MetadataRoute.Sitemap = englishRoutes.map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority:
        route === ""
          ? 1
          : route.startsWith("/sell-my-house")
            ? 0.9
            : route === "/services" || route === "/resources"
              ? 0.9
              : 0.8,
    })
  );

  const translatedPages: MetadataRoute.Sitemap = languages.flatMap(
    (language) =>
      translatedRoutes.map((route) => ({
        url: `${baseUrl}/${language}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority:
          route === ""
            ? 0.9
            : route === "/services" || route === "/resources"
              ? 0.8
              : 0.7,
      }))
  );

  return [...englishPages, ...translatedPages];
}