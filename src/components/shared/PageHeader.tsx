"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ eyebrow, title, description, image, imageAlt, children }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-16 px-6 md:px-12 border-b border-border overflow-hidden">
      <div
        className={`max-w-7xl mx-auto relative z-10 grid grid-cols-1 gap-10 lg:gap-14 items-center ${image ? "lg:grid-cols-12" : ""}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={image ? "lg:col-span-6" : "max-w-3xl"}
        >
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">{eyebrow}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-2 mb-5 leading-[1.06]">
            {title}
          </h1>
          <p className="text-base md:text-lg text-muted font-medium max-w-2xl">{description}</p>
          {children && <div className="mt-8">{children}</div>}
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 1200 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl bg-border">
              <Image src={image} alt={imageAlt ?? title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/35 via-transparent to-transparent" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
