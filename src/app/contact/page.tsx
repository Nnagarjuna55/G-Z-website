import type { Metadata } from "next";
import { CalendarCheck, MessageSquareText, Rocket, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageHeader from "@/components/shared/PageHeader";
import TiltCard from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Request a Demo — Gen-Z Technologies",
  description:
    "Talk to Gen-Z Technologies about deploying AI LMS, AI Interviewer, AI Resume Builder and AI Job Portal for your institution or company.",
};

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Tell us your goals",
    description: "Share your institution or hiring needs in the form. It takes about two minutes.",
  },
  {
    icon: CalendarCheck,
    title: "Get a tailored walkthrough",
    description: "We schedule a 30-minute walkthrough configured for your use case.",
  },
  {
    icon: Rocket,
    title: "Go live with guided onboarding",
    description: "Approve the plan and we handle branding, migration and training with your team.",
  },
];

const CHANNELS = [
  { icon: Mail, label: "Email", value: "support@gen-ztechnologies.com", href: "mailto:support@gen-ztechnologies.com" },
  { icon: MapPin, label: "Office", value: "Hyderabad, Telangana, India" },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <PageHeader
        eyebrow="Request a Demo"
        title="Let's Plan Your AI Learning and Hiring Rollout"
        description="Whether you run a university, a training institute or a hiring team, we'll show you exactly how the four products fit your organization — no generic sales pitch."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {CHANNELS.map((c) => {
            const Icon = c.icon;
            const body = (
              <>
                <Icon className="w-4 h-4 text-primary-strong mb-2" />
                <p className="text-[10px] font-mono font-bold text-muted uppercase tracking-wider">{c.label}</p>
                <p className="text-xs font-bold text-foreground mt-0.5 break-words">{c.value}</p>
              </>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="bg-white/80 backdrop-blur border border-border rounded-2xl p-4 hover:border-primary transition-colors">
                {body}
              </a>
            ) : (
              <div key={c.label} className="bg-white/80 backdrop-blur border border-border rounded-2xl p-4">
                {body}
              </div>
            );
          })}
        </div>
      </PageHeader>

      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">What Happens Next</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              From First Message to Go-Live
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <TiltCard key={step.title} delay={index * 0.1}>
                  <div className="bg-white rounded-3xl p-7 border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-display text-3xl font-bold text-border">0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted font-medium leading-relaxed">{step.description}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}
