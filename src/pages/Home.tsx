import { motion } from 'framer-motion';
import { ArrowRight, Activity, Users, Trophy, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background instead of video for performance in preview */}
        <div className="absolute inset-0 bg-offblack z-0">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950/20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-20">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/30 bg-orange-500/10 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-500 text-xs font-medium tracking-widest uppercase">Premium Fitness Experience</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading text-white uppercase tracking-tighter leading-[0.85] mb-8"
          >
            Transform Your<br />Body Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Power</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light mb-12"
          >
            Welcome to Lahore's most exclusive luxury fitness club. World-class equipment, elite trainers, and an atmosphere designed to push your limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link to="/membership" className="group relative px-8 py-4 bg-orange-600 text-white font-sans uppercase tracking-widest text-sm font-medium overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-orange-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Join The Elite
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <button className="group px-8 py-4 bg-transparent border border-white/20 text-white font-sans uppercase tracking-widest text-sm font-medium hover:border-white transition-colors flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              Watch Video
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Brutalist/Technical touches */}
      <section className="py-24 bg-zinc-950 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { id: '01', numeric: '15,000+', label: 'Sq Ft Facility' },
              { id: '02', numeric: '50+', label: 'Expert Trainers' },
              { id: '03', numeric: '100+', label: 'Classes Weekly' },
              { id: '04', numeric: '24/7', label: 'Access' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-6 border-l border-white/10"
              >
                <span className="absolute left-0 top-0 -translate-x-[1px] w-[2px] h-0 bg-orange-500 transition-all duration-700 group-hover:h-full"></span>
                <span className="text-zinc-600 font-mono text-xs mb-4 block tracking-widest">{stat.id}</span>
                <div className="text-4xl md:text-5xl font-heading text-white mb-2">{stat.numeric}</div>
                <div className="text-sm font-sans tracking-widest text-zinc-400 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Features/Philosophy Split Layout inspired by SaaS landing / Luxury */}
       <section className="bg-zinc-950 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <h2 className="text-5xl md:text-7xl font-heading text-white uppercase leading-none mb-8">
                 The Anatomy <br/><span className="text-zinc-600">Of Greatness</span>
               </h2>
               <div className="space-y-8">
                 <p className="text-lg text-zinc-400 font-light leading-relaxed">
                   At Muscles Mates, we believe in the relentless pursuit of perfection. Our facility is engineered to provide an unparalleled training experience, combining cutting-edge science with luxury amenities.
                 </p>
                 <ul className="space-y-6">
                   {[
                     { icon: Activity, title: 'Optimized Environment', desc: 'Temperature controlled spaces, specialized flooring, and curated lighting for maximum focus.' },
                     { icon: Trophy, title: 'Elite Equipment', desc: 'Sourced from the best manufacturers globally to ensure biomechanical perfection.' },
                     { icon: Users, title: 'Driven Community', desc: 'Train alongside Lahore\'s most dedicated athletes and fitness enthusiasts.' },
                   ].map((item, idx) => (
                     <li key={idx} className="flex gap-4 group">
                       <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all">
                         <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-orange-500 transition-colors" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-2">{item.title}</h4>
                         <p className="text-zinc-500 text-sm">{item.desc}</p>
                       </div>
                     </li>
                   ))}
                 </ul>
               </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
             >
               <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative">
                 <img 
                   src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                   alt="Gym Facility" 
                   className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               </div>
               
               {/* Floating elements */}
               <div className="absolute -bottom-10 -left-10 bg-black border border-white/10 p-6 rounded-2xl backdrop-blur-md hidden md:block animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="font-mono text-xs tracking-widest text-white">SYSTEM ACTIVE</div>
                  </div>
               </div>
             </motion.div>
          </div>
        </div>
       </section>

       {/* Classes Marquee / Teaser */}
       <section className="border-y border-white/10 py-10 overflow-hidden bg-black flex items-center">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap"
          >
             {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-x-12 px-6 items-center">
                   {['STRENGTH', 'BODYBUILDING', 'CARDIO', 'HIIT', 'CROSSFIT', 'NUTRITION'].map((word, j) => (
                     <div key={j} className="flex items-center gap-x-12">
                       <span className="text-transparent border-text font-heading text-6xl px-4 transition-all duration-300 hover:text-orange-500 cursor-default">{word}</span>
                       <span className="text-orange-500">✦</span>
                     </div>
                   ))}
                </div>
             ))}
          </motion.div>
       </section>

       {/* Featured Trainers */}
       <section className="py-32 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <h3 className="text-orange-500 font-sans tracking-widest text-sm font-semibold uppercase mb-2">Elite Coaching</h3>
                <h2 className="text-4xl md:text-6xl font-heading text-white uppercase">Meet The <br/>Masters</h2>
              </div>
              <Link to="/trainers" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mt-6 md:mt-0 uppercase tracking-widest text-sm">
                View All Trainers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: 'Marcus Cole', role: 'Head of Strength', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' },
                 { name: 'Sarah Jenkins', role: 'HIIT Specialist', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
                 { name: 'David Thorne', role: 'Bodybuilding Pro', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop' }
               ].map((trainer, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: i * 0.2 }}
                   className="group relative"
                 >
                   <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 relative">
                     <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                     <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <h4 className="text-2xl font-heading text-white uppercase mb-1">{trainer.name}</h4>
                       <p className="text-orange-500 text-sm tracking-widest uppercase font-medium">{trainer.role}</p>
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
       </section>
    </div>
  );
}
