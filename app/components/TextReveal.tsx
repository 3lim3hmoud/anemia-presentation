"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  type?: "words" | "chars" | "lines"
}

export default function TextReveal({ text, className = "", delay = 0, type = "words" }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const items = type === "chars" ? text.split("") : type === "words" ? text.split(" ") : [text]

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: type === "chars" ? 0.03 : 0.12, delayChildren: delay },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: "500px" }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block mr-[0.25em]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  )
}
