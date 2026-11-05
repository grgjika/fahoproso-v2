import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.fahoproso.com/",
    languages: {
      "en-US": "https://www.fahoproso.com/",
      "es-US": "https://www.fahoproso.com/es/",
      "el-GR": "https://www.fahoproso.com/el/",
      sq: "https://www.fahoproso.com/sq/",
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeSections />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}