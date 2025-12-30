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
      description: 'AI-powered triage and unified diagnostics keep teams moving together'
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Shared image and data views improve handoffs across specialties'
    },
    {
      title: 'Smarter Prioritization',
      description: 'Clear worklists reflect clinical urgency based on shared context'
    },
    {
      title: 'Lower Imaging Costs',
      description: 'Fewer duplicate studies through discovery, smart routing, and coordination'
    },
    {
      title: 'Enterprise Reliability',
      description: 'No system replacement. Secure, compliant workflows with 99.9% uptime'
    }
  ];


  return (
    <motion.section 
      ref={containerRef}
      className="relative overflow-hidden pt-16"
      style={{ opacity, y, paddingBottom: '40px', backgroundColor: '#000000' }} // Added 40px bottom padding
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#94B3D8] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#94B3D8] rounded-full blur-3xl" />
      </div>
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
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
            className="text-white max-w-4xl mx-auto"
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


        {/* Impact Grid - First 4 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {impacts.slice(0, 4).map((impact, idx) => (
            <motion.div
              key={idx}
              className={`bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-[#94B3D8] hover:border-[#94B3D8] transition-all duration-300 text-center max-w-md w-full group ${
                idx === 0 ? 'md:col-start-1 lg:col-start-1' : 
                idx === 1 ? 'md:col-start-2 lg:col-start-2' : 
                idx === 2 ? 'md:col-start-1 lg:col-start-1' : 
                idx === 3 ? 'md:col-start-2 lg:col-start-3' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 
                className="text-white mb-4 group-hover:text-black transition-colors duration-300"
                style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                {impact.title}
              </h3>
              <p 
                className="text-[#94B3D8]/80 group-hover:text-white transition-colors duration-300"
                style={{ fontSize: '1.40rem', lineHeight: 1.7, fontWeight: 300 }}
              >
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Centered 5th Card */}
        <div className="flex justify-center" style={{ marginTop: '2rem' }}>
          <motion.div
            className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-[#94B3D8] hover:border-[#94B3D8] transition-all duration-300 text-center max-w-md group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 
              className="text-white mb-4 group-hover:text-black transition-colors duration-300"
              style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              {impacts[4].title}
            </h3>
            <p 
              className="text-[#94B3D8]/80 group-hover:text-white transition-colors duration-300"
              style={{ fontSize: '1.40rem', lineHeight: 1.7, fontWeight: 300 }}
            >
              {impacts[4].description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
