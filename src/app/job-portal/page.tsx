import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBand from "@/components/shared/CtaBand";
import ModuleDeepDive from "@/components/products/ModuleDeepDive";
import ProductHero from "@/components/products/ProductHero";
import { PHOTOS } from "@/data/images";
import JobPortalClient from "./JobPortalClient";


export const metadata: Metadata = {
  title: "AI Job Portal — Gen-Z Technologies",
  description: "Post a role once and let AI screen, score, and shortlist candidates instantly — matching skills and signal, not just keywords.",
};

const STATS = [
  { value: "5", label: "Core modules" },
  { value: "AI-ranked", label: "Shortlists" },
  { value: "Verified", label: "Skill signals" },
];

export default function JobPortalPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <ProductHero
        eyebrow="AI Job Portal &bull; For Companies"
        title="Screen Less. Interview More of the Right People."
        description="Post a role once and let AI do the first pass — scoring, ranking, and shortlisting candidates by real signal, not keyword matching."
        bullets={[
          "AI-ranked shortlist for every role",
          "Verified interview scores and certifications on every profile",
          "Full candidate pipeline from New to Offer",
          "Campus drives and hiring partners built in",
        ]}
        visual="matching"
        photo={PHOTOS.meeting}
        stats={STATS}
        secondary={{ label: "See the AI LMS", href: "/ai-lms" }}
      />

      <ModuleDeepDive
        eyebrow="Main Modules"
        heading="A Complete AI Hiring Pipeline, Built In"
        subheading="Five modules covering the full hiring cycle — from posting a role to making an offer on verified evidence."
        productId="ai-job-portal"
      />

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Try It</span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-2">See the AI Shortlist in Action</h2>
          </div>
          <JobPortalClient />
        </div>
      </section>

      <CtaBand />

      <Footer />
    </main>
  );
}
