import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteData';

export function LoaderScreen({ fullScreen }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0E0F1A] ${fullScreen ? 'min-h-screen' : ''}`}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 backdrop-blur-sm"
        >
          <span className="bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] bg-clip-text text-3xl font-black text-transparent">
            {siteConfig.initials}
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
