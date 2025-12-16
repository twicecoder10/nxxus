import { motion } from 'motion/react';
import React from 'react';

export function ContactContent() {

  return (
    <section className="min-h-screen bg-white relative overflow-hidden py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-[#000000] mb-6"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em' 
              }}
            >
              Ready to Transform Your Diagnostic Workflow?
            </h2>
            <p 
              className="text-[#6B7280]"
              style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            >
              <br></br><br></br>Schedule a personalized demo to see how NXXIM unifies imaging, labs, pathology, and clinical data into a single real time diagnostic workspace.
              <br></br><br></br>Not ready to schedule yet? Email us at <a href="mailto:info@nxxim.com" className="text-[#94B3D8] hover:underline">info@nxxim.com</a> and our team will follow up.
            </p><br></br>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.a
                href="https://outlook.office.com/book/Gc6a333cc0be743e2a5ec806df6f942ba@cosonascloud.onmicrosoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#000000] text-white px-8 py-3 rounded-full hover:bg-[#94B3D8] transition-all duration-300 inline-block"
                style={{ fontSize: '0.9375rem', fontWeight: 600, letterSpacing: '-0.01em' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              > 
                Book Demo
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            className="space-y-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <motion.a
              href="mailto:info@nxxim.com"
              className="block p-8 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="text-[#94B3D8] mb-2" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Email Us
              </div>
              <div className="text-[#000000] group-hover:text-[#94B3D8] transition-colors" style={{ fontSize: '1rem', fontWeight: 500 }}>
                info@nxxim.com
              </div>
            </motion.a>

             <motion.a
              href="mailto:info@nxxim.com?subject=Schedule a Demo"
              className="block p-8 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="text-[#94B3D8] mb-2" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Schedule a Demo
              </div>
              <div className="text-[#000000] group-hover:text-[#94B3D8] transition-colors" style={{ fontSize: '1rem', fontWeight: 500 }}>
                See NXXIM in action with a personalized walkthrough
              </div>
            </motion.a>*

            <motion.a
              href="mailto:info@nxxim.com?subject=Sales Inquiry"
              className="block p-8 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="text-[#94B3D8] mb-2" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Sales Inquiry
              </div>
              <div className="text-[#000000] group-hover:text-[#94B3D8] transition-colors" style={{ fontSize: '1rem', fontWeight: 500 }}>
                Learn about pricing and implementation options
              </div>
            </motion.a> */}
          </motion.div>
        </div>

        {/* Map Section - Full Width 
        <motion.div
          className="w-full mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="mb-4">
            <h3 
              className="text-[#000000] mb-2"
              style={{ fontSize: '1.5rem', fontWeight: 600 }}
            >
              Address
            </h3>
            <p 
              className="text-[#6B7280]"
              style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
            >
              149 Madison Ave 5th Floor<br />
              New York, NY 10016, USA
            </p>
          </div>
          <div className="w-full h-[500px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133389887!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b311d0f5%3A0x4c0b8a6e5e5e5e5e!2s149%20Madison%20Ave%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NXXIM Office Location - 149 Madison Ave 5th Floor, New York, NY 10016"
            />
          </div>
        </motion.div>*/}
      </div>
    </section>
  );
}

