import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import PillarsOverview from "@/components/PillarsOverview";
import ProductJourney from "@/components/ProductJourney";
import StatsBand from "@/components/StatsBand";
import AudienceSplit from "@/components/AudienceSplit";
import BeforeAfter from "@/components/BeforeAfter";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CtaBand from "@/components/shared/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <PillarsOverview />
      <ProductJourney />
      <StatsBand />
      <AudienceSplit />
      <BeforeAfter />
      <Insights />
      <FAQ />
      <CtaBand
        title="Ready to Train and Hire on Verified Skills?"
        description="Book a 30-minute walkthrough. We'll configure the AI Job Portal, AI Interviewer, AI Resume Builder and AI LMS around your institution or hiring needs."
      />
      <Contact />
      <Footer />
    </main>
  );
}
