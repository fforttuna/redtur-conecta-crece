const TestimonialSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden reveal">
      {/* Full-width background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background">
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(43, 108, 176, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(88, 28, 135, 0.08) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Typographic quotes */}
          <div className="relative">
            <span className="absolute -top-6 -left-4 text-6xl text-primary/30 font-serif leading-none select-none">"</span>
            <span className="absolute -bottom-16 -right-4 text-6xl text-primary/30 font-serif leading-none select-none rotate-180">"</span>
            
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight tracking-tight font-league-spartan mb-12">
              Gracias a RedTur pude encontrar trabajo en temporada baja de tours. 
              <br className="hidden md:block" />
              Antes tenía que viajar desde Santiago a probar suerte a las regiones. 
              <br className="hidden md:block" />
              <span className="font-medium text-primary">Esta vez, no tuve que moverme.</span>
            </blockquote>
          </div>
          
          {/* Attribution */}
          <div className="space-y-2">
            <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
            <h4 className="text-xl font-bold text-foreground font-league-spartan tracking-wide">
              Gianluca Natali
            </h4>
            <p className="text-lg text-muted-foreground font-barlow-condensed tracking-wide">
              OPERADOR TURÍSTICO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;