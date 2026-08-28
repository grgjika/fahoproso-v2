import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Udhëzues për Pasuritë e Paluajtshme në Michigan",
  description:
    "Eksploroni informacione lokale për pronarët dhe shitësit e pronave në Grand Rapids, Kent County, Ottawa County, Troy dhe komunitete të tjera në Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/resources/michigan-guides",
  },
};

const areas = [
  {
    title: "Grand Rapids",
    description:
      "Informacion për pronarët që po konsiderojnë shitjen e një shtëpie ose prone në Grand Rapids.",
    href: "/sell-my-house-grand-rapids",
  },
  {
    title: "Kent County",
    description:
      "Eksploroni informacione për pronarët dhe shitësit e pronave në Kent County dhe komunitetet e tij.",
    href: "/sell-my-house-kent-county",
  },
  {
    title: "Ottawa County",
    description:
      "Informacion për pronarët që po shqyrtojnë mundësitë e shitjes së një prone në Ottawa County.",
    href: "/sell-my-house-ottawa-county",
  },
  {
    title: "Troy",
    description:
      "Informacion për pronarët që po konsiderojnë shitjen e një shtëpie ose prone në Troy, Michigan.",
    href: "/sell-my-house-troy",
  },
];

export default function MichiganGuidesSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Informacion Lokal
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Udhëzues për Michigan
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Eksploroni informacione për pronarët dhe shitësit e pronave në
              komunitetet e Michigan ku fokusohet FAHOPROSO.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Njohuri lokale
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Çdo treg i pasurive të paluajtshme është i ndryshëm
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Vendndodhja mund të ndikojë në vlerën e pronës, kërkesën nga
              blerësit, kohën e nevojshme për shitje dhe mundësitë që ka një
              pronar.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Udhëzuesit tanë lokalë ofrojnë një pikënisje për të kuptuar më
              mirë disa nga zonat e Michigan ku ne fokusohemi.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                Zonat e Michigan
              </p>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                Eksploroni udhëzuesit tanë lokalë
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {areas.map((area) => (
                <Link
                  key={area.title}
                  href={area.href}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <p className="mt-6 font-semibold text-[#C9A227]">
                    Eksploro zonën →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}