import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';


export function InlineSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });


  // Fade in/out based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const certifications = [
    { text: 'HIPAA Compliant' },
  ];


  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .hipaa-section-container {
            flex-wrap: nowrap !important;
            white-space: nowrap !important;
            gap: 0.375rem !important;
            overflow-x: visible !important;
          }
          .hipaa-section-container > * {
            flex-shrink: 0 !important;
            white-space: nowrap !important;
          }
          .hipaa-text {
            font-size: clamp(1.75rem, 5.25vw, 2.5rem) !important;
            letter-spacing: -0.01em !important;
          }
          .hipaa-dot {
            font-size: clamp(2.25rem, 6vw, 3.5rem) !important;
            line-height: 1 !important;
          }
        }
        @media (min-width: 768px) {
          .hipaa-section-container {
            gap: 1rem;
          }
        }
        @media (min-width: 1024px) {
          .hipaa-section-container {
            gap: 2rem;
          }
        }
      `}</style>
      <motion.section 
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ opacity, y, paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#FFFFFF' }} // Reduced from 80px to 40px
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-8 hipaa-section-container">
              <span 
                className="text-[#94B3D8] hipaa-dot" 
                style={{ 
                  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                  fontWeight: 700
                }}
              >
                ·
              </span>
              <span 
                className="text-[#000000] hipaa-text" 
                style={{ 
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.75rem)', 
                  fontWeight: 600, 
                  letterSpacing: '-0.015em',
                  whiteSpace: 'nowrap'
                }}
              >
                {certifications[0].text}
              </span>
              <span 
                className="text-[#94B3D8] hipaa-dot" 
                style={{ 
                  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                  fontWeight: 700
                }}
              >
                ·
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
