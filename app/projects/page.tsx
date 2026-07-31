import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Real Estate Projects",
  description:
    "Explore FAHOPROSO residential and commercial real estate projects and investment opportunities.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Our Projects
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Properties and
              <br />
              Investment Opportunities
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Explore the residential, commercial, and development
              opportunities we evaluate, improve, and manage.
            </p>
          </div>
        </section>

        <Projects />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}