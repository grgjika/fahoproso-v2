"use client";

import { useMemo } from "react";

type Tower = { x: number; y: number; w: number; d: number; h: number };

const TOWERS: Tower[] = [
  { x: 0, y: 0, w: 70, d: 70, h: 150 },
  { x: 100, y: 0, w: 60, d: 60, h: 90 },
  { x: 190, y: 10, w: 80, d: 70, h: 210 },
  { x: 0, y: 100, w: 60, d: 60, h: 70 },
  { x: 90, y: 95, w: 90, d: 80, h: 120 },
  { x: 210, y: 105, w: 60, d: 60, h: 60 },
  { x: 20, y: 200, w: 70, d: 60, h: 100 },
  { x: 120, y: 205, w: 60, d: 60, h: 170 },
  { x: 210, y: 195, w: 70, d: 70, h: 85 },
];

function Box({ t, index }: { t: Tower; index: number }) {
  const face = "absolute left-0 top-0 border border-slate-900/30";
  const delay = `${index * 90}ms`;

  return (
    <div
      className="skyline-tower absolute"
      style={{
        left: t.x,
        top: t.y,
        width: t.w,
        height: t.d,
        transformStyle: "preserve-3d",
        ["--h" as string]: `${t.h}px`,
        animationDelay: delay,
      }}
    >
      {/* top */}
      <div
        className={`${face} bg-gradient-to-br from-sky-200 to-blue-300`}
        style={{
          width: t.w,
          height: t.d,
          transform: `translateZ(var(--h))`,
        }}
      />
      {/* front */}
      <div
        className={`${face} skyline-windows`}
        style={{
          backgroundColor: "#1d4ed8",
          width: t.w,
          height: "var(--h)",
          top: t.d,
          transformOrigin: "0 0",
          transform: "rotateX(90deg)",
        }}
      />
      {/* side */}
      <div
        className={`${face} skyline-windows`}
        style={{
          backgroundColor: "#172554",
          width: t.d,
          height: "var(--h)",
          left: t.w,
          transformOrigin: "0 0",
          transform: "rotateZ(90deg) rotateX(90deg)",
        }}
      />
    </div>
  );
}

export default function Skyline3D() {
  const towers = useMemo(() => TOWERS, []);

  return (
    <div
      className="skyline-scene relative mx-auto h-[360px] w-[300px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="skyline-floor absolute -inset-10 rounded-3xl border border-slate-900/30 bg-white/5"
        style={{ transform: "translateZ(-2px)" }}
      />
      {towers.map((t, i) => (
        <Box key={i} t={t} index={i} />
      ))}
    </div>
  );
}
