
import ProductCard from './ProductCard';

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
      image: "photo-1482938289607-e9573fc25ebb",
      category: "Heart Health",
      rating: 4.7,
      reviews: 167
    }
  ];

  return (
    <section className="py-20 bg-vitalis-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vitalis-charcoal mb-4">
            Curated for Your
            <span className="gradient-peach bg-clip-text text-transparent"> Wellness</span>
          </h2>
          <p className="text-xl text-vitalis-charcoal/70 max-w-2xl mx-auto">
            Science-backed formulations crafted with premium ingredients for optimal bioavailability
          </p>
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

        <div className="text-center mt-12">
          <button className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal px-8 py-4 rounded-full font-semibold hover-lift transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
