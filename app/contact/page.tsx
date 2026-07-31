import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact FAHOPROSO to discuss selling a property, receiving a cash offer, investing, or partnering on residential and commercial real estate opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
         <section className="flex min-h-[420px] items-center bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Let&apos;s Discuss Your
              <br />
              Real Estate Goals
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Tell us about your property, investment opportunity, or
              partnership goals. Our team will review your information and
              follow up with you.
            </p>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}