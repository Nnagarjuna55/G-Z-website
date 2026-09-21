"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SOLUTIONS } from "@/data/solutions";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background border-t border-border py-16 px-6 md:px-12 text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4">
            <button onClick={scrollToTop} className="inline-flex items-center gap-2.5 mb-4 cursor-pointer text-left">
              <img src="/login-logo-final.png" alt="Gen-Z Technologies" className="h-9 w-auto object-contain" />
              <span className="font-display font-bold text-lg tracking-tight">Gen-Z Technologies</span>
            </button>
            <p className="text-sm text-muted max-w-md leading-relaxed font-medium">
              An AI product suite for institutions and companies — AI LMS, AI Interviewer, AI Resume Builder, and AI Job Portal, connected in one learner-to-hire pipeline.
            </p>
            <div className="mt-4 text-xs font-mono font-semibold text-muted">
              &copy; {new Date().getFullYear()} Gen-Z Technologies. All Rights Reserved.
            </div>
          </div>

          {/* Col 2: Product Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-wider text-accent uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              {PRODUCTS.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="hover:text-primary-strong transition-colors">
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-accent uppercase mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              {SOLUTIONS.map((solution) => (
                <li key={solution.slug}>
                  <Link href={`/solutions/${solution.slug}`} className="hover:text-primary-strong transition-colors">
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-wider text-accent uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-strong transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Scroll To Top */}
          <div className="md:col-span-1 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-mono font-bold uppercase text-foreground hover:text-primary-strong transition-colors cursor-pointer"
            >
              <span>Top</span>
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary-strong group-hover:text-white group-hover:border-primary transition-colors shadow-sm">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="pt-6 text-xs font-mono text-muted flex flex-col md:flex-row justify-between gap-3">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="mailto:support@gen-ztechnologies.com" className="hover:text-primary-strong transition-colors">
              support@gen-ztechnologies.com
            </a>
            <span>Hyderabad, Telangana</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-primary-strong transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-strong transition-colors">Terms of Service</Link>
            <Link href="/login" className="hover:text-primary-strong transition-colors">Log in</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
