import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/10 py-16">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div>
            <div className="tracking-tight mb-4" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em' }}>
              <span style={{ color: '#ffffff' }}>N</span>
              <span style={{ color: '#94B3D8' }}>XX</span>
              <span style={{ color: '#ffffff' }}>IM</span>
            </div>
            <p className="text-[#94B3D8]/60" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              AI-Native Enterprise<br />Medical Imaging Platform
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white mb-4" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Platform
            </div>
            <div className="space-y-3">
              {['Features', 'Security', 'Integration', 'Pricing'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                  style={{ fontSize: '0.875rem', fontWeight: 500 }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white mb-4" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Connect
            </div>
            <div className="space-y-3">
              <a
                href="mailto:contact@nxxim.com"
                className="block text-[#94B3D8]/60 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                contact@nxxim.com
              </a>
              <a
                href="#"
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
                href="#privacy"
                className="text-[#94B3D8]/40 hover:text-[#94B3D8] transition-colors duration-200"
                style={{ fontSize: '0.8125rem', fontWeight: 500 }}
              >
                Privacy Policy
              </a>
              <span className="text-white/10">·</span>
              <a
                href="#terms"
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