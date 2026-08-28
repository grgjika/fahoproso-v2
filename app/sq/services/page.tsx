import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Shërbimet e Pasurive të Paluajtshme",
  description:
    "Eksploroni shërbimet e FAHOPROSO për investime rezidenciale, komerciale dhe prona me qira në Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/services",
  },
};

export default function ServicesPageSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Shërbimet Tona
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Zgjidhje për Pasuritë e Paluajtshme
              <br />
              Të Përshtatura me Objektivat Tuaja
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Ne vlerësojmë mundësi rezidenciale, komerciale, prona me qira dhe
              zhvillimi, duke ofruar zgjidhje të qarta dhe praktike për pasuritë
              e paluajtshme.
            </p>
          </div>
        </section>

        <Services locale="sq" />
        <HowItWorks locale="sq" />
        <CTA locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}