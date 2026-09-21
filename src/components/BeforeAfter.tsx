"use client";

import { ArrowRight, X, Check } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const SHIFTS = [
  {
    product: "AI LMS",
    before: "Placement readiness tracked in scattered spreadsheets",
    after: "Live progress and certifications on every learner profile",
  },
  {
    product: "AI Interviewer",
    before: "A handful of mock interviews in the weeks before placements",
    after: "Unlimited AI interview practice with instant, scored feedback",
  },
  {
    product: "AI Resume Builder",
    before: "Identical resumes with no evidence behind the claims",
    after: "ATS-ready resumes built from verified coursework",
  },
  {
    product: "AI Job Portal",
    before: "Recruiters filtering hundreds of resumes by keywords",
    after: "Shortlists ranked by verified skill and interview signals",
  },
];

export default function BeforeAfter() {
  return (
    <section className="relative w-full border-b border-border py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 pb-6 border-b border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">What Changes</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mt-2">
              From Disconnected Tools <br className="hidden sm:block" /> to One Clear Pipeline
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted font-medium max-w-sm">
            Each product replaces a manual, disconnected step with a verified signal that carries through to hiring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SHIFTS.map((shift, index) => (
            <TiltCard key={shift.product} delay={index * 0.08} max={5}>
              <div className="bg-white rounded-3xl border border-border shadow-sm p-7 sm:p-8">
                <span className="text-[11px] font-mono font-bold text-primary-strong uppercase tracking-wider">
                  {shift.product}
                </span>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4">
                  <div className="rounded-2xl bg-background border border-border p-4 h-full">
                    <p className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-muted uppercase tracking-wider mb-2">
                      <X className="w-3 h-3" /> Before
                    </p>
                    <p className="text-sm font-medium text-muted leading-snug">{shift.before}</p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-primary mx-auto rotate-90 sm:rotate-0" />

                  <div className="rounded-2xl bg-accent/5 border border-accent/25 p-4 h-full">
                    <p className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-accent uppercase tracking-wider mb-2">
                      <Check className="w-3 h-3" /> With the suite
                    </p>
                    <p className="text-sm font-semibold text-foreground leading-snug">{shift.after}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
