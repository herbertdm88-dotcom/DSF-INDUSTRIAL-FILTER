import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DSF Industrial Filter</h3>
            <p className="text-background/80 mb-4">
              Soluções completas em filtração industrial com qualidade e confiabilidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-background/80">
              <li>Filtros de Ar</li>
              <li>Filtros Hidráulicos</li>
              <li>Filtros de Pó</li>
              <li>Filtros de Óleo</li>
              <li>Acessórios</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(11) 2840-0253</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(11) 98427-7139</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>contato@dsfindustrialfilter.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>&copy; {currentYear} DSF Industrial Filter. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
