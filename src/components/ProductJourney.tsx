"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, MessageSquareText, FileText, Users } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { PILLARS } from "@/data/pillars";
import { PHOTOS } from "@/data/images";
import RevealText from "@/components/ui/RevealText";
import ModuleVisual, { type VisualVariant } from "@/components/products/ModuleVisual";

// Registered at module scope (not inside an effect): child effects run before the
// parent SmoothScrollProvider's on initial mount, so relying on that provider to
// register the plugin first would race. This call is idempotent.
gsap.registerPlugin(ScrollTrigger);

const ICONS = { BookOpen, MessageSquareText, FileText, Users };

const JOURNEY_COPY: Record<
  string,
  { headline: string; body: string; badge: { label: string; value: string }; photo: string; visual: VisualVariant }
> = {
  "ai-job-portal": {
    headline: "It starts with an open role.",
    body: "A company posts a role once. AI screens every applicant on real skill signal — not keywords — and hands back a ranked shortlist in minutes.",
    badge: { label: "Role Match", value: "96% · Shortlisted" },
    photo: PHOTOS.handshake,
    visual: "matching",
  },
  "ai-interviewer": {
    headline: "The candidate gets interview-ready.",
    body: "Before the real interview, they rehearse it — role-specific questions, adaptive follow-ups, and instant, structured feedback on every answer.",
    badge: { label: "Interview Readiness", value: "92 / 100" },
    photo: PHOTOS.meeting,
    visual: "scoring",
  },
  "ai-resume-builder": {
    headline: "The proof goes on paper.",
    body: "Interview scores, coursework and certifications flow straight into an ATS-optimized resume — no blank page, nothing invented.",
    badge: { label: "ATS Score", value: "94 / 100" },
    photo: PHOTOS.takingNotes,
    visual: "gauge",
  },
  "ai-lms": {
    headline: "The gap gets closed — and the loop continues.",
    body: "Where the resume shows a gap, the AI LMS closes it: a white-labeled course, an auto-issued certificate, and a learner ready for the next open role.",
    badge: { label: "White-label", value: "under your brand" },
    photo: PHOTOS.graduation,
    visual: "certificate",
  },
};

const CHAPTERS = PILLARS.map((pillar) => ({ ...pillar, ...JOURNEY_COPY[pillar.id] }));

const ACTIVE_COLOR = "#FF4D01";
const INACTIVE_COLOR = "rgba(255,255,255,0.28)";

export default function ProductJourney() {
  const reduced = useReducedMotion() ?? false;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);

  // The pinned/scrubbed cinematic layout only fits a two-column desktop viewport —
  // stacking text + photo in one column would overflow the pinned, height-clamped
  // section on narrower screens. `desktop` gates which tree actually renders (not just
  // whether GSAP runs), so mobile/tablet always get the plain static stacked layout
  // below instead. It starts false so the very first render (and SSR) always matches
  // the static markup — no hydration mismatch — then flips true after mount if the
  // viewport qualifies.
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced || !desktop) return;

    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      const viewport = viewportRef.current;
      if (!wrapper || !viewport) return;

      const N = CHAPTERS.length;

      gsap.set(photoRefs.current, { autoAlpha: 0, scale: 1.06 });
      gsap.set(photoRefs.current[0], { autoAlpha: 1, scale: 1 });
      gsap.set(textRefs.current, { autoAlpha: 0, y: 24 });
      gsap.set(textRefs.current[0], { autoAlpha: 1, y: 0 });
      if (counterRef.current) counterRef.current.textContent = CHAPTERS[0].number;

      const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: "power2.inOut" },
        scrollTrigger: {
          trigger: wrapper,
          pin: viewport,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      for (let i = 1; i < N; i += 1) {
        const at = i - 0.35;
        tl.to(photoRefs.current[i - 1], { autoAlpha: 0, scale: 1.1 }, at)
          .to(photoRefs.current[i], { autoAlpha: 1, scale: 1 }, at)
          .to(textRefs.current[i - 1], { autoAlpha: 0, y: -24 }, at)
          .to(textRefs.current[i], { autoAlpha: 1, y: 0 }, at)
          .to(railRefs.current[i - 1], { width: 8, backgroundColor: INACTIVE_COLOR, duration: 0.2 }, at)
          .to(railRefs.current[i], { width: 28, backgroundColor: ACTIVE_COLOR, duration: 0.2 }, at)
          .call(
            () => {
              if (counterRef.current) counterRef.current.textContent = CHAPTERS[i].number;
            },
            [],
            at
          );
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, [reduced, desktop]);

  // Reduced motion, or below the 1024px desktop gate: plain static stacked layout,
  // no pinning, no scrubbing — fully accessible, no scroll-jacking.
  if (reduced || !desktop) {
    return (
      <section className="relative w-full border-b border-white/10 bg-surface-dark py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <JourneyHeader />
          {CHAPTERS.map((chapter) => {
            const Icon = ICONS[chapter.iconName];
            return (
              <div key={chapter.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 rounded-[2rem] overflow-hidden border border-white/10 shadow-xl shadow-black/30 aspect-[4/3]">
                  <img src={chapter.photo} alt={chapter.title} className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-6">
                  <ChapterCopy chapter={chapter} Icon={Icon} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={wrapperRef}
      id="journey"
      className="relative w-full border-b border-white/10 bg-surface-dark"
      style={{ height: `${CHAPTERS.length * 100}vh` }}
    >
      <div ref={viewportRef} className="h-screen flex items-center overflow-hidden px-6 md:px-12">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[400px] bg-primary/[0.07] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[400px] bg-accent/[0.07] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          {/* Left: scrubbed narrative */}
          <div className="lg:col-span-6">
            <JourneyHeader />

            <div className="relative h-[300px] sm:h-[260px] mt-10">
              {CHAPTERS.map((chapter, i) => {
                const Icon = ICONS[chapter.iconName];
                return (
                  <div
                    key={chapter.id}
                    ref={(el) => {
                      textRefs.current[i] = el;
                    }}
                    className="absolute inset-0"
                  >
                    <ChapterCopy chapter={chapter} Icon={Icon} />
                  </div>
                );
              })}
            </div>

            {/* Progress rail */}
            <div className="flex items-center gap-2 mt-8">
              <span className="text-[11px] font-mono font-bold text-white/50 mr-1">
                <span ref={counterRef}>{CHAPTERS[0].number}</span> / {CHAPTERS.length.toString().padStart(2, "0")}
              </span>
              {CHAPTERS.map((chapter, i) => (
                <span
                  key={chapter.id}
                  ref={(el) => {
                    railRefs.current[i] = el;
                  }}
                  className="h-1.5 rounded-full"
                  style={{ width: i === 0 ? 28 : 8, backgroundColor: i === 0 ? ACTIVE_COLOR : INACTIVE_COLOR }}
                />
              ))}
            </div>
          </div>

          {/* Right: scrubbed photo */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              {CHAPTERS.map((chapter, i) => (
                <div
                  key={chapter.id}
                  ref={(el) => {
                    photoRefs.current[i] = el;
                  }}
                  className="absolute inset-0"
                >
                  <img src={chapter.photo} alt={chapter.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 scale-[0.92] origin-bottom">
                    <ModuleVisual variant={chapter.visual} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyHeader() {
  return (
    <div>
      <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
        One Connected Suite
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
        <RevealText trigger="scroll" lines={["From Open Role", "to Job Ready"]} />
      </h2>
    </div>
  );
}

function ChapterCopy({
  chapter,
  Icon,
}: {
  chapter: (typeof CHAPTERS)[number];
  Icon: (typeof ICONS)[keyof typeof ICONS];
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5 flex-wrap">
        <span
          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
            chapter.color === "primary" ? "bg-primary/20 text-primary" : "bg-white/10 text-white"
          }`}
        >
          <Icon className="w-4 h-4" />
        </span>
        <span className="text-[11px] font-mono font-bold text-white/50">{chapter.number}</span>
        <span
          className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
            chapter.color === "primary" ? "text-primary" : "text-white/80"
          }`}
        >
          {chapter.title}
        </span>
      </div>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-3">{chapter.headline}</h3>
      <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed mt-3 max-w-md">{chapter.body}</p>

      <div className="flex items-center gap-4 mt-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5">
          <span className="text-[10px] font-mono text-white/60 uppercase">{chapter.badge.label}</span>
          <span className="text-xs font-bold text-white">{chapter.badge.value}</span>
        </span>
        <Link
          href={chapter.href}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors"
        >
          Explore {chapter.title} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
