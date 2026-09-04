import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Guías de Bienes Raíces de Michigan",
  description:
    "Explore información local para propietarios y vendedores de propiedades en Grand Rapids, Kent County, Ottawa County, Troy y otras comunidades de Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/es/resources/michigan-guides",
    languages: {
    "en-US": "https://www.fahoproso.com/resources/michigan-guides",
    "es-US": "https://www.fahoproso.com/es/resources/michigan-guides",
    "el-GR": "https://www.fahoproso.com/el/resources/michigan-guides",
    sq: "https://www.fahoproso.com/sq/resources/michigan-guides",
  },
  },
};

const areas = [
  {
    title: "Grand Rapids",
    description:
      "Información para propietarios que están considerando vender una vivienda o propiedad en Grand Rapids.",
    href: "/sell-my-house-grand-rapids",
  },
  {
    title: "Kent County",
    description:
      "Explore información para propietarios y vendedores de propiedades en Kent County y sus comunidades.",
    href: "/sell-my-house-kent-county",
  },
  {
    title: "Ottawa County",
    description:
      "Información para propietarios que están evaluando sus opciones de venta en Ottawa County.",
    href: "/sell-my-house-ottawa-county",
  },
  {
    title: "Troy",
    description:
      "Recursos para propietarios que están considerando vender una vivienda o propiedad en Troy, Michigan.",
    href: "/sell-my-house-troy",
  },
];

export default function MichiganGuidesES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Recursos Locales
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Guías de Michigan
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore información para propietarios y vendedores de propiedades
              en las comunidades de Michigan donde FAHOPROSO se enfoca.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Conocimiento local
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Cada mercado inmobiliario es diferente
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              La ubicación puede influir en el valor de una propiedad, la
              demanda de compradores, el tiempo necesario para vender y las
              opciones disponibles para el propietario.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nuestras guías locales ofrecen un punto de partida para comprender
              algunas de las áreas de Michigan en las que nos enfocamos.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                Áreas de Michigan
              </p>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                Explore nuestras guías locales
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {areas.map((area) => (
                <Link
                  key={area.title}
                  href={area.href}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <p className="mt-6 font-semibold text-[#C9A227]">
                    Explorar el área →
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