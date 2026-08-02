"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import MagneticButton from "../components/MagneticButton"

export default function ThankYou() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section
      id="thank-you"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202]"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-24 h-24 mx-auto mb-10 rounded-full bg-gradient-to-br from-blood-400 to-blood-700 flex items-center justify-center glow-blood"
        >
          <Heart className="w-12 h-12 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">Thank You</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-white/50 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Understanding anemia is the first step toward better health. Stay informed, get screened, and take care of your blood.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <MagneticButton
            onClick={scrollToTop}
            className="group px-8 py-4 glass hover:bg-white/10 rounded-full font-medium transition-all flex items-center gap-2"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </MagneticButton>

          <p className="text-xs text-white/20 tracking-wider uppercase">
            Built with care for global health awareness
          </p>
        </motion.div>
      </div>
    </section>
  )
}
