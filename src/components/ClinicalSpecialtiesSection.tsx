import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ClinicalSpecialtiesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95]);

  const specialties = [
    {
      name: 'Radiology',
      description: 'Complete PACS integration with AI-powered triage and analysis',
      image: 'https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ3klMjBpbWFnaW5nJTIweHJheXxlbnwxfHx8fDE3NjU3NjQxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['CT/MRI/X-Ray', 'Real-time viewing', 'AI prioritization']
    },
    {
      name: 'Pathology',
      description: 'Digital pathology with whole slide imaging and AI diagnostics',
      image: 'https://images.unsplash.com/photo-1630959300489-63dae3a8240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwbGFifGVufDF8fHx8MTc2NTc2NDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['WSI viewing', 'Tissue analysis', 'Lab integration']
    },
    {
      name: 'Cardiology',
      description: 'Cardiac imaging with advanced visualization and measurements',
      image: 'https://images.unsplash.com/photo-1698306642516-9841228dcff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2d5JTIwaGVhcnQlMjBtb25pdG9yfGVufDF8fHx8MTc2NTc2NDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Echo/Cath', 'EKG integration', 'Cardiac metrics']
    },
    {
      name: 'Oncology',
      description: 'Integrated tumor board with multi-modal imaging review',
      image: 'https://images.unsplash.com/photo-1763310225108-9e16920156f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmNvbG9neSUyMGNhbmNlciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjU3NjQxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Treatment tracking', 'Genomic data', 'MDT collaboration']
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen bg-[#000000] relative overflow-hidden py-32"
      style={{ opacity, scale }}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#94B3D8] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#94B3D8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-24 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Clinical Specialties
          </div>
          <h2 
            className="text-white"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            Built for Every<br />
            Diagnostic Discipline
          </h2>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map((specialty, idx) => (
            <SpecialtyCard key={idx} specialty={specialty} index={idx} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function SpecialtyCard({ specialty, index }: { specialty: any; index: number }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-white/10 hover:border-[#94B3D8] transition-all duration-500"
        whileHover={{ y: -10 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src={specialty.image}
            alt={specialty.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          >
            <h3 
              className="text-white mb-3 group-hover:text-[#94B3D8] transition-colors duration-300"
              style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em' }}
            >
              {specialty.name}
            </h3>
            <p 
              className="text-[#94B3D8]/80 mb-6"
              style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
            >
              {specialty.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {specialty.features.map((feature: string, fidx: number) => (
                <div
                  key={fidx}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                  style={{ fontSize: '0.8125rem', fontWeight: 500 }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Number indicator */}
        <div 
          className="absolute top-6 right-6 text-white/20 group-hover:text-[#94B3D8]/40 transition-colors duration-300"
          style={{ fontSize: '4rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}
        >
          0{index + 1}
        </div>
      </motion.div>
    </motion.div>
  );
}