import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Package, Truck, CheckCircle2, MapPin, Search, ArrowRight } from 'lucide-react';

const Tracking: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) setIsTracking(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl mb-8"
          >
            Track Your <span className="text-brand-primary">Order</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-text/60 text-lg font-light leading-relaxed"
          >
            Enter your order ID and email address to see the real-time status of your delivery.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-brand-surface border border-brand-line rounded-[3rem] p-8 md:p-12 mb-20"
        >
          <form className="space-y-6" onSubmit={handleTrack}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">Order ID</label>
              <div className="relative">
                <Package className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/20" />
                <input 
                  type="text" 
                  placeholder="MH-123456" 
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full bg-brand-bg border border-brand-line rounded-2xl pl-16 pr-6 py-5 focus:outline-none focus:border-brand-primary transition-colors" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-4">Email Address</label>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/20" />
                <input type="email" placeholder="rider@example.com" className="w-full bg-brand-bg border border-brand-line rounded-2xl pl-16 pr-6 py-5 focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
            </div>
            <button className="w-full py-5 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-bg hover:text-brand-text border border-brand-primary transition-all flex items-center justify-center gap-3">
              Track Order <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

        {isTracking && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-brand-surface border border-brand-line rounded-[3rem] overflow-hidden">
              <div className="p-8 md:p-12 border-b border-brand-line flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 mb-2">Current Status</p>
                  <h3 className="text-3xl text-brand-primary">In Transit</h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 mb-2">Estimated Delivery</p>
                  <h3 className="text-3xl">Oct 15, 2024</h3>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-brand-line md:left-0 md:right-0 md:top-6 md:bottom-auto md:h-[2px]" />
                  <div className="absolute left-6 top-0 h-[66%] w-[2px] bg-brand-primary md:left-0 md:top-6 md:bottom-auto md:h-[2px] md:w-[66%]" />

                  <div className="relative flex flex-col md:flex-row justify-between gap-12">
                    {[
                      { icon: CheckCircle2, label: "Order Placed", date: "Oct 10, 10:30 AM", active: true },
                      { icon: CheckCircle2, label: "Processing", date: "Oct 11, 02:15 PM", active: true },
                      { icon: Truck, label: "In Transit", date: "Oct 12, 09:00 AM", active: true },
                      { icon: MapPin, label: "Delivered", date: "Expected Oct 15", active: false }
                    ].map((step, i) => (
                      <div key={i} className="flex md:flex-col items-center gap-6 md:gap-8 text-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 border-4 border-brand-surface ${step.active ? 'bg-brand-primary text-brand-dark' : 'bg-brand-bg text-brand-text/20 border-brand-line'}`}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        <div className="text-left md:text-center">
                          <p className={`font-bold uppercase tracking-widest text-xs mb-1 ${step.active ? 'text-brand-text' : 'text-brand-text/20'}`}>{step.label}</p>
                          <p className="text-[10px] text-brand-text/40 font-mono">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-brand-bg/50 border-t border-brand-line">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Shipment Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-brand-text/40">Carrier</span>
                      <span>GIG Logistics</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-text/40">Tracking Number</span>
                      <span className="font-mono">MH-TRK-99887766</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-brand-text/40">Destination</span>
                      <span>Lekki Phase 1, Lagos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-text/40">Weight</span>
                      <span>4.5 kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
