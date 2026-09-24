"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RevealTextProps {
  /** One entry per visual line. Each line gets its own masked reveal. */
  lines: ReactNode[];
  /** "load" plays via CSS as soon as the HTML paints. "scroll" plays when scrolled into view. */
  trigger?: "load" | "scroll";
  /** Seconds before the reveal starts. */
  delay?: number;
  /** Seconds between each line's reveal. */
  stagger?: number;
  className?: string;
  lineClassName?: string;
}

/**
 * Kinetic-type primitive: each line sits behind an overflow-hidden mask and rises into
 * view. Pure CSS (see .reveal-* in globals.css) — no GSAP — so it can't get stuck behind
 * hydration, and there is no flash of visible text. "scroll" mode only needs a tiny
 * IntersectionObserver to add a class. The caller supplies the heading tag around it.
 */
export default function RevealText({
  lines,
  trigger = "scroll",
  delay = 0,
  stagger = 0.09,
  className = "",
  lineClassName = "",
}: RevealTextProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (trigger !== "scroll") return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  return (
    <span
      ref={wrapRef}
      className={`block reveal-text ${trigger === "load" ? "reveal-load" : "reveal-scroll"} ${className}`}
    >
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden pb-[0.12em] -mb-[0.12em] ${lineClassName}`}>
          <span
            className="reveal-line block"
            style={{ "--reveal-delay": `${delay + i * stagger}s` } as CSSProperties}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
