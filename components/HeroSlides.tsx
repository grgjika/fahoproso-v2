"use client";

import { useEffect, useState } from "react";

/**
 * Front-page pictures that change by themselves (quick cross-fade).
 * To change a picture: replace its three files in /public/images/hero/
 * (home-N-640.jpg 640 px wide, home-N-1100.jpg 1100 px, home-N.jpg full size
 * with its width in `w` below). To add one, add a line below. With a single
 * picture nothing rolls. `pos` keeps the subject in view when a phone crops it.
 * Only the first picture loads at once; the rest load after the page is ready,
 * so the first screen stays fast.
 */
const slides = [
  { base: "/images/hero/home-1", w: 1500, pos: "50% 50%", alt: "Craftsman-style home with a front porch and two-car garage" },
  { base: "/images/hero/home-2", w: 1500, pos: "50% 50%", alt: "Cozy gray cottage with a front porch in autumn" },
  { base: "/images/hero/home-3", w: 1500, pos: "50% 50%", alt: "Two-story stone home at sunset" },
  { base: "/images/hero/home-4", w: 1500, pos: "50% 50%", alt: "Large stone and timber home with a three-car garage" },
];

const INTERVAL = 3500; // ms between pictures

export default function HeroSlides() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id: number | undefined;
    const start = () => {
      setReady(true);
      id = window.setInterval(() => {
        if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
      }, INTERVAL);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      if (id) window.clearInterval(id);
      window.removeEventListener("load", start);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0">
        {slides.map((s, i) => (i === 0 || ready ? (
          // Plain <img> so phones download a small version of each picture
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.base}
            src={`${s.base}-1100.jpg`}
            srcSet={`${s.base}-640.jpg 640w, ${s.base}-1100.jpg 1100w, ${s.base}.jpg ${s.w}w`}
            sizes="100vw"
            alt={i === index ? s.alt : ""}
            aria-hidden={i !== index}
            width={1500}
            height={844}
            decoding="async"
            loading={i === 0 ? "eager" : "lazy"}
            style={{ objectPosition: s.pos }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null))}
      </div>

      {slides.length > 1 && (
      <div
        className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        role="group"
        aria-label="Home pictures"
      >
        {slides.map((s, i) => (
          <button
            key={s.base}
            type="button"
            aria-label={`Show picture ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full shadow transition-all ${
              i === index ? "w-7 bg-[#14213D]" : "w-2.5 bg-white/80"
            }`}
          />
        ))}
      </div>
      )}
    </>
  );
}
