import React from 'react';
import { siteConfig, navLinks } from '@/data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-[#D7E2EA]/10 bg-[#0C0C0C] px-5 py-12 sm:px-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold text-white tracking-widest">{siteConfig.initials}</span>
            <p className="text-sm text-[#D7E2EA]/70 mt-3 max-w-xs">{siteConfig.profession}</p>
            <p className="text-xs text-[#D7E2EA]/50 mt-2">{siteConfig.location}</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.sectionId}`}
                  className="text-sm text-[#D7E2EA]/70 hover:text-sky-300 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`https://www.linkedin.com/in/yugpatel0274/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white hover:text-sky-300 transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D7E2EA]/10 pt-8">
          {/* Legal Links */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 mb-6 text-xs text-[#D7E2EA]/60">
            <a href="/privacy.html" className="hover:text-sky-300 transition-colors duration-200">Privacy Policy</a>
            <span>•</span>
            <a href="/terms.html" className="hover:text-sky-300 transition-colors duration-200">Terms of Service</a>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50">
            <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
