"use client"

import { motion } from "framer-motion"
import { cn } from "../lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  delay?: number
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        hover
          ? { y: -8, transition: { duration: 0.3 } }
          : undefined
      }
      className={cn(
        "glass rounded-2xl p-6 md:p-8 relative overflow-hidden group",
        glow && "glow-blood",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blood-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
