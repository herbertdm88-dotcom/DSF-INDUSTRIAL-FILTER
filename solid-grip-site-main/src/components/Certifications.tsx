import { Award, CheckCircle, FileCheck, Settings } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001",
  },
  {
    icon: FileCheck,
    title: "ABNT NBR 16401",
  },
  {
    icon: CheckCircle,
    title: "Garantia de Qualidade",
  },
  {
    icon: Settings,
    title: "Controle Industrial",
  },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            🧩 Certificações e Qualidade
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-4">
            <p>
              A DSF INDUSTRIAL FILTER atua com rigor técnico e compromisso com a qualidade. 
              Nossos processos seguem padrões reconhecidos internacionalmente, garantindo segurança, 
              eficiência e durabilidade em cada produto.
            </p>
            <p>
              Trabalhamos em conformidade com normas como ISO 9001 (Gestão da Qualidade) e ABNT NBR 16401, 
              assegurando alto desempenho em soluções para filtração industrial e controle de particulados.
            </p>
            <p>
              Nosso compromisso é fornecer produtos que superem expectativas, atendendo às exigências 
              das mais diversas áreas da indústria com confiabilidade e excelência.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={40} />
                </div>
                <h3 className="text-center font-bold text-foreground">
                  {cert.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
