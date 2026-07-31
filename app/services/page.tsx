import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Real Estate Services",
  description:
    "Explore FAHOPROSO residential, commercial, rental property, and real estate investment services in Grand Rapids, Michigan.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Our Services
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Real Estate Solutions
              <br />
              Built Around Your Goals
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              We evaluate residential, commercial, rental, and development
              opportunities while providing clear and practical property
              solutions.
            </p>
          </div>
        </section>

        <Services />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}