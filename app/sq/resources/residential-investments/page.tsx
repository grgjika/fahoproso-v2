import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Udhëzues për Investimet Rezidenciale",
  description:
    "Eksploroni faktorët kryesorë që investitorët mund të marrin parasysh gjatë vlerësimit të mundësive për investime rezidenciale në Michigan.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/sq/resources/residential-investments",
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
    title: "Vendndodhja dhe tregu",
    description:
      "Analizoni vendndodhjen e pronës, kërkesën lokale, shitjet e krahasueshme dhe karakteristikat e zonës. Tregu mund të ndikojë ndjeshëm në vlerën aktuale dhe të ardhshme të një investimi.",
  },
  {
    number: "02",
    title: "Çmimi i blerjes",
    description:
      "Çmimi i blerjes mund të përcaktojë një pjesë të madhe të potencialit të investimit. Krahasoni koston e blerjes me vlerën aktuale dhe vlerën e mundshme të pronës pas përmirësimeve.",
  },
  {
    number: "03",
    title: "Gjendja dhe riparimet",
    description:
      "Vlerësoni gjendjen e strukturës, sistemeve kryesore dhe punimeve të nevojshme. Një vlerësim realist i riparimeve ndihmon që kostot të mos zvogëlojnë marzhin e pritshëm.",
  },
  {
    number: "04",
    title: "Strategjia e investimit",
    description:
      "Përcaktoni nëse prona është më e përshtatshme për rinovim dhe rishitje, qira afatgjatë ose një strategji tjetër investimi para se të angazhoni kapital.",
  },
  {
    number: "05",
    title: "Kostot totale",
    description:
      "Përveç çmimit të blerjes dhe riparimeve, merrni parasysh financimin, taksat, sigurimin, shërbimet, mirëmbajtjen dhe kostot e mbylljes.",
  },
  {
    number: "06",
    title: "Strategjia e daljes dhe marzhi i sigurisë",
    description:
      "Planifikoni mënyrën se si prisni ta përfundoni investimin dhe lini hapësirë për ndryshime të papritura në kosto, afate ose kushtet e tregut.",
  },
];

export default function ResidentialInvestmentsSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Informacion për Investime
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Investimet Rezidenciale
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Një investim i mirë rezidencial fillon me një analizë të
              kujdesshme të pronës, kostove, tregut dhe strategjisë përpara se
              të merret një vendim.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Para se të investoni
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Vlerësoni të gjithë marrëveshjen, jo vetëm pronën
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Një pronë mund të duket tërheqëse, por rezultati i një investimi
              varet nga shumë më tepër sesa çmimi i blerjes. Riparimet,
              financimi, mirëmbajtja dhe kostot e shitjes mund të ndikojnë
              gjithashtu në kthimin e investimit.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                Vlerësimi
              </p>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                6 faktorë të rëndësishëm për t&apos;u analizuar
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
              Kujtesë
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Mbani një marzh sigurie
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Riparimet, afatet dhe kushtet e tregut mund të ndryshojnë.
              Përdorimi i vlerësimeve konservatore dhe mbajtja e rezervave për
              shpenzime të paparashikuara mund të ndihmojnë në uljen e rrezikut
              të investimit.
            </p>
          </div>
        </section>

        <CTA locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}