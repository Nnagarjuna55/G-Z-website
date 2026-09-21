import type { Metadata } from "next";
import Image from "next/image";
import { Target, Lightbulb, Flag, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/shared/PageHeader";
import CtaBand from "@/components/shared/CtaBand";
import TiltCard from "@/components/ui/TiltCard";
import { USE_CASES } from "@/data/useCases";

export const metadata: Metadata = {
  title: "Use Cases — Gen-Z Technologies",
  description:
    "How training institutes, colleges, technology companies and enterprises use AI LMS, AI Interviewer, AI Resume Builder and AI Job Portal.",
};

export default function UseCasesPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <PageHeader
        eyebrow="Use Cases"
        title="How Organizations Put the Suite to Work"
        description="Four common rollouts — the problem each organization starts with, how the products are used, and what the rollout is designed to achieve."
      >
        <div className="flex flex-wrap gap-2">
          {USE_CASES.map((uc) => (
            <a
              key={uc.slug}
              href={`#${uc.slug}`}
              className="inline-flex items-center rounded-full bg-white/80 backdrop-blur border border-border px-4 py-2 text-xs font-bold text-foreground hover:border-primary hover:text-primary-strong transition-colors"
            >
              {uc.audience}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          {USE_CASES.map((uc, index) => {
            const flip = index % 2 === 1;
            return (
              <article
                key={uc.slug}
                id={uc.slug}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-16 border-b border-border/60 last:border-b-0"
              >
                {/* Visual */}
                <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
                  <TiltCard max={6}>
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-xl bg-border">
                      <Image
                        src={uc.image}
                        alt={uc.audience}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">Use case</span>
                        <p className="font-display text-2xl font-bold mt-1">{uc.audience}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {uc.products.map((p) => (
                            <span key={p} className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[10px] font-bold">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>

                {/* Scenario */}
                <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                    {uc.headline}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/80 backdrop-blur rounded-2xl border border-border p-5">
                      <p className="flex items-center gap-2 text-[11px] font-mono font-bold text-primary-strong uppercase tracking-wider mb-2">
                        <Target className="w-3.5 h-3.5" /> The Challenge
                      </p>
                      <p className="text-sm text-muted font-medium leading-relaxed">{uc.challenge}</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl border border-border p-5">
                      <p className="flex items-center gap-2 text-[11px] font-mono font-bold text-accent uppercase tracking-wider mb-2">
                        <Lightbulb className="w-3.5 h-3.5" /> How the Suite Is Used
                      </p>
                      <p className="text-sm text-muted font-medium leading-relaxed">{uc.approach}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-foreground p-6 text-white">
                    <p className="flex items-center gap-2 text-[11px] font-mono font-bold text-primary uppercase tracking-wider mb-4">
                      <Flag className="w-3.5 h-3.5" /> What the Rollout Is Designed to Achieve
                    </p>
                    <ul className="space-y-2.5">
                      {uc.goals.map((goal) => (
                        <li key={goal} className="flex items-start gap-2.5 text-sm font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand title="See How This Fits Your Organization" />

      <Footer />
    </main>
  );
}
