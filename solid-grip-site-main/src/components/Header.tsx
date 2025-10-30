import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-xl font-bold text-primary">
              DSF
              <span className="block text-xs font-normal tracking-wider">INDUSTRIAL FILTER</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="bg-primary px-8 py-3 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Contato
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 bg-primary animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left uppercase text-sm"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left uppercase text-sm"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left uppercase text-sm"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-left uppercase text-sm"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
