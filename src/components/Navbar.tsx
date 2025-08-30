import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              RedTur
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12 font-inter">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-foreground hover:text-primary transition-all duration-200 ease-out font-medium text-base tracking-wide hover-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="text-primary font-semibold">01/</span> El Problema
            </button>
            <button
              onClick={() => scrollToSection("how")}
              className="text-foreground hover:text-primary transition-all duration-200 ease-out font-medium text-base tracking-wide hover-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="text-primary font-semibold">02/</span> Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection("more")}
              className="text-foreground hover:text-primary transition-all duration-200 ease-out font-medium text-base tracking-wide hover-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="text-primary font-semibold">03/</span> Más
            </button>
            <button
              onClick={() => scrollToSection("signup")}
              className="ml-4 text-primary hover:text-primary-glow transition-all duration-200 ease-out font-bold text-base tracking-wide hover-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background relative group"
            >
              <span className="text-primary font-bold">04/</span> Pruébalo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-260 ease-out group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 font-inter">
              <button
                onClick={() => scrollToSection("problem")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-all duration-200 ease-out font-medium text-base tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="text-primary font-semibold">01/</span> El Problema
              </button>
              <button
                onClick={() => scrollToSection("how")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-all duration-200 ease-out font-medium text-base tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="text-primary font-semibold">02/</span> Cómo Funciona
              </button>
              <button
                onClick={() => scrollToSection("more")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-all duration-200 ease-out font-medium text-base tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="text-primary font-semibold">03/</span> Más
              </button>
              <button
                onClick={() => scrollToSection("signup")}
                className="block w-full text-left px-3 py-2 mt-4 text-primary hover:text-primary-glow transition-all duration-200 ease-out font-bold text-base tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 border border-primary/30 rounded"
              >
                <span className="text-primary font-bold">04/</span> Pruébalo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;