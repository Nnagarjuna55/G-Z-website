"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "./ui/MagneticButton";
import SuiteOrbit from "./three/SuiteOrbit";
import RevealText from "./ui/RevealText";

// Registered at module scope, not inside an effect: child effects run before the
// parent SmoothScrollProvider's on initial mount, so relying on it alone would race.
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const heroRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scrollT, setScrollT] = useState(0);

  // Scroll-linked exit: the copy lifts and fades while the 3D stage pushes in, so
  // leaving the hero reads as a camera move rather than content vanishing.
  // The curtain open is pure CSS (.hero-curtain) so it can't stall behind hydration.
  useEffect(() => {
    if (reduced) return;

    const ctx = gsap.context(() => {
      if (!heroRef.current || !textColRef.current || !stageRef.current) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => setScrollT(self.progress),
          },
        })
        .to(textColRef.current, { opacity: 0, y: -70, scale: 0.97 }, 0)
        .to(stageRef.current, { scale: 1.18, opacity: 0.35 }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-surface-dark text-white"
    >
      {/* Curtain open — pure CSS animation, see .hero-curtain in globals.css */}
      <div aria-hidden="true" className="hero-curtain absolute inset-0 z-40 bg-[#000080]" />

      {/* Full-bleed 3D stage: the scene is the hero, not a sidebar graphic */}
      <div ref={stageRef} className="absolute inset-0 z-0">
        {/* Offset right on desktop so the scene sits beside the copy, not under it */}
        <div className="absolute inset-0 lg:left-[32%] lg:scale-110">
          <SuiteOrbit scrollT={scrollT} />
        </div>
        {/* Cinematic grade: warm key, cool rim, vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_45%,rgba(255,77,1,0.22)_0%,transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_75%,rgba(2,104,63,0.20)_0%,transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,transparent_40%,rgba(0,4,25,0.8)_100%)]" />
        {/* Legibility scrim: only strong enough on the copy side */}
        <div className="pointer-events-none absolute inset-0 bg-[#000419]/78 lg:bg-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#000419] via-[#000419]/70 to-transparent lg:via-[#000419]/40 lg:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#000419] to-transparent" />
      </div>

      {/* Copy */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <div ref={textColRef} className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-sm px-4 py-1.5 mb-7"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-white/70">
              AI Job Portal · Interviewer · Resume Builder · LMS
            </span>
          </motion.div>

          <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-[-0.02em]">
            <RevealText
              trigger="load"
              delay={0.35}
              stagger={0.1}
              lines={[
                "Where learning",
                <span key="l2" className="text-primary">becomes hiring.</span>,
              ]}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-white/65"
          >
            Institutions train talent on a white-labeled AI platform. Companies hire
            from it with interview scores and certifications already verified — so
            every shortlist is built on evidence, not claims.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white text-xs sm:text-sm font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-[0_8px_30px_-6px_rgba(255,77,1,0.6)]"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <Link
              href="/#about-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wider hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              <span>See the Platform</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">Scroll</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
