import type { Metadata } from "next";
import Image from "next/image";
import { PHOTOS } from "@/data/images";
import { Target, Eye, Rocket, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import CtaBand from "@/components/shared/CtaBand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBand from "@/components/StatsBand";
import TiltCard from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "About — Gen-Z Technologies",
  description:
    "Gen-Z Technologies builds AI products that connect learning and hiring for institutions and companies. Our mission, values, and story.",
};

const VALUES = [
  {
    icon: Lightbulb,
    title: "Outcomes Over Features",
    description: "We measure our products by whether learners get hired, not by how long they stayed logged in.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence Over Claims",
    description: "Every skill on our platform is backed by verifiable coursework and performance, never self-declared.",
  },
  {
    icon: HeartHandshake,
    title: "Partners, Not Vendors",
    description: "Institutions get a dedicated onboarding team and stay supported long after go-live.",
  },
  {
    icon: Rocket,
    title: "Ship Fast, Stay Current",
    description: "AI moves weekly. Our platform ships improvements on the same cadence the field evolves.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-primary/[0.06] rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">About Us</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-2 mb-5 max-w-3xl">
            Closing the Gap Between Learning and Getting Hired
          </h1>
          <p className="text-base md:text-lg text-muted font-medium max-w-2xl mb-10">
            Gen-Z Technologies is a product company based in Hyderabad. We build the AI infrastructure that institutions use to teach, prepare, and place their learners &mdash; and that companies use to hire them on evidence.
          </p>

          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-border shadow-2xl bg-border">
            <Image
              src={PHOTOS.officeMeeting}
              alt="The Gen-Z Technologies team at work"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2 mb-6">
              The Problem We Kept Seeing
            </h2>
            <div className="space-y-4 text-base text-muted font-medium leading-relaxed">
              <p>
                Institutions were teaching well, but their students still struggled at interviews. Placement cells tracked readiness in spreadsheets. Recruiters received stacks of identical resumes with no way to tell who could actually do the work.
              </p>
              <p>
                Every part of that journey had a tool &mdash; an LMS here, a resume template there, a job board somewhere else &mdash; and none of them shared a single piece of data. The effort a student put into a course simply vanished by the time a recruiter looked at their profile.
              </p>
              <p>
                So we built the four products as one connected system. Coursework produces verified certifications. Interview practice produces a readiness score. Both flow into a resume, and then into a hiring shortlist that companies can trust. <span className="text-foreground font-semibold">Nothing gets lost between learning and hiring.</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-8 border border-border shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-sm text-muted font-medium leading-relaxed">
                A world where every learner&apos;s skills are verifiable, and no opportunity is lost because a resume failed to show what a person can really do.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-border shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-sm text-muted font-medium leading-relaxed">
                To give every institution the AI infrastructure to turn coursework into careers, and every company a faster path to talent proven by evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Values */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">What We Value</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              How We Build
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <TiltCard key={value.title} delay={index * 0.08}>
                  <div className="bg-white rounded-3xl p-7 border border-border shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary-strong flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted font-medium leading-relaxed">{value.description}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's Build Your Talent Pipeline"
        description="Whether you teach, train or hire — we'll show you the suite configured for your goals."
        secondary={{ label: "Join Our Team", href: "/careers" }}
      />

      <Footer />
    </main>
  );
}
