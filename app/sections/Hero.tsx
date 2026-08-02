"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TextReveal from "../components/TextReveal"
import BloodCell from "../components/BloodCell"
import FloatingParticles from "../components/FloatingParticles"
import { ArrowRight, Activity, Heart, Brain } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background elements */}
      <FloatingParticles count={30} color="blood" />

      {/* Blood cells floating */}
      <BloodCell size={80} x="10%" y="20%" delay={0} />
      <BloodCell size={50} x="80%" y="15%" delay={1.5} />
      <BloodCell size={100} x="70%" y="70%" delay={3} />
      <BloodCell size={40} x="20%" y="75%" delay={2} />
      <BloodCell size={65} x="50%" y="85%" delay={4} />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blood-600/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blood-800/10 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blood-500 animate-pulse" />
              <span className="text-xs font-medium text-white/70 tracking-wider uppercase">Global Health Priority</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <TextReveal text="The Silent" delay={0.2} />
              <br />
              <TextReveal text="Epidemic" delay={0.5} className="text-gradient" />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-lg"
            >
              Anemia is more than just feeling tired. It is a complex blood disorder that
              silently undermines the health of billions, yet remains widely misunderstood.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group px-8 py-4 bg-blood-600 hover:bg-blood-500 text-white rounded-full font-medium transition-all flex items-center gap-2 glow-blood">
                Explore the Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-medium transition-all">
                Learn More
              </button>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main stat card */}
              <div className="glass-strong rounded-3xl p-8 glow-blood relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blood-500/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blood-500/20 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-blood-400" />
                    </div>
                    <span className="text-sm text-white/60 font-medium">Global Impact</span>
                  </div>

                  <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">1.6B</div>
                  <p className="text-white/50 text-sm mb-8">People affected worldwide</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5">
                      <Heart className="w-5 h-5 text-blood-400 mb-2" />
                      <div className="text-2xl font-bold text-white">24%</div>
                      <div className="text-xs text-white/40">of global population</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5">
                      <Brain className="w-5 h-5 text-amber-400 mb-2" />
                      <div className="text-2xl font-bold text-white">40%</div>
                      <div className="text-xs text-white/40">are children</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              <motion.div
                className="absolute -top-6 -right-6 glass rounded-2xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-white/40 mb-1">Iron Deficiency</div>
                <div className="text-lg font-bold text-blood-400">50% of cases</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs text-white/40 mb-1">Women affected</div>
                <div className="text-lg font-bold text-amber-400">30% globally</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
