import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GradientBackground } from '@/components/animations/GradientBackground';
import { CursorGlow } from '@/components/animations/CursorGlow';
import { FaArrowUp } from 'react-icons/fa6';

export function Layout() {
  const location = useLocation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app-shell relative">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <GradientBackground />
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          id="main-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            className="scroll-top-fab"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.22 }}
          >
            <FaArrowUp aria-hidden="true" focusable="false" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
