import { Card } from "@/components/ui/card";
import SignupForm from "./SignupForm";

const BetaSection = () => {
  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative reveal">
      {/* Metallic background texture */}
      <div className="absolute inset-0 opacity-25 bg-gradient-to-br from-secondary/8 via-transparent to-primary/12" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-league-spartan">
            Únete a la Prueba Beta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Únete a la prueba beta de RedTur y conéctate antes que nadie con agencias, 
            guías y proyectos en la industria del turismo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
                       <div className="space-y-10">
               <div className="group flex items-start space-x-6 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                 <div className="flex-shrink-0 mt-1">
                   <div className="text-primary text-6xl font-bold font-inter leading-none tracking-tight" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>
                     01
                   </div>
                 </div>
                 <div className="flex-1 pt-2">
                   <h3 className="font-bold text-foreground text-xl mb-2 font-league-spartan group-hover:text-primary transition-colors duration-300">Inscríbete</h3>
                   <p className="text-muted-foreground text-base leading-relaxed">
                     Completa el formulario con tus datos básicos
                   </p>
                 </div>
               </div>

               <div className="group flex items-start space-x-6 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                 <div className="flex-shrink-0 mt-1">
                   <div className="text-primary text-6xl font-bold font-inter leading-none tracking-tight" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>
                     02
                   </div>
                 </div>
                 <div className="flex-1 pt-2">
                   <h3 className="font-bold text-foreground text-xl mb-2 font-league-spartan group-hover:text-primary transition-colors duration-300">Espera</h3>
                   <p className="text-muted-foreground text-base leading-relaxed">
                     Te contactaremos para tu entrevista personalizada
                   </p>
                 </div>
               </div>

               <div className="group flex items-start space-x-6 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                 <div className="flex-shrink-0 mt-1">
                   <div className="text-primary text-6xl font-bold font-inter leading-none tracking-tight" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>
                     03
                   </div>
                 </div>
                 <div className="flex-1 pt-2">
                   <h3 className="font-bold text-foreground text-xl mb-2 font-league-spartan group-hover:text-primary transition-colors duration-300">Sorpréndete</h3>
                   <p className="text-muted-foreground text-base leading-relaxed">
                     Recibe conexiones y oportunidades curadas para ti
                   </p>
                 </div>
               </div>
             </div>

            <Card className="group p-8 shadow-2xl bg-background/70 backdrop-blur-lg border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-primary/10 relative overflow-hidden">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-6 font-league-spartan">
                  📝 Ingresa tus datos
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Completa el formulario a continuación para recibir acceso a tu 
                  entrevista inicial y comenzar a construir tu perfil en RedTur.
                </p>
                <SignupForm />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaSection;