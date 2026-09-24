"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      lerp: 0.05,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Subtle scroll-velocity "whip" blur, applied to the fixed ambient background/grain
    // layers only (never to text/images/the 3D canvas — blurring readable content would
    // hurt usability, not help it). Desktop pointer only; touch-scroll velocity spikes
    // constantly and would just jitter. Skipped under reduced motion.
    const canBlur =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let decayTimer: ReturnType<typeof setTimeout> | null = null;
    const blurState = { value: 0 };
    const setBlurVar = () => {
      document.documentElement.style.setProperty("--scroll-blur", `${blurState.value.toFixed(2)}px`);
    };
    const handleVelocity = (instance: Lenis) => {
      gsap.to(blurState, {
        value: Math.min(Math.abs(instance.velocity) * 0.06, 1.5),
        duration: 0.15,
        ease: "power1.out",
        onUpdate: setBlurVar,
        overwrite: true,
      });
      if (decayTimer) clearTimeout(decayTimer);
      decayTimer = setTimeout(() => {
        gsap.to(blurState, { value: 0, duration: 0.4, ease: "power2.out", onUpdate: setBlurVar, overwrite: true });
      }, 120);
    };

    if (canBlur) lenis.on("scroll", handleVelocity);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      if (decayTimer) clearTimeout(decayTimer);
      document.documentElement.style.removeProperty("--scroll-blur");
    };
  }, []);

  return <>{children}</>;
}
