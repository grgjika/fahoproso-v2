import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Guía de Sucesiones y Propiedades Heredadas",
  description:
    "Una guía práctica para propietarios y familias en Michigan que están manejando una propiedad heredada o un proceso de sucesión.",
  alternates: {
    canonical: "https://www.fahoproso.com/es/resources/probate-guide",
    languages: {
    "en-US": "https://www.fahoproso.com/resources/probate-guide",
    "es-US": "https://www.fahoproso.com/es/resources/probate-guide",
    "el-GR": "https://www.fahoproso.com/el/resources/probate-guide",
    sq: "https://www.fahoproso.com/sq/resources/probate-guide",
  },
  },
};

const steps = [
  {
    number: "01",
    title: "Confirme quién tiene autoridad sobre la propiedad",
    description:
      "Antes de vender o tomar decisiones importantes, confirme quién tiene autoridad legal para administrar la propiedad. Esto puede depender del testamento, del tribunal sucesorio o de otros documentos legales.",
  },
  {
    number: "02",
    title: "Revise el estado de la propiedad",
    description:
      "Inspeccione la vivienda y determine si necesita reparaciones, limpieza, mantenimiento o protección adicional mientras se resuelve el proceso de sucesión.",
  },
  {
    number: "03",
    title: "Identifique gastos y obligaciones",
    description:
      "Revise impuestos, seguros, servicios públicos, hipotecas, gravámenes y otros gastos que puedan afectar la propiedad antes de una posible venta.",
  },
  {
    number: "04",
    title: "Hable con los herederos o personas involucradas",
    description:
      "Una comunicación clara puede ayudar a evitar retrasos. Asegúrese de que las personas involucradas comprendan las opciones y las responsabilidades relacionadas con la propiedad.",
  },
  {
    number: "05",
    title: "Compare las opciones de venta",
    description:
      "Puede considerar una venta tradicional, vender la propiedad tal como está o explorar una venta directa. La mejor opción dependerá del estado de la vivienda, el tiempo disponible y las necesidades de la familia.",
  },
  {
    number: "06",
    title: "Coordine el cierre con el proceso legal",
    description:
      "Antes del cierre, confirme que se hayan cumplido los requisitos legales necesarios para transferir correctamente la propiedad.",
  },
];

export default function ProbateGuideES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Guía para Propietarios
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Propiedades Heredadas y Sucesiones
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Administrar una propiedad heredada puede incluir decisiones
              legales, financieras y prácticas. Comprender los pasos principales
              puede ayudarle a manejar el proceso con mayor claridad.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Antes de tomar una decisión
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Primero comprenda la situación legal
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Una propiedad heredada no siempre puede venderse inmediatamente.
              Dependiendo de las circunstancias, puede ser necesario completar
              ciertos pasos legales antes de transferir la propiedad.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Si existe alguna duda sobre autoridad legal, herederos, título o
              sucesión, considere hablar con un abogado u otro profesional
              calificado antes de continuar.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                El proceso
              </p>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                6 pasos importantes a considerar
              </h2>
            </div>

            <div className="mt-12 space-y-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex md:gap-7"
                >
                  <div className="text-3xl font-bold text-[#C9A227]">
                    {step.number}
                  </div>

                  <div className="mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-[#14213D]">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Una opción posible
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Vender una propiedad heredada tal como está
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Si la vivienda necesita reparaciones, limpieza o mantenimiento
              significativo, una venta directa tal como está puede ser una
              alternativa a preparar la propiedad para una venta tradicional.
              Compare siempre el precio, los costos, el tiempo y la conveniencia.
            </p>
          </div>
        </section>

        <CTA locale="es" />
      </main>

      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}