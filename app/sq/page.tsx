import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: { absolute: "FAHOPROSO | Zgjidhje për Pasuri të Paluajtshme në Michigan" },

  description:
    "FAHOPROSO ndihmon pronarët në Michigan të shqyrtojnë mundësi të thjeshta dhe të qarta për shitjen e pronave të tyre.",

  alternates: {
    canonical: "https://www.fahoproso.com/sq/",
    languages: {
      "en-US": "https://www.fahoproso.com/",
      "x-default": "https://www.fahoproso.com/",
      "el-GR": "https://www.fahoproso.com/el/",
      "es-US": "https://www.fahoproso.com/es/",
      "sq": "https://www.fahoproso.com/sq/",
    },
  },
};

export default function AlbanianHome() {
  return (
    <>
      <Navbar locale="sq" />
      <Hero locale="sq" />
      <HomeSections locale="sq" />
      <CTA locale="sq" />
      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}