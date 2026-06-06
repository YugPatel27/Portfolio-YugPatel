import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { navLinks } from '@/data/siteData';

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
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Yug-Patel-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 shadow-xl backdrop-blur-lg border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="text-xs sm:text-sm font-black uppercase tracking-[0.35em] text-white hover:text-sky-400 transition-colors duration-200"
          aria-label="Yug Patel - Portfolio home"
        >
          YP
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.sectionId}`}
              className="relative text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume and Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          <motion.button
            onClick={handleResumeClick}
            className="group relative hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-400/40 rounded-full hover:border-sky-400/80 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download resume"
          >
            <FiDownload className="w-4 h-4" />
            <span className="hidden md:inline">Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-500 opacity-0 group-hover:opacity-15 transition-opacity" />
          </motion.button>

          <button
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 lg:hidden"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="border-t border-white/10 bg-black/95 px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.sectionId}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg bg-white/5 px-4 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-inset"
                >
                  {link.label}
                </a>
              ))}
              <motion.button
                onClick={() => {
                  handleResumeClick();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500/30 to-purple-500/30 px-4 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white border border-sky-400/50 transition-all duration-200 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
