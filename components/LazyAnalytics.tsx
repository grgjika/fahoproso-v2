"use client";

import { useEffect } from "react";

const GA_ID = "G-5F9RJMGDCF";

/**
 * Google Analytics, loaded after the page is ready and the browser is idle so
 * it does not slow down the first screen (especially on phones). Events sent
 * before it finishes loading are queued and delivered afterwards.
 */
export default function LazyAnalytics() {
  useEffect(() => {
    const w = window as unknown as {
      dataLayer: unknown[];
      gtag: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () {
      // gtag.js needs the real `arguments` object, not an array
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
    };
    w.gtag("js", new Date());
    w.gtag("config", GA_ID);

    const load = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
    };
    const whenIdle = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(load, { timeout: 4000 });
      } else {
        window.setTimeout(load, 2500);
      }
    };

    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });
    return () => window.removeEventListener("load", whenIdle);
  }, []);

  return null;
}
