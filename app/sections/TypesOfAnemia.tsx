"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { CircleDot, Utensils, Dna, AlertCircle, Pill, Baby } from "lucide-react"

const anemiaTypes = [
  {
    icon: Utensils,
    title: "Iron Deficiency",
    subtitle: "Most Common",
    description: "Caused by inadequate iron intake, poor absorption, or blood loss. Affects 50% of all anemia cases globally.",
    stats: "50% of cases",
    color: "bg-blood-500",
    textColor: "text-blood-400",
    borderColor: "border-blood-500/20",
  },
  {
    icon: Dna,
    title: "Vitamin Deficiency",
    subtitle: "B12 & Folate",
    description: "Results from insufficient vitamin B12 or folate, essential for RBC production. Can cause megaloblastic anemia.",
    stats: "15% of cases",
    color: "bg-amber-500",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
  {
    icon: AlertCircle,
    title: "Aplastic",
    subtitle: "Bone Marrow",
    description: "A rare but serious condition where the bone marrow fails to produce enough new blood cells of all types.",
    stats: "Rare",
    color: "bg-rose-500",
    textColor: "text-rose-400",
    borderColor: "border-rose-500/20",
  },
  {
    icon: CircleDot,
    title: "Hemolytic",
    subtitle: "RBC Destruction",
    description: "Occurs when red blood cells are destroyed faster than they can be produced. Can be inherited or acquired.",
    stats: "5% of cases",
    color: "bg-purple-500",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Pill,
    title: "Sickle Cell",
    subtitle: "Genetic Disorder",
    description: "Inherited condition causing RBCs to become rigid and sickle-shaped, leading to blockages and early destruction.",
    stats: "Genetic",
    color: "bg-indigo-500",
    textColor: "text-indigo-400",
    borderColor: "border-indigo-500/20",
  },
  {
    icon: Baby,
    title: "Anemia of Chronic Disease",
    subtitle: "Secondary",
    description: "Associated with chronic infections, inflammatory diseases, and cancer. Iron is trapped inside cells.",
    stats: "20% of cases",
    color: "bg-medical-500",
    textColor: "text-medical-400",
    borderColor: "border-medical-500/20",
  },
]

export default function TypesOfAnemia() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section
      id="types"
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-[#0a0505] to-[#050508]"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="diagonal" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" className="text-blood-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Classification
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <TextReveal text="Types of Anemia" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-white/50 max-w-2xl mx-auto text-lg"
          >
            Not all anemia is the same. Each type has unique causes, mechanisms, and treatments
          </motion.p>
        </div>

        {/* Horizontal scroll cards on mobile, grid on desktop */}
        <div ref={containerRef} className="relative">
          <motion.div style={{ x }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {anemiaTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative glass rounded-3xl p-8 border ${type.borderColor} overflow-hidden`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${type.color} bg-opacity-20 flex items-center justify-center`}>
                      <type.icon className={`w-7 h-7 ${type.textColor}`} />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-white/5 ${type.textColor}`}>
                      {type.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{type.title}</h3>
                  <p className={`text-sm ${type.textColor} mb-4`}>{type.subtitle}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{type.description}</p>

                  {/* Animated bar */}
                  <div className="mt-6 h-1 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${type.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${60 + Math.random() * 30}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
