import { motion } from 'motion/react';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-[#000000] relative overflow-hidden flex items-center py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-[800px] h-[800px] bg-[#94B3D8] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[800px] h-[800px] bg-[#94B3D8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            className="text-[#94B3D8] mb-8"
            style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get Started
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-white mb-10"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 7rem)', 
              fontWeight: 700, 
              lineHeight: 1, 
              letterSpacing: '-0.04em' 
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Unify<br />
            Your Diagnostics?
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-[#94B3D8]/80 mb-16 max-w-3xl mx-auto"
            style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join leading healthcare systems already transforming their diagnostic workflows with NXXIM's AI-native platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-white text-[#000000] px-12 py-5 rounded-full hover:bg-[#94B3D8] hover:text-white transition-all duration-300"
              style={{ fontSize: '1.0625rem', fontWeight: 600, letterSpacing: '-0.01em' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Demo
            </motion.button>
            
            <motion.a
              href="mailto:contact@nxxim.com"
              className="text-white hover:text-[#94B3D8] transition-colors duration-300 flex items-center gap-3 group"
              style={{ fontSize: '1.0625rem', fontWeight: 500, letterSpacing: '-0.01em' }}
              whileHover={{ x: 5 }}
            >
              contact@nxxim.com
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </motion.a>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { label: 'Sales', value: 'sales@nxxim.com' },
              { label: 'Support', value: 'support@nxxim.com' },
              { label: 'Partnerships', value: 'partners@nxxim.com' }
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#94B3D8]/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#94B3D8] mb-2" style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {contact.label}
                </div>
                <a 
                  href={`mailto:${contact.value}`}
                  className="text-white hover:text-[#94B3D8] transition-colors"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}