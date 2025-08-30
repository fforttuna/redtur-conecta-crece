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
            {missions.map((mission, index) => (
              <div 
                key={index} 
                className={`group px-8 py-12 ${index < missions.length - 1 ? 'md:border-r border-border/30' : ''}`}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground font-league-spartan tracking-tight group-hover:text-primary transition-all duration-260 ease-out relative">
                    {mission.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-260 ease-out group-hover:w-full"></span>
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-all duration-260 ease-out group-hover:brightness-105">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;