import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CtaBandProps {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export default function CtaBand({
  title = "See the Suite Running for Your Organization",
  description = "Book a 30-minute walkthrough and we'll show AI LMS, AI Interviewer, AI Resume Builder and AI Job Portal configured for your use case.",
  primary = { label: "Request a Demo", href: "/contact" },
  secondary = { label: "View Pricing", href: "/pricing" },
}: CtaBandProps) {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-foreground p-10 sm:p-14 text-center text-white">
        <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,77,1,0.45)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(2,104,63,0.5)_0%,transparent_70%)]" />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-sm sm:text-base text-white/75 font-medium max-w-xl mx-auto mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
            >
              <span>{primary.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white text-xs font-bold tracking-wider hover:bg-white/10 transition-colors"
              >
                {secondary.label}
              </Link>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs font-semibold text-white/80">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Guided onboarding</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Fully white-labeled</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Dedicated support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
