import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Platform', 'Mission', 'How it works', 'Team', 'Contact'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg py-4' : 'bg-transparent py-8'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#"
          className="tracking-tight" 
          style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <span style={{ color: '#000000' }}>N</span>
          <span style={{ color: '#94B3D8' }}>XX</span>
          <span style={{ color: '#000000' }}>IM</span>
        </motion.a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[#000000] hover:text-[#94B3D8] transition-colors duration-300 relative group"
              style={{ fontSize: '0.9375rem', fontWeight: 500, letterSpacing: '-0.01em' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#94B3D8] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="bg-[#000000] text-white px-8 py-3 rounded-full hover:bg-[#94B3D8] transition-all duration-300"
          style={{ fontSize: '0.9375rem', fontWeight: 600, letterSpacing: '-0.01em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Book Demo
        </motion.button>
      </div>
    </motion.nav>
  );
}