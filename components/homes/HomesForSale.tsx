"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BedDouble, Bath, Ruler, MapPin, ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { listings, SHOW_SAMPLES, type Listing } from "./listings";

const INTERVAL = 3500;

/** Photos that change on their own; pauses on hover/touch and for reduced motion. */
function Slides({
  photos,
  autoplay = true,
  className = "",
  sizes = "h-64",
}: {
  photos: Listing["photos"];
  autoplay?: boolean;
  className?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const count = photos.length;

  const go = useCallback((n: number) => setIndex((n + count) % count), [count]);

  useEffect(() => {
    if (!autoplay || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!paused.current && !document.hidden) setIndex((i) => (i + 1) % count);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [autoplay, count]);

  return (
    <div
      className={`group relative overflow-hidden bg-slate-200 ${sizes} ${className}`}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
    >
      {photos.map((p, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(index - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-[#14213D] opacity-0 shadow transition group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(index + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-[#14213D] opacity-0 shadow transition group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                aria-label={`Photo ${i + 1}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-[#E5C766]" : "w-2 bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Facts({ l }: { l: Listing }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-600">
      <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-[#C9A227]" />{l.beds} bed</span>
      <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-[#C9A227]" />{l.baths} bath</span>
      <span className="flex items-center gap-1.5"><Ruler className="h-4 w-4 text-[#C9A227]" />{l.sqft} sq ft</span>
    </div>
  );
}

function Details({ l, onClose }: { l: Listing; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[3100] flex overflow-y-auto bg-slate-950/75 px-4 py-6 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={l.title}
        onClick={(e) => e.stopPropagation()}
        className="relative m-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-2 ring-[#C9A227]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-[#14213D] shadow hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>
        <Slides photos={l.photos} sizes="h-64 sm:h-96" />
        <div className="p-6 sm:p-8">
          <p className="text-3xl font-bold text-[#14213D]">{l.price}</p>
          <h3 className="mt-1 text-xl font-semibold text-slate-800">{l.title}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-slate-600"><MapPin className="h-4 w-4 text-[#C9A227]" />{l.city}</p>
          <div className="mt-4"><Facts l={l} /></div>
          <p className="mt-5 leading-7 text-slate-700">{l.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact/"
              className="rounded-lg bg-[#C9A227] px-6 py-3 text-center font-bold text-[#14213D] transition hover:bg-[#E5C766]"
            >
              Ask about this house
            </Link>
            <a
              href="tel:+16162754443"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#14213D] px-6 py-3 font-bold text-[#14213D] transition hover:bg-[#14213D] hover:text-white"
            >
              <Phone className="h-5 w-5" /> (616) 275-4443
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomesForSale() {
  const [open, setOpen] = useState<Listing | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const shown = listings.filter((l) => SHOW_SAMPLES || !l.sample);

  return (
    <>
      <section className="bg-[#14213D] pb-16 pt-12 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">Homes for sale</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">Homes We Have Ready For You</h1>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Houses we bought, fixed up and now offer to local families and investors.
            Look at the photos, then tap Check it out.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((l) => (
            <article
              key={l.slug}
              className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative">
                <Slides photos={l.photos} />
                <span className="absolute left-3 top-3 rounded-full bg-[#C9A227] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#14213D]">
                  {l.tag}
                </span>
                {l.sample && (
                  <span className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Sample
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-2xl font-bold text-[#14213D]">{l.price}</p>
                <h2 className="mt-1 text-lg font-semibold text-slate-800">{l.title}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600"><MapPin className="h-4 w-4 text-[#C9A227]" />{l.city}</p>
                <div className="mt-3"><Facts l={l} /></div>
                <button
                  type="button"
                  onClick={() => setOpen(l)}
                  className="mt-5 w-full rounded-lg bg-[#14213D] px-5 py-3 font-bold text-white transition hover:bg-[#C9A227] hover:text-[#14213D]"
                >
                  Check it out
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl px-6 text-center text-slate-600">
          Don&apos;t see the right house? Call us at{" "}
          <a href="tel:+16162754443" className="font-semibold text-[#14213D] underline">(616) 275-4443</a>.
          New homes are added as soon as they are ready.
        </p>
      </section>

      {open && <Details l={open} onClose={close} />}
    </>
  );
}
