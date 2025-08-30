import { Instagram, Linkedin, Twitter } from "lucide-react";

const FloatingSocialBubbles = () => {
  const socials = [
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram",
      ariaLabel: "Síguenos en Instagram"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      ariaLabel: "Conéctate en LinkedIn"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter",
      ariaLabel: "Síguenos en Twitter"
    }
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            aria-label={social.ariaLabel}
            className="group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
            title={social.label}
          >
            <Icon className="w-6 h-6 text-foreground/90 group-hover:text-foreground transition-colors duration-300" />
          </a>
        );
      })}
    </div>
  );
};

export default FloatingSocialBubbles;