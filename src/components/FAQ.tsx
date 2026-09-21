"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How long does it take to deploy AI LMS for our institution?",
    a: "It depends on your size and scope. We agree a rollout plan up front, and dedicated onboarding covers white-labeling, learner migration, and admin training.",
  },
  {
    q: "Can we use AI Interviewer and AI Resume Builder without the full LMS?",
    a: "Yes. Each product works standalone or as part of the connected suite — institutions and companies can adopt what fits their workflow today and add the rest later.",
  },
  {
    q: "How does AI Job Portal verify candidate performance?",
    a: "Match scores are built from real signal — AI Interviewer session results and verified AI LMS certifications — not just resume keywords, so shortlists reflect actual demonstrated skill.",
  },
  {
    q: "Is our institution's or company's data kept private?",
    a: "Yes. Each institution and company operates in its own isolated workspace. Learner and candidate data is never shared across organizations on the platform.",
  },
  {
    q: "Do you offer white-labeling and custom branding?",
    a: "AI LMS and AI Job Portal both support full white-labeling — your logo, colors, and domain — so the platform feels native to your institution or company.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full border-b border-border py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 pb-6 border-b border-border">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-2">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="bg-white rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display font-bold text-foreground">{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-muted font-medium leading-relaxed border-t border-border pt-4">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
