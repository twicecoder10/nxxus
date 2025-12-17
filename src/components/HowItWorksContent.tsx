import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import c1Image from '../../pics/c1.jpg';
import c2Image from '../../pics/C2.jpg';
import c4Image from '../../pics/C4.jpg';
import c5Image from '../../pics/C5.jpg';
import unifyImage from '../../pics/unify.jpg';
import connectImage from '../../pics/connect.jpg';
import optimizeImage from '../../pics/optimiz.jpg';

export function HowItWorksContent() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate which step should be active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const stepElements = stepRefs.current.filter(Boolean);
      if (stepElements.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      let closestStep = 0;
      let closestDistance = Infinity;

      stepElements.forEach((element, idx) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);

        // Only consider elements that are in or near the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestStep = idx;
          }
        }
      });

      setActiveStep(closestStep);
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Securely connects to existing EHRs, PACS, and lab systems. No system replacement.',
      image: connectImage
    },
    {
      number: '02',
      title: 'Unify',
      description: 'Organizes imaging, pathology, labs, and clinical data into a single real-time diagnostic view.',
      image: unifyImage
    },
    {
      number: '03',
      title: 'Collaborate',
      description: 'A consistent diagnostic workspace for clinicians across specialties and care teams.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1080&q=80&auto=format&fit=crop' // Medical team collaboration, doctors working together
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'Medically tuned AI supports triage, prioritization, and faster time-to-diagnosis.',
      image: optimizeImage
    },
    {
      number: '05',
      title: 'Learn',
      description: 'Anonymized data enables institutional learning through relevant prior cases and clinical insights.',
      image: c5Image
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-white relative overflow-hidden py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          <h2 
            className="text-[#000000] max-w-4xl mx-auto"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
           From Fragmentation to Diagnostic Clarity

          </h2>
        </motion.div>

        {/* Factory-style Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left - Step List (Factory Style) */}
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
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
                          style={{ fontSize: '1.40rem', lineHeight: 1.7, fontWeight: 300 }}
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
                        Step {activeStep + 1} of 5
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

