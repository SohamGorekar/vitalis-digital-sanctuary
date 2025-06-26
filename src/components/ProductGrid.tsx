
import ProductCard from './ProductCard';
import { Button } from "@/components/ui/button";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Adaptogenic Ashwagandha Complex",
      price: 89,
      originalPrice: 120,
      image: "photo-1581091226825-a6a2a5aee158",
      category: "Adaptogens",
      isNew: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Marine Collagen Peptides",
      price: 65,
      image: "photo-1649972904349-6e44c42644a7",
      category: "Beauty",
      isBestseller: true,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Organic Turmeric Curcumin",
      price: 45,
      image: "photo-1500673922987-e212871fec22",
      category: "Anti-Inflammatory",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Probiotic Gut Health Formula",
      price: 78,
      image: "photo-1518495973542-4542c06a5843",
      category: "Digestive",
      rating: 4.6,
      reviews: 203
    },
    {
      id: 5,
      name: "Magnesium Glycinate Complex",
      price: 52,
      image: "photo-1501854140801-50d01698950b",
      category: "Sleep & Recovery",
      isNew: true,
      rating: 4.8,
      reviews: 98
    },
    {
      id: 6,
      name: "Omega-3 Algae Oil",
      price: 68,
      originalPrice: 85,
      image: "photo-1482938289607-e9573fc25abb",
      category: "Heart Health",
      rating: 4.7,
      reviews: 167
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-vitalis-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-px bg-vitalis-peach"></div>
            <span className="text-vitalis-peach font-medium uppercase tracking-wider text-sm">Featured Collection</span>
            <div className="w-12 h-px bg-vitalis-peach"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-vitalis-charcoal">Curated for Your</span>
            <br />
            <span className="text-vitalis-peach">Wellness Journey</span>
          </h2>
          <p className="text-xl text-vitalis-charcoal/70 max-w-3xl mx-auto">
            Science-backed formulations crafted with premium ingredients for optimal bioavailability and maximum wellness impact
          </p>
        </div>

        {/* Featured Product Highlight */}
        <div className="mb-16 p-8 bg-gradient-to-r from-vitalis-peach/10 to-vitalis-coral/10 rounded-3xl border border-vitalis-peach/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-vitalis-peach text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏆 Best Seller
              </span>
              <h3 className="text-3xl font-bold text-vitalis-charcoal mb-4">Adaptogenic Stress Relief Complex</h3>
              <p className="text-vitalis-charcoal/70 mb-6">Our most popular blend combining ashwagandha, rhodiola, and holy basil for natural stress management.</p>
              <Button className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal px-8 py-3 rounded-full hover-lift">
                Shop Now - $89
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop" 
                alt="Featured Product"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="border-2 border-vitalis-charcoal text-vitalis-charcoal hover:bg-vitalis-charcoal hover:text-white px-10 py-4 rounded-full font-semibold hover-lift transition-all">
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
