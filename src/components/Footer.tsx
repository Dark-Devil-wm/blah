import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Dumbbell className="text-black w-6 h-6" />
                </div>
                <span className="font-heading text-2xl tracking-tight text-white uppercase mt-1">Muscles Mates</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Premium luxury fitness club providing world-class facilities and a community of driven individuals in Lahore.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-medium text-white uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Our Story</Link></li>
              <li><Link to="/membership" className="hover:text-orange-500 transition-colors">Memberships</Link></li>
              <li><Link to="/classes" className="hover:text-orange-500 transition-colors">Classes & Schedule</Link></li>
              <li><Link to="/trainers" className="hover:text-orange-500 transition-colors">Personal Training</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Facility Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium text-white uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-orange-500 transition-colors">Fitness Blog</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-medium text-white uppercase tracking-widest text-sm mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Chung, Multan Road,<br/>Roshan Plaza Basement,<br/>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>0300 8077754</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>info@musclesmates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Muscles Mates Fitness Club. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
             <span className="text-zinc-600 text-xs flex items-center">
                Google Rating 4.3 ⭐
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
