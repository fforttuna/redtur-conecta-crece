import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    // WhatsApp link with a default message
    const phoneNumber = "56981779956"; // Replace with actual phone number
    const message = encodeURIComponent("Hola! Tengo una pregunta sobre RedTur.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`
        fixed bottom-6 right-6 z-50
        bg-transparent border-2 border-primary/30 backdrop-blur-sm
        text-foreground hover:text-primary
        px-4 py-3 rounded-full
        font-roboto-condensed text-sm font-medium
        transition-all duration-300 ease-in-out
        hover:border-primary/60 hover:bg-primary/5
        flex items-center gap-2
        shadow-lg hover:shadow-xl
        ${isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">¿Tienes preguntas? Escríbeme aquí</span>
      <span className="sm:hidden">Escríbeme</span>
    </button>
  );
};

export default FloatingWhatsAppButton;
