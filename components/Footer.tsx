"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <footer className="border-t border-slate-200 bg-neutral-200 text-slate-00">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">

        {/* Company */}
        <div>
          <Image
            src="/images/logo-transparent.png"
            alt="FAHOPROSO"
            width={250}
            height={70}
            className="mb-6 h-auto"
          />

          <p className="leading-7 text-slate-600">
            Investing in Real Estate.
            <br />
            Creating Opportunities.
          </p>

          <div className="mt-6 h-1 w-16 rounded-full bg-[#C9A227]" />

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[#C9A227]" />
              <span>Grand Rapids, Michigan</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#C9A227]" />

              <button
                type="button"
                onClick={() => setShowPhone((current) => !current)}
                className="transition hover:text-[#C9A227]"
              >
                Show phone number
              </button>
            </div>

            {showPhone && (
              <div className="ml-8 rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm">
                <a
                  href="tel:+16162754443"
                  className="font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                >
                  (616) 275-4443
                </a>
              </div>
            )}

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#C9A227]" />

              <a
                href="mailto:info@fahoproso.com"
                className="transition hover:text-[#C9A227]"
              >
                info@fahoproso.com
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Navigation
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#C9A227]" />

          <ul className="mt-6 space-y-3">
            <li>
              <Link href="/" className="transition hover:text-[#C9A227]">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="transition hover:text-[#C9A227]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="transition hover:text-[#C9A227]"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="transition hover:text-[#C9A227]"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/faq"
                className="transition hover:text-[#C9A227]"
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition hover:text-[#C9A227]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Services
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#C9A227]" />

          <ul className="mt-6 space-y-3">
            <li>Residential Investments</li>
            <li>Commercial Real Estate</li>
            <li>Rental Properties</li>
            <li>Property Solutions</li>
          </ul>
        </div>

        {/* Service Areas */}
<div>
  <h3 className="text-xl font-bold text-slate-900">
    Service Areas
  </h3>

  <div className="mt-3 h-1 w-12 rounded-full bg-[#C9A227]" />

  <ul className="mt-6 space-y-3">
    <li>
      <Link
        href="/sell-my-house-kent-county"
        className="transition hover:text-[#C9A227]"
      >
        Kent County
      </Link>
    </li>

    <li>
      <Link
        href="/sell-my-house-ottawa-county"
        className="transition hover:text-[#C9A227]"
      >
        Ottawa County
      </Link>
    </li>

    <li>
      <Link
        href="/sell-my-house-grand-rapids"
        className="transition hover:text-[#C9A227]"
      >
        Grand Rapids
      </Link>
    </li>

    <li>
      <Link
        href="/sell-my-house-troy"
        className="transition hover:text-[#C9A227]"
      >
        Troy
      </Link>
    </li>

    <li>
      <Link
        href="/sell-my-house-michigan"
        className="transition hover:text-[#C9A227]"
      >
        Michigan
      </Link>
    </li>
  </ul>
</div>

        {/* Connect */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Connect
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#C9A227]" />

          <div className="mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/Fahoproso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit FAHOPROSO on Facebook"
              className="rounded-full border border-slate-300 p-3 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
            >
              <Globe className="h-5 w-5" />
            </a>

             <Link
               href="/contact"
               aria-label="Contact FAHOPROSO"
               className="rounded-full border border-slate-300 p-3 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
>
               <Mail className="h-5 w-5" />
             </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPhone((current) => !current)}
                aria-label="Show FAHOPROSO phone number"
                aria-expanded={showPhone}
                className="rounded-full border border-slate-300 p-3 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
              >
                <Phone className="h-5 w-5" />
              </button>

              {showPhone && (
                <div className="absolute bottom-14 right-0 w-52 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Call FAHOPROSO
                  </p>

                  <a
                    href="tel:+16162754443"
                    className="mt-2 block text-lg font-bold text-[#14213D] transition hover:text-[#C9A227]"
                  >
                    (616) 275-4443
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row">
  <p>
    © 2026 FAHOPROSO | Faithfull Home & Property Solutions, LLC.
    All Rights Reserved.
  </p>

  <div className="flex gap-6">
    <Link
      href="/privacy"
      className="transition hover:text-[#C9A227]"
    >
      Privacy Policy
    </Link>

    <Link
      href="/terms"
      className="transition hover:text-[#C9A227]"
    >
      Terms & Conditions
    </Link>
  </div>
</div>
    </footer>
  );
}