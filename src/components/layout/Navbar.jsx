import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { navLinks, siteConfig } from '@/data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      clearTimeout(scrollTimer);
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const handleResumeClick = () => {
    // Open the resume PDF in a new tab (make sure the file exists in `public/`)
    const resumePath = siteConfig?.resumeUrl || '/resume.pdf';
    window.open(encodeURI(resumePath), '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 shadow-2xl backdrop-blur-xl border-b border-sky-400/20 py-2.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center gap-2.5 group"
          aria-label="Yug Patel - Portfolio home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-black px-3.5 py-2.5 rounded-lg">
              <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">YP</span>
            </div>
          </div>
          <span className="hidden sm:block text-sm font-semibold text-white group-hover:text-sky-300 transition-colors duration-200">Yug Patel</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.sectionId}`}
              className="relative px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/75 transition-all duration-300 hover:text-white rounded-lg hover:bg-white/5 group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Resume and Mobile Menu */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <motion.button
            onClick={handleResumeClick}
            className="group relative hidden sm:flex items-center gap-2.5 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-white bg-gradient-to-r from-sky-500 to-cyan-500 border border-sky-400/60 rounded-full hover:border-sky-300 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-sky-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download resume"
          >
            <FiDownload className="w-4 h-4" />
            <span className="hidden md:inline">Resume</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.button>

          <button
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-sky-400/50 bg-sky-400/5 text-white transition-all duration-200 hover:bg-sky-400/15 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="text-xl" aria-hidden="true">
              {menuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="border-t border-sky-400/20 bg-black/95 px-4 py-5 space-y-2 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.sectionId}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg bg-gradient-to-r from-sky-400/5 to-cyan-400/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/85 transition-all duration-200 hover:bg-sky-400/15 hover:text-white border border-transparent hover:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-inset"
                >
                  {link.label}
                </a>
              ))}
              <motion.button
                onClick={() => {
                  handleResumeClick();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white border border-sky-400/70 transition-all duration-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400 mt-3"
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
