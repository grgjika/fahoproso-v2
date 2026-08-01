import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Sell My House in Troy, MI | FAHOPROSO",
  description:
    "Looking to sell your house in Troy, Michigan? FAHOPROSO provides professional property solutions for homeowners in Troy.",
      keywords: [
          "sell my house Troy",
          "sell my house Troy MI",
          "sell my house Troy Michigan",
          "sell my house fast Troy",
          "cash home buyers Troy",
          "we buy houses Troy",
          "real estate investor Troy",
          "sell inherited house Troy",
          "sell rental property Troy",
          "sell house as is Troy",
          "home buyers Troy Michigan",
          "property investors Troy",
          "Realtor to sell my house fast in Troy",
        ],
   };

export default function SellMyHouseTroyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative flex min-h-[650px] items-center overflow-hidden">
          <Image
            src="/images/service-cash-home.jpg"
            alt="Sell your house in Troy, Michigan"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/95 via-[#14213D]/85 to-[#14213D]/40" />

          <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-white">
            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <MapPin className="h-4 w-4 text-[#C9A227]" />
                <span className="text-sm font-medium">
                  Serving Troy, Michigan
                </span>
              </div>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
                Sell Your House
                <span className="block text-[#C9A227]">
                  in Troy, Michigan
            
                </span>
              </h1>

              <div className="mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
                Whether your property needs repairs, you've inherited a home,
                are relocating, facing foreclosure, or simply want a
                straightforward selling experience, FAHOPROSO is here to help.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We proudly serve homeowners throughout Troy, Michigan by providing
                honest communication, professional guidance, and fair property
                solutions tailored to each unique situation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
                >
                  Request a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#14213D]"
                >
                  Our Services
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FAHOPROSO */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Why Choose FAHOPROSO
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
        A Professional Approach to Selling Your Home
      </h2>

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

      <p className="mt-8 text-lg leading-8 text-slate-600">
        Selling a home is one of the biggest financial decisions you'll ever
        make. At FAHOPROSO, we believe homeowners deserve honest
        communication, respect, and a straightforward process—not pressure.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Fair Property Solutions
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Every property is unique. We evaluate each home individually and work
          with homeowners to understand their goals before discussing possible
          solutions.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Local Knowledge
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Based in West Michigan, we understand the Troy, Michigan housing market
          and the communities we proudly serve.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          No High-Pressure Sales
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          We believe homeowners should have time to make informed decisions.
          Our role is to provide information and professional guidance—not
          pressure.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Flexible Closing
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Every situation is different. We work with homeowners to determine a
          timeline that fits their needs whenever possible.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Residential & Commercial
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Our experience includes residential properties, rental investments,
          and commercial real estate opportunities throughout Michigan.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Built on Integrity
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Integrity, professionalism, and transparency guide every conversation
          we have with homeowners and business partners.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Situations We Help With */}

<section className="bg-slate-100 py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Every Situation Is Different
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
        We Understand Life Doesn't Always Go As Planned
      </h2>

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

      <p className="mt-8 text-lg leading-8 text-slate-600">
        Homeowners throughout Troy, Michigan contact FAHOPROSO for many different
        reasons. Every situation is unique, and we take the time to understand
        your goals before discussing possible solutions.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Homes Needing Repairs
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Whether your home needs cosmetic updates or significant repairs,
          we'll review the property and discuss options without requiring you
          to complete renovations first.
        </p>
      </article>

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Inherited Property
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Managing an inherited home can feel overwhelming. We understand these
          situations and strive to provide clear communication throughout the
          process.
        </p>
      </article>

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Rental Properties
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Whether the property is occupied or vacant, we'll evaluate your
          rental investment and discuss potential options that align with your
          goals.
        </p>
      </article>

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Relocation
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          If you're relocating for work, family, or another opportunity, we
          aim to make the transition as smooth as possible.
        </p>
      </article>

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Financial Challenges
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Unexpected financial situations can happen to anyone. We approach
          every conversation respectfully and work toward practical solutions.
        </p>
      </article>

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Simply Ready to Sell
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Sometimes homeowners simply want a different selling experience. If
          you're exploring your options, we're happy to have a conversation.
        </p>
      </article>

    </div>

  </div>
</section>

{/* Our Process */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Our Process
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
        Selling Your Home Doesn't Have to Be Complicated
      </h2>

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

      <p className="mt-8 text-lg leading-8 text-slate-600">
        We believe every homeowner deserves a clear, transparent process.
        Here's what you can expect when you contact FAHOPROSO.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <span className="text-5xl font-extrabold text-[#C9A227]/30">
          01
        </span>

        <h3 className="mt-5 text-2xl font-bold text-[#14213D]">
          Contact Us
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Complete our contact form or reach out directly. Tell us about
          your property and your situation.
        </p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <span className="text-5xl font-extrabold text-[#C9A227]/30">
          02
        </span>

        <h3 className="mt-5 text-2xl font-bold text-[#14213D]">
          Property Review
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          We review the property's condition, location, and other important
          details before discussing available options.
        </p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <span className="text-5xl font-extrabold text-[#C9A227]/30">
          03
        </span>

        <h3 className="mt-5 text-2xl font-bold text-[#14213D]">
          Discuss Solutions
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          We'll explain the process, answer your questions, and discuss a
          solution that fits your circumstances.
        </p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <span className="text-5xl font-extrabold text-[#C9A227]/30">
          04
        </span>

        <h3 className="mt-5 text-2xl font-bold text-[#14213D]">
          Move Forward
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          If you decide to proceed, we'll work together toward a smooth,
          professional closing based on an agreed timeline.
        </p>
      </article>

    </div>

  </div>
</section>

{/* Why Sell Directly */}

<section className="bg-[#14213D] py-24 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">

      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Why Consider Selling Directly?
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Every Homeowner's Situation Is Different
      </h2>

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

      <p className="mt-8 text-lg leading-8 text-slate-300">
        Selling directly isn't the right solution for everyone. However,
        depending on your circumstances, it may offer a simpler alternative to
        the traditional listing process. Our goal is to help you understand
        your options so you can make the decision that's right for you.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2">

      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-8">
        <h3 className="text-2xl font-bold text-white">
          Traditional Listing
        </h3>

        <ul className="mt-6 space-y-4 text-slate-300 leading-8 list-disc pl-5">
          <li>Prepare the property for showings.</li>
          <li>Schedule multiple buyer visits.</li>
          <li>Negotiate offers and inspections.</li>
          <li>Wait for financing approval.</li>
          <li>Closing timeline depends on the buyer.</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-[#C9A227]/40 bg-[#C9A227]/10 p-8">
        <h3 className="text-2xl font-bold text-white">
          Working with FAHOPROSO
        </h3>

        <ul className="mt-6 space-y-4 text-slate-300 leading-8 list-disc pl-5">
          <li>Professional conversation about your goals.</li>
          <li>Property reviewed individually.</li>
          <li>Transparent communication throughout the process.</li>
          <li>Flexible timeline whenever possible.</li>
          <li>Respectful, no-pressure approach.</li>
        </ul>
      </div>

    </div>

    <div className="mx-auto mt-16 max-w-4xl text-center">

      <p className="text-lg leading-8 text-slate-300">
        At FAHOPROSO, we believe homeowners deserve honest information—not
        pressure. Whether you ultimately work with us, list with an agent, or
        choose another path, we want you to feel confident in your decision.
      </p>

    </div>

  </div>
</section>

{/* Communities We Serve */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-3xl text-center">

      <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Serving Communities Across Troy, Michigan
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
        Proudly Serving Homeowners Throughout Troy, Michigan
      </h2>

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

      <p className="mt-8 text-lg leading-8 text-slate-600">
        FAHOPROSO proudly serves homeowners throughout Troy, Michigan, including 
        downtown neighborhoods, established residential areas, and growing 
        communities across the city.
      </p>

    </div>

    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "Downtown Troy",
          "Somerset",
          "Big Beaver Corridor",
          "Wattles",
          "Long Lake",
          "Crooks Road",
          "Dequindre",
          "Rochester Road",
          "Livernois",
          "Maple Road",
          "Beach Road",
          "North Troy",
        ].map((area) => (
        <div
          key={area}
          className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227]"
        >
          <h3 className="text-xl font-semibold text-[#14213D]">
            {area}
          </h3>
        </div>
      ))}

    </div>

    <div className="mx-auto mt-16 max-w-4xl">

      <p className="text-lg leading-8 text-slate-600">
        Don't see your community listed? Contact us anyway. We regularly review
        opportunities throughout Michigan and may be able to assist with
        properties in surrounding communities as well.
      </p>

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

      <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
        Questions Homeowners Often Ask
      </h2>

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
    </div>

    <div className="mt-14 space-y-6">

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Do I need to make repairs before contacting FAHOPROSO?
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          No. Every property is different, and we're happy to review your
          situation regardless of the home's current condition.
        </p>
      </article>

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Is there any obligation after contacting you?
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          No. Contacting us simply starts a conversation. You'll have the
          opportunity to ask questions and decide what is best for your
          situation.
        </p>
      </article>

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          What types of properties do you consider?
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          We review residential homes, rental properties, multifamily
          opportunities, and selected commercial properties throughout
          Michigan.
        </p>
      </article>

      <article className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-[#14213D]">
          Which areas do you serve?
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          We proudly serve Troy and are expanding throughout West
          Michigan, Metro Detroit, and other communities across the state.
        </p>
      </article>

    </div>

  </div>
</section>

{/* Final CTA */}

<section className="bg-[#14213D] py-24 text-white">
  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
      Let's Start the Conversation
    </p>

    <h2 className="mt-4 text-4xl font-bold md:text-5xl">
      Ready to Discuss Your Property?
    </h2>

    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
      Every homeowner's situation is unique. Whether you're considering
      selling now or simply exploring your options, FAHOPROSO is here to
      answer your questions and provide honest, professional guidance.
    </p>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
      We proudly serve homeowners throughout Troy and are expanding
      across West Michigan and the rest of the state. Contact us today to
      start a no-obligation conversation about your property.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-4">

      <Link
        href="/contact"
        className="rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
      >
        Contact FAHOPROSO
      </Link>

      <Link
        href="/services"
        className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#14213D]"
      >
        Explore Our Services
      </Link>

    </div>

  </div>
</section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}