
import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

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
  ];

  const categories = ['all', 'Adaptogens', 'Beauty', 'Anti-Inflammatory', 'Digestive', 'Heart Health'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    let matchesPrice = true;
    
    if (priceRange === 'under-50') matchesPrice = product.price < 50;
    else if (priceRange === '50-75') matchesPrice = product.price >= 50 && product.price <= 75;
    else if (priceRange === 'over-75') matchesPrice = product.price > 75;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-vitalis-cream">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-vitalis-charcoal mb-4">
              Search <span className="text-vitalis-peach">Products</span>
            </h1>
            <p className="text-vitalis-charcoal/70 text-lg">Find your perfect wellness companion</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vitalis-charcoal/60 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-vitalis-coral/20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-vitalis-peach/30 text-vitalis-charcoal"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-vitalis-charcoal/60" />
              <span className="text-vitalis-charcoal/60 text-sm">Filters:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-full border border-vitalis-coral/20 bg-white/80 text-vitalis-charcoal text-sm"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 rounded-full border border-vitalis-coral/20 bg-white/80 text-vitalis-charcoal text-sm"
            >
              <option value="all">All Prices</option>
              <option value="under-50">Under $50</option>
              <option value="50-75">$50 - $75</option>
              <option value="over-75">Over $75</option>
            </select>

            {(searchQuery || selectedCategory !== 'all' || priceRange !== 'all') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="text-vitalis-peach hover:bg-vitalis-peach/10"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>

          {/* Results */}
          <div className="mb-8">
            <p className="text-vitalis-charcoal/60 text-center">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-vitalis-charcoal/60 text-lg mb-4">No products found</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
