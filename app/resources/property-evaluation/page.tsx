import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Property Evaluation Guide | FAHOPROSO",
  description:
    "Learn the key factors that influence property value, including location, condition, comparable sales, market trends, and investment potential.",
};

export default function PropertyEvaluationPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* HERO */}

        <section className="bg-[#14213D] py-24 text-white">

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Investment Insights
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
                Property
                <span className="block text-[#C9A227]">
                  Evaluation Guide
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Understanding how a property is evaluated helps homeowners and
                investors make informed decisions. This guide reviews the most
                common factors that influence value and investment potential.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss a Property
              </Link>

            </div>

            <div>

              <Image
                src="/images/property-evaluation.jpg"
                alt="Property Evaluation Guide"
                width={1200}
                height={800}
                priority
                className="rounded-3xl object-cover shadow-2xl"
              />

            </div>

          </div>

        </section>

        {/* INTRO */}

        <section className="bg-white py-24">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Property Analysis
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Every Property Is Different
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  Property value is influenced by many factors including
                  location, condition, improvements, market demand, and recent
                  comparable sales.
                </p>

                <p>
                  Looking at only one factor rarely provides an accurate
                  picture. Evaluating the complete property helps create a more
                  informed understanding.
                </p>

                <p>
                  Whether buying, selling, or investing, understanding these
                  factors can support better decisions.
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-10 shadow-lg">

              <h3 className="text-2xl font-bold text-[#14213D]">
                Evaluation Checklist
              </h3>

              <ul className="mt-8 space-y-5 text-slate-700">

                <li>✓ Location</li>
                <li>✓ Property condition</li>
                <li>✓ Comparable sales</li>
                <li>✓ Market trends</li>
                <li>✓ Investment potential</li>

              </ul>

            </div>

          </div>

        </section>
                {/* VALUE FACTORS */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Value Factors
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                What Influences Property Value?
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Location",
                  text: "Neighborhood demand, nearby services, schools, transportation, and future development can influence value.",
                },
                {
                  title: "Property Condition",
                  text: "Roof, foundation, mechanical systems, interior condition, and deferred maintenance all matter.",
                },
                {
                  title: "Comparable Sales",
                  text: "Recent sales of similar nearby properties can provide useful market context.",
                },
                {
                  title: "Size and Layout",
                  text: "Square footage, bedrooms, bathrooms, lot size, and functional layout can affect desirability.",
                },
                {
                  title: "Market Conditions",
                  text: "Interest rates, inventory, buyer demand, and local economic activity can influence pricing.",
                },
                {
                  title: "Income Potential",
                  text: "For rental and commercial properties, expected income and operating expenses are important.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-8 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EVALUATION PROCESS */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Evaluation Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                A Practical Four-Step Review
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Review Location",
                "Inspect Condition",
                "Analyze Comparable Sales",
                "Evaluate Investment Potential",
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

        {/* INVESTMENT VIEW */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Investment View
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Look Beyond the Current Condition
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Investors may also consider repair costs, potential income,
                renovation opportunities, financing, holding costs, and the
                expected exit strategy.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-8">
                <h3 className="text-2xl font-bold">
                  Current Value
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  Review the property&apos;s present condition and current market
                  position.
                </p>
              </div>

              <div className="rounded-3xl border border-[#C9A227]/50 bg-[#C9A227]/10 p-8">
                <h3 className="text-2xl font-bold">
                  Improvement Potential
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  Estimate the cost and potential benefit of repairs, upgrades,
                  or operational improvements.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-8">
                <h3 className="text-2xl font-bold">
                  Exit Strategy
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  Consider whether the plan is to hold, rent, renovate, resell,
                  or reposition the property.
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
                Property Evaluation FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  What is the most important factor in property value?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  No single factor determines value. Location, condition,
                  comparable sales, size, market demand, and property type all
                  work together.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  How are comparable sales used?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Comparable sales provide market context by reviewing recent
                  nearby sales of properties with similar features, size, and
                  condition.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Does a property need repairs before it can be evaluated?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  No. A property can be reviewed in its current condition.
                  Repair needs are simply included as part of the overall
                  analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Property Review
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let&apos;s Discuss Your Property
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              FAHOPROSO reviews selected residential, rental, and commercial
              opportunities throughout Michigan. Contact us to discuss the
              property and your goals.
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