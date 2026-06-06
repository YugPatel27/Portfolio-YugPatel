import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.8, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
};

export default function ScrollTextReveal({ text, className, style }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 85%', 'end 50%']
  });

  const words = text.split(' ');
  
  return (
    <p ref={element} className={`relative flex flex-wrap justify-center ${className}`} style={{ position: 'relative', ...style }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
