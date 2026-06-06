import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimer;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(moveTimer);
      moveTimer = setTimeout(() => setIsMoving(false), 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* Outer glow ring */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-sky-400/40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Inner core glow */}
      <motion.div
        className="absolute w-1 h-1 rounded-full bg-sky-300 shadow-lg shadow-sky-400/50"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isMoving ? 1.5 : 1,
          opacity: isMoving ? 0.8 : 0.5,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.3,
        }}
      />

      {/* Large ambient glow background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.08), transparent 40%)`,
        }}
      />
    </div>
  );
}
