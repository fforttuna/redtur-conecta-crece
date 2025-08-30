

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-warm bg-clip-text text-transparent">
              RedTur
            </h3>
            <p className="text-background/80 text-sm">
              Conectando el turismo de Chile
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            ©2025 RedTur. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;