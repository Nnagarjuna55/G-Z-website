"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, FileText, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "./ui/MagneticButton";
import SuiteOrbit from "./three/SuiteOrbit";
import RevealText from "./ui/RevealText";

// Registered at module scope, not inside an effect: child effects run before the
// parent SmoothScrollProvider's on initial mount, so relying on it alone would race.
gsap.registerPlugin(ScrollTrigger);

const PHRASES = [
  "Hire faster with the AI Job Portal",
  "Give learners an AI Interviewer",
  "Power resumes with AI Resume Builder",
  "Deploy a white-labeled AI LMS",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const reduced = useReducedMotion() ?? false;
  const heroRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const orbColRef = useRef<HTMLDivElement>(null);
  const [scrollT, setScrollT] = useState(0);

  useEffect(() => {
    const fullText = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText.length < fullText.length) {
      timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 45);
    } else if (!isDeleting && currentText.length === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && currentText.length > 0) {
      timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length - 1));
      }, 25);
    } else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  // Scroll-linked exit. The curtain open is pure CSS (see .hero-curtain in
  // globals.css) — no JS involved, so it can't get stuck behind a slow hydration.
  // Skipped under reduced motion — content just renders and stays put.
  useEffect(() => {
    if (reduced) return;

    const ctx = gsap.context(() => {
      if (heroRef.current && textColRef.current && orbColRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => setScrollT(self.progress),
          },
        })
          .to(textColRef.current, { opacity: 0.2, y: -40, scale: 0.96 }, 0)
          .to(orbColRef.current, { opacity: 0.35, scale: 1.08 }, 0);
      }
    }, heroRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] w-full flex flex-col justify-center items-center overflow-hidden border-b border-border pt-32 pb-20 px-6 md:px-12"
    >
      {/* Curtain open — pure CSS animation, see .hero-curtain in globals.css */}
      <div aria-hidden="true" className="hero-curtain absolute inset-0 z-30 bg-[#000080]" />

      {/* Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[550px] h-[350px] bg-primary/[0.08] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[300px] bg-accent/[0.08] rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-primary/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Content */}
          <div ref={textColRef} className="lg:col-span-7 flex flex-col items-start text-left">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-white border border-border px-4 py-1.5 rounded-full shadow-xs mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary-strong" />
              <span className="text-xs font-bold tracking-wide text-foreground">AI Job Portal &bull; AI Interviewer &bull; AI Resume Builder &bull; AI LMS</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
              <RevealText
                trigger="load"
                delay={0.35}
                stagger={0.1}
                lines={[
                  "Train job-ready talent.",
                  <span key="l2" className="text-primary-strong">Hire them with proof.</span>,
                ]}
              />
            </h1>

            {/* Dynamic Typewriter Subheader */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-6 h-10 flex items-center bg-white border border-border px-5 py-2 rounded-full shadow-xs"
            >
              <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide text-foreground truncate">
                {currentText}
              </span>
              <span className="inline-block w-0.5 h-4 ml-1 bg-primary animate-cursor-blink shrink-0" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-6 text-base sm:text-lg text-muted font-medium leading-relaxed max-w-xl"
            >
              <strong className="text-foreground">Gen-Z Technologies</strong> gives institutions a white-labeled AI LMS and gives companies an AI Job Portal that ranks candidates on verified skills — connected by an AI Interviewer and AI Resume Builder, so every hire is backed by evidence, not claims.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <MagneticButton>
                <Link
                  href="/#about-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-strong text-white text-xs sm:text-sm font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground border border-border text-xs sm:text-sm font-bold tracking-wider hover:bg-background hover:border-foreground transition-colors shadow-xs"
              >
                <span>Request a Demo</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono font-semibold text-muted"
            >
              <span>4 AI products</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>23 modules</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>1 connected learner profile</span>
            </motion.div>

          </div>

          {/* Right Column: interactive 3D suite */}
          <motion.div
            ref={orbColRef}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-8 lg:mt-0 h-[420px] sm:h-[500px] lg:h-[560px]"
          >
            <div className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-primary/20 via-accent/15 to-primary/10 blur-[90px] pointer-events-none" />
            <SuiteOrbit scrollT={scrollT} />

            {/* Glass stat chips */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="hidden sm:flex absolute bottom-6 -left-2 items-center gap-2.5 bg-white/80 backdrop-blur-md border border-white shadow-xl rounded-2xl px-4 py-3"
            >
              <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </span>
              <span>
                <span className="block text-[10px] font-mono text-muted uppercase">ATS Score</span>
                <span className="block text-sm font-bold text-foreground">94 / 100</span>
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden sm:flex absolute top-6 right-0 items-center gap-2.5 bg-white/80 backdrop-blur-md border border-white shadow-xl rounded-2xl px-4 py-3"
            >
              <span className="w-8 h-8 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Users className="w-4 h-4" />
              </span>
              <span>
                <span className="block text-[10px] font-mono text-muted uppercase">Shortlisted</span>
                <span className="block text-sm font-bold text-foreground">12 candidates</span>
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
