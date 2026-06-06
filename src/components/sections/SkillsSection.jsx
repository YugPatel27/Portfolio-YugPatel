import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { skills } from '@/data/siteData';
import { SiReact, SiNodedotjs, SiTypescript, SiDjango, SiMongodb, SiJavascript, SiPython } from 'react-icons/si';
import { FaNetworkWired, FaDatabase, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';

const floatingIcons = [
  { Icon: SiReact, label: 'React', color: 'text-cyan-400', position: 'absolute -top-16 left-0' },
  { Icon: SiTypescript, label: 'TypeScript', color: 'text-blue-600', position: 'absolute -top-16 right-0' },
  { Icon: SiNodedotjs, label: 'Node.js', color: 'text-green-500', position: 'absolute top-1/2 -left-16 -translate-y-1/2' },
  { Icon: SiDjango, label: 'Django', color: 'text-green-700', position: 'absolute top-1/2 right-[-5.5rem] -translate-y-1/2' },
  { Icon: SiMongodb, label: 'MongoDB', color: 'text-emerald-500', position: 'absolute bottom-16 left-12' },
  { Icon: FaNetworkWired, label: 'AJAX', color: 'text-slate-300', position: 'absolute bottom-16 right-12' },
  { Icon: SiJavascript, label: 'JavaScript', color: 'text-yellow-400', position: 'absolute top-16 left-24' },
  { Icon: SiPython, label: 'Python', color: 'text-blue-400', position: 'absolute top-16 right-24' },
  { Icon: FaJava, label: 'Java', color: 'text-orange-500', position: 'absolute bottom-28 left-16' },
  { Icon: FaDatabase, label: 'SQL', color: 'text-cyan-400', position: 'absolute bottom-28 right-16' },
  { Icon: FaHtml5, label: 'HTML', color: 'text-orange-500', position: 'absolute top-1/4 left-12' },
  { Icon: FaCss3Alt, label: 'CSS', color: 'text-blue-500', position: 'absolute bottom-1/4 right-12' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <Reveal y={40}>
        <h2 className="text-center font-black uppercase text-white mb-16 sm:mb-20 md:mb-24 leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}>
          Skills
        </h2>
      </Reveal>

      <div className="relative mx-auto max-w-6xl mb-14 py-10 overflow-visible">
        <div className="pointer-events-none hidden md:block absolute inset-0 overflow-visible">
          {floatingIcons.map((item, index) => {
            const Icon = item.Icon;
            return (
              <Reveal key={item.label} delay={index * 0.05} y={20} className={item.position}>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 border border-white/15 shadow-[0_18px_35px_rgba(0,0,0,0.18)]">
                  <Icon className={`text-4xl ${item.color}`} aria-hidden="true" focusable="false" />
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {skills.map((skillGroup, index) => {
          const num = (index + 1).toString().padStart(2, '0');
          
          return (
            <Reveal key={num} delay={index * 0.15} y={40} className="h-full">
              <div className="flex flex-col h-full bg-white rounded-[24px] p-8 sm:p-10 border border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500">
                <div className="font-black text-gray-300 mb-4 leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 50px)' }}>
                  {num}
                </div>
                <h3 className="font-bold uppercase text-[#0C0C0C] text-lg sm:text-xl mb-3">
                  {skillGroup.category}
                </h3>
                <p className="text-gray-600 font-medium text-xs sm:text-sm mb-6 flex-grow leading-relaxed">
                  {skillGroup.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, j) => (
                    <span key={j} className="rounded-full bg-gray-50 border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
    </section>
  );
}
