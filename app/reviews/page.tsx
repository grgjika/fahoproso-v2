import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Customer Reviews | FAHOPROSO",
  description:
    "Customer reviews and feedback for Faithfull Home & Property Solutions, LLC.",
};

export default function ReviewsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Customer Reviews
            </p>

            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              Reviews Coming Soon
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              As FAHOPROSO completes projects and serves more property owners,
              we will share genuine customer feedback here.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
            >
              Contact FAHOPROSO
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}