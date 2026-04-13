import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Icon Contra 2 Jacket Review: The Ultimate Summer Gear?",
    content: `
      <p>The Icon Contra 2 jacket has been a staple in the motorcycle community for years, but how does it hold up in the intense heat of a Nigerian summer? We took it for a week-long test ride through the busy streets of Lagos and the open roads of the South-West.</p>
      
      <h3>Design and Build Quality</h3>
      <p>Right out of the box, the Contra 2 feels substantial. The IronGrit™ mesh panels are strategically placed to maximize airflow, while the textile chassis provides the abrasion resistance you need. The fit is "Icon Sport" – slightly aggressive but comfortable enough for all-day wear.</p>
      
      <h3>Ventilation Performance</h3>
      <p>This is where the jacket truly shines. Even at low speeds in Lagos traffic, you can feel the air moving through the mesh. Once you hit the highway, the cooling effect is immediate. It's easily one of the best-ventilated jackets in its class.</p>
      
      <h3>Protection</h3>
      <p>Icon hasn't skimped on safety. The jacket comes with a full suite of D3O® impact protectors – shoulders, elbows, and a Viper back protector. D3O is fantastic because it's flexible during normal movement but hardens instantly upon impact.</p>
      
      <h3>Verdict</h3>
      <p>If you're looking for a jacket that can handle the heat while providing top-tier protection, the Icon Contra 2 should be at the top of your list. It's stylish, functional, and built to last.</p>
    `,
    image: "image/8.png",
    date: "Oct 12, 2024",
    author: "Rider X",
    category: "Reviews"
  },
  // ... other posts would go here
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id)) || BLOG_POSTS[0]; // Fallback to first for demo

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-text/40 hover:text-brand-primary transition-colors mb-12 uppercase tracking-widest text-[10px] font-bold">
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-brand-primary text-xs font-mono uppercase tracking-widest mb-4 block">{post.category}</span>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-8 py-8 border-y border-brand-line">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-surface border border-brand-line rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">{post.author}</p>
                <p className="text-[10px] text-brand-text/40 uppercase">Author</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-surface border border-brand-line rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">{post.date}</p>
                <p className="text-[10px] text-brand-text/40 uppercase">Published</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-surface border border-brand-line rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">12 Comments</p>
                <p className="text-[10px] text-brand-text/40 uppercase">Join Discussion</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="aspect-[21/9] bg-brand-surface rounded-[3rem] overflow-hidden border border-brand-line mb-16"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Content */}
          <div className="lg:col-span-8">
            <div 
              className="prose dark:prose-invert max-w-none space-y-8 text-brand-text/60 font-light leading-relaxed text-lg
                prose-h3:text-3xl prose-h3:text-brand-text prose-h3:font-display prose-h3:uppercase prose-h3:tracking-wider
                prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-12 border-t border-brand-line flex flex-wrap gap-4">
              {['Review', 'Gear', 'Icon', 'Summer', 'Safety'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-brand-surface border border-brand-line rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-text/40 hover:text-brand-primary hover:border-brand-primary cursor-pointer transition-all">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="bg-brand-surface border border-brand-line rounded-[2rem] p-8">
              <h4 className="text-lg mb-6 uppercase tracking-widest font-display">Share Post</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 bg-brand-bg border border-brand-line rounded-xl flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-brand-primary rounded-[2rem] p-8 text-brand-dark">
              <h4 className="text-xl mb-4 font-display uppercase">Newsletter</h4>
              <p className="text-sm font-medium mb-6 opacity-70">Get the latest reviews and guides delivered to your inbox.</p>
              <input type="email" placeholder="Your email" className="w-full bg-brand-dark/10 border border-brand-dark/20 rounded-xl px-4 py-3 mb-4 placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark" />
              <button className="w-full py-4 bg-brand-dark text-white font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-brand-dark transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
