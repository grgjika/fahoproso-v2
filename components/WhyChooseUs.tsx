"use client";

import {
  BadgeDollarSign,
  CalendarCheck,
  Building2,
  Handshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const benefits = [
 
  {
    icon: BadgeDollarSign,
    title: "Fair Cash Offers",
    description:
      "We provide clear and competitive offers based on the property's condition, location, and market potential.",
    color: "bg-gray-300",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Closing Dates",
    description:
      "Choose a closing timeline that works for you, whether you need to move quickly or need more time.",
    color: "bg-gray-300",
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Fees",
    description:
      "We believe in transparent transactions with no unexpected commissions, fees, or last-minute surprises.",
    color: "bg-gray-300",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description:
      "Our investment focus includes residential properties, rental opportunities, and commercial real estate.",
    color: "bg-[#009B4D]",
  },
  {
    icon: Handshake,
    title: "Honest Communication",
    description:
      "You receive straightforward information, dependable guidance, and respectful communication throughout the process.",
    color: "bg-[#009B4D]",
  },
  {
    icon: MapPin,
    title: "Locally Focused",
    description:
      "We understand the Grand Rapids market and are committed to creating opportunities throughout surrounding communities.",
    color: "bg-[#009B4D]",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Why Choose FAHOPROSO
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            A Trusted Partner for Your
            <br className="hidden sm:block" />
            Real Estate Goals
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We combine local market knowledge, transparent communication, and
            practical property solutions to make every transaction clear and
            straightforward.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className={`group rounded-2xl border border-slate-200 ${benefit.color} p-8 transition-all duration-300 hover:-translate-y-2 hover:border-2 hover:border-[#C9A227] hover:bg-white hover:shadow-xl`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A227]/10 transition-all duration-300 group-hover:bg-[#C9A227]">
                  <Icon className="h-7 w-7 text-[#C9A227] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}