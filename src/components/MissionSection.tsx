import { useState } from "react";
import { ChevronDown } from "lucide-react";

const missions = [
  {
    title: "Descentralizar la oferta y la demanda",
    description: "Facilitamos conexiones estratégicas entre personas, empresas, viajeros y destinos en regiones emergentes y menos saturadas."
  },
  {
    title: "Optimizar las conexiones profesionales en turismo",
    description: "Ayudamos a los usuarios a encontrar colaboradores, oportunidades y proyectos relevantes de manera eficiente."
  },
  {
    title: "Reducir las barreras de acceso a redes profesionales",
    description: "Ofrecemos un proceso intuitivo y personalizado para integrar a los miembros en la comunidad."
  }
];

const MissionSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleMission = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted/8 relative reveal">
      {/* Darker background for contrast */}
      <div className="absolute inset-0 bg-background/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-league-spartan tracking-tight">
            Nuestra misión
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0">
            {missions.map((mission, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`group px-8 py-12 ${index < missions.length - 1 ? 'md:border-r border-border/30' : ''}`}
                >
                  <button
                    onClick={() => toggleMission(index)}
                    onMouseEnter={() => setExpandedIndex(index)}
                    onMouseLeave={() => setExpandedIndex(null)}
                    className="w-full text-left space-y-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-2 -m-2"
                    aria-expanded={isExpanded}
                    aria-controls={`mission-content-${index}`}
                  >
                    <h3 className="text-2xl font-bold text-foreground font-league-spartan tracking-tight group-hover:text-primary transition-all duration-260 ease-out relative flex items-center justify-between">
                      <span className="relative">
                        {mission.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-260 ease-out group-hover:w-full"></span>
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-primary/60 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </h3>
                  </button>
                  
                  <div 
                    id={`mission-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isExpanded ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;