import React from 'react';
import { motion } from 'framer-motion';

interface WaterEffectProps {
  variant?: 'hero' | 'subtle' | 'emergency';
}

export const WaterEffect: React.FC<WaterEffectProps> = ({ variant = 'hero' }) => {
  // Pre-calculated deterministic floating bubble coordinates to prevent hydration mismatch
  const bubbles = [
    { id: 1, size: 24, left: '10%', top: '20%', duration: 7, delay: 0 },
    { id: 2, size: 14, left: '25%', top: '65%', duration: 9, delay: 1.5 },
    { id: 3, size: 32, left: '78%', top: '30%', duration: 8, delay: 0.8 },
    { id: 4, size: 18, left: '88%', top: '75%', duration: 11, delay: 2 },
    { id: 5, size: 12, left: '45%', top: '85%', duration: 6, delay: 0.3 },
    { id: 6, size: 20, left: '60%', top: '15%', duration: 10, delay: 1.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: 0, opacity: 0.2 }}
          animate={{
            y: [-15, 15, -15],
            x: [-6, 6, -6],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: b.delay,
          }}
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
          }}
          className="absolute rounded-full bg-radial from-cyan-300/40 via-blue-400/20 to-transparent border border-cyan-200/50 shadow-[0_0_12px_rgba(56,189,248,0.4)] backdrop-blur-[1px]"
        >
          {/* Internal gloss reflection on bubble */}
          <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/70" />
        </motion.div>
      ))}

      {/* Water caustic light wave effect */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-sky-400/10 via-cyan-300/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
