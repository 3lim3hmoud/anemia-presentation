"use client"

import { motion } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { BookOpen, ExternalLink } from "lucide-react"

const references = [
  {
    title: "World Health Organization - Anaemia",
    url: "https://www.who.int/health-topics/anaemia",
    description: "Global data, prevalence, and WHO strategies for anemia control.",
  },
  {
    title: "CDC - Iron Deficiency Anemia",
    url: "https://www.cdc.gov/ncbddd/irondeficiency/index.html",
    description: "Centers for Disease Control and Prevention guidelines and statistics.",
  },
  {
    title: "NIH - Anemia Overview",
    url: "https://www.nhlbi.nih.gov/health/anemia",
    description: "National Heart, Lung, and Blood Institute comprehensive resource.",
  },
  {
    title: "Mayo Clinic - Anemia",
    url: "https://www.mayoclinic.org/diseases-conditions/anemia/symptoms-causes/syc-20351361",
    description: "Symptoms, causes, diagnosis, and treatment options.",
  },
  {
    title: "The Lancet - Global Burden of Anemia",
    url: "https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(22)00101-8/fulltext",
    description: "Peer-reviewed research on worldwide anemia burden and trends.",
  },
  {
    title: "American Society of Hematology",
    url: "https://www.hematology.org/education/patients/anemia",
    description: "Professional hematology society patient education materials.",
  },
]

export default function References() {
  return (
    <section
      id="references"
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-[#050505] to-[#020202]"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Sources
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <TextReveal text="References" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/50"
          >
            Evidence-based information from trusted medical institutions
          </motion.p>
        </div>

        <div className="space-y-4">
          {references.map((ref, i) => (
            <motion.a
              key={ref.title}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              className="group flex items-start gap-4 glass rounded-2xl p-6 transition-all hover:bg-white/5"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blood-500/20 transition-colors">
                <BookOpen className="w-5 h-5 text-white/40 group-hover:text-blood-400 transition-colors" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold group-hover:text-blood-400 transition-colors">
                    {ref.title}
                  </h3>
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-blood-400 transition-colors" />
                </div>
                <p className="text-sm text-white/40">{ref.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
