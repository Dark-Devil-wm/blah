import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-heading uppercase text-white mb-6">Contact <span className="text-orange-500">Us</span></h1>
          <p className="text-xl text-zinc-400 font-light">Questions about memberships, classes, or personal training? Reach out to our elite support team.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading uppercase text-white mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">First Name</label>
                   <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="John" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Last Name</label>
                   <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="Doe" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Email Address</label>
                 <input type="email" className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="john@example.com" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Message</label>
                 <textarea rows={5} className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:border-orange-500 focus:outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
               </div>
               <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 rounded-lg font-sans uppercase tracking-widest text-sm font-semibold">
                 Send Message
               </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-heading uppercase text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                 {[
                   { icon: MapPin, text: 'Chung, Multan Road, Roshan Plaza Basement, Lahore, Pakistan' },
                   { icon: Phone, text: '0300 8077754' },
                   { icon: Mail, text: 'info@musclesmates.com' },
                   { icon: Clock, text: 'Mon-Sun: 24/7 Access for Members' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0">
                       <item.icon className="w-5 h-5 text-orange-500" />
                     </div>
                     <div className="pt-3">
                       <p className="text-zinc-300 font-sans">{item.text}</p>
                     </div>
                   </div>
                 ))}
                 
                 <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0">
                       <MessageSquare className="w-5 h-5 text-[#25D366]" />
                     </div>
                     <div className="pt-2">
                       <a href="https://wa.me/923008077754" target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans uppercase tracking-widest text-xs font-bold rounded-lg transition-colors">
                          WhatsApp Us
                       </a>
                     </div>
                   </div>
              </div>
            </div>

            <div className="w-full h-[300px] bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 relative group">
              {/* Fallback map visual if iframe fails or is slow */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.110682544716!2d74.1540!3d31.4470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff0014a51e6d%3A0xeab50d4f132eeb9!2sChung%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1716335123456!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-10"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
