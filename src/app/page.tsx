import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnalyzerSection from "@/components/AnalyzerSection";
import ErrorBoundary from "@/components/ErrorBoundary";
import FeatureHighlights from "@/components/FeatureHighlights";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
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
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
