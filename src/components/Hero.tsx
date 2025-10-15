import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";
import logo from "@/assets/logo.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-background space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-background/20">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium">Assistência técnica especializada</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              TRF MÁQUINAS PESADAS
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light text-background/90 leading-relaxed">
              Atendimento personalizado e gestão completa para máquinas de construção civil e agrícolas em Rondônia
            </h2>

            <p className="text-lg text-background/80">
              Sua própria assistência técnica com acompanhamento individualizado para cada equipamento da sua frota.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="group"
              >
                Solicitar orçamento
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="hero-outline"
                size="lg"
                onClick={() => scrollToSection("servicos")}
              >
                Conheça nossos serviços
              </Button>
            </div>
          </div>

          {/* Logo Display */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
              <img
                src={logo}
                alt="TRF MÁQUINAS PESADAS"
                className="relative w-full max-w-md h-auto animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
