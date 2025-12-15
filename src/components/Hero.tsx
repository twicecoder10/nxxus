import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import ctScanImage from 'figma:asset/5de0f045d0c88779c5b824dca3ce03963357ba8b.png';

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
        className="w-full max-w-[1800px] mx-auto px-8 lg:px-16 py-32 lg:py-40"
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
              style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              AI-Native Enterprise Imaging
            </motion.div>
          </motion.div>

          {/* Headline - Factory-style large typography */}
          <div className="overflow-hidden mb-12">
            <motion.h1 
              className="text-[#000000]"
              style={{ 
                fontSize: 'clamp(3.5rem, 10vw, 9rem)', 
                fontWeight: 700, 
                lineHeight: 0.95, 
                letterSpacing: '-0.04em',
                maxWidth: '1400px'
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Unify Every
              <br />
              <span className="inline-block">
                Diagnostic 
                <span style={{ color: '#94B3D8' }}> Stream</span>
              </span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-[#6B7280]" style={{ fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 400 }}>
              A single, AI-powered platform that connects radiology, pathology, genomics, 
              and clinical data into one seamless diagnostic workspace.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="bg-[#000000] text-white px-12 py-5 rounded-full hover:bg-[#94B3D8] transition-all duration-300 group"
              style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
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
            </motion.button>
            
            <motion.a
              href="#mission"
              className="text-[#000000] hover:text-[#94B3D8] transition-colors duration-300 group flex items-center gap-2"
              style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '-0.01em' }}
              whileHover={{ x: 3 }}
            >
              Learn More
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Visual Element - Right side */}
        <motion.div
          className="absolute right-16 top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden xl:block"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          {/* Main medical image */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
          >
            <img 
              src={ctScanImage} 
              alt="Medical Imaging"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#94B3D8]/20 to-transparent" />
          </motion.div>

          {/* Accent element */}
          <motion.div
            className="absolute bottom-20 left-0 w-80 h-80 rounded-2xl overflow-hidden shadow-xl opacity-60"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <img 
              src={ctScanImage} 
              alt="Medical Imaging"
              className="w-full h-full object-cover"
              style={{ filter: 'hue-rotate(30deg)' }}
            />
          </motion.div>

          {/* Floating data card */}
          <motion.div
            className="absolute top-32 left-12 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-[#E5E7EB]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-[#94B3D8] rounded-full animate-pulse" />
              <span className="text-[#94B3D8] text-xs font-semibold uppercase tracking-wider">
                AI Processing
              </span>
            </div>
            <div className="text-[#000000] text-2xl font-bold mb-1">2,847</div>
            <div className="text-[#6B7280] text-sm">Cases analyzed today</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#94B3D8] to-transparent" />
      </motion.div>
    </section>
  );
}