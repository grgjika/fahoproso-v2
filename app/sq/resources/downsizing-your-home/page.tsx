import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Udhëzues për Kalimin në një Shtëpi më të Vogël",
  description:
    "Një udhëzues praktik për pronarët në Michigan që po konsiderojnë kalimin në një banesë më të vogël.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/sq/resources/downsizing-your-home",
      languages: {
    "en-US": "https://www.fahoproso.com/resources/downsizing-your-home",
    "es-US": "https://www.fahoproso.com/es/resources/downsizing-your-home",
    "el-GR": "https://www.fahoproso.com/el/resources/downsizing-your-home",
    sq: "https://www.fahoproso.com/sq/resources/downsizing-your-home",
  },
  },
};

const steps = [
  {
    number: "01",
    title: "Përcaktoni qëllimet tuaja",
    description:
      "Mendoni pse dëshironi të kaloni në një shtëpi më të vogël. Mund të dëshironi të ulni shpenzimet, të thjeshtoni mirëmbajtjen, të ndryshoni zonën ose të gjeni një shtëpi që përshtatet më mirë me nevojat tuaja aktuale.",
  },
  {
    number: "02",
    title: "Vendosni çfarë do të mbani",
    description:
      "Shikoni paraprakisht mobiliet, sendet personale dhe dokumentet tuaja. Ndani ato që dëshironi të mbani, dhuroni, shisni ose largoni.",
  },
  {
    number: "03",
    title: "Vlerësoni gjendjen e shtëpisë",
    description:
      "Vendosni nëse ka kuptim të bëni riparime ose përmirësime para shitjes. Në disa raste, shitja e pronës në gjendjen aktuale mund të jetë një alternativë më e thjeshtë.",
  },
  {
    number: "04",
    title: "Planifikoni shtëpinë tuaj të ardhshme",
    description:
      "Merrni parasysh madhësinë, vendndodhjen, kostot, aksesin dhe mirëmbajtjen e shtëpisë suaj të ardhshme para se të caktoni një afat për shitjen.",
  },
  {
    number: "05",
    title: "Koordinoni shitjen dhe zhvendosjen",
    description:
      "Një datë fleksibël mbylljeje mund t'ju ndihmojë të koordinoni më mirë shitjen e shtëpisë aktuale me zhvendosjen në shtëpinë tuaj të ardhshme.",
  },
];

export default function DownsizingYourHomeSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Udhëzues për Pronarët
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Kalimi në një Shtëpi më të Vogël
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Kalimi në një banesë më të vogël mund ta thjeshtojë jetën tuaj,
              por kërkon planifikim. Këta hapa mund t'ju ndihmojnë ta
              organizoni procesin.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Para se të filloni
            </p>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Planifikoni para se të merrni vendimin
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Një shtëpi më e vogël mund të nënkuptojë më pak mirëmbajtje,
              shpenzime më të ulëta dhe një banesë më të përshtatshme për
              situatën tuaj aktuale. Megjithatë, është e rëndësishme të
              planifikoni si shitjen e shtëpisë aktuale, ashtu edhe hapin tuaj
              të ardhshëm.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                Procesi
              </p>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                5 hapa për një kalim më të lehtë
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
              Një mundësi tjetër
            </p>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Shqyrtoni të gjitha mundësitë e shitjes
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nëse përgatitja e shtëpisë për një shitje tradicionale kërkon
              shumë punë, mund të shqyrtoni edhe alternativa të tjera, duke
              përfshirë shitjen direkte të pronës në gjendjen aktuale.
              Krahasoni çmimin, kostot, kohën dhe lehtësinë para se të merrni
              vendimin.
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