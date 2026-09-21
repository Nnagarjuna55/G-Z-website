import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SOLUTIONS } from "@/data/solutions";
import TiltCard from "@/components/ui/TiltCard";
import CtaBand from "@/components/shared/CtaBand";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return { title: "Solution Not Found — Gen-Z Technologies" };
  return {
    title: `${solution.label} — Gen-Z Technologies`,
    description: solution.summary,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) notFound();

  const Icon = solution.icon;

  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/[0.06] rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary-strong flex items-center justify-center mb-6">
              <Icon className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">{solution.audience}</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-2 mb-5">
              {solution.headline}
            </h1>
            <p className="text-base md:text-lg text-muted font-medium mb-8">{solution.summary}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground border border-border text-xs font-bold tracking-wider hover:border-primary transition-colors"
              >
                <span>How the Platform Works</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl bg-border">
              <Image
                src={solution.image}
                alt={solution.label}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">The Problem</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              What Gets in the Way Today
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.challenges.map((challenge, index) => (
              <TiltCard key={challenge.title} delay={index * 0.08}>
                <div className="bg-white rounded-3xl p-7 border border-border shadow-sm">
                  <AlertCircle className="w-6 h-6 text-primary-strong mb-4" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted font-medium leading-relaxed">{challenge.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Products that solve it */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">The Solution</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              How Our Products Fit
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solution.products.map((product, index) => (
              <TiltCard key={product.id} delay={index * 0.08} max={6}>
              <Link
                href={product.href}
                className="group bg-white rounded-3xl p-7 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.label}</h3>
                  <p className="text-sm text-muted font-medium leading-relaxed">{product.why}</p>
                </div>
                <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-white group-hover:border-foreground transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* What you get + rollout */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">What You Get</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2 mb-8">
              Built for {solution.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {solution.outcomes.map((outcome) => (
                <div key={outcome.label} className="bg-white rounded-2xl border border-border p-5">
                  <p className="font-display text-xl md:text-2xl font-bold text-primary-strong break-words">{outcome.value}</p>
                  <p className="text-[11px] text-muted font-semibold mt-1.5 leading-tight">{outcome.label}</p>
                </div>
              ))}
            </div>
          </div>

          <TiltCard max={5}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-lg">
              <p className="text-[11px] font-mono font-bold text-accent uppercase tracking-wider mb-2">Your Rollout</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">From First Call to Go-Live</h3>
              <ol className="space-y-4">
                {[
                  { title: "Discovery call", text: "We map your programs, learners and hiring goals." },
                  { title: "Configure and brand", text: "Your logo, domain and modules, set up with your team." },
                  { title: "Go live with guided onboarding", text: "Admins and faculty trained, with support after launch." },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary-strong flex items-center justify-center font-display font-bold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-foreground">{step.title}</span>
                      <span className="block text-sm text-muted font-medium">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </TiltCard>
        </div>
      </section>

      <CtaBand
        title={`See It Running for ${solution.label}`}
        description="Book a walkthrough and we'll show the full suite configured for your exact use case."
        secondary={{ label: "See Use Cases", href: "/use-cases" }}
      />

      <Footer />
    </main>
  );
}
