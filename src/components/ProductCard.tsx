
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  reviews: number;
}

const ProductCard = ({ product }: { product: ProductCardProps }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div 
      className="group relative bg-vitalis-beige/50 rounded-2xl p-6 hover-lift hover:shadow-xl transition-all duration-300 border border-vitalis-coral/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <Badge className="bg-vitalis-apricot text-vitalis-charcoal">New</Badge>
        )}
        {product.isBestseller && (
          <Badge className="bg-vitalis-peach text-vitalis-charcoal">Bestseller</Badge>
        )}
      </div>

      {/* Like Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-10 bg-white/80 hover:bg-white"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart 
          className={`h-4 w-4 transition-colors ${
            isLiked ? 'fill-vitalis-peach text-vitalis-peach' : 'text-vitalis-charcoal/60'
          }`} 
        />
      </Button>

      {/* Product Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src={`https://images.unsplash.com/${product.image}?w=400&h=400&fit=crop`}
          alt={product.name}
          className={`w-full h-64 object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Quick Add Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-vitalis-charcoal/20 flex items-center justify-center animate-fade-in-up">
            <Button 
              className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal rounded-full px-6"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <p className="text-sm text-vitalis-charcoal/60 uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="text-lg font-semibold text-vitalis-charcoal group-hover:text-vitalis-peach transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < Math.floor(product.rating) 
                    ? 'bg-vitalis-apricot' 
                    : 'bg-vitalis-coral/30'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-vitalis-charcoal/60">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-vitalis-charcoal">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-vitalis-charcoal/50 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <Button
            size="sm"
            className="bg-vitalis-coral hover:bg-vitalis-coral/90 text-vitalis-charcoal rounded-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
