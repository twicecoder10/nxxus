import { motion } from 'motion/react';
import { useState } from 'react';
import React from 'react';
import { sendDemoRequestEmails } from '../services/email.service';

export function ContactContent() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    title: '',
    role: '',
    primaryAreaOfInterest: '',
    message: '',
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
        title: formData.title,
        role: formData.role,
        primaryAreaOfInterest: formData.primaryAreaOfInterest,
        message: formData.message,
      });

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ve received your request and will contact you soon.',
        });
        // Reset form
        setFormData({
          fullName: '',
          workEmail: '',
          organization: '',
          title: '',
          role: '',
          primaryAreaOfInterest: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'There was an error submitting your request. Please try again or contact us directly at info@nxxus.ai',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again or contact us directly at info@nxxus.ai',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('meeting-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
              Ready to Transform Your Workspaces?
            </h2>
            <p 
              className="text-[#6B7280]"
              style={{ fontSize: '1.40rem', lineHeight: 1.7, fontWeight: 300 }}
            >
              <br></br>Schedule a personalized meeting to see how NXXUS unifies imaging, labs, pathology, and clinical data into a single real-time enterprise diagnostic workspace.
          {/*    <br></br><br></br>Not ready to schedule yet? Email us at <a href="mailto:info@nxxus.ai" className="text-[#94B3D8] hover:underline">info@nxxus.ai</a> and our team will follow up.*/}
            </p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
               {/*<motion.a
                href="#meeting-form"
                onClick={scrollToForm}
                className="bg-[#000000] text-white px-12 py-5 rounded-full hover:bg-[#94B3D8] transition-all duration-300 inline-block cursor-pointer"
                style={{ fontSize: '3.25rem', fontWeight: 600, letterSpacing: '-0.01em' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              > 
                Schedule a Meeting
              </motion.a>*/}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="meeting-form"
            className="mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 
              className="text-[#000000] mb-8 text-center"
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
                fontWeight: 700, 
                lineHeight: 1.2, 
                letterSpacing: '-0.02em' 
              }}
            >
              Schedule a Meeting
            </h3>
            
            <form onSubmit={handleSubmit} className="bg-[#FAFAFA] rounded-2xl border border-[#E5E7EB] p-8 lg:p-12 space-y-6">
               {/* Title */}
               <div>
                <label htmlFor="title" className="block text-[#000000] mb-2" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  Title
                </label>
                <select
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:border-[#94B3D8] transition-all"
                  style={{ fontSize: '1rem' }}
                >
                  <option value="">Select your title</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Prof.">Prof.</option>
                </select>
              </div>

             
             
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:border-[#94B3D8] transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:border-[#94B3D8] transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:border-[#94B3D8] transition-all"
                  style={{ fontSize: '1rem' }}
                />
              </div>

            
              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-[#000000] mb-2" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  Role <span className="text-red-500">*</span>
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:border-[#94B3D8] transition-all"
                  style={{ fontSize: '1rem' }}
                >
                  <option value="">Select your role</option>
                  <option value="Clinical / Research">Clinical / Research</option>
                  <option value="Leadership / Administration">Leadership / Administration</option>
                  <option value="Technology / IT">Technology / IT</option>
                </select>
              </div>

              {/* Primary Area of Interest */}
              <div>
                <label htmlFor="primaryAreaOfInterest" className="block text-[#000000] mb-2" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  Primary Area of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="primaryAreaOfInterest"
                  name="primaryAreaOfInterest"
                  required
                  value={formData.primaryAreaOfInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:border-[#94B3D8] transition-all"
                  style={{ fontSize: '1rem' }}
                >
                  <option value="">Select primary area of interest</option>
                  <option value="Imaging Workflows">Imaging Workflows</option>
                  <option value="Data Convergence and Consolidation">Data Convergence and Consolidation</option>
                  <option value="AI for Prioritization, Analysis, and Workflow Optimization">AI for Prioritization, Analysis, and Workflow Optimization</option>
                  <option value="Cross-Specialty Collaboration">Cross-Specialty Collaboration</option>
                  <option value="Clinical Decision Support">Clinical Decision Support</option>
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
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E7EB] bg-white text-[#000000] focus:outline-none focus:border-[#94B3D8] transition-all resize-none"
                  style={{ fontSize: '1rem' }}
                />
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
                className={`w-full px-8 py-4 rounded-full transition-all duration-300 ${
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

