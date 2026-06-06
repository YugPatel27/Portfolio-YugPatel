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
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-[#0c0c0c]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-[#0c0c0c]">
        <motion.div
          className="hidden md:block absolute left-[-10%] top-[4%] h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
          {...BLOB_ANIMATIONS.primary}
        />
        <motion.div
          className="hidden md:block absolute right-[-8%] top-[12%] h-80 w-80 rounded-full bg-fuchsia-500/18 blur-3xl"
          {...BLOB_ANIMATIONS.secondary}
        />
        <div className="hidden md:block absolute left-[10%] bottom-[-10%] h-72 w-72 rounded-full bg-purple-500/12 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.16),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.14),transparent_45%)]" />

        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/10 via-[#0c0c0c]/25 to-[#0c0c0c]/88" />

      {/* Hero Image Container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-3 sm:px-6 md:px-10"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="relative h-[92svh] w-full max-w-7xl overflow-hidden rounded-[28px] border border-white/14 bg-[#101010]/85 shadow-[0_25px_120px_rgba(0,0,0,0.55)]">
          <img
            src="/hero_bg.jpeg"
            alt="Yug Patel - Full Stack Developer & UI Designer Portfolio Hero"
            className="h-full w-full object-cover object-center bg-[#0c0c0c]"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/55 via-transparent to-[#0c0c0c]/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.06),transparent_34%),radial-gradient(circle_at_50%_75%,rgba(168,85,247,0.05),transparent_28%)] mix-blend-screen" />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex items-center px-5 sm:px-8 md:px-12 pt-20 md:pt-0">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] items-center gap-12 md:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="rounded-[32px] border border-sky-400/30 bg-slate-950/70 p-8 shadow-[0_35px_120px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              {/* Main Title */}
              <Reveal {...REVEAL_CONFIG.title}>
                <h1
                  className="font-black uppercase leading-[0.95] tracking-tight text-sky-300 drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)] mb-2"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
                >
                  Yug<br className="hidden md:inline" />
                  <span className="block md:inline text-sky-200">Patel</span>
                </h1>
              </Reveal>

              {/* Description */}
              <Reveal {...REVEAL_CONFIG.description}>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-sky-100 font-semibold max-w-xl">
                  Building modern web applications with React, TypeScript, and Node.js while exploring different languages, tools, and project types over time.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal {...REVEAL_CONFIG.cta}>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-8">
                  <a
                    href="http://127.0.0.1:5050/reports/Noise%20Monitoring%20System.pdf#projects"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 border border-sky-400/60 rounded-full text-sm font-bold uppercase tracking-[0.12em] text-white hover:border-sky-300 hover:from-sky-400 hover:to-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
                  >
                    View Projects
                  </a>
                  <a
                    href="http://127.0.0.1:5050/reports/Noise%20Monitoring%20System.pdf#contact"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 border border-sky-400/70 rounded-full text-sm font-bold uppercase tracking-[0.12em] text-sky-100 hover:text-white hover:border-sky-300 hover:bg-sky-500/10 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <Reveal {...REVEAL_CONFIG.scroll}>
          <motion.div className="group flex flex-col items-center gap-2" whileHover={{ y: 3 }}>
            <a
              href="#about"
              className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50 hover:text-white transition-colors"
            >
              Scroll
            </a>
            <div className="relative h-8 w-px bg-white/20">
              <motion.span
                className="absolute inset-x-0 top-0 h-2 w-full bg-gradient-to-b from-sky-400 to-transparent"
                {...BLOB_ANIMATIONS.scroll}
              />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
