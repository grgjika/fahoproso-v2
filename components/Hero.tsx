'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="FAHOPROSO Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/70" />

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
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition">
            Get a Cash Offer
          </button>

          <button className="rounded-lg border border-slate-600 px-8 py-4 font-semibold hover:border-white transition">
            Explore Investments
          </button>
        </motion.div>

      </div>

    </section>
  );
}