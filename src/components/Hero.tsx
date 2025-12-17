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
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

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
        {/* Very light gradient overlay for better text readability - modern style */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        {/* Subtle radial gradient overlay focused on text area */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: 'radial-gradient(ellipse 60% 100% at left center, rgba(0,0,0,0.08) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Content Overlay */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center px-8 lg:px-16"
        style={{ opacity, scale }}
      >
        <div className="max-w-7xl w-full py-32 lg:py-40">
          {/* Main Content Container */}
          <div className="max-w-4xl relative">
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
            <motion.p
              className="text-[#1F2937] mt-6 mb-8"
              style={{ 
                fontSize: '1.40rem', 
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: '600px'
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Imaging, labs, pathology, and EHRs in one real-time workspace where diagnostic data converges, so teams can make smarter decisions together.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="bg-[#94B3D8] text-white px-8 py-4 rounded-full hover:bg-[#7A9FC8] transition-all duration-300 inline-block font-semibold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="flex items-center gap-2">
                Book a Demo
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </div>

        {/* Floating Visual Element - Right side, aligned with Book Demo button */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[250px] h-[600px] hidden xl:block z-0"
          style={{ 
            right: 'calc((100vw - 1800px) / 2 - 81px)', // Moved 50px to the right
            y 
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          {/* Hero Video - Replacing the two images */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <video 
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#94B3D8]/10 to-transparent" />
          </div>
        </motion.div>
      </div>
      </motion.div>
    </section>
  );
}