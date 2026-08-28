import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Rreth Nesh",
  description:
    "Mësoni më shumë rreth FAHOPROSO dhe qasjes sonë ndaj investimeve në pasuri të paluajtshme rezidenciale dhe komerciale në Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/about",
  },
};

export default function AboutPageSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Rreth FAHOPROSO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Investojmë në Prona.
              <br />
              Krijojmë Mundësi.
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Faithfull Home & Property Solutions, LLC ofron zgjidhje praktike,
              transparente dhe të menaxhuara profesionalisht për investime në
              pasuri të paluajtshme.
            </p>
          </div>
        </section>

        <About locale="sq" />
        <WhyChooseUs locale="sq" />
        <CTA locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}