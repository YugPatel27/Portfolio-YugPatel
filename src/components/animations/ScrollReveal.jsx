import React, { forwardRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function getOffset(direction, distance) {
  switch (direction) {
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: -distance };
    case 'right':
      return { x: distance };
    case 'up':
    default:
      return { y: distance };
  }
}

export const ScrollReveal = forwardRef(function ScrollReveal({
  as = 'div',
  className = '',
  children,
  delay = 0,
  amount = 0.22,
  once = false,
  duration = 0.7,
  direction = 'up',
  distance = 28,
  scale = 0.98,
  blur = 12,
  ...props
}, ref) {
  const reduceMotion = useReducedMotion();
  const MotionTag = as === 'header'
    ? motion.header
    : as === 'section'
      ? motion.section
      : as === 'article'
        ? motion.article
        : as === 'main'
          ? motion.main
          : as === 'aside'
            ? motion.aside
            : as === 'p'
              ? motion.p
              : as === 'span'
                ? motion.span
                : motion.div;
  const offset = getOffset(direction, distance);
  const initial = {
    opacity: 0,
    ...offset,
    scale,
    filter: `blur(${blur}px)`,
  };

  const revealed = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  };

  const motionProps = reduceMotion
    ? { initial: false, animate: { opacity: 1 } }
    : {
        initial,
        whileInView: revealed,
        exit: initial,
        viewport: { once, amount, margin: '50px' },
        transition: { 
          duration, 
          delay, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        },
      };

  return (
    <MotionTag ref={ref} className={`scroll-reveal ${className}`.trim()} {...motionProps} {...props}>
      {children}
    </MotionTag>
  );
});
