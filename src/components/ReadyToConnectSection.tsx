import { motion } from 'motion/react';

export function ReadyToConnectSection() {
  return (
    <section className="bg-[#F5F5F5] relative overflow-hidden py-20 mt-10 mb-10">
      <div className="w-full px-8 lg:px-16">
        <motion.div
          className="text-center bg-white rounded-2xl p-12 border-2 border-[#94B3D8] w-full"
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
            
          </p>
          <motion.a
            href="https://outlook.office.com/book/Gc6a333cc0be743e2a5ec806df6f942ba@cosonascloud.onmicrosoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#000000] text-white px-10 py-4 rounded-full hover:bg-[#94B3D8] transition-all duration-300 inline-block"
            style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
