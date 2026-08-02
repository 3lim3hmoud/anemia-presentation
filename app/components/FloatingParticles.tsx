"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function FloatingParticles({ count = 20, color = "blood" }: { count?: number; color?: "blood" | "gold" | "white" }) {
  const particles = useRef<Particle[]>([])

  useEffect(() => {
    particles.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  }, [count])

  const colorClass = color === "blood" ? "bg-blood-500" : color === "gold" ? "bg-amber-400" : "bg-white"

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.current.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${colorClass}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
