export type LocationSlug =
  | "sell-my-house-michigan"
  | "sell-my-house-grand-rapids"
  | "sell-my-house-kent-county"
  | "sell-my-house-ottawa-county"
  | "sell-my-house-troy";

export type LocationData = {
  slug: LocationSlug;
  place: string; // "Kent County"
  heroImage: string;
  heroAlt: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  leadA: string;
  leadB: string;
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    asideTitle: string;
    asideItems: string[];
  };
  situations: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  know: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  communities: { title: string; text: string; list: string[] };
  faqs: { question: string; answer: string }[];
  nearby: LocationSlug[];
};
