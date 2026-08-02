"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TextReveal from "../components/TextReveal"
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react"

const questions = [
  {
    question: "What is the primary function of hemoglobin?",
    options: [
      "Fight infections",
      "Transport oxygen",
      "Clot blood",
      "Regulate temperature",
    ],
    correct: 1,
    explanation: "Hemoglobin binds to oxygen in the lungs and transports it to tissues throughout the body.",
  },
  {
    question: "Which nutrient deficiency is the most common cause of anemia?",
    options: ["Vitamin D", "Iron", "Calcium", "Vitamin C"],
    correct: 1,
    explanation: "Iron deficiency accounts for approximately 50% of all anemia cases worldwide.",
  },
  {
    question: "What is considered a normal hemoglobin level for adult women?",
    options: ["8-10 g/dL", "10-12 g/dL", "12-16 g/dL", "16-18 g/dL"],
    correct: 2,
    explanation: "Normal hemoglobin for women is 12-16 g/dL. For men, it's 13-17 g/dL.",
  },
  {
    question: "Which population is at highest risk for anemia?",
    options: [
      "Adult men",
      "Children under 5",
      "Elderly men",
      "Teenage boys",
    ],
    correct: 1,
    explanation: "Children under 5 have the highest prevalence at approximately 42% globally.",
  },
  {
    question: "What is the first-line treatment for iron deficiency anemia?",
    options: [
      "Blood transfusion",
      "Iron supplements",
      "Surgery",
      "Antibiotics",
    ],
    correct: 1,
    explanation: "Oral iron supplements (ferrous sulfate) are the standard first-line treatment.",
  },
]

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleSelect = (index: number) => {
    if (showResult) return
    setSelected(index)
    setShowResult(true)
    if (index === questions[current].correct) {
      setScore((s) => s + 1)
    }
  }

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
      setShowResult(false)
    } else {
      setFinished(true)
    }
  }

  const reset = () => {
    setCurrent(0)
    setSelected(null)
    setShowResult(false)
    setScore(0)
    setFinished(false)
  }

  return (
    <section
      id="quiz"
      className="relative min-h-screen py-32 overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blood-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blood-400 text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Test Your Knowledge
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <TextReveal text="Quick Quiz" />
          </h2>
        </div>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-strong rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-white/40">
                  Question {current + 1} of {questions.length}
                </span>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-1 rounded-full ${
                        i < current ? "bg-blood-500" : i === current ? "bg-blood-400" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-8">
                {questions[current].question}
              </h3>

              <div className="space-y-3">
                {questions[current].options.map((option, i) => (
                  <motion.button
                    key={option}
                    whileHover={!showResult ? { scale: 1.02 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    onClick={() => handleSelect(i)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      selected === i
                        ? i === questions[current].correct
                          ? "bg-emerald-500/20 border border-emerald-500/30"
                          : "bg-blood-500/20 border border-blood-500/30"
                        : showResult && i === questions[current].correct
                        ? "bg-emerald-500/20 border border-emerald-500/30"
                        : "glass hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          selected === i
                            ? i === questions[current].correct
                              ? "border-emerald-500 bg-emerald-500"
                              : "border-blood-500 bg-blood-500"
                            : showResult && i === questions[current].correct
                            ? "border-emerald-500 bg-emerald-500"
                            : "border-white/20"
                        }`}
                      >
                        {selected === i && i === questions[current].correct && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                        {selected === i && i !== questions[current].correct && (
                          <XCircle className="w-4 h-4 text-white" />
                        )}
                        {showResult && i === questions[current].correct && selected !== i && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="text-sm md:text-base">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 rounded-xl bg-white/5"
                  >
                    <p className="text-sm text-white/70">{questions[current].explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {showResult && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={nextQuestion}
                  className="mt-6 w-full py-4 bg-blood-600 hover:bg-blood-500 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                >
                  {current < questions.length - 1 ? "Next Question" : "See Results"}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-strong rounded-3xl p-12 text-center"
            >
              <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">Quiz Complete!</h3>
              <p className="text-white/50 mb-8">
                You scored {score} out of {questions.length}
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-24 h-24 rounded-2xl bg-white/5 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gradient">{score}</span>
                  <span className="text-xs text-white/40">Correct</span>
                </div>
                <div className="w-24 h-24 rounded-2xl bg-white/5 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-blood-400">{questions.length - score}</span>
                  <span className="text-xs text-white/40">Incorrect</span>
                </div>
              </div>
              <button
                onClick={reset}
                className="mt-8 px-8 py-3 glass hover:bg-white/10 rounded-full font-medium transition-all flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" />
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
