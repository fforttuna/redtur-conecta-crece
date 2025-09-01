import { useState, useEffect } from "react";
import { Users, AlertCircle, Search, TrendingDown, ArrowRight, Zap, ChevronDown } from "lucide-react";

const problemData = [
  {
    id: "disconnect",
    icon: Users,
    title: "La Desconexión",
    subtitle: "El problema invisible",
    description: "Miles de profesionales del turismo trabajan en silos, perdiendo oportunidades valiosas cada día.",
    stats: "73% depende del boca a boca",
    color: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    accentColor: "text-blue-600"
  },
  {
    id: "inefficiency",
    icon: AlertCircle,
    title: "La Ineficiencia",
    subtitle: "Herramientas obsoletas",
    description: "Plataformas desactualizadas que no entienden las necesidades reales de la industria turística.",
    stats: "60% usa métodos anticuados",
    color: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    accentColor: "text-amber-600"
  },
  {
    id: "opportunities",
    icon: Search,
    title: "Las Oportunidades Perdidas",
    subtitle: "El costo del aislamiento",
    description: "Proyectos sin completar, colaboraciones que nunca suceden, y un potencial turístico sin explotar.",
    stats: "45% pierde oportunidades",
    color: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    accentColor: "text-red-600"
  }
];

const ProblemSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('why');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % problemData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const currentProblem = problemData[activeStep];

  return (
    <section id="why" className="py-24 bg-white relative overflow-hidden reveal">
      {/* Light background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full text-lg font-semibold mb-8 shadow-sm">
            <TrendingDown className="w-5 h-5" />
            Situación Actual del Turismo
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-league-spartan leading-tight">
            La industria turística está 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500"> fragmentada</span>
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Mientras Chile tiene un potencial turístico increíble, los profesionales del sector 
            enfrentan barreras invisibles que limitan su crecimiento y conexiones.
          </p>
        </div>

        {/* Narrative flow layout */}
        <div className="max-w-6xl mx-auto">
          {/* Interactive navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-6 bg-gray-100 p-2 rounded-full">
              {problemData.map((problem, index) => (
                <button
                  key={problem.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    index === activeStep 
                      ? 'bg-white shadow-md text-gray-900 scale-105' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  <problem.icon className={`w-5 h-5 ${index === activeStep ? problem.iconColor : 'text-gray-500'}`} />
                  <span className="font-medium">{problem.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className={`${currentProblem.color} rounded-3xl p-12 transition-all duration-700 shadow-lg`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Icon and stats */}
              <div className="text-center lg:text-left">
                <div className={`inline-flex items-center justify-center w-24 h-24 ${currentProblem.iconBg} rounded-2xl mb-8 shadow-sm`}>
                  <currentProblem.icon className={`w-12 h-12 ${currentProblem.iconColor}`} strokeWidth={1.5} />
                </div>
                
                <div className="space-y-4">
                  <p className={`text-lg font-semibold ${currentProblem.accentColor} uppercase tracking-wider`}>
                    {currentProblem.subtitle}
                  </p>
                  <h3 className="text-4xl font-bold text-gray-900 font-league-spartan">
                    {currentProblem.title}
                  </h3>
                  
                  <div className="inline-flex items-center gap-3 bg-white/80 px-6 py-3 rounded-full shadow-sm">
                    <Zap className={`w-5 h-5 ${currentProblem.iconColor}`} />
                    <span className="text-gray-800 font-semibold text-lg">{currentProblem.stats}</span>
                  </div>
                </div>
              </div>

              {/* Right side - Description */}
              <div className="space-y-8">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  {currentProblem.description}
                </p>
                
                {/* Visual representation */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <span className="text-gray-600">Falta de conexiones profesionales</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-600">Herramientas inadecuadas</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-600">Oportunidades perdidas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <span>¿Te identificas con esta realidad?</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <p className="text-gray-600 mt-6 text-xl">
              Es hora de cambiar esta situación juntos
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="flex justify-center py-8">
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;