import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Santa Clara, 1476",
      subtitle: "Bairro Riachuelo - Ji-Paraná - RO",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(69) 99317-7060",
      link: "https://wa.me/5569993177060",
    },
    {
      icon: Mail,
      title: "Email",
      content: "ruyhenriq@gmail.com",
      link: "mailto:ruyhenriq@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a Sexta: 08:00 às 11:30 - 13:30 às 18:00",
      subtitle: "Sábado: 08:00 às 12:00",
    },
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato conosco e receba atendimento personalizado para suas máquinas.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 sm:p-6 shadow-subtle border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.content}</p>
                  )}
                  {info.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {info.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="whatsapp"
            size="lg"
            asChild
          >
            <a
              href="https://wa.me/5569993177060"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Phone className="w-5 h-5" />
              Fale conosco no WhatsApp
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a
              href="https://instagram.com/trfmaquinaspesadas"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Instagram className="w-5 h-5" />
              @trfmaquinaspesadas
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
