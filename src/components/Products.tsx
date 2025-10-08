import { Package, Gauge, Cog } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "Leitura Matris",
      description: "Serviço especializado de leitura e diagnóstico de matriz eletrônica dos equipamentos",
    },
    {
      icon: Gauge,
      title: "Calibragem de transmissão",
      description: "Calibragem precisa e ajustes técnicos para otimizar o desempenho da transmissão",
    },
    {
      icon: Cog,
      title: "T.A (Teste de Avaliação)",
      description: "Teste completo de avaliação para identificar condições operacionais e possíveis melhorias",
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Produtos
          </h2>
          <p className="text-lg text-muted-foreground">
            Serviços especializados com tecnologia de ponta para manter seus equipamentos operando com máxima eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-subtle hover:shadow-medium transition-all duration-300 border border-border group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <product.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
