import Link from "next/link";
import { ArrowRight } from "lucide-react";

const guides = {
  "sell-house-as-is": "Selling Your House As-Is",
  "sell-inherited-house": "Selling an Inherited House",
  "probate-guide": "Understanding Probate Sales",
  "selling-house-needs-repairs": "Selling a House That Needs Repairs",
  "sell-fire-damaged-house": "Selling a Fire-Damaged House",
  "selling-vacant-house": "Selling a Vacant House",
  "sell-rental-property": "Selling a Rental Property",
  "downsizing-your-home": "Downsizing Your Home",
  "first-time-home-seller-guide": "First-Time Home Seller Guide",
  "property-evaluation": "Property Evaluation Guide",
  "rental-strategies": "Rental Property Strategies",
  "residential-investments": "Residential Investments",
  "commercial-investments": "Commercial Investments",
} as const;

export type GuideSlug = keyof typeof guides;

/** Three related guides, shown near the end of each English guide page. */
export default function RelatedGuides({ links }: { links: GuideSlug[] }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-[#14213D]">Related Guides</h2>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {links.map((slug) => (
            <li key={slug}>
              <Link
                href={`/resources/${slug}`}
                className="group flex h-full items-center justify-between gap-3 rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 font-semibold text-[#14213D] transition hover:border-[#C9A227]"
              >
                {guides[slug]}
                <ArrowRight className="h-5 w-5 shrink-0 text-[#C9A227] transition group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
