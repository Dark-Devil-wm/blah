import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Trainers() {
  const trainers = [
    { name: 'Marcus Cole', role: 'Head of Strength', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop', certs: 'NSCA-CSCS, ISSA' },
    { name: 'Sarah Jenkins', role: 'HIIT & Mobility', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', certs: 'NASM, FMS L2' },
    { name: 'David Thorne', role: 'Bodybuilding Pro', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop', certs: 'ACE, IFBB Pro' },
    { name: 'Elena Rostova', role: 'Nutrition & Fat Loss', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop', certs: 'Precision Nutrition L2' },
    { name: 'Ali Hassan', role: 'CrossFit Specialist', image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1973&auto=format&fit=crop', certs: 'CrossFit L3' },
    { name: 'Zara Khan', role: 'Functional Training', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop', certs: 'NASM-CPT' },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-heading uppercase text-white mb-6">Our <span className="text-orange-500">Trainers</span></h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl">Learn from the best. Our elite coaching staff holds international certifications and real-world competitive experience.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {trainers.map((trainer, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="group relative"
             >
               <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 relative">
                 <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <h4 className="text-2xl font-heading text-white uppercase mb-1">{trainer.name}</h4>
                   <p className="text-orange-500 text-sm tracking-widest uppercase font-medium mb-4">{trainer.role}</p>
                   
                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                     <p className="text-zinc-400 text-xs mb-4">Certifications: {trainer.certs}</p>
                     <Link to="/contact" className="inline-block py-2 px-4 bg-white/10 hover:bg-orange-500 hover:text-black transition-colors rounded uppercase tracking-widest text-xs font-semibold text-white">
                        Book Session
                     </Link>
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </PageTransition>
  );
}
