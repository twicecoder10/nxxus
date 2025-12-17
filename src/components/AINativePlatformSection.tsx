import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function AINativePlatformSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const aiFeatures = [
    {
      title: 'Intelligent Triage',
      description: 'ML models automatically prioritize urgent cases based on imaging findings and clinical context',
      metric: '40%',
      metricLabel: 'Faster Critical Detection'
    },
    {
      title: 'Automated Analysis',
      description: 'Computer vision algorithms detect anomalies and provide quantitative measurements in real-time',
      metric: '95%',
      metricLabel: 'Detection Accuracy'
    },
    {
      title: 'Predictive Insights',
      description: 'AI-powered analytics identify patterns and predict outcomes across patient populations',
      metric: '3x',
      metricLabel: 'Diagnostic Efficiency'
    },
    {
      title: 'Continuous Learning',
      description: 'Platform improves with every case, adapting to your institution\'s specific workflows and protocols',
      metric: '24/7',
      metricLabel: 'Model Training'
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen bg-white relative overflow-hidden py-32"
      style={{ opacity, scale }}
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full">
        {/* Section Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            AI-Native Platform
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
              Intelligence<br />
              Built In, Not<br />
              Bolted On
            </h2>
            <p 
              className="text-[#6B7280]"
              style={{ fontSize: '1.40rem', lineHeight: 1.7, fontWeight: 300 }}
            >
              Unlike legacy systems retrofitted with AI, NXXIM was engineered from the ground up 
              with machine learning at its core—delivering smarter diagnostics from day one.
            </p>
          </div>
        </motion.div>

        {/* Visual Demo Section */}
        <motion.div
          className="mb-24 relative rounded-2xl overflow-hidden border-2 border-[#E5E7EB] shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ y }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Left - Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU2NTEzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80 lg:to-transparent" />
            </div>

            {/* Right - Stats */}
            <div className="p-12 lg:p-16 bg-white flex flex-col justify-center">
              <div className="space-y-8">
                {[
                  { value: '50M+', label: 'Training Images', description: 'Multi-specialty dataset' },
                  { value: '99.2%', label: 'Uptime SLA', description: 'Enterprise reliability' },
                  { value: '<100ms', label: 'AI Response', description: 'Real-time inference' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="border-l-4 border-[#94B3D8] pl-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div 
                      className="text-[#000000] mb-1"
                      style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-[#000000] mb-1"
                      style={{ fontSize: '1rem', fontWeight: 600 }}
                    >
                      {stat.label}
                    </div>
                    <div 
                      className="text-[#6B7280]"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {aiFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl bg-[#FAFAFA] border-2 border-[#E5E7EB] hover:border-[#94B3D8] hover:bg-white transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 
                  className="text-[#000000] flex-1"
                  style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  {feature.title}
                </h3>
                <div className="text-right">
                  <div 
                    className="text-[#94B3D8] group-hover:scale-110 transition-transform"
                    style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}
                  >
                    {feature.metric}
                  </div>
                  <div 
                    className="text-[#9CA3AF] mt-1"
                    style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                  >
                    {feature.metricLabel}
                  </div>
                </div>
              </div>
              <p 
                className="text-[#6B7280]"
                style={{ fontSize: '1.40rem', lineHeight: 1.7, fontWeight: 300 }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}