import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function FloatingIcons({ items = [] }) {
  const reduceMotion = useReducedMotion();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  if (reduceMotion || compact) {
    return (
      <div className="floating-icons" aria-hidden="true">
        {items.map((item) => (
          <span key={item} className="floating-icons__item">
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="floating-icons" aria-hidden="true">
      {items.map((item, index) => (
        <motion.span
          key={item}
          className="floating-icons__item"
          initial={{ opacity: 0, y: 14 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4 + index * 0.3,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: index * 0.08,
          }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
