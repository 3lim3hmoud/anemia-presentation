"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { Droplets, Circle, Atom, Zap } from "lucide-react"

const components = [
  {
    id: "rbc",
    icon: Circle,
    title: "Red Blood Cells",
    subtitle: "Erythrocytes",
    description: "The most abundant cells in blood, responsible for transporting oxygen from lungs to tissues and carbon dioxide back.",
    details: [
      { label: "Lifespan", value: "120 days" },
      { label: "Production", value: "2 million/sec" },
      { label: "Diameter", value: "6-8 µm" },
    ],
    color: "from-blood-500 to-blood-700",
    glow: "shadow-blood-500/30",
  },
  {
    id: "hemoglobin",
    icon: Droplets,
    title: "Hemoglobin",
    subtitle: "Hgb / Hb",
    description: "The iron-rich protein inside RBCs that binds oxygen molecules. Each RBC contains about 270 million hemoglobin molecules.",
    details: [
      { label: "Normal Range", value: "12-16 g/dL" },
      { label: "Structure", value: "4 heme groups" },
      { label: "Iron Content", value: "4 atoms/molecule" },
    ],
    color: "from-rose-500 to-blood-600",
    glow: "shadow-rose-500/30",
  },
  {
    id: "iron",
    icon: Atom,
    title: "Iron",
    subtitle: "Fe",
    description: "Essential mineral for hemoglobin synthesis. The body recycles iron from old RBCs, but dietary intake is crucial.",
    details: [
      { label: "Daily Need", value: "8-18 mg" },
      { label: "Storage", value: "Ferritin" },
      { label: "Absorption", value: "Duodenum" },
    ],
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/30",
  },
  {
    id: "oxygen",
    icon: Zap,
    title: "Oxygen",
    subtitle: "O₂",
    description: "The vital gas that fuels cellular respiration. Without adequate oxygen delivery, every organ system suffers.",
    details: [
      { label: "Blood Content", value: "20 mL/dL" },
      { label: "Saturation", value: "95-100%" },
      { label: "Binding", value: "Reversible" },
    ],
    color: "from-medical-400 to-medical-600",
    glow: "shadow-medical-500/30",
  },
]

export default function BloodComponents() {
  const [active, setActive] = useState("rbc")
  const activeComponent = components.find((c) => c.id === active)!

  return (
    <section
      id="blood"
      className="relative min-h-screen py-32 overflow-hidden bg-[#080505]"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            The Building Blocks
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <TextReveal text="Blood Components" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-white/50 max-w-2xl mx-auto text-lg"
          >
            Understanding what makes up your blood is the first step to understanding anemia
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Selector */}
          <div className="lg:col-span-4 space-y-3">
            {components.map((comp, i) => (
              <motion.button
                key={comp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(comp.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-500 group ${
                  active === comp.id
                    ? "glass-strong glow-blood"
                    : "glass hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <comp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold transition-colors ${active === comp.id ? "text-white" : "text-white/70"}`}>
                      {comp.title}
                    </h3>
                    <p className="text-xs text-white/40">{comp.subtitle}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                {/* Background glow */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${activeComponent.color} opacity-10 blur-3xl`} />

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeComponent.color} flex items-center justify-center shrink-0`}
                    >
                      <activeComponent.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{activeComponent.title}</h3>
                      <p className="text-white/60 text-lg leading-relaxed">{activeComponent.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {activeComponent.details.map((detail, i) => (
                      <motion.div
                        key={detail.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="p-5 rounded-2xl bg-white/5 border border-white/5"
                      >
                        <div className="text-xs text-white/40 uppercase tracking-wider mb-2">{detail.label}</div>
                        <div className="text-xl font-bold text-gradient">{detail.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Visual representation */}
                  <motion.div
                    className="mt-8 h-2 rounded-full bg-white/5 overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{ originX: 0 }}
                  >
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${activeComponent.color}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                    />
                  </motion.div>
                  <div className="flex justify-between mt-2 text-xs text-white/30">
                    <span>Normal Function</span>
                    <span>75% Efficiency</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
