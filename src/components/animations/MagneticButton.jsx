import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      className={['magnetic-button', className].filter(Boolean).join(' ')}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
