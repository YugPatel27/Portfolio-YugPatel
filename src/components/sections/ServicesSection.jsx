import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { valueCards } from '@/data/siteData';

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full bg-white rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-gray-200/30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <Reveal y={40}>
        <h2 className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Services
        </h2>
      </Reveal>
      <div className="mx-auto max-w-5xl">
        {valueCards.map((service, index) => {
          const num = (index + 1).toString().padStart(2, '0');
          const isLast = index === valueCards.length - 1;
          
          return (
            <Reveal key={num} delay={index * 0.1} y={30}>
              <div 
                className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
                style={{
                  borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                  ...(isLast ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' } : {})
                }}
              >
                <div className="shrink-0 font-black text-[#0C0C0C] leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                  {num}
                </div>
                <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
                  <h3 className="font-medium uppercase text-[#0C0C0C] leading-tight relative inline-block w-fit" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                    {service.title}
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full" />
                  </h3>
                  <p className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}>
                    {service.text}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
