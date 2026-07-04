import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnalyzerSection from "@/components/AnalyzerSection";
import ErrorBoundary from "@/components/ErrorBoundary";
import FeatureHighlights from "@/components/FeatureHighlights";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";
import RoadmapSection from "@/components/RoadmapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <ErrorBoundary>
          <AnalyzerSection />
        </ErrorBoundary>
        <FeatureHighlights />
        <HowItWorks />
        <AboutSection />
        <TrustSection />
        <PricingSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
