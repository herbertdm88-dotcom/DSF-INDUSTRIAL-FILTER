import { CheckCircle } from "lucide-react";
import aboutCompany from "@/assets/about-company.jpg";

const highlights = [
  "Mais de 20 anos de experiência no mercado",
  "Parcerias com fabricantes internacionais",
  "Equipe técnica especializada",
  "Compromisso com qualidade e prazos",
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Sobre a DSF Industrial Filter
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A DSF Industrial Filter é uma empresa especializada em soluções completas de filtração industrial,
              atendendo diversos segmentos da indústria brasileira com produtos de alta qualidade e 
              atendimento personalizado.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa missão é fornecer produtos e serviços que garantam a eficiência e segurança dos 
              processos industriais, contribuindo para o sucesso de nossos clientes através de soluções 
              inovadoras e confiáveis.
            </p>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-foreground text-lg">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up lg:order-first">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={aboutCompany}
                alt="Sobre a DSF Industrial Filter"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
