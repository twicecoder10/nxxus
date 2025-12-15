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
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const integrations = [
    {
      category: 'Imaging Systems',
      systems: ['Epic Radiant', 'GE PACS', 'Philips IntelliSpace', 'Sectra PACS', 'Agfa Enterprise Imaging']
    },
    {
      category: 'EHR Platforms',
      systems: ['Epic', 'Cerner', 'Meditech', 'Allscripts', 'NextGen Healthcare']
    },
    {
      category: 'Lab Systems',
      systems: ['Sunquest', 'Cerner Millennium', 'Epic Beaker', 'Soft Computer', 'MEDITECH Laboratories']
    },
    {
      category: 'Cloud Infrastructure',
      systems: ['AWS HealthLake', 'Azure Health Data', 'Google Cloud Healthcare', 'Private Cloud', 'Hybrid Deployment']
    }
  ];

  const features = [
    {
      title: 'Zero Disruption',
      description: 'Deploy alongside existing systems without downtime or workflow interruption'
    },
    {
      title: 'HL7/FHIR Native',
      description: 'Standards-compliant data exchange with bidirectional synchronization'
    },
    {
      title: 'Single Sign-On',
      description: 'Unified authentication across all clinical systems via SAML/OAuth'
    },
    {
      title: 'API-First Design',
      description: 'RESTful APIs for custom integrations and third-party extensions'
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen bg-[#FAFAFA] relative overflow-hidden py-32"
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
            Seamless Integration
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <h2 
              className="text-[#000000]"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em' 
              }}
            >
              Works With<br />
              Everything<br />
              You Have
            </h2>
            <p 
              className="text-[#6B7280]"
              style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
            >
              NXXIM connects to your existing PACS, EHR, lab systems, and cloud infrastructure—
              no rip-and-replace required. We enhance your current stack, not disrupt it.
            </p>
          </div>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left - Integration Cards */}
          <div className="space-y-6">
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 border-2 border-[#E5E7EB] hover:border-[#94B3D8] hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="mb-4">
                  <h3 
                    className="text-[#000000] mb-2"
                    style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                  >
                    {integration.category}
                  </h3>
                    <div className="flex flex-wrap gap-2">
                      {integration.systems.map((system, sidx) => (
                        <span
                          key={sidx}
                          className="text-[#6B7280] px-3 py-1 bg-[#FAFAFA] rounded-full border border-[#E5E7EB]"
                          style={{ fontSize: '0.8125rem', fontWeight: 500 }}
                        >
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Visual + Features */}
          <div>
            <motion.div
              className="relative rounded-2xl overflow-hidden border-2 border-[#E5E7EB] shadow-xl mb-8 h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ y }}
            >
              <img
                src="https://images.unsplash.com/photo-1681770678332-3a190df72091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzY1NzY0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Integration Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Overlay stat */}
              <motion.div
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-lg rounded-xl p-6 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div 
                  className="text-[#94B3D8] mb-1"
                  style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  200+
                </div>
                <div 
                  className="text-[#000000]"
                  style={{ fontSize: '0.9375rem', fontWeight: 600 }}
                >
                  Pre-Built Integrations
                </div>
              </motion.div>
            </motion.div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white border-2 border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div>
                    <div 
                      className="text-[#000000] mb-1"
                      style={{ fontSize: '1rem', fontWeight: 600 }}
                    >
                      {feature.title}
                    </div>
                    <div 
                      className="text-[#6B7280]"
                      style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-white rounded-2xl p-12 border-2 border-[#E5E7EB]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 
            className="text-[#000000] mb-4"
            style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Ready to Connect Your Systems?
          </h3>
          <p 
            className="text-[#6B7280] mb-8 max-w-2xl mx-auto"
            style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
          >
            Our integration team will map your existing infrastructure and deliver a custom deployment plan.
          </p>
          <motion.button
            className="bg-[#000000] text-white px-10 py-4 rounded-full hover:bg-[#94B3D8] transition-all duration-300"
            style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Integration Call
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}