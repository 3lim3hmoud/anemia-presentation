"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { Search, FlaskConical, Microscope, FileText, ClipboardCheck, ChevronRight } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Medical History",
    description: "Doctor reviews symptoms, diet, family history, and medications. Physical examination checks for pale skin, rapid heartbeat, and enlarged spleen.",
    duration: "15-30 min",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "CBC Blood Test",
    description: "Complete Blood Count measures hemoglobin, hematocrit, and red blood cell indices. The primary diagnostic tool for anemia.",
    duration: "Same day",
  },
  {
    icon: Microscope,
    step: "03",
    title: "Blood Smear",
    description: "Microscopic examination of blood cells reveals size, shape, and color abnormalities that indicate specific anemia types.",
    duration: "1-2 days",
  },
  {
    icon: FileText,
    step: "04",
    title: "Iron Studies",
    description: "Tests for serum ferritin, iron, TIBC, and transferrin saturation determine iron deficiency and storage levels.",
    duration: "1-2 days",
  },
  {
    icon: Search,
    step: "05",
    title: "Further Testing",
    description: "B12/folate levels, bone marrow biopsy, or genetic testing may be needed to identify the exact cause and type.",
    duration: "3-7 days",
  },
]

export default function Diagnosis() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])

  return (
    <section
      id="diagnosis"
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-[#080505] to-[#050508]"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blood-600/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Detection Process
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <TextReveal text="How is it" />
            <br />
            <TextReveal text="Diagnosed?" delay={0.3} className="text-gradient" />
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blood-500 to-blood-700"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-6 md:p-8 inline-block text-left max-w-md"
                  >
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blood-500 to-blood-700 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-4xl font-bold text-white/10">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 text-xs text-blood-400">
                      <ChevronRight className="w-3 h-3" />
                      <span>Results: {step.duration}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blood-500 border-4 border-[#050508] z-10 mt-6">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blood-400"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
