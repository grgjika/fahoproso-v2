"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setShowPhone(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[1000] w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="FAHOPROSO homepage"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="FAHOPROSO"
            width={290}
            height={70}
            priority
            className="h-auto w-[220px] md:w-[260px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 transition-colors duration-300 hover:text-[#C9A227]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-lg bg-[#C9A227] px-5 py-3 font-semibold text-slate-900 transition-all duration-300 hover:bg-[#b89220] hover:shadow-lg"
          >
            Contact Us
          </Link>

          {/* Desktop phone popup */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPhone((current) => !current)}
              aria-label="Show FAHOPROSO phone number"
              aria-expanded={showPhone}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </button>

            {showPhone && (
              <div className="absolute right-0 top-14 w-56 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Call Us 
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-900 transition hover:border-[#C9A227] hover:text-[#C9A227] lg:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#C9A227]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-3 rounded-lg bg-[#C9A227] px-5 py-3 text-center font-semibold text-slate-900 transition hover:bg-[#b89220]"
          >
            Contact Us
          </Link>

          <a
            href="tel:+16162754443"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-[#C9A227] hover:text-[#C9A227]"
          >
            <Phone className="h-5 w-5" />
            (616) 275-4443
          </a>
        </div>
      </div>
    </header>
  );
}