
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-vitalis-cream">
        <Header />
        
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 text-vitalis-coral mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-vitalis-charcoal mb-4">Your cart is empty</h1>
              <p className="text-vitalis-charcoal/70 mb-8">Discover our wellness products to start your journey</p>
              <Link to="/">
                <Button className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal px-8 py-3 rounded-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vitalis-cream">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-vitalis-charcoal mb-4">
              Shopping <span className="text-vitalis-peach">Cart</span>
            </h1>
            <p className="text-vitalis-charcoal/70 text-lg">{getTotalItems()} items in your cart</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-6 bg-white/80 backdrop-blur-sm border-vitalis-coral/20">
                    <div className="flex items-center gap-6">
                      <img
                        src={`https://images.unsplash.com/${item.image}?w=120&h=120&fit=crop`}
                        alt={item.name}
                        className="w-24 h-24 rounded-xl object-cover"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-vitalis-charcoal mb-2">{item.name}</h3>
                        <p className="text-vitalis-charcoal/60 text-sm mb-2">{item.category}</p>
                        <p className="text-vitalis-peach font-bold text-lg">${item.price}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium text-vitalis-charcoal">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-vitalis-charcoal mb-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:bg-red-50 p-1"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-vitalis-coral/20 sticky top-24">
                  <h3 className="text-xl font-bold text-vitalis-charcoal mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-vitalis-charcoal">
                      <span>Subtotal ({getTotalItems()} items)</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-vitalis-charcoal">
                      <span>Shipping</span>
                      <span className="text-vitalis-peach">Free</span>
                    </div>
                    <div className="flex justify-between text-vitalis-charcoal">
                      <span>Tax</span>
                      <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-vitalis-coral/20 pt-4">
                      <div className="flex justify-between text-lg font-bold text-vitalis-charcoal">
                        <span>Total</span>
                        <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal py-3 rounded-full font-semibold">
                      Proceed to Checkout
                    </Button>
                    <Link to="/">
                      <Button variant="outline" className="w-full border-vitalis-charcoal text-vitalis-charcoal hover:bg-vitalis-charcoal hover:text-white rounded-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-vitalis-peach/10 to-vitalis-coral/10 rounded-2xl">
                    <p className="text-sm text-vitalis-charcoal">
                      <span className="font-semibold">Free shipping</span> on orders over $75
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
