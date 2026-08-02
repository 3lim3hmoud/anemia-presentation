"use client"

import { motion } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { Apple, Beef, Pill, GlassWater, Dumbbell, HeartPulse, Sun, Clock } from "lucide-react"

const tips = [
  {
    icon: Beef,
    title: "Eat Iron-Rich Foods",
    description: "Include red meat, poultry, lentils, beans, and fortified cereals in your daily diet.",
    color: "from-blood-500 to-rose-600",
  },
  {
    icon: Apple,
    title: "Vitamin C Pairing",
    description: "Consume vitamin C-rich foods with iron meals to enhance absorption by up to 300%.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: GlassWater,
    title: "Stay Hydrated",
    description: "Proper hydration supports blood volume and circulation, aiding oxygen transport.",
    color: "from-medical-400 to-blue-600",
  },
  {
    icon: Pill,
    title: "Consider Supplements",
    description: "If at risk, talk to your doctor about preventive iron or multivitamin supplements.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Dumbbell,
    title: "Regular Exercise",
    description: "Moderate exercise stimulates red blood cell production and improves circulation.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: HeartPulse,
    title: "Regular Screening",
    description: "Get routine blood tests, especially if you're in a high-risk group.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Sun,
    title: "Avoid Inhibitors",
    description: "Limit tea, coffee, and calcium-rich foods around iron-rich meals.",
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: Clock,
    title: "Manage Chronic Conditions",
    description: "Control underlying diseases like CKD, IBD, or infections that can cause anemia.",
    color: "from-teal-500 to-cyan-600",
  },
]

export default function Prevention() {
  return (
    <section
      id="prevention"
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-[#020202] to-[#050505]"
    >
      {/* Optimistic, brighter feel */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Proactive Health
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <TextReveal text="Prevention" />
            <br />
            <TextReveal text="Strategies" delay={0.3} className="text-gradient" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Anemia is largely preventable with simple lifestyle changes and awareness
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass rounded-2xl p-6 text-center relative overflow-hidden"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tip.color} flex items-center justify-center mx-auto mb-5`}
              >
                <tip.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="font-semibold mb-3">{tip.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{tip.description}</p>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tip.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl mx-auto glow-blood">
            <HeartPulse className="w-10 h-10 text-blood-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Early Detection Saves Lives</h3>
            <p className="text-white/50 mb-6">
              Regular screening and awareness are your best defenses against anemia and its complications.
            </p>
            <button className="px-8 py-3 bg-blood-600 hover:bg-blood-500 text-white rounded-full font-medium transition-all glow-blood">
              Schedule a Checkup
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
