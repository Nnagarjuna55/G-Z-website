"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Palette, Link2, Plug } from "lucide-react";

// Deliberately not counts of our own features ("4 products, 23 modules") — those
// describe us, not the buyer's outcome. These are the four capability claims the
// rest of the site already substantiates.
const VALUES = [
  {
    icon: ShieldCheck,
    title: "Verified, not claimed",
    body: "Every candidate profile carries scored interviews and certifications with checkable IDs.",
  },
  {
    icon: Palette,
    title: "Entirely your brand",
    body: "White-label the platform to your logo, colors and domain. Learners never see ours.",
  },
  {
    icon: Link2,
    title: "One connected record",
    body: "Coursework, interview practice and hiring outcomes live on a single learner profile.",
  },
  {
    icon: Plug,
    title: "Fits your stack",
    body: "SSO via SAML, OAuth or LDAP, plus Zoom, Meet and Teams for live sessions.",
  },
];

export default function StatsBand() {
  return (
    <section className="relative w-full border-b border-border bg-white/[0.03] py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-primary/15 text-primary-strong mb-4">
                  <Icon className="w-5 h-5" />
                </span>
                <p className="font-display text-lg font-bold tracking-tight text-foreground">
                  {value.title}
                </p>
                <p className="text-sm text-muted font-medium leading-relaxed mt-2">{value.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
