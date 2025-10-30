import { Award, Shield, Clock, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Award,
    title: "Qualidade Certificada",
    description: "Produtos com certificação internacional e garantia de qualidade",
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Mais de 20 anos de experiência no mercado industrial",
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Respostas rápidas e soluções eficientes para suas necessidades",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Estoque completo e logística eficiente para todo o Brasil",
  },
];

const Benefits = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Por Que Escolher a DSF Industrial Filter?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência e satisfação do cliente em cada projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
