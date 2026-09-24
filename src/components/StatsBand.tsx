"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const STATS = [
  { value: 4, suffix: "", label: "AI products in one suite" },
  { value: 23, suffix: "", label: "Product modules" },
  { value: 1, suffix: "", label: "Unified learner profile" },
  { value: 100, suffix: "%", label: "White-label ready" },
];

export default function StatsBand() {
  return (
    <section className="relative w-full border-b border-border bg-white/60 text-foreground py-14 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center lg:text-left lg:pl-6 lg:border-l lg:border-border first:lg:border-l-0 first:lg:pl-0"
            >
              <p className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary-strong">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs md:text-sm text-muted font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
