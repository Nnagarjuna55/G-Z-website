import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBand from "@/components/shared/CtaBand";
import ModuleDeepDive from "@/components/products/ModuleDeepDive";
import ProductHero from "@/components/products/ProductHero";
import { PHOTOS } from "@/data/images";
import ResumeBuilderClient from "./ResumeBuilderClient";


export const metadata: Metadata = {
  title: "AI Resume Builder — Gen-Z Technologies",
  description: "Turn your experience into a recruiter-ready resume in minutes, with AI suggestions tuned to your target role.",
};

const FEATURES = [
  "Live preview updates as you type",
  "AI-optimized summary and phrasing suggestions",
  "Structured for applicant tracking systems (ATS)",
  "Built to pair with AI Interviewer practice sessions",
];


export default function ResumeBuilderPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <ProductHero
        eyebrow="AI Resume Builder &bull; For Learners"
        title="Build a Resume Recruiters Actually Read"
        description="Turn your experience into a recruiter-ready resume in minutes, with AI suggestions for phrasing, keywords, and formatting tuned to your target role."
        bullets={FEATURES}
        visual="gauge"
        photo={PHOTOS.studentsLaptops}
        stats={[
          { value: "5", label: "Core modules" },
          { value: "ATS", label: "Readiness scoring" },
          { value: "PDF & DOCX", label: "Export formats" },
        ]}
        secondary={{ label: "See the AI Job Portal", href: "/job-portal" }}
      />

      <ModuleDeepDive
        eyebrow="Main Modules"
        heading="What's Inside the AI Resume Builder"
        subheading="Five modules that turn verified coursework into a resume that clears ATS filters."
        productId="ai-resume-builder"
      />

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Try It</span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-2">Build a Sample Resume</h2>
          </div>
          <ResumeBuilderClient />
        </div>
      </section>

      <CtaBand />

      <Footer />
    </main>
  );
}
