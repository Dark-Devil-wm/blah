import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export default function Classes() {
  const classes = [
    { name: 'Strength Training', time: 'Mon, Wed, Fri 6:00 AM', desc: 'Build foundational strength with barbell movements.' },
    { name: 'HIIT Burn', time: 'Tue, Thu 6:00 PM', desc: 'High-intensity interval training to shred fat.' },
    { name: 'Bodybuilding', time: 'Mon-Fri 7:00 PM', desc: 'Hypertrophy focused isolation work.' },
    { name: 'CrossFit WOD', time: 'Mon, Wed 7:00 AM', desc: 'Functional movements at high intensity.' },
    { name: 'Core & Mobility', time: 'Sat 9:00 AM', desc: 'Active recovery and core strengthening.' },
    { name: 'Fat Loss Camp', time: 'Mon, Thu 8:00 PM', desc: 'Circuit training designed for maximum calorie burn.' },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-heading uppercase text-white mb-6">Group <span className="text-orange-500">Classes</span></h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl">Sweat together, grow together. Find a class that challenges you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {classes.map((cls, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-zinc-900 border border-white/5 rounded-2xl hover:border-orange-500/50 transition-colors group"
             >
               <div>
                 <h3 className="text-2xl font-heading text-white uppercase group-hover:text-orange-500 transition-colors">{cls.name}</h3>
                 <p className="text-orange-400 font-mono text-sm tracking-widest my-2">{cls.time}</p>
                 <p className="text-zinc-500 text-sm">{cls.desc}</p>
               </div>
               <Button className="mt-4 sm:mt-0 bg-white/5 hover:bg-orange-500 hover:text-black uppercase tracking-widest text-xs border border-white/10 shrink-0">
                  Book Spot
               </Button>
             </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
