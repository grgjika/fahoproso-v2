import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Udhëzues për Pronat e Trashëguara dhe Probate",
  description:
    "Një udhëzues praktik për pronarët dhe familjet në Michigan që po menaxhojnë një pronë të trashëguar ose një proces probate.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/resources/probate-guide",
  },
};

const steps = [
  {
    number: "01",
    title: "Konfirmoni kush ka të drejtën ligjore mbi pronën",
    description:
      "Para se të shisni ose të merrni vendime të rëndësishme, konfirmoni kush ka autoritetin ligjor për të administruar pronën. Kjo mund të varet nga testamenti, gjykata ose dokumente të tjera ligjore.",
  },
  {
    number: "02",
    title: "Kontrolloni gjendjen e pronës",
    description:
      "Shikoni gjendjen e shtëpisë dhe përcaktoni nëse nevojiten riparime, pastrim, mirëmbajtje ose masa shtesë mbrojtjeje gjatë procesit.",
  },
  {
    number: "03",
    title: "Identifikoni kostot dhe detyrimet",
    description:
      "Kontrolloni taksat, sigurimin, shërbimet, kreditë hipotekore, barrët dhe kostot e tjera që mund të ndikojnë te prona para një shitjeje të mundshme.",
  },
  {
    number: "04",
    title: "Komunikoni me trashëgimtarët",
    description:
      "Komunikimi i qartë mund të ndihmojë në shmangien e vonesave. Sigurohuni që personat e përfshirë të kuptojnë mundësitë dhe përgjegjësitë që lidhen me pronën.",
  },
  {
    number: "05",
    title: "Krahasoni opsionet e shitjes",
    description:
      "Mund të konsideroni një shitje tradicionale, shitjen e pronës në gjendjen aktuale ose një shitje direkte. Zgjedhja më e mirë varet nga gjendja e pronës, koha në dispozicion dhe nevojat e familjes.",
  },
  {
    number: "06",
    title: "Koordinoni mbylljen me procesin ligjor",
    description:
      "Para mbylljes, konfirmoni që janë përmbushur kërkesat e nevojshme ligjore për transferimin korrekt të pronës.",
  },
];

export default function ProbateGuideSQ() {
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
              Pronat e Trashëguara dhe Probate
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Menaxhimi i një prone të trashëguar mund të përfshijë vendime
              ligjore, financiare dhe praktike. Kuptimi i hapave kryesorë mund
              t&apos;ju ndihmojë ta menaxhoni procesin me më shumë qartësi.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Para se të merrni një vendim
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Kuptoni fillimisht situatën ligjore
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Një pronë e trashëguar nuk mund të shitet gjithmonë menjëherë.
              Në varësi të rrethanave, mund të jetë e nevojshme të përfundojnë
              disa hapa ligjorë para transferimit të pronës.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nëse ka paqartësi rreth autoritetit ligjor, trashëgimtarëve,
              titullit ose procesit probate, konsideroni të konsultoheni me një
              avokat ose profesionist tjetër të kualifikuar.
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
                6 hapa të rëndësishëm për t&apos;u konsideruar
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
              Një mundësi e mundshme
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Shitja e pronës së trashëguar në gjendjen aktuale
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nëse prona ka nevojë për riparime të konsiderueshme, pastrim ose
              mirëmbajtje, një shitje direkte në gjendjen aktuale mund të jetë
              një alternativë ndaj përgatitjes së saj për një shitje
              tradicionale. Krahasoni gjithmonë çmimin, kostot, kohën dhe
              lehtësinë.
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