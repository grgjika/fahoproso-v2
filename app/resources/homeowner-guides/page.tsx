import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Homeowner Guides",
  description:
    "Educational homeowner guides from FAHOPROSO covering selling, probate, inherited homes, rental properties, and more.",
    alternates: {
     canonical: "https://www.fahoproso.com/resources/homeowner-guides/",
     languages: {
    "en-US": "https://www.fahoproso.com/resources/homeowner-guides/",
    "x-default": "https://www.fahoproso.com/resources/homeowner-guides/",
    "es-US": "https://www.fahoproso.com/es/resources/homeowner-guides/",
    "el-GR": "https://www.fahoproso.com/el/resources/homeowner-guides/",
    sq: "https://www.fahoproso.com/sq/resources/homeowner-guides/",
  },
    },
  };

const guides = [
  {
    title: "Selling an Inherited House",
    href: "/resources/sell-inherited-house",
    description: "Next steps when you inherit a house, from ownership to the sale.",
  },
  {
    title: "Selling Your House As-Is",
    href: "/resources/sell-house-as-is",
    description: "How selling without repairs works, and when it makes sense.",
  },
  {
    title: "Understanding Probate",
    href: "/resources/probate-guide",
    description: "What probate means for selling a house in Michigan.",
  },
  {
    title: "Selling a Rental Property",
    href: "/resources/sell-rental-property",
    description: "Options for selling a rental, with or without tenants.",
  },
  {
    title: "Selling a Vacant House",
    href: "/resources/selling-vacant-house",
    description: "Costs and options for an empty house.",
  },
  {
    title: "Downsizing Your Home",
    href: "/resources/downsizing-your-home",
    description: "Planning a move to a smaller home.",
  },
  {
    title: "Selling a House That Needs Repairs",
    href: "/resources/selling-house-needs-repairs",
    description: "Compare repairing, listing and selling as-is.",
  },
  {
    title: "Selling a Fire-Damaged House",
    href: "/resources/sell-fire-damaged-house",
    description: "First steps and options after a fire.",
  },
  {
    title: "First-Time Home Seller Guide",
    href: "/resources/first-time-home-seller-guide",
    description: "The selling process explained, step by step.",
  },
  {
  title: "View All Michigan Guides",
  href: "/resources/michigan-guides",
    description: "Guides for the Michigan communities we serve.",
},
];

export default function HomeownerGuidesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        <section className="bg-[#14213D] py-24 text-white">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              FAHOPROSO Resources
            </p>

            <h1 className="mt-5 text-5xl font-bold">
              Homeowner Guides
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Explore practical guides created to help Michigan homeowners
              better understand their options.
            </p>

          </div>

        </section>

        <section className="bg-slate-100 py-24">

          <div className="mx-auto max-w-5xl space-y-6 px-6">

            {guides.map((guide) => (

              <Link
                key={guide.title}
                href={guide.href}
                className="flex items-center justify-between rounded-2xl bg-white p-6 shadow transition hover:border hover:border-[#C9A227]"
              >
                <span>
                  <span className="block text-xl font-semibold text-[#14213D]">
                    {guide.title}
                  </span>
                  {"description" in guide && (
                    <span className="mt-1 block text-slate-600">
                      {guide.description}
                    </span>
                  )}
                </span>

                <span className="font-semibold text-[#14213D]">
                  Learn More →
                </span>

              </Link>

            ))}

          </div>

        </section>
<section className="bg-[#14213D] py-20 text-white">

  <div className="mx-auto max-w-4xl px-6 text-center">

    <h2 className="text-4xl font-bold">
      Can&apos;t Find the Guide You Need?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
      We&apos;re continually adding new homeowner resources. If you have questions
      about your property, we&apos;re here to help.
    </p>

    <Link
      href="/contact"
      className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
    >
      Contact FAHOPROSO
    </Link>

  </div>

</section>
      </main>

      <Footer />
      <ScrollToTop />

    </>
  );
}