import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHub from "@/components/ResourcesHub";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Burime",
  description:
    "Eksploroni udhëzues dhe burime të FAHOPROSO rreth shitjes së pronave, investimeve dhe temave për pronarët në Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/resources",
    languages: {
    "en-US": "https://www.fahoproso.com/resources",
    "es-US": "https://www.fahoproso.com/es/resources",
    "el-GR": "https://www.fahoproso.com/el/resources",
    sq: "https://www.fahoproso.com/sq/resources",
  },
  },
};

export default function ResourcesPageSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Burime FAHOPROSO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Udhëzues dhe Burime për Pasuri të Paluajtshme
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Eksploroni informacione të dobishme rreth shitjes së pronave,
              investimeve dhe çështjeve të rëndësishme për pronarët në Michigan.
            </p>
          </div>
        </section>

        <ResourcesHub locale="sq" />
        <CTA locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}