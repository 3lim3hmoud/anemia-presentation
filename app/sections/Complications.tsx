"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { AlertTriangle, Heart, Brain, Baby, ShieldAlert, Activity } from "lucide-react"

const complications = [
  {
    icon: Heart,
    title: "Heart Problems",
    description: "Anemia can lead to rapid or irregular heartbeat as your heart pumps more blood to compensate for low oxygen. This can enlarge the heart or lead to heart failure.",
    severity: "Critical",
    color: "from-rose-500 to-red-600",
  },
  {
    icon: Baby,
    title: "Pregnancy Complications",
    description: "Pregnant women with anemia are at higher risk of premature birth, low birth weight, and postpartum depression. Can affect fetal development.",
    severity: "High",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Brain,
    title: "Developmental Issues",
    description: "In children, anemia can cause delayed growth and development, learning difficulties, and increased susceptibility to infections.",
    severity: "High",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: ShieldAlert,
    title: "Weakened Immunity",
    description: "Chronic anemia compromises the immune system, making you more vulnerable to infections and reducing your ability to fight diseases.",
    severity: "Moderate",
    color: "from-medical-500 to-blue-600",
  },
  {
    icon: Activity,
    title: "Chronic Fatigue",
    description: "Severe fatigue affects quality of life, work performance, mental health, and can lead to depression and social isolation.",
    severity: "Moderate",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: AlertTriangle,
    title: "Death",
    description: "Severe untreated anemia, especially in children and pregnant women in developing countries, can be life-threatening.",
    severity: "Critical",
    color: "from-blood-500 to-rose-700",
  },
]

export default function Complications() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="complications"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden bg-[#020202]"
    >
      {/* Darker, more serious tone */}
      <div className="absolute inset-0">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blood-900/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-900/10 rounded-full blur-[150px]" />
        </motion.div>
      </div>

      {/* Warning stripe pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blood-600 via-amber-500 to-blood-600" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blood-500/10 border border-blood-500/20 mb-6"
          >
            <AlertTriangle className="w-4 h-4 text-blood-400" />
            <span className="text-xs font-medium text-blood-400 tracking-wider uppercase">Serious Risks</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <TextReveal text="When Left" />
            <br />
            <TextReveal text="Untreated" delay={0.3} className="text-gradient" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/40 max-w-2xl mx-auto text-lg"
          >
            Anemia is not just about feeling tired. Untreated, it can lead to severe, life-altering complications
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complications.map((comp, i) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              {/* Severity badge */}
              <div className={`absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                comp.severity === "Critical" ? "bg-blood-500/20 text-blood-400" :
                comp.severity === "High" ? "bg-amber-500/20 text-amber-400" :
                "bg-white/10 text-white/50"
              }`}>
                {comp.severity}
              </div>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${comp.color} flex items-center justify-center mb-6`}>
                <comp.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{comp.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{comp.description}</p>

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
