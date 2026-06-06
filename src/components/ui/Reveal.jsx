import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ 
  children, 
  delay = 0, 
  y = 0, 
  x = 0, 
  duration = 0.5, 
  className = '',
  once = false 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y, x }}
      viewport={{ once, margin: '-50px' }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      {children}
    </motion.div>
  );
};
