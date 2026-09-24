"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

const PRODUCTS = [
  { label: "AI LMS", color: "#FF4D01", className: "top-[12%] left-[8%]" },
  { label: "AI Interviewer", color: "#02683F", className: "top-[18%] right-[4%]" },
  { label: "AI Resume Builder", color: "#FF4D01", className: "bottom-[16%] left-[2%]" },
  { label: "AI Job Portal", color: "#02683F", className: "bottom-[10%] right-[10%]" },
];

function StaticOrb() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[58%] aspect-square">
        <div className="absolute inset-[-12%] rounded-full border border-foreground/10" />
        <div className="absolute inset-[-28%] rounded-full border border-foreground/5" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#3b3bd6_0%,#000080_55%,#000033_100%)] shadow-[0_40px_80px_-20px_rgba(0,0,128,0.5)]" />
        <div className="absolute -left-6 top-1/3 w-1/2 h-1/2 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -right-6 bottom-1/4 w-1/2 h-1/2 rounded-full bg-accent/40 blur-3xl" />
      </div>
      {PRODUCTS.map((p) => (
        <div
          key={p.label}
          className={`absolute ${p.className} flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-white/95 px-3 py-1.5 text-xs font-bold text-foreground shadow-lg`}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
          {p.label}
        </div>
      ))}
    </div>
  );
}

const SuiteOrbitScene = dynamic(() => import("./SuiteOrbitScene"), {
  ssr: false,
  loading: () => <StaticOrb />,
});

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function SuiteOrbit({ scrollT = 0 }: { scrollT?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    setWebgl(hasWebGL());
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "100px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {webgl ? <SuiteOrbitScene active={inView} reduced={reduced} scrollT={scrollT} /> : <StaticOrb />}
    </div>
  );
}
