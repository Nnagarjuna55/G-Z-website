import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ShieldCheck, Lock, Server, KeyRound, RefreshCcw, Plug,
  BookOpen, MessageSquareText, FileText, Users, CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBand from "@/components/shared/CtaBand";
import TiltCard from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Platform — Gen-Z Technologies",
  description:
    "One learner profile connects AI LMS, AI Interviewer, AI Resume Builder, and AI Job Portal — with enterprise-grade security, SSO, and integrations.",
};

const FLOW = [
  { icon: BookOpen, product: "AI LMS", emits: "Course progress, certifications, assessment scores" },
  { icon: MessageSquareText, product: "AI Interviewer", emits: "Readiness score, skill-gap map, session history" },
  { icon: FileText, product: "AI Resume Builder", emits: "ATS score, tailored resume versions" },
  { icon: Users, product: "AI Job Portal", emits: "Match score, pipeline stage, hiring outcome" },
];

const INTEGRATIONS = [
  { icon: KeyRound, title: "SSO & Identity", description: "SAML, OAuth 2.0, Google Workspace, Microsoft Entra ID, and LDAP for campus directories." },
  { icon: Plug, title: "Student & HR Systems", description: "Sync learners and employees from your existing SIS, ERP, or HRIS with scheduled imports." },
  { icon: Server, title: "Virtual Classrooms", description: "Zoom, Google Meet, and Microsoft Teams for live sessions, with attendance written back automatically." },
  { icon: RefreshCcw, title: "Open REST API & Webhooks", description: "Build custom dashboards or pipe events into your own data warehouse in real time." },
];

const SECURITY = [
  { icon: Lock, title: "Encrypted End to End", description: "TLS 1.3 in transit and AES-256 at rest across every product in the suite." },
  { icon: Server, title: "Isolated Workspaces", description: "Each institution and company operates in a logically isolated tenant. Data is never shared across organizations." },
  { icon: ShieldCheck, title: "Role-Based Access Control", description: "Granular permissions for admins, faculty, recruiters, and learners, with full audit logs." },
  { icon: KeyRound, title: "Data Ownership", description: "Your data stays yours. Export it any time, and it is permanently deleted on request." },
];

export default function PlatformPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-accent/[0.07] rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">The Platform</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-2 mb-5 max-w-3xl">
            Four Products. One Learner Profile.
          </h1>
          <p className="text-base md:text-lg text-muted font-medium max-w-2xl mb-8">
            Most organizations stitch together an LMS, an interview tool, a resume service, and a job board — and none of them talk to each other. Ours share a single profile, so every signal compounds instead of getting lost.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Data flow */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">How It Connects</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              What Each Product Contributes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {FLOW.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard key={item.product} delay={index * 0.08}>
                  <div className="relative bg-white rounded-3xl p-6 border border-border shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted">0{index + 1}</span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-3">{item.product}</h3>
                    <p className="text-[11px] font-mono font-bold text-accent uppercase tracking-wider mb-1.5">Writes to profile</p>
                    <p className="text-sm text-muted font-medium leading-relaxed">{item.emits}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          <div className="mt-6 bg-foreground text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div>
              <p className="font-display text-xl sm:text-2xl font-bold mb-2">The result: hiring on evidence.</p>
              <p className="text-sm text-white/70 font-medium max-w-2xl">
                By the time a learner reaches a recruiter, their profile already carries verified coursework, interview performance, and a resume built from both — so nobody is guessing.
              </p>
            </div>
            <Link
              href="/job-portal"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-foreground text-xs font-bold tracking-wider hover:bg-background transition-colors shrink-0"
            >
              See it in the Job Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Integrations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              Fits the Systems You Already Run
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {INTEGRATIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard key={item.title} delay={index * 0.08} max={6}>
                  <div className="bg-white rounded-3xl p-7 border border-border shadow-sm flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Security & Privacy</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              Built for Institutional Trust
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard key={item.title} delay={index * 0.08}>
                  <div className="bg-white rounded-3xl p-6 border border-border shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted font-medium leading-relaxed">{item.description}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rollout */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Rollout</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2 mb-10">
            A Guided Rollout
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { step: "Phase 1", title: "Setup & Branding", desc: "Workspace provisioning, white-labeling, domain, and SSO configuration." },
              { step: "Phase 2", title: "Migration & Training", desc: "Import learners and existing content, then train admins and faculty." },
              { step: "Phase 3", title: "Go Live", desc: "Launch to learners with dedicated support, then review first outcome reports." },
            ].map((phase, index) => (
              <TiltCard key={phase.step} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-7 border border-border shadow-sm">
                  <span className="text-[11px] font-mono font-bold text-primary-strong uppercase tracking-wider">{phase.step}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted font-medium leading-relaxed">{phase.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-xs font-semibold text-foreground">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Dedicated onboarding manager</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Data migration included</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Admin & faculty training</span>
          </div>
        </div>
      </section>

      <CtaBand />

      <Footer />
    </main>
  );
}
