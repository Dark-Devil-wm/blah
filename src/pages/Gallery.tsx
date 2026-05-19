import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-20 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-heading uppercase text-white mb-6">The <span className="text-orange-500">Facility</span></h1>
          <p className="text-xl text-zinc-400 font-light">Explore our 15,000 sq ft domain of power.</p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
           {images.map((img, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-white/5 bg-zinc-900"
             >
                <img src={img} alt="Gallery image" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="text-white font-sans uppercase tracking-widest text-xs border border-white px-4 py-2 rounded scale-90 group-hover:scale-100 transition-transform">
                      View Focus
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </PageTransition>
  );
}
