import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Icon Contra 2 Jacket Review: The Ultimate Summer Gear?",
    excerpt: "We put the Icon Contra 2 to the test in the scorching heat of Lagos. Here's why it might be the only jacket you need this season.",
    image: "image/8.png",
    date: "Oct 12, 2024",
    author: "Rider X",
    category: "Reviews"
  },
  {
    id: 2,
    title: "Maintenance Guide: 5 Essential Tips for Your Chain",
    excerpt: "A well-maintained chain is the difference between a smooth ride and a costly repair. Learn the secrets of the pros.",
    image: "image/keg.png",
    date: "Oct 08, 2024",
    author: "Mechanic Joe",
    category: "Maintenance"
  },
  {
    id: 3,
    title: "Choosing the Right Helmet for Long Distance Touring",
    excerpt: "Comfort, noise reduction, and safety. We break down what to look for when you're planning your next cross-country trip.",
    image: "image/helement2.png",
    date: "Sep 28, 2024",
    author: "Touring Pro",
    category: "Guides"
  },
  {
    id: 4,
    title: "Top 10 Scenic Routes in Nigeria for Motorcyclists",
    excerpt: "From the hills of Jos to the coastal roads of Lagos, discover the most breathtaking rides our country has to offer.",
    image: "image/Oil.png",
    date: "Sep 15, 2024",
    author: "Adventure King",
    category: "Travel"
  },
  {
    id: 5,
    title: "The Evolution of Protective Gear: Then vs Now",
    excerpt: "How technology has transformed motorcycle safety over the last decade. A deep dive into modern materials.",
    image: "image/Jaket.png",
    date: "Sep 05, 2024",
    author: "Safety Expert",
    category: "Tech"
  },
  {
    id: 6,
    title: "Winter Riding: How to Stay Warm and Safe",
    excerpt: "Don't let the cold stop you. Our guide to layering and bike prep for the cooler months.",
    image: "image/Boot.png",
    date: "Aug 22, 2024",
    author: "All-Weather Rider",
    category: "Tips"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl mb-6">The <span className="text-brand-primary">Journal</span></h1>
          <p className="text-white/60 text-lg max-w-2xl font-light">Stories from the road, expert gear reviews, and maintenance guides to keep you riding longer and safer.</p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[21/9] bg-brand-surface rounded-[2rem] overflow-hidden border border-brand-line mb-20 group cursor-pointer"
        >
          <img src={BLOG_POSTS[0].image} alt="Featured" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
            <span className="px-3 py-1 bg-brand-primary text-brand-dark text-[10px] font-bold uppercase rounded mb-4 inline-block">Featured Post</span>
            <h2 className="text-4xl md:text-6xl mb-6 group-hover:text-brand-primary transition-colors">{BLOG_POSTS[0].title}</h2>
            <div className="flex items-center gap-6 text-xs text-white/40 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-primary" /> {BLOG_POSTS[0].date}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-brand-primary" /> {BLOG_POSTS[0].author}</span>
            </div>
          </div>
        </motion.div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-brand-line pb-8">
          {['All Posts', 'Reviews', 'Maintenance', 'Guides', 'Travel', 'Tech'].map((cat, i) => (
            <button key={i} className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${i === 0 ? 'bg-brand-primary border-brand-primary text-brand-dark' : 'border-brand-line hover:border-white/40'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.slice(1).map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] bg-brand-surface border border-brand-line rounded-2xl overflow-hidden mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest">{post.category}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">{post.date}</span>
                </div>
                <h3 className="text-2xl leading-tight group-hover:text-brand-primary transition-colors">{post.title}</h3>
                <p className="text-white/40 text-sm line-clamp-2 font-light leading-relaxed">{post.excerpt}</p>
                <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-4 h-4 text-brand-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-24 flex justify-center gap-4">
          <button className="w-12 h-12 rounded-full border border-brand-line flex items-center justify-center hover:bg-white/5 transition-all text-white/40">1</button>
          <button className="w-12 h-12 rounded-full border border-brand-primary bg-brand-primary text-brand-dark flex items-center justify-center font-bold">2</button>
          <button className="w-12 h-12 rounded-full border border-brand-line flex items-center justify-center hover:bg-white/5 transition-all text-white/40">3</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
