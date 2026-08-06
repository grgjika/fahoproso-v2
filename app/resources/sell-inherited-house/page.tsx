import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


export const metadata: Metadata = {
  title: "Selling an Inherited House in Michigan | FAHOPROSO",
  description:
    "Learn about selling an inherited house in Michigan with this guide from FAHOPROSO.",
};

export default function SellInheritedHousePage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
         <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

  <div>

    <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
      Michigan Homeowner Guide
    </p>

    <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
      Selling an Inherited House in Michigan
    </h1>

    <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
      Inheriting a property can bring legal, financial, maintenance, and family
      decisions. This guide explains the selling process and your options.
    </p>

  </div>

  <div>

    <Image
      src="/images/sell-inherited-house1.jpg"
      alt="Selling an inherited house in Michigan"
      width={1200}
      height={700}
      className="rounded-3xl object-cover shadow-2xl"
    />

  </div>

</div>
            </section>
            <section className="bg-white py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
    <div>
      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Understanding Your Situation
      </p>

      <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

      <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
        An Inherited Property Can Come With Many Decisions
      </h2>

      <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
        <p>
          Inheriting a house can be emotional and complicated. You may need to
          coordinate with family members, handle maintenance, review legal
          documents, and decide whether to keep, rent, or sell the property.
        </p>

        <p>
          Before making a decision, it is important to understand who legally
          owns the property, whether probate is required, what debts or liens
          may exist, and whether all heirs agree on the next step.
        </p>

        <p>
          FAHOPROSO helps Michigan property owners understand their options and
          explore a practical path forward without pressure.
        </p>
      </div>
    </div>

    <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#14213D]">
        Important First Steps
      </h3>

      <ul className="mt-6 space-y-4 text-slate-700">
        <li>Confirm ownership and review the will or estate documents.</li>
        <li>Determine whether probate is required.</li>
        <li>Identify mortgages, liens, taxes, and other obligations.</li>
        <li>Discuss the property with all heirs or decision-makers.</li>
        <li>Evaluate the property’s condition and ongoing expenses.</li>
      </ul>
    </div>
  </div>
</section>

{/* Important Guidance */}

<section className="bg-white pb-24">
  <div className="mx-auto max-w-5xl px-6">
    <div className="rounded-3xl border border-[#C9A227]/40 bg-[#FFF9EC] p-8 shadow-sm">
      <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
        Important Guidance
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#14213D]">
        Understand the Legal Ownership Before Making a Decision
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-700">
        Before repairing, renting, listing, or selling an inherited property,
        confirm who has legal authority to make decisions for the estate.
        Ownership, probate status, liens, and agreements between heirs can all
        affect what happens next.
      </p>

      <p className="mt-4 leading-8 text-slate-600">
        We can discuss property-related options, but legal and tax
        questions should be reviewed with a qualified Michigan attorney,
        accountant, or estate professional.
      </p>
    </div>
  </div>
</section>

{/* Common Challenges */}

<section className="bg-slate-100 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Common Challenges
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
        Issues Families Often Face
      </h2>

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

      <p className="mt-7 text-lg leading-8 text-slate-600">
        Inherited properties can involve practical, financial, and emotional
        decisions. These are some of the most common challenges families
        encounter.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Multiple Heirs",
          text: "Family members may have different opinions about whether to keep, rent, repair, or sell the property.",
        },
        {
          title: "Repairs and Maintenance",
          text: "The home may need updates, cleaning, or major repairs before it can be occupied, rented, or listed.",
        },
        {
          title: "Ongoing Expenses",
          text: "Taxes, insurance, utilities, lawn care, and maintenance can continue while the estate is being settled.",
        },
        {
          title: "Existing Debt or Liens",
          text: "Mortgages, unpaid taxes, liens, or other obligations may affect the property and the available options.",
        },
        {
          title: "Vacant Property Concerns",
          text: "An empty home may require security, winterization, insurance review, and regular inspections.",
        },
        {
          title: "Emotional Decisions",
          text: "A family home may carry strong memories, making it difficult to separate personal feelings from practical decisions.",
        },
      ].map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm"
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

{/* Quick Facts */}

<section className="bg-[#14213D] py-24 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Quick Facts
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Selling an Inherited House at a Glance
      </h2>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          number: "1",
          title: "Confirm Ownership",
          text: "Understand who has the legal authority to make decisions.",
        },
        {
          number: "2",
          title: "Review Probate",
          text: "Determine whether probate applies to your situation.",
        },
        {
          number: "3",
          title: "Evaluate the Property",
          text: "Inspect the home's condition and ongoing costs.",
        },
        {
          number: "4",
          title: "Choose Your Path",
          text: "Keep it, rent it, or sell it based on your goals.",
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
{/* Probate Timeline */}

<section className="bg-slate-100 py-24">
  <div className="mx-auto max-w-6xl px-6">

    <div className="text-center">

      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Probate Overview
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
        Understanding the Process
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Every estate is different. While not every inherited property follows
        the exact same path, many homeowners move through these general steps
        before deciding whether to keep or sell the property.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-5">

      {[
        "Inheritance",
        "Estate Review",
        "Probate (if required)",
        "Property Decision",
        "Sale or Transfer",
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

    <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-8 text-slate-600">
      Depending on the estate, legal documents, and ownership structure, some
      of these steps may vary. If you have questions about your specific
      situation, consider speaking with an attorney or other qualified
      professional before making important legal or financial decisions.
    </p>

  </div>
</section>
{/* Your Selling Options */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Your Options
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
        Explore the Different Paths Available
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Every inherited property is unique. Before making a decision, it's
        helpful to understand the common options available to Michigan
        homeowners.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Keep the Property
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          Some families choose to keep the home as a primary residence,
          vacation property, or long-term investment.
        </p>
      </div>

      <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Sell the Property
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          Selling may be appropriate if maintaining the property is no longer
          practical or if the heirs prefer to divide the proceeds.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Rent the Property
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          Some homeowners decide to keep the property as a rental to generate
          long-term income, although this also comes with ongoing management
          responsibilities.
        </p>
      </div>

    </div>

  </div>
</section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}