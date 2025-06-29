
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-vitalis-coral/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-peach rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-2xl font-bold text-vitalis-charcoal tracking-tight">
              Vitalis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/categories" className="text-vitalis-charcoal/80 hover:text-vitalis-charcoal transition-colors">
              Categories
            </Link>
            <a href="#" className="text-vitalis-charcoal/80 hover:text-vitalis-charcoal transition-colors">
              Apothecary
            </a>
            <a href="#" className="text-vitalis-charcoal/80 hover:text-vitalis-charcoal transition-colors">
              Diagnostics
            </a>
            <a href="#" className="text-vitalis-charcoal/80 hover:text-vitalis-charcoal transition-colors">
              Education
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost" size="icon" className="hover:bg-vitalis-coral/20">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-vitalis-coral/20">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hover:bg-vitalis-coral/20 relative">
                <ShoppingBag className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-vitalis-peach text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-vitalis-coral/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-vitalis-coral/20 pt-4">
            <div className="flex flex-col space-y-3">
              <Link to="/categories" className="text-vitalis-charcoal/80 hover:text-vitalis-charcoal transition-colors">
                Categories
              </Link>
              <a href="#" className="text-vitalis-charcoal/80 hover:text-vitalis-charcoal transition-colors">
                Apothecary
              </a>
              <a href="#" className="text-vitalis-charcoal/80 hover:text-vitalis-charcoal transition-colors">
                Diagnostics
              </a>
              <a href="#" className="text-vitalis-charcoal/80 hover:text-vitalis-charcoal transition-colors">
                Education
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
