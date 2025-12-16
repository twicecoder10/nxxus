import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function SeamlessIntegrationSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95]);

  const integrations = [
    {
      category: 'EHRs',
      systems: ['Oracle Health (Cerner)', 'Epic', 'MEDITECH', 'Allscripts', 'athenahealth']
    },
    {
      category: 'PACS / VNA',
      systems: ['Change Healthcare', 'Fujifilm Synapse', 'Philips', 'GE', 'Hyland']
    },
    {
      category: 'Lab Systems',
      systems: ['LabCorp', 'Quest Diagnostics', 'Cerner PathNet', 'Sunquest', 'Orchard']
    },
    {
      category: 'Standards',
      systems: ['FHIR R4', 'HL7 v2', 'DICOM', 'IHE XDS', 'SMART on FHIR']
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen bg-[#000000] relative overflow-hidden py-32"
      style={{ opacity, scale }}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#94B3D8] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#94B3D8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Seamless Integration
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <h2 
              className="text-white"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em' 
              }}
            >
              Works With Your<br />
              Existing Systems
            </h2>
            <p 
              className="text-[#94B3D8]/90"
              style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
            >
              Designed to integrate directly into enterprise health systems without disrupting workflows.
            </p>
          </div>
        </motion.div>

        {/* Integration Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {integrations.map((integration, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl p-8 border-2 border-white/10 hover:border-[#94B3D8] hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 
                className="text-[#000000] mb-4"
                style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                {integration.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {integration.systems.map((system, sidx) => (
                  <span
                    key={sidx}
                    className="text-[#6B7280] px-4 py-2 bg-[#FAFAFA] rounded-full border border-[#E5E7EB] hover:border-[#94B3D8] transition-colors"
                    style={{ fontSize: '0.875rem', fontWeight: 500 }}
                  >
                    {system}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}