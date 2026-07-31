import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about selling property, cash offers, closing timelines, fees, and FAHOPROSO real estate services.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Frequently Asked Questions
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Clear Answers.
              <br />
              Simple Process.
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Learn more about our property-buying process, cash offers,
              closing timelines, fees, and the types of properties we consider.
            </p>
          </div>
        </section>

        <FAQ />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}