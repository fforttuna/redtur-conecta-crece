import { Card } from "@/components/ui/card";
import { Users, AlertCircle, Search } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Contactos informales",
    description: "Buscas trabajo pero todo depende del boca a boca."
  },
  {
    icon: AlertCircle,
    title: "Plataformas ineficaces",
    description: "Las redes existentes están desactualizadas y son poco efectivas."
  },
  {
    icon: Search,
    title: "Oportunidades perdidas",
    description: "No hay forma clara de encontrar y aprovechar oportunidades."
  }
];

const ProblemSection = () => {
  return (
    <section id="why" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative reveal">
      {/* Metallic texture overlay */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-secondary/5 via-transparent to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-league-spartan">
            ¿Eres parte de la industria turística y sientes que estás desconectado de las oportunidades?
          </h2>
          <p className="text-lg text-muted-foreground">
            La falta de una red confiable en la industria turística dificulta el acceso a nuevas conexiones, 
            genera incertidumbre laboral y limita el crecimiento de negocios turísticos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <Card className="p-8 text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-background/40 backdrop-blur-sm border-border/30 hover:border-primary/30 relative overflow-hidden">
                {/* Minimal design without heavy effects */}
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <problem.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground font-league-spartan group-hover:text-primary transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;