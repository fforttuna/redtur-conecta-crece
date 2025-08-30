import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const partners = [
  { 
    name: "Connectora",
    value: "Impulsando la innovación turística regional"
  },
  { 
    name: "Smartup",
    value: "Acelerando startups de turismo sostenible"
  },
  { 
    name: "Microsoft for Startups",
    value: "Tecnología de punta para el turismo del futuro"
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
        
        <div className="flex justify-center items-center gap-12 md:gap-16 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className="group relative cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/20 via-primary/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  
                  {/* Circular placeholder */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-foreground/10 border border-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-foreground/15 group-hover:border-foreground/30 transition-all duration-300">
                    {/* Placeholder for logo */}
                    <span className="text-xs md:text-sm font-medium text-foreground/40 text-center px-2 font-roboto-condensed">
                      LOGO
                    </span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-background/95 backdrop-blur-md border-primary/20 max-w-xs">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{partner.name}</p>
                  <p className="text-sm text-muted-foreground">{partner.value}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;