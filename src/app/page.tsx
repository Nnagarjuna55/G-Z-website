import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import PillarsOverview from "@/components/PillarsOverview";
import ConnectedPipeline from "@/components/ConnectedPipeline";
import StatsBand from "@/components/StatsBand";
import AudienceSplit from "@/components/AudienceSplit";
import BeforeAfter from "@/components/BeforeAfter";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <PillarsOverview />
      <ConnectedPipeline />
      <StatsBand />
      <AudienceSplit />
      <BeforeAfter />
      <Insights />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
