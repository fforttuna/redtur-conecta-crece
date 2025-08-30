import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const HeroSection = () => {
  const scrollToSignup = () => {
    const element = document.getElementById("signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMore = () => {
    const element = document.getElementById("more");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 font-league-spartan">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Conéctate con el turismo de manera{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              inteligente
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La red curada que conecta a profesionales y oportunidades en turismo en Chile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToSignup}
              className="text-lg px-8 py-6 font-bold bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Inscríbete GRATIS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToMore}
              className="text-lg px-8 py-6 border-2 border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/40"
            >
              Conoce más
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;