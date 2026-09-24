"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Minimal "director's chrome" — corner viewfinder brackets + a scroll-position
 * readout. Purely decorative, fixed, pointer-events-none. Fades in once the Hero's
 * curtain-open has finished so it doesn't compete with that beat. Desktop only (same
 * gate as CustomCursor) and skipped entirely under reduced motion.
 */
export default function CinematicHUD() {
  const reduced = useReducedMotion() ?? false;
  const [ready, setReady] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPercent(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  if (reduced) return null;

  const bracket = "absolute w-5 h-5 border-foreground/20";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9990] hidden md:block transition-opacity duration-700 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className={`${bracket} top-5 left-5 border-t border-l`} />
      <span className={`${bracket} top-5 right-5 border-t border-r`} />
      <span className={`${bracket} bottom-5 left-5 border-b border-l`} />
      <span className={`${bracket} bottom-5 right-5 border-b border-r`} />

      <div className="absolute bottom-5 right-8 flex items-center gap-2 font-mono text-[10px] tracking-wider text-foreground/35">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
        SCROLL {percent.toString().padStart(2, "0")}%
      </div>
    </div>
  );
}
