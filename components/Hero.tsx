"use client";

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-white sm:px-6 lg:px-8">

        <motion.h1
          className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
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
          className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We invest in residential and commercial properties while helping property owners find practical real estate solutions throughout Michigan.
        </motion.p>

        <motion.div
          className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:w-auto sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Get a Cash Offer
          </a>

          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-900 sm:w-auto"
          >
            Explore Our Services
          </a>
        </motion.div>

      </div>
    </section>
  );
}