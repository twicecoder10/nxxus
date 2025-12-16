import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import nifiriedImage from '../../pics/nifiried.jpg';

export function ProductSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const capabilities = [
    {
      title: 'Clinical Decision Support',
      description: ''
    },
    {
      title: 'Intelligent Workflow Automation',
      description: ''
    },
    {
      title: 'Unified Collaboration Workspace',
      description: ''
    },
    {
      title: 'Auto-Classification and Tagging',
      description: ''
    },
    {
      title: 'Image Quality Assessment',
      description: ''
    }
  ];

  return (
    <motion.section 
      id="platform" 
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
          className="mb-20 text-center"
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
            A Unified Diagnostic Workspace
          </h2>
          
          {/* Description Text */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#94B3D8]/90 max-w-4xl mx-auto" style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 300 }}>
              <br></br>NXXIM brings imaging, surgery, pathology, labs, EHR data, and genomics into a single real-time workspace.
              AI-powered workflows enable collaboration and smarter diagnostic decisions, while leveraging existing systems with no replacement required.
            </p>
          </motion.div>
        </motion.div>

        {/* Two-column Layout - Image on left, capabilities on right */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ y }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full">
                <img 
                  src={nifiriedImage}
                  alt="Unified Diagnostic Workspace"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Capabilities List on Right */}
            <div>
              {/* Capabilities List */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {capabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-[#94B3D8] hover:border-[#94B3D8] transition-all duration-300">
                      <div>
                        <div className="text-white mb-1 group-hover:text-black transition-colors duration-300" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                          {capability.title}
                        </div>
                        <div className="text-[#94B3D8]/60 group-hover:text-black/70 transition-colors duration-300" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                          {capability.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}