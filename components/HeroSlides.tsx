"use client";

import { useEffect, useState } from "react";

/**
 * Four home pictures that change by themselves (quick cross-fade). They are
 * illustrations of typical Michigan homes: replace the files in
 * /public/images/hero/ with real photos (same names) when available.
 * Each picture has 640 / 1100 / 1920 px versions so phones load a small one.
 * `pos` keeps the house in view when a phone crops the picture.
 */
const slides = [
  { n: 1, pos: "22% 50%", alt: "Two-story Michigan home with a garage at golden hour" },
  { n: 2, pos: "78% 50%", alt: "Brick ranch home with a big front lawn" },
  { n: 3, pos: "22% 50%", alt: "Craftsman bungalow with a front porch in autumn" },
  { n: 4, pos: "78% 50%", alt: "White farmhouse with a wraparound porch at sunset" },
];

const INTERVAL = 3500; // ms between pictures

export default function HeroSlides() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id: number | undefined;
    const start = () => {
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
        {slides.map((s, i) => (
          // Plain <img> so phones download a small version of each picture
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.n}
            src={`/images/hero/home-${s.n}-1100.jpg`}
            srcSet={`/images/hero/home-${s.n}-640.jpg 640w, /images/hero/home-${s.n}-1100.jpg 1100w, /images/hero/home-${s.n}.jpg 1920w`}
            sizes="100vw"
            alt={i === index ? s.alt : ""}
            aria-hidden={i !== index}
            width={1920}
            height={1080}
            decoding="async"
            loading={i === 0 ? "eager" : "lazy"}
            style={{ objectPosition: s.pos }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div
        className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        role="group"
        aria-label="Home pictures"
      >
        {slides.map((s, i) => (
          <button
            key={s.n}
            type="button"
            aria-label={`Show picture ${s.n}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full shadow transition-all ${
              i === index ? "w-7 bg-[#14213D]" : "w-2.5 bg-white/80"
            }`}
          />
        ))}
      </div>
    </>
  );
}
