import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus, ArrowRight, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/shared/PageHeader";
import CtaBand from "@/components/shared/CtaBand";
import TiltCard from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Pricing — Gen-Z Technologies",
  description:
    "Plans for institutions and companies adopting AI LMS, AI Interviewer, AI Resume Builder and AI Job Portal. Custom quotes based on learners, products and campuses.",
};

const PLANS = [
  {
    name: "Starter",
    tagline: "Start with one product",
    audience: "For a single campus or team piloting AI",
    highlighted: false,
    features: [
      "Any one of the four products",
      "Single campus or hiring team",
      "Standard branding",
      "Core analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "The connected suite",
    audience: "For institutions running learning to placement",
    highlighted: true,
    features: [
      "All four products, fully connected",
      "Unified learner profile",
      "Full white-label and custom domain",
      "Single sign-on (SSO)",
      "Advanced analytics and reports",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Multi-campus and large hiring teams",
    audience: "For university groups and enterprises",
    highlighted: false,
    features: [
      "Everything in Growth",
      "Multi-branch and multi-campus control",
      "Dedicated success manager",
      "Custom integrations and open API",
      "Uptime SLA and security review",
    ],
  },
];

type Cell = boolean | string;

const COMPARISON: { group: string; rows: { feature: string; values: [Cell, Cell, Cell] }[] }[] = [
  {
    group: "Products",
    rows: [
      { feature: "AI LMS", values: ["Choose one", true, true] },
      { feature: "AI Interviewer", values: ["Choose one", true, true] },
      { feature: "AI Resume Builder", values: ["Choose one", true, true] },
      { feature: "AI Job Portal", values: ["Choose one", true, true] },
      { feature: "Unified learner profile", values: [false, true, true] },
    ],
  },
  {
    group: "Brand & access",
    rows: [
      { feature: "Institution branding", values: ["Standard", "Full white-label", "Full white-label"] },
      { feature: "Custom domain", values: [false, true, true] },
      { feature: "Single sign-on (SSO)", values: [false, true, true] },
      { feature: "Multi-campus management", values: [false, false, true] },
    ],
  },
  {
    group: "Support",
    rows: [
      { feature: "Onboarding and training", values: [true, true, true] },
      { feature: "Data migration", values: [false, true, true] },
      { feature: "Support", values: ["Email", "Priority", "Dedicated manager"] },
      { feature: "Custom integrations and API", values: [false, false, true] },
    ],
  },
];

const FAQS = [
  {
    q: "How is pricing calculated?",
    a: "Quotes are based on the number of active learners or hiring seats, the products you choose, and how many campuses you run. We send a written quote after your demo.",
  },
  {
    q: "Can we start with one product and add more later?",
    a: "Yes. You can start on Starter with one product and move to Growth once they want the full learner-to-hire pipeline. Your data carries over.",
  },
  {
    q: "Is onboarding included?",
    a: "Onboarding and admin training are included in every plan. Growth and Enterprise also include migration of your existing learners and content.",
  },
  {
    q: "Do you work with companies that only need hiring?",
    a: "Yes. Companies often start with AI Job Portal alone, and can add AI Interviewer for structured first-round screening.",
  },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="w-4 h-4 text-accent mx-auto" />;
  if (value === false) return <Minus className="w-4 h-4 text-border mx-auto" />;
  return <span className="text-xs font-semibold text-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <PageHeader
        eyebrow="Pricing"
        title="Plans That Grow With Your Institution"
        description="Start with one product or deploy the full connected suite. Every plan is quoted on your real numbers — learners, products and campuses — so you only pay for what you run."
      />

      {/* Plans */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan, index) => (
            <TiltCard key={plan.name} delay={index * 0.1} max={6}>
              <div
                className={`relative flex flex-col rounded-3xl p-8 border shadow-sm ${
                  plan.highlighted ? "bg-foreground text-white border-foreground shadow-2xl" : "bg-white border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary-strong px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                    Recommended
                  </span>
                )}
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${plan.highlighted ? "text-primary" : "text-accent"}`}>
                  {plan.tagline}
                </span>
                <h2 className="font-display text-3xl font-bold mt-2">{plan.name}</h2>
                <p className={`text-sm font-medium mt-2 ${plan.highlighted ? "text-white/70" : "text-muted"}`}>{plan.audience}</p>

                <div className={`my-6 py-5 border-y ${plan.highlighted ? "border-white/15" : "border-border"}`}>
                  <p className="font-display text-2xl font-bold">Custom quote</p>
                  <p className={`text-xs font-medium mt-1 ${plan.highlighted ? "text-white/60" : "text-muted"}`}>
                    Based on learners, products and campuses
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-semibold">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.highlighted ? "bg-primary/20 text-primary" : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider transition-colors ${
                    plan.highlighted
                      ? "bg-primary-strong text-white hover:bg-primary-hover"
                      : "bg-background text-foreground border border-border hover:border-primary"
                  }`}
                >
                  Talk to Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Compare Plans</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              What&apos;s Included
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-white shadow-sm">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-border bg-background/60">
                  <th className="px-6 py-4 text-xs font-mono font-bold text-muted uppercase tracking-wider w-2/5">Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.name} className={`px-4 py-4 text-center font-display text-base font-bold ${p.highlighted ? "text-primary-strong" : "text-foreground"}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((group) => (
                  <Fragment key={group.group}>
                    <tr className="bg-background/40">
                      <td colSpan={4} className="px-6 pt-5 pb-2 text-[11px] font-mono font-bold text-accent uppercase tracking-wider">
                        {group.group}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-border/60">
                        <td className="px-6 py-3.5 text-sm font-semibold text-foreground">{row.feature}</td>
                        {row.values.map((v, i) => (
                          <td key={i} className="px-4 py-3.5 text-center">
                            <CellValue value={v} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">Pricing FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">
              Questions About Plans
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((item) => (
              <details key={item.q} className="group bg-white rounded-2xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-bold text-foreground">{item.q}</span>
                  <ChevronDown className="w-4 h-4 text-muted shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-5 pt-4 text-sm text-muted font-medium leading-relaxed border-t border-border">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Get a Quote for Your Organization"
        description="Tell us your learner count and the products you need — we'll send a clear, written quote after a short demo."
        secondary={{ label: "Compare Solutions", href: "/solutions" }}
      />

      <Footer />
    </main>
  );
}
