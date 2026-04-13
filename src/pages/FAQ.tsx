import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    question: "What is your return policy?",
    answer: "We offer a 14-day return policy for all unused items in their original packaging. Please note that for safety reasons, helmets cannot be returned once the visor protective film has been removed."
  },
  {
    question: "How long does shipping take?",
    answer: "For orders within Lagos, delivery typically takes 1-2 business days. Nationwide shipping across Nigeria takes 3-5 business days depending on your location."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within Nigeria. However, we are working on expanding our reach to other West African countries soon. Stay tuned to our newsletter for updates."
  },
  {
    question: "How do I know my helmet size?",
    answer: "We have a comprehensive sizing guide on each product page. Generally, you should measure the circumference of your head just above your eyebrows. If you're between sizes, we recommend going for the smaller size for a snug, safe fit."
  },
  {
    question: "Are your products genuine?",
    answer: "Absolutely. We are authorized dealers for all the brands we stock, including Alpinestars, Icon, and Motul. Every product comes with a manufacturer's warranty where applicable."
  },
  {
    question: "Can I track my order?",
    answer: "Yes! Once your order is dispatched, you will receive a tracking ID via email. You can use this on our 'Order Tracking' page to see real-time updates."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl mb-8"
          >
            Common <span className="text-brand-primary">Questions</span>
          </motion.h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full bg-brand-surface border border-brand-line rounded-full pl-16 pr-8 py-5 focus:outline-none focus:border-brand-primary transition-colors"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i}
              className="bg-brand-surface border border-brand-line rounded-3xl overflow-hidden"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-medium pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full border border-brand-line flex items-center justify-center shrink-0 transition-all ${activeIndex === i ? 'bg-brand-primary border-brand-primary text-brand-dark rotate-180' : ''}`}>
                  {activeIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-white/40 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/moto/1920/1080')] opacity-10 grayscale mix-blend-overlay" />
          <div className="relative z-10">
            <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="w-10 h-10 text-brand-primary" />
            </div>
            <h2 className="text-brand-dark text-4xl md:text-6xl mb-6">Still have questions?</h2>
            <p className="text-brand-dark/70 text-lg mb-10 max-w-xl mx-auto font-medium">Can't find the answer you're looking for? Please chat with our friendly team.</p>
            <button className="px-12 py-5 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
