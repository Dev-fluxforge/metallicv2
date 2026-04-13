import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, ShoppingCart, Star, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Helmets', 'Jackets', 'Boots', 'Gloves', 'Parts', 'Accessories', 'Maintenance'];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl mb-6">Our <span className="text-brand-primary">Collection</span></h1>
          <p className="text-brand-text/60 text-lg max-w-2xl font-light">Precision engineered gear for the modern rider. Filter by category or search for specific items.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/20" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-surface border border-brand-line rounded-full pl-16 pr-8 py-5 focus:outline-none focus:border-brand-primary transition-colors"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-5 rounded-full border text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-brand-primary border-brand-primary text-brand-dark' : 'border-brand-line hover:border-brand-text/40'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="px-8 py-5 border border-brand-line rounded-full flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-surface transition-all">
            <SlidersHorizontal className="w-4 h-4" /> Sort <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Results Info */}
        <div className="mb-12 flex justify-between items-center text-xs font-mono text-brand-text/40 uppercase tracking-widest">
          <p>Showing {filteredProducts.length} results</p>
          <p>Lagos, Nigeria</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] bg-brand-surface border border-brand-line rounded-3xl p-8 mb-6 overflow-hidden flex items-center justify-center group-hover:border-brand-primary/30 transition-all duration-500">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2 py-1 bg-brand-primary text-brand-dark text-[10px] font-black uppercase rounded">
                    {product.discount}
                  </span>
                </div>
                <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full py-4 bg-brand-text text-brand-bg font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-brand-dark transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="text-sm font-bold leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">{product.name}</h4>
                  </Link>
                  <div className="flex items-center gap-1 text-brand-primary">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-[10px] font-bold">4.9</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-lg text-brand-text">₦{product.price.toLocaleString()}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-brand-text/30 line-through">₦{product.oldPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <div className="w-20 h-20 bg-brand-surface border border-brand-line rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="w-8 h-8 text-brand-text/20" />
            </div>
            <h3 className="text-2xl mb-4">No products found</h3>
            <p className="text-brand-text/40 max-w-md mx-auto">We couldn't find any products matching your current search or filters. Try adjusting them.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-8 px-8 py-4 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest text-xs"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
