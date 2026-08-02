"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { Battery, Zap, Heart, Brain, Thermometer, Eye, Activity, Moon } from "lucide-react"

const symptoms = [
  {
    icon: Battery,
    title: "Fatigue",
    severity: "Very Common",
    description: "Overwhelming tiredness that doesn't improve with rest. The most reported symptom affecting daily activities.",
    bodyPart: "Whole Body",
    color: "from-blood-500 to-rose-600",
  },
  {
    icon: Zap,
    title: "Weakness",
    severity: "Very Common",
    description: "Muscle weakness and reduced physical capacity. Simple tasks like climbing stairs become exhausting.",
    bodyPart: "Muscles",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Heart,
    title: "Palpitations",
    severity: "Common",
    description: "Rapid or irregular heartbeat as the heart works harder to deliver oxygen to tissues.",
    bodyPart: "Heart",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Brain,
    title: "Brain Fog",
    severity: "Common",
    description: "Difficulty concentrating, memory problems, and reduced cognitive function due to oxygen deprivation.",
    bodyPart: "Brain",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Moon,
    title: "Pale Skin",
    severity: "Common",
    description: "Loss of healthy red color in skin, lips, and nail beds due to reduced hemoglobin.",
    bodyPart: "Skin",
    color: "from-medical-400 to-blue-600",
  },
  {
    icon: Thermometer,
    title: "Cold Extremities",
    severity: "Moderate",
    description: "Hands and feet feel cold as the body prioritizes blood flow to vital organs.",
    bodyPart: "Extremities",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Eye,
    title: "Dizziness",
    severity: "Moderate",
    description: "Lightheadedness, especially when standing up quickly, due to reduced oxygen to the brain.",
    bodyPart: "Head",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Activity,
    title: "Shortness of Breath",
    severity: "Common",
    description: "Difficulty breathing during mild exertion as the body tries to compensate for low oxygen.",
    bodyPart: "Lungs",
    color: "from-blood-400 to-red-600",
  },
]

export default function Symptoms() {
  const [selectedSymptom, setSelectedSymptom] = useState(0)

  return (
    <section
      id="symptoms"
      className="relative min-h-screen py-32 overflow-hidden bg-[#080505]"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Warning Signs
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <TextReveal text="Recognize the" />
            <br />
            <TextReveal text="Symptoms" delay={0.3} className="text-gradient" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Symptom list */}
          <div className="lg:col-span-5 space-y-3">
            {symptoms.map((symptom, i) => (
              <motion.button
                key={symptom.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedSymptom(i)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                  selectedSymptom === i
                    ? "glass-strong glow-blood"
                    : "glass hover:bg-white/5"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${symptom.color} flex items-center justify-center shrink-0`}>
                  <symptom.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${selectedSymptom === i ? "text-white" : "text-white/70"}`}>
                      {symptom.title}
                    </span>
                    <span className="text-xs text-white/40">{symptom.severity}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSymptom}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-strong rounded-3xl p-8 md:p-12 h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden"
              >
                {/* Background effect */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${symptoms[selectedSymptom].color} opacity-10 blur-3xl`} />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${symptoms[selectedSymptom].color} flex items-center justify-center mb-8`}
                  >
                    {(() => {
                      const Icon = symptoms[selectedSymptom].icon
                      return <Icon className="w-10 h-10 text-white" />
                    })()}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-3xl font-bold">{symptoms[selectedSymptom].title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/60">
                        {symptoms[selectedSymptom].bodyPart}
                      </span>
                    </div>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {symptoms[selectedSymptom].description}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${symptoms[selectedSymptom].color}`}
                          initial={{ width: 0 }}
                          animate={{ width: symptoms[selectedSymptom].severity === "Very Common" ? "90%" : symptoms[selectedSymptom].severity === "Common" ? "70%" : "50%" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-sm text-white/40 shrink-0">{symptoms[selectedSymptom].severity}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
