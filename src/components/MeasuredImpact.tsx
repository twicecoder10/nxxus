import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';

export function MeasuredImpact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Fade in/out based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const impacts = [
    {
      title: 'Faster, Aligned Workflows',
      description: 'AI-powered triage and unified diagnostics keep teams moving together.'
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Shared diagnostic views reduce handoff friction across specialties.'
    },
    {
      title: 'Smarter Prioritization',
      description: 'Clear worklists reflect clinical urgency based on shared context.'
    },
    {
      title: 'Lower Imaging Costs',
      description: 'Fewer duplicate studies through smarter routing and coordination.'
    },
    {
      title: 'Enterprise Reliability',
      description: 'No system replacement. Secure, compliant workflows with 99.9% uptime.'
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen bg-white relative overflow-hidden py-32"
      style={{ opacity, y }}
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full">
        {/* Section Title */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
           
          </div>
          <h2 
            className="text-[#000000] max-w-4xl mx-auto"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            Measured Impact
            
          </h2>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              className="bg-[#FAFAFA] rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300 text-center max-w-md w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 
                className="text-[#000000] mb-4"
                style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                {impact.title}
              </h3>
              <p 
                className="text-[#6B7280]"
                style={{ fontSize: '1rem', lineHeight: 1.6 }}
              >
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
