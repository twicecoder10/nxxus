import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function MissionSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Full section scroll range
  });

  // Zoom in/out effect - starts zoomed in, zooms out, then zooms in again
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.8]);
  
  // Background color transition - white to black
  const backgroundColor = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ['#FFFFFF', '#F5F5F5', '#000000']
  );
  
  // Text color transition - black to white
  const textColor = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ['#000000', '#000000', '#FFFFFF']
  );

  return (
    <motion.section 
      id="mission" 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center py-32"
      style={{ backgroundColor }}
    >
      <motion.div 
        className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full text-center"
        style={{ scale }}
      >
        <motion.div
          className="leading-tight tracking-[-0.03em]"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: textColor
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ fontWeight: 300, fontStyle: 'italic' }}>Eliminating diagnostic fragmentation.</span>
          <br />
          <span style={{ fontWeight: 700 }}>Where diagnostics finally connect.</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}