import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Membership() {
  const plans = [
    {
      name: 'Essential',
      price: '5,000',
      period: 'per month',
      features: ['Full gym access', 'Locker room access', '1 free personal training session', 'Free parking'],
      popular: false
    },
    {
      name: 'Elite',
      price: '8,500',
      period: 'per month',
      features: ['Everything in Essential', 'Unlimited group classes', 'Sauna access', 'Nutritional consultation monthly', 'Guest pass (1/month)'],
      popular: true
    },
    {
      name: 'VIP Platinum',
      price: '15,000',
      period: 'per month',
      features: ['Everything in Elite', 'Private locker', 'Dedicated weekly personal training', 'Recovery lounge access', 'Unlimited guest passes', 'Premium merchandise kit'],
      popular: false
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-heading uppercase text-white mb-6">Unlock Your <span className="text-orange-500">Potential</span></h1>
          <p className="text-xl text-zinc-400 font-light">Choose the tier that matches your ambition. No hidden fees, just pure value.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
             <motion.div
               key={plan.name}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.15 }}
               className={`relative p-8 rounded-3xl border ${plan.popular ? 'bg-zinc-900 border-orange-500 shadow-2xl shadow-orange-500/10' : 'bg-black border-white/10'}`}
             >
               {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
               )}
               <h3 className="text-2xl font-heading text-white uppercase mb-4">{plan.name}</h3>
               <div className="mb-8">
                 <span className="text-4xl font-heading text-white">Rs {plan.price}</span>
                 <span className="text-zinc-500 ml-2">{plan.period}</span>
               </div>
               
               <ul className="space-y-4 mb-8">
                 {plan.features.map(feature => (
                   <li key={feature} className="flex gap-3 text-zinc-300">
                     <Check className="w-5 h-5 text-orange-500 shrink-0" />
                     <span>{feature}</span>
                   </li>
                 ))}
               </ul>
               
               <Button className={`w-full py-6 uppercase tracking-widest font-sans font-semibold rounded-xl ${plan.popular ? 'bg-orange-500 hover:bg-orange-600 text-black' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                 Select {plan.name}
               </Button>
             </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
