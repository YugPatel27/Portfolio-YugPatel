import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteData';

// Animation configurations
const BLOB_ANIMATIONS = {
  primary: {
    animate: { y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] },
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
  secondary: {
    animate: { y: [0, -40, 0], opacity: [0.4, 0.7, 0.4] },
    transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
  },
  scroll: {
    animate: { y: [0, 6, 0] },
    transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
  },
};

const REVEAL_CONFIG = {
  title: { delay: 0.35, y: 36, duration: 0.8 },
  description: { delay: 0.55, y: 20, duration: 0.7 },
  credential: { delay: 0.55, y: 24, duration: 0.7 },
  cta: { delay: 0.7, y: 20, duration: 0.7 },
  scroll: { delay: 1.1, y: 16, duration: 0.6 },
};

export default function HeroSection() {
  const linkedinUrl = 'https://www.linkedin.com/in/yugpatel0274/';

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      const headerOffset = 92;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-visible bg-[#0c0c0c] scroll-mt-24 pt-6  ">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-[#0c0c0c]">
        <motion.div
          className="hidden md:block absolute left-[-15%] top-[8%] bottom-[4%] h-[500px] w-[500px] rounded-full bg-sky-500/25 blur-3xl"
          {...BLOB_ANIMATIONS.primary}
        />
        <motion.div
          className="hidden md:block absolute right-[-12%] top-[8%] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-3xl"
          {...BLOB_ANIMATIONS.secondary}
        />
        <div className="hidden md:block absolute left-[5%] bottom-[-15%] h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.16),transparent_45%)]" />

        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/0 via-[#0c0c0c]/20 to-[#0c0c0c]/90" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-16 sm:pt-48 sm:pb-20 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-stretch w-full min-h-[320px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[580px]">
          {/* Left Content - Text Section */}
          <motion.div
            className="w-full max-w-full lg:max-w-[520px] mx-auto lg:mx-0 flex h-full flex-col justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Main H1 Heading */}
            <Reveal {...REVEAL_CONFIG.title}>
              <div className="mb-6 md:mb-8">
                <h1
                  className="font-black uppercase leading-[1.05] tracking-tight bg-gradient-to-br from-white via-sky-200 to-sky-100 bg-clip-text text-transparent drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                  style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}
                >
                  Full Stack Developer 
                </h1>
              </div>
            </Reveal>

            {/* Professional summary focused on learning, detail, and determination */}
            <Reveal {...REVEAL_CONFIG.description}>
              <div className="space-y-4 mb-8">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/85 font-medium max-w-md">
                  I'm Yug Patel, a developer who learns by doing and improving every detail. I focus on clear thinking, steady progress, and delivering work that is easy to understand.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/75 max-w-md">
                  My process is built around understanding the problem, studying the best approaches, and applying consistent hard work. Every project is an opportunity to learn better habits and make the experience more meaningful.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/75 max-w-md">
                  I enjoy turning complex ideas into thoughtful, polished interfaces and staying committed to growth through discipline, practice, and careful execution.
                </p>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal {...REVEAL_CONFIG.cta}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-7 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 border border-sky-300/80 rounded-lg text-sm md:text-base font-bold uppercase tracking-[0.12em] text-white hover:border-sky-200 transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2.101a7.002 7.002 0 0111.601-2.566 1 1 0 11-1.414 1.414A5.002 5.002 0 005.09 9H7a1 1 0 010 2H3a1 1 0 01-1-1zM15.9 11a1 1 0 01-1-1h-2.101a7.002 7.002 0 01-11.601 2.566 1 1 0 011.414 1.414A5.002 5.002 0 0014.91 11H13a1 1 0 010-2h4a1 1 0 011 1z" />
                    </svg>
                    View My Projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.a>
                <motion.a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-7 md:px-8 py-3.5 md:py-4 border-2 border-sky-400/70 rounded-lg text-sm md:text-base font-bold uppercase tracking-[0.12em] text-sky-300 hover:text-white hover:border-sky-300 hover:bg-sky-400/10 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                    Connect on LinkedIn
                  </span>
                </motion.a>
              </div>
            </Reveal>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            className="relative w-full max-w-[620px] min-h-[320px] sm:min-h-[420px] md:min-h-[520px] rounded-[2rem] overflow-hidden mx-auto group cursor-pointer hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-sky-400/30 group-hover:border-sky-300/60 bg-[#101010]/40 backdrop-blur-sm overflow-hidden transition-colors duration-300">
              <img
                src="/hero_bg.jpeg"
                alt="Yug Patel - Full Stack Developer  Portfolio"
                className="h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.08),transparent_30%)] mix-blend-screen" />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
