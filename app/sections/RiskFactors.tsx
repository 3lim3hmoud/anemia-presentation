"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "../components/TextReveal"
import AnimatedCounter from "../components/AnimatedCounter"
import { Users, Baby, Clock, Vegan, HeartPulse, Pill } from "lucide-react"

const riskFactors = [
  { icon: Users, label: "Women of childbearing age", risk: "High", percent: 35, color: "bg-blood-500" },
  { icon: Baby, label: "Children under 5", risk: "Very High", percent: 42, color: "bg-amber-500" },
  { icon: Clock, label: "Adults over 65", risk: "Moderate", percent: 18, color: "bg-medical-500" },
  { icon: Vegan, label: "Vegetarians/Vegans", risk: "Moderate", percent: 25, color: "bg-emerald-500" },
  { icon: HeartPulse, label: "Chronic disease patients", risk: "High", percent: 55, color: "bg-rose-500" },
  { icon: Pill, label: "Pregnant women", risk: "Very High", percent: 50, color: "bg-purple-500" },
]

export default function RiskFactors() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section
      id="risk"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-[#050508] to-[#080505]"
    >
      {/* Parallax background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Vulnerability
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <TextReveal text="Who is at Risk?" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Certain populations face significantly higher risks of developing anemia
          </motion.p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: 42, suffix: "%", label: "Children under 5" },
            { value: 50, suffix: "%", label: "Pregnant women" },
            { value: 30, suffix: "%", label: "Women 15-49" },
            { value: 1.6, suffix: "B", label: "People globally" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                <AnimatedCounter end={stat.value * 10} duration={2} suffix={stat.suffix} prefix="" />
              </div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Risk factor cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskFactors.map((factor, i) => (
            <motion.div
              key={factor.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <factor.icon className="w-6 h-6 text-white/60" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${factor.color} bg-opacity-20 text-white`}>
                  {factor.risk} Risk
                </span>
              </div>
              <h3 className="font-semibold mb-3">{factor.label}</h3>
              <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 rounded-full ${factor.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${factor.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-white/30">Prevalence</span>
                <span className="text-xs text-white/50">{factor.percent}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
