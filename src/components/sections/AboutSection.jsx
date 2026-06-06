import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteData';

import ScrollTextReveal from '@/components/animations/ScrollTextReveal';

export default function AboutSection() {
  const paragraph1 = siteConfig.intro;
  const paragraph2 = siteConfig.careerSummary;
  const paragraph3 = "I'm passionate about building products that matter. My approach combines technical excellence with user-centered design, ensuring every project is both powerful and intuitive. Whether shipping e-commerce platforms, healthcare systems, or IoT solutions, I focus on clean architecture and meaningful results. I believe great code starts with great communication.";
  
  return (
    <section id="about" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20 bg-white rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-gray-200/30">
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center w-full">
        <Reveal delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}>
            About me
          </h2>
        </Reveal>
        
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 w-full max-w-[900px] px-4">
          <ScrollTextReveal 
            text={paragraph1}
            className="font-medium leading-relaxed text-[#0C0C0C]/80" 
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }} 
          />
          
          <ScrollTextReveal 
            text={paragraph2}
            className="font-medium leading-relaxed text-[#0C0C0C]/75" 
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }} 
          />
          
          <ScrollTextReveal 
            text={paragraph3}
            className="font-medium leading-relaxed text-[#0C0C0C]/75" 
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }} 
          />

          <Reveal delay={0.25}>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-white whitespace-nowrap transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.4)]" style={{ background: 'linear-gradient(90deg, #581c87 0%, #a855f7 50%, #ec4899 100%)' }}>
              Contact Me
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}