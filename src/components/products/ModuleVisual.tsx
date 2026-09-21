"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHOTOS, PEOPLE } from "@/data/images";
import {
  Video, FileQuestion, ClipboardList, GripVertical, Check, Search,
  Star, ShieldCheck, Sparkles, Bot, User, Award, Terminal, Timer,
} from "lucide-react";

export type VisualVariant =
  | "authoring" | "learners" | "analytics" | "certificate" | "admin" | "profile"
  | "chat" | "scoring" | "tracks" | "integration"
  | "templates" | "suggestions" | "preview" | "gauge"
  | "jobpost" | "matching" | "kanban" | "signals" | "marketplace"
  | "courses" | "compiler" | "assessment" | "liveclass";

const rise = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function Shell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/60">
        <span className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider">{label}</span>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary/40" />
          <span className="w-2 h-2 rounded-full bg-accent/40" />
          <span className="w-2 h-2 rounded-full bg-border" />
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default function ModuleVisual({ variant }: { variant: VisualVariant }) {
  switch (variant) {
    case "authoring":
      return (
        <Shell label="Course Builder">
          <div className="space-y-2.5">
            {[
              { icon: Video, label: "Introduction to Transformers", meta: "Video · 12:40" },
              { icon: FileQuestion, label: "Knowledge Check", meta: "Quiz · 8 questions" },
              { icon: ClipboardList, label: "Build a RAG Pipeline", meta: "Assignment" },
            ].map((row, i) => {
              const Icon = row.icon;
              return (
                <motion.div
                  key={row.label}
                  {...rise}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  className="flex items-center gap-3 bg-background border border-border rounded-xl px-3 py-2.5"
                >
                  <GripVertical className="w-4 h-4 text-border shrink-0" />
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary-strong flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-foreground truncate">{row.label}</p>
                    <p className="text-[10px] font-mono text-muted">{row.meta}</p>
                  </div>
                </motion.div>
              );
            })}
            <motion.div {...rise} transition={{ duration: 0.45, delay: 0.42 }} className="flex items-center gap-2 border border-dashed border-primary/40 rounded-xl px-3 py-2.5 text-primary-strong">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold">Generate next lesson with AI</span>
            </motion.div>
          </div>
        </Shell>
      );

    case "learners":
      return (
        <Shell label="Learner Management">
          <div className="space-y-2.5">
            {[
              { name: "Batch 2026 · CSE-A", count: "142 learners", pct: 82 },
              { name: "Batch 2026 · CSE-B", count: "138 learners", pct: 67 },
              { name: "Data Science Cohort", count: "94 learners", pct: 91 },
            ].map((row, i) => (
              <motion.div key={row.name} {...rise} transition={{ duration: 0.45, delay: i * 0.12 }} className="bg-background border border-border rounded-xl px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-foreground">{row.name}</span>
                  <span className="text-[10px] font-mono text-muted">{row.count}</span>
                </div>
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "analytics":
      return (
        <Shell label="Analytics Dashboard">
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {[
              { v: "78%", l: "Completion" },
              { v: "12,480", l: "Active" },
              { v: "24", l: "At risk" },
            ].map((s, i) => (
              <motion.div key={s.l} {...rise} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-background border border-border rounded-xl px-3 py-2.5">
                <p className="font-display text-base font-bold text-foreground">{s.v}</p>
                <p className="text-[10px] font-mono text-muted">{s.l}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex items-end gap-2 h-28">
            {[45, 62, 51, 78, 69, 88, 74].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
                className={`flex-1 rounded-t-md ${i % 2 === 0 ? "bg-primary" : "bg-accent"}`}
              />
            ))}
          </div>
        </Shell>
      );

    case "certificate":
      return (
        <Shell label="Certification">
          <motion.div {...rise} transition={{ duration: 0.5 }} className="border-2 border-foreground rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 halftone-overlay opacity-[0.15] pointer-events-none" />
            <Award className="w-10 h-10 text-primary-strong mx-auto mb-3" />
            <p className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest">Certificate of Completion</p>
            <p className="font-display text-lg font-bold text-foreground mt-2">Generative AI Engineering</p>
            <p className="text-xs text-muted font-medium mt-1">Jordan Lee · Your Institution</p>
            <div className="flex items-center justify-center gap-1.5 mt-4 text-accent">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono font-bold">VERIFIED · ID 8F2A-91C4</span>
            </div>
          </motion.div>
        </Shell>
      );

    case "admin":
      return (
        <Shell label="Admin Console">
          <div className="space-y-2.5">
            {[
              { l: "Custom domain", v: "learn.institute.edu", on: true },
              { l: "White-label branding", v: "Logo & colors applied", on: true },
              { l: "Single sign-on (SSO)", v: "Microsoft Entra ID", on: true },
              { l: "Multi-branch", v: "3 campuses linked", on: true },
            ].map((row, i) => (
              <motion.div key={row.l} {...rise} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-center justify-between bg-background border border-border rounded-xl px-4 py-2.5">
                <div>
                  <p className="text-xs font-bold text-foreground">{row.l}</p>
                  <p className="text-[10px] font-mono text-muted">{row.v}</p>
                </div>
                <span className="w-9 h-5 rounded-full bg-accent flex items-center px-0.5 justify-end">
                  <span className="w-4 h-4 rounded-full bg-white" />
                </span>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "profile":
    case "signals":
      return (
        <Shell label="Unified Learner Profile">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold text-sm">JL</div>
            <div>
              <p className="font-display font-bold text-foreground">Jordan Lee</p>
              <p className="text-[10px] font-mono text-muted">Your Institution</p>
            </div>
          </div>
          <div className="space-y-2.5">
            {[
              { l: "Certified", v: "Generative AI Engineering" },
              { l: "Interview Readiness", v: "92 / 100" },
              { l: "ATS Resume Score", v: "94 / 100" },
              { l: "Role Match", v: "96% · Shortlisted" },
            ].map((row, i) => (
              <motion.div key={row.l} {...rise} transition={{ duration: 0.45, delay: i * 0.12 }} className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-2.5">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider">{row.l}</p>
                  <p className="text-xs font-bold text-foreground truncate">{row.v}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "chat":
      return (
        <Shell label="AI Interview Session">
          <div className="space-y-3">
            <motion.div {...rise} transition={{ duration: 0.4 }} className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary-strong flex items-center justify-center shrink-0"><Bot className="w-3.5 h-3.5" /></div>
              <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-3.5 py-2 text-xs font-medium text-foreground">
                Walk me through optimizing a slow API endpoint.
              </div>
            </motion.div>
            <motion.div {...rise} transition={{ duration: 0.4, delay: 0.2 }} className="flex gap-2.5 flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0"><User className="w-3.5 h-3.5" /></div>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl rounded-tr-sm px-3.5 py-2 text-xs font-medium text-foreground">
                I profiled it first, found an N+1 query, and added an index...
              </div>
            </motion.div>
            <motion.div {...rise} transition={{ duration: 0.4, delay: 0.4 }} className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary-strong flex items-center justify-center shrink-0"><Bot className="w-3.5 h-3.5" /></div>
              <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-3.5 py-2 text-xs font-medium text-foreground">
                Good — how would you verify the fix held under load?
              </div>
            </motion.div>
          </div>
        </Shell>
      );

    case "scoring":
    case "gauge": {
      const score = variant === "gauge" ? 94 : 92;
      const label = variant === "gauge" ? "ATS Readiness" : "Answer Score";
      return (
        <Shell label={variant === "gauge" ? "Resume Score" : "Instant Feedback"}>
          <div className="flex items-center gap-6">
            <div className="relative w-28 h-28 shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#D8D4CC" strokeWidth="9" />
                <motion.circle
                  cx="50" cy="50" r="42" fill="none" stroke="#FF4D01" strokeWidth="9" strokeLinecap="round"
                  strokeDasharray={264}
                  initial={{ strokeDashoffset: 264 }}
                  whileInView={{ strokeDashoffset: 264 - (264 * score) / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-2xl font-bold text-foreground">{score}</span>
                <span className="text-[9px] font-mono text-muted uppercase">{label}</span>
              </div>
            </div>
            <div className="space-y-2 flex-1">
              {["Clear structure (STAR)", "Quantified impact", "Add a metric to close"].map((t, i) => (
                <motion.div key={t} {...rise} transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }} className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 shrink-0 ${i === 2 ? "text-muted" : "text-accent"}`} />
                  <span className={`text-xs font-semibold ${i === 2 ? "text-muted" : "text-foreground"}`}>{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Shell>
      );
    }

    case "tracks":
      return (
        <Shell label="Practice Tracks">
          <div className="grid grid-cols-2 gap-2.5">
            {["Technical", "Behavioral", "Case Study", "HR Round"].map((t, i) => (
              <motion.div key={t} {...rise} transition={{ duration: 0.4, delay: i * 0.1 }} className={`rounded-xl border px-4 py-5 text-center ${i === 0 ? "border-primary bg-primary/5" : "border-border bg-background"}`}>
                <p className={`text-xs font-bold ${i === 0 ? "text-primary-strong" : "text-foreground"}`}>{t}</p>
                <p className="text-[10px] font-mono text-muted mt-1">{12 - i * 2} sets</p>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "integration":
      return (
        <Shell label="Connected Products">
          <div className="space-y-3">
            {[
              { a: "AI LMS", b: "certifications" },
              { a: "AI Interviewer", b: "readiness score" },
              { a: "AI Resume Builder", b: "ATS score" },
            ].map((row, i) => (
              <motion.div key={row.a} {...rise} transition={{ duration: 0.45, delay: i * 0.12 }} className="flex items-center gap-3">
                <span className="text-xs font-bold text-foreground bg-background border border-border rounded-lg px-3 py-2 shrink-0">{row.a}</span>
                <motion.span
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="h-px flex-1 bg-primary origin-left"
                />
                <span className="text-[10px] font-mono text-muted shrink-0">{row.b}</span>
              </motion.div>
            ))}
            <motion.div {...rise} transition={{ duration: 0.45, delay: 0.5 }} className="mt-2 flex items-center justify-center gap-2 bg-accent/5 border border-accent/20 rounded-xl py-3 text-accent">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold">One verified learner profile</span>
            </motion.div>
          </div>
        </Shell>
      );

    case "templates":
      return (
        <Shell label="Resume Templates">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { name: "Priya Nair", role: "Data Analyst", label: "Modern", photo: PEOPLE.priya.photo },
              { name: "Karan Shah", role: "Backend Engineer", label: "Classic", photo: PEOPLE.karan.photo },
              { name: "Neha Iyer", role: "Product Designer", label: "Fresher", photo: PEOPLE.neha.photo },
            ].map((tpl, i) => (
              <motion.div key={tpl.label} {...rise} transition={{ duration: 0.4, delay: i * 0.12 }} className={`rounded-xl border bg-white p-2.5 ${i === 0 ? "border-primary shadow-md" : "border-border"}`}>
                <div className="flex items-center gap-1.5 border-b border-border pb-1.5">
                  <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-border">
                    <Image src={tpl.photo} alt="" fill sizes="24px" className="object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[9px] font-bold text-foreground">{tpl.name}</span>
                    <span className={`block truncate text-[8px] font-bold ${i === 0 ? "text-primary-strong" : "text-muted"}`}>{tpl.role}</span>
                  </span>
                </div>
                <p className="mt-1.5 text-[7px] font-mono font-bold uppercase text-accent">Experience</p>
                <p className="text-[8px] leading-snug text-muted">Shipped dashboards used by 10K+ users.</p>
                <p className={`mt-2 text-center text-[8px] font-mono font-bold uppercase ${i === 0 ? "text-primary-strong" : "text-muted"}`}>{tpl.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] font-mono text-muted text-center mt-3">ATS-safe · role-specific layouts</p>
        </Shell>
      );

    case "suggestions":
      return (
        <Shell label="AI Suggestions">
          <div className="space-y-3">
            <div className="bg-background border border-border rounded-xl p-3">
              <p className="text-[10px] font-mono font-bold text-muted uppercase mb-1">Your text</p>
              <p className="text-xs text-muted font-medium line-through">Worked on the checkout page.</p>
            </div>
            <motion.div {...rise} transition={{ duration: 0.5, delay: 0.25 }} className="bg-primary/5 border border-primary/20 rounded-xl p-3">
              <p className="text-[10px] font-mono font-bold text-primary-strong uppercase mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> AI rewrite
              </p>
              <p className="text-xs text-foreground font-semibold">
                Rebuilt the checkout flow, cutting drop-off 23% and adding $1.2M annual revenue.
              </p>
            </motion.div>
          </div>
        </Shell>
      );

    case "preview":
      return (
        <Shell label="Live Preview">
          <div className="border border-border rounded-xl p-4">
            <div className="border-b-2 border-foreground pb-2 mb-3">
              <p className="font-display text-sm font-bold text-foreground">Jordan Lee</p>
              <p className="text-[10px] font-bold text-primary-strong">Frontend Engineer</p>
            </div>
            {[
              { s: "Summary", t: "Frontend engineer with 4 years building fast, accessible React apps." },
              { s: "Skills", t: "React · TypeScript · Next.js · Tailwind · Testing" },
              { s: "Experience", t: "Led a design-system migration that cut UI bugs by 35%." },
            ].map((row, i) => (
              <motion.div key={row.s} {...rise} transition={{ duration: 0.4, delay: i * 0.15 }} className="mb-3">
                <p className="text-[9px] font-mono font-bold text-accent uppercase tracking-wider mb-1">{row.s}</p>
                <p className="text-[10px] font-medium leading-snug text-foreground">{row.t}</p>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "jobpost":
      return (
        <Shell label="Post a Role">
          <div className="space-y-2.5">
            {[
              { l: "Role title", v: "Senior Frontend Engineer" },
              { l: "Experience", v: "Senior · 5+ years" },
              { l: "Must-have skills", v: "React · TypeScript · System Design" },
            ].map((row, i) => (
              <motion.div key={row.l} {...rise} transition={{ duration: 0.4, delay: i * 0.12 }}>
                <p className="text-[10px] font-mono font-bold text-foreground mb-1">{row.l}</p>
                <div className="bg-background border border-border rounded-xl px-3 py-2.5 text-xs font-semibold text-foreground">{row.v}</div>
              </motion.div>
            ))}
            <motion.div {...rise} transition={{ duration: 0.4, delay: 0.42 }} className="bg-primary-strong text-white rounded-full py-2.5 text-center text-xs font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Post & Get AI Shortlist
            </motion.div>
          </div>
        </Shell>
      );

    case "matching":
      return (
        <Shell label="AI Shortlist">
          <div className="space-y-2.5">
            {[
              { n: "Aarav Shah", r: "Senior Frontend", s: 96 },
              { n: "Priyanka Das", r: "ML Engineer", s: 93 },
              { n: "Daniel Cho", r: "Backend Engineer", s: 91 },
            ].map((c, i) => (
              <motion.div key={c.n} {...rise} transition={{ duration: 0.45, delay: i * 0.12 }} className="flex items-center gap-3 bg-background border border-border rounded-xl px-3 py-2.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary-strong flex items-center justify-center text-[10px] font-bold shrink-0">
                  {c.n.split(" ").map((x) => x[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-foreground truncate">{c.n}</p>
                  <p className="text-[10px] font-mono text-muted truncate">{c.r}</p>
                </div>
                <span className="font-display text-base font-bold text-accent shrink-0">{c.s}%</span>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "kanban":
      return (
        <Shell label="Candidate Pipeline">
          <div className="grid grid-cols-4 gap-2">
            {[
              { t: "New", people: [{ n: PEOPLE.karan.name, s: 84, p: PEOPLE.karan.photo }, { n: PEOPLE.priya.name, s: 81, p: PEOPLE.priya.photo }] },
              { t: "Screened", people: [{ n: PEOPLE.vikram.name, s: 89, p: PEOPLE.vikram.photo }] },
              { t: "Interview", people: [{ n: PEOPLE.ananya.name, s: 93, p: PEOPLE.ananya.photo }] },
              { t: "Offer", people: [{ n: PEOPLE.arjun.name, s: 96, p: PEOPLE.arjun.photo }] },
            ].map((col, i) => (
              <motion.div key={col.t} {...rise} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <p className="text-[9px] font-mono font-bold text-muted uppercase mb-1.5 truncate">{col.t}</p>
                <div className="space-y-1.5">
                  {col.people.map((c) => (
                    <div key={c.n} className={`rounded-lg border p-1.5 ${col.t === "Offer" ? "border-accent/40 bg-accent/5" : "border-border bg-background"}`}>
                      <div className="flex items-center gap-1.5">
                        <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full bg-border">
                          <Image src={c.p} alt="" fill sizes="20px" className="object-cover" />
                        </span>
                        <span className="truncate text-[9px] font-bold text-foreground">{c.n}</span>
                      </div>
                      <p className="mt-1 text-[8px] font-mono font-bold text-accent">{c.s}% match</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "marketplace":
      return (
        <Shell label="Institution ↔ Company">
          <div className="flex items-center gap-3">
            <motion.div {...rise} transition={{ duration: 0.45 }} className="flex-1 bg-background border border-border rounded-xl p-3 text-center">
              <p className="text-[10px] font-mono font-bold text-muted uppercase">Institution</p>
              <p className="text-xs font-bold text-foreground mt-1">142 job-ready learners</p>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="h-px w-10 bg-primary origin-left shrink-0"
            />
            <motion.div {...rise} transition={{ duration: 0.45, delay: 0.45 }} className="flex-1 bg-background border border-border rounded-xl p-3 text-center">
              <p className="text-[10px] font-mono font-bold text-muted uppercase">Company</p>
              <p className="text-xs font-bold text-foreground mt-1">18 open roles</p>
            </motion.div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-accent">
            <Star className="w-3.5 h-3.5 fill-accent" />
            <span className="text-[10px] font-mono font-bold">Matched on verified skills</span>
          </div>
        </Shell>
      );

    case "courses":
      return (
        <Shell label="Course Catalog">
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { t: "Generative AI Engineering", m: "42 lessons · 8 wks", p: 64 },
              { t: "Full-Stack Development", m: "58 lessons · 10 wks", p: 38 },
              { t: "Data Analytics", m: "40 lessons · 7 wks", p: 82 },
              { t: "Cloud & DevOps", m: "34 lessons · 6 wks", p: 15 },
            ].map((c, i) => (
              <motion.div key={c.t} {...rise} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-background border border-border rounded-xl overflow-hidden">
                <div className={`h-9 bg-gradient-to-br ${i % 2 === 0 ? "from-[#FF4D01] to-[#000080]" : "from-[#02683F] to-[#000080]"}`} />
                <div className="p-2.5">
                  <p className="text-[11px] font-bold text-foreground leading-tight truncate">{c.t}</p>
                  <p className="text-[9px] font-mono text-muted mt-0.5">{c.m}</p>
                  <div className="h-1 rounded-full bg-border overflow-hidden mt-2">
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${c.p}%` }} viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.25 + i * 0.1, ease: "easeOut" }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "compiler":
      return (
        <Shell label="In-Browser Compiler">
          <div className="rounded-xl overflow-hidden border border-border">
            <div className="bg-surface-dark px-3 py-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-white/60" />
              <span className="text-[10px] font-mono text-white/60">solution.py</span>
            </div>
            <div className="bg-surface-dark px-3 pb-3 font-mono text-[10px] leading-relaxed">
              {[
                { n: "1", c: "def two_sum(nums, target):", cls: "text-[#FF9E6D]" },
                { n: "2", c: "    seen = {}", cls: "text-white/80" },
                { n: "3", c: "    for i, n in enumerate(nums):", cls: "text-white/80" },
                { n: "4", c: "        if target - n in seen:", cls: "text-white/80" },
                { n: "5", c: "            return [seen[target-n], i]", cls: "text-[#7FD1A8]" },
              ].map((ln, i) => (
                <motion.div
                  key={ln.n}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.12 }}
                  className="flex gap-3"
                >
                  <span className="text-white/25 select-none">{ln.n}</span>
                  <span className={ln.cls}>{ln.c}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-2.5 space-y-1.5">
            {["Test 1 passed", "Test 2 passed", "Test 3 passed"].map((t, i) => (
              <motion.div key={t} {...rise} transition={{ duration: 0.35, delay: 0.7 + i * 0.15 }} className="flex items-center gap-2 text-accent">
                <Check className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono font-bold">{t}</span>
              </motion.div>
            ))}
          </div>
        </Shell>
      );

    case "assessment":
      return (
        <Shell label="Proctored Test">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
            <span className="text-[10px] font-mono font-bold text-muted">Question 7 of 20</span>
            <span className="flex items-center gap-1.5 text-primary-strong">
              <Timer className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono font-bold">18:42</span>
            </span>
          </div>
          <p className="text-xs font-bold text-foreground mb-3">Which method reduces overfitting in a neural network?</p>
          <div className="space-y-2">
            {["Increase learning rate", "Apply dropout regularization", "Remove validation split"].map((o, i) => (
              <motion.div
                key={o}
                {...rise}
                transition={{ duration: 0.35, delay: i * 0.12 }}
                className={`rounded-xl border px-3 py-2 text-[11px] font-semibold ${i === 1 ? "border-accent bg-accent/5 text-accent" : "border-border bg-background text-foreground"}`}
              >
                {o}
              </motion.div>
            ))}
          </div>
          <motion.div {...rise} transition={{ duration: 0.4, delay: 0.5 }} className="mt-3 flex items-center gap-2 bg-background border border-border rounded-xl px-3 py-2">
            <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="text-[10px] font-mono text-muted">AI proctoring active · tab-switch monitored</span>
          </motion.div>
        </Shell>
      );

    case "liveclass":
      return (
        <Shell label="Virtual Classroom">
          <div className="rounded-xl bg-surface-dark p-3 mb-2.5">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> LIVE
              </span>
              <span className="text-[10px] font-mono text-white/50">42 attending</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { src: PHOTOS.officeMeeting, name: "Instructor", speaking: true },
                { src: PEOPLE.ananya.photo, name: PEOPLE.ananya.name },
                { src: PEOPLE.rahul.photo, name: PEOPLE.rahul.name },
                { src: PEOPLE.sneha.photo, name: PEOPLE.sneha.name },
                { src: PEOPLE.vikram.photo, name: PEOPLE.vikram.name },
                { src: PEOPLE.arjun.photo, name: PEOPLE.arjun.name },
              ].map((tile, i) => (
                <motion.div
                  key={tile.name}
                  {...rise}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className={`relative aspect-video overflow-hidden rounded-lg bg-white/10 ${tile.speaking ? "ring-2 ring-primary" : ""}`}
                >
                  <Image src={tile.src} alt="" fill sizes="140px" className="object-cover" />
                  <span className="absolute bottom-1 left-1 rounded bg-black/55 px-1.5 py-0.5 text-[8px] font-bold text-white">
                    {tile.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <Video className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono">Auto-recorded · attendance synced to LMS</span>
          </div>
        </Shell>
      );

    default:
      return (
        <Shell label="Preview">
          <div className="h-40 flex items-center justify-center text-muted">
            <Search className="w-6 h-6" />
          </div>
        </Shell>
      );
  }
}
