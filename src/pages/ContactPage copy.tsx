import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ContactContent } from '../components/ContactContent';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function ContactPage() {
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
                <li className="text-white font-medium">Contact</li>
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
              Contact
            </h1>
            <p 
              className="text-white max-w-3xl"
              style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            >
            </p><br></br>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <ContactContent />

      <Footer />
    </div>
  );
}

