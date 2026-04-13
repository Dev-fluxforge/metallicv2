import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl mb-8"
          >
            Driven by <span className="text-brand-primary">Passion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-text/60 text-lg font-light leading-relaxed"
          >
            Metallic Horses was born from a simple idea: that every rider deserves gear that matches their ambition. We don't just sell equipment; we provide the confidence to explore.
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[16/10] bg-brand-surface rounded-[2rem] overflow-hidden border border-brand-line"
          >
            <img src="image/Helmet.png" alt="Workshop" className="w-full h-full object-cover dark:opacity-60 opacity-90" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[16/10] bg-brand-surface rounded-[2rem] overflow-hidden border border-brand-line"
          >
            <img src="image/Jaket.png" alt="Rider" className="w-full h-full object-cover dark:opacity-60 opacity-90" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {[
            { icon: Shield, title: "Safety First", desc: "Every product we stock undergoes rigorous safety testing to ensure your protection." },
            { icon: Zap, title: "Performance", desc: "Gear designed to enhance your riding experience through aerodynamic precision." },
            { icon: Award, title: "Quality", desc: "We partner with the world's leading brands to bring you the finest craftsmanship." },
            { icon: Users, title: "Community", desc: "More than a store, we are a hub for riders to share stories and expertise." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-brand-surface border border-brand-line rounded-2xl flex items-center justify-center">
                <item.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-brand-text/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-brand-surface border border-brand-line rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl mb-8">Our <span className="text-brand-primary">Mission</span></h2>
            <p className="text-brand-text/60 text-lg font-light leading-relaxed mb-8">
              To empower the global riding community with gear that blends uncompromising safety with cutting-edge style. We believe the road is a place of freedom, and our job is to make sure you're ready for whatever it throws at you.
            </p>
            <div className="flex items-center gap-6">
              <div className="h-12 w-[1px] bg-brand-primary" />
              <div>
                <p className="text-xl font-display">Fluxforge Team</p>
                <p className="text-xs text-brand-text/40 uppercase tracking-widest">Founders of Metallic Horses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
