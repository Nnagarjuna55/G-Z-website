"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, MessageSquareText, FileText, Users, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    id: "lms",
    step: "01",
    product: "AI LMS",
    href: "/ai-lms",
    title: "The institution teaches.",
    description:
      "Your institute runs courses on a white-labeled AI LMS. Every lesson, assessment, and certificate is tracked against one learner profile.",
    icon: BookOpen,
    badge: { label: "Certified", value: "Generative AI Engineering" },
  },
  {
    id: "interviewer",
    step: "02",
    product: "AI Interviewer",
    href: "/ai-interviewer",
    title: "The learner practices.",
    description:
      "They rehearse role-specific interviews with the AI Interviewer — adaptive follow-ups, instant scoring, and a readiness score that climbs with every session.",
    icon: MessageSquareText,
    badge: { label: "Interview Readiness", value: "92 / 100" },
  },
  {
    id: "resume",
    step: "03",
    product: "AI Resume Builder",
    href: "/resume-builder",
    title: "The profile writes itself.",
    description:
      "Completed courses, certifications, and interview scores flow straight into an ATS-optimized resume — no blank page, no invented claims.",
    icon: FileText,
    badge: { label: "ATS Score", value: "94 / 100" },
  },
  {
    id: "portal",
    step: "04",
    product: "AI Job Portal",
    href: "/job-portal",
    title: "The company hires on evidence.",
    description:
      "Companies see a candidate with verified skills — not a self-declared resume. AI ranks the shortlist by real signal, and hiring moves in hours, not weeks.",
    icon: Users,
    badge: { label: "Role Match", value: "96% · Shortlisted" },
  },
];

export default function ConnectedPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setActive(Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="pipeline"
      className="relative w-full border-b border-border"
      style={{ position: "relative", height: `${STAGES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden px-6 md:px-12">
        {/* Ambient glow */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[400px] bg-primary/[0.07] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[400px] bg-accent/[0.07] rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
          {/* Left: narrative */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
              One Connected Suite
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-2 mb-8">
              From First Lesson <br className="hidden sm:block" /> to Signed Offer
            </h2>

            {/* Stage list */}
            <div className="flex flex-col gap-1">
              {STAGES.map((stage, index) => {
                const isActive = index === active;
                const isDone = index < active;
                const Icon = stage.icon;
                return (
                  <div
                    key={stage.id}
                    className={cn(
                      "flex gap-4 py-3 transition-all duration-500",
                      isActive ? "opacity-100" : "opacity-35"
                    )}
                  >
                    {/* Rail */}
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500",
                          isActive
                            ? "bg-primary-strong text-white border-primary scale-110"
                            : isDone
                              ? "bg-accent/10 text-accent border-accent/30"
                              : "bg-white text-muted border-border"
                        )}
                      >
                        {isDone ? <Check className="w-4 h-4" /> : <Icon className="w-4.5 h-4.5" />}
                      </div>
                      {index < STAGES.length - 1 && (
                        <div className="w-px flex-1 min-h-8 bg-border mt-1 relative overflow-hidden">
                          <motion.div
                            className="absolute inset-x-0 top-0 bg-accent"
                            initial={{ height: "0%" }}
                            animate={{ height: isDone ? "100%" : "0%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Copy */}
                    <div className="pb-2">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[11px] font-mono font-bold text-muted">{stage.step}</span>
                        <span
                          className={cn(
                            "text-[11px] font-mono font-bold uppercase tracking-wider transition-colors",
                            isActive ? "text-primary-strong" : "text-muted"
                          )}
                        >
                          {stage.product}
                        </span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mt-1">
                        {stage.title}
                      </h3>
                      <motion.p
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm text-muted font-medium leading-relaxed overflow-hidden max-w-md"
                      >
                        <span className="block pt-2">{stage.description}</span>
                        <Link
                          href={stage.href}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-strong hover:text-primary-hover mt-3"
                        >
                          Explore {stage.product} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </motion.p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: the learner profile card that accumulates verified signals */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl border border-border shadow-2xl overflow-hidden">
              {/* Card header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider">
                    Unified Learner Profile
                  </span>
                  <motion.span
                    animate={{
                      backgroundColor: active === STAGES.length - 1 ? "rgba(2,104,63,0.1)" : "rgba(255,77,1,0.1)",
                      color: active === STAGES.length - 1 ? "#02683F" : "#FF4D01",
                    }}
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full"
                  >
                    {active === STAGES.length - 1 ? "JOB READY" : "IN PROGRESS"}
                  </motion.span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold">
                    JL
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">Jordan Lee</p>
                    <p className="text-xs text-muted font-medium">Your Institution</p>
                  </div>
                </div>
              </div>

              {/* Accumulating verified signals */}
              <div className="p-6 space-y-3 min-h-[280px]">
                {STAGES.map((stage, index) => {
                  const revealed = index <= active;
                  const Icon = stage.icon;
                  return (
                    <motion.div
                      key={stage.id}
                      initial={false}
                      animate={{
                        opacity: revealed ? 1 : 0,
                        y: revealed ? 0 : 12,
                        scale: revealed ? 1 : 0.97,
                      }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "flex items-center gap-3 rounded-2xl border px-4 py-3",
                        index === active ? "border-primary/40 bg-primary/5" : "border-border bg-background"
                      )}
                    >
                      <div
                        className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                          index === active ? "bg-primary/10 text-primary-strong" : "bg-white text-accent border border-border"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider">
                          {stage.badge.label}
                        </p>
                        <p className="text-sm font-bold text-foreground truncate">{stage.badge.value}</p>
                      </div>
                      <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Card footer */}
              <div className="px-6 py-4 border-t border-border bg-background flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted">Verified by Gen-Z Technologies</span>
                <div className="flex gap-1">
                  {STAGES.map((_, index) => (
                    <motion.span
                      key={index}
                      animate={{
                        backgroundColor: index <= active ? "#FF4D01" : "#D8D4CC",
                        width: index === active ? 18 : 6,
                      }}
                      transition={{ duration: 0.4 }}
                      className="h-1.5 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
