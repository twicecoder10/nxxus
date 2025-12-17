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
    <>
      <style>{`
        @media (max-width: 767px) {
          .hero-text-content {
            margin-left: 0 !important;
          }
        }
        @media (min-width: 768px) {
          .hero-text-content {
            margin-left: clamp(0px, 22vw, 350px);
          }
        }
      `}</style>
      <section 
        ref={containerRef}
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
      {/* Video Background - positioned on right side, constrained width, starts below nav bar - matches Factory design */}
      <div className="absolute top-20 sm:top-24 lg:top-28 right-0 bottom-0 w-[70%] sm:w-[65%] lg:w-[55%] xl:w-[50%] z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <video 
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div 
        className="absolute top-20 sm:top-24 lg:top-28 right-0 bottom-0 w-[70%] sm:w-[65%] lg:w-[55%] xl:w-[50%] z-[5] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent 0%, transparent 35%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.6) 100%)',
          backdropFilter: 'blur(15px) saturate(180%)',
          WebkitBackdropFilter: 'blur(15px) saturate(180%)'
        }}
      />

      {/* Content Container - matches Factory layout */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center px-4 sm:px-8 lg:px-16"
        style={{ opacity, scale }}
      >
        <div className="max-w-[1800px] mx-auto w-full flex items-center py-20 sm:py-32 lg:py-40">
          
          {/* Text Content - shifted rightwards to partially overlay video like Factory */}
          <div 
            className="hero-text-content relative z-10 max-w-2xl lg:max-w-3xl text-left"
            style={{
              background: 'linear-gradient(to right, transparent 0%, transparent 35%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.6) 100%)',
              backdropFilter: 'blur(15px) saturate(180%)',
              WebkitBackdropFilter: 'blur(15px) saturate(180%)'
            }}
          >
            {/* Eyebrow */}
            <motion.div
              className="mb-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="text-white text-lg font-semibold tracking-wider uppercase text-left"
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
                className="text-white text-left"
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
                className="text-white text-xl lg:text-2xl leading-relaxed text-left"
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
    </>
  );
}