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
    { text: 'SOC 2 Type II' },
  ];


  return (
    <motion.section 
      ref={containerRef}
      className="relative overflow-hidden border-t border-[#D1D5DB]"
      style={{ opacity, y, paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#D1D5DB' }} // Reduced from 80px to 40px
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <span 
              className="text-[#000000]" 
              style={{ 
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', 
                fontWeight: 700, 
                letterSpacing: '-0.02em' 
              }}
            >
              
            </span>
            <span 
              className="text-[#94B3D8]" 
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700
              }}
            >
              ·
            </span>
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-8 lg:gap-12">
                <span 
                  className="text-[#000000]" 
                  style={{ 
                    fontSize: 'clamp(2rem, 4vw, 3rem)', 
                    fontWeight: 600, 
                    letterSpacing: '-0.015em' 
                  }}
                >
                  {cert.text}
                </span>
                {idx < certifications.length - 1 && (
                  <span 
                    className="text-[#94B3D8]" 
                    style={{ 
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 700
                    }}
                  >
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
