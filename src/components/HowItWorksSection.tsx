import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95]);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Connects to existing PACS, EHRs, lab systems, and diagnostic sources',
      image: 'https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGF0YSUyMGludGVncmF0aW9ufGVufDF8fHx8MTc2NTc2MjgyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      number: '02',
      title: 'Ingest',
      description: 'Organizes all data into a unified clinical timeline',
      image: 'https://images.unsplash.com/photo-1691934310598-27528df21f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGF0YWJhc2UlMjBzeXN0ZW18ZW58MXx8fHwxNzY1NzYyODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      number: '03',
      title: 'Review',
      description: 'Delivers a consistent diagnostic workspace for secure collaboration',
      image: 'https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY1NzYyODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'Medically tuned AI supports triage, prioritization, and faster diagnosis',
      image: 'https://images.unsplash.com/photo-1674544362969-a4269ef0ea69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjU3NjI4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
  ];

  return (
    <motion.section 
      id="how-it-works" 
      ref={containerRef}
      className="min-h-screen bg-white relative overflow-hidden py-32"
      style={{ opacity, scale }}
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full">
        {/* Section Title */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            How It Works
          </div>
          <h2 
            className="text-[#000000] max-w-4xl"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            Four Steps to<br />
            Unified Diagnostics
          </h2>
        </motion.div>

        {/* Factory-style Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left - Step List (Factory Style) */}
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className={`cursor-pointer py-10 border-b border-[#E5E7EB] transition-all duration-500 ${
                  activeStep === idx ? 'border-[#94B3D8]' : 'hover:border-[#94B3D8]/30'
                }`}
                onClick={() => setActiveStep(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-8">
                  {/* Number */}
                  <div 
                    className={`transition-all duration-500 ${
                      activeStep === idx ? 'text-[#94B3D8]' : 'text-[#D1D5DB]'
                    }`}
                    style={{ 
                      fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
                      fontWeight: 700, 
                      letterSpacing: '-0.02em',
                      lineHeight: 1
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3
                      className={`mb-4 transition-all duration-500 ${
                        activeStep === idx ? 'text-[#000000]' : 'text-[#6B7280]'
                      }`}
                      style={{ 
                        fontSize: 'clamp(1.75rem, 3vw, 3rem)', 
                        fontWeight: 700, 
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1
                      }}
                    >
                      {step.title}
                    </h3>
                    
                    {/* Description - Only show when active */}
                    <AnimatePresence mode="wait">
                      {activeStep === idx && (
                        <motion.p
                          className="text-[#6B7280]"
                          style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Image Display (Factory Style) */}
          <div className="sticky top-32 h-[600px] lg:h-[700px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Step indicator on image */}
                <motion.div
                  className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-lg rounded-xl p-6 shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="text-[#94B3D8]"
                      style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                    >
                      {steps[activeStep].number}
                    </div>
                    <div>
                      <div 
                        className="text-[#000000] mb-1"
                        style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                      >
                        {steps[activeStep].title}
                      </div>
                      <div 
                        className="text-[#6B7280]"
                        style={{ fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        Step {activeStep + 1} of 4
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}