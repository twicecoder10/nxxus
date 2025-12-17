import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '/#platform' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Specialities', href: '/specialties' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Always show white background on How It Works, Specialties, About, Contact, and Book Demo pages
  const isHowItWorksPage = location.pathname === '/how-it-works';
  const isSpecialtiesPage = location.pathname === '/specialties';
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';
  const isBookDemoPage = location.pathname === '/book-demo';
  const shouldShowWhiteBg = isHowItWorksPage || isSpecialtiesPage || isAboutPage || isContactPage || isBookDemoPage || scrolled;
  
  // Use white text when background is transparent (homepage at top), black when background is white
  const logoColor = shouldShowWhiteBg ? '#000000' : '#FFFFFF';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShowWhiteBg ? 'bg-white backdrop-blur-lg py-4' : 'bg-transparent py-8'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div 
            className="tracking-tight cursor-pointer" 
            style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.03em' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span style={{ color: logoColor }}>N</span>
            <span style={{ color: '#94B3D8' }}>XX</span>
            <span style={{ color: logoColor }}>IM</span>
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, idx) => {
            const isActive = link.href === location.pathname || 
              (link.href.startsWith('/#') && location.pathname === '/' && location.hash === link.href.substring(2));
            
            const handleClick = (e: React.MouseEvent) => {
              if (link.href.startsWith('/#')) {
                e.preventDefault();
                if (location.pathname !== '/') {
                  window.location.href = link.href;
                } else {
                  const hash = link.href.substring(2);
                  const element = document.getElementById(hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }
            };
            
            return (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={handleClick}
              >
                <motion.div
                  className={`transition-colors duration-300 relative group ${
                    isActive 
                      ? 'text-[#94B3D8]' 
                      : shouldShowWhiteBg 
                        ? 'text-[#000000] hover:text-[#94B3D8]' 
                        : 'text-white hover:text-[#94B3D8]'
                  }`}
                  style={{ fontSize: '0.9375rem', fontWeight: 500, letterSpacing: '-0.01em' }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#94B3D8] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://outlook.office.com/book/Gc6a333cc0be743e2a5ec806df6f942ba@cosonascloud.onmicrosoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-8 py-3 rounded-full transition-all duration-300 inline-block ${
            shouldShowWhiteBg
              ? 'bg-[#000000] text-white hover:bg-[#94B3D8]'
              : 'bg-white text-black hover:bg-[#94B3D8] hover:text-white'
          }`}
          style={{ fontSize: '0.9375rem', fontWeight: 600, letterSpacing: '-0.01em' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Book Demo
        </motion.a>
      </div>
    </motion.nav>
  );
}