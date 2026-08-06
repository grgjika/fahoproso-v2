import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Selling a Vacant House in Michigan | FAHOPROSO",
  description:
    "Learn your options for selling a vacant house in Michigan, including maintenance, security, insurance, repairs, and selling as-is.",
};

export default function SellingVacantHousePage() {
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
                Selling a
                <span className="block text-[#C9A227]">
                  Vacant House
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                A vacant property can create security, maintenance, insurance,
                and financial concerns. This guide explains how to protect the
                home, compare your options, and prepare for a possible sale.
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
                src="/images/vacant-house.webp"
                alt="Selling a vacant house in Michigan"
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
                Vacant Homes Still Need Attention
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  A vacant house may no longer have someone watching for leaks,
                  storm damage, heating problems, broken windows, or other
                  concerns.
                </p>

                <p>
                  Taxes, insurance, utilities, lawn care, and maintenance can
                  also continue even when nobody lives in the property.
                </p>

                <p>
                  Reviewing the home regularly and understanding your long-term
                  plan can help reduce risk and avoid larger problems.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#14213D]">
                Important First Steps
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>Confirm that doors and windows are secure.</li>
                <li>Review the insurance coverage.</li>
                <li>Maintain utilities when necessary.</li>
                <li>Inspect the property regularly.</li>
                <li>Compare keeping, renting, repairing, or selling.</li>
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
                Review Your Insurance When a Property Becomes Vacant
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Some insurance policies have different requirements or
                limitations when a home is vacant for an extended period.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Contact your insurance provider to confirm coverage and ask
                whether additional protection or regular inspections are
                required.
              </p>
            </div>
          </div>
        </section>

        {/* COMMON CHALLENGES */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Common Challenges
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Issues Vacant Property Owners May Face
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Security Concerns",
                  text: "Empty homes may be more vulnerable to break-ins, vandalism, or unauthorized entry.",
                },
                {
                  title: "Weather Damage",
                  text: "Frozen pipes, roof leaks, storms, and moisture can cause damage when nobody is present.",
                },
                {
                  title: "Ongoing Expenses",
                  text: "Taxes, insurance, utilities, lawn care, and repairs may continue each month.",
                },
                {
                  title: "Maintenance Needs",
                  text: "Grass, snow, plumbing, heating, pests, and exterior conditions still require attention.",
                },
                {
                  title: "Insurance Limitations",
                  text: "Standard coverage may change when a home remains vacant for an extended period.",
                },
                {
                  title: "Declining Condition",
                  text: "Small problems can become expensive when they are not noticed and repaired quickly.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg"
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

        {/* QUICK FACTS */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Quick Facts
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Managing a Vacant House at a Glance
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "1",
                  title: "Secure the Home",
                  text: "Protect doors, windows, utilities, and access points.",
                },
                {
                  number: "2",
                  title: "Maintain the Property",
                  text: "Inspect the home and address problems early.",
                },
                {
                  number: "3",
                  title: "Review the Costs",
                  text: "Understand taxes, insurance, utilities, and repairs.",
                },
                {
                  number: "4",
                  title: "Choose Your Path",
                  text: "Keep, rent, repair, or sell based on your goals.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-2xl font-bold">
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Property Review
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                A Practical Process
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                These general steps can help you organize the situation and
                prepare for your next decision.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-5">
              {[
                "Secure the House",
                "Inspect the Property",
                "Estimate Expenses",
                "Compare Options",
                "Complete the Sale",
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

        {/* OPTIONS */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Your Options
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Consider the Best Path Forward
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Your decision may depend on the home&apos;s condition, location,
                ongoing costs, and your long-term goals.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Keep the Property
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  You may keep the home for future personal use or as a
                  long-term investment.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Rent the Property
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Renting may provide income but requires preparation,
                  maintenance, management, and tenant responsibilities.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Sell the Property
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Selling may reduce ongoing expenses and remove the
                  responsibility of maintaining an empty home.
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
                Vacant House FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              {[
                {
                  question: "Can I sell a house while it is vacant?",
                  answer:
                    "Yes. A vacant house can be sold, but its condition, security, insurance, title, and ongoing expenses should be reviewed.",
                },
                {
                  question: "Should I leave the utilities connected?",
                  answer:
                    "That depends on the season, property condition, insurance requirements, and whether inspections or repairs are needed.",
                },
                {
                  question: "Does homeowners insurance cover a vacant house?",
                  answer:
                    "Coverage may change after a property has been vacant for a certain period. Confirm the details with your insurance provider.",
                },
                {
                  question: "Do I need to repair the property first?",
                  answer:
                    "Not always. Compare the cost and timeline of repairs with the option of selling the property in its current condition.",
                },
                {
                  question: "Do I need to furnish or stage an empty house?",
                  answer:
                    "No. Some sellers use staging, but it is not required for every selling method or property.",
                },
                {
                  question: "Can I sell the house as-is?",
                  answer:
                    "Yes. Selling as-is may be an option when you prefer not to complete repairs, cleaning, or updates before the sale.",
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
              Let&apos;s Discuss Your Vacant Property
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              FAHOPROSO can help you review the condition of your vacant house
              and better understand the options available.
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