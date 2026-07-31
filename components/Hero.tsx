'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24"
    >

      <Image
        src="/images/hero.jpg"
        alt="FAHOPROSO Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        <motion.h1
          className="text-6xl md:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Investing in
          <span className="text-blue-500"> Real Estate</span>
          <br />
          Creating Opportunities.
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-xl text-slate-300 leading-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We acquire, renovate, develop, and manage residential and commercial
          properties while delivering innovative real estate investment solutions.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
    href="#contact"
    className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
  >
    Get a Cash Offer
  </a>

  <a
    href="#services"
    className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
  >
    Explore Our Services
  </a>
</motion.div>

      </div>

    </section>
  );
}