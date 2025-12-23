import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../../pics/newherovid.mp4';

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
            max-width: 100% !important;
            width: 100% !important;
          }
        }
        @media (min-width: 768px) {
          .hero-text-content {
            width: 66.67%;
            max-width: 66.67%;
          }
        }
      `}</style>
      <section 
        ref={containerRef}
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
      {/* Video Background - fixed size 875x700px, positioned to the right */}
      <div 
        className="absolute z-0"
        style={{ 
          top: '50%',
          left: '65%',
          transform: 'translate(-50%, -50%)',
          marginTop: '40px',
          width: '875px',
          height: '700px'
        }}
      >
        <video 
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            width: '875px', 
            height: '700px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>


      {/* Content Container - matches Factory layout */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center px-4 sm:px-8 lg:px-16"
        style={{ opacity, scale }}
      >
        <div className="max-w-[1800px] mx-auto w-full flex items-center py-20 sm:py-32 lg:py-40">
          
          {/* Text Content - 2/3 width container to overlay on video */}
          <div className="hero-text-content relative z-10 text-left" style={{ marginTop: '60px' }}>
            {/* Content wrapper with transparency effect */}
            <div 
              className="inline-block"
              style={{
                background: 'linear-gradient(to right, transparent 0%, transparent 20%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0.15) 85%, transparent 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '2rem 3rem',
                borderRadius: '8px'
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
                  className="font-semibold tracking-wider uppercase text-left"
                  style={{ color: '#94B3D8', fontSize: '24px' }}
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
                    fontSize: 'clamp(2rem, 5vw, 4.5rem)', 
                    fontWeight: 700, 
                    lineHeight: 1.1, 
                    letterSpacing: '-0.03em',
                  }}
                >
                  <span className="block">Unify Every</span>
                  <span className="block mt-2">
                    <span>Intelligence </span>
                    <span className="text-white">Platform</span>
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
                  className="text-white leading-relaxed text-left"
                  style={{ fontSize: '22.4px' }}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  Imaging, labs, pathology, and EHRs converged <br></br>to a single pane of glass for better decisions<br></br> and coordinated care
                </motion.p>
              </motion.div>

              {/* CTA */}
              <motion.div 
                className="flex items-center gap-6 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  className="bg-white text-black px-12 py-5 rounded-full hover:bg-[#94B3D8] hover:text-white transition-all duration-300 group inline-block font-semibold text-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact#meeting-form"
                    className="flex items-center gap-2 text-inherit no-underline"
                  >
                    Schedule a Meeting
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
    </>
  );
}