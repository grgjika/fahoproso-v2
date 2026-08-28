import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Servicios Inmobiliarios",
  description:
    "Explore los servicios de inversión inmobiliaria residencial, comercial y de propiedades de alquiler de FAHOPROSO en Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/es/services",
  },
};

export default function ServicesPageES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Nuestros Servicios
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Soluciones Inmobiliarias
              <br />
              Adaptadas a Sus Objetivos
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Evaluamos oportunidades residenciales, comerciales, de alquiler
              y desarrollo mientras ofrecemos soluciones inmobiliarias claras
              y prácticas.
            </p>
          </div>
        </section>

        <Services locale="es" />
        <HowItWorks locale="es" />
        <CTA locale="es" />
      </main>

      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}