import React from 'react';
import { siteConfig } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[#D7E2EA]/10 bg-[#0C0C0C] px-5 py-10 sm:px-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-lg font-bold text-white tracking-widest">{siteConfig.initials}</span>
          <p className="text-sm text-[#D7E2EA]/70 mt-2">Designed & built with fast performance in mind.</p>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-2 text-right">
          <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">Let's connect</p>
          <a href="https://linkedin.com/in/yug-patel-b58944300" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-sky-300 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
