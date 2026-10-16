import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const faqs = [
  {
    question: "Can I sell a house that has fire damage in Michigan?",
    answer:
      "Yes. A fire-damaged home can be sold, either after repairs or in its current condition. The damage should be disclosed, and it will affect the price, the buyer's financing, and how long the sale takes.",
  },
  {
    question: "Should I settle the insurance claim before selling?",
    answer:
      "It is usually best to speak with your insurance company before deciding. Whether you repair, accept a settlement, or sell can affect your claim, so confirm the details with your insurer and any lender on the property first.",
  },
  {
    question: "Do I have to repair a fire-damaged house before I sell it?",
    answer:
      "No. Repairs are one option, but they take time and money and can involve permits and contractors. Some owners compare the repair cost with the option of selling the property as-is.",
  },
  {
    question: "Who buys a fire-damaged house?",
    answer:
      "Investors and cash buyers, including companies like FAHOPROSO, review properties in their current condition. Buyers who need a mortgage often cannot qualify for a home that is not habitable or insurable, so cash buyers are frequently the main option.",
  },
  {
    question: "Does the mortgage have to be paid off when I sell?",
    answer:
      "Any mortgage or lien on the property is normally paid from the sale proceeds at closing. If you owe more than the property would sell for, speak with your lender and a qualified professional about your options.",
  },
  {
    question: "How is an offer on a fire-damaged home determined?",
    answer:
      "Offers usually consider the location, the extent of the damage, estimated repair costs, comparable sales in the area, and the costs of holding the property while it is repaired or resold.",
  },
];

export const metadata: Metadata = {
  title: "Sell a Fire-Damaged House in Michigan | FAHOPROSO",
  description:
    "Your options for selling a fire-damaged house in Michigan: insurance first steps, repairing, listing, or selling as-is to a cash buyer. Free, no-obligation conversation.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/resources/sell-fire-damaged-house/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function SellFireDamagedHousePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
                  Fire-Damaged House
                </span>
                in Michigan
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                A fire is stressful, and deciding what to do with the property
                can feel overwhelming. This guide explains the first steps and
                the options available when you are thinking about selling a
                fire-damaged home.
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
                alt="A damaged house in Michigan that may need major repairs"
                width={1200}
                height={800}
                priority
                className="rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* FIRST STEPS */}

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Start Here
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                What to Do Before You Decide
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Safety comes first. Do not enter a damaged building until the
                  fire department or a qualified professional says it is safe.
                </p>

                <p>
                  Once everyone is safe, contact your insurance company and
                  document the damage with photos and records. The decisions
                  you make about repairs or selling can affect your claim, so
                  it is worth understanding it before you commit.
                </p>

                <p>
                  There is usually no need to decide immediately. Take time to
                  compare your options, speak with the people who can advise
                  you, and choose a path that fits your finances and timeline.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#14213D]">
                A Simple Checklist
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>Make sure the property is secured and safe.</li>
                <li>Contact your insurance company and your lender.</li>
                <li>Photograph the damage and keep all paperwork.</li>
                <li>Get repair estimates from licensed contractors.</li>
                <li>Compare repairing, listing, and selling as-is.</li>
              </ul>

              <p className="mt-6 text-sm leading-7 text-slate-500">
                This is general information, not legal or insurance advice.
                Speak with your insurer and a qualified professional about your
                situation.
              </p>
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

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Ways to Sell a Fire-Damaged Home
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                The right choice depends on the extent of the damage, your
                insurance coverage, your budget, and how soon you need to move
                forward.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Repair, Then List
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Restoring the home can improve its value and the number of
                  buyers, but it involves contractors, permits, time, and
                  upfront cost.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Sell As-Is
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Selling in the current condition avoids repair costs and
                  delays. Investors and cash buyers review damaged homes
                  directly.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Complete Part of the Work
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Some owners finish only essential safety or cleanup work
                  before selling. Compare the cost with the expected benefit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT AFFECTS VALUE */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Understanding Value
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                What Affects the Price
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Extent of the Damage",
                  text: "Structural, smoke, and water damage from firefighting all change the scope of repairs.",
                },
                {
                  title: "Location",
                  text: "The neighborhood and local demand influence what the home is worth after repairs.",
                },
                {
                  title: "Repair Costs",
                  text: "Estimates from licensed contractors help show what restoring the home would take.",
                },
                {
                  title: "Insurance and Liens",
                  text: "Claim payments, the mortgage, and any liens affect how the sale and proceeds work.",
                },
                {
                  title: "Time and Holding Costs",
                  text: "Taxes, insurance, utilities, and security continue while the property sits.",
                },
                {
                  title: "Local Comparable Sales",
                  text: "Recent sales of similar homes nearby are a reference point for value.",
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

        {/* FAQ */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Fire-Damaged House FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              {faqs.map((item) => (
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

            <p className="mt-12 text-center text-slate-600">
              Related guides:{" "}
              <Link
                className="font-semibold text-[#14213D] underline"
                href="/resources/selling-house-needs-repairs"
              >
                selling a house that needs repairs
              </Link>
              ,{" "}
              <Link
                className="font-semibold text-[#14213D] underline"
                href="/resources/sell-house-as-is"
              >
                selling your house as-is
              </Link>{" "}
              and{" "}
              <Link
                className="font-semibold text-[#14213D] underline"
                href="/sell-my-house-michigan"
              >
                selling your house in Michigan
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Need More Information?
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let&apos;s Talk About Your Property
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              If your home has fire damage, we can review its condition and
              talk through the options with you. There is no obligation.
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
