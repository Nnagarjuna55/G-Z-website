import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBand from "@/components/shared/CtaBand";
import ModuleDeepDive from "@/components/products/ModuleDeepDive";
import ProductHero from "@/components/products/ProductHero";
import { PHOTOS } from "@/data/images";
import InterviewerClient from "./InterviewerClient";


export const metadata: Metadata = {
  title: "AI Interviewer — Gen-Z Technologies",
  description: "Practice real interview scenarios with an AI Interviewer that adapts to your role and gives instant, structured feedback.",
};

const FEATURES = [
  "Role-specific questions for frontend, backend, data, and PM tracks",
  "Adaptive follow-up questions, just like a real interviewer",
  "Instant scoring and structured feedback after every answer",
  "Practice as many times as you want, with no scheduling",
];

export default function AIInterviewerPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <ProductHero
        eyebrow="AI Interviewer &bull; For Learners"
        title="Practice Until the Real Interview Feels Easy"
        description="Rehearse real interview scenarios with an AI interviewer that adapts to your role and level, then get instant, structured feedback on every answer."
        bullets={FEATURES}
        visual="chat"
        photo={PHOTOS.officeMeeting}
        stats={[
          { value: "5", label: "Core modules" },
          { value: "Unlimited", label: "Practice sessions" },
          { value: "Instant", label: "Scored feedback" },
        ]}
        secondary={{ label: "See the AI LMS", href: "/ai-lms" }}
      />

      <ModuleDeepDive
        eyebrow="Main Modules"
        heading="What's Inside the AI Interviewer"
        subheading="Five modules that take a learner from first practice question to placement-ready."
        productId="ai-interviewer"
      />

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Try It</span>
            <h2 className="font-display text-2xl font-bold text-foreground mt-2">Run a Sample Mock Interview</h2>
          </div>
          <InterviewerClient />
        </div>
      </section>

      <CtaBand />

      <Footer />
    </main>
  );
}
