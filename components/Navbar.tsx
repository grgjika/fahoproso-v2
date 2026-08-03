"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  CircleHelp,
  FolderKanban,
  Home,
  MapPinned,
  Menu,
  Phone,
  X,
} from "lucide-react";

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];

const resourceNavigation = [
  {
    name: "All Resources",
    description: "Explore every guide and article",
    href: "/resources",
    icon: BookOpen,
  },
  {
    name: "Homeowner Guides",
    description: "Helpful information for property owners",
    href: "/resources/homeowner-guides",
    icon: Home,
  },
  {
    name: "Investment Insights",
    description: "Residential and commercial investing",
    href: "/resources/residential-investments",
    icon: BriefcaseBusiness,
  },
  {
    name: "Michigan Guides",
    description: "Explore the areas we currently serve",
    href: "/resources/michigan-guides",
    icon: MapPinned,
  },
  {
    name: "FAQs",
    description: "Answers to common property questions",
    href: "/faq",
    icon: CircleHelp,
  },
];

const additionalNavigation = [
  {
    name: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Service Areas",
    href: "/service-areas",
    icon: MapPinned,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showMobileResources, setShowMobileResources] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setShowPhone(false);
    setShowResources(false);
    setShowMobileResources(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[1000] w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="FAHOPROSO homepage"
          className="shrink-0"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="FAHOPROSO"
            width={290}
            height={70}
            priority
            className="h-auto w-[195px] sm:w-[220px] md:w-[245px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-medium text-slate-700 transition hover:text-[#C9A227] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button
              type="button"
              onClick={() => setShowResources((current) => !current)}
              aria-expanded={showResources}
              aria-haspopup="true"
              className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-[#C9A227]"
            >
              Resources

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  showResources ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full w-[390px] -translate-x-1/2 pt-5 transition-all duration-200 ${
                showResources
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
                <div className="px-3 pb-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                    Explore FAHOPROSO
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Guides, answers, projects, and service areas.
                  </p>
                </div>

                <div className="space-y-1">
                  {resourceNavigation.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-4 rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/40 hover:bg-[#FFF9EC] hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-[#C9A227]">
                          <Icon className="h-5 w-5 text-[#14213D]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-[#14213D]">
                            {item.name}
                          </p>

                          <p className="mt-0.5 text-sm text-slate-500">
                            {item.description}
                          </p>
                        </div>

                        <ArrowRight className="h-4 w-4 shrink-0 text-[#C9A227] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    );
                  })}
                </div>

                <div className="my-3 border-t border-slate-200" />

                <div className="grid grid-cols-2 gap-2">
                  {additionalNavigation.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227] hover:bg-slate-50 hover:text-[#14213D] hover:shadow-sm"
                      >
                        <Icon className="h-5 w-5 text-[#C9A227]" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="rounded-xl bg-[#C9A227] px-5 py-3 font-semibold text-[#14213D] transition hover:bg-[#b89220] hover:shadow-lg"
          >
            Contact Us
          </Link>

          {/* Phone Popup */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPhone((current) => !current)}
              aria-label="Show FAHOPROSO phone number"
              aria-expanded={showPhone}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
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
            ? "max-h-[950px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 sm:px-6">
          {mainNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#C9A227]"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Resources */}
          <button
            type="button"
            onClick={() =>
              setShowMobileResources((current) => !current)
            }
            aria-expanded={showMobileResources}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#C9A227]"
          >
            Resources

            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${
                showMobileResources ? "rotate-180" : ""
              }`}
            />
          </button>

          {showMobileResources && (
            <div className="ml-2 space-y-2 border-l-2 border-[#C9A227]/40 pl-3">
              {resourceNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm font-medium text-slate-600 transition hover:border-[#C9A227]/30 hover:bg-[#FFF9EC] hover:text-[#14213D]"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#C9A227]" />
                    {item.name}
                  </Link>
                );
              })}

              <div className="my-2 border-t border-slate-200" />

              {additionalNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#C9A227]"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#C9A227]" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-3 rounded-xl bg-[#C9A227] px-5 py-3 text-center font-semibold text-[#14213D] transition hover:bg-[#b89220]"
          >
            Contact Us
          </Link>

          <a
            href="tel:+16162754443"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-[#C9A227] hover:text-[#C9A227]"
          >
            <Phone className="h-5 w-5" />
            (616) 275-4443
          </a>
        </div>
      </div>
    </header>
  );
}