import React from 'react';
import { motion } from 'motion/react';

interface LegalProps {
  title: string;
  lastUpdated: string;
}

const Legal: React.FC<LegalProps> = ({ title, lastUpdated }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl mb-6">{title}</h1>
          <p className="text-brand-primary text-xs font-mono uppercase tracking-widest">Last Updated: {lastUpdated}</p>
        </motion.div>

        <div className="prose dark:prose-invert max-w-none space-y-12 text-brand-text/60 font-light leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-3xl text-brand-text font-display uppercase tracking-wider">1. Introduction</h2>
            <p>Welcome to Metallic Horses. These policies govern your use of our website and the purchase of products from our store. By accessing or using our services, you agree to be bound by these terms.</p>
            <p>Metallic Horses is a premier motorcycle gear retailer based in Lagos, Nigeria. We are committed to providing high-quality, genuine products to the riding community.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl text-brand-text font-display uppercase tracking-wider">2. Product Information</h2>
            <p>We make every effort to display as accurately as possible the colors and images of our products. However, we cannot guarantee that your computer monitor's display of any color will be accurate.</p>
            <p>All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl text-brand-text font-display uppercase tracking-wider">3. Shipping & Delivery</h2>
            <p>Orders are processed within 24 hours of payment confirmation. Delivery times vary based on location:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lagos: 1-2 business days</li>
              <li>South-West: 2-3 business days</li>
              <li>Rest of Nigeria: 3-5 business days</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl text-brand-text font-display uppercase tracking-wider">4. Returns & Refunds</h2>
            <p>Our return policy lasts 14 days. If 14 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.</p>
            <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Helmets must have the original visor film intact.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl text-brand-text font-display uppercase tracking-wider">5. Privacy & Data</h2>
            <p>Your submission of personal information through the store is governed by our Privacy Policy. We take the security of your data seriously and use industry-standard encryption to protect your information.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl text-brand-text font-display uppercase tracking-wider">6. Contact Information</h2>
            <p>Questions about the Terms of Service should be sent to us at sales@metallichorses.com or by mail to: 13 Celestial Way, Ogudu Orioke Lagos, Nigeria.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
