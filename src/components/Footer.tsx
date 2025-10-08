import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">TRF MÁQUINAS PESADAS</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Assistência técnica especializada em máquinas pesadas com atendimento personalizado em Rondônia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Rua Santa Clara, 1476<br />Bairro Riachuelo - Ji-Paraná - RO</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:ruyhenriq@gmail.com" className="hover:text-accent transition-colors">
                  ruyhenriq@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes sociais</h4>
            <a
              href="https://instagram.com/trfmaquinaspesadas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @trfmaquinaspesadas
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} TRF MÁQUINAS PESADAS - CNPJ: 46.446.108/0001-03</p>
            <p className="mt-1">Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
