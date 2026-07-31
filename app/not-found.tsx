import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center bg-slate-50 px-6 pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Error 404
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900 md:text-7xl">
            Page Not Found
          </h1>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            The page you are looking for may have been moved, renamed, or no
            longer exists.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-lg bg-[#C9A227] px-7 py-3 font-semibold text-slate-900 transition hover:bg-[#b89220]"
            >
              Return Home
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:border-[#C9A227] hover:text-[#C9A227]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}