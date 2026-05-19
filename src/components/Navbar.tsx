import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Membership', path: '/membership' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Classes', path: '/classes' },
    { name: 'Transformation', path: '/transformation' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Dumbbell className="text-black w-6 h-6" />
            </div>
            <span className="font-heading text-2xl tracking-tight text-white uppercase mt-1">Muscles Mates</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
               <Link
                 key={link.path}
                 to={link.path}
                 className={`text-sm tracking-widest uppercase font-medium transition-colors ${
                   location.pathname === link.path ? 'text-orange-500' : 'text-zinc-400 hover:text-white'
                 }`}
               >
                 {link.name}
               </Link>
            ))}
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-none font-sans uppercase tracking-widest text-xs h-10 px-6">
              Join Now
            </Button>
          </nav>

          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-black p-4 flex flex-col"
          >
            <div className="flex items-center justify-between h-16">
              <span className="font-heading text-2xl tracking-tight text-white uppercase mt-1">Muscles Mates</span>
              <button className="text-white p-2" onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-heading uppercase transition-colors ${
                    location.pathname === link.path ? 'text-orange-500' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
