import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const FloatingSocialBubbles = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socials = [
    { Icon: Instagram, href: "#", label: "Instagram", ariaLabel: "Síguenos en Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn", ariaLabel: "Conéctanos en LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter", ariaLabel: "Síguenos en Twitter" },
  ];

  return (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="group relative block"
          aria-label={social.ariaLabel}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Floating bubble */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icon */}
            <social.Icon 
              className="relative z-10 h-5 w-5 text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
            />
            
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-100 scale-150 transition-opacity duration-300 blur-xl" />
          </div>
          
          {/* Tooltip */}
          <span 
            className={`
              absolute left-14 top-1/2 -translate-y-1/2 
              bg-background/90 backdrop-blur-sm text-foreground 
              px-3 py-1 rounded-md text-sm whitespace-nowrap
              transition-all duration-300 pointer-events-none
              ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
            `}
          >
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialBubbles;