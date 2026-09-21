"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, MessageSquareText, FileText, Users } from "lucide-react";
import { PILLARS } from "@/data/pillars";
import TiltCard from "@/components/ui/TiltCard";

const ICONS = {
  BookOpen,
  MessageSquareText,
  FileText,
  Users,
};

export default function PillarsOverview() {
  return (
    <section id="about-us" className="relative w-full border-b border-border py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 pb-6 border-b border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Our Products</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mt-2">
              Four AI Products, <br className="hidden sm:block" /> One Connected Suite
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted font-medium max-w-sm">
            Built for institutions and companies — each product stands alone, and works even better together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = ICONS[pillar.iconName];
            return (
              <TiltCard key={pillar.id} delay={index * 0.08}>
                <Link
                  href={pillar.href}
                  className="group flex flex-col justify-between h-full bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${pillar.color === "primary" ? "bg-primary/10 text-primary-strong" : "bg-accent/10 text-accent"}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-display font-bold text-border select-none">{pillar.number}</span>
                  </div>

                  <div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${pillar.color === "primary" ? "text-primary-strong" : "text-accent"}`}>
                      {pillar.tagline}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted font-medium leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-lg font-display font-bold text-foreground">{pillar.stat.value}</span>
                      <span className="text-xs text-muted font-medium ml-1.5">{pillar.stat.label}</span>
                    </div>
                    <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-white group-hover:border-foreground transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
