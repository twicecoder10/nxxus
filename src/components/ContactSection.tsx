import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-[#000000] relative overflow-hidden flex items-center py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-[800px] h-[800px] bg-[#94B3D8] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[800px] h-[800px] bg-[#94B3D8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            className="text-[#94B3D8] mb-8"
            style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get Started
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-white mb-10"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 7rem)', 
              fontWeight: 700, 
              lineHeight: 1, 
              letterSpacing: '-0.04em' 
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Unify<br />
            Your Diagnostics?
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-[#94B3D8]/80 mb-16 max-w-3xl mx-auto"
            style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join leading healthcare systems already transforming their diagnostic workflows with NXXIM's AI-native platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact">
              <motion.button
                className="bg-white text-[#000000] px-12 py-5 rounded-full hover:bg-[#94B3D8] hover:text-white transition-all duration-300"
                style={{ fontSize: '1.0625rem', fontWeight: 600, letterSpacing: '-0.01em' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Demo
              </motion.button>
            </Link>
            
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}