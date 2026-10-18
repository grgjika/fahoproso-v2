"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * The root layout is shared by every language, so the static HTML says
 * lang="en". Correct it in the browser (and for screen readers) on load.
 */
export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const match = pathname.match(/^\/(es|el|sq)(\/|$)/);
    document.documentElement.lang = match ? match[1] : "en";
  }, [pathname]);

  return null;
}
