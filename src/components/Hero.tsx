import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
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
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      <motion.div 
        className="w-full max-w-[1800px] mx-auto px-8 lg:px-16 py-32 lg:py-40 relative"
        style={{ opacity, scale }}
      >
        {/* Main Content */}
        <div className="max-w-7xl">
          {/* Eyebrow */}
          <motion.div
            className="text-[#94B3D8] mb-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              style={{ fontSize: '1.125rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              AI-Native Enterprise Imaging
            </motion.div>
          </motion.div>

          {/* Headline - Reduced size, 1/4 above video */}
          <div className="overflow-visible mb-12 relative z-30">
            <motion.div
              className="inline-block bg-[#000000] rounded-lg px-10 py-7 lg:px-12 lg:py-9 shadow-lg"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1 
                className="text-white"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 4.5rem)', 
                  fontWeight: 700, 
                  lineHeight: 1.1, 
                  letterSpacing: '-0.04em',
                  maxWidth: '600px',
                  padding: '0.5rem 0',
                  margin: 0
                }}
              > 
                Unify Every
                <br />
                <span className="inline-block" style={{ lineHeight: '1.15', whiteSpace: 'nowrap' }}>
                  Diagnostic &nbsp;
                  <span className="inline-block relative ml-2 z-40">
                    <span className="text-[#94B3D8]">
                      System &nbsp;
                    </span>
                  </span>
                </span>
              </motion.h1>
            </motion.div>
            
            {/* Description */}
            <motion.p
              className="text-[#1F2937] mt-6 mb-8"
              style={{ 
                fontSize: '1.140rem', 
                lineHeight: 1.7,
                maxWidth: '600px'
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <br></br>Imaging, labs, pathology, and EHRs in one real-time workspace where diagnostic data converges, so teams can make smarter decisions together.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/contact">
              <motion.button
                className="bg-[#000000] text-white px-12 py-5 rounded-full hover:bg-[#94B3D8] transition-all duration-300 group"
                style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Book a demo
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Visual Element - Right side, aligned with Book Demo button */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[250px] h-[600px] hidden xl:block z-0"
          style={{ 
            right: 'calc((100vw - 1800px) / 2 - 31px)', // Moved further left
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
      </motion.div>
    </section>
  );
}