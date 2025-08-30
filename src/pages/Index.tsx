import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MissionSection from "@/components/MissionSection";
import BetaSection from "@/components/BetaSection";
import TestimonialSection from "@/components/TestimonialSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import RevealOnScroll from "@/components/RevealOnScroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <MissionSection />
      <BetaSection />
      <TestimonialSection />
      <PartnersSection />
      <Footer />
      <FloatingWhatsAppButton />
      <RevealOnScroll />
    </div>
  );
};

export default Index;