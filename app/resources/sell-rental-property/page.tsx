import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Selling a Rental Property in Michigan | FAHOPROSO",
  description:
    "Learn about selling a rental property in Michigan, understand your options as a landlord, and explore important considerations before selling.",
};

export default function SellRentalPropertyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* HERO */}

        <section className="bg-[#14213D] py-24 text-white">

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Michigan Landlord Guide
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
                Selling a
                <span className="block text-[#C9A227]">
                  Rental Property
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Whether your property is occupied or vacant, selling a rental
                property involves important financial, legal, and practical
                considerations. This guide explains your options as a Michigan
                property owner.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Contact FAHOPROSO
              </Link>

            </div>

            <div>

              <Image
                src="/images/sell-rental-property.jpg"
                alt="Selling a rental property in Michigan"
                width={1200}
                height={800}
                priority
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

          </div>

        </section>

        {/* INTRODUCTION */}

        <section className="bg-white py-24">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Rental Property Guide
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Know Your Options Before Selling
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  Landlords choose to sell rental properties for many reasons,
                  including retirement, portfolio changes, maintenance costs,
                  or changing investment goals.
                </p>

                <p>
                  Before listing the property, consider whether it is occupied,
                  the terms of any lease agreements, and the property's current
                  condition.
                </p>

                <p>
                  Understanding your options early can help you make informed
                  decisions and prepare for a smoother transaction.
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-10 shadow-lg">

              <h3 className="text-2xl font-bold text-[#14213D]">
                Before You Sell
              </h3>

              <ul className="mt-8 space-y-5 text-slate-700">

                <li>✓ Review existing lease agreements.</li>

                <li>✓ Understand tenant occupancy.</li>

                <li>✓ Evaluate the property's condition.</li>

                <li>✓ Estimate repair or update costs.</li>

                <li>✓ Compare your selling options.</li>

              </ul>

            </div>

          </div>

        </section>
                {/* IMPORTANT GUIDANCE */}

        <section className="bg-[#FFF9EC] py-20">

          <div className="mx-auto max-w-5xl rounded-3xl border border-[#C9A227]/30 bg-white p-10 shadow-lg">

            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Important Guidance
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#14213D]">
              Every Rental Property Is Different
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Before selling, review your lease agreements, occupancy status,
              maintenance needs, and long-term investment goals. Planning ahead
              can help make the selling process smoother.
            </p>

          </div>

        </section>

        {/* COMMON SITUATIONS */}

        <section className="bg-slate-100 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Common Situations
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Why Owners Sell Rental Properties
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Retirement",
                "Portfolio Changes",
                "Maintenance Costs",
                "Vacant Property",
                "Tenant Challenges",
                "Investment Strategy",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl bg-white p-8 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {item}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    Every landlord has different goals. Understanding your
                    options can help you decide the best path forward.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SELLING PROCESS */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Selling Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Four Simple Steps
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">

              {[
                "Review Leases",
                "Evaluate Property",
                "Choose Your Strategy",
                "Complete the Sale",
              ].map((step, index) => (

                <div
                  key={step}
                  className="rounded-3xl bg-slate-100 p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-2xl font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#14213D]">
                    {step}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* OPTIONS */}

        <section className="bg-slate-100 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Your Options
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Consider the Best Path Forward
              </h2>

            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Sell Occupied
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Some buyers are interested in purchasing properties with
                  existing tenants.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Sell Vacant
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Vacant properties may provide additional flexibility when
                  preparing the home for sale.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Keep the Investment
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Depending on your goals, keeping the property may still be the
                  right long-term decision.
                </p>
              </div>

            </div>

          </div>

        </section>
                {/* FAQ */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-5xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Rental Property FAQs
              </h2>

            </div>

            <div className="mt-14 space-y-8">

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Can I sell a rental property with tenants?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  In many situations, yes. Existing leases and tenant rights
                  should be reviewed before making any decisions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Should I renovate before selling?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  It depends on your goals, budget, timeline, and the property's
                  condition. Every investment property is different.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  What if the property is vacant?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Vacant properties may offer more flexibility when preparing
                  for sale, scheduling showings, or completing improvements.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Have Questions?
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let's Talk About Your Rental Property
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Whether your rental property is occupied or vacant, FAHOPROSO is
              here to help you better understand your options.
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