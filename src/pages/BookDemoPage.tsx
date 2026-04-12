import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function BookDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Banner with Breadcrumb */}
      <section className="pt-80 pb-16 bg-[#000000] w-full">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2" style={{ fontSize: '0.875rem' }}>
                <li>
                  <Link to="/" className="text-white hover:text-[#94B3D8] transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white">/</li>
                <li className="text-white font-medium">Schedule a Meeting</li>
              </ol>
            </nav>

            {/* Page Title */}
            <br></br><br></br>
            <h1 
              className="text-white mb-4"
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em' 
              }}
            >
              Schedule a Meeting
            </h1>
            <p 
              className="text-white max-w-3xl"
              style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            >
            </p><br></br>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="min-h-screen bg-white relative overflow-hidden py-32">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 
              className="text-[#000000] mb-6"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                fontWeight: 700, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em' 
              }}
            >
              Schedule Your Demo
            </h2>
            <p 
              className="text-[#6B7280] mb-12 max-w-2xl mx-auto"
              style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            >
              Click the button below to open our calendar and select a time that works best for you. We'll walk you through how NXXUS can transform your diagnostic workflow.
            </p>
            <motion.a
              href="https://outlook.office.com/book/NXXUSDemo@claritydiagnostics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                className="bg-[#000000] text-white px-12 py-5 rounded-full hover:bg-[#94B3D8] transition-all duration-300 group"
                style={{ fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.01em' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="flex items-center gap-2 justify-center">
                  Open Calendar
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.a>
            <p 
              className="text-[#6B7280] mt-8 text-sm"
              style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
            >
              The calendar will open in a new window
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

