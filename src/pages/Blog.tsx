import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    { title: 'The Science of Hypertrophy: Building Muscle Effectively', category: 'Muscle Building', date: 'May 12, 2026', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Nutrition 101: Fueling Your High Intensity Workouts', category: 'Nutrition', date: 'May 08, 2026', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2053' },
    { title: 'Overcoming Plateaus: Strategies from Elite Trainers', category: 'Gym Motivation', date: 'May 02, 2026', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Top 5 Supplements for Post-Workout Recovery', category: 'Supplements', date: 'Apr 28, 2026', img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=2070' },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-heading uppercase text-white mb-6">Knowledge <span className="text-orange-500">Base</span></h1>
          <p className="text-xl text-zinc-400 font-light">Insights, tips, and science-backed advice from our experts.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {posts.map((post, i) => (
            <motion.article
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group cursor-pointer"
            >
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl mb-6 border border-white/5 relative">
                 <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute top-4 left-4 bg-orange-500 text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-lg">
                   {post.category}
                 </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-3 tracking-widest uppercase">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                <span>5 Min Read</span>
              </div>
              <h2 className="text-2xl font-heading text-white uppercase group-hover:text-orange-500 transition-colors leading-tight mb-4">{post.title}</h2>
              <Link to={`/blog`} className="text-orange-500 uppercase tracking-widest text-xs font-semibold hover:text-white transition-colors flex items-center gap-1">
                Read Article <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
