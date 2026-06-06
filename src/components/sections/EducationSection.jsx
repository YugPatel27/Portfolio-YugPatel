import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { siteConfig } from '@/data/siteData';
import { FaGraduationCap, FaCalendarDays, FaBookmark } from 'react-icons/fa6';

export function EducationSection() {
  const { college, program, batch, state, minor } = siteConfig.education;

  return (
    <section id="education" className="relative w-full bg-white rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-gray-200/30 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <SectionTitle
        label="Education"
        title="Academic foundation in computer science with specialized learning."
        description="Building strong fundamentals through structured learning and hands-on projects."
      />

      <div className="education-grid">
        <ScrollReveal as="div" delay={0.08}>
          <GlassCard className="education-card education-card--primary">
            <div className="education-card__icon">
              <FaGraduationCap aria-hidden="true" focusable="false" />
            </div>
            <h3>{college}</h3>
            <p className="education-card__program">{program}</p>
            <div className="education-card__meta">
              <span><FaCalendarDays aria-hidden="true" focusable="false" /> {batch}</span>
              <span><FaBookmark aria-hidden="true" focusable="false" /> {state}</span>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal as="div" delay={0.14}>
          <GlassCard className="education-card education-card--secondary">
            <div className="education-card__icon secondary">
              <FaBookmark aria-hidden="true" focusable="false" />
            </div>
            <h3>Specialization</h3>
            <p className="education-card__focus">Minor in {minor}</p>
            <p className="education-card__desc">
              Extended learning focused on emerging technologies and practical applications.
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
