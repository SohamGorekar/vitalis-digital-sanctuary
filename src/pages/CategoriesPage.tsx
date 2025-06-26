
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const categories = [
    {
      id: 1,
      name: "Adaptogens",
      description: "Natural stress-relief and energy balance",
      image: "photo-1581091226825-a6a2a5aee158",
      productCount: 15,
      color: "from-vitalis-peach to-vitalis-coral",
      featured: true
    },
    {
      id: 2,
      name: "Beauty & Collagen",
      description: "Radiant skin and anti-aging support",
      image: "photo-1649972904349-6e44c42644a7",
      productCount: 12,
      color: "from-vitalis-coral to-vitalis-apricot"
    },
    {
      id: 3,
      name: "Anti-Inflammatory",
      description: "Natural inflammation support and joint health",
      image: "photo-1500673922987-e212871fec22",
      productCount: 8,
      color: "from-vitalis-apricot to-vitalis-beige"
    },
    {
      id: 4,
      name: "Digestive Health",
      description: "Gut health and digestive wellness",
      image: "photo-1518495973542-4542c06a5843",
      productCount: 20,
      color: "from-vitalis-beige to-vitalis-peach",
      featured: true
    },
    {
      id: 5,
      name: "Sleep & Recovery",
      description: "Better sleep and muscle recovery",
      image: "photo-1501854140801-50d01698950b",
      productCount: 10,
      color: "from-vitalis-peach to-vitalis-coral"
    },
    {
      id: 6,
      name: "Heart Health",
      description: "Cardiovascular support and circulation",
      image: "photo-1482938289607-e9573fc25abb",
      productCount: 14,
      color: "from-vitalis-coral to-vitalis-apricot"
    },
    {
      id: 7,
      name: "Brain & Focus",
      description: "Cognitive enhancement and mental clarity",
      image: "photo-1523712999610-f77fbcfc3843",
      productCount: 18,
      color: "from-vitalis-apricot to-vitalis-beige"
    },
    {
      id: 8,
      name: "Immune Support",
      description: "Strengthen your natural defenses",
      image: "photo-1582562124811-c09040d0a901",
      productCount: 16,
      color: "from-vitalis-beige to-vitalis-peach"
    }
  ];

  const featuredCategories = categories.filter(cat => cat.featured);
  const regularCategories = categories.filter(cat => !cat.featured);

  return (
    <div className="min-h-screen bg-vitalis-cream">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-vitalis-charcoal mb-6">
              Wellness <span className="text-vitalis-peach">Categories</span>
            </h1>
            <p className="text-xl text-vitalis-charcoal/70 max-w-3xl mx-auto">
              Discover targeted nutrition solutions designed for your specific health goals and lifestyle needs
            </p>
          </div>

          {/* Featured Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-vitalis-charcoal mb-8 text-center">Featured Collections</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredCategories.map((category, index) => (
                <Card 
                  key={category.id}
                  className="group relative overflow-hidden border-0 hover-lift cursor-pointer animate-scale-in bg-white/80 backdrop-blur-sm h-80"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={`https://images.unsplash.com/${category.image}?w=600&h=400&fit=crop`}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vitalis-charcoal/80 via-vitalis-charcoal/20 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${category.color} rounded-full text-vitalis-charcoal text-xs font-medium mb-3 self-start`}>
                      {category.productCount} Products
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-vitalis-peach transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <Link to={`/search?category=${encodeURIComponent(category.name)}`}>
                      <Button 
                        variant="ghost" 
                        className="text-vitalis-peach hover:text-white hover:bg-vitalis-peach/20 p-0 h-auto font-semibold group/btn self-start"
                      >
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* All Categories Grid */}
          <div>
            <h2 className="text-2xl font-bold text-vitalis-charcoal mb-8 text-center">All Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularCategories.map((category, index) => (
                <Card 
                  key={category.id}
                  className="group relative overflow-hidden border-0 hover-lift cursor-pointer animate-fade-in-up bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/search?category=${encodeURIComponent(category.name)}`}>
                    <div className="p-6">
                      <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={`https://images.unsplash.com/${category.image}?w=300&h=200&fit=crop`}
                          alt={category.name}
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className={`absolute top-2 right-2 px-2 py-1 bg-gradient-to-r ${category.color} rounded-full text-vitalis-charcoal text-xs font-medium`}>
                          {category.productCount}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-vitalis-charcoal mb-2 group-hover:text-vitalis-peach transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-vitalis-charcoal/70 text-sm mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center text-vitalis-peach text-sm font-medium group-hover:text-vitalis-charcoal transition-colors">
                        Shop Now
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="p-8 bg-gradient-to-r from-vitalis-peach/10 to-vitalis-coral/10 rounded-3xl border border-vitalis-peach/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-vitalis-charcoal mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-vitalis-charcoal/70 mb-6">Our wellness experts are here to help you find the perfect products for your health journey.</p>
              <Button className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal px-8 py-3 rounded-full font-semibold hover-lift">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
