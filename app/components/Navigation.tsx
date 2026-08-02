"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useScrollProgress } from "../hooks/useScrollProgress"
import { Droplets, Menu, X } from "lucide-react"

const sections = [
  { id: "opening", label: "Start" },
  { id: "hero", label: "Overview" },
  { id: "what-is", label: "What is Anemia" },
  { id: "blood", label: "Blood" },
  { id: "types", label: "Types" },
  { id: "causes", label: "Causes" },
  { id: "risk", label: "Risk" },
  { id: "symptoms", label: "Symptoms" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "complications", label: "Complications" },
  { id: "prevention", label: "Prevention" },
  { id: "quiz", label: "Quiz" },
  { id: "references", label: "References" },
]

export default function Navigation() {
  const progress = useScrollProgress()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setScrolled(progress > 0.02)
  }, [progress])

  const scrollTo = (id: string) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong py-3" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo("opening")} className="flex items-center gap-2 group">
            <div className="relative">
              <Droplets className="w-6 h-6 text-blood-500 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-blood-500/30 blur-lg rounded-full" />
            </div>
            <span className="font-semibold text-sm tracking-wider uppercase">Anemia</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {sections.slice(0, 8).map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="px-3 py-1.5 text-xs font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {s.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-[1px] bg-white/10 w-full">
          <motion.div
            className="h-full bg-gradient-to-r from-blood-500 to-blood-400"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4">
              {sections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(s.id)}
                  className="text-2xl font-light text-white/80 hover:text-blood-400 transition-colors"
                >
                  {s.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
