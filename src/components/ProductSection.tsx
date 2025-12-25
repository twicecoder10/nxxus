import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import React from 'react';
import unifiedVideo from '../../pics/unifiedvideo.mp4';

export function ProductSection() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth fade in/out when entering/leaving viewport
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Preload the video aggressively
    video.load();
    
    const handleCanPlay = () => {
      setVideoLoaded(true);
    };
    
    video.addEventListener('canplay', handleCanPlay);

    // Enhanced seamless loop handling to prevent jumps
    let frameCallbackId: number | null = null;
    let timeUpdateHandler: (() => void) | null = null;
    
    const handleSeamlessLoop = () => {
      if (!video) return;
      
      const duration = video.duration;
      const currentTime = video.currentTime;
      
      // More aggressive detection - reset earlier to prevent visible skip
      // Using 1 frame threshold (typically 0.033s at 30fps, 0.016s at 60fps)
      if (duration && currentTime >= duration - 0.033) {
        video.currentTime = 0;
        if (!video.paused) {
          video.play().catch(() => {}); // Ensure it keeps playing
        }
      }
      
      // Continue monitoring
      if (video.requestVideoFrameCallback) {
        frameCallbackId = video.requestVideoFrameCallback(handleSeamlessLoop);
      }
    };

    // Enhanced timeupdate fallback with better precision
    const createTimeUpdateHandler = () => {
      return () => {
        if (!video) return;
        const duration = video.duration;
        const currentTime = video.currentTime;
        // Use smaller threshold for smoother transition
        if (duration && currentTime >= duration - 0.033) {
          video.currentTime = 0;
        }
      };
    };

    // Start the seamless loop monitoring once video is ready
    const startLoopMonitoring = () => {
      if (video.requestVideoFrameCallback) {
        frameCallbackId = video.requestVideoFrameCallback(handleSeamlessLoop);
      } else {
        // Fallback for browsers without requestVideoFrameCallback
        timeUpdateHandler = createTimeUpdateHandler();
        video.addEventListener('timeupdate', timeUpdateHandler, { passive: true });
      }
    };

    const handleLoadedMetadata = () => {
      startLoopMonitoring();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    return () => {
      if (video) {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        if (timeUpdateHandler) {
          video.removeEventListener('timeupdate', timeUpdateHandler);
        }
        if (frameCallbackId !== null && video.cancelVideoFrameCallback) {
          video.cancelVideoFrameCallback(frameCallbackId);
        }
      }
    };
  }, []);

  const capabilities = [
    {
      title: 'Clinical Decision Support',
      description: ''
    },
    {
      title: 'Intelligent Workflow Automation',
      description: ''
    },
    {
      title: 'Unified Collaboration Workspace',
      description: ''
    },
    {
      title: 'Auto-Classification and Tagging',
      description: ''
    },
    {
      title: 'Image Quality Assessment',
      description: ''
    },
    {
      title: 'Voice Documentation',
      description: ''
    }
  ];

  return (
    <motion.section 
      id="platform" 
      ref={containerRef}
      className="min-h-screen bg-white relative overflow-hidden pb-40 mb-32"
      style={{ opacity, y }}
    >
      {/* Background gradient effects - removed for pure white background */}

      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#94B3D8] mb-6" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          </div>
          <h2 
            className="text-[#000000] max-w-4xl mx-auto"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em' 
            }}
          >
            A Unified Medical Workspace
          </h2>
          
          {/* Description Text */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#6B7280] max-w-4xl mx-auto" style={{ fontSize: '1.40rem', lineHeight: 1.7, fontWeight: 300 }}>
              <br></br>NXXIM brings imaging, surgery, pathology, labs, EHR data, and genomics into a single real-time workspace.
              AI-powered workflows enable collaboration and smarter diagnostic decisions, while leveraging existing systems with no replacement required.
            </p>
          </motion.div>
        </motion.div>

        {/* Two-column Layout - Image on left, capabilities on right */}
        <div className="max-w-7xl mx-auto pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Video on Left */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ y, minWidth: 0, flexShrink: 0 }}
            >
              <div 
                className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white" 
                style={{ 
                  height: '600px',
                  width: '100%',
                  minWidth: 0,
                  maxWidth: '100%',
                  flexShrink: 0,
                  marginTop: '3px'
                }}
              >
                <video 
                  ref={videoRef}
                  src={unifiedVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  style={{ 
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: videoLoaded ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out',
                    pointerEvents: 'none',
                    backgroundColor: 'transparent'
                  }}
                  onLoadedData={() => setVideoLoaded(true)}
                  onCanPlay={() => setVideoLoaded(true)}
                  onLoadedMetadata={() => setVideoLoaded(true)}
                  onEnded={(e) => {
                    // Ensure seamless restart - reset immediately when ended event fires
                    const video = e.currentTarget;
                    video.currentTime = 0;
                    video.play().catch(() => {
                      // Silently handle play errors
                    });
                  }}
                  onTimeUpdate={(e) => {
                    // Additional safety check for seamless looping
                    const video = e.currentTarget;
                    if (video.duration && video.currentTime >= video.duration - 0.033) {
                      video.currentTime = 0;
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Capabilities List on Right */}
            <div>
              {/* Capabilities List */}
              <motion.div
                className="space-y-4 mb-20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {capabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    className="cursor-pointer"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="group flex items-center gap-4 p-6 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] hover:bg-[#94B3D8] hover:border-[#94B3D8] transition-all duration-300 h-[100px]">
                      <div className="w-full">
                        <div className="text-[#000000] group-hover:text-white transition-colors duration-300" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 600 }}>
                          {capability.title}
                        </div>
                        {capability.description && (
                          <div className="text-[#6B7280] group-hover:text-white transition-colors duration-300" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                            {capability.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}