import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import productAirFilter from "@/assets/product-air-filter.jpg";
import productHydraulicFilter from "@/assets/product-hydraulic-filter.jpg";
import productDustFilter from "@/assets/product-dust-filter.jpg";
import productOilFilter from "@/assets/product-oil-filter.jpg";

const products = [
  {
    id: 1,
    name: "Filtros de Ar",
    description: "Filtros de ar industriais de alta eficiência para diversos tipos de aplicação",
    image: productAirFilter,
  },
  {
    id: 2,
    name: "Filtros Hidráulicos",
    description: "Elementos filtrantes para sistemas hidráulicos com máxima durabilidade",
    image: productHydraulicFilter,
  },
  {
    id: 3,
    name: "Filtros de Pó",
    description: "Mangas e cartuchos para sistemas de coleta de pó industrial",
    image: productDustFilter,
  },
  {
    id: 4,
    name: "Filtros de Óleo",
    description: "Filtros de óleo de alta performance para maquinário industrial",
    image: productOilFilter,
  },
];

const ProductGrid = () => {
  return (
    <section id="produtos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em filtração industrial com produtos de qualidade certificada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
