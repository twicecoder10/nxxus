import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import footerLogo from '../../pics/Footer_Long Square_Black_bg_nxxus.png';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling to platform section when hash is present
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#platform') {
      setTimeout(() => {
        const element = document.getElementById('platform');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const handlePlatformClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById('platform');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.getElementById('platform');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#000000] border-t border-white/10 py-16">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-4">
              <img 
                src={footerLogo}
                alt="NXXUS logo"
                style={{ height: '2.0125rem', width: 'auto' }}
              />
            </div>
            <p className="text-[#94B3D8]/60" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              AI-Native Enterprise<br />Unify Every
              Diagnostic System
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white mb-4" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              NXXUS
            </div>
            <div className="space-y-3">
              <a
                href="/#platform"
                className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
                onClick={handlePlatformClick}
              >
                Platform
              </a>
              <Link
                to="/how-it-works"
                className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                How it works
              </Link>
              <Link
                to="/specialties"
                className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Specialities
              </Link>
              <Link
                to="/about"
                className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                About
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white mb-4" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Connect
            </div>
            <div className="space-y-3">
              <a
                href="mailto:info@nxxus.ai"
                className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                info@nxxus.ai
              </a>
              <a
                href="https://www.linkedin.com/company/nxxus"
                className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#94B3D8]/40" style={{ fontSize: '0.8125rem' }}>
              © {new Date().getFullYear()} Nexus Enterprise Imaging LLC. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[#94B3D8]/40 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.8125rem', fontWeight: 500 }}
              >
                Privacy Policy
              </a>
              <span className="text-white/10">·</span>
              <a
                href="#"
                className="text-[#94B3D8]/40 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.8125rem', fontWeight: 500 }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}