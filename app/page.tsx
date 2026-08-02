"use client"

import SmoothScroll from "./components/SmoothScroll"
import Navigation from "./components/Navigation"
import Spotlight from "./components/Spotlight"
import CinematicOpening from "./sections/CinematicOpening"
import Hero from "./sections/Hero"
import WhatIsAnemia from "./sections/WhatIsAnemia"
import BloodComponents from "./sections/BloodComponents"
import TypesOfAnemia from "./sections/TypesOfAnemia"
import Causes from "./sections/Causes"
import RiskFactors from "./sections/RiskFactors"
import Symptoms from "./sections/Symptoms"
import Diagnosis from "./sections/Diagnosis"
import Treatment from "./sections/Treatment"
import Complications from "./sections/Complications"
import Prevention from "./sections/Prevention"
import Quiz from "./sections/Quiz"
import References from "./sections/References"
import ThankYou from "./sections/ThankYou"

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <Spotlight />
      <main>
        <CinematicOpening />
        <Hero />
        <WhatIsAnemia />
        <BloodComponents />
        <TypesOfAnemia />
        <Causes />
        <RiskFactors />
        <Symptoms />
        <Diagnosis />
        <Treatment />
        <Complications />
        <Prevention />
        <Quiz />
        <References />
        <ThankYou />
      </main>
    </SmoothScroll>
  )
}
