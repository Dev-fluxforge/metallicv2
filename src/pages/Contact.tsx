import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl mb-8"
            >
              Let's <span className="text-brand-primary">Connect</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg font-light leading-relaxed mb-12"
            >
              Have a question about our gear? Need help with an order? Or just want to talk bikes? Our team is here to help you get back on the road.
            </motion.p>

            <div className="space-y-10">
              {[
                { icon: MapPin, title: "Visit Us", content: "13 Celestial Way, Ogudu Orioke Lagos, Nigeria" },
                { icon: Phone, title: "Call Us", content: "+234 805 667 1922" },
                { icon: Mail, title: "Email Us", content: "sales@metallichorses.com" },
                { icon: Clock, title: "Hours", content: "Mon - Sat: 9:00 AM - 6:00 PM" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 bg-brand-surface border border-brand-line rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">{item.title}</h3>
                    <p className="text-lg">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-brand-surface border border-brand-line rounded-[3rem] p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-brand-primary" />
              </div>
              <h2 className="text-2xl">Send a Message</h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-brand-dark border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-brand-dark border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Subject</label>
                <select className="w-full bg-brand-dark border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Product Question</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full bg-brand-dark border border-brand-line rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-brand-primary text-brand-dark font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
