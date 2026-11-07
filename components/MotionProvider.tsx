"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/** Loads only the animation features we use (smaller JavaScript bundle). */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
