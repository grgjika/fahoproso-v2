import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Guía para Mudarse a una Vivienda Más Pequeña",
  description:
    "Una guía práctica para propietarios en Michigan que están considerando mudarse a una vivienda más pequeña.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/es/resources/downsizing-your-home",
  },
};

const steps = [
  {
    number: "01",
    title: "Defina sus objetivos",
    description:
      "Piense por qué quiere mudarse a una vivienda más pequeña. Puede buscar reducir gastos, simplificar el mantenimiento, cambiar de ubicación o encontrar una vivienda que se adapte mejor a sus necesidades actuales.",
  },
  {
    number: "02",
    title: "Decida qué conservar",
    description:
      "Revise sus muebles, pertenencias y documentos con anticipación. Separe lo que desea conservar, donar, vender o desechar para evitar tomar todas las decisiones al último momento.",
  },
  {
    number: "03",
    title: "Evalúe la condición de su vivienda",
    description:
      "Determine si tiene sentido hacer reparaciones o mejoras antes de vender. En algunas situaciones, vender la propiedad tal como está puede ser una alternativa más sencilla.",
  },
  {
    number: "04",
    title: "Planifique su próxima vivienda",
    description:
      "Considere el tamaño, la ubicación, los costos, la accesibilidad y el mantenimiento de su próxima vivienda antes de comprometerse con una fecha de venta.",
  },
  {
    number: "05",
    title: "Coordine la venta y la mudanza",
    description:
      "Una fecha de cierre flexible puede ayudarle a coordinar mejor la venta de su vivienda actual con la mudanza a su próximo hogar.",
  },
];

export default function DownsizingYourHomeES() {
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
              Mudarse a una Vivienda Más Pequeña
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Reducir el tamaño de su vivienda puede simplificar su estilo de
              vida, pero también requiere planificación. Estos pasos pueden
              ayudarle a organizar el proceso.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Antes de comenzar
            </p>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Planifique antes de tomar una decisión
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mudarse a una vivienda más pequeña puede significar menos
              mantenimiento, menores gastos y una propiedad más adecuada para
              su situación actual. Sin embargo, es importante considerar tanto
              la venta de su vivienda actual como su próximo paso.
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
                5 pasos para una transición más sencilla
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
              Una opción adicional
            </p>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Considere todas sus opciones de venta
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Si preparar la vivienda para una venta tradicional representa
              demasiado trabajo, puede considerar otras opciones, incluida una
              venta directa de la propiedad tal como está. Compare el precio,
              los costos, el tiempo y la conveniencia antes de decidir.
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