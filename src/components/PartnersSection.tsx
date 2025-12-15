import { motion } from 'motion/react';

export function PartnersSection() {
  // Partner/Company logos - using text-based logos for medical/tech companies
  const partners = [
    { name: 'Geneva Private Equity', type: 'Backed By' },
    { name: 'Epic Systems', type: 'Integration Partner' },
    { name: 'Philips Healthcare', type: 'Technology Partner' },
    { name: 'GE Healthcare', type: 'Imaging Partner' },
    { name: 'Siemens Healthineers', type: 'Strategic Partner' },
    { name: 'AWS Health', type: 'Cloud Infrastructure' },
    { name: 'NVIDIA Healthcare', type: 'AI Computing Partner' },
    { name: 'Microsoft Azure', type: 'Platform Partner' },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Ecosystem
          </div>
          <h2 
            className="text-[#000000]"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            Trusted Partners
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Infinite Scrolling Track */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -50 * partners.length + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedPartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-10 py-8 rounded-2xl border-2 border-[#E5E7EB] bg-white hover:border-[#94B3D8] hover:shadow-lg transition-all duration-300 group"
              style={{ minWidth: '320px' }}
            >
              <div className="text-center">
                <div className="text-[#000000] mb-2 group-hover:text-[#94B3D8] transition-colors duration-300" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  {partner.name}
                </div>
                <div className="text-[#9CA3AF]" style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {partner.type}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}