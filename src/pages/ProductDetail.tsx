import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, Star, ArrowLeft, ShieldCheck, Truck, RotateCcw, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === Number(id));
    if (found) setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-4xl mb-8">Product Not Found</h2>
        <Link to="/products" className="text-brand-primary hover:underline">Back to Collection</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/products" className="inline-flex items-center gap-2 text-brand-text/40 hover:text-brand-primary transition-colors mb-12 uppercase tracking-widest text-[10px] font-bold">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-square bg-brand-surface border border-brand-line rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-8 left-8">
                <span className="px-3 py-1 bg-brand-primary text-brand-dark text-xs font-black uppercase rounded">
                  {product.discount}
                </span>
              </div>
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-brand-surface border border-brand-line rounded-2xl p-4 flex items-center justify-center cursor-pointer hover:border-brand-primary transition-colors">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain opacity-40" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="text-brand-primary text-xs font-mono uppercase tracking-widest mb-4 block">{product.category}</span>
              <h1 className="text-5xl md:text-6xl mb-6">{product.name}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-brand-primary">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-lg font-bold">4.9</span>
                  <span className="text-brand-text/20 text-sm font-normal">(128 Reviews)</span>
                </div>
                <span className="w-[1px] h-4 bg-brand-line" />
                <span className="text-green-500 text-sm font-bold uppercase tracking-widest">In Stock</span>
              </div>
            </div>

            <div className="mb-10 flex items-baseline gap-4">
              <span className="text-5xl font-mono text-brand-text">₦{product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="text-2xl text-brand-text/20 line-through font-mono">₦{product.oldPrice.toLocaleString()}</span>
              )}
            </div>

            <p className="text-brand-text/60 text-lg font-light leading-relaxed mb-10">
              Engineered for the demanding rider, this {product.name.toLowerCase()} offers unparalleled protection without compromising on comfort. Featuring advanced materials and ergonomic design, it's the perfect companion for your next journey.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-brand-line rounded-2xl bg-brand-surface p-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-brand-bg transition-colors rounded-xl"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-mono text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-brand-bg transition-colors rounded-xl"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 py-5 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-bg hover:text-brand-text border border-brand-primary transition-all flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-brand-line">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-primary" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-text/40">2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-brand-primary" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-text/40">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-brand-primary" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-text/40">30 Day Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl">Related <span className="text-brand-primary">Gear</span></h2>
            <Link to="/products" className="text-xs font-bold uppercase tracking-widest text-brand-primary flex items-center gap-2">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square bg-brand-surface border border-brand-line rounded-3xl p-8 mb-4 flex items-center justify-center group-hover:border-brand-primary/30 transition-all">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-sm font-bold group-hover:text-brand-primary transition-colors truncate">{p.name}</h4>
                <p className="text-brand-primary font-mono text-xs">₦{p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
