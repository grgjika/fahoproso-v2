import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Guía de Inversiones Residenciales",
  description:
    "Explore los factores principales que los inversionistas pueden considerar al evaluar oportunidades de inversión residencial en Michigan.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/es/resources/residential-investments",
      languages: {
    "en-US": "https://www.fahoproso.com/resources/residential-investments",
    "es-US": "https://www.fahoproso.com/es/resources/residential-investments",
    "el-GR": "https://www.fahoproso.com/el/resources/residential-investments",
    sq: "https://www.fahoproso.com/sq/resources/residential-investments",
  },
  },
};

const factors = [
  {
    number: "01",
    title: "Ubicación y mercado",
    description:
      "Analice la ubicación de la propiedad, la demanda local, las ventas comparables y las características del vecindario. El mercado puede influir significativamente en el valor actual y futuro de una inversión.",
  },
  {
    number: "02",
    title: "Precio de adquisición",
    description:
      "El precio de compra puede determinar gran parte del potencial de una inversión. Compare el costo de adquisición con el valor actual de la propiedad y su posible valor después de mejoras.",
  },
  {
    number: "03",
    title: "Condición y reparaciones",
    description:
      "Evalúe el estado de la estructura, los sistemas principales y las mejoras necesarias. Una estimación realista de las reparaciones ayuda a evitar que los costos reduzcan el margen esperado.",
  },
  {
    number: "04",
    title: "Estrategia de inversión",
    description:
      "Determine si la propiedad se adapta mejor a una renovación y reventa, una estrategia de alquiler a largo plazo u otro objetivo de inversión antes de comprometer capital.",
  },
  {
    number: "05",
    title: "Costos totales",
    description:
      "Además del precio de compra y las reparaciones, considere financiamiento, impuestos, seguros, servicios públicos, costos de mantenimiento y gastos de cierre.",
  },
  {
    number: "06",
    title: "Salida y margen de seguridad",
    description:
      "Planifique cómo espera salir de la inversión y deje margen para cambios inesperados en costos, plazos o condiciones del mercado.",
  },
];

export default function ResidentialInvestmentsES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Perspectivas de Inversión
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Inversiones Residenciales
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Una inversión residencial sólida comienza con un análisis
              cuidadoso de la propiedad, los costos, el mercado y la estrategia
              antes de tomar una decisión.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Antes de invertir
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Evalúe el negocio completo, no solamente la propiedad
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Una propiedad puede parecer atractiva, pero el resultado de una
              inversión depende de mucho más que el precio de compra. Los
              costos de reparación, financiamiento, mantenimiento y venta
              también pueden afectar el rendimiento.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                Evaluación
              </p>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                6 factores importantes para analizar
              </h2>
            </div>

            <div className="mt-12 space-y-6">
              {factors.map((factor) => (
                <div
                  key={factor.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex md:gap-7"
                >
                  <div className="text-3xl font-bold text-[#C9A227]">
                    {factor.number}
                  </div>

                  <div className="mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-[#14213D]">
                      {factor.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {factor.description}
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
              Recordatorio
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Mantenga un margen de seguridad
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Las reparaciones, los plazos y las condiciones del mercado pueden
              cambiar. Utilizar estimaciones conservadoras y mantener reservas
              para gastos inesperados puede ayudar a reducir el riesgo de una
              inversión.
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