import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      const width = window.innerWidth;
      const isMobileWidth = width < 1024;
      setIsMobile(isMobileWidth);
      if (!isMobileWidth) {
        setMobileMenuOpen(false);
      }
    };

    checkMobile();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Platform', href: '/#platform' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Specialities', href: '/specialties' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isHowItWorksPage = location.pathname === '/how-it-works';
  const isSpecialtiesPage = location.pathname === '/specialties';
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';
  const isBookDemoPage = location.pathname === '/book-demo';
  const shouldShowWhiteBg = isHowItWorksPage || isSpecialtiesPage || isAboutPage || isContactPage || isBookDemoPage || scrolled;
  
  const logoColor = shouldShowWhiteBg ? '#000000' : '#FFFFFF';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          shouldShowWhiteBg ? 'bg-white/95 backdrop-blur-lg py-4' : 'bg-transparent py-4 lg:py-8'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="tracking-tight cursor-pointer z-50" 
              style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', fontWeight: 700, letterSpacing: '-0.03em' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span style={{ color: logoColor }}>N</span>
              <span style={{ color: '#94B3D8' }}>XX</span>
              <span style={{ color: logoColor }}>IM</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links - Hidden on mobile */}
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

          {/* Desktop CTA Button and Mobile Hamburger Container */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button - Hidden on mobile */}
            <motion.a
              href="https://outlook.office.com/book/Gc6a333cc0be743e2a5ec806df6f942ba@cosonascloud.onmicrosoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:flex px-8 py-3 rounded-full transition-all duration-300 ${
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

            {/* Mobile Hamburger Button - Only render on mobile/tablet */}
            {isMobile && (
              <button
                onClick={() => {
                  console.log('Hamburger clicked! Current state:', mobileMenuOpen);
                  setMobileMenuOpen((prev) => !prev);
                }}
                className="mobile-menu-toggle flex flex-col gap-1.5 items-center justify-center z-[10000] relative cursor-pointer"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  minWidth: '2.5rem',
                  minHeight: '2.5rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: 0,
                  margin: 0
                }}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                type="button"
              >
                {/* Three horizontal lines for hamburger icon */}
                <span
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '2px',
                    backgroundColor: shouldShowWhiteBg ? '#000000' : '#FFFFFF',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '2px',
                    backgroundColor: shouldShowWhiteBg ? '#000000' : '#FFFFFF',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    opacity: mobileMenuOpen ? 0 : 1
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '2px',
                    backgroundColor: shouldShowWhiteBg ? '#000000' : '#FFFFFF',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                  }}
                />
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
{/* Mobile Menu Overlay */}
{/* Mobile Menu Overlay - Simplified without AnimatePresence */}
{mobileMenuOpen && isMobile && (
  <div
    className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-8"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#FFFFFF',
      zIndex: 100
    }}
  >
    {/* Close button area - tap anywhere to close */}
    <div 
      className="absolute inset-0"
      onClick={() => setMobileMenuOpen(false)}
    />
    
    {/* Menu content */}
    <div className="relative z-10 flex flex-col items-center justify-center">
      {/* Mobile Navigation Links */}
      <div className="flex flex-col items-center gap-8 mb-12">
        {navLinks.map((link) => {
          const isActive = link.href === location.pathname;
          
          const handleClick = (e: React.MouseEvent) => {
            e.stopPropagation();
            setMobileMenuOpen(false);
            if (link.href.startsWith('/#')) {
              e.preventDefault();
              if (location.pathname !== '/') {
                window.location.href = link.href;
              } else {
                setTimeout(() => {
                  const hash = link.href.substring(2);
                  const element = document.getElementById(hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 300);
              }
            }
          };

          return (
            <Link
              key={link.name}
              to={link.href}
              onClick={handleClick}
              style={{
                color: isActive ? '#94B3D8' : '#000000',
                fontSize: '2rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile CTA Button */}
      <a
        href="https://outlook.office.com/book/Gc6a333cc0be743e2a5ec806df6f942ba@cosonascloud.onmicrosoft.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.stopPropagation();
          setMobileMenuOpen(false);
        }}
        style={{
          backgroundColor: '#000000',
          color: '#FFFFFF',
          padding: '1rem 2.5rem',
          borderRadius: '9999px',
          fontSize: '1.125rem',
          fontWeight: 600,
          textDecoration: 'none',
          display: 'block',
          textAlign: 'center'
        }}
      >
        Book Demo
      </a>
    </div>
  </div>
)}


    </>
  );
}
