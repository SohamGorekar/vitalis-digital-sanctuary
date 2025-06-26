
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import WellnessSection from '@/components/WellnessSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-vitalis-cream">
      <Header />
      <Hero />
      <WellnessSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
