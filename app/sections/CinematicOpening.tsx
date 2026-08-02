"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ChevronDown } from "lucide-react"

export default function CinematicOpening() {
  const [phase, setPhase] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Blood cell particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const cells: { x: number; y: number; r: number; speed: number; opacity: number; phase: number }[] = []
    for (let i = 0; i < 40; i++) {
      cells.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 15 + 5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.4 + 0.1,
        phase: Math.random() * Math.PI * 2,
      })
    }

    let animId: number
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      cells.forEach((cell) => {
        cell.y -= cell.speed
        cell.x += Math.sin(time * 0.001 + cell.phase) * 0.3
        if (cell.y < -cell.r * 2) {
          cell.y = canvas.height + cell.r * 2
          cell.x = Math.random() * canvas.width
        }

        const grad = ctx.createRadialGradient(cell.x, cell.y, 0, cell.x, cell.y, cell.r)
        grad.addColorStop(0, `rgba(252, 165, 165, ${cell.opacity})`)
        grad.addColorStop(0.5, `rgba(220, 38, 38, ${cell.opacity * 0.8})`)
        grad.addColorStop(1, `rgba(153, 27, 27, 0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.ellipse(cell.x, cell.y, cell.r, cell.r * 0.8, Math.sin(time * 0.001) * 0.2, 0, Math.PI * 2)
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  // Phase transitions
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500),
      setTimeout(() => setPhase(2), 3500),
      setTimeout(() => setPhase(3), 5500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const scrollToHero = () => {
    const el = document.getElementById("hero")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="opening"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#0a0a0a]" />

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.12) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blood cells canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      {/* Vignette */}
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-30 text-center px-6">
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="phase0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blood-400 to-blood-700 flex items-center justify-center"
                style={{ boxShadow: "0 0 60px rgba(220, 38, 38, 0.5)" }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-300 to-blood-600 animate-pulse-slow" />
              </motion.div>
            </motion.div>
          )}

          {phase === 1 && (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm md:text-base tracking-[0.4em] uppercase text-white/40 mb-4">
                A Medical Presentation
              </p>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
                <span className="text-gradient">ANEMIA</span>
              </h1>
            </motion.div>
          )}

          {phase >= 2 && (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm md:text-base tracking-[0.4em] uppercase text-white/40 mb-4">
                A Medical Presentation
              </p>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
                <span className="text-gradient">ANEMIA</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg md:text-2xl text-white/50 font-light max-w-xl mx-auto leading-relaxed"
              >
                Understanding the silent condition that affects
                <span className="text-blood-400 font-medium"> 1.6 billion </span>
                people worldwide
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {phase >= 3 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={scrollToHero}
            className="mt-16 mx-auto flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Begin Journey</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        )}
      </div>
    </section>
  )
}
