"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Page-wide scroll effects: a reading-progress bar and fade/rise-in reveals
 * for every content section. Content stays fully visible without JavaScript
 * or when the visitor prefers reduced motion.
 */
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const bar = document.getElementById("scroll-progress");

    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("section:not(#home) > div")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    for (const el of targets) {
      el.classList.add("reveal");
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const el of targets) el.classList.remove("reveal", "is-in");
    };
  }, [pathname]);

  return (
    <div
      id="scroll-progress"
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[2000] h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-[#C9A227] to-blue-600"
    />
  );
}
