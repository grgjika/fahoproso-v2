import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Projects />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}