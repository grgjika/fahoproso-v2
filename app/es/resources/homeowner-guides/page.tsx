import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Guías para Propietarios",
  description:
    "Explore guías prácticas de FAHOPROSO para propietarios que están considerando vender una propiedad en Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/es/resources/homeowner-guides",
    languages: {
    "en-US": "https://www.fahoproso.com/resources/homeowner-guides",
    "es-US": "https://www.fahoproso.com/es/resources/homeowner-guides",
    "el-GR": "https://www.fahoproso.com/el/resources/homeowner-guides",
    sq: "https://www.fahoproso.com/sq/resources/homeowner-guides",
  },
  },
};

const guides = [
  {
    title: "Guía para Vendedores por Primera Vez",
    description:
      "Conozca los pasos principales para prepararse, evaluar sus opciones y entender el proceso de venta de una propiedad.",
    href: "/es/resources/first-time-home-seller-guide",
  },
  {
    title: "Reducción de Vivienda",
    description:
      "Información práctica para propietarios que están considerando mudarse a una vivienda más pequeña.",
    href: "/es/resources/downsizing-your-home",
  },
  {
    title: "Propiedades Heredadas y Sucesiones",
    description:
      "Conozca algunos de los aspectos importantes que pueden surgir al administrar o vender una propiedad heredada.",
    href: "/es/resources/probate-guide",
  },
  {
    title: "Guías de Michigan",
    description:
      "Explore información local para propietarios y vendedores de propiedades en diferentes comunidades de Michigan.",
    href: "/es/resources/michigan-guides",
  },
];

export default function HomeownerGuidesPageES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Recursos para Propietarios
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Guías para Propietarios
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Información práctica para ayudarle a comprender diferentes
              situaciones relacionadas con la propiedad y la venta de bienes
              raíces en Michigan.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.title}
                  href={guide.href}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-[#14213D]">
                    {guide.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {guide.description}
                  </p>

                  <p className="mt-6 font-semibold text-[#C9A227]">
                    Leer más →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA locale="es" />
      </main>

      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}