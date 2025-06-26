
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Brain, Heart, Shield, ArrowRight } from 'lucide-react';

const WellnessSection = () => {
  const categories = [
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Nootropics and adaptogens for cognitive enhancement",
      color: "from-vitalis-peach to-vitalis-coral",
      image: "photo-1523712999610-f77fbcfc3843",
      stats: "15+ Products"
    },
    {
      icon: Heart,
      title: "Cardiovascular",
      description: "Heart-healthy nutrients for optimal circulation",
      color: "from-vitalis-coral to-vitalis-apricot",
      image: "photo-1470071459604-3b5ec3a7fe05",
      stats: "12+ Products"
    },
    {
      icon: Leaf,
      title: "Detox & Cleanse",
      description: "Natural botanicals for cellular purification",
      color: "from-vitalis-apricot to-vitalis-beige",
      image: "photo-1472396961693-142e6e269027",
      stats: "8+ Products"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Advanced immunity boosters and antioxidants",
      color: "from-vitalis-beige to-vitalis-peach",
      image: "photo-1582562124811-c09040d0a901",
      stats: "20+ Products"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-vitalis-cream via-white to-vitalis-beige/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-vitalis-charcoal">Wellness by</span>
              <br />
              <span className="text-vitalis-peach">Category</span>
            </h2>
          </div>
          <p className="text-xl text-vitalis-charcoal/70 max-w-2xl mx-auto mt-6">
            Targeted nutrition solutions designed for your specific health goals and lifestyle needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group relative overflow-hidden border-0 hover-lift cursor-pointer animate-scale-in bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-8 h-64 flex flex-col justify-between relative">
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                  
                  {/* Icon and Stats */}
                  <div className="flex justify-between items-start relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-sm text-vitalis-charcoal/60 font-medium">{category.stats}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-vitalis-charcoal mb-3 group-hover:text-vitalis-peach transition-colors">{category.title}</h3>
                    <p className="text-vitalis-charcoal/70 text-base mb-6 leading-relaxed">{category.description}</p>
                    <Button 
                      variant="ghost" 
                      className="text-vitalis-peach hover:text-vitalis-charcoal hover:bg-vitalis-peach/20 p-0 h-auto font-semibold group/btn"
                    >
                      Explore Products
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-vitalis-charcoal hover:bg-vitalis-charcoal/90 text-white px-10 py-4 rounded-full font-semibold hover-lift shadow-xl">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
