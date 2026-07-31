import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about FAHOPROSO and our residential and commercial real estate investment approach in Grand Rapids, Michigan.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              About FAHOPROSO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Investing in Properties.
              <br />
              Creating Opportunities.
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Faithfull Home & Property Solutions, LLC provides practical,
              transparent, and professionally managed real estate investment
              solutions.
            </p>
          </div>
        </section>

        <About />
        <WhyChooseUs />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}