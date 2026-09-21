import type { Metadata } from "next";
import {
  Code2, BrainCircuit, PenTool, Handshake, HeartHandshake,
  Rocket, Target, GraduationCap, Users, Mail, ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/shared/PageHeader";
import TiltCard from "@/components/ui/TiltCard";
import { PHOTOS } from "@/data/images";

export const metadata: Metadata = {
  title: "Careers — Gen-Z Technologies",
  description:
    "Build the AI products that connect learning and hiring. Explore teams and how to join Gen-Z Technologies in Hyderabad.",
};

const REASONS = [
  { icon: Rocket, title: "Real ownership", description: "Small teams own whole products end to end, from the first sketch to what institutions use every day." },
  { icon: Target, title: "Work that shows up in outcomes", description: "Every release changes whether a learner gets placed or a team hires faster. You see the impact." },
  { icon: BrainCircuit, title: "Build at the edge of applied AI", description: "Adaptive interviews, skill matching and AI content generation are core to the product, not side projects." },
  { icon: GraduationCap, title: "Keep learning", description: "We build learning software, so we take our own growth seriously — mentorship, reviews and time to go deep." },
];

const TEAMS = [
  { icon: Code2, name: "Engineering", description: "Build the platform behind AI LMS, AI Interviewer, AI Resume Builder and AI Job Portal." },
  { icon: BrainCircuit, name: "AI & Machine Learning", description: "Design the models behind adaptive questioning, scoring and candidate matching." },
  { icon: PenTool, name: "Product & Design", description: "Shape clear, accessible experiences for learners, faculty, admins and recruiters." },
  { icon: Handshake, name: "Sales & Partnerships", description: "Bring the suite to universities, training institutes and hiring companies." },
  { icon: HeartHandshake, name: "Customer Success", description: "Onboard institutions and make sure every rollout delivers measurable results." },
  { icon: Users, name: "Operations", description: "Keep the company running smoothly as we grow across teams and partners." },
];

const PROCESS = [
  { title: "Send your profile", description: "Email your resume and a note on the team you're interested in." },
  { title: "Intro conversation", description: "A short call to understand your goals and share what we're building." },
  { title: "Skills conversation", description: "A practical discussion or exercise related to the actual work." },
  { title: "Meet the team and offer", description: "Meet the people you'd work with, then a clear decision." },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <PageHeader
        eyebrow="Careers"
        title="Help Every Learner's Effort Count"
        description="We're building the AI products that turn coursework into careers. If you want your work to change real placement and hiring outcomes, we'd like to meet you."
        image={PHOTOS.teamOffice}
        imageAlt="The Gen-Z Technologies team collaborating"
      >
        <a
          href="mailto:support@gen-ztechnologies.com?subject=Careers%20at%20Gen-Z%20Technologies"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
        >
          <Mail className="w-4 h-4" />
          <span>Send Your Profile</span>
        </a>
      </PageHeader>

      {/* Why join */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Why Join</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              What Working Here Is Like
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((r, index) => {
              const Icon = r.icon;
              return (
                <TiltCard key={r.title} delay={index * 0.08}>
                  <div className="bg-white rounded-3xl p-7 border border-border shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">{r.title}</h3>
                    <p className="text-sm text-muted font-medium leading-relaxed">{r.description}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Teams</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
                Where You Could Fit
              </h2>
            </div>
            <p className="text-sm text-muted font-medium max-w-sm">
              Don&apos;t see an exact role? Send your profile anyway — we hire for strength and fit as we grow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAMS.map((team, index) => {
              const Icon = team.icon;
              return (
                <TiltCard key={team.name} delay={index * 0.06} max={6}>
                  <a
                    href={`mailto:support@gen-ztechnologies.com?subject=${encodeURIComponent(`Careers: ${team.name}`)}`}
                    className="group flex flex-col bg-white rounded-3xl p-7 border border-border shadow-sm hover:border-primary/40 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{team.name}</h3>
                    <p className="text-sm text-muted font-medium leading-relaxed flex-1">{team.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-primary-strong">
                      Apply to this team <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </a>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">How We Hire</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              A Clear, Respectful Process
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, index) => (
              <li key={step.title} className="relative bg-white/80 backdrop-blur rounded-3xl p-7 border border-border">
                <span className="font-display text-4xl font-bold text-primary/25">0{index + 1}</span>
                <h3 className="font-display text-base font-bold text-foreground mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-muted font-medium leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Apply */}
      <section className="py-20 px-6 md:px-12">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-foreground p-10 sm:p-14 text-center text-white">
          <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,77,1,0.45)_0%,transparent_70%)]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(2,104,63,0.5)_0%,transparent_70%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Build With Us?</h2>
            <p className="text-sm sm:text-base text-white/75 font-medium max-w-xl mx-auto mb-8">
              Email your resume and tell us which team excites you.
            </p>
            <a
              href="mailto:support@gen-ztechnologies.com?subject=Careers%20at%20Gen-Z%20Technologies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>support@gen-ztechnologies.com</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
