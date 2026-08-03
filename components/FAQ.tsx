"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the FAHOPROSO process work?",
    answer:
      "Start by contacting us and sharing basic information about your property. We review the details, discuss your situation, and may schedule a property visit. If the property fits our investment goals, we can present an offer for you to review. You are never required to accept it.",
  },
  {
    question: "Do I need to make repairs before selling?",
    answer:
      "No. You can contact us even if the property needs repairs, updates, cleaning, or major improvements. We review properties in their current condition and explain the available options before you decide what to do.",
  },
  {
    question: "Can I sell my house as-is?",
    answer:
      "Yes. Selling as-is means you do not complete major repairs or renovations before the sale. The property's current condition is considered during the evaluation and offer process.",
  },
  {
    question: "Do I need to clean out the property?",
    answer:
          "No. You are not obligated to clean or empty the property before selling. We buy homes in as is condition, and you can leave behind unwanted furniture, appliances, or other belongings. If there are any special circumstances, we're happy to discuss them with you.",
  },
  {
    question: "How is the cash offer determined?",
    answer:
      "The offer is based on several factors, including the property's location, condition, needed repairs, market activity, comparable sales.",
  },
  {
    question: "How quickly can you close?",
    answer:
      "The timeline depends on the property, title work, financing, and transaction details. Our closings typically take just 1 to 2 weeks, though we always work closely with you to choose a realistic timeline that fits your needs.",
  },
  {
    question: "Can I choose the closing date?",
    answer:
      "In many situations, yes. We try to create a timeline that works for everyone involved. Your preferred move-out date, title requirements, and other transaction details may affect the final schedule.",
  },
  {
    question: "Are there commissions or hidden fees?",
    answer:
      "We do not charge a real estate commission when purchasing a property directly. Any costs connected to the transaction will be explained clearly before you agree to move forward.",
  },
  {
    question: "Do I have to pay closing costs?",
    answer:
      "Closing costs depend on the agreement and the specific transaction. We explain who is responsible for each cost before closing so there are no unexpected surprises.",
  },
  {
    question: "Am I required to accept an offer?",
    answer:
      "No. Contacting us, scheduling a meeting, or receiving an offer does not obligate you to sell. You can review the information and decide whether it is right for you.",
  },
  {
    question: "Do you buy inherited properties?",
    answer:
      "Yes. We review inherited properties and understand that these situations can involve family decisions, estate documents, maintenance, and probate. Legal and tax questions should be reviewed with qualified professionals.",
  },
  {
    question: "Do you buy properties during probate?",
    answer:
      "We may review probate properties, but the person handling the estate must have the proper legal authority to sell. The timing and requirements depend on the estate and Michigan law.",
  },
  {
    question: "Do you buy rental properties with tenants?",
    answer:
      "Yes, we may evaluate occupied rental properties. Existing leases, tenant rights, payment history, property condition, and occupancy details should be reviewed before moving forward.",
  },
  {
    question: "Do you buy vacant or damaged properties?",
    answer:
      "Yes. We consider vacant properties and homes with deferred maintenance, fire damage, water damage, outdated interiors, structural concerns, or other repair needs.",
  },
  {
    question: "Do you buy residential and commercial properties?",
    answer:
      "Yes. Our investment focus includes residential homes, rental properties, multifamily opportunities, land, and selected commercial real estate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our primary focus includes Grand Rapids, Kent County, Ottawa County, and selected opportunities in Troy. We also review properties in other parts of Michigan based on the location and property type.",
  },
  {
    question: "What information should I provide when contacting you?",
    answer:
      "Helpful information includes the property address, property type, current condition, occupancy status, reason for selling, preferred timeline, and any known repairs, mortgages, liens, or estate issues.",
  },
  {
    question: "What happens after I accept an offer?",
    answer:
      "The transaction moves into the closing process. A title company or closing professional reviews ownership, liens, taxes, and required documents. Once everything is ready, the parties sign the closing documents and the sale is completed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F5F5F0] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#14213D] sm:text-4xl md:text-5xl">
            Clear Answers to Common Property Questions
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Learn more about selling a property, receiving an offer, closing,
            inherited homes, rental properties, and working with FAHOPROSO.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#C9A227] shadow-lg"
                    : "border-slate-200 shadow-sm hover:-translate-y-0.5 hover:border-[#C9A227]/60 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:gap-6 sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold leading-7 text-[#14213D] sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#C9A227] text-white"
                        : "bg-[#C9A227]/10 text-[#C9A227]"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
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
                    <p className="border-t border-slate-100 px-5 py-5 leading-8 text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}