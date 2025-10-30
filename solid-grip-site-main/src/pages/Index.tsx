import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import Benefits from "@/components/Benefits";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroCarousel />
        <ProductGrid />
        <Benefits />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
