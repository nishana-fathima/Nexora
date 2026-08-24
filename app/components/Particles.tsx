"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 25 });

export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white/30"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}