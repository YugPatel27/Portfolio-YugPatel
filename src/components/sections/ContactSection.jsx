import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/siteData';

// Icons using simple SVG
const MailIcon = (props) => <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const GithubIcon = (props) => <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const LinkedinIcon = (props) => <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const ArrowUpRightIcon = (props) => <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>;

const contactLinks = [
  { icon: MailIcon, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, type: 'email' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Yug Patel', href: 'https://linkedin.com/in/yug-patel-b58944300', type: 'link' },
  { icon: GithubIcon, label: 'GitHub', value: '@YugPatel27', href: 'https://github.com/YugPatel27', type: 'link' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-white rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-gray-200/30 px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      <Reveal y={40}>
        <h2 className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Get in touch
        </h2>
      </Reveal>
      <Reveal delay={0.15} y={20}>
        <p className="text-center font-light uppercase tracking-widest text-gray-500 mb-12 sm:mb-16 md:mb-20" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
          Pick whichever channel suits you
        </p>
      </Reveal>
      
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-8">
        {contactLinks.map((link, index) => {
          const Icon = link.icon;
          const isExternal = link.href.startsWith('http');
          const num = (index + 1).toString().padStart(2, '0');
          
          return (
            <Reveal key={link.label} delay={index * 0.1} y={30}>
              <a href={link.href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} className="group relative flex h-full flex-col justify-between gap-6 sm:gap-8 rounded-[24px] sm:rounded-[28px] border-2 border-white/10 bg-[#0C0C0C] p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#11121a] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1">
                <div>
                  <div className="font-black text-white/70 mb-4 leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 50px)' }}>
                    {num}
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="rounded-full border border-white/20 p-3 sm:p-3.5 transition-colors duration-300 group-hover:border-white/30">
                      <Icon className="text-white" size={22} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRightIcon className="text-white/60 transition-all duration-300 group-hover:text-white group-hover:rotate-12" size={22} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 sm:gap-3">
                  <span className="font-light uppercase tracking-widest text-white/50" style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}>
                    {link.label}
                  </span>
                  <span className="font-bold text-white break-all" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.3rem)' }}>
                    {link.value}
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
      
      <Reveal delay={0.4} y={20}>
        <div className="mx-auto mt-20 sm:mt-24 md:mt-28 flex max-w-5xl flex-col items-center gap-3 border-t border-[#D7E2EA]/10 pt-8 text-center sm:flex-row sm:justify-between">
          <span className="font-light uppercase tracking-widest text-[#D7E2EA]/50" style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}>
            © 2026 {siteConfig.name}
          </span>
          <span className="font-light uppercase tracking-widest text-[#D7E2EA]/50" style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}>
            Designed & built in {siteConfig.location}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
