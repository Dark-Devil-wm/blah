import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Target, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-heading uppercase text-white mb-6">Our <span className="text-orange-500">Story</span></h1>
          <p className="text-xl text-zinc-400 font-light">Forged in iron, defined by dedication. Muscles Mates is more than a gym—it's a sanctuary for those who refuse to settle.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] object-cover rounded-2xl overflow-hidden"
          >
             <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Gym" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <h2 className="text-4xl font-heading uppercase text-white">A Legacy of <br/>Strength</h2>
             <p className="text-zinc-400 leading-relaxed">
               Founded with a vision to redefine fitness in Lahore, Muscles Mates emerged from the need for a truly premium training facility. We recognized that true transformation requires the right environment, the right equipment, and the right community.
             </p>
             <p className="text-zinc-400 leading-relaxed">
               Every square inch of our Roshan Plaza facility has been engineered to optimize performance. From our temperature-controlled lifting platforms to our custom lighting that enhances focus—if it doesn't serve your growth, it isn't here.
             </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { icon: Target, title: 'Uncompromising standard', desc: 'We tolerate no shortcuts in equipment quality, hygiene, or coaching expertise.' },
             { icon: Heart, title: 'Fierce Community', desc: 'Surround yourself with individuals who demand the same excellence you do.' },
             { icon: Shield, title: 'Safe Progression', desc: 'Advanced biomechanics and expert supervision to push limits safely.' },
           ].map((val, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="bg-zinc-900 border border-white/5 p-8 rounded-2xl"
             >
               <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mb-6">
                 <val.icon className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-heading uppercase text-white mb-4">{val.title}</h3>
               <p className="text-zinc-400">{val.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </PageTransition>
  );
}
