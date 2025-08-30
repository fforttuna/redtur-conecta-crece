import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const sectorOptions = [
  "Agencias de Viaje",
  "Hotelería y Alojamiento", 
  "Transporte Turístico",
  "Guías de Turismo",
  "Restauración y Gastronomía",
  "Actividades y Experiencias",
  "Turismo de Aventura",
  "Ecoturismo",
  "Turismo Cultural",
  "Marketing Turístico",
  "Consultoría en Turismo",
  "Otro"
];

const HowItWorksSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    sector: "",
    privacyAccepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      alert("Debes aceptar la política de privacidad");
      return;
    }
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="how" className="py-24 bg-gradient-to-br from-background to-muted/5 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-league-spartan tracking-tight">
            Cómo funciona
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Editorial Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            
            {/* Step 01 - Inscríbete */}
            <div className="lg:border-r border-border/30 lg:pr-12 pb-16 lg:pb-0">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-primary text-4xl font-bold font-inter">01/</div>
                  <div className="h-0.5 w-16 bg-gradient-hero"></div>
                  <h3 className="text-3xl font-bold text-foreground font-league-spartan tracking-tight">
                    Inscríbete
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-muted-foreground mb-2 font-barlow-condensed tracking-wide">
                        NOMBRE COMPLETO
                      </label>
                      <Input
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        required
                        className="bg-muted/20 border-border/50 focus:border-primary text-foreground transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-muted-foreground mb-2 font-barlow-condensed tracking-wide">
                        SECTOR PROFESIONAL
                      </label>
                      <Select 
                        value={formData.sector} 
                        onValueChange={(value) => setFormData({...formData, sector: value})}
                        required
                      >
                        <SelectTrigger className="bg-muted/20 border-border/50 focus:border-primary text-foreground">
                          <SelectValue placeholder="Selecciona tu sector" />
                        </SelectTrigger>
                        <SelectContent>
                          {sectorOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start space-x-3 py-4">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacyAccepted}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, privacyAccepted: checked as boolean})
                        }
                        className="mt-1"
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                        Acepto la{" "}
                        <a 
                          href="/privacy" 
                          className="text-primary hover:text-primary-glow underline font-medium transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          política de privacidad
                        </a>
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold py-3 text-base transition-all duration-200 hover-bright font-barlow-condensed tracking-wide"
                    >
                      ENVIAR SOLICITUD
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Step 02 - Espera */}
            <div className="lg:border-r border-border/30 lg:px-12 py-16 lg:py-0">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-primary text-4xl font-bold font-inter">02/</div>
                  <div className="h-0.5 w-16 bg-gradient-hero"></div>
                  <h3 className="text-3xl font-bold text-foreground font-league-spartan tracking-tight">
                    Espera
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Te contactaremos pronto para tu entrevista online personalizada.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    En esta conversación profundizaremos en tus <strong className="text-foreground">valores</strong>, 
                    <strong className="text-foreground"> objetivos</strong> y 
                    <strong className="text-foreground"> pasiones</strong> para crear tu perfil único.
                  </p>
                </div>
              </div>
            </div>

                        {/* Step 03 - Sorpréndete */}
            <div className="lg:pl-12 pt-16 lg:pt-0">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-primary text-4xl font-bold font-inter">03/</div>
                  <div className="h-0.5 w-16 bg-gradient-hero"></div>
                  <h3 className="text-3xl font-bold text-foreground font-league-spartan tracking-tight">
                    Sorpréndete
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Recibe oportunidades alineadas con tus necesidades.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Nuestro equipo curará <strong className="text-foreground">invitaciones compatibles</strong> con 
                    tu perfil profesional y enviará solo las conexiones que realmente importen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;