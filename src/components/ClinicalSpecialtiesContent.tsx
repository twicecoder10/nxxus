import React from 'react';
import { motion } from 'motion/react';
import womenHealthImage from '../../pics/women health.jpg';
import cardiologyImage from '../../pics/Co.jpg';
import oncologyImage from '../../pics/CC.jpg';
import additionalSpecialtiesImage from '../../pics/CD.jpg';

export function ClinicalSpecialtiesContent() {
  const specialties = [
    {
      name: 'Radiology',
      description: 'Unified imaging review, prioritization, and diagnostic context across modalities',
      image: 'https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ3klMjBpbWFnaW5nJTIweHJheXxlbnwxfHx8fDE3NjU3NjQxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['CT/MRI/X-Ray', 'Real-time viewing', 'AI prioritization']
    },
    {
      name: 'Pathology',
      description: 'Digital slide review with longitudinal correlation across laboratory and clinical data.',
      image: 'https://images.unsplash.com/photo-1630959300489-63dae3a8240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBtaWNyb3Njb3BlJTIwbGFifGVufDF8fHx8MTc2NTc2NDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['WSI viewing', 'Tissue analysis', 'Lab integration']
    },
    {
      name: 'Cardiology',
      description: ' Integrated imaging, waveforms, and longitudinal patient history in a single workspace.',
      image: cardiologyImage,
      features: ['Echo/Cath', 'EKG integration', 'Cardiac metrics']
    },
    {
      name: 'Oncology',
      description: 'Multi-modal diagnostics spanning imaging, pathology, labs, and genomics',
      image: oncologyImage,
      features: ['Treatment tracking', 'Genomic data', 'MDT collaboration']
    },
    {
      name: 'Surgery',
      description: 'Intraoperative and longitudinal diagnostic context across imaging, labs, and clinical records.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZXJ5JTIwb3BlcmF0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjU3NjQxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Intraoperative imaging', 'Procedure documentation', 'Clinical context']
    },
    {
      name: 'Endoscopy',
      description: 'Procedure imaging and findings integrated with pathology, labs, and patient history.',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmRvc2NvcHklMjBwcm9jZWR1cmV8ZW58MXx8fHwxNzY1NzY0MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Procedure videos', 'Findings documentation', 'Pathology correlation']
    },
    {
      name: "Women's Health",
      description: 'Longitudinal imaging, screening, and diagnostic workflows across care episodes.',
      image: womenHealthImage,
      features: ['Mammography', 'OB/GYN imaging', 'Screening workflows']
    },
    {
      name: "And 40+ additional diagnostic specialities",
      description: '',
      image: additionalSpecialtiesImage,
      features: []
    }
  ];

  return (
    <section className="min-h-screen bg-white relative overflow-hidden py-32">
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
            
          </div>
          <h2 
            className="text-[#000000]"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            Purpose-Built for <br />Diagnostic Specialities
           
          </h2><br></br>
          <p>              NXXIM adapts to specialty-specific workflows while unifying imaging, pathology, labs, and clinical data.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {specialties.map((specialty, idx) => (
            <SpecialtyCard key={idx} specialty={specialty} index={idx} />
          ))}
        </div>

        {/* Additional Specialties Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
        </motion.div>
      </div>
    </section>
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
      <div
        className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-500"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={specialty.image}
            alt={specialty.name}
            className="w-full h-full object-cover"
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
          className="absolute top-6 right-6 text-[#E5E7EB] group-hover:text-[#94B3D8]/40 transition-colors duration-300"
          style={{ fontSize: '4rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}
        >
          0{index + 1}
        </div>
      </div>
    </motion.div>
  );
}

