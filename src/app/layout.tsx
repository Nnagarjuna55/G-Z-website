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
import CinematicHUD from "@/components/ui/CinematicHUD";

export const metadata: Metadata = {
  title: "Gen-Z Technologies — AI Job Portal, Interviewer, Resume Builder & LMS",
  description:
    "Gen-Z Technologies builds AI products for institutions and companies: an AI Job Portal, an AI Interviewer, an AI Resume Builder, and a white-labeled AI LMS — connected in one learner-to-hire pipeline.",
  keywords: [
    "Gen-Z Technologies",
    "AI Job Portal",
    "AI Hiring",
    "AI Shortlisting",
    "AI Interviewer",
    "AI Resume Builder",
    "AI LMS",
    "Learning Management System",
  ],
  authors: [{ name: "Gen-Z Technologies" }],
  openGraph: {
    title: "Gen-Z Technologies — AI Job Portal, Interviewer, Resume Builder & LMS",
    description:
      "AI products for institutions and companies — AI Job Portal, AI Interviewer, AI Resume Builder, and AI LMS in one connected suite.",
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
          <CinematicHUD />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
