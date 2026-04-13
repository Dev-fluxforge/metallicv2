import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Truck, ShieldCheck, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart, total, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-4xl mb-8">Your Cart is Empty</h2>
        <Link to="/products" className="px-8 py-4 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest text-xs">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl mb-16">Secure <span className="text-brand-primary">Checkout</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-12">
            {/* Shipping Info */}
            <section className="bg-brand-surface border border-brand-line rounded-[3rem] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <h2 className="text-2xl">Shipping Details</h2>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">First Name</label>
                  <input type="text" className="w-full bg-brand-bg border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">Last Name</label>
                  <input type="text" className="w-full bg-brand-bg border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">Street Address</label>
                  <input type="text" className="w-full bg-brand-bg border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">City</label>
                  <input type="text" className="w-full bg-brand-bg border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">State</label>
                  <select className="w-full bg-brand-bg border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors appearance-none">
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Rivers</option>
                    <option>Oyo</option>
                  </select>
                </div>
              </form>
            </section>

            {/* Payment Method */}
            <section className="bg-brand-surface border border-brand-line rounded-[3rem] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-brand-primary" />
                </div>
                <h2 className="text-2xl">Payment Method</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button className="p-6 border-2 border-brand-primary bg-brand-primary/5 rounded-2xl text-left flex items-center justify-between">
                  <span className="font-bold">Paystack / Card</span>
                  <div className="w-6 h-6 rounded-full border-4 border-brand-primary" />
                </button>
                <button className="p-6 border-2 border-brand-line bg-brand-bg rounded-2xl text-left flex items-center justify-between opacity-40">
                  <span className="font-bold">Bank Transfer</span>
                  <div className="w-6 h-6 rounded-full border-2 border-brand-line" />
                </button>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">Card Number</label>
                  <input type="text" placeholder="**** **** **** ****" className="w-full bg-brand-bg border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-brand-bg border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">CVV</label>
                    <input type="text" placeholder="***" className="w-full bg-brand-bg border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Summary */}
          <div className="space-y-8">
            <div className="bg-brand-surface border border-brand-line rounded-[3rem] p-8 sticky top-32">
              <h3 className="text-2xl mb-8">Order Summary</h3>
              <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-4 no-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-brand-bg border border-brand-line rounded-xl p-2 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold truncate">{item.name}</h4>
                      <p className="text-[10px] text-brand-text/40">Qty: {item.quantity}</p>
                      <p className="text-xs font-mono text-brand-primary">₦{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-brand-line mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-text/40">Subtotal</span>
                  <span className="font-mono">₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-text/40">Shipping</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-brand-line">
                  <span>Total</span>
                  <span className="text-brand-primary font-mono">₦{total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full py-5 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-bg hover:text-brand-text border border-brand-primary transition-all flex items-center justify-center gap-3">
                Complete Purchase <ChevronRight className="w-5 h-5" />
              </button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-brand-text/20">
                  <ShieldCheck className="w-4 h-4" /> Secure SSL Encryption
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-brand-text/20">
                  <Truck className="w-4 h-4" /> Insured Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
