import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "Visão",
      description: "Fornecer ao estado de Rondônia e regiões circunvizinhas um atendimento personalizado e específico para cada cliente",
    },
    {
      icon: Target,
      title: "Missão",
      description: "Entregar um atendimento técnico e comprometido com o cliente, desde a aquisição, no trabalho até a venda do equipamento",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Acompanhamento de parceria e gestão da sua frota, tanto em situações técnicas quanto operacionais",
    },
  ];

  const highlights = [
    "13 anos de experiência em autorizadas Volvo e Caterpillar",
    "Atendimento personalizado para cada cliente e equipamento",
    "Acompanhamento individualizado de toda a frota",
    "Gestão técnica e operacional completa",
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Sobre a TRF
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A TRF surgiu por meio de uma grande motivação pessoal do técnico e proprietário Ruy Henrique, 
            após entender a necessidade de um atendimento personalizado para cada cliente e equipamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 sm:p-8 shadow-subtle hover:shadow-medium transition-all duration-300 border border-border group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 lg:p-12">
          <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground mb-6 sm:mb-8 text-center">
            Por que escolher a TRF?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
