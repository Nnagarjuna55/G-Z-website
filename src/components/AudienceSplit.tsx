"use client";

import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import { CheckCircle2, ArrowRight, GraduationCap, Building2 } from "lucide-react";

const AUDIENCES = [
  {
    id: "institutions",
    icon: GraduationCap,
    badge: "For Institutions",
    title: "Give every learner an AI LMS, Interviewer, and Resume Builder.",
    description: "Deploy a white-labeled learning platform, then equip every learner with AI tools that turn coursework into job-readiness.",
    points: [
      "Launch AI LMS under your own institution's brand",
      "Built-in AI Interviewer for unlimited mock practice",
      "AI Resume Builder connected to learner progress",
      "One dashboard for enrollment, progress, and outcomes",
    ],
    cta: { label: "Explore AI LMS", href: "/ai-lms" },
    color: "primary" as const,
  },
  {
    id: "companies",
    icon: Building2,
    badge: "For Companies",
    title: "Screen less. Interview more of the right people.",
    description: "Post a role once and let AI do the first pass — scoring, ranking, and shortlisting candidates by real signal.",
    points: [
      "Post roles and reach job-ready candidates",
      "AI-scored shortlists ranked by fit, not keywords",
      "See verified course and interview performance",
      "Run campus drives with partner institutions",
    ],
    cta: { label: "Explore AI Job Portal", href: "/job-portal" },
    color: "accent" as const,
  },
];

export default function AudienceSplit() {
  return (
    <section id="target-audience" className="relative w-full border-b border-border py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 pb-6 border-b border-border">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Who It&apos;s For</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mt-2">
            Built for Institutions and the Companies That Hire
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {AUDIENCES.map((a, index) => {
            const Icon = a.icon;
            return (
              <TiltCard key={a.id} delay={index * 0.1} max={6}>
              <div className="flex flex-col bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm">

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${a.color === "primary" ? "bg-primary/10 text-primary-strong" : "bg-accent/10 text-accent"}`}>
                  <Icon className="w-7 h-7" />
                </div>

                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${a.color === "primary" ? "text-primary-strong" : "text-accent"}`}>
                  {a.badge}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">
                  {a.title}
                </h3>
                <p className="text-sm sm:text-base text-muted font-medium leading-relaxed mb-6">
                  {a.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {a.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm font-semibold text-foreground">
                      <CheckCircle2 className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${a.color === "primary" ? "text-primary-strong" : "text-accent"}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={a.cta.href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider transition-colors w-fit ${a.color === "primary" ? "bg-primary-strong text-white hover:bg-primary-hover" : "bg-accent text-white hover:bg-accent-hover"}`}
                >
                  <span>{a.cta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
