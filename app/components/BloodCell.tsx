"use client"

import { motion } from "framer-motion"

interface BloodCellProps {
  size?: number
  className?: string
  delay?: number
  x?: number | string
  y?: number | string
}

export default function BloodCell({ size = 60, className = "", delay = 0, x = 0, y = 0 }: BloodCellProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: "radial-gradient(circle at 30% 30%, rgba(252, 165, 165, 0.8), rgba(220, 38, 38, 0.6), rgba(153, 27, 27, 0.8))",
        boxShadow: `0 0 ${size / 2}px rgba(220, 38, 38, 0.4), inset 0 0 ${size / 4}px rgba(252, 165, 165, 0.3)`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 0.9, 0.7],
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay + 1 },
        x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: delay + 2 },
      }}
    >
      <div
        className="absolute rounded-full bg-white/20"
        style={{
          width: size * 0.25,
          height: size * 0.15,
          top: size * 0.2,
          left: size * 0.2,
          transform: "rotate(-30deg)",
        }}
      />
    </motion.div>
  )
}
