import { motion } from 'motion/react';
import { useState } from 'react';
import React from 'react';
import { sendDemoRequestEmails } from '../services/email.service';

export function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    role: '',
    message: '',
    privacyPolicy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendDemoRequestEmails({
        fullName: formData.fullName,
        workEmail: formData.workEmail,
        organization: formData.organization,
        role: formData.role,
        message: formData.message,
      });

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ve received your request and will contact you within 24 hours.',
        });
        // Reset form
        setFormData({
          fullName: '',
          workEmail: '',
          organization: '',
          role: '',
          message: '',
          privacyPolicy: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'There was an error submitting your request. Please try again or contact us directly at info@nxxus.com',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again or contact us directly at info@nxxus.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
        {/* Two Column Layout: Content Left, Form Right */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Content */}
          <div>
            {/* Section Title */}
            <motion.div
              className="mb-12"
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
                Schedule a personalized demo to see how NXXUS unifies imaging, labs, pathology, and clinical data into a single real time diagnostic workspace.
                <br></br>Not ready to schedule yet? Email us at info@nxxus.com and our team will follow up.
              </p>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a
                href="mailto:info@nxxus.com"
                className="block p-8 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#94B3D8] mb-2" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Email Us
                </div>
                <div className="text-[#000000] group-hover:text-[#94B3D8] transition-colors" style={{ fontSize: '1rem', fontWeight: 500 }}>
                  info@nxxus.com
                </div>
              </motion.a>

              <motion.a
                href="#form"
                className="block p-8 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#94B3D8] mb-2" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Schedule a Demo
                </div>
                <div className="text-[#000000] group-hover:text-[#94B3D8] transition-colors" style={{ fontSize: '1rem', fontWeight: 500 }}>
                  See NXXUS in action with a personalized walkthrough
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@nxxus.com?subject=Sales Inquiry"
                className="block p-8 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#94B3D8] mb-2" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Sales Inquiry
                </div>
                <div className="text-[#000000] group-hover:text-[#94B3D8] transition-colors" style={{ fontSize: '1rem', fontWeight: 500 }}>
                  Learn about pricing and implementation options
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            id="form"
            className="bg-[#FAFAFA] rounded-2xl border border-[#E5E7EB] p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-[#000000] mb-2" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#94B3D8] focus:border-transparent transition-all"
                  style={{ fontSize: '1rem' }}
                />
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="workEmail" className="block text-[#000000] mb-2" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#94B3D8] focus:border-transparent transition-all"
                  style={{ fontSize: '1rem' }}
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-[#000000] mb-2" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#94B3D8] focus:border-transparent transition-all"
                  style={{ fontSize: '1rem' }}
                />
              </div>

              {/* Your Role */}
              <div>
                <label htmlFor="role" className="block text-[#000000] mb-2" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#94B3D8] focus:border-transparent transition-all"
                  style={{ fontSize: '1rem' }}
                >
                  <option value="">Select your role</option>
                  <option value="clinician">Clinician / Physician</option>
                  <option value="it">IT / Technology</option>
                  <option value="administration">Administration / Executive</option>
                  <option value="radiology">Radiology</option>
                  <option value="pathology">Pathology</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#000000] mb-2" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#94B3D8] focus:border-transparent transition-all resize-none"
                  style={{ fontSize: '1rem' }}
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  required
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="mt-1 mr-3 w-4 h-4 text-[#94B3D8] border-[#E5E7EB] rounded focus:ring-[#94B3D8]"
                /> &nbsp;
                <label htmlFor="privacyPolicy" className="text-[#6B7280]" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                   By submitting this form, you agree to our privacy policy. We'll never share your information.
                </label>
              </div>

              {/* Submit Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                >
                  <p style={{ fontSize: '0.9375rem', margin: 0 }}>
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-[#94B3D8] text-white cursor-not-allowed'
                    : 'bg-[#000000] text-white hover:bg-[#94B3D8]'
                }`}
                style={{ fontSize: '1.0625rem', fontWeight: 600, letterSpacing: '-0.01em' }}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </motion.button>
            </form>
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
              title="NXXUS Office Location - 149 Madison Ave 5th Floor, New York, NY 10016"
            />
          </div>
        </motion.div>*/}
      </div>
    </section>
  );
}

