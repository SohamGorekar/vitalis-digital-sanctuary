
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vitalis-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-peach rounded-full flex items-center justify-center">
                <span className="text-vitalis-charcoal font-bold text-sm">V</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Vitalis</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Your sanctuary for science-backed wellness. Crafted with purpose, delivered with care.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                All Products
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                Supplements
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                Beauty & Skincare
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                Essential Oils
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                Wellness Bundles
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                Wellness Quiz
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                Dosage Guide
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                Lab Results
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-white/70 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Informed</h3>
            <p className="text-white/70 text-sm">
              Get wellness tips and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="w-full gradient-peach text-vitalis-charcoal hover:opacity-90">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © 2024 Vitalis. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
