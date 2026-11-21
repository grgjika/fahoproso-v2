"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Features nobody needs in the first second. Their code is downloaded and run
// only after the page is ready, so the first screen appears sooner on phones.
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"), { ssr: false });
const Tilt3D = dynamic(() => import("@/components/Tilt3D"), { ssr: false });
const LanguageBanner = dynamic(() => import("@/components/LanguageBanner"), { ssr: false });

export default function Deferred() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const go = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(() => setReady(true), { timeout: 3000 });
      } else {
        window.setTimeout(() => setReady(true), 1500);
      }
    };
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
    return () => window.removeEventListener("load", go);
  }, []);

  if (!ready) return null;
  return (
    <>
      <ExitIntentPopup />
      <Tilt3D />
      <LanguageBanner />
    </>
  );
}
