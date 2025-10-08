import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import midia1 from "@/assets/midia_1.jpg";
import midia2 from "@/assets/midia_2.jpg";
import midia3 from "@/assets/midia_3.jpg";
import midia4 from "@/assets/midia_4.jpg";
import midia5 from "@/assets/midia_5.jpg";
import midia6 from "@/assets/midia_6.jpg";
import midia7 from "@/assets/midia_7.jpg";
import midia8 from "@/assets/midia_8.jpg";
import midia9 from "@/assets/midia_9.jpg";
import midia10 from "@/assets/midia_10.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: midia1, alt: "Escavadeira Volvo em transporte" },
    { src: midia2, alt: "Manutenção de máquinas pesadas na oficina" },
    { src: midia3, alt: "Escavadeira Volvo em campo" },
    { src: midia4, alt: "Equipe TRF em trabalho de campo" },
    { src: midia5, alt: "Equipamentos de diagnóstico especializados" },
    { src: midia6, alt: "Atendimento técnico in loco" },
    { src: midia7, alt: "Software de diagnóstico Trem de Força" },
    { src: midia8, alt: "Equipamentos e ferramentas técnicas" },
    { src: midia9, alt: "Técnico especializado em serviço" },
    { src: midia10, alt: "Oficina equipada para máquinas pesadas" },
  ];

  return (
    <>
      <section id="galeria" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Nossa galeria
            </h2>
            <p className="text-lg text-muted-foreground">
              Conheça nosso trabalho e estrutura especializada em máquinas pesadas
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3500,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden cursor-pointer hover:shadow-medium transition-shadow">
                        <CardContent 
                          className="p-0 aspect-square"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 border-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
