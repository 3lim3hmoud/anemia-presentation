"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "../components/TextReveal"
import GlassCard from "../components/GlassCard"
import { Info, Droplets, AlertTriangle } from "lucide-react"

export default function WhatIsAnemia() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
    <section
      id="what-is"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0505]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            style={{ rotateX, y, perspective: 1000 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central blood drop */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-blood-400 to-blood-700 rounded-full opacity-20 blur-3xl" />
                  <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="bloodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fca5a5" />
                        <stop offset="50%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#7f1d1d" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M100 10 C100 10, 20 120, 20 160 C20 205, 55 230, 100 230 C145 230, 180 205, 180 160 C180 120, 100 10, 100 10Z"
                      fill="url(#bloodGrad)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.ellipse
                      cx="70" cy="80" rx="15" ry="8"
                      fill="rgba(255,255,255,0.3)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Orbiting info bubbles */}
              {[
                { icon: Droplets, label: "Low RBC", angle: 0, color: "text-blood-400" },
                { icon: AlertTriangle, label: "Low Oxygen", angle: 120, color: "text-amber-400" },
                { icon: Info, label: "Fatigue", angle: 240, color: "text-medical-400" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20"
                  style={{
                    top: `${50 + 35 * Math.sin((item.angle * Math.PI) / 180)}%`,
                    left: `${50 + 35 * Math.cos((item.angle * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="glass rounded-2xl p-3 flex flex-col items-center gap-1"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-[10px] text-white/60">{item.label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-blood-400 text-sm font-medium tracking-wider uppercase">Definition</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              <TextReveal text="What is" delay={0.2} />
              <br />
              <TextReveal text="Anemia?" delay={0.4} className="text-gradient" />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-white/60 leading-relaxed mb-10"
            >
              Anemia is a condition in which you lack enough healthy red blood cells to carry
              adequate oxygen to your body&apos;s tissues. Having anemia, also referred to as low
              hemoglobin, can make you feel tired and weak.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              <GlassCard delay={0.2}>
                <div className="w-10 h-10 rounded-xl bg-blood-500/20 flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5 text-blood-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Low Hemoglobin</h3>
                <p className="text-sm text-white/50">
                  Hemoglobin levels below 12 g/dL in women and 13 g/dL in men
                </p>
              </GlassCard>

              <GlassCard delay={0.4}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Oxygen Deficit</h3>
                <p className="text-sm text-white/50">
                  Insufficient oxygen transport leads to cellular hypoxia
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
