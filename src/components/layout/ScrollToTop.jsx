import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Custom scroll with increasing speed (ease-in)
    const duration = 800;
    const start = window.scrollY;
    const startTime = performance.now();

    function easeInExpo(x) {
      return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    }

    function scrollStep(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // We are going backwards from start to 0, so we apply the ease to (1 - progress)
      // Actually easeIn applies to the journey. We want to start slow and speed up towards the top.
      const easeProgress = easeInExpo(progress);
      
      window.scrollTo(0, start - (start * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, 0);
      }
    }

    requestAnimationFrame(scrollStep);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          aria-label="Scroll to top"
        >
          <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
