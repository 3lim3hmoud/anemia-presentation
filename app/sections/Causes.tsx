"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { Utensils, Droplets, Pill, Dna, Heart, Stethoscope } from "lucide-react"

const causes = [
  {
    id: "diet",
    icon: Utensils,
    title: "Poor Diet",
    description: "Inadequate intake of iron, vitamin B12, and folate through nutrition is the leading cause of anemia worldwide.",
    points: ["Low iron foods", "Vegetarian/Vegan diets without planning", "Malnutrition", "Eating disorders"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "blood-loss",
    icon: Droplets,
    title: "Blood Loss",
    description: "Chronic blood loss depletes iron stores faster than they can be replaced, leading to iron deficiency anemia.",
    points: ["Heavy menstrual periods", "GI bleeding (ulcers, polyps)", "Frequent blood donation", "Surgery or trauma"],
    color: "from-blood-500 to-rose-700",
  },
  {
    id: "absorption",
    icon: Pill,
    title: "Poor Absorption",
    description: "Even with adequate intake, certain conditions prevent the body from absorbing essential nutrients.",
    points: ["Celiac disease", "Crohn's disease", "Gastric bypass surgery", "Low stomach acid"],
    color: "from-medical-500 to-blue-700",
  },
  {
    id: "genetic",
    icon: Dna,
    title: "Genetic Factors",
    description: "Inherited conditions affect hemoglobin structure or red blood cell production and survival.",
    points: ["Sickle cell trait", "Thalassemia", "G6PD deficiency", "Hereditary spherocytosis"],
    color: "from-purple-500 to-indigo-700",
  },
  {
    id: "chronic",
    icon: Heart,
    title: "Chronic Diseases",
    description: "Long-term illnesses can interfere with red blood cell production or increase destruction.",
    points: ["Chronic kidney disease", "Rheumatoid arthritis", "Cancer", "HIV/AIDS"],
    color: "from-rose-500 to-pink-700",
  },
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical Treatments",
    description: "Certain medications and therapies can suppress bone marrow or cause nutrient depletion.",
    points: ["Chemotherapy", "Radiation therapy", "Antibiotics (long-term)", "Anticoagulants"],
    color: "from-emerald-500 to-teal-700",
  },
]

export default function Causes() {
  const [activeCause, setActiveCause] = useState<string | null>(null)

  return (
    <section
      id="causes"
      className="relative min-h-screen py-32 overflow-hidden bg-[#050508]"
    >
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blood-600/5 rounded-full blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Root Causes
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <TextReveal text="What Causes" />
            <br />
            <TextReveal text="Anemia?" delay={0.3} className="text-gradient" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cause cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {causes.map((cause, i) => (
              <motion.button
                key={cause.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onClick={() => setActiveCause(activeCause === cause.id ? null : cause.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-500 ${
                  activeCause === cause.id
                    ? "glass-strong glow-blood scale-[1.02]"
                    : "glass hover:bg-white/5"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cause.color} flex items-center justify-center mb-4`}>
                  <cause.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{cause.title}</h3>
                <p className="text-sm text-white/50 line-clamp-2">{cause.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-32 h-fit">
            <AnimatePresence mode="wait">
              {activeCause ? (
                <motion.div
                  key={activeCause}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="glass-strong rounded-3xl p-8"
                >
                  {(() => {
                    const cause = causes.find((c) => c.id === activeCause)!
                    return (
                      <>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cause.color} flex items-center justify-center mb-6`}>
                          <cause.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{cause.title}</h3>
                        <p className="text-white/60 mb-8 leading-relaxed">{cause.description}</p>
                        <div className="space-y-3">
                          <span className="text-xs text-white/40 uppercase tracking-wider">Common Examples</span>
                          {cause.points.map((point, i) => (
                            <motion.div
                              key={point}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cause.color}`} />
                              <span className="text-sm text-white/70">{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    )
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Stethoscope className="w-10 h-10 text-white/20" />
                  </div>
                  <h3 className="text-xl font-semibold text-white/40 mb-2">Select a Cause</h3>
                  <p className="text-white/30 text-sm max-w-xs">
                    Click on any cause card to explore detailed information about its mechanisms and examples
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
