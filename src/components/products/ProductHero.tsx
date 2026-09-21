"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ModuleVisual, { type VisualVariant } from "@/components/products/ModuleVisual";
import TiltCard from "@/components/ui/TiltCard";
import PhotoWithMockup from "@/components/products/PhotoWithMockup";

interface ProductHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  visual: VisualVariant;
  photo?: string;
  stats: { value: string; label: string }[];
  secondary?: { label: string; href: string };
}

export default function ProductHero({
  eyebrow,
  title,
  description,
  bullets,
  visual,
  photo,
  stats,
  secondary,
}: ProductHeroProps) {
  return (
    <section className="relative pt-36 pb-16 px-6 md:px-12 border-b border-border overflow-hidden">
      {/* Ambient brand glow */}
      <div className="absolute top-10 right-0 w-[520px] h-[420px] bg-primary/[0.07] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-[420px] h-[320px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">{eyebrow}</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-2 mb-4 leading-[1.08]">
            {title}
          </h1>
          <p className="text-base md:text-lg text-muted font-medium max-w-xl mb-6">{description}</p>

          <ul className="space-y-2.5 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm font-semibold text-foreground">
                <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground border border-border text-xs font-bold tracking-wider hover:border-primary transition-colors"
              >
                <span>{secondary.label}</span>
              </Link>
            )}
          </div>

          {/* Stat strip */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-6 border-t border-border">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-xl font-bold text-primary-strong">{s.value}</p>
                <p className="text-[11px] text-muted font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 24 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 1200 }}
          className="lg:col-span-6"
        >
          {photo ? (
            <PhotoWithMockup photo={photo} alt={title} visual={visual} priority />
          ) : (
            <TiltCard reveal={false} max={9}>
              <ModuleVisual variant={visual} />
            </TiltCard>
          )}
        </motion.div>
      </div>
    </section>
  );
}
