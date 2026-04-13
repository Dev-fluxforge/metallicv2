import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Star, Search, ShoppingCart, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, CATEGORIES, BRANDS } from '../constants';

const Home: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src="image/Helmet.png" 
            className="w-full h-full object-cover object-right"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
              Premium Moto Gear
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-8">
              Unleash the <br /> <span className="text-brand-primary">Road Warrior</span>
            </h1>
            <p className="text-lg text-white/60 max-w-lg mb-10 font-light leading-relaxed">
              Gear up with Metallic Horses. Precision engineered kits for those who push boundaries. Ride safer, ride bolder, and dominate every mile.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="px-8 py-4 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 group">
                Shop Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 border border-brand-line hover:bg-white/5 transition-all font-bold uppercase tracking-widest">
                View Catalog
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-6 right-6 z-20 hidden lg:block">
          <div className="max-w-7xl mx-auto flex justify-between items-end">
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-display">15k+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Happy Riders</p>
              </div>
              <div>
                <p className="text-3xl font-display">200+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Premium Products</p>
              </div>
              <div>
                <p className="text-3xl font-display">50+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Global Brands</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-white/40">
              <span className="w-12 h-[1px] bg-brand-line" />
              ESTABLISHED 2024
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 border-y border-brand-line bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl mb-2">Categories</h2>
              <p className="text-white/40 text-sm">Browse our specialized gear collections</p>
            </div>
            <button className="text-xs font-bold uppercase tracking-widest text-brand-primary flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div 
                key={cat.name}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-brand-surface border border-brand-line rounded-2xl p-8 mb-4 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-center text-sm tracking-widest group-hover:text-brand-primary transition-colors">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-6xl mb-4">Featured <span className="text-brand-primary">Gear</span></h2>
              <p className="text-white/60 font-light">Explore our handpicked selection of high-performance motorcycle equipment, engineered for maximum safety and style.</p>
            </div>
            <div className="flex gap-2">
              {['All', 'Helmets', 'Jackets', 'Boots'].map(filter => (
                <button key={filter} className={`px-5 py-2 text-[10px] uppercase tracking-widest font-bold rounded-full border transition-all ${filter === 'All' ? 'bg-brand-primary border-brand-primary text-brand-dark' : 'border-brand-line hover:border-white/40'}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[4/5] bg-brand-surface border border-brand-line rounded-3xl p-8 mb-6 overflow-hidden flex items-center justify-center group-hover:border-brand-primary/30 transition-all duration-500">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-1 bg-brand-primary text-brand-dark text-[10px] font-black uppercase rounded">
                      {product.discount}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 z-10 p-2 bg-brand-dark/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-primary hover:text-brand-dark">
                    <Search className="w-4 h-4" />
                  </button>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full py-4 bg-white text-brand-dark font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-brand-primary transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-sm font-bold leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">{product.name}</h4>
                    <div className="flex items-center gap-1 text-brand-primary">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[10px] font-bold">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-lg text-white">₦{product.price.toLocaleString()}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-white/30 line-through">₦{product.oldPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-12 py-5 border border-brand-line hover:bg-white hover:text-brand-dark transition-all font-bold uppercase tracking-widest text-sm">
              Explore Full Collection
            </button>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 border-y border-brand-line overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-center text-xs tracking-[0.3em] text-white/30 font-bold">BRANDS WE STOCK</h2>
        </div>
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <img key={i} src={brand} alt="Brand" className="h-12 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" referrerPolicy="no-referrer" />
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-brand-primary rounded-[3rem] p-12 md:p-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
              <img src="image/Jaket.png" alt="Offer" className="w-full h-full object-contain scale-125 translate-x-12 translate-y-12 rotate-[-15deg]" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 max-w-xl">
              <span className="text-brand-dark/60 font-black uppercase tracking-widest text-xs mb-6 block">Limited Time Offer</span>
              <h2 className="text-brand-dark text-6xl md:text-8xl leading-none mb-8">
                Up to <span className="underline decoration-brand-dark/20">40% Off</span> <br /> Season Sale
              </h2>
              <p className="text-brand-dark/70 text-lg mb-12 font-medium">
                Don't miss out on high-performance kits at unbeatable prices. Gear up for the next adventure.
              </p>
              <div className="flex gap-6 mb-12">
                {[
                  { val: '03', label: 'Days' },
                  { val: '09', label: 'Hours' },
                  { val: '12', label: 'Mins' },
                  { val: '46', label: 'Secs' }
                ].map(t => (
                  <div key={t.label} className="text-center">
                    <p className="text-4xl font-display text-brand-dark">{t.val}</p>
                    <p className="text-[10px] uppercase font-bold text-brand-dark/40">{t.label}</p>
                  </div>
                ))}
              </div>
              <button className="px-10 py-5 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl mb-2">The <span className="text-brand-primary">Journal</span></h2>
              <p className="text-white/40">Insights, guides, and stories from the road</p>
            </div>
            <button className="hidden md:flex text-xs font-bold uppercase tracking-widest text-brand-primary items-center gap-2 hover:gap-3 transition-all">
              Go to Blog <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "image/8.png", title: "Icon Contra 2 Jacket Review", date: "Oct 12, 2024" },
              { img: "image/keg.png", title: "Maintenance Guide: Oil Change", date: "Oct 08, 2024" },
              { img: "image/helement2.png", title: "Choosing the Right Helmet", date: "Sep 28, 2024" },
              { img: "image/Oil.png", title: "Chain Care for Long Rides", date: "Sep 15, 2024" },
            ].map((post, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-brand-surface border border-brand-line rounded-2xl overflow-hidden mb-6">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <p className="text-[10px] font-mono text-brand-primary mb-2 uppercase tracking-widest">{post.date}</p>
                <h3 className="text-lg leading-tight group-hover:text-brand-primary transition-colors">{post.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-brand-line">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex p-4 bg-brand-surface border border-brand-line rounded-full mb-8">
            <Mail className="w-6 h-6 text-brand-primary" />
          </div>
          <h2 className="text-5xl mb-6">Join the <span className="text-brand-primary">Squad</span></h2>
          <p className="text-white/60 mb-10 font-light text-lg">Subscribe to receive the latest updates on new arrivals, exclusive offers, and riding tips.</p>
          <form className="relative max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-brand-surface border border-brand-line rounded-full px-8 py-5 focus:outline-none focus:border-brand-primary transition-colors pr-36"
            />
            <button className="absolute right-2 top-2 bottom-2 px-8 bg-brand-primary text-brand-dark font-bold uppercase text-[10px] tracking-widest rounded-full hover:bg-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
