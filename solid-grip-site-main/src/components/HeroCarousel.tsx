import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import filtersCloseup from "@/assets/filters-closeup.jpg";
import warehouse from "@/assets/warehouse.jpg";

const slides = [
  {
    image: heroIndustrial,
    title: "Filtros Industriais sob medida para sua indústria!",
    subtitle: "Mantas filtrantes, bags, cartuchos e muito mais",
  },
  {
    image: filtersCloseup,
    title: "Qualidade e durabilidade em cada produto",
    subtitle: "Soluções completas em filtração industrial",
  },
  {
    image: warehouse,
    title: "Estoque amplo e entrega rápida",
    subtitle: "Atendimento especializado para sua empresa",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToProducts = () => {
    const element = document.getElementById("produtos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          </div>
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {slide.subtitle}
              </p>
              <Button size="lg" onClick={scrollToProducts} className="text-lg px-8">
                Ver Produtos
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-3 rounded-full transition-all"
      >
        <ChevronLeft className="text-primary" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-3 rounded-full transition-all"
      >
        <ChevronRight className="text-primary" size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-background/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
