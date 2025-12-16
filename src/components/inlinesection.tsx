import { motion } from 'motion/react';
import React from 'react';

export function InlineSection() {
  const certifications = [
    { text: 'FDA 510(k) Pathway' },
    { text: 'HIPAA Compliant' },
    { text: 'SOC 2 Type II' },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-[#E5E7EB]">
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
              Inline
            </span>
            <span 
              className="text-[#94B3D8]" 
              style={{ 
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 300
              }}
            >
              ·
            </span>
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-8 lg:gap-12">
                <span 
                  className="text-[#000000]" 
                  style={{ 
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', 
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
                      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                      fontWeight: 300
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
    </section>
  );
}