
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-vitalis-cream via-vitalis-beige to-vitalis-coral/30">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-vitalis-apricot/60 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-vitalis-peach/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-vitalis-coral/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-vitalis-apricot/70 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-vitalis-charcoal mb-6 leading-tight">
              Pure
              <span className="block gradient-peach bg-clip-text text-transparent">
                Wellness
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl text-vitalis-charcoal/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover science-backed wellness products crafted for your holistic health journey
            </p>
          </div>

          <div className="animate-fade-in-up space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center" style={{animationDelay: '0.4s'}}>
            <Button className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal text-lg px-8 py-6 rounded-full hover-lift">
              Take Wellness Quiz
            </Button>
            <Button variant="outline" className="border-vitalis-coral hover:bg-vitalis-coral/20 text-vitalis-charcoal text-lg px-8 py-6 rounded-full hover-lift">
              Explore Products
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-vitalis-charcoal/50" />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${getComputedStyle(document.documentElement).getPropertyValue('--vitalis-charcoal')} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
