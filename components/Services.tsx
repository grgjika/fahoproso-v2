import Image from "next/image";
import {
  Home,
  Hammer,
  KeyRound,
  Building2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Buy Houses for Cash",
      description:
        "We purchase properties in any condition and provide fast, fair cash offers with no hidden fees.",
      icon: Home,
      image: "/images/service-cash-home.jpg",
    },
    {
      title: "Fix & Flip Investments",
      description:
        "We identify, renovate, and transform properties to maximize their value and strengthen communities.",
      icon: Hammer,
      image: "/images/service-renovation.jpg",
    },
    {
      title: "Rental Investments",
      description:
        "We acquire quality rental properties that generate long-term income and lasting value.",
      icon: KeyRound,
      image: "/images/service-rental2.jpg",
    },
    {
      title: "Commercial Real Estate",
      description:
        "We invest in commercial properties and partner on opportunities that support long-term growth.",
      icon: Building2,
      image: "/images/service-commercial.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-32 bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
            Our Services
          </p>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Real Estate Solutions You Can Trust
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We provide practical real estate solutions for property owners,
            investors, and partners throughout West Michigan.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />

                  <div className="absolute bottom-5 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A227]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 h-0.5 w-12 bg-[#C9A227] transition-all duration-300 group-hover:w-24" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}