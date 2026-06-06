import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function TimelineItem({ company, position, duration, achievements, index }) {
  return (
    <ScrollReveal as="article" className="timeline-v" delay={index * 0.1} amount={0.25}>
      <div className="timeline-v__line" aria-hidden="true">
        <motion.div
          className="timeline-v__dot"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 260, damping: 18 }}
        />
      </div>
      <div className="timeline-v__card glass-card">
        <div className="timeline-v__meta">
          <span className="timeline-v__duration">{duration}</span>
          <span className="timeline-v__company">{company}</span>
        </div>
        <h3 className="timeline-v__role">{position}</h3>
        <ul className="timeline-v__list">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
