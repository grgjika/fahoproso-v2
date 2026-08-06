import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Selling a House That Needs Repairs in Michigan | FAHOPROSO",
  description:
    "Learn your options for selling a house that needs repairs in Michigan, including repairing, listing, or selling the property as-is.",
};

export default function SellingHouseNeedsRepairsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* HERO */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Michigan Homeowner Guide
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
                Selling a House
                <span className="block text-[#C9A227]">
                  That Needs Repairs
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                A property that needs repairs can still be sold. This guide
                explains how to evaluate repair costs, compare your selling
                options, and choose a path that fits your goals and timeline.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss Your Property
              </Link>
            </div>

            <div>
              <Image
                src="/images/sell-without-repairs.jpg"
                alt="Selling a house that needs repairs in Michigan"
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
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Understanding Your Situation
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Repairs Do Not Always Have to Come First
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Many homeowners believe they must repair every problem before
                  selling. That may be helpful in some situations, but it is not
                  the only available option.
                </p>

                <p>
                  Major repairs can require contractors, permits, money, and
                  several weeks or months of work. Before starting, compare the
                  potential benefit with the cost and time involved.
                </p>

                <p>
                  FAHOPROSO reviews properties in their current condition and
                  helps Michigan homeowners understand practical selling
                  options without pressure.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#14213D]">
                Important First Steps
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>Identify visible and known repair issues.</li>
                <li>Estimate the possible cost of major work.</li>
                <li>Review your available budget and timeline.</li>
                <li>Compare repairing, listing, and selling as-is.</li>
                <li>Consider your moving and financial goals.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* IMPORTANT GUIDANCE */}

        <section className="bg-white pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-[#C9A227]/40 bg-[#FFF9EC] p-8 shadow-sm">
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Important Guidance
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#14213D]">
                Compare Repair Costs With the Expected Benefit
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                A renovation does not automatically guarantee a higher profit.
                Contractor costs, delays, permits, holding expenses, and market
                changes can affect the final result.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Consider getting qualified inspections or estimates when needed
                before making major financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* COMMON REPAIR ISSUES */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Common Repair Issues
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Problems Homeowners Often Face
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 text-lg leading-8 text-slate-600">
                Some repairs are cosmetic, while others may affect safety,
                financing, insurance, or the property&apos;s overall value.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Roof Damage",
                  text: "Leaks, missing shingles, and an aging roof can lead to water damage and larger repair costs.",
                },
                {
                  title: "Foundation Concerns",
                  text: "Cracks, settling, moisture, and structural movement may require professional evaluation.",
                },
                {
                  title: "Water or Mold Damage",
                  text: "Plumbing leaks, basement moisture, and mold concerns can affect the condition of the home.",
                },
                {
                  title: "Electrical or Plumbing",
                  text: "Older systems, damaged wiring, leaks, and outdated materials may need repair or replacement.",
                },
                {
                  title: "Heating and Cooling",
                  text: "An aging furnace, air conditioner, or water heater can become a major expense.",
                },
                {
                  title: "Outdated Interior",
                  text: "Old kitchens, bathrooms, flooring, paint, and fixtures may reduce buyer interest but are often cosmetic.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Quick Facts
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Your Decision at a Glance
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "1",
                  title: "Review Condition",
                  text: "Identify the major issues affecting the property.",
                },
                {
                  number: "2",
                  title: "Estimate Costs",
                  text: "Understand the likely cost and timeline of repairs.",
                },
                {
                  number: "3",
                  title: "Compare Options",
                  text: "Consider repairing, listing, or selling as-is.",
                },
                {
                  number: "4",
                  title: "Choose Your Path",
                  text: "Select the option that best supports your goals.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-2xl font-bold">
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-8 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECISION PROCESS */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Decision Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                A Practical Path Forward
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Every property is different, but these steps can help you review
                the situation before making a final decision.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-5">
              {[
                "Inspect the Property",
                "Estimate Repairs",
                "Review the Market",
                "Compare Selling Options",
                "Choose a Timeline",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl bg-white p-8 text-center shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-xl font-bold text-white">
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

        {/* SELLING OPTIONS */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Your Options
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Compare the Available Paths
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                The best choice depends on the property&apos;s condition, your
                budget, your timeline, and how involved you want to be.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Complete the Repairs
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Repairing the property may improve its appearance and market
                  value, but it requires time, money, and contractor management.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Sell the House As-Is
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Selling in the current condition can reduce preparation time
                  and avoid the cost and stress of major repairs.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Make Limited Improvements
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Some homeowners complete only essential or affordable repairs
                  before offering the property for sale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Repair and Selling FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              {[
                {
                  question:
                    "Can I sell a house with major structural problems?",
                  answer:
                    "Yes. The condition should be disclosed and considered during the evaluation, but a property does not always need to be repaired before it can be sold.",
                },
                {
                  question: "Do I have to replace the roof before selling?",
                  answer:
                    "Not necessarily. You can compare the replacement cost and expected benefit with the option of selling the property in its current condition.",
                },
                {
                  question: "Can I sell a house with water or fire damage?",
                  answer:
                    "Yes. Buyers and investors may consider damaged properties, although the condition can affect value, insurance, financing, and the transaction process.",
                },
                {
                  question: "Should I get a home inspection first?",
                  answer:
                    "An inspection can help identify unknown concerns, but whether you need one depends on your goals and selling method.",
                },
                {
                  question: "Do I need to clean out the property?",
                  answer:
                    "Not always. The amount of cleaning or removal required depends on the agreement and the selling option you choose.",
                },
                {
                  question: "How is an as-is offer determined?",
                  answer:
                    "Location, condition, repair costs, market activity, comparable sales, and holding expenses may all be considered.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-8"
                >
                  <h3 className="text-xl font-bold text-[#14213D]">
                    {item.question}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Need More Information?
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let&apos;s Discuss Your Property
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              If your house needs repairs, we can help you understand the
              property&apos;s condition and explore the options available to
              you.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}