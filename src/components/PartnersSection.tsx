const partners = [
  { name: "Connectora" },
  { name: "Smartup" },
  { name: "Microsoft for Startups" }
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
        
        <div className="flex justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-500 relative"
            >
              {/* Subtle halo effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-radial from-primary/15 via-primary/5 to-transparent opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 blur-sm" />
              
              {/* Enhanced halo on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-radial from-primary/25 via-primary/10 to-transparent opacity-0 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500 blur-md" />
              
              <div className="h-12 md:h-16 flex items-center justify-center px-4 relative z-10">
                <div className="bg-transparent rounded-lg px-6 py-3 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                  <span className="text-sm md:text-base font-bold text-foreground font-roboto-condensed group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;