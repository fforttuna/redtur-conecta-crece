import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const SignupForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "¡Registro exitoso!",
        description: "Te contactaremos pronto para tu entrevista inicial.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          ¡Bienvenido a RedTur!
        </h3>
        <p className="text-muted-foreground">
          Revisa tu correo para los próximos pasos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Nombre y apellido</Label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1"
          placeholder="Juan Pérez"
        />
      </div>

      <div>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1"
          placeholder="+56 9 1234 5678"
        />
      </div>

      <div>
        <Label htmlFor="occupation">¿A qué te dedicas?</Label>
        <Select
          value={formData.occupation}
          onValueChange={(value) => setFormData({ ...formData, occupation: value })}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Selecciona tu área" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="guide">Guía turístico</SelectItem>
            <SelectItem value="agency">Agencia de viajes</SelectItem>
            <SelectItem value="hotel">Hotelería</SelectItem>
            <SelectItem value="transport">Transporte</SelectItem>
            <SelectItem value="gastronomy">Gastronomía</SelectItem>
            <SelectItem value="artisan">Artesanía</SelectItem>
            <SelectItem value="other">Otro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="text-sm text-muted-foreground">
        Al enviar este formulario, aceptas nuestra{" "}
        <a href="#" className="text-primary hover:underline">
          Política de privacidad de datos
        </a>
      </div>

      <Button
        type="submit"
        variant="hero"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};

export default SignupForm;