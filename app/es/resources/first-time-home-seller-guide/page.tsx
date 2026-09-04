import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Guía para Vendedores de Vivienda por Primera Vez",
  description:
    "Una guía práctica para propietarios que venden una vivienda por primera vez en Michigan, desde la preparación hasta el cierre.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/es/resources/first-time-home-seller-guide",
      languages: {
    "en-US": "https://www.fahoproso.com/resources/first-time-home-seller-guide",
    "es-US": "https://www.fahoproso.com/es/resources/first-time-home-seller-guide",
    "el-GR": "https://www.fahoproso.com/el/resources/first-time-home-seller-guide",
    sq: "https://www.fahoproso.com/sq/resources/first-time-home-seller-guide",
  },
  },
};

const steps = [
  {
    number: "01",
    title: "Entienda por qué quiere vender",
    description:
      "Antes de comenzar, considere sus objetivos, su plazo y lo que espera lograr con la venta. Esto puede ayudarle a decidir qué opción de venta tiene más sentido para usted.",
  },
  {
    number: "02",
    title: "Conozca el estado de su propiedad",
    description:
      "Revise la condición general de la vivienda y determine si necesita reparaciones, limpieza o actualizaciones. También puede considerar vender la propiedad tal como está.",
  },
  {
    number: "03",
    title: "Comprenda el valor de la propiedad",
    description:
      "El valor de una vivienda puede depender de su ubicación, condición, tamaño, ventas comparables cercanas y condiciones actuales del mercado.",
  },
  {
    number: "04",
    title: "Compare sus opciones de venta",
    description:
      "Puede vender con un agente, vender por su cuenta o considerar una venta directa a un comprador de bienes raíces. Cada opción tiene diferentes costos, tiempos y responsabilidades.",
  },
  {
    number: "05",
    title: "Revise cualquier oferta cuidadosamente",
    description:
      "No se enfoque solamente en el precio. Considere también la fecha de cierre, contingencias, costos, financiamiento y cualquier otra condición incluida en la oferta.",
  },
  {
    number: "06",
    title: "Prepárese para el cierre",
    description:
      "Durante el cierre se completan los documentos finales y se transfiere oficialmente la propiedad. Asegúrese de comprender los documentos antes de firmarlos.",
  },
];

export default function FirstTimeHomeSellerGuideES() {
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
              Guía para Vendedores de Vivienda por Primera Vez
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Vender una vivienda por primera vez puede parecer complicado.
              Comprender los pasos principales puede ayudarle a tomar decisiones
              con mayor confianza.
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
              Lo que debe saber antes de vender
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              No existe una única manera correcta de vender una propiedad.
              Dependiendo de su situación, puede priorizar obtener el precio más
              alto posible, vender rápidamente, evitar reparaciones o tener más
              flexibilidad con la fecha de cierre.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Comprender sus prioridades desde el principio puede hacer que el
              proceso sea mucho más sencillo.
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
                6 pasos para vendedores por primera vez
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
              Recuerde
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              No todas las ventas son iguales
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Una propiedad que necesita reparaciones, una vivienda heredada,
              una casa vacante o una propiedad de alquiler puede requerir un
              enfoque diferente. Compare sus opciones y elija la solución que
              mejor se adapte a sus circunstancias.
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