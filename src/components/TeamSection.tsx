import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';
import warrenImage from '../../pics/warren.jpg';
import tomImage from '../../pics/TomCoppaHeadShot01.jpg';
import tomImagedol from '../../pics/genericpic.jpg';
import aviImage from '../../pics/avi.jpg';
import genericImage from '../../pics/genericpic.jpg';
// Core Team images
import josephBambergerImage from '../../pics/Geneva-PE-Joseph-Bamberger.jpg';
import akivaPodolskyImage from '../../pics/Geneva-PE-Akiva-Podolsky.jpg';
import drJosephChalilImage from '../../pics/Geneva-PE-Dr.-Joseph-M-Chalil.jpg';
import philipKahnImage from '../../pics/Philip-Kahn-CPA.jpg';
// Medical Advisory Board images
import barryMangelImage from '../../pics/Barry-David-Mangel.jpg';
import drRephaelYechieliImage from '../../pics/Dr-Rephael-Yechieli.jpg';
import gauravMalikImage from '../../pics/GauravMalik.jpg';
import robGondaImage from '../../pics/RobGonda.jpg';
import jeffMabusImage from '../../pics/JefferyMabus.jpg';
import isadoreMillerImage from '../../pics/IsadoreMiller2.jpg';

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
      name: 'Rob Gonda',
      title: 'CTO',
      bio: '25-year AI and digital executive with five exits, leading Fortune 100 transformations, driving sustained revenue growth, and enterprise value.',
      image: robGondaImage,
    },
    {
      name: 'Philip Kahn, CPA',
      title: 'Chief Financial Officer',
      bio: 'Former PwC and Integra Connect finance leader. Deep healthcare finance and operations expertise.',
      image: philipKahnImage,
    },
    {
      name: 'Jeff Mabus',
      title: 'SVP',
      bio: 'Healthcare technology leader with 25 years designing software, leading implementations, and advancing interoperability solutions globally.',
      image: jeffMabusImage,
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
      title: 'Senior Director of Investor Relations and Strategic Marketing',
      bio: 'Capital markets and product strategy background with $200M+ in multifamily transactions and experience in real estate, venture, compliance, and early-stage tech.',
      image: aviImage,
    },
    {
      name: 'Isadore Miller',
      title: 'Senior Director, Portfolio Companies',
      bio: 'Growth-focused leader, excelling in entrepreneurship, business strategy, and sales, launching successful entrepreneurial ventures.',
      image: isadoreMillerImage,
    },
  ];

  const medicalAdvisoryBoard = [
    {
      name: 'Dr. Barry D. Mangel, MD',
      title: ' Chief, Clinical Services, Wellstar',
      bio: 'Harvard-trained interventional cardiologist with 30-plus years leading enterprise clinical strategy, cardiovascular services, quality performance, and operational excellence.',
      image: barryMangelImage,
    },
    {
      name: 'Dr. Rephael  L.Yechieli, MD',
      title: 'Associate Professor, Radiation Oncology, University of Miami',
      bio: 'Nationally recognized radiation oncologist specializing in advanced noninvasive cancer therapies, with extensive academic leadership and peer-reviewed research experience.',
      image: drRephaelYechieliImage,
    },
    {
      name: 'Gaurav Malik',
      title: 'VP, Patient Services and Business Development, Quest',
      bio: 'VP at Quest Diagnostics supporting care for over 20 million patients with 25 years across GE Healthcare, GE Capital, and Quest.',
      image: gauravMalikImage,
    },
  ];

  return (
    <>
      <style>{`
        /* Mobile: Reset all grid positioning for consistent single column layout like Gaurav's card */
        @media (max-width: 767px) {
          .enterprise-leader-card-wrapper,
          .core-team-card-wrapper {
            grid-column: 1 !important;
            grid-row: auto !important;
            width: 100% !important;
          }
          .enterprise-leader-wrapper {
            display: block !important;
            justify-content: normal !important;
            width: 100% !important;
            grid-column: 1 !important;
            grid-row: auto !important;
          }
          .enterprise-leader-wrapper > div {
            max-width: 100% !important;
          }
          .core-team-card-wrapper.flex > div {
            max-width: 100% !important;
          }
        }
        
        @media (min-width: 768px) {
          .second-row-wrapper {
            grid-column: 1 / 4;
            display: flex;
            justify-content: center;
            gap: 2rem;
          }
          .second-row-wrapper > * {
            flex: 0 0 calc((100% - 4rem) / 3);
            max-width: calc((100% - 4rem) / 3);
          }
          .avi-grossman-card {
            grid-column: 2 / 3;
          }
        }
        .flip-card-container {
          perspective: 1000px;
          height: 100%;
          min-height: 400px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card-container:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          min-height: 400px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
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
            className="text-[#000000] max-w-4xl text-center mx-auto mb-8"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            Built by Enterprise Healthcare Leaders
          </h2>
          <p 
            className="text-[#000000] max-w-3xl text-center mx-auto mb-8"
            style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
          >
            Our team brings decades of experience building, scaling, and operating technology inside large healthcare systems
          </p>

          {/* The NXXIM Team heading */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 
              className="text-[#000000] max-w-4xl mx-auto"
              style={{ 
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
                fontWeight: 600, 
                lineHeight: 1.2, 
                letterSpacing: '-0.02em' 
              }}
            >
              The NXXIM Team
            </h3>
          </motion.div>

          {/* Team Grid - Row 1: Warren(1), Rob(2), Philip(3); Row 2: Jeff(between 1-2), Tom(between 2-3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 items-stretch max-w-[1040px] mx-auto">
            {enterpriseLeaders.map((member, idx) => {
              const isWarren = member.name === 'Warren Wright';
              const isRobGonda = member.name === 'Rob Gonda';
              const isPhilipKahn = member.name === 'Philip Kahn, CPA';
              const isJeffMabus = member.name === 'Jeff Mabus';
              const isTomCoppa = member.name === 'Tom Coppa';
              
              // Position: Row 1 - Warren(1), Rob(2), Philip(3); Row 2 - Jeff(spans 1-2, centered), Tom(spans 2-3, centered)
              // Desktop positioning only - mobile will reset via CSS
              let gridStyle: React.CSSProperties = {};
              if (isWarren) {
                gridStyle = { gridColumn: '1', gridRow: '1' };
              } else if (isRobGonda) {
                gridStyle = { gridColumn: '2', gridRow: '1' };
              } else if (isPhilipKahn) {
                gridStyle = { gridColumn: '3', gridRow: '1' };
              } else if (isJeffMabus) {
                gridStyle = { gridColumn: '1 / 3', gridRow: '2' };
              } else if (isTomCoppa) {
                gridStyle = { gridColumn: '2 / 4', gridRow: '2' };
              }
              
              // For Jeff and Tom, wrap in centered container
              if (isJeffMabus || isTomCoppa) {
                return (
                  <div key={idx} className="w-full enterprise-leader-wrapper flex justify-center enterprise-leader-card-wrapper" style={gridStyle}>
                    <div className="w-full" style={{ maxWidth: 'calc(50% - 0.5rem)' }}>
                      <TeamCard 
                        member={member} 
                        index={idx} 
                        isFlipCard={true}
                      />
                    </div>
                  </div>
                );
              }
              
              return (
                <div key={idx} className="w-full enterprise-leader-card-wrapper" style={gridStyle}>
                  <TeamCard 
                    member={member} 
                    index={idx} 
                    isFlipCard={true}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Second Section: Medical Advisory Board */}
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
            Medical Advisory Board
          </h2>

          {/* Medical Advisory Board Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch max-w-[1040px] mx-auto">
            {medicalAdvisoryBoard.map((member, idx) => (
              <TeamCard key={idx} member={member} index={idx} isFlipCard={true} />
            ))}
          </div>
        </motion.div>

        {/* Third Section: Backed by Geneva Private Equity */}
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
             Backed by Geneva Private Equity
          </h2>

          {/* Core Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch max-w-[1040px] mx-auto">
            {coreTeam.map((member, idx) => {
              const isAviGrossman = member.name === 'Avi Grossman, MBA';
              const isIsadoreMiller = member.name === 'Isadore Miller';
              const isAkivaPodolsky = member.name === 'Akiva Podolsky';
              const isJosephBamberger = member.name === 'Joseph Bamberger';
              const isDrJosephChalil = member.name === 'Dr. Joseph M. Chalil';
              
              // Position: Row 1 - Joseph(1), Akiva(2), Dr. Joseph(3); Row 2 - Avi and Isadore (centered like Jeff and Tom)
              // Desktop positioning only - mobile will reset via CSS
              let gridStyle: React.CSSProperties = {};
              if (isJosephBamberger) {
                gridStyle = { gridColumn: '1', gridRow: '1' };
              } else if (isAkivaPodolsky) {
                gridStyle = { gridColumn: '2', gridRow: '1' };
              } else if (isDrJosephChalil) {
                gridStyle = { gridColumn: '3', gridRow: '1' };
              } else if (isAviGrossman || isIsadoreMiller) {
                // For Avi and Isadore, wrap in centered container like Jeff and Tom
                if (isAviGrossman) {
                  gridStyle = { gridColumn: '1 / 3', gridRow: '2' };
                } else if (isIsadoreMiller) {
                  gridStyle = { gridColumn: '2 / 4', gridRow: '2' };
                }
              }
              
              // For Avi and Isadore, wrap in centered container
              if (isAviGrossman || isIsadoreMiller) {
                return (
                  <div key={idx} className="w-full core-team-card-wrapper flex justify-center" style={gridStyle}>
                    <div className="w-full" style={{ maxWidth: 'calc(50% - 0.5rem)' }}>
                      <TeamCard 
                        member={member} 
                        index={idx} 
                        isFlipCard={true}
                      />
                    </div>
                  </div>
                );
              }
              
              return (
                <div key={idx} className="w-full core-team-card-wrapper" style={gridStyle}>
                  <TeamCard 
                    member={member} 
                    index={idx} 
                    shouldCenter={isAviGrossman}
                    isFlipCard={true}
                  />
                </div>
              );
            })}
          </div>
          <br></br> <br></br>
        </motion.div>
      </div>
    </section>
    </>
  );
}

function TeamCard({ member, index, shouldCenter = false, isFlipCard = false }: { member: any; index: number; shouldCenter?: boolean; isFlipCard?: boolean }) {
  const isAviGrossman = member.name === 'Avi Grossman, MBA';
  const isRobGonda = member.name === 'Rob Gonda';
  const isTomCoppa = member.name === 'Tom Coppa';
  const isDrBarryMangel = member.name === 'Dr. Barry D. Mangel, MD';
  const isJeffMabus = member.name === 'Jeff Mabus';
  
  // Determine object position based on member
  let objectPosition = 'center top';
  if (isRobGonda) {
    objectPosition = 'center 35%';
  } else if (isTomCoppa) {
    objectPosition = 'center 12%'; // Moved up to reduce gap at top
  } else if (isDrBarryMangel) {
    objectPosition = 'center 1%'; // Moved down (from 'center top' to increase gap at top)
  } else if (isJeffMabus) {
    objectPosition = 'center 23%'; // Moved up to reduce gap at top
  }
  
  // Flip card version for Enterprise Leaders section
  if (isFlipCard) {
    return (
      <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        <div className="flip-card-container h-full">
          <div className="flip-card-inner">
            {/* Front of card - Image, Name, Title */}
            <div className="flip-card-front">
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-500 h-full">
                <div className="relative h-full min-h-[400px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition, minHeight: '400px' }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-500" />
                  
                  {/* Name overlay on image */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  >
                    <div className="text-white mb-2" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                      {member.name}
                    </div>
                    <div className="text-white" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                      {member.title}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Back of card - Bio/Description */}
            <div className="flip-card-back">
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#94B3D8] h-full flex flex-col">
                <div className="p-4 flex-1 flex items-center justify-center">
                  <p className="text-[#333333] text-center" style={{ fontSize: '24px', lineHeight: 1.6, fontWeight: 300 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Regular card (non-flip) for other sections
  return (
    <motion.div
      className={`group h-full ${isAviGrossman ? 'avi-grossman-card' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden border-2 border-[#E5E7EB] hover:border-[#94B3D8] transition-all duration-500 flex flex-col h-full"
      >
        {/* Image Container */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Name overlay on image */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          >
            <div className="text-white mb-2" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {member.name}
            </div>
            <div className="text-white" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {member.title}
            </div>
          </motion.div>
        </div>

        {/* Bio Content */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-[#6B7280]" style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 300 }}>
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}