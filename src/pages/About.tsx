import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-league-spartan tracking-tight">
                Sobre nosotros
              </h1>
              <p className="text-xl text-muted-foreground">
                Conectando profesionales del turismo en Chile
              </p>
            </div>
            
            <div className="bg-background/60 backdrop-blur-lg border border-primary/20 rounded-lg p-8 md:p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-league-spartan">
                    Nuestra Historia
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    [Contenido de la historia de RedTur - placeholder]
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-league-spartan">
                    Nuestro Equipo
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    [Información del equipo - placeholder]
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-league-spartan">
                    Nuestra Visión
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    [Visión de la empresa - placeholder]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
