import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const partners = [
  { 
    name: "Connectora",
    value: "Plataforma de redes profesionales para startups"
  },
  { 
    name: "Smartup",
    value: "Soluciones de inteligencia artificial empresarial"
  },
  { 
    name: "Microsoft for Startups",
    value: "Programa de aceleración y recursos cloud"
  }
];

const PartnersSection = () => {
  return (
    <section className="py-12 bg-transparent reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-muted-foreground font-roboto-condensed">
            Respaldados por aliados estratégicos
          </h2>
        </div>
        
        <TooltipProvider>
          <div className="flex justify-center items-center gap-12 md:gap-20 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div
                    className="group relative cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`${partner.name}: ${partner.value}`}
                  >
                    {/* Circular placeholder with glow */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      {/* Soft glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/20 via-white/10 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500 blur-xl scale-110 group-hover:scale-125" />
                      
                      {/* Main circle */}
                      <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                        {/* Logo slot placeholder */}
                        <div className="text-white/60 text-xs md:text-sm font-medium text-center px-2">
                          {/* Replace with actual logo image */}
                          <span className="block font-roboto-condensed">LOGO</span>
                        </div>
                      </div>
                      
                      {/* Additional metallic shine */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="bottom" 
                  className="bg-foreground/95 backdrop-blur-sm text-background border-foreground/20 px-4 py-2"
                >
                  <div className="space-y-1">
                    <p className="font-bold text-sm">{partner.name}</p>
                    <p className="text-xs text-background/80">{partner.value}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default PartnersSection;