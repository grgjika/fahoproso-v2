import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Homeowner Guides | FAHOPROSO",
  description:
    "Educational homeowner guides from FAHOPROSO covering selling, probate, inherited homes, rental properties, and more.",
};

const guides = [
  {
    title: "Selling an Inherited House",
    href: "/resources/sell-inherited-house",
  },
  {
    title: "Selling Your House As-Is",
    href: "/resources/sell-house-as-is",
  },
  {
    title: "Understanding Probate",
    href: "/resources/probate-guide",
  },
  {
    title: "Selling a Rental Property",
    href: "/resources/sell-rental-property",
  },
  {
    title: "Selling a Vacant House",
    href: "/resources/selling-vacant-house/",
  },
  {
    title: "Downsizing Your Home",
    href: "/resources/downsizing-your-home/",
  },
  {
    title: "Selling a House That Needs Repairs",
    href: "/resources/selling-house-needs-repairs/",
  },
  {
    title: "First-Time Home Seller Guide",
    href: "/resources/first-time-home-seller-guide/",
  },
  {
  title: "View All Michigan Guides",
  href: "/resources/michigan-guides",
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
                <span className="text-xl font-semibold text-[#14213D]">
                  {guide.title}
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
      Can't Find the Guide You Need?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
      We're continually adding new homeowner resources. If you have questions
      about your property, we're here to help.
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