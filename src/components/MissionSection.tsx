import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function MissionSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95]);

  return (
    <motion.section 
      id="mission" 
      ref={containerRef}
      className="min-h-screen bg-white relative overflow-hidden flex items-center py-32"
      style={{ opacity, scale }}
    >
      <motion.div 
        className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-[#94B3D8] mb-8"
              style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              Our Mission
            </motion.div>

            <h2 
              className="text-[#000000] mb-8"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em' 
              }}
            >
              One Platform.<br />
              Every Diagnosis.
            </h2>

            <div className="space-y-6">
              <p className="text-[#6B7280]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                Medical imaging is fragmented. Radiologists toggle between multiple systems, 
                pathology slides live in separate databases, and genomic data exists in isolation.
              </p>
              
              <p className="text-[#6B7280]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                NXXIM changes that. We've built the first AI-native platform that unifies every 
                diagnostic stream—radiology, pathology, genomics, and clinical records—into a 
                single, intelligent workspace.
              </p>

              <div className="pt-6">
                <motion.div
                  className="inline-flex items-center gap-3 text-[#000000] group cursor-pointer"
                  style={{ fontSize: '1rem', fontWeight: 600 }}
                  whileHover={{ x: 5 }}
                >
                  <span>Explore Our Platform</span>
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: '100%', label: 'Data Integration', description: 'Seamless connection to all imaging sources' },
              { value: '<2s', label: 'Load Time', description: 'Instant access to complete patient timelines' },
              { value: '24/7', label: 'AI Analysis', description: 'Continuous monitoring and prioritization' },
              { value: '∞', label: 'Scalability', description: 'Enterprise-grade infrastructure' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(148, 179, 216, 0.1)' }}
              >
                <div 
                  className="text-[#000000] mb-3 group-hover:text-[#94B3D8] transition-colors"
                  style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-[#000000] mb-2"
                  style={{ fontSize: '1rem', fontWeight: 600 }}
                >
                  {stat.label}
                </div>
                <div 
                  className="text-[#9CA3AF]"
                  style={{ fontSize: '0.875rem', lineHeight: 1.5 }}
                >
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}