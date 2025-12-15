import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import warrenImage from '../../pics/warren.webp';
import tomImage from '../../pics/tom.webp';
import aviImage from '../../pics/avi.jpg';

export function TeamSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const team = [
    {
      name: 'Warren Wright',
      title: 'CEO',
      bio: '35 years of experience leading enterprise-scale software and technology deployments.',
      image: warrenImage,
    },
    {
      name: 'Tom Coppa',
      title: 'CTO',
      bio: 'Technology leader specializing in medical imaging platform architecture and development.',
      image: tomImage,
    },
    {
      name: 'Avi Grossman',
      title: 'Head of Strategic Marketing',
      bio: 'Leads positioning and strategic marketing, with experience across capital markets, product development, and early-stage technology.',
      image: aviImage,
    },
  ];

  return (
    <section 
      id="team" 
      ref={containerRef}
      className="min-h-screen bg-[#FAFAFA] relative overflow-hidden py-32"
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full">
        {/* Section Title */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Leadership Team
          </div>
          <h2 
            className="text-[#000000] max-w-4xl"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            Built by Veterans<br />
            in Enterprise Healthcare
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <TeamCard key={idx} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: any; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={cardRef}
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className="bg-white rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-500"
        whileHover={{ y: -10 }}
        style={{ y }}
      >
        {/* Image Container */}
        <div className="relative h-96 overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Name overlay on image */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          >
            <div className="text-white mb-2" style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {member.name}
            </div>
            <div className="text-[#94B3D8]" style={{ fontSize: '0.9375rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {member.title}
            </div>
          </motion.div>
        </div>

        {/* Bio Content */}
        <div className="p-8">
          <p className="text-[#6B7280]" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
            {member.bio}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}