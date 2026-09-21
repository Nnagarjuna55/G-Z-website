import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBand from "@/components/shared/CtaBand";
import ModuleDeepDive from "@/components/products/ModuleDeepDive";
import ProductHero from "@/components/products/ProductHero";
import { PHOTOS } from "@/data/images";


export const metadata: Metadata = {
  title: "AI LMS — Gen-Z Technologies",
  description:
    "A complete AI-powered Learning Management System for institutions — course authoring, learner management, analytics, and certification, ready to deploy under your own brand.",
};

const BENEFITS = [
  "Launch under your own institution's brand, fully white-labeled",
  "Built-in AI Interviewer and Resume Builder for every learner",
  "Verified learner outcomes feed directly into the AI Job Portal",
  "Dedicated onboarding and support for institutional rollouts",
];

export default function AILmsPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <ProductHero
        eyebrow="AI LMS &bull; For Institutions"
        title="A Complete AI Learning Platform, Under Your Own Brand"
        description="Deploy a full learning management system for your institution — course authoring, learner management, analytics, and certification — with AI Interviewer and Resume Builder built in for every learner."
        bullets={BENEFITS}
        visual="analytics"
        photo={PHOTOS.studentClassroom}
        stats={[
          { value: "8", label: "Core modules" },
          { value: "White-label", label: "Your brand and domain" },
          { value: "SSO", label: "Campus sign-on" },
        ]}
        secondary={{ label: "See the AI Job Portal", href: "/job-portal" }}
      />

      <ModuleDeepDive
        eyebrow="Main Modules"
        heading="Everything an Institution Needs to Run Learning at Scale"
        subheading="Eight modules covering the full academic cycle — from authoring a course to issuing a verified certificate."
        productId="ai-lms"
      />

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Why AI LMS</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2 mb-6">
              Built to Be the Backbone of Your Institution&apos;s Learning
            </h2>
            <ul className="space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 text-white">
            <p className="font-display text-2xl font-bold mb-3">One Suite. Four Products.</p>
            <p className="text-sm text-white/90 font-medium leading-relaxed mb-6">
              AI LMS, AI Interviewer, AI Resume Builder, and AI Job Portal share one learner profile — so outcomes from your courses carry all the way through to hiring.
            </p>
            <Link href="/platform" className="inline-flex items-center gap-2 text-xs font-bold underline underline-offset-4">
              See how the products connect <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />

      <Footer />
    </main>
  );
}
