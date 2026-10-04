"use client";

import { useEffect } from "react";

const CARD_SELECTOR = [
  '[class*="rounded-2xl"][class*="bg-white"][class*="shadow"]',
  '[class*="rounded-3xl"][class*="bg-white"][class*="shadow"]',
].join(",");

const MAX_TILT = 6;
const MAX_CARD_WIDTH = 640;

/**
 * Adds a subtle 3D tilt to content cards by writing CSS variables on hover.
 * Uses event delegation so it works for every page without per-card wiring.
 */
export default function Tilt3D() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduceMotion.matches) return;

    let active: HTMLElement | null = null;

    const reset = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.removeProperty("--tilt-x");
      el.style.removeProperty("--tilt-y");
      el.removeAttribute("data-tilt");
    };

    const onMove = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        CARD_SELECTOR
      );

      if (target !== active) {
        reset(active);
        active = null;
      }
      if (!target) return;

      const rect = target.getBoundingClientRect();
      if (rect.width > MAX_CARD_WIDTH) return;

      active = target;
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      target.setAttribute("data-tilt", "");
      target.style.setProperty("--tilt-x", `${(-py * MAX_TILT).toFixed(2)}deg`);
      target.style.setProperty("--tilt-y", `${(px * MAX_TILT).toFixed(2)}deg`);
    };

    const onLeave = () => {
      reset(active);
      active = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      onLeave();
    };
  }, []);

  return null;
}
