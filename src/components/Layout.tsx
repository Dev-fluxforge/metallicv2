import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart, removeFromCart, updateQuantity, cartCount, total, isCartOpen, setIsCartOpen, toast } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-primary selection:text-brand-dark">
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-brand-line py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-brand-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-brand-primary transition-colors">About</Link>
            <Link to="/blog" className="text-sm font-medium hover:text-brand-primary transition-colors">Blog</Link>
          </div>

          <Link to="/" className="flex-shrink-0">
            <img src="image/image 1.png" alt="Metallic Horses" className="h-12 w-auto" referrerPolicy="no-referrer" />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/contact" className="text-sm font-medium hover:text-brand-primary transition-colors">Contact</Link>
              <Link to="/products" className="text-sm font-medium hover:text-brand-primary transition-colors">Products</Link>
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/10 rounded-full transition-colors group"
            >
              <ShoppingCart className="w-6 h-6 group-hover:text-brand-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-primary text-brand-dark text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-brand-dark flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-display">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/blog">MH Blog</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/products">Our Products</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-surface pt-24 pb-12 border-t border-brand-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-8">
              <img src="image/image 1.png" alt="Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
              <p className="text-white/40 text-sm leading-relaxed">
                Metallic Horses is your premier destination for high-performance motorcycle gear. We prioritize quality, safety, and the thrill of the ride.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-brand-dark border border-brand-line rounded-full hover:border-brand-primary hover:text-brand-primary transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-8">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-brand-primary transition-colors">Our Products</Link></li>
                <li><Link to="/blog" className="hover:text-brand-primary transition-colors">MH Blog</Link></li>
                <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link></li>
                <li><Link to="/tracking" className="hover:text-brand-primary transition-colors">Order Tracking</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-8">Support</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><Link to="/terms" className="hover:text-brand-primary transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/returns" className="hover:text-brand-primary transition-colors">Returns & Refunds</Link></li>
                <li><Link to="/shipping" className="hover:text-brand-primary transition-colors">Shipping Info</Link></li>
                <li><Link to="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-8">Contact Info</h4>
              <ul className="space-y-6 text-sm text-white/40">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>13 Celestial Way, Ogudu Orioke Lagos</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>+234 805 667 1922</span>
                </li>
                <li className="flex gap-4">
                  <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>sales@metallichorses.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-brand-line flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
            <p>© 2024 FLUXFORGE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/faq" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-brand-surface border-l border-brand-line z-[80] flex flex-col shadow-2xl"
            >
              <div className="p-8 border-b border-brand-line flex justify-between items-center">
                <h2 className="text-2xl">Your Cart <span className="text-brand-primary ml-2">({cartCount})</span></h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-20 h-20 bg-brand-line rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-8 h-8 text-white/20" />
                    </div>
                    <div>
                      <p className="text-lg font-bold mb-2">Your cart is empty</p>
                      <p className="text-white/40 text-sm">Looks like you haven't added anything yet.</p>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="px-8 py-4 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest text-xs"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-6 group">
                      <div className="w-24 h-24 bg-brand-dark border border-brand-line rounded-2xl p-4 flex items-center justify-center shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 min-w-0 py-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-sm font-bold truncate pr-4">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/20 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs font-mono text-brand-primary mb-4">₦{item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-brand-line rounded-lg bg-brand-dark">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-colors"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-xs font-mono">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-xs font-mono text-white/40">
                            Total: ₦{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 border-t border-brand-line bg-brand-dark/50 backdrop-blur-md">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                    <span className="text-2xl font-mono">₦{total.toLocaleString()}</span>
                  </div>
                  <button className="w-full py-5 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3">
                    Checkout <ChevronRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-[10px] text-white/20 mt-6 uppercase tracking-widest">Shipping & taxes calculated at checkout</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <div className={`toast ${toast.visible ? 'show' : ''}`}>
        {toast.message}
      </div>
    </div>
  );
};

export default Layout;
