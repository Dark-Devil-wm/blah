import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

export default function Transformation() {
  const stories = [
    { name: 'Kashif R.', duration: '12 Weeks', before: 'https://images.unsplash.com/photo-1629815410940-27a3c306d863?auto=format&fit=crop&q=80&w=1000', after: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000', text: 'Lost 15kg of fat and built lean muscle mass.' },
    { name: 'Sarah A.', duration: '6 Months', before: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000', after: 'https://images.unsplash.com/photo-1606902965551-dce093cda6a7?auto=format&fit=crop&q=80&w=1000', text: 'Transformed my lifestyle entirely. The coaches are phenomenal.' },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-heading uppercase text-white mb-6">Real <span className="text-orange-500">Results</span></h1>
          <p className="text-xl text-zinc-400 font-light">Proof is in the progress. See what dedication and Elite coaching can achieve.</p>
        </motion.div>

        <div className="space-y-16">
          {stories.map((story, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-zinc-900 border border-white/5 rounded-3xl p-8"
             >
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                 <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group">
                   <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white px-3 py-1 rounded text-xs tracking-widest uppercase z-10 font-bold border border-white/20">Before</div>
                   <img src={story.before} alt="Before" className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-orange-500/30 group">
                   <div className="absolute top-4 left-4 bg-orange-500 text-black px-3 py-1 rounded text-xs tracking-widest uppercase z-10 font-bold shadow-lg">After ({story.duration})</div>
                   <img src={story.after} alt="After" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
               </div>
               <div className="text-center max-w-2xl mx-auto">
                 <h3 className="text-3xl font-heading text-white uppercase mb-4">{story.name}</h3>
                 <p className="text-zinc-400 italic font-serif text-lg">"{story.text}"</p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
