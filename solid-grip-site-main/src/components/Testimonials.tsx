import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Indústria Metalúrgica XYZ",
    role: "Gerente de Manutenção",
    text: "Parceria sólida há mais de 5 anos. Produtos de qualidade excepcional e atendimento sempre ágil e profissional.",
  },
  {
    name: "Ana Santos",
    company: "Grupo Industrial ABC",
    role: "Diretora de Operações",
    text: "A Suprimentos Full tem sido fundamental para manter nossa produção com eficiência. Recomendo fortemente!",
  },
  {
    name: "Roberto Oliveira",
    company: "Fábrica São Paulo",
    role: "Coordenador Técnico",
    text: "Excelente variedade de produtos e suporte técnico de primeira. Uma empresa que entende as necessidades da indústria.",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confiança construída através de resultados e relacionamentos duradouros
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-opacity duration-500 border-border ${
                index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <CardContent className="p-8 md:p-12">
                <Quote className="text-primary mb-6" size={48} />
                <p className="text-lg md:text-xl text-foreground mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                    <p className="text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-background hover:bg-muted p-3 rounded-full transition-all border border-border"
            >
              <ChevronLeft className="text-primary" size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-background hover:bg-muted p-3 rounded-full transition-all border border-border"
            >
              <ChevronRight className="text-primary" size={24} />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-primary w-6" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
