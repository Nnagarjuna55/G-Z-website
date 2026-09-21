import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// Self-hosted at build time: no render-blocking request to Google on page load.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";
import PageBackground from "@/components/ui/PageBackground";

export const metadata: Metadata = {
  title: "Gen-Z Technologies — AI LMS, Interviewer, Resume Builder & Job Portal",
  description:
    "Gen-Z Technologies builds AI products for institutions and companies: a white-labeled AI LMS, an AI Interviewer, an AI Resume Builder, and an AI Job Portal — connected in one learner-to-hire pipeline.",
  keywords: [
    "Gen-Z Technologies",
    "AI LMS",
    "Learning Management System",
    "AI Interviewer",
    "AI Resume Builder",
    "AI Job Portal",
    "AI Hiring",
    "AI Shortlisting",
  ],
  authors: [{ name: "Gen-Z Technologies" }],
  openGraph: {
    title: "Gen-Z Technologies — AI LMS, Interviewer, Resume Builder & Job Portal",
    description:
      "AI products for institutions and companies — AI LMS, AI Interviewer, AI Resume Builder, and AI Job Portal in one connected suite.",
    url: "https://genztechnologies.com",
    siteName: "Gen-Z Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="bg-background text-foreground selection:bg-primary-strong selection:text-white antialiased">
        <SmoothScrollProvider>
          {/* Persistent SVG Noise Texture */}
          <PageBackground />
          <GrainOverlay />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
