/**
 * Homes for sale. To add a house, copy one entry, put its photos in
 * /public/images/homes/<slug>/ and list them in `photos` (first = cover).
 * Houses that are only under contract are not listed here.
 *
 * `sample: true` shows a "Sample" ribbon and keeps the page hidden from
 * Google. Remove it from every entry (and set SHOW_SAMPLES to false) when real
 * houses are added.
 */
export type Listing = {
  slug: string;
  title: string;
  city: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag: string; // e.g. "New listing", "Great starter home"
  description: string;
  photos: { src: string; alt: string }[];
  sample?: boolean;
};

export const SHOW_SAMPLES = true;

export const listings: Listing[] = [
  {
    slug: "sample-grand-rapids-ranch",
    title: "Updated 3-Bedroom Ranch",
    city: "Grand Rapids, MI",
    price: "$000,000",
    beds: 3,
    baths: 2,
    sqft: "1,450",
    tag: "New listing",
    description:
      "Sample text. Replace this with a short, honest description: what was updated, the yard, the neighborhood, and who it is a great fit for.",
    photos: [
      { src: "/images/property1.jpg", alt: "Front of the house" },
      { src: "/images/property2.jpg", alt: "Living area" },
      { src: "/images/property3.jpg", alt: "Kitchen" },
      { src: "/images/service-renovation.jpg", alt: "Renovation work" },
    ],
    sample: true,
  },
  {
    slug: "sample-kentwood-colonial",
    title: "Fresh Remodel Near Shopping",
    city: "Kentwood, MI",
    price: "$000,000",
    beds: 4,
    baths: 2,
    sqft: "1,900",
    tag: "Just remodeled",
    description:
      "Sample text. Replace with the real details of the house and the work we completed.",
    photos: [
      { src: "/images/service-renovation.jpg", alt: "Renovation work" },
      { src: "/images/property3.jpg", alt: "Kitchen" },
      { src: "/images/property1.jpg", alt: "Front of the house" },
    ],
    sample: true,
  },
];
