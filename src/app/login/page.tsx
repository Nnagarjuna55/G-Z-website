import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Mail, ArrowRight, ArrowLeft, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Customer Sign In — Gen-Z Technologies",
  description:
    "Gen-Z Technologies customers sign in on their organization's own workspace. Find where to sign in or contact support.",
};

const STEPS = [
  {
    icon: Globe,
    title: "Use your organization's workspace link",
    description:
      "Each institution and company has its own branded workspace, often on its own domain such as learn.yourinstitute.edu. Your administrator shares this link.",
  },
  {
    icon: Building2,
    title: "Sign in with your organization's account",
    description:
      "If your organization uses single sign-on, sign in with the same account you use for your institution or company email.",
  },
  {
    icon: Mail,
    title: "Can't find your workspace?",
    description:
      "Ask your administrator for the link, or email our support team with your organization's name and we'll point you to it.",
  },
];

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <section className="pt-36 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-foreground mb-8">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>

          <span className="block text-xs font-mono font-bold text-accent uppercase tracking-wider">Customer Sign In</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-2 mb-4">
            Sign In to Your Workspace
          </h1>
          <p className="text-base md:text-lg text-muted font-medium mb-10">
            Gen-Z Technologies products run inside your organization&apos;s own branded workspace, so your team signs in there — not on this website.
          </p>

          <ol className="space-y-4 mb-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="flex gap-5 bg-white rounded-3xl border border-border shadow-sm p-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary-strong flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider">Step {i + 1}</p>
                    <h2 className="font-display text-lg font-bold text-foreground mt-0.5 mb-1.5">{step.title}</h2>
                    <p className="text-sm text-muted font-medium leading-relaxed">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@gen-ztechnologies.com?subject=Help%20finding%20my%20workspace"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Email Support</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground border border-border text-xs font-bold tracking-wider hover:border-primary transition-colors"
            >
              <span>New to Gen-Z Technologies? Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
