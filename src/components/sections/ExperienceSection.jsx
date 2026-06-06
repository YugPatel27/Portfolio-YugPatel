import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { experiences } from '@/data/siteData';
import { FaLaptopCode, FaUsers, FaCodeBranch, FaGraduationCap } from 'react-icons/fa6';

export default function ExperienceSection() {
  const colors = [
    '#38bdf8', // light blue
    '#fbbf24', // amber
    '#60a5fa', // sky blue
    '#a78bfa', // purple
    '#34d399', // emerald
  ];
  
  const icons = [FaLaptopCode, FaUsers, FaCodeBranch, FaGraduationCap];

  return (
    <section id="experience" className="relative w-full bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-14 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] z-10 border border-gray-200/40 overflow-hidden">
      <Reveal y={40}>
        <h2 className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-24 leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
          Experience
        </h2>
      </Reveal>

      <div className="mx-auto max-w-5xl relative flex flex-col items-center">
        
        {/* START Bubble */}
        <Reveal y={20}>
          <div className="border-[3px] rounded-full px-6 py-2 sm:px-8 sm:py-3 font-black uppercase bg-[#0C0C0C] z-10 mb-[-4px] tracking-widest" style={{ borderColor: colors[0], color: colors[0] }}>
            START
          </div>
        </Reveal>

        <div className="w-full flex flex-col">
          {experiences.map((exp, index) => {
            const isRight = index % 2 === 0;
            const color = colors[index % colors.length];
            const nextColor = index < experiences.length - 1 ? colors[(index + 1) % colors.length] : '#34d399'; // Next color or finish color
            const IconComponent = icons[index % icons.length];
            
            return (
              <div key={index} className="flex w-full relative min-h-[250px]">
                {/* Central Spine line (segment) - Gradient to next color */}
                <div 
                  className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 z-0" 
                  style={{ background: `linear-gradient(to bottom, ${color}, ${nextColor})` }}
                />
                
                {/* Central Node */}
                <Reveal delay={0.1} scale={0.8} className="absolute left-6 md:left-1/2 top-[50%] w-5 h-5 rounded-full bg-white border-4 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ borderColor: color }}>
                  <div />
                </Reveal>

                {/* Desktop View (Alternating) */}
                <div className="hidden md:flex w-full relative min-h-[250px] py-12">
                  {/* Left Side Container (Displays when isRight is false) */}
                  <div className="w-1/2 flex justify-end pr-12 relative">
                    {!isRight && (
                      <div className="flex flex-col justify-center w-full items-end text-right">
                        <Reveal delay={0.2} x={-30}>
                          <div className="text-4xl lg:text-5xl font-black mb-2 tracking-tight" style={{ color }}>
                            {exp.duration}
                          </div>
                          
                          <div className="flex items-center w-full relative my-6 flex-row-reverse">
                            <div className="flex-1 border-b-[4px] border-dotted" style={{ borderColor: color }}></div>
                            <div className="w-0 h-0" style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderRight: `10px solid ${color}` }}></div>
                            <div className="w-3"></div>
                            <div className="w-20 h-20 rounded-full border-[4px] bg-white flex items-center justify-center shrink-0 shadow-xl" style={{ borderColor: color }}>
                               <IconComponent aria-hidden="true" focusable="false" className="text-4xl" style={{ color }} />
                            </div>
                          </div>

                          <div className="mt-2 max-w-md">
                            <h3 className="text-[#0C0C0C] text-2xl font-black uppercase mb-1">{exp.position}</h3>
                            <h4 className="text-gray-600 text-lg font-bold uppercase mb-4 tracking-wider">{exp.company}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {exp.achievements.join(' ')}
                            </p>
                          </div>
                        </Reveal>
                      </div>
                    )}
                  </div>

                  {/* Right Side Container (Displays when isRight is true) */}
                  <div className="w-1/2 flex justify-start pl-12 relative">
                    {isRight && (
                      <div className="flex flex-col justify-center w-full items-start text-left">
                        <Reveal delay={0.2} x={30}>
                          <div className="text-4xl lg:text-5xl font-black mb-2 tracking-tight" style={{ color }}>
                            {exp.duration}
                          </div>
                          
                          <div className="flex items-center w-full relative my-6 flex-row">
                            <div className="flex-1 border-b-[4px] border-dotted" style={{ borderColor: color }}></div>
                            <div className="w-0 h-0" style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: `10px solid ${color}` }}></div>
                            <div className="w-3"></div>
                            <div className="w-20 h-20 rounded-full border-[4px] bg-white flex items-center justify-center shrink-0 shadow-xl" style={{ borderColor: color }}>
                               <IconComponent aria-hidden="true" focusable="false" className="text-4xl" style={{ color }} />
                            </div>
                          </div>

                          <div className="mt-2 max-w-md">
                            <h3 className="text-[#0C0C0C] text-2xl font-black uppercase mb-1">{exp.position}</h3>
                            <h4 className="text-gray-600 text-lg font-bold uppercase mb-4 tracking-wider">{exp.company}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {exp.achievements.join(' ')}
                            </p>
                          </div>
                        </Reveal>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile View (Always Right aligned) */}
                <div className="flex md:hidden flex-col justify-center w-full relative py-12 pl-20 pr-4">
                    <Reveal delay={0.2} x={20}>
                      <div className="text-3xl font-black mb-2 tracking-tight" style={{ color }}>
                        {exp.duration}
                      </div>
                      
                      <div className="flex items-center w-full relative my-4 flex-row">
                        {/* Dotted Line */}
                        <div className="w-12 border-b-[4px] border-dotted shrink-0" style={{ borderColor: color }}></div>
                        {/* Arrow Head */}
                        <div className="w-0 h-0 shrink-0" style={{ 
                          borderTop: '6px solid transparent', 
                          borderBottom: '6px solid transparent', 
                          borderLeft: `8px solid ${color}`
                        }}></div>
                        {/* Space */}
                        <div className="w-2"></div>
                        {/* Icon Circle */}
                        <div className="w-14 h-14 rounded-full border-[3px] bg-white flex items-center justify-center shrink-0 shadow-xl" style={{ borderColor: color }}>
                           <IconComponent aria-hidden="true" focusable="false" className="text-2xl" style={{ color }} />
                        </div>
                      </div>

                      <div className="mt-2 w-full">
                        <h3 className="text-[#0C0C0C] text-2xl font-black uppercase mb-1">{exp.position}</h3>
                        <h4 className="text-gray-600 text-sm font-bold uppercase mb-3 tracking-wider">{exp.company}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {exp.achievements.join(' ')}
                        </p>
                      </div>
                    </Reveal>
                  </div>
              </div>
            );
          })}
        </div>

        {/* FINISH Bubble */}
        <Reveal y={-20}>
          <div className="border-[3px] rounded-full px-6 py-2 sm:px-8 sm:py-3 font-black uppercase bg-[#0C0C0C] z-10 mt-[-4px] tracking-widest" style={{ borderColor: '#34d399', color: '#34d399' }}>
            FINISH
          </div>
        </Reveal>

      </div>
    </section>
  );
}
