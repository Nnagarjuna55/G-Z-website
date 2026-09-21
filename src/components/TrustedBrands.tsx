"use client";

import { SKILLS } from "@/data/content";
import { Sparkles, BrainCircuit, Code2, Terminal, BarChart3, Cloud, Network, LayoutGrid, Globe } from "lucide-react";
import { FC } from "react";

const ICON_MAP: Record<string, FC<{ className?: string }>> = {
  Sparkles,
  BrainCircuit,
  Code2,
  Terminal,
  BarChart3,
  Cloud,
  Network,
  LayoutGrid,
};

export default function TrustedBrands() {
  const marqueeSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section className="relative w-full border-b border-border py-8 bg-white/60 overflow-hidden group">
      <p className="text-center text-[11px] font-mono font-bold text-muted uppercase tracking-widest mb-6">
        Programs Institutions Run on AI LMS
      </p>

      {/* Gradient Edge Masks */}
      <div className="pointer-events-none absolute left-0 top-8 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-8 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Infinite Scrolling Track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 group-hover:[animation-play-state:paused] transition-all">
          {marqueeSkills.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.iconName] || Globe;

            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
              >
                <IconComponent className="w-5 h-5 text-primary-strong" />
                <span className="text-sm font-bold tracking-wide text-foreground whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
