import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SOLUTIONS } from "@/data/solutions";
import TiltCard from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Solutions — Gen-Z Technologies",
  description:
    "AI products built for universities, training institutes, corporates, and job seekers — one connected suite from learning to hiring.",
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Solutions</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mt-2 mb-4 max-w-3xl">
            Built Around Who You Are
          </h1>
          <p className="text-base md:text-lg text-muted font-medium max-w-2xl">
            The same four products, configured for the outcome that matters to your organization — whether you teach, train, hire, or are looking to get hired.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <TiltCard key={solution.slug} delay={index * 0.08} max={6}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group bg-white rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all flex flex-col overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden bg-border">
                  <Image
                    src={solution.image}
                    alt={solution.label}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 text-primary-strong flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center group-hover:bg-foreground group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">{solution.audience}</span>
                <h2 className="font-display text-2xl font-bold text-foreground mt-2 mb-3">{solution.label}</h2>
                <p className="text-sm text-muted font-medium leading-relaxed mb-6 flex-1">{solution.summary}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {solution.outcomes.map((o) => (
                    <span key={o.label} className="text-[11px] font-mono font-bold text-foreground bg-background border border-border px-2.5 py-1 rounded-full">
                      {o.value} {o.label}
                    </span>
                  ))}
                </div>
                </div>
              </Link>
              </TiltCard>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
