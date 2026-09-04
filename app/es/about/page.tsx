import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conozca FAHOPROSO y nuestro enfoque de inversión inmobiliaria residencial y comercial en Michigan.",
  alternates: {
  canonical: "https://www.fahoproso.com/es/about",
  languages: {
     "en-US": "https://www.fahoproso.com/about",
     "es-US": "https://www.fahoproso.com/es/about",
     "el-GR": "https://www.fahoproso.com/el/about",
     sq: "https://www.fahoproso.com/sq/about",
    },
  },
};

export default function AboutPageES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Sobre FAHOPROSO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Invirtiendo en Propiedades.
              <br />
              Creando Oportunidades.
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Faithfull Home & Property Solutions, LLC ofrece soluciones de
              inversión inmobiliaria prácticas, transparentes y gestionadas
              profesionalmente.
            </p>
          </div>
        </section>

        <About locale="es" />
        <WhyChooseUs locale="es" />
        <CTA locale="es" />
      </main>

      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}