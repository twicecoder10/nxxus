import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';
import heroVideo from '../../pics/nximvid.mp4';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* Full-screen Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center px-8 lg:px-16"
        style={{ opacity, scale }}
      >
        <div className="max-w-7xl w-full py-32 lg:py-40">
          {/* Main Content Container */}
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              className="mb-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="text-white text-lg font-semibold tracking-wider uppercase"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                AI-Native Enterprise Imaging
              </motion.div>
            </motion.div>

            {/* Headline */}
            <div className="mb-12 overflow-hidden">
              <motion.h1 
                className="text-white"
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.5, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                style={{ 
                  fontSize: 'clamp(3rem, 8vw, 7rem)', 
                  fontWeight: 700, 
                  lineHeight: 1.1, 
                  letterSpacing: '-0.03em',
                }}
              >
                <span className="block">Unify Every</span>
                <span className="block mt-2">
                  <span>Diagnostic </span>
                  <span className="text-white">System</span>
                </span>
              </motion.h1>
            </div>
            
            {/* Description */}
            <motion.div
              className="mb-12 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.p
                className="text-white text-xl lg:text-2xl leading-relaxed max-w-3xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                Imaging, labs, pathology, and EHRs in one real-time workspace where diagnostic data converges, so teams can make smarter decisions together.
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="flex items-center gap-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="https://outlook.office.com/book/Gc6a333cc0be743e2a5ec806df6f942ba@cosonascloud.onmicrosoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-12 py-5 rounded-full hover:bg-[#94B3D8] hover:text-white transition-all duration-300 group inline-block font-semibold text-lg"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: 1.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Book a demo
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}