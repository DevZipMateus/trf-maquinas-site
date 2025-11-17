import { Package, Gauge, Cog, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "Leitura Matris",
      description: "Serviço especializado de leitura e diagnóstico de matriz eletrônica dos equipamentos",
    },
    {
      icon: Gauge,
      title: "Consulta para compra e venda de seminovos",
      description: "Realizamos análise técnica na compra ou venda do seminovo.",
      hasWhatsApp: true,
    },
    {
      icon: Cog,
      title: "T.A (Teste de Avaliação)",
      description: "Teste completo de avaliação para identificar condições operacionais e possíveis melhorias",
    },
  ];

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Produtos
          </h2>
          <p className="text-lg text-muted-foreground">
            Serviços especializados com tecnologia de ponta para manter seus equipamentos operando com máxima eficiência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 sm:p-8 shadow-subtle hover:shadow-medium transition-all duration-300 border border-border group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <product.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>
              {product.hasWhatsApp && (
                <div className="mt-4">
                  <p className="text-muted-foreground text-sm mb-3">
                    Precisa comprar ou vender um equipamento?
                  </p>
                  <Button
                    variant="whatsapp"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://wa.me/5569993177060"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chamar no WhatsApp
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
