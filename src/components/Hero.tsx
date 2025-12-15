import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroVideo from '../../pics/hero video.mp4';

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
              style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              AI-Native Enterprise Imaging
            </motion.div>
          </motion.div>

          {/* Headline - Reduced size, 1/4 above video */}
          <div className="overflow-visible mb-12 relative z-30">
            <motion.h1 
              className="text-[#000000]"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: '-0.04em',
                maxWidth: '1400px'
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Unify Every
              <br />
              <span className="inline-block" style={{ lineHeight: '1.15' }}>
                Diagnostic  
                <span className="inline-block relative ml-4 z-40">
                  <span className="backdrop-blur-md bg-white/70 rounded-lg px-6 py-3 shadow-lg relative z-50" style={{ color: '#94B3D8' }}>
                    Stream
                  </span>
                </span>
              </span>
            </motion.h1>
          </div>

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

        {/* Floating Visual Element - Right side, right edge aligned with Book Demo button */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[900px] h-[600px] hidden xl:block z-0"
          style={{ 
            right: 'calc((100vw - 1800px) / 2 - 230px)', // Moved right by another 50px
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