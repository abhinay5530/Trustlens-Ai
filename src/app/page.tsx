import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnalyzerSection from "@/components/AnalyzerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AnalyzerSection />
      </main>
      <Footer />
    </div>
  );
}
