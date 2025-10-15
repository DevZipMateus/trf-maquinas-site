import { Wrench, Settings, ClipboardCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Assistência técnica especializada",
      description: "Manutenção e reparos especializados em máquinas pesadas para construção civil e agrícolas",
      features: [
        "Diagnóstico completo",
        "Manutenção preventiva",
        "Reparos especializados",
        "Suporte emergencial",
      ],
    },
    {
      icon: Settings,
      title: "Gestão de frota",
      description: "Acompanhamento individualizado de cada equipamento da sua frota",
      features: [
        "Controle de manutenções",
        "Histórico de serviços",
        "Planejamento preventivo",
        "Relatórios técnicos",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Consultoria técnica",
      description: "Orientação especializada para otimizar o desempenho dos seus equipamentos",
      features: [
        "Avaliação técnica",
        "Orientação operacional",
        "Análise de desempenho",
        "Recomendações técnicas",
      ],
    },
    {
      icon: Users,
      title: "Atendimento personalizado",
      description: "Cada cliente recebe um atendimento único e adaptado às suas necessidades",
      features: [
        "Acompanhamento dedicado",
        "Atendimento direto",
        "Soluções customizadas",
        "Suporte contínuo",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Conte com a TRF em tudo para seu equipamento. Oferecemos soluções completas e personalizadas.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 sm:p-8 shadow-subtle hover:shadow-medium transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            Solicite um orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
