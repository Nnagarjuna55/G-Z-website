"use client";

import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import { ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/data/content";

export default function Insights() {
  return (
    <section className="relative w-full border-b border-border py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 pb-6 border-b border-border">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Insights</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mt-2">
            The Ideas Behind the Suite
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS.map((item, index) => (
            <TiltCard key={item.id} delay={index * 0.08}>
            <Link
              href={item.href}
              className="group flex flex-col bg-white rounded-3xl border border-border shadow-sm transition-all overflow-hidden"
            >
              <div className="relative h-36 w-full overflow-hidden bg-border">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">{item.category}</span>
                <h3 className="text-sm font-bold text-foreground mt-2 mb-4 leading-snug flex-1">{item.title}</h3>
                <div className="flex items-center justify-between pt-3 border-t border-border text-xs font-bold text-foreground group-hover:text-primary-strong transition-colors">
                  <span>{item.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
