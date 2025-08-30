import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/8 relative reveal">
      {/* Subtle metallic background texture */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl bg-background/70 backdrop-blur-lg border-primary/30 hover:border-primary/50 transition-all duration-500 group hover:shadow-primary/10">
            <div className="grid md:grid-cols-2">
              {/* Image/Avatar Section - Left Side */}
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/20 to-primary/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                      <div className="text-5xl font-bold text-primary-foreground">
                        R
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      RedTur Team
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Conectando el turismo de Chile
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content Section - Right Side */}
              <div className="p-8 md:p-12 space-y-6 font-league-spartan">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Sobre nosotros
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      Nuestra Misión
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">RedTur nace para democratizar las oportunidades en turismo.</strong> Creemos que el talento no debería limitarse por falta de conexiones, sino potenciarse a través de una red curada y profesional.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      Nuestro Enfoque
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Conectamos a profesionales del turismo</strong> con oportunidades reales y colaboraciones significativas. No somos solo una plataforma, somos el puente hacia el crecimiento de tu carrera.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      Para Ti
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Si trabajas en turismo, esta red es para ti.</strong> Desde guías hasta agencias, desde emprendedores hasta profesionales establecidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;