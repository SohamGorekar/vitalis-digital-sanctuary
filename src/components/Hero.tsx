
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-vitalis-cream/90 via-vitalis-beige/85 to-vitalis-coral/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-vitalis-peach/70 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-60 right-16 w-3 h-3 bg-vitalis-apricot/60 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-24 w-5 h-5 bg-vitalis-coral/80 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-48 right-12 w-2 h-2 bg-vitalis-peach/90 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-vitalis-charcoal mb-6 leading-tight">
                Pure
                <span className="block text-vitalis-peach drop-shadow-sm">
                  Wellness
                </span>
                <span className="text-2xl md:text-3xl font-normal text-vitalis-charcoal/80 block mt-4">
                  Redefined
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-lg md:text-xl text-vitalis-charcoal/80 mb-8 max-w-xl leading-relaxed">
                Experience the future of holistic wellness with our scientifically-crafted supplements that harmonize ancient wisdom with modern innovation.
              </p>
            </div>

            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{animationDelay: '0.4s'}}>
              <Button className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal text-lg px-8 py-6 rounded-full hover-lift shadow-lg">
                <Play className="w-5 h-5 mr-2" />
                Take Wellness Quiz
              </Button>
              <Button variant="outline" className="border-2 border-vitalis-charcoal/20 hover:bg-vitalis-charcoal/10 text-vitalis-charcoal text-lg px-8 py-6 rounded-full hover-lift">
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-vitalis-peach/20 to-vitalis-coral/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass p-8 rounded-3xl backdrop-blur-xl border border-white/30 shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-vitalis-peach rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <h3 className="text-xl font-semibold text-vitalis-charcoal">Personalized Wellness</h3>
                    <p className="text-vitalis-charcoal/70 text-sm">AI-powered recommendations based on your unique health profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-vitalis-charcoal/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-vitalis-charcoal/30 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
