
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Brain, Heart, Shield } from 'lucide-react';

const WellnessSection = () => {
  const categories = [
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Nootropics and adaptogens for cognitive enhancement",
      color: "bg-vitalis-peach",
      image: "photo-1523712999610-f77fbcfc3843"
    },
    {
      icon: Heart,
      title: "Cardiovascular",
      description: "Heart-healthy nutrients for optimal circulation",
      color: "bg-vitalis-coral",
      image: "photo-1470071459604-3b5ec3a7fe05"
    },
    {
      icon: Leaf,
      title: "Detox & Cleanse",
      description: "Natural botanicals for cellular purification",
      color: "bg-vitalis-apricot",
      image: "photo-1472396961693-142e6e269027"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Advanced immunity boosters and antioxidants",
      color: "bg-vitalis-beige",
      image: "photo-1582562124811-c09040d0a901"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-vitalis-cream to-vitalis-beige/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vitalis-charcoal mb-4">
            Wellness by
            <span className="gradient-peach bg-clip-text text-transparent"> Category</span>
          </h2>
          <p className="text-xl text-vitalis-charcoal/70 max-w-2xl mx-auto">
            Targeted nutrition solutions designed for your specific health goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group relative overflow-hidden border-0 hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={`https://images.unsplash.com/${category.image}?w=400&h=500&fit=crop`}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vitalis-charcoal/80 via-vitalis-charcoal/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-64 flex flex-col justify-between">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-vitalis-charcoal" />
                  </div>
                  
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{category.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-white/30 text-white hover:bg-white hover:text-vitalis-charcoal"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
