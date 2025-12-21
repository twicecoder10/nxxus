import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';
import warrenImage from '../../pics/warren.webp';
import tomImage from '../../pics/genericpic.jpg';
import aviImage from '../../pics/avi.jpg';
import genericImage from '../../pics/genericpic.jpg';
// Core Team images
import josephBambergerImage from '../../pics/Geneva-PE-Joseph-Bamberger.webp';
import akivaPodolskyImage from '../../pics/Geneva-PE-Akiva-Podolsky.webp';
import drJosephChalilImage from '../../pics/Geneva-PE-Dr.-Joseph-M-Chalil.webp';
import philipKahnImage from '../../pics/Philip-Kahn-CPA.webp';
// Medical Advisory Board images
import barryMangelImage from '../../pics/Barry-David-Mangel.jpg';
import drRephaelYechieliImage from '../../pics/Dr-Rephael-Yechieli.webp';
import gauravMalikImage from '../../pics/Gaurav-Malik.webp';

export function TeamSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const enterpriseLeaders = [
    {
      name: 'Warren Wright',
      title: 'CEO',
      bio: '35 years of experience leading enterprise-scale software and technology deployments.',
      image: warrenImage,
    },
    {
      name: '',
      title: 'CTO',
      bio: 'Technology leader specializing in medical imaging platform architecture and development.',
      image: tomImage,
    },
    {
      name: 'Philip Kahn, CPA',
      title: 'Chief Financial Officer',
      bio: 'Former PwC and Integra Connect finance leader. Deep healthcare finance and operations expertise.',
      image: philipKahnImage,
    },
    {
      name: '',
      title: 'Vice President',
      bio: '',
      image: tomImage,
    },
    {
      name: '',
      title: 'Client Relations',
      bio: '',
      image: tomImage,
    },
    {
      name: '',
      title: 'CMO',
      bio: '',
      image: tomImage,
    },
    {
      name: 'Tom Coppa',
      title: 'Director of Product Development',
      bio: 'Technology leader specializing in medical imaging platform architecture and development.',
      image: tomImage,
    },
    
  ];

  const coreTeam = [
  
    {
      name: 'Joseph Bamberger',
      title: 'Founder and CEO',
      bio: 'Founder of Geneva PE. Previously founded Jade Capital advising UHNW clients in PE and venture.',
      image: josephBambergerImage,
    },
    {
      name: 'Akiva Podolsky',
      title: 'Co-Founder, Managing Partner',
      bio: 'Co Founder of Geneva PE with deep experience in alternative investments and large scale portfolio management.',
      image: akivaPodolskyImage,
    },
    {
      name: 'Dr. Joseph M. Chalil',
      title: 'Chief Medical Advisor',
      bio: '20 years in healthcare leadership with senior roles at Abbott, Roche, Boehringer, and ICHORtec. U.S. Navy Medical Corps veteran and published author.',
      image: drJosephChalilImage,
    },
    {
      name: 'Avi Grossman, MBA',
      title: 'Director of Investor Relations and Strategic Marketing',
      bio: 'Capital markets and product strategy background with $200M+ in multifamily transactions and experience in real estate, venture, compliance, and early-stage tech.',
      image: aviImage,
    },
    {
      name: 'David Hill',
      title: '',
      bio: '',
      image: tomImage,
    },
    {
      name: 'Stem Cell',
      title: '',
      bio: '',
      image: tomImage,
    },
    {
      name: 'Jeff Maibus',
      title: '',
      bio: '',
      image: tomImage,
    },
  ];

  const medicalAdvisoryBoard = [
    {
      name: 'Dr. Barry D. Mangel',
      title: 'Chief of Clinical Service Lines at Wellstar',
      bio: 'Harvard-trained, board-certified interventional cardiologist with thirty years of practice and sixteen years of prior leadership as Chief Cardiology Officer.',
      image: barryMangelImage,
    },
    {
      name: 'Dr. Rephael Yechieli',
      title: 'Associate Professor of Radiation Oncology at the University of Miami',
      bio: '60 plus peer reviewed publications and multiple medical director roles.',
      image: drRephaelYechieliImage,
    },
    {
      name: 'Gaurav Malik',
      title: 'VP at Quest Diagnostics',
      bio: 'Supporting care for over 20 million patients. 25 years across GE Healthcare, GE Capital, and Quest.',
      image: gauravMalikImage,
    },
  ];

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .tom-coppa-card {
            grid-column: 2 / 3;
          }
        }
      `}</style>
      <section 
        id="team" 
        ref={containerRef}
        className="min-h-screen bg-white relative overflow-hidden pt-32 pb-28"
      >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full">
        {/* First Section: Built by Enterprise Healthcare Leaders */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          </div>
          <h2 
            className="text-[#000000] max-w-4xl text-center mx-auto mb-24"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            Built by Enterprise Healthcare Leaders
          </h2>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {enterpriseLeaders.map((member, idx) => {
              // Tom Coppa (index 6) should be directly under Client Relations (index 4, column 2)
              const isTomCoppa = idx === 6 && member.name === 'Tom Coppa';
              return (
                <TeamCard 
                  key={idx} 
                  member={member} 
                  index={idx} 
                  shouldCenter={isTomCoppa}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Second Section: Backed by Geneva Private Equity */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-[#000000] max-w-4xl text-center mx-auto mb-24"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          ><br></br>
             Backed by Geneva Private Equity
          </h2>

          {/* Core Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {coreTeam.map((member, idx) => (
              <TeamCard 
                key={idx} 
                member={member} 
                index={idx} 
                shouldCenter={idx === 6 && coreTeam.length % 3 === 1}
              />
            ))}
          </div>
        </motion.div>

        {/* Third Section: Medical Advisory Board */}
        <motion.div
          className="mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-[#000000] max-w-4xl text-center mx-auto mb-24"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          ><br></br>
            Medical Advisory Board
          </h2>

          {/* Medical Advisory Board Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {medicalAdvisoryBoard.map((member, idx) => (
              <TeamCard key={idx} member={member} index={idx} />
            ))}
          </div>
          <br></br> <br></br>
        </motion.div>
      </div>
    </section>
    </>
  );
}

function TeamCard({ member, index, shouldCenter = false }: { member: any; index: number; shouldCenter?: boolean }) {
  return (
    <motion.div
      className={`group h-full ${shouldCenter ? 'tom-coppa-card' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-500 flex flex-col h-full"
      >
        {/* Image Container */}
        <div className="relative h-[500px] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
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
        <div className="p-8 flex-1 flex flex-col">
          <p className="text-[#6B7280]" style={{ fontSize: '1.40rem', lineHeight: 1.7, fontWeight: 300 }}>
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}