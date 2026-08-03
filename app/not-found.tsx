import Link from "next/link";
import { ArrowRight, Home, MapPinned } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden bg-[#14213D] py-24 text-white sm:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full border border-white" />
            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full border border-[#C9A227]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#C9A227]">
              <Home className="h-10 w-10 text-[#14213D]" />
            </div>

            <p className="mt-8 font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Error 404
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
              This Page Could Not Be Found
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              The page may have moved, the address may be incorrect, or the
              content may no longer be available.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white sm:w-auto"
              >
                Return Home
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/resources"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#14213D] sm:w-auto"
              >
                Explore Resources
                <MapPinned className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-[#14213D] sm:text-4xl">
              Looking for Property Information?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Visit our service areas, homeowner guides, or contact page to
              continue exploring FAHOPROSO.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/service-areas"
                className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-[#14213D] transition hover:bg-[#C9A227]"
              >
                Service Areas
              </Link>

              <Link
                href="/resources/homeowner-guides"
                className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-[#14213D] transition hover:bg-[#C9A227]"
              >
                Homeowner Guides
              </Link>

              <Link
                href="/contact"
                className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-[#14213D] transition hover:bg-[#C9A227]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}