"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { moduleSlug } from "@/lib/slug";
import { cn } from "@/lib/utils";
import PhotoWithMockup from "@/components/products/PhotoWithMockup";
import { PRODUCTS } from "@/data/products";

interface ModuleDeepDiveProps {
  /** Product id — data is resolved client-side so icon components never cross the server boundary. */
  productId: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
}

export default function ModuleDeepDive({ productId, eyebrow = "Modules", heading, subheading }: ModuleDeepDiveProps) {
  const product = PRODUCTS.find((p) => p.id === productId);
  const modules = product?.modules ?? [];
  const [active, setActive] = useState(0);
  const chipRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const rowRef = useRef<HTMLDivElement>(null);

  // Highlight the module currently in the middle of the viewport.
  useEffect(() => {
    const els = modules
      .map((m) => document.getElementById(moduleSlug(m.title)))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = els.indexOf(entry.target as HTMLElement);
          if (index >= 0) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [modules]);

  // Keep the active chip visible by scrolling only the chip row, never the page.
  useEffect(() => {
    const row = rowRef.current;
    const chip = chipRefs.current[active];
    if (!row || !chip) return;
    const target = chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2;
    row.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  return (
    <section className="w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">{eyebrow}</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">{heading}</h2>
        {subheading && <p className="text-base text-muted font-medium mt-3 max-w-2xl">{subheading}</p>}
      </div>

      {/* Sticky module navigator */}
      <div className="sticky top-[60px] z-30 border-y border-border bg-background/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center gap-4">
          <span className="hidden md:inline shrink-0 text-[11px] font-mono font-bold text-muted tabular-nums">
            <span className="text-primary-strong">{String(active + 1).padStart(2, "0")}</span> / {String(modules.length).padStart(2, "0")}
          </span>
          <div ref={rowRef} className="relative flex gap-2 overflow-x-auto no-scrollbar">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = index === active;
              return (
                <a
                  key={mod.title}
                  ref={(el) => {
                    chipRefs.current[index] = el;
                  }}
                  href={`#${moduleSlug(mod.title)}`}
                  onClick={() => setActive(index)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full border pl-3 pr-4 py-2 text-xs font-bold whitespace-nowrap transition-colors",
                    isActive
                      ? "bg-foreground text-white border-foreground"
                      : "bg-white text-foreground border-border hover:border-primary hover:text-primary-strong"
                  )}
                >
                  <Icon className={cn("w-3.5 h-3.5", isActive ? "text-primary-strong" : "")} />
                  {mod.title}
                </a>
              );
            })}
          </div>
        </div>
        {/* progress line */}
        <div className="h-0.5 bg-border/60">
          <div
            className="h-full bg-primary transition-[width] duration-500"
            style={{ width: `${((active + 1) / Math.max(modules.length, 1)) * 100}%` }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        {modules.map((mod, index) => {
          const Icon = mod.icon;
          const flip = index % 2 === 1;
          return (
            <div
              key={mod.title}
              id={moduleSlug(mod.title)}
              className="scroll-mt-48 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-14 border-b border-border/60 last:border-b-0"
            >
              {/* Copy */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary-strong flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider">
                    Module {String(index + 1).padStart(2, "0")}
                    {product && <span className="text-border"> · </span>}
                    {product && <span className="text-accent">{product.label}</span>}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
                  {mod.title}
                </h3>
                <p className="text-base text-muted font-medium leading-relaxed mb-6">{mod.detail}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mod.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 rounded-2xl bg-white/70 border border-border px-3.5 py-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-sm font-semibold text-foreground leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: 16 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 1200 }}
                className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}
              >
                <PhotoWithMockup photo={mod.photo} alt={mod.title} visual={mod.visual} mirror={flip} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
