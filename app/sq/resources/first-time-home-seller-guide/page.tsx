import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Udhëzues për Shitësit e Shtëpisë për Herë të Parë",
  description:
    "Një udhëzues praktik për pronarët që po shesin një shtëpi për herë të parë në Michigan, nga përgatitja deri në mbylljen e shitjes.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/sq/resources/first-time-home-seller-guide",
  },
};

const steps = [
  {
    number: "01",
    title: "Kuptoni pse dëshironi të shisni",
    description:
      "Para se të filloni, mendoni për qëllimet tuaja, afatin kohor dhe atë që dëshironi të arrini nga shitja. Kjo mund t'ju ndihmojë të zgjidhni mënyrën më të përshtatshme të shitjes.",
  },
  {
    number: "02",
    title: "Kuptoni gjendjen e pronës suaj",
    description:
      "Shikoni gjendjen e përgjithshme të shtëpisë dhe përcaktoni nëse nevojiten riparime, pastrim ose përmirësime. Mund të konsideroni gjithashtu shitjen e pronës në gjendjen aktuale.",
  },
  {
    number: "03",
    title: "Kuptoni vlerën e pronës",
    description:
      "Vlera e një shtëpie mund të ndikohet nga vendndodhja, gjendja, madhësia, shitjet e krahasueshme pranë saj dhe kushtet aktuale të tregut.",
  },
  {
    number: "04",
    title: "Krahasoni mënyrat e shitjes",
    description:
      "Mund të shisni përmes një agjenti, ta shisni vetë ose të konsideroni një shitje direkte tek një blerës pronash. Çdo opsion ka kosto, afate dhe përgjegjësi të ndryshme.",
  },
  {
    number: "05",
    title: "Shqyrtoni çdo ofertë me kujdes",
    description:
      "Mos shikoni vetëm çmimin. Merrni parasysh gjithashtu datën e mbylljes, kushtet, kostot, financimin dhe çdo term tjetër të përfshirë në ofertë.",
  },
  {
    number: "06",
    title: "Përgatituni për mbylljen",
    description:
      "Gjatë mbylljes plotësohen dokumentet përfundimtare dhe prona transferohet zyrtarisht. Sigurohuni që t'i kuptoni dokumentet para se t'i nënshkruani.",
  },
];

export default function FirstTimeHomeSellerGuideSQ() {
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
              Udhëzues për Shitësit e Shtëpisë për Herë të Parë
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Shitja e një shtëpie për herë të parë mund të duket e ndërlikuar.
              Kuptimi i hapave kryesorë mund t'ju ndihmojë të merrni vendime me
              më shumë siguri.
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
              Çfarë duhet të dini para se të shisni
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nuk ekziston vetëm një mënyrë e duhur për të shitur një pronë.
              Në varësi të situatës suaj, mund të keni prioritet çmimin më të
              lartë të mundshëm, një shitje të shpejtë, shmangien e riparimeve
              ose fleksibilitetin me datën e mbylljes.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Kuptimi i prioriteteve tuaja që në fillim mund ta bëjë procesin
              shumë më të thjeshtë.
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
                6 hapa për shitësit për herë të parë
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
              Mbani parasysh
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Jo çdo shitje është e njëjtë
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Një pronë që ka nevojë për riparime, një shtëpi e trashëguar, një
              pronë bosh ose një pronë me qira mund të kërkojë një qasje
              ndryshe. Krahasoni mundësitë tuaja dhe zgjidhni zgjidhjen që
              përshtatet më mirë me situatën tuaj.
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