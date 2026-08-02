"use client"

import { useMousePosition } from "../hooks/useMousePosition"
import { motion } from "framer-motion"

export default function Spotlight({ className = "" }: { className?: string }) {
  const { x, y } = useMousePosition()

  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${className}`}
      animate={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(220, 38, 38, 0.06), transparent 40%)`,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  )
}
