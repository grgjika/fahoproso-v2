"use client";

import Image from "next/image";
import {
  PhoneCall,
  BadgeDollarSign,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description:
      "Reach out by phone or complete our property form. We'll gather a few details about your property and goals.",
  },
  {
    icon: BadgeDollarSign,
    title: "Receive a Fair Cash Offer",
    description:
      "We evaluate your property and present a fair, no-obligation cash offer with complete transparency.",
  },
  {
    icon: Handshake,
    title: "Close on Your Schedule",
    description:
      "Choose the closing date that works best for you. We handle the paperwork for a smooth and stress-free transaction.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      {/* Background Image */}
      <Image
        src="/images/process-background.jpg"
        alt=""
        fill
        priority={false}
        className="object-cover opacity-[0.05]"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/90" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            A Simple and Straightforward
            <br />
            Selling Process
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Selling your property doesn't have to be stressful.
            Our process is designed to be fast, transparent,
            and tailored to your timeline.
          </p>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group rounded-2xl border bg-zinc-300 bg-white/95 p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C9A227]/10 transition-all duration-300 group-hover:bg-[#C9A227]">
                  <Icon className="h-8 w-8 text-[#C9A227] group-hover:text-white" />
                </div>

                <span className="mt-6 block text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                  Step {index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-24" />
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}