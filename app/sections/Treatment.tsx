"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { Pill, Apple, Syringe, HeartPulse, Shield, Clock } from "lucide-react"

const treatments = [
  {
    id: "supplements",
    icon: Pill,
    title: "Iron Supplements",
    subtitle: "First-line treatment",
    description: "Oral iron supplements (ferrous sulfate) are the most common treatment. Best absorbed on an empty stomach with vitamin C.",
    details: [
      "Ferrous sulfate 325mg daily",
      "Take with orange juice or vitamin C",
      "Avoid tea, coffee, or calcium within 2 hours",
      "Side effects: constipation, nausea, dark stools",
    ],
    duration: "3-6 months",
    color: "from-blood-500 to-rose-600",
  },
  {
    id: "diet",
    icon: Apple,
    title: "Dietary Changes",
    subtitle: "Long-term management",
    description: "Increasing iron-rich foods and combining them with absorption enhancers while avoiding inhibitors.",
    details: [
      "Red meat, spinach, lentils, beans",
      "Fortified cereals and grains",
      "Vitamin C-rich foods with meals",
      "Limit tea and coffee consumption",
    ],
    duration: "Ongoing",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "iv",
    icon: Syringe,
    title: "IV Iron Therapy",
    subtitle: "Severe cases",
    description: "Intravenous iron for those who cannot absorb oral iron, have severe deficiency, or need rapid correction.",
    details: [
      "Iron sucrose or ferric carboxymaltose",
      "Administered in clinic/hospital",
      "Multiple sessions over weeks",
      "Risk of allergic reactions monitored",
    ],
    duration: "2-4 weeks",
    color: "from-medical-500 to-blue-600",
  },
  {
    id: "transfusion",
    icon: HeartPulse,
    title: "Blood Transfusion",
    subtitle: "Emergency only",
    description: "Reserved for severe, life-threatening anemia or acute blood loss when rapid hemoglobin increase is critical.",
    details: [
      "Packed red blood cells (PRBC)",
      "Hemoglobin < 7 g/dL threshold",
      "Risk of reactions and iron overload",
      "Temporary solution, not a cure",
    ],
    duration: "Immediate",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "underlying",
    icon: Shield,
    title: "Treat Underlying Cause",
    subtitle: "Essential for cure",
    description: "Addressing the root cause—whether it's bleeding, malabsorption, or chronic disease—is essential for permanent resolution.",
    details: [
      "GI endoscopy for bleeding sources",
      "Hormonal therapy for heavy periods",
      "Antiparasitic treatment for hookworm",
      "Manage chronic diseases",
    ],
    duration: "Varies",
    color: "from-purple-500 to-indigo-600",
  },
]

export default function Treatment() {
  const [activeTreatment, setActiveTreatment] = useState(0)

  return (
    <section
      id="treatment"
      className="relative min-h-screen py-32 overflow-hidden bg-[#050508]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blood-950/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Management
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <TextReveal text="Treatment" />
            <br />
            <TextReveal text="Options" delay={0.3} className="text-gradient" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Treatment selector */}
          <div className="lg:col-span-4 space-y-3">
            {treatments.map((t, i) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveTreatment(i)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-500 ${
                  activeTreatment === i
                    ? "glass-strong glow-blood"
                    : "glass hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0`}>
                    <t.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${activeTreatment === i ? "text-white" : "text-white/70"}`}>
                      {t.title}
                    </h3>
                    <p className="text-xs text-white/40">{t.subtitle}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTreatment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
              >
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${treatments[activeTreatment].color} opacity-10 blur-3xl`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${treatments[activeTreatment].color} flex items-center justify-center`}>
                        {(() => {
                          const Icon = treatments[activeTreatment].icon
                          return <Icon className="w-8 h-8 text-white" />
                        })()}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{treatments[activeTreatment].title}</h3>
                        <p className="text-white/50">{treatments[activeTreatment].subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                      <Clock className="w-4 h-4 text-white/40" />
                      <span className="text-sm text-white/60">{treatments[activeTreatment].duration}</span>
                    </div>
                  </div>

                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    {treatments[activeTreatment].description}
                  </p>

                  <div className="space-y-3">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Key Points</span>
                    {treatments[activeTreatment].details.map((detail, i) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white/5"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${treatments[activeTreatment].color}`} />
                        <span className="text-sm text-white/70">{detail}</span>
                      </motion.div>
                    ))}
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
