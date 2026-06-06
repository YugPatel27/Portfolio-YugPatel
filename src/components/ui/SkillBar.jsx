import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SkillBar({ name, value }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="skill-bar">
      <div className="skill-bar__head">
        <span>{name}</span>
        <span>{value}%</span>
      </div>
      <div className="skill-bar__rail" aria-hidden="true">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0, opacity: 0.6 }}
          whileInView={{ width: `${value}%`, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
