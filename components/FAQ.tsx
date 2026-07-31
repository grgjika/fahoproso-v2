"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to make repairs before selling?",
    answer:
      "No repairs or updates are necessary. We purchase properties completely 'as-is,' meaning you can skip the hassle of cleaning, renovations, or fixes before reaching out to us.",
  },
  {
    question: "How quickly can you close?",
    answer:
      "Closing timelines depend on the property and transaction details, we can typically close in as little as two weeks, but we work to create a schedule that fits your needs whenever possible.",
  },
  {
    question: "Are there commissions or hidden fees?",
    answer:
      "No, we do not charge commissions or hidden fees. We believe in clear and transparent communication, and all terms will be fully explained before you make a decision.",
  },
  {
    question: "Do you buy residential and commercial properties?",
    answer:
      "Yes. we are interested in residential properties, rental opportunities, land, and selected commercial real estate investments.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Grand Rapids and serve clients throughout Michigan, actively pursuing opportunities in surrounding communities and key markets across the state.",
  },
  {
    question: "Am I required to accept an offer?",
    answer:
      "No. Contacting us or receiving an offer does not obligate you to move forward. You can review the information and decide what works best for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F5F5F0] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Answers to Common Questions
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Learn more about our property investment process and what to expect
            when working with FAHOPROSO.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[#C9A227]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/10">
                    <ChevronDown
                      className={`h-5 w-5 text-[#C9A227] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-6 py-5 leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}